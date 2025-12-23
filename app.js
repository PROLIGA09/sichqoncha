// ==============================================
// SMM MARKET - TO'LIQ JAVASCRIPT KODI (1000+ QATOR)
// ==============================================

// 1. MA'LUMOTLAR BAZASI (300+ qator)
const tariffsData = {
    telegram: {
        premium: [
            {
                id: 'tg_premium_1',
                name: '1 Oylik',
                description: 'Yuqori sifatli obunachilar',
                price: 50000,
                features: ['✅ 30 kun kafolat', '✅ Aktiv va haqiqiy foydalanuvchilar', '✅ Darhol boshlanadi'],
                badge: '1️⃣'
            },
            {
                id: 'tg_premium_2',
                name: '3 Oylik',
                description: 'Chegirmali paket',
                price: 170000,
                features: ['✅ 30 kun kafolat', '✅ Aktiv va haqiqiy foydalanuvchilar', '✅ 3 oy uchun katta chegirma'],
                badge: '2️⃣'
            },
            {
                id: 'tg_premium_3',
                name: '6 Oylik',
                description: 'Eng katta chegirma',
                price: 225000,
                features: ['✅ 30 kun kafolat', '✅ Aktiv va haqiqiy foydalanuvchilar', '✅ 6 oy uchun super chegirma'],
                badge: '3️⃣'
            }
        ],
        stars: [
            {
                id: 'tg_stars_1',
                name: '100 Stars',
                description: 'Kichik paket',
                price: 25000,
                features: ['✅ Barcha kanallar va guruhlar uchun', '✅ Tez yetkazib berish', '✅ 100% xavfsiz'],
                badge: '1️⃣'
            },
            {
                id: 'tg_stars_2',
                name: '500 Stars',
                description: 'O\'rta paket',
                price: 120000,
                features: ['✅ Barcha kanallar va guruhlar uchun', '✅ Tez yetkazib berish', '✅ 100% xavfsiz'],
                badge: '2️⃣'
            },
            {
                id: 'tg_stars_3',
                name: '1000 Stars',
                description: 'Katta paket',
                price: 230000,
                features: ['✅ Barcha kanallar va guruhlar uchun', '✅ Tez yetkazib berish', '✅ 100% xavfsiz'],
                badge: '3️⃣'
            },
            {
                id: 'tg_stars_4',
                name: '5000 Stars',
                description: 'Professional paket',
                price: 1150000,
                features: ['✅ Barcha kanallar va guruhlar uchun', '✅ Tez yetkazib berish', '✅ 100% xavfsiz'],
                badge: '4️⃣'
            },
            {
                id: 'tg_stars_5',
                name: '10000 Stars',
                description: 'Biznes paket',
                price: 2250000,
                features: ['✅ Barcha kanallar va guruhlar uchun', '✅ Tez yetkazib berish', '✅ 100% xavfsiz'],
                badge: '5️⃣'
            }
        ],
        gift: [
            {
                id: 'tg_gift_1',
                name: 'Gift-ayiqcha',
                emoji: '🐻',
                price: 5000,
                description: 'Sevimli ayiqcha sovg\'asi',
                features: ['✅ Darhol yetkazib berish', '✅ Eng yangi sovg\'a', '✅ Barcha uchun']
            },
            {
                id: 'tg_gift_2',
                name: 'Gift-yurakcha',
                emoji: '❤️',
                price: 5000,
                description: 'Muhabbat ramzi',
                features: ['✅ Darhol yetkazib berish', '✅ Eng yangi sovg\'a', '✅ Barcha uchun']
            },
            {
                id: 'tg_gift_3',
                name: 'Gift-sovga',
                emoji: '🎁',
                price: 7000,
                description: 'Oddiy sovg\'a',
                features: ['✅ Darhol yetkazib berish', '✅ Eng yangi sovg\'a', '✅ Barcha uchun']
            },
            {
                id: 'tg_gift_4',
                name: 'Gift-AtirGul',
                emoji: '🌹',
                price: 7000,
                description: 'Romantik atirgul',
                features: ['✅ Darhol yetkazib berish', '✅ Eng yangi sovg\'a', '✅ Barcha uchun']
            },
            {
                id: 'tg_gift_5',
                name: 'Gift-Guldasta',
                emoji: '💐',
                price: 13000,
                description: 'Go\'zal guldasta',
                features: ['✅ Darhol yetkazib berish', '✅ Eng yangi sovg\'a', '✅ Barcha uchun']
            }
        ]
    },
    instagram: {
        guaranteed: [
            { 
                id: 'ig_guaranteed_1', 
                name: '1000 obunachi', 
                price: 15000, 
                badge: '1️⃣',
                features: ['✅ 90 kun kafolat', '✅ Haqiqiy va aktiv', '✅ 24 soat ichida boshlanadi']
            },
            { 
                id: 'ig_guaranteed_2', 
                name: '2000 obunachi', 
                price: 23000, 
                badge: '2️⃣',
                features: ['✅ 90 kun kafolat', '✅ Haqiqiy va aktiv', '✅ 24 soat ichida boshlanadi']
            },
            { 
                id: 'ig_guaranteed_3', 
                name: '3000 obunachi', 
                price: 27000, 
                badge: '3️⃣',
                features: ['✅ 90 kun kafolat', '✅ Haqiqiy va aktiv', '✅ 24 soat ichida boshlanadi']
            },
            { 
                id: 'ig_guaranteed_4', 
                name: '5000 obunachi', 
                price: 40000, 
                badge: '4️⃣',
                features: ['✅ 90 kun kafolat', '✅ Haqiqiy va aktiv', '✅ 24 soat ichida boshlanadi']
            }
        ],
        cheap: [
            { 
                id: 'ig_cheap_1', 
                name: '1000 obunachi', 
                price: 11000, 
                badge: '1️⃣',
                features: ['✅ Hamyonbop narxlar', '✅ O\'rtacha sifat', '✅ Tezkor yetkazib berish']
            },
            { 
                id: 'ig_cheap_2', 
                name: '2000 obunachi', 
                price: 16000, 
                badge: '2️⃣',
                features: ['✅ Hamyonbop narxlar', '✅ O\'rtacha sifat', '✅ Tezkor yetkazib berish']
            },
            { 
                id: 'ig_cheap_3', 
                name: '3000 obunachi', 
                price: 20000, 
                badge: '3️⃣',
                features: ['✅ Hamyonbop narxlar', '✅ O\'rtacha sifat', '✅ Tezkor yetkazib berish']
            },
            { 
                id: 'ig_cheap_4', 
                name: '5000 obunachi', 
                price: 27000, 
                badge: '4️⃣',
                features: ['✅ Hamyonbop narxlar', '✅ O\'rtacha sifat', '✅ Tezkor yetkazib berish']
            }
        ],
        views: [
            { 
                id: 'ig_views_1', 
                name: '1000 ko\'rish', 
                price: 1000, 
                badge: '1️⃣',
                features: ['✅ Postlarni ommalashtirish', '✅ Organic ko\'rishlar', '✅ Profil faolligini oshirish']
            },
            { 
                id: 'ig_views_2', 
                name: '5000 ko\'rish', 
                price: 3000, 
                badge: '2️⃣',
                features: ['✅ Postlarni ommalashtirish', '✅ Organic ko\'rishlar', '✅ Profil faolligini oshirish']
            },
            { 
                id: 'ig_views_3', 
                name: '10000 ko\'rish', 
                price: 7000, 
                badge: '3️⃣',
                features: ['✅ Postlarni ommalashtirish', '✅ Organic ko\'rishlar', '✅ Profil faolligini oshirish']
            },
            { 
                id: 'ig_views_4', 
                name: '50000 ko\'rish', 
                price: 19000, 
                badge: '4️⃣',
                features: ['✅ Postlarni ommalashtirish', '✅ Organic ko\'rishlar', '✅ Profil faolligini oshirish']
            }
        ],
        likes: [
            { 
                id: 'ig_likes_1', 
                name: '1000 like', 
                price: 5000, 
                badge: '1️⃣',
                features: ['✅ Interaktivlikni oshirish', '✅ Post reytingini yaxshilash', '✅ Tezkor yetkazib berish']
            },
            { 
                id: 'ig_likes_2', 
                name: '5000 like', 
                price: 25000, 
                badge: '2️⃣',
                features: ['✅ Interaktivlikni oshirish', '✅ Post reytingini yaxshilash', '✅ Tezkor yetkazib berish']
            },
            { 
                id: 'ig_likes_3', 
                name: '10000 like', 
                price: 50000, 
                badge: '3️⃣',
                features: ['✅ Interaktivlikni oshirish', '✅ Post reytingini yaxshilash', '✅ Tezkor yetkazib berish']
            },
            { 
                id: 'ig_likes_4', 
                name: '50000 like', 
                price: 140000, 
                badge: '4️⃣',
                features: ['✅ Interaktivlikni oshirish', '✅ Post reytingini yaxshilash', '✅ Tezkor yetkazib berish']
            }
        ]
    },
    pubg: [
        { 
            id: 'pubg_1', 
            name: '60 UC', 
            flag: '🇺🇸', 
            price: 14000, 
            badge: '1️⃣',
            features: ['✅ Darhol yetkazib berish', '✅ Barcha serverlar uchun', '✅ 100% xavfsiz']
        },
        { 
            id: 'pubg_2', 
            name: '325 UC', 
            flag: '🇺🇸', 
            price: 66000, 
            badge: '2️⃣',
            features: ['✅ Darhol yetkazib berish', '✅ Barcha serverlar uchun', '✅ 100% xavfsiz']
        },
        { 
            id: 'pubg_3', 
            name: '660 UC', 
            flag: '🇺🇸', 
            price: 134000, 
            badge: '3️⃣',
            features: ['✅ Darhol yetkazib berish', '✅ Barcha serverlar uchun', '✅ 100% xavfsiz']
        },
        { 
            id: 'pubg_4', 
            name: '1800 UC', 
            flag: '🇺🇸', 
            price: 335000, 
            badge: '4️⃣',
            features: ['✅ Darhol yetkazib berish', '✅ Barcha serverlar uchun', '✅ 100% xavfsiz']
        },
        { 
            id: 'pubg_5', 
            name: '3850 UC', 
            flag: '🇺🇸', 
            price: 650000, 
            badge: '5️⃣',
            features: ['✅ Darhol yetkazib berish', '✅ Barcha serverlar uchun', '✅ 100% xavfsiz']
        },
        { 
            id: 'pubg_6', 
            name: '8100 UC', 
            flag: '🇺🇸', 
            price: 1620000, 
            badge: '6️⃣',
            features: ['✅ Darhol yetkazib berish', '✅ Barcha serverlar uchun', '✅ 100% xavfsiz']
        }
    ]
};

// 2. STATE MANAGEMENT
let cart = JSON.parse(localStorage.getItem('smm_cart')) || [];
let orders = JSON.parse(localStorage.getItem('smm_orders')) || [];

// 3. DOM ELEMENTS
const sections = document.querySelectorAll('.section');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close-modal');
const cartCount = document.getElementById('cartCount');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// 4. TOASTR CONFIG
toastr.options = {
    positionClass: 'toast-top-right',
    progressBar: true,
    timeOut: 3000,
    closeButton: true
};

// 5. INITIALIZE
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
        }, 500);
    }, 1000);
    
    console.log('🚀 SMM Market ishga tushdi!');
    
    updateCartCount();
    loadUserName();
    setupEventListeners();
    loadOrders();
    checkFirstTimeVisit();
});

// 6. EVENT LISTENERS
function setupEventListeners() {
    console.log('🔧 Event listenerlar o\'rnatilmoqda...');
    
    // Navigation buttons
    if (document.getElementById('homeBtn')) {
        document.getElementById('homeBtn').onclick = (e) => {
            e.preventDefault();
            showSection('homeSection');
        };
    }
    
    if (document.getElementById('servicesBtn')) {
        document.getElementById('servicesBtn').onclick = (e) => {
            e.preventDefault();
            showSection('servicesSection');
        };
    }
    
    if (document.getElementById('cartBtn')) {
        document.getElementById('cartBtn').onclick = (e) => {
            e.preventDefault();
            showCart();
        };
    }
    
    if (document.getElementById('ordersBtn')) {
        document.getElementById('ordersBtn').onclick = (e) => {
            e.preventDefault();
            showOrders();
        };
    }
    
    // Main buttons
    if (document.getElementById('showServicesBtn')) {
        document.getElementById('showServicesBtn').onclick = () => {
            showSection('servicesSection');
        };
    }
    
    if (document.getElementById('contactAdminBtn')) {
        document.getElementById('contactAdminBtn').onclick = () => {
            contactAdmin('buyurtmasiz');
        };
    }
    
    // Mobile menu
    if (menuToggle) {
        menuToggle.onclick = () => {
            navLinks.classList.toggle('active');
        };
    }
    
    // Modal close
    if (closeModal) {
        closeModal.onclick = () => {
            modal.style.display = 'none';
        };
    }
    
    // Close modal on outside click
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.onclick = checkout;
    }
    
    console.log('✅ Barcha event listenerlar o\'rnatildi');
}

// 7. NAVIGATION FUNCTIONS
function showSection(sectionId) {
    console.log('🔄 Sahifaga o\'tish:', sectionId);
    
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Load tariffs if needed
        if (sectionId === 'telegramPremiumSection') {
            loadTelegramTariffs('premium');
        } else if (sectionId === 'telegramStarsSection') {
            loadTelegramTariffs('stars');
        } else if (sectionId === 'telegramGiftSection') {
            loadTelegramTariffs('gift');
        } else if (sectionId === 'instagramGuaranteedSection') {
            loadInstagramTariffs('guaranteed');
        } else if (sectionId === 'pubgSection') {
            loadPubgTariffs();
        }
        
        // Close mobile menu
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// 8. CATEGORY NAVIGATION
function showCategory(category) {
    console.log('🎯 Kategoriya tanlandi:', category);
    
    switch(category) {
        case 'telegram':
            showSection('telegramSection');
            break;
        case 'instagram':
            showSection('instagramSection');
            break;
        case 'pubg':
            showSection('pubgSection');
            break;
    }
}

function showTelegramService(service) {
    console.log('📱 Telegram xizmati tanlandi:', service);
    
    switch(service) {
        case 'premium':
            showSection('telegramPremiumSection');
            break;
        case 'stars':
            showSection('telegramStarsSection');
            break;
        case 'gift':
            showSection('telegramGiftSection');
            break;
    }
}

function showInstagramService(service) {
    console.log('📸 Instagram xizmati tanlandi:', service);
    showSection('instagramGuaranteedSection');
    loadInstagramTariffs(service);
}

// 9. BACK FUNCTIONS
function goHome() {
    showSection('homeSection');
}

function goBackToServices() {
    showSection('servicesSection');
}

function goBackToTelegram() {
    showSection('telegramSection');
}

function goBackToInstagram() {
    showSection('instagramSection');
}

function goBackToCart() {
    showCart();
}

// 10. LOAD TARIFFS
function loadTelegramTariffs(serviceType) {
    console.log('📊 Telegram tariflari yuklanmoqda:', serviceType);
    
    const tariffs = tariffsData.telegram[serviceType];
    let sectionId;
    
    switch(serviceType) {
        case 'premium':
            sectionId = 'telegramTariffs';
            break;
        case 'stars':
            sectionId = 'telegramStarsTariffs';
            break;
        case 'gift':
            sectionId = 'telegramGiftTariffs';
            break;
        default:
            return;
    }
    
    const container = document.getElementById(sectionId);
    if (!container) return;
    
    let html = '';
    tariffs.forEach(tariff => {
        html += `
            <div class="tariff-card">
                <div class="tariff-header">
                    <span class="tariff-badge">${tariff.badge || ''}</span>
                    <span class="tariff-price">${formatPrice(tariff.price)}</span>
                </div>
                <h3>${tariff.emoji ? tariff.emoji + ' ' : ''}${tariff.name}</h3>
                <p>${tariff.description}</p>
                <ul class="tariff-features">
                    ${tariff.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
                <button class="btn-service" onclick="addToCart('${tariff.id}', 'Telegram ${serviceType === 'premium' ? 'Premium' : serviceType === 'stars' ? 'Stars' : 'Gift'} - ${tariff.name}', ${tariff.price})">
                    <i class="fas fa-cart-plus"></i> Savatchaga qo'shish
                </button>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function loadInstagramTariffs(serviceType) {
    console.log('📊 Instagram tariflari yuklanmoqda:', serviceType);
    
    const tariffs = tariffsData.instagram[serviceType];
    const container = document.getElementById('instagramGuaranteedTariffs');
    
    if (!container || !tariffs) return;
    
    let serviceName = '';
    switch(serviceType) {
        case 'guaranteed': serviceName = 'Kafolatlangan'; break;
        case 'cheap': serviceName = 'Arzon'; break;
        case 'views': serviceName = 'Ko\'rishlar'; break;
        case 'likes': serviceName = 'Layklar'; break;
    }
    
    let html = '';
    tariffs.forEach(tariff => {
        html += `
            <div class="tariff-card">
                <div class="tariff-header">
                    <span class="tariff-badge">${tariff.badge}</span>
                    <span class="tariff-price">${formatPrice(tariff.price)}</span>
                </div>
                <h3>${tariff.name}</h3>
                <ul class="tariff-features">
                    ${tariff.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
                <button class="btn-service" onclick="addToCart('${tariff.id}', 'Instagram ${serviceName} - ${tariff.name}', ${tariff.price})">
                    <i class="fas fa-cart-plus"></i> Savatchaga qo'shish
                </button>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Update title
    const titleMap = {
        'guaranteed': 'KAFOLATLANGAN OBUNACHILAR',
        'cheap': 'ARZON OBUNACHILAR',
        'views': 'KO\'RISHLAR',
        'likes': 'LAYKLAR'
    };
    
    const titleElement = document.querySelector('#instagramGuaranteedSection h2');
    if (titleElement && titleMap[serviceType]) {
        titleElement.innerHTML = `<i class="${serviceType === 'guaranteed' ? 'fas fa-shield-alt' : serviceType === 'cheap' ? 'fas fa-wallet' : serviceType === 'views' ? 'fas fa-eye' : 'fas fa-heart'}"></i> INSTAGRAM ${titleMap[serviceType]}`;
    }
}

function loadPubgTariffs() {
    console.log('🎮 PUBG tariflari yuklanmoqda');
    
    const tariffs = tariffsData.pubg;
    const container = document.getElementById('pubgTariffs');
    
    if (!container) return;
    
    let html = '';
    tariffs.forEach(tariff => {
        html += `
            <div class="tariff-card">
                <div class="tariff-header">
                    <span class="tariff-badge">${tariff.badge}</span>
                    <span class="tariff-price">${formatPrice(tariff.price)}</span>
                </div>
                <h3>${tariff.flag} ${tariff.name}</h3>
                <ul class="tariff-features">
                    ${tariff.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
                <button class="btn-service" onclick="addToCart('${tariff.id}', 'PUBG UC - ${tariff.flag} ${tariff.name}', ${tariff.price})">
                    <i class="fas fa-cart-plus"></i> Savatchaga qo'shish
                </button>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// 11. CART FUNCTIONS
function addToCart(id, name, price) {
    console.log('➕ Savatchaga qo\'shish:', name);
    
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1,
            date: new Date().toISOString()
        });
    }
    
    updateCartCount();
    saveCart();
    showToast(`✅ "${name}" savatchaga qo'shildi!`, 'success');
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function showCart() {
    console.log('🛒 Savatcha ko\'rsatilmoqda');
    showSection('cartSection');
    renderCartItems();
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart fa-3x"></i>
                <h3>Savatchangiz bo'sh</h3>
                <p>Xizmatlar tanlash uchun xizmatlar bo'limiga o'ting</p>
                <button onclick="showSection('servicesSection')" class="btn-primary">
                    Xizmatlar sahifasiga o'tish
                </button>
            </div>
        `;
        document.getElementById('totalPrice').textContent = '0 so\'m';
        document.getElementById('checkoutBtn').disabled = true;
        return;
    }
    
    let html = '';
    let totalPrice = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-quantity">
                        <button onclick="updateQuantity(${index}, -1)" class="quantity-btn">-</button>
                        <span>${item.quantity} ta</span>
                        <button onclick="updateQuantity(${index}, 1)" class="quantity-btn">+</button>
                    </div>
                </div>
                <div class="cart-item-price">${formatPrice(itemTotal)}</div>
                <button onclick="removeFromCart(${index})" class="remove-item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });
    
    container.innerHTML = html;
    document.getElementById('totalPrice').textContent = formatPrice(totalPrice);
    document.getElementById('checkoutBtn').disabled = false;
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    updateCartCount();
    saveCart();
    renderCartItems();
}

function removeFromCart(index) {
    if (confirm('Bu xizmatni savatchadan olib tashlamoqchimisiz?')) {
        const removedItem = cart.splice(index, 1)[0];
        updateCartCount();
        saveCart();
        renderCartItems();
        showToast(`🗑️ "${removedItem.name}" savatchadan olib tashlandi`, 'info');
    }
}

function saveCart() {
    localStorage.setItem('smm_cart', JSON.stringify(cart));
}

// 12. CHECKOUT FUNCTIONS
function checkout() {
    console.log('💰 To'lov sahifasiga o'tish');
    if (cart.length === 0) {
        showToast('❌ Savatchangiz bo'sh!', 'error');
        return;
    }
    showSection('checkoutSection');
    renderOrderDetails();
}

function renderOrderDetails() {
    const container = document.getElementById('orderDetails');
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let html = `
        <h3><i class="fas fa-shopping-bag"></i> BUYURTMA TAFSILOTLARI</h3>
        <div class="order-items">
    `;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        html += `
            <div class="order-item-summary">
                <span>${item.name}</span>
                <span>${item.quantity} x ${formatPrice(item.price)} = ${formatPrice(itemTotal)}</span>
            </div>
        `;
    });
    
    html += `
        </div>
        <div class="order-total">
            <strong>Jami to'lov:</strong>
            <strong>${formatPrice(totalPrice)}</strong>
        </div>
    `;
    
    container.innerHTML = html;
}

// 13. TO'LOV FUNCTIONS
function confirmPayment() {
    const orderId = 'ORD-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Platforma aniqlash
    let platform = '';
    if (cart.length > 0) {
        const firstItem = cart[0];
        if (firstItem.id.includes('tg_')) platform = 'Telegram';
        else if (firstItem.id.includes('ig_')) platform = 'Instagram';
        else if (firstItem.id.includes('pubg_')) platform = 'PUBG';
        else platform = 'Noma'lum';
    }
    
    const newOrder = {
        id: orderId,
        items: [...cart],
        total: totalPrice,
        date: new Date().toISOString(),
        status: 'pending',
        platform: platform
    };
    
    orders.push(newOrder);
    saveOrders();
    
    cart = [];
    saveCart();
    updateCartCount();
    
    // Botga yuborish
    sendOrderToBot(orderId, totalPrice, platform);
    
    showToast('✅ Buyurtma qabul qilindi! Botga yuborildi.', 'success');
    showOrderConfirmation(orderId, totalPrice, platform);
}

function sendOrderToBot(orderId, totalPrice, platform) {
    // O'Z TELEGRAM BOT TOKENINGIZNI VA CHAT IDINGIZNI KIRITING
    const botToken = '8411740919:AAGLbOX3F-0sdlJXDbdGM0HY9CSaVRRGuLE'; // BotFather dan oling
    const chatId = '8074394669'; // @userinfobot orqali oling
    
    const message = `🛒 YANGI BUYURTMA!\n\n` +
                   `📱 Platforma: ${platform}\n` +
                   `📋 Buyurtma raqami: ${orderId}\n` +
                   `💰 Jami to'lov: ${formatPrice(totalPrice)}\n` +
                   `📅 Sana: ${new Date().toLocaleString('uz-UZ')}\n\n` +
                   `✅ Mijoz to'lov qildi va buyurtmani tasdiqladi.`;
    
    if (botToken !== 'YOUR_BOT_TOKEN_HERE' && chatId !== 'YOUR_CHAT_ID_HERE') {
        sendTelegramMessage(botToken, chatId, message);
    } else {
        console.log('🤖 Botga yuboriladigan xabar:', message);
        console.log('⚠️ Eslatma: Telegram bot token va chat ID ni sozlang!');
    }
    
    showToast('✅ Buyurtma raqamingiz botga yuborildi!', 'success');
}

function sendTelegramMessage(botToken, chatId, message) {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const data = {
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('✅ Xabar botga yuborildi:', data);
    })
    .catch(error => {
        console.error('❌ Xabar yuborishda xatolik:', error);
    });
}

function showOrderConfirmation(orderId, totalPrice, platform) {
    let html = `
        <div class="order-confirmation">
            <div class="confirmation-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>TO'LOV TASDIQLANDI!</h2>
            <p>Buyurtma raqami: <strong>${orderId}</strong></p>
            <p>Jami to'lov: <strong>${formatPrice(totalPrice)}</strong></p>
            <p>Platforma: <strong>${platform}</strong></p>
            <p>Sana: <strong>${new Date().toLocaleDateString('uz-UZ')}</strong></p>
            
            <div class="instructions">
                <h4><i class="fas fa-info-circle"></i> BUYURTMA RAQAMINGIZ BOTGA YUBORILDI!</h4>
                
                <div class="alert alert-info">
                    <i class="fas fa-exclamation-triangle"></i>
                    <strong>BUYURTMA RAQAMINGIZNI SAQLAB QOYING!</strong>
                </div>
                
                <h4><i class="fas fa-paper-plane"></i> Keyingi qadamlar:</h4>
                <ol>
                    <li>Buyurtma raqamingiz: <strong>${orderId}</strong></li>
                    <li>Bu raqam botga avtomatik yuborildi</li>
                    <li>Admin siz bilan bog'lanadi</li>
                    <li>Xizmat 1-24 soat ichida boshlanadi</li>
                </ol>
                
                <p class="note"><i class="fas fa-clock"></i> Agar 24 soat ichida admin bilan bog'lanmasangiz, quyidagi tugma orqali admin bilan bog'lanishingiz mumkin.</p>
            </div>
            
            <div class="action-buttons">
                <button onclick="contactAdmin('${orderId}')" class="btn-primary">
                    <i class="fab fa-telegram"></i> ADMIN BILAN BOG'LANISH
                </button>
                <button onclick="copyOrderId('${orderId}')" class="btn-secondary">
                    <i class="fas fa-copy"></i> BUYURTMA RAQAMINI NUSXALASH
                </button>
                <button onclick="goHome()" class="btn-outline">
                    <i class="fas fa-home"></i> BOSH MENYUGA QAYTISH
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('modalBody').innerHTML = html;
    modal.style.display = 'flex';
}

// 14. ADMIN FUNCTIONS
function contactAdmin(orderId = '') {
    // O'Z TELEGRAM USERNOMINGIZNI KIRITING
    const adminUsername = '@adhhamjonov'; // @ belgisisiz
    
    let message;
    
    if (orderId === 'buyurtmasiz') {
        message = 'Assalomu alaykum! Men SMM Market veb-sahifasidan yozayapman. Savolim bor edi.';
    } else {
        message = `Assalomu alaykum! Men SMM Market veb-sahifasidan buyurtma berdim.\n\n` +
                 `📋 Buyurtma raqami: ${orderId}\n` +
                 `ℹ️ To'lov haqida ma'lumot kerak.`;
    }
    
    const telegramUrl = `https://t.me/${adminUsername}?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
    
    console.log('📱 Admin bilan bog\'lanish:', orderId);
}

function copyOrderId(orderId) {
    navigator.clipboard.writeText(orderId)
        .then(() => {
            showToast(`✅ Buyurtma raqami nusxalandi: ${orderId}`, 'success');
        })
        .catch(err => {
            console.error('❌ Nusxalashda xatolik:', err);
            const tempInput = document.createElement('input');
            tempInput.value = orderId;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            showToast(`✅ Buyurtma raqami nusxalandi: ${orderId}`, 'success');
        });
}

// 15. ORDERS FUNCTIONS
function showOrders() {
    console.log('📋 Buyurtmalar sahifasiga o'tish');
    showSection('ordersSection');
    loadOrders();
}

function loadOrders() {
    const container = document.getElementById('ordersList');
    
    if (!container) return;
    
    if (orders.length === 0) {
        container.innerHTML = `
            <div class="empty-orders">
                <i class="fas fa-clipboard-list fa-3x"></i>
                <h3>Hali buyurtmalaringiz yo'q</h3>
                <p>Birinchi buyurtmani berish uchun xizmatlar bo'limiga o'ting</p>
                <button onclick="showSection('servicesSection')" class="btn-primary">
                    Xizmatlar sahifasiga o'tish
                </button>
            </div>
        `;
        return;
    }
    
    let html = '';
    orders.reverse().forEach(order => {
        let statusText, statusClass;
        switch(order.status) {
            case 'pending': statusText = 'Kutilmoqda'; statusClass = 'status-pending'; break;
            case 'processing': statusText = 'Jarayonda'; statusClass = 'status-processing'; break;
            case 'completed': statusText = 'Yakunlangan'; statusClass = 'status-completed'; break;
            case 'cancelled': statusText = 'Bekor qilingan'; statusClass = 'status-cancelled'; break;
            default: statusText = 'Kutilmoqda'; statusClass = 'status-pending';
        }
        
        html += `
            <div class="order-item">
                <div>
                    <h4>${order.id}</h4>
                    <p>${new Date(order.date).toLocaleDateString('uz-UZ')}</p>
                    <p>${order.platform || 'Noma\'lum'} - ${order.items.length} ta xizmat</p>
                </div>
                <div>
                    <div class="${statusClass} order-status">${statusText}</div>
                    <p class="order-total">${formatPrice(order.total)}</p>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function saveOrders() {
    localStorage.setItem('smm_orders', JSON.stringify(orders));
}

// 16. UTILITY FUNCTIONS
function formatPrice(price) {
    return price.toLocaleString('uz-UZ') + ' so\'m';
}

function showToast(message, type = 'info') {
    toastr[type](message);
}

function loadUserName() {
    const userName = localStorage.getItem('smm_userName') || 'Mehmon';
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
        userNameElement.textContent = userName;
    }
}

function checkFirstTimeVisit() {
    if (!localStorage.getItem('smm_firstVisit')) {
        setTimeout(() => {
            const name = prompt('Ismingizni kiriting:', 'Mehmon');
            if (name && name.trim() !== '') {
                localStorage.setItem('smm_userName', name);
                const userNameElement = document.getElementById('userName');
                if (userNameElement) {
                    userNameElement.textContent = name;
                }
            }
        }, 1000);
        localStorage.setItem('smm_firstVisit', 'true');
    }
}

// 17. SAMPLE DATA
if (!localStorage.getItem('smm_orders') || JSON.parse(localStorage.getItem('smm_orders')).length === 0) {
    orders = [
        {
            id: 'ORD-123456',
            items: [
                { id: 'tg_premium_1', name: 'Telegram Premium - 1 Oylik', price: 50000, quantity: 1 }
            ],
            total: 50000,
            date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
            status: 'completed',
            platform: 'Telegram'
        },
        {
            id: 'ORD-123457',
            items: [
                { id: 'ig_likes_1', name: 'Instagram Layklar - 1000 like', price: 5000, quantity: 2 }
            ],
            total: 10000,
            date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            status: 'processing',
            platform: 'Instagram'
        },
        {
            id: 'ORD-123458',
            items: [
                { id: 'pubg_1', name: 'PUBG UC - 🇺🇸 60 UC', price: 14000, quantity: 1 }
            ],
            total: 14000,
            date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            status: 'completed',
            platform: 'PUBG'
        }
    ];
    saveOrders();
}

// 18. GLOBAL FUNCTIONS FOR HTML
window.showCategory = showCategory;
window.showTelegramService = showTelegramService;
window.showInstagramService = showInstagramService;
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.checkout = checkout;
window.confirmPayment = confirmPayment;
window.goHome = goHome;
window.goBackToServices = goBackToServices;
window.goBackToTelegram = goBackToTelegram;
window.goBackToInstagram = goBackToInstagram;
window.goBackToCart = goBackToCart;
window.contactAdmin = contactAdmin;
window.copyOrderId = copyOrderId;

console.log('🎉 SMM Market JavaScript kodi tayyor! (1000+ qator)');