import logging
from datetime import datetime, timedelta
from typing import List, Optional
from pathlib import Path
import json

from fastapi import FastAPI, HTTPException, Depends, status, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.responses import JSONResponse, FileResponse
from pydantic import BaseModel, EmailStr
from sqlalchemy import create_engine, Column, Integer, String, Float, Boolean, DateTime, Text, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session, relationship
import aiosqlite
from jose import JWTError, jwt
from passlib.context import CryptContext
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configuration
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key-here")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Database setup
SQLALCHEMY_DATABASE_URL = "sqlite:///./smmmarket.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Security
security = HTTPBearer()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# FastAPI app
app = FastAPI(title="SMM Market API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Database Models
class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    telegram_id = Column(String, unique=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    full_name = Column(String)
    phone = Column(String)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    is_admin = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    orders = relationship("Order", back_populates="user")
    payments = relationship("Payment", back_populates="user")

class Category(Base):
    __tablename__ = "categories"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    icon = Column(String)
    description = Column(Text)
    is_active = Column(Boolean, default=True)
    
    services = relationship("Service", back_populates="category")

class Service(Base):
    __tablename__ = "services"
    
    id = Column(Integer, primary_key=True, index=True)
    category_id = Column(Integer, ForeignKey("categories.id"))
    name = Column(String, index=True)
    description = Column(Text)
    price = Column(Float)
    original_price = Column(Float, nullable=True)
    currency = Column(String, default="UZS")
    features = Column(Text)  # JSON string
    badge = Column(String)
    emoji = Column(String, nullable=True)
    is_active = Column(Boolean, default=True)
    min_quantity = Column(Integer, default=1)
    max_quantity = Column(Integer, default=1000000)
    
    category = relationship("Category", back_populates="services")
    order_items = relationship("OrderItem", back_populates="service")

class Order(Base):
    __tablename__ = "orders"
    
    id = Column(Integer, primary_key=True, index=True)
    order_number = Column(String, unique=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    total_amount = Column(Float)
    currency = Column(String, default="UZS")
    status = Column(String, default="pending")  # pending, processing, completed, cancelled
    payment_method = Column(String)
    payment_status = Column(String, default="unpaid")  # unpaid, paid, failed
    admin_notes = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    user = relationship("User", back_populates="orders")
    items = relationship("OrderItem", back_populates="order")
    payment = relationship("Payment", uselist=False, back_populates="order")

class OrderItem(Base):
    __tablename__ = "order_items"
    
    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"))
    service_id = Column(Integer, ForeignKey("services.id"))
    quantity = Column(Integer, default=1)
    unit_price = Column(Float)
    total_price = Column(Float)
    
    order = relationship("Order", back_populates="items")
    service = relationship("Service", back_populates="order_items")

class Payment(Base):
    __tablename__ = "payments"
    
    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"))
    user_id = Column(Integer, ForeignKey("users.id"))
    amount = Column(Float)
    currency = Column(String, default="UZS")
    payment_method = Column(String)
    transaction_id = Column(String, unique=True, index=True)
    receipt_image = Column(String, nullable=True)  # File path
    status = Column(String, default="pending")  # pending, verified, rejected
    verified_by = Column(Integer, ForeignKey("users.id"), nullable=True)
    verified_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    user = relationship("User", back_populates="payments")
    order = relationship("Order", back_populates="payment")
    verifier = relationship("User", foreign_keys=[verified_by])

class AdminNotification(Base):
    __tablename__ = "admin_notifications"
    
    id = Column(Integer, primary_key=True, index=True)
    type = Column(String)  # new_order, new_payment, user_registered, etc.
    title = Column(String)
    message = Column(Text)
    data = Column(Text)  # JSON string
    is_read = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)

# Create tables
Base.metadata.create_all(bind=engine)

# Pydantic Models
class UserCreate(BaseModel):
    telegram_id: Optional[str] = None
    username: Optional[str] = None
    email: Optional[EmailStr] = None
    full_name: str
    phone: Optional[str] = None
    password: str

class UserLogin(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class ServiceCreate(BaseModel):
    category_id: int
    name: str
    description: str
    price: float
    original_price: Optional[float] = None
    currency: str = "UZS"
    features: Optional[List[str]] = None
    badge: Optional[str] = None
    emoji: Optional[str] = None
    min_quantity: int = 1
    max_quantity: int = 1000000

class OrderCreate(BaseModel):
    items: List[dict]
    payment_method: str

class PaymentCreate(BaseModel):
    order_id: int
    payment_method: str
    transaction_id: str
    amount: float

class TelegramOrderData(BaseModel):
    user_id: str
    user_name: str
    user_phone: Optional[str] = None
    service_name: str
    service_price: float
    quantity: int = 1

# Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Authentication functions
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        token = credentials.credentials
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    
    user = db.query(User).filter(User.username == token_data.username).first()
    if user is None:
        raise credentials_exception
    return user

async def get_current_active_user(current_user: User = Depends(get_current_user)):
    if not current_user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

async def get_current_admin_user(current_user: User = Depends(get_current_user)):
    if not current_user.is_admin:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    return current_user

# Initialize sample data
def initialize_sample_data(db: Session):
    # Create admin user if not exists
    admin = db.query(User).filter(User.username == "admin").first()
    if not admin:
        admin_user = User(
            username="admin",
            email="admin@smmmarket.uz",
            full_name="Administrator",
            hashed_password=get_password_hash("admin123"),
            is_admin=True
        )
        db.add(admin_user)
        db.commit()
    
    # Create categories if not exist
    categories_data = [
        {"name": "Telegram", "icon": "fab fa-telegram", "description": "Telegram xizmatlari"},
        {"name": "Instagram", "icon": "fab fa-instagram", "description": "Instagram xizmatlari"},
        {"name": "PUBG UC", "icon": "fas fa-gamepad", "description": "PUBG UC xizmatlari"},
    ]
    
    for cat_data in categories_data:
        category = db.query(Category).filter(Category.name == cat_data["name"]).first()
        if not category:
            category = Category(**cat_data)
            db.add(category)
    
    db.commit()
    
    # Create services if not exist
    services_data = [
        # Telegram Premium
        {
            "category_id": 1,
            "name": "1 Oylik Premium",
            "description": "Yuqori sifatli obunachilar",
            "price": 50000,
            "original_price": 60000,
            "badge": "1️⃣",
            "features": json.dumps(["30 kun kafolat", "Aktiv va haqiqiy foydalanuvchilar", "Darhol boshlanadi"]),
            "min_quantity": 1,
            "max_quantity": 100
        },
        # Telegram Stars
        {
            "category_id": 1,
            "name": "100 Stars",
            "description": "Kichik paket",
            "price": 25000,
            "original_price": 30000,
            "badge": "1️⃣",
            "features": json.dumps(["Barcha kanallar va guruhlar uchun", "Tez yetkazib berish", "100% xavfsiz"]),
            "min_quantity": 1,
            "max_quantity": 1000
        },
        # Instagram Followers
        {
            "category_id": 2,
            "name": "1000 Obunachi",
            "description": "Kafolatlangan obunachilar",
            "price": 15000,
            "original_price": 20000,
            "badge": "1️⃣",
            "features": json.dumps(["90 kun kafolat", "Haqiqiy va aktiv foydalanuvchilar", "24 soat ichida boshlanadi"]),
            "min_quantity": 100,
            "max_quantity": 10000
        },
        # PUBG UC
        {
            "category_id": 3,
            "name": "60 UC",
            "description": "Kichik UC paketi",
            "price": 14000,
            "original_price": 15000,
            "emoji": "🇺🇸",
            "badge": "1️⃣",
            "features": json.dumps(["Darhol yetkazib berish", "Barcha serverlar uchun", "100% xavfsiz"]),
            "min_quantity": 1,
            "max_quantity": 100
        },
    ]
    
    for svc_data in services_data:
        service = db.query(Service).filter(
            Service.name == svc_data["name"],
            Service.category_id == svc_data["category_id"]
        ).first()
        if not service:
            service = Service(**svc_data)
            db.add(service)
    
    db.commit()

# Initialize on startup
@app.on_event("startup")
async def startup_event():
    db = SessionLocal()
    try:
        initialize_sample_data(db)
        logger.info("Sample data initialized")
    finally:
        db.close()

# Routes
@app.get("/")
async def root():
    return {"message": "SMM Market API is running", "version": "1.0.0"}

# Authentication routes
@app.post("/api/auth/register", response_model=Token)
async def register(user_data: UserCreate, db: Session = Depends(get_db)):
    # Check if user exists
    if user_data.username and db.query(User).filter(User.username == user_data.username).first():
        raise HTTPException(status_code=400, detail="Username already registered")
    
    if user_data.email and db.query(User).filter(User.email == user_data.email).first():
        raise HTTPException(status_code=400, detail="Email already registered")
    
    if user_data.telegram_id and db.query(User).filter(User.telegram_id == user_data.telegram_id).first():
        raise HTTPException(status_code=400, detail="Telegram ID already registered")
    
    # Create new user
    hashed_password = get_password_hash(user_data.password)
    db_user = User(
        telegram_id=user_data.telegram_id,
        username=user_data.username,
        email=user_data.email,
        full_name=user_data.full_name,
        phone=user_data.phone,
        hashed_password=hashed_password
    )
    
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    
    # Create access token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": db_user.username}, expires_delta=access_token_expires
    )
    
    # Create notification for admin
    notification = AdminNotification(
        type="user_registered",
        title="Yangi foydalanuvchi ro'yxatdan o'tdi",
        message=f"{db_user.full_name} ro'yxatdan o'tdi",
        data=json.dumps({"user_id": db_user.id, "username": db_user.username})
    )
    db.add(notification)
    db.commit()
    
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/api/auth/login", response_model=Token)
async def login(user_data: UserLogin, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == user_data.username).first()
    if not user or not verify_password(user_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    if not user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/api/auth/me", response_model=dict)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return {
        "id": current_user.id,
        "username": current_user.username,
        "email": current_user.email,
        "full_name": current_user.full_name,
        "phone": current_user.phone,
        "is_admin": current_user.is_admin,
        "created_at": current_user.created_at
    }

# Categories routes
@app.get("/api/categories", response_model=List[dict])
async def get_categories(db: Session = Depends(get_db)):
    categories = db.query(Category).filter(Category.is_active == True).all()
    return [
        {
            "id": cat.id,
            "name": cat.name,
            "icon": cat.icon,
            "description": cat.description,
            "service_count": len(cat.services)
        }
        for cat in categories
    ]

# Services routes
@app.get("/api/services", response_model=List[dict])
async def get_services(
    category_id: Optional[int] = None,
    db: Session = Depends(get_db)
):
    query = db.query(Service).filter(Service.is_active == True)
    
    if category_id:
        query = query.filter(Service.category_id == category_id)
    
    services = query.all()
    return [
        {
            "id": svc.id,
            "category_id": svc.category_id,
            "category_name": svc.category.name if svc.category else None,
            "name": svc.name,
            "description": svc.description,
            "price": svc.price,
            "original_price": svc.original_price,
            "currency": svc.currency,
            "features": json.loads(svc.features) if svc.features else [],
            "badge": svc.badge,
            "emoji": svc.emoji,
            "min_quantity": svc.min_quantity,
            "max_quantity": svc.max_quantity
        }
        for svc in services
    ]

@app.get("/api/services/{service_id}", response_model=dict)
async def get_service(service_id: int, db: Session = Depends(get_db)):
    service = db.query(Service).filter(Service.id == service_id).first()
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    
    return {
        "id": service.id,
        "category_id": service.category_id,
        "category_name": service.category.name if service.category else None,
        "name": service.name,
        "description": service.description,
        "price": service.price,
        "original_price": service.original_price,
        "currency": service.currency,
        "features": json.loads(service.features) if service.features else [],
        "badge": service.badge,
        "emoji": service.emoji,
        "min_quantity": service.min_quantity,
        "max_quantity": service.max_quantity
    }

# Orders routes
@app.post("/api/orders", response_model=dict)
async def create_order(
    order_data: OrderCreate,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    # Generate order number
    order_number = f"ORD-{datetime.now().strftime('%Y%m%d')}-{db.query(Order).count() + 1:04d}"
    
    # Calculate total amount
    total_amount = 0
    order_items = []
    
    for item in order_data.items:
        service = db.query(Service).filter(Service.id == item.get("service_id")).first()
        if not service:
            raise HTTPException(status_code=400, detail=f"Service {item.get('service_id')} not found")
        
        quantity = item.get("quantity", 1)
        if quantity < service.min_quantity or quantity > service.max_quantity:
            raise HTTPException(
                status_code=400,
                detail=f"Quantity must be between {service.min_quantity} and {service.max_quantity}"
            )
        
        item_total = service.price * quantity
        total_amount += item_total
        
        order_items.append({
            "service": service,
            "quantity": quantity,
            "unit_price": service.price,
            "total_price": item_total
        })
    
    # Create order
    order = Order(
        order_number=order_number,
        user_id=current_user.id,
        total_amount=total_amount,
        payment_method=order_data.payment_method,
        status="pending",
        payment_status="unpaid"
    )
    
    db.add(order)
    db.commit()
    db.refresh(order)
    
    # Create order items
    for item_data in order_items:
        order_item = OrderItem(
            order_id=order.id,
            service_id=item_data["service"].id,
            quantity=item_data["quantity"],
            unit_price=item_data["unit_price"],
            total_price=item_data["total_price"]
        )
        db.add(order_item)
    
    # Create notification for admin
    notification = AdminNotification(
        type="new_order",
        title="Yangi buyurtma",
        message=f"Yangi buyurtma: {order_number}",
        data=json.dumps({
            "order_id": order.id,
            "order_number": order_number,
            "user_id": current_user.id,
            "user_name": current_user.full_name,
            "total_amount": total_amount
        })
    )
    db.add(notification)
    db.commit()
    
    return {
        "order_id": order.id,
        "order_number": order_number,
        "total_amount": total_amount,
        "currency": order.currency,
        "status": order.status,
        "payment_status": order.payment_status,
        "created_at": order.created_at
    }

@app.get("/api/orders", response_model=List[dict])
async def get_user_orders(
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    orders = db.query(Order).filter(Order.user_id == current_user.id).order_by(Order.created_at.desc()).all()
    
    result = []
    for order in orders:
        order_dict = {
            "id": order.id,
            "order_number": order.order_number,
            "total_amount": order.total_amount,
            "currency": order.currency,
            "status": order.status,
            "payment_status": order.payment_status,
            "payment_method": order.payment_method,
            "created_at": order.created_at,
            "updated_at": order.updated_at,
            "items": []
        }
        
        for item in order.items:
            order_dict["items"].append({
                "service_name": item.service.name if item.service else "Noma'lum",
                "quantity": item.quantity,
                "unit_price": item.unit_price,
                "total_price": item.total_price
            })
        
        result.append(order_dict)
    
    return result

@app.get("/api/orders/{order_id}", response_model=dict)
async def get_order(
    order_id: int,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    order = db.query(Order).filter(Order.id == order_id).first()
    
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    if order.user_id != current_user.id and not current_user.is_admin:
        raise HTTPException(status_code=403, detail="Not authorized")
    
    order_dict = {
        "id": order.id,
        "order_number": order.order_number,
        "total_amount": order.total_amount,
        "currency": order.currency,
        "status": order.status,
        "payment_status": order.payment_status,
        "payment_method": order.payment_method,
        "admin_notes": order.admin_notes,
        "created_at": order.created_at,
        "updated_at": order.updated_at,
        "user": {
            "id": order.user.id,
            "full_name": order.user.full_name,
            "username": order.user.username,
            "phone": order.user.phone
        },
        "items": [],
        "payment": None
    }
    
    for item in order.items:
        order_dict["items"].append({
            "service_name": item.service.name if item.service else "Noma'lum",
            "service_description": item.service.description if item.service else "",
            "quantity": item.quantity,
            "unit_price": item.unit_price,
            "total_price": item.total_price
        })
    
    if order.payment:
        order_dict["payment"] = {
            "transaction_id": order.payment.transaction_id,
            "amount": order.payment.amount,
            "status": order.payment.status,
            "receipt_image": order.payment.receipt_image,
            "created_at": order.payment.created_at,
            "verified_at": order.payment.verified_at
        }
    
    return order_dict

# Payments routes
@app.post("/api/payments", response_model=dict)
async def create_payment(
    receipt: UploadFile = File(...),
    order_id: int = Form(...),
    transaction_id: str = Form(...),
    amount: float = Form(...),
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    # Check order
    order = db.query(Order).filter(Order.id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    if order.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized")
    
    if order.payment_status == "paid":
        raise HTTPException(status_code=400, detail="Order already paid")
    
    # Save receipt image
    upload_dir = Path("uploads/receipts")
    upload_dir.mkdir(parents=True, exist_ok=True)
    
    file_extension = receipt.filename.split(".")[-1]
    filename = f"{order.order_number}_{transaction_id}.{file_extension}"
    file_path = upload_dir / filename
    
    with open(file_path, "wb") as buffer:
        content = await receipt.read()
        buffer.write(content)
    
    # Create payment
    payment = Payment(
        order_id=order.id,
        user_id=current_user.id,
        amount=amount,
        transaction_id=transaction_id,
        receipt_image=str(file_path),
        payment_method=order.payment_method,
        status="pending"
    )
    
    # Update order payment status
    order.payment_status = "pending_verification"
    
    db.add(payment)
    db.add(order)
    
    # Create notification for admin
    notification = AdminNotification(
        type="new_payment",
        title="Yangi to'lov",
        message=f"Yangi to'lov: {transaction_id}",
        data=json.dumps({
            "payment_id": payment.id,
            "order_id": order.id,
            "order_number": order.order_number,
            "user_id": current_user.id,
            "user_name": current_user.full_name,
            "amount": amount,
            "receipt_image": str(file_path)
        })
    )
    db.add(notification)
    db.commit()
    
    return {
        "payment_id": payment.id,
        "order_id": order.id,
        "transaction_id": transaction_id,
        "amount": amount,
        "status": payment.status,
        "created_at": payment.created_at
    }

# Telegram webhook endpoint (for bot integration)
@app.post("/api/telegram/webhook")
async def telegram_webhook(data: dict):
    # This endpoint would receive updates from Telegram bot
    # You need to set up Telegram bot webhook to point to this URL
    
    logger.info(f"Telegram webhook received: {data}")
    
    # Process different types of updates
    if "message" in data:
        message = data["message"]
        chat_id = message["chat"]["id"]
        text = message.get("text", "")
        
        # Process commands
        if text.startswith("/start"):
            # Handle /start command
            response = {
                "chat_id": chat_id,
                "text": "Assalomu alaykum! SMM Market botiga xush kelibsiz!"
            }
            # You would send this response back to Telegram
            # return response
    
    return {"status": "received"}

# Admin routes
@app.get("/api/admin/orders", response_model=List[dict])
async def get_all_orders(
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db),
    status: Optional[str] = None,
    limit: int = 50,
    offset: int = 0
):
    query = db.query(Order)
    
    if status:
        query = query.filter(Order.status == status)
    
    orders = query.order_by(Order.created_at.desc()).offset(offset).limit(limit).all()
    
    result = []
    for order in orders:
        result.append({
            "id": order.id,
            "order_number": order.order_number,
            "user_full_name": order.user.full_name,
            "user_username": order.user.username,
            "total_amount": order.total_amount,
            "status": order.status,
            "payment_status": order.payment_status,
            "created_at": order.created_at,
            "item_count": len(order.items)
        })
    
    return result

@app.put("/api/admin/orders/{order_id}/status")
async def update_order_status(
    order_id: int,
    status_update: dict,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    order = db.query(Order).filter(Order.id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    new_status = status_update.get("status")
    if new_status not in ["pending", "processing", "completed", "cancelled"]:
        raise HTTPException(status_code=400, detail="Invalid status")
    
    order.status = new_status
    order.updated_at = datetime.utcnow()
    
    db.add(order)
    db.commit()
    
    return {"status": "updated", "order_id": order.id, "new_status": new_status}

@app.get("/api/admin/notifications", response_model=List[dict])
async def get_notifications(
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db),
    unread_only: bool = False
):
    query = db.query(AdminNotification)
    
    if unread_only:
        query = query.filter(AdminNotification.is_read == False)
    
    notifications = query.order_by(AdminNotification.created_at.desc()).all()
    
    return [
        {
            "id": notif.id,
            "type": notif.type,
            "title": notif.title,
            "message": notif.message,
            "data": json.loads(notif.data) if notif.data else {},
            "is_read": notif.is_read,
            "created_at": notif.created_at
        }
        for notif in notifications
    ]

@app.put("/api/admin/notifications/{notification_id}/read")
async def mark_notification_read(
    notification_id: int,
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    notification = db.query(AdminNotification).filter(AdminNotification.id == notification_id).first()
    if not notification:
        raise HTTPException(status_code=404, detail="Notification not found")
    
    notification.is_read = True
    db.add(notification)
    db.commit()
    
    return {"status": "marked_as_read"}

# Statistics endpoint
@app.get("/api/admin/statistics")
async def get_statistics(
    current_user: User = Depends(get_current_admin_user),
    db: Session = Depends(get_db)
):
    # Total orders count
    total_orders = db.query(Order).count()
    
    # Total revenue
    total_revenue = db.query(db.func.sum(Order.total_amount)).filter(
        Order.payment_status == "paid"
    ).scalar() or 0
    
    # Today's orders
    today = datetime.utcnow().date()
    today_orders = db.query(Order).filter(
        db.func.date(Order.created_at) == today
    ).count()
    
    # Pending payments
    pending_payments = db.query(Payment).filter(Payment.status == "pending").count()
    
    # User count
    user_count = db.query(User).count()
    
    # Recent orders
    recent_orders = db.query(Order).order_by(Order.created_at.desc()).limit(10).all()
    
    return {
        "total_orders": total_orders,
        "total_revenue": total_revenue,
        "today_orders": today_orders,
        "pending_payments": pending_payments,
        "user_count": user_count,
        "recent_orders": [
            {
                "order_number": order.order_number,
                "user": order.user.full_name,
                "amount": order.total_amount,
                "status": order.status,
                "created_at": order.created_at
            }
            for order in recent_orders
        ]
    }

# Serve receipt images
@app.get("/uploads/receipts/{filename}")
async def get_receipt_image(filename: str):
    file_path = Path("uploads/receipts") / filename
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(file_path)

# Health check
@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.utcnow().isoformat()}

# Export data for frontend
@app.get("/api/export/services")
async def export_services(db: Session = Depends(get_db)):
    """Export all services in format suitable for frontend"""
    categories = db.query(Category).filter(Category.is_active == True).all()
    
    result = {}
    for category in categories:
        services = db.query(Service).filter(
            Service.category_id == category.id,
            Service.is_active == True
        ).all()
        
        result[category.name.lower()] = {
            "premium" if category.name == "Telegram" else 
            "guaranteed" if category.name == "Instagram" else 
            "uc": [
                {
                    "id": svc.id,
                    "name": svc.name,
                    "description": svc.description,
                    "price": svc.price,
                    "badge": svc.badge,
                    "emoji": svc.emoji,
                    "features": json.loads(svc.features) if svc.features else []
                }
                for svc in services
            ]
        }
    
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)