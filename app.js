// Tariff Data - Bu butun dasturning ma'lumotlar bazasi
const tariffsData = {
    telegram: {
        premium: [
            {
                id: 'tg_premium_1',
                name: '1 Oylik',
                description: 'Yuqori sifatli obunachilar',
                price: 50000,
                features: [
                    '✅ 30 kun kafolat',
                    '✅ Aktiv va haqiqiy foydalanuvchilar',
                    '✅ Darhol boshlanadi'
                ],
                badge: '1️⃣'
            },
            {
                id: 'tg_premium_2',
                name: '3 Oylik',
                description: 'Chegirmali paket',
                price: 170000,
                features: [
                    '✅ 30 kun kafolat',
                    '✅ Aktiv va haqiqiy foydalanuvchilar',
                    '✅ 3 oy uchun katta chegirma'
                ],
                badge: '2️⃣'
            },
            {
                id: 'tg_premium_3',
                name: '6 Oylik',
                description: 'Eng katta chegirma',
                price: 225000,
                features: [
                    '✅ 30 kun kafolat',
                    '✅ Aktiv va haqiqiy foydalanuvchilar',
                    '✅ 6 oy uchun super chegirma'
                ],
                badge: '3️⃣'
            }
        ],
        stars: [
            {
                id: 'tg_stars_1',
                name: '100 Stars',
                description: 'Kichik paket',
                price: 25000,
                features: [
                    '✅ Barcha kanallar va guruhlar uchun',
                    '✅ Tez yetkazib berish',
                    '✅ 100% xavfsiz'
                ],
                badge: '1️⃣'
            },
            {
                id: 'tg_stars_2',
                name: '500 Stars',
                description: 'O\'rta paket',
                price: 120000,
                features: [
                    '✅ Barcha kanallar va guruhlar uchun',
                    '✅ Tez yetkazib berish',
                    '✅ 100% xavfsiz'
                ],
                badge: '2️⃣'
            },
            {
                id: 'tg_stars_3',
                name: '1000 Stars',
                description: 'Katta paket',
                price: 230000,
                features: [
                    '✅ Barcha kanallar va guruhlar uchun',
                    '✅ Tez yetkazib berish',
                    '✅ 100% xavfsiz'
                ],
                badge: '3️⃣'
            },
            {
                id: 'tg_stars_4',
                name: '5000 Stars',
                description: 'Professional paket',
                price: 1150000,
                features: [
                    '✅ Barcha kanallar va guruhlar uchun',
                    '✅ Tez yetkazib berish',
                    '✅ 100% xavfsiz'
                ],
                badge: '4️⃣'
            },
            {
                id: 'tg_stars_5',
                name: '10000 Stars',
                description: 'Biznes paket',
                price: 2250000,
                features: [
                    '✅ Barcha kanallar va guruhlar uchun',
                    '✅ Tez yetkazib berish',
                    '✅ 100% xavfsiz'
                ],
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

// Cart and State Management
let cart = JSON.parse(localStorage.getItem('smm_cart')) || [];
let orders = JSON.parse(localStorage.getItem('smm_orders')) || [];

// DOM Elements
const sections = document.querySelectorAll('.section');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close-modal');
const cartCount = document.getElementById('cartCount');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toastr Configuration
toastr.options = {
    positionClass: 'toast-top-right',
    progressBar: true,
    timeOut: 3000,
    closeButton: true
};

// Initialize - BIRINCHI ISHGA TUSHADIGAN FUNKSIYA
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 SMM Market veb-sahifasi yuklandi!');
    
    updateCartCount();
    loadUserName();
    setupEventListeners();
    loadOrders();
    
    // Test: Konsolda muvaffaqiyatli yuklanganligini ko'rsatish
    console.log('✅ JavaScript muvaffaqiyatli yuklandi');
    console.log('📊 Savatda:', cart.length, 'ta mahsulot');
    console.log('📋 Buyurtmalar:', orders.length, 'ta');
});

// 1. EVENT LISTENERS - HAMMA TUGMALAR UCHUN
function setupEventListeners() {
    console.log('🔧 Event listenerlar sozlanmoqda...');
    
    // 1.1 NAVIGATION TUGMALARI
    document.getElementById('homeBtn').onclick = function(e) {
        e.preventDefault();
        console.log('🏠 Bosh sahifaga o\'tish');
        showSection('homeSection');
    };
    
    document.getElementById('servicesBtn').onclick = function(e) {
        e.preventDefault();
        console.log('📋 Xizmatlar sahifasiga o\'tish');
        showSection('servicesSection');
    };
    
    document.getElementById('cartBtn').onclick = function(e) {
        e.preventDefault();
        console.log('🛒 Savatchaga o\'tish');
        showCart();
    };
    
    document.getElementById('ordersBtn').onclick = function(e) {
        e.preventDefault();
        console.log('📝 Buyurtmalar sahifasiga o\'tish');
        showOrders();
    };
    
    // 1.2 ASOSIY TUGMALAR
    document.getElementById('showServicesBtn').onclick = function() {
        console.log('👉 Xizmatlarni ko\'rish tugmasi');
        showSection('servicesSection');
    };
    
    document.getElementById('contactAdminBtn').onclick = function() {
        console.log('📞 Admin bilan bog\'lanish');
        window.open('https://t.me/your_admin_username', '_blank');
    };
    
    // 1.3 MOBILE MENYU
    menuToggle.onclick = function() {
        navLinks.classList.toggle('active');
        console.log('📱 Mobil menyu ochildi/yopildi');
    };
    
    // 1.4 MODAL YOPISH
    closeModal.onclick = function() {
        modal.style.display = 'none';
        console.log('❌ Modal yopildi');
    };
    
    // Modal tashqarisiga bosganda yopish
    window.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
    
    console.log('✅ Barcha event listenerlar qo\'shildi');
}

// 2. NAVIGATION FUNCTIONS - SAHIFA O'TISH
function showSection(sectionId) {
    console.log('🔄 Sahifaga o\'tish:', sectionId);
    
    // Barcha bo'limlarni yashirish
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Kerakli bo'limni ko'rsatish
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Agar tariflar bo'limi bo'lsa, tariflarni yuklash
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
        
        // Mobil menyuni yopish
        navLinks.classList.remove('active');
    } else {
        console.error('❌ Bo\'lim topilmadi:', sectionId);
    }
}

// 3. XIZMATLAR NAVIGATSIYASI
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

// 4. ORQAGA QAYTISH FUNCTIONS
function goHome() {
    console.log('🏠 Bosh sahifaga qaytish');
    showSection('homeSection');
}

function goBackToServices() {
    console.log('↩️ Xizmatlar sahifasiga qaytish');
    showSection('servicesSection');
}

function goBackToTelegram() {
    console.log('↩️ Telegram sahifasiga qaytish');
    showSection('telegramSection');
}

function goBackToInstagram() {
    console.log('↩️ Instagram sahifasiga qaytish');
    showSection('instagramSection');
}

function goBackToCart() {
    console.log('↩️ Savatchaga qaytish');
    showCart();
}

// 5. TARIFLARNI YUKLASH
function loadTelegramTariffs(serviceType) {
    console.log('📊 Telegram tariflari yuklanmoqda:', serviceType);
    
    const tariffs = tariffsData.telegram[serviceType];
    let sectionId, title;
    
    switch(serviceType) {
        case 'premium':
            sectionId = 'telegramTariffs';
            title = 'PREMIUM OBUNACHILAR';
            break;
        case 'stars':
            sectionId = 'telegramStarsTariffs';
            title = 'STARS (YULDUZLAR)';
            break;
        case 'gift':
            sectionId = 'telegramGiftTariffs';
            title = 'GIFT (SOVG\'ALAR)';
            break;
    }
    
    const container = document.getElementById(sectionId);
    if (!container) {
        console.error('❌ Container topilmadi:', sectionId);
        return;
    }
    
    let html = '';
    tariffs.forEach(tariff => {
        html += `
            <div class="tariff-card">
                <div class="tariff-header">
                    <span class="tariff-badge">${tariff.badge}</span>
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
    console.log('✅ Telegram tariflari yuklandi:', tariffs.length, 'ta');
}

function loadInstagramTariffs(serviceType) {
    console.log('📊 Instagram tariflari yuklanmoqda:', serviceType);
    
    const tariffs = tariffsData.instagram[serviceType];
    const container = document.getElementById('instagramGuaranteedTariffs');
    
    if (!container || !tariffs) {
        console.error('❌ Container yoki tariflar topilmadi');
        return;
    }
    
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
    
    // Sarlavhani yangilash
    const titleMap = {
        'guaranteed': 'KAFOLATLANGAN OBUNACHILAR',
        'cheap': 'ARZON OBUNACHILAR',
        'views': 'KO\'RISHLAR',
        'likes': 'LAYKLAR'
    };
    
    const titleElement = document.querySelector('#instagramGuaranteedSection h2');
    if (titleElement) {
        titleElement.innerHTML = `<i class="${serviceType === 'guaranteed' ? 'fas fa-shield-alt' : serviceType === 'cheap' ? 'fas fa-wallet' : serviceType === 'views' ? 'fas fa-eye' : 'fas fa-heart'}"></i> INSTAGRAM ${titleMap[serviceType]}`;
    }
    
    console.log('✅ Instagram tariflari yuklandi:', tariffs.length, 'ta');
}

function loadPubgTariffs() {
    console.log('🎮 PUBG tariflari yuklanmoqda');
    
    const tariffs = tariffsData.pubg;
    const container = document.getElementById('pubgTariffs');
    
    if (!container) {
        console.error('❌ PUBG container topilmadi');
        return;
    }
    
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
    console.log('✅ PUBG tariflari yuklandi:', tariffs.length, 'ta');
}

// 6. SAVATCHA FUNCTIONS
function addToCart(id, name, price) {
    console.log('➕ Savatchaga qo\'shish:', name);
    
    // Mahsulotni qidirish
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
    
    // Yangilash
    updateCartCount();
    saveCart();
    showToast(`✅ "${name}" savatchaga qo'shildi!`, 'success');
    console.log('🛒 Savat yangilandi:', cart);
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

function showCart() {
    console.log('🛒 Savatcha ko\'rsatilmoqda');
    showSection('cartSection');
    renderCartItems();
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    
    if (!container) {
        console.error('❌ Savat container topilmadi');
        return;
    }
    
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
    
    console.log('✅ Savat mahsulotlari ko\'rsatildi:', cart.length, 'ta');
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    updateCartCount();
    saveCart();
    renderCartItems();
    console.log('🔄 Miqdor yangilandi:', cart[index]);
}

function removeFromCart(index) {
    if (confirm('Bu xizmatni savatchadan olib tashlamoqchimisiz?')) {
        const removedItem = cart.splice(index, 1)[0];
        updateCartCount();
        saveCart();
        renderCartItems();
        showToast(`🗑️ "${removedItem.name}" savatchadan olib tashlandi`, 'info');
        console.log('❌ Mahsulot o\'chirildi:', removedItem);
    }
}

function saveCart() {
    localStorage.setItem('smm_cart', JSON.stringify(cart));
}

// 7. CHECKOUT FUNCTIONS
function checkout() {
    console.log('💰 To\'lov sahifasiga o\'tish');
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
    console.log('✅ Buyurtma tafsilotlari ko\'rsatildi');
}

function previewReceipt(event) {
    const preview = document.getElementById('receiptPreview');
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="To'lov cheki">`;
        };
        reader.readAsDataURL(file);
        console.log('📸 Chek yuklandi:', file.name);
    }
}

function confirmPayment() {
    const fileInput = document.getElementById('receiptUpload');
    
    if (!fileInput.files[0]) {
        showToast('❌ Iltimos, to\'lov chekini yuklang', 'error');
        return;
    }
    
    const orderId = 'ORD-' + Date.now();
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const newOrder = {
        id: orderId,
        items: [...cart],
        total: totalPrice,
        date: new Date().toISOString(),
        status: 'pending',
        receipt: fileInput.files[0].name
    };
    
    orders.push(newOrder);
    saveOrders();
    
    // Savatni tozalash
    cart = [];
    saveCart();
    updateCartCount();
    
    showToast('✅ Buyurtmangiz qabul qilindi! Admin tekshirish uchun chekingizni kutmoqda.', 'success');
    
    // Buyurtma tasdiqlash sahifasini ko'rsatish
    showOrderConfirmation(newOrder);
    console.log('✅ To\'lov tasdiqlandi:', orderId);
}

function showOrderConfirmation(order) {
    let html = `
        <div class="order-confirmation">
            <div class="confirmation-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>TO'LOV TASDIQLANDI!</h2>
            <p>Buyurtma raqami: <strong>${order.id}</strong></p>
            <p>Jami to'lov: <strong>${formatPrice(order.total)}</strong></p>
            <p>Sana: <strong>${new Date(order.date).toLocaleDateString('uz-UZ')}</strong></p>
            
            <div class="instructions">
                <h4><i class="fas fa-exclamation-triangle"></i> DIQQAT! HOZIR HARAKAT QILING:</h4>
                <p>Chek rasmini @AdminUsername ga yuboring.</p>
                
                <h4><i class="fas fa-paper-plane"></i> Qanday yuborish:</h4>
                <ol>
                    <li>@AdminUsername ni bosing</li>
                    <li>"Start" tugmasini bosing</li>
                    <li>Chek rasmını yuboring</li>
                    <li>"Buyurtma berdim" deb yozing</li>
                </ol>
                
                <p class="note"><i class="fas fa-clock"></i> Xizmat 1-24 soat ichida boshlanadi.</p>
            </div>
            
            <div class="action-buttons">
                <button onclick="window.open('https://t.me/your_admin_username', '_blank')" class="btn-primary">
                    <i class="fab fa-telegram"></i> CHEKNI ADMINGA YUBORISH
                </button>
                <button onclick="goHome()" class="btn-secondary">
                    <i class="fas fa-home"></i> BOSH MENYUGA QAYTISH
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('modalBody').innerHTML = html;
    modal.style.display = 'flex';
}

// 8. BUYURTMALAR FUNCTIONS
function showOrders() {
    console.log('📋 Buyurtmalar sahifasiga o\'tish');
    showSection('ordersSection');
    loadOrders();
}

function loadOrders() {
    const container = document.getElementById('ordersList');
    
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
        }
        
        html += `
            <div class="order-item">
                <div>
                    <h4>${order.id}</h4>
                    <p>${new Date(order.date).toLocaleDateString('uz-UZ')}</p>
                    <p>${order.items.length} ta xizmat</p>
                </div>
                <div>
                    <div class="${statusClass} order-status">${statusText}</div>
                    <p class="order-total">${formatPrice(order.total)}</p>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    console.log('✅ Buyurtmalar yuklandi:', orders.length, 'ta');
}

function saveOrders() {
    localStorage.setItem('smm_orders', JSON.stringify(orders));
}

// 9. UTILITY FUNCTIONS
function formatPrice(price) {
    return price.toLocaleString('uz-UZ') + ' so\'m';
}

function showToast(message, type = 'info') {
    toastr[type](message);
}

function loadUserName() {
    const userName = localStorage.getItem('smm_userName') || 'Mehmon';
    document.getElementById('userName').textContent = userName;
    
    // Agar birinchi marta kirgan bo'lsa, ism so'rash
    if (!localStorage.getItem('smm_userName')) {
        setTimeout(() => {
            const name = prompt('Ismingizni kiriting:', 'Mehmon');
            if (name) {
                localStorage.setItem('smm_userName', name);
                document.getElementById('userName').textContent = name;
            }
        }, 1000);
    }
}

// 10. INITIAL SAMPLE DATA
if (!localStorage.getItem('smm_orders')) {
    orders = [
        {
            id: 'ORD-123456',
            items: [
                { id: 'tg_premium_1', name: 'Telegram Premium - 1 Oylik', price: 50000, quantity: 1 }
            ],
            total: 50000,
            date: '2024-01-15T10:30:00Z',
            status: 'completed',
            receipt: 'chek.jpg'
        },
        {
            id: 'ORD-123457',
            items: [
                { id: 'ig_likes_1', name: 'Instagram Layklar - 1000 like', price: 5000, quantity: 2 }
            ],
            total: 10000,
            date: '2024-01-18T14:45:00Z',
            status: 'processing',
            receipt: 'chek2.jpg'
        }
    ];
    saveOrders();
}

// 11. GLOBAL FUNCTIONS FOR HTML
window.showCategory = showCategory;
window.showTelegramService = showTelegramService;
window.showInstagramService = showInstagramService;
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.checkout = checkout;
window.previewReceipt = previewReceipt;
window.confirmPayment = confirmPayment;
window.goHome = goHome;
window.goBackToServices = goBackToServices;
window.goBackToTelegram = goBackToTelegram;
window.goBackToInstagram = goBackToInstagram;
window.goBackToCart = goBackToCart;

console.log('🎉 SMM Market veb-ilovasi tayyor! Barcha funksiyalar ishlaydi.');