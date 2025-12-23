// ============================================
// SMM MARKET - TO'LIQ ISHLAYDI (SODDA VERSIYA)
// ============================================

// Telegram Admin username (O'zgartiring)
const ADMIN_USERNAME = "your_admin_username";

// Barcha tarif ma'lumotlari
const tariffsData = {
    telegram: {
        premium: [
            {
                id: 'tg_premium_1',
                name: '1 Oylik Premium',
                description: 'Yuqori sifatli obunachilar',
                price: 50000,
                originalPrice: 60000,
                features: [
                    '✅ 30 kun kafolat',
                    '✅ Aktiv va haqiqiy foydalanuvchilar',
                    '✅ Darhol boshlanadi',
                    '✅ Premium sifat'
                ],
                badge: '1️⃣',
                type: 'premium',
                duration: '1 oy'
            },
            {
                id: 'tg_premium_2',
                name: '3 Oylik Premium',
                description: 'Chegirmali paket',
                price: 170000,
                originalPrice: 180000,
                features: [
                    '✅ 30 kun kafolat',
                    '✅ Aktiv va haqiqiy foydalanuvchilar',
                    '✅ 3 oy uchun katta chegirma',
                    '✅ Uzoq muddatli foydalanish'
                ],
                badge: '2️⃣',
                type: 'premium',
                duration: '3 oy'
            },
            {
                id: 'tg_premium_3',
                name: '6 Oylik Premium',
                description: 'Eng katta chegirma',
                price: 225000,
                originalPrice: 360000,
                features: [
                    '✅ 30 kun kafolat',
                    '✅ Aktiv va haqiqiy foydalanuvchilar',
                    '✅ 6 oy uchun super chegirma',
                    '✅ Eng iqtisodiy variant'
                ],
                badge: '3️⃣',
                type: 'premium',
                duration: '6 oy'
            }
        ],
        stars: [
            {
                id: 'tg_stars_1',
                name: '100 Stars',
                description: 'Kichik paket',
                price: 25000,
                originalPrice: 30000,
                features: [
                    '✅ Barcha kanallar va guruhlar uchun',
                    '✅ Tez yetkazib berish',
                    '✅ 100% xavfsiz',
                    '✅ Darhol faollashadi'
                ],
                badge: '1️⃣',
                type: 'stars',
                quantity: '100'
            },
            {
                id: 'tg_stars_2',
                name: '500 Stars',
                description: 'O\'rta paket',
                price: 120000,
                originalPrice: 125000,
                features: [
                    '✅ Barcha kanallar va guruhlar uchun',
                    '✅ Tez yetkazib berish',
                    '✅ 100% xavfsiz',
                    '✅ Yaxshi miqdor'
                ],
                badge: '2️⃣',
                type: 'stars',
                quantity: '500'
            },
            {
                id: 'tg_stars_3',
                name: '1000 Stars',
                description: 'Katta paket',
                price: 230000,
                originalPrice: 250000,
                features: [
                    '✅ Barcha kanallar va guruhlar uchun',
                    '✅ Tez yetkazib berish',
                    '✅ 100% xavfsiz',
                    '✅ Professional darajada'
                ],
                badge: '3️⃣',
                type: 'stars',
                quantity: '1000'
            },
            {
                id: 'tg_stars_4',
                name: '5000 Stars',
                description: 'Professional paket',
                price: 1150000,
                originalPrice: 1250000,
                features: [
                    '✅ Barcha kanallar va guruhlar uchun',
                    '✅ Tez yetkazib berish',
                    '✅ 100% xavfsiz',
                    '✅ Biznes darajada'
                ],
                badge: '4️⃣',
                type: 'stars',
                quantity: '5000'
            },
            {
                id: 'tg_stars_5',
                name: '10000 Stars',
                description: 'Biznes paket',
                price: 2250000,
                originalPrice: 2500000,
                features: [
                    '✅ Barcha kanallar va guruhlar uchun',
                    '✅ Tez yetkazib berish',
                    '✅ 100% xavfsiz',
                    '✅ Katta hajmdagi loyihalar uchun'
                ],
                badge: '5️⃣',
                type: 'stars',
                quantity: '10000'
            }
        ],
        gift: [
            {
                id: 'tg_gift_1',
                name: 'Gift-ayiqcha',
                emoji: '🐻',
                price: 5000,
                description: 'Sevimli ayiqcha sovg\'asi',
                features: [
                    '✅ Darhol yetkazib berish',
                    '✅ Eng yangi sovg\'a',
                    '✅ Barcha uchun',
                    '✅ 100% xavfsiz'
                ],
                type: 'gift',
                badge: '1️⃣'
            },
            {
                id: 'tg_gift_2',
                name: 'Gift-yurakcha',
                emoji: '❤️',
                price: 5000,
                description: 'Muhabbat ramzi',
                features: [
                    '✅ Darhol yetkazib berish',
                    '✅ Eng yangi sovg\'a',
                    '✅ Barcha uchun',
                    '✅ 100% xavfsiz'
                ],
                type: 'gift',
                badge: '2️⃣'
            },
            {
                id: 'tg_gift_3',
                name: 'Gift-sovga',
                emoji: '🎁',
                price: 7000,
                description: 'Oddiy sovg\'a',
                features: [
                    '✅ Darhol yetkazib berish',
                    '✅ Eng yangi sovg\'a',
                    '✅ Barcha uchun',
                    '✅ 100% xavfsiz'
                ],
                type: 'gift',
                badge: '3️⃣'
            },
            {
                id: 'tg_gift_4',
                name: 'Gift-AtirGul',
                emoji: '🌹',
                price: 7000,
                description: 'Romantik atirgul',
                features: [
                    '✅ Darhol yetkazib berish',
                    '✅ Eng yangi sovg\'a',
                    '✅ Barcha uchun',
                    '✅ 100% xavfsiz'
                ],
                type: 'gift',
                badge: '4️⃣'
            },
            {
                id: 'tg_gift_5',
                name: 'Gift-Guldasta',
                emoji: '💐',
                price: 13000,
                description: 'Go\'zal guldasta',
                features: [
                    '✅ Darhol yetkazib berish',
                    '✅ Eng yangi sovg\'a',
                    '✅ Barcha uchun',
                    '✅ 100% xavfsiz'
                ],
                type: 'gift',
                badge: '5️⃣'
            }
        ]
    },
    instagram: {
        guaranteed: [
            { 
                id: 'ig_guaranteed_1', 
                name: '1000 obunachi', 
                price: 15000, 
                originalPrice: 20000,
                badge: '1️⃣',
                features: ['✅ 90 kun kafolat', '✅ Haqiqiy va aktiv', '✅ 24 soat ichida boshlanadi', '✅ Yuqori sifat']
            },
            { 
                id: 'ig_guaranteed_2', 
                name: '2000 obunachi', 
                price: 23000, 
                originalPrice: 30000,
                badge: '2️⃣',
                features: ['✅ 90 kun kafolat', '✅ Haqiqiy va aktiv', '✅ 24 soat ichida boshlanadi', '✅ Katta chegirma']
            },
            { 
                id: 'ig_guaranteed_3', 
                name: '3000 obunachi', 
                price: 27000, 
                originalPrice: 45000,
                badge: '3️⃣',
                features: ['✅ 90 kun kafolat', '✅ Haqiqiy va aktiv', '✅ 24 soat ichida boshlanadi', '✅ Super paket']
            },
            { 
                id: 'ig_guaranteed_4', 
                name: '5000 obunachi', 
                price: 40000, 
                originalPrice: 75000,
                badge: '4️⃣',
                features: ['✅ 90 kun kafolat', '✅ Haqiqiy va aktiv', '✅ 24 soat ichida boshlanadi', '✅ Biznes darajada']
            }
        ],
        cheap: [
            { 
                id: 'ig_cheap_1', 
                name: '1000 obunachi', 
                price: 11000, 
                originalPrice: 15000,
                badge: '1️⃣',
                features: ['✅ Hamyonbop narxlar', '✅ O\'rtacha sifat', '✅ Tezkor yetkazib berish', '✅ Darhol boshlanadi']
            },
            { 
                id: 'ig_cheap_2', 
                name: '2000 obunachi', 
                price: 16000, 
                originalPrice: 22000,
                badge: '2️⃣',
                features: ['✅ Hamyonbop narxlar', '✅ O\'rtacha sifat', '✅ Tezkor yetkazib berish', '✅ Kichik loyihalar uchun']
            },
            { 
                id: 'ig_cheap_3', 
                name: '3000 obunachi', 
                price: 20000, 
                originalPrice: 33000,
                badge: '3️⃣',
                features: ['✅ Hamyonbop narxlar', '✅ O\'rtacha sifat', '✅ Tezkor yetkazib berish', '✅ O\'rta paket']
            },
            { 
                id: 'ig_cheap_4', 
                name: '5000 obunachi', 
                price: 27000, 
                originalPrice: 45000,
                badge: '4️⃣',
                features: ['✅ Hamyonbop narxlar', '✅ O\'rtacha sifat', '✅ Tezkor yetkazib berish', '✅ Katta hajm']
            }
        ],
        views: [
            { 
                id: 'ig_views_1', 
                name: '1000 ko\'rish', 
                price: 1000, 
                originalPrice: 1500,
                badge: '1️⃣',
                features: ['✅ Postlarni ommalashtirish', '✅ Organic ko\'rishlar', '✅ Profil faolligini oshirish', '✅ Darhol boshlanadi']
            },
            { 
                id: 'ig_views_2', 
                name: '5000 ko\'rish', 
                price: 3000, 
                originalPrice: 5000,
                badge: '2️⃣',
                features: ['✅ Postlarni ommalashtirish', '✅ Organic ko\'rishlar', '✅ Profil faolligini oshirish', '✅ O\'rta hajm']
            },
            { 
                id: 'ig_views_3', 
                name: '10000 ko\'rish', 
                price: 7000, 
                originalPrice: 12000,
                badge: '3️⃣',
                features: ['✅ Postlarni ommalashtirish', '✅ Organic ko\'rishlar', '✅ Profil faolligini oshirish', '✅ Katta hajm']
            },
            { 
                id: 'ig_views_4', 
                name: '50000 ko\'rish', 
                price: 19000, 
                originalPrice: 30000,
                badge: '4️⃣',
                features: ['✅ Postlarni ommalashtirish', '✅ Organic ko\'rishlar', '✅ Profil faolligini oshirish', '✅ Viral post uchun']
            }
        ],
        likes: [
            { 
                id: 'ig_likes_1', 
                name: '1000 like', 
                price: 5000, 
                originalPrice: 7000,
                badge: '1️⃣',
                features: ['✅ Interaktivlikni oshirish', '✅ Post reytingini yaxshilash', '✅ Tezkor yetkazib berish', '✅ Darhol boshlanadi']
            },
            { 
                id: 'ig_likes_2', 
                name: '5000 like', 
                price: 25000, 
                originalPrice: 35000,
                badge: '2️⃣',
                features: ['✅ Interaktivlikni oshirish', '✅ Post reytingini yaxshilash', '✅ Tezkor yetkazib berish', '✅ O\'rta hajm']
            },
            { 
                id: 'ig_likes_3', 
                name: '10000 like', 
                price: 50000, 
                originalPrice: 70000,
                badge: '3️⃣',
                features: ['✅ Interaktivlikni oshirish', '✅ Post reytingini yaxshilash', '✅ Tezkor yetkazib berish', '✅ Katta hajm']
            },
            { 
                id: 'ig_likes_4', 
                name: '50000 like', 
                price: 140000, 
                originalPrice: 200000,
                badge: '4️⃣',
                features: ['✅ Interaktivlikni oshirish', '✅ Post reytingini yaxshilash', '✅ Tezkor yetkazib berish', '✅ Viral post uchun']
            }
        ]
    },
    pubg: [
        { 
            id: 'pubg_1', 
            name: '60 UC', 
            flag: '🇺🇸', 
            price: 14000, 
            originalPrice: 15000,
            badge: '1️⃣',
            features: ['✅ Darhol yetkazib berish', '✅ Barcha serverlar uchun', '✅ 100% xavfsiz', '✅ Kichik paket']
        },
        { 
            id: 'pubg_2', 
            name: '325 UC', 
            flag: '🇺🇸', 
            price: 66000, 
            originalPrice: 70000,
            badge: '2️⃣',
            features: ['✅ Darhol yetkazib berish', '✅ Barcha serverlar uchun', '✅ 100% xavfsiz', '✅ O\'rta paket']
        },
        { 
            id: 'pubg_3', 
            name: '660 UC', 
            flag: '🇺🇸', 
            price: 134000, 
            originalPrice: 150000,
            badge: '3️⃣',
            features: ['✅ Darhol yetkazib berish', '✅ Barcha serverlar uchun', '✅ 100% xavfsiz', '✅ Katta paket']
        },
        { 
            id: 'pubg_4', 
            name: '1800 UC', 
            flag: '🇺🇸', 
            price: 335000, 
            originalPrice: 380000,
            badge: '4️⃣',
            features: ['✅ Darhol yetkazib berish', '✅ Barcha serverlar uchun', '✅ 100% xavfsiz', '✅ Katta chegirma']
        },
        { 
            id: 'pubg_5', 
            name: '3850 UC', 
            flag: '🇺🇸', 
            price: 650000, 
            originalPrice: 700000,
            badge: '5️⃣',
            features: ['✅ Darhol yetkazib berish', '✅ Barcha serverlar uchun', '✅ 100% xavfsiz', '✅ Professional paket']
        },
        { 
            id: 'pubg_6', 
            name: '8100 UC', 
            flag: '🇺🇸', 
            price: 1620000, 
            originalPrice: 1800000,
            badge: '6️⃣',
            features: ['✅ Darhol yetkazib berish', '✅ Barcha serverlar uchun', '✅ 100% xavfsiz', '✅ Ultimate paket']
        }
    ]
};

// ============================================
// STATE MANAGEMENT
// ============================================

let cart = JSON.parse(localStorage.getItem('smm_cart')) || [];
let orders = JSON.parse(localStorage.getItem('smm_orders')) || [];

// ============================================
// DOM ELEMENTS
// ============================================

const sections = document.querySelectorAll('.section');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close-modal');
const cartCount = document.getElementById('cartCount');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// ============================================
// TOASTR CONFIGURATION
// ============================================

toastr.options = {
    positionClass: 'toast-top-right',
    progressBar: true,
    timeOut: 3000,
    closeButton: true
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 SMM Market veb-sahifasi yuklandi!');
    
    updateCartCount();
    loadUserName();
    setupEventListeners();
    loadOrders();
    
    // Agar foydalanuvchi birinchi marta kelsa, ismini so'rash
    if (!localStorage.getItem('smm_visited')) {
        setTimeout(() => {
            const name = prompt('Ismingizni kiriting:', 'Mehmon');
            if (name && name.trim() !== '') {
                localStorage.setItem('smm_userName', name);
                document.getElementById('userName').textContent = name;
            }
            localStorage.setItem('smm_visited', 'true');
        }, 1000);
    }
});

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    console.log('🔧 Event listenerlar sozlanmoqda...');
    
    // Navigation buttons
    document.getElementById('homeBtn').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('homeSection');
    });
    
    document.getElementById('servicesBtn').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('servicesSection');
    });
    
    document.getElementById('cartBtn').addEventListener('click', function(e) {
        e.preventDefault();
        showCart();
    });
    
    document.getElementById('ordersBtn').addEventListener('click', function(e) {
        e.preventDefault();
        showOrders();
    });
    
    // Main buttons
    document.getElementById('showServicesBtn').addEventListener('click', function() {
        showSection('servicesSection');
    });
    
    document.getElementById('contactAdminBtn').addEventListener('click', function() {
        window.open(`https://t.me/${ADMIN_USERNAME}`, '_blank');
    });
    
    // Mobile menu
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Modal close
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close mobile menu when clicking on link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    console.log('✅ Barcha event listenerlar qo\'shildi');
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

function showSection(sectionId) {
    console.log('🔄 Sahifaga o\'tish:', sectionId);
    
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Load content if needed
        if (sectionId === 'telegramPremiumSection') {
            loadTelegramTariffs('premium');
        } else if (sectionId === 'telegramStarsSection') {
            loadTelegramTariffs('stars');
        } else if (sectionId === 'telegramGiftSection') {
            loadTelegramTariffs('gift');
        } else if (sectionId === 'instagramGuaranteedSection') {
            loadInstagramTariffs('guaranteed');
        } else if (sectionId === 'instagramCheapSection') {
            loadInstagramTariffs('cheap');
        } else if (sectionId === 'instagramViewsSection') {
            loadInstagramTariffs('views');
        } else if (sectionId === 'instagramLikesSection') {
            loadInstagramTariffs('likes');
        } else if (sectionId === 'pubgSection') {
            loadPubgTariffs();
        }
        
        // Close mobile menu
        navLinks.classList.remove('active');
    }
}

// ============================================
// SERVICE NAVIGATION
// ============================================

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
    
    switch(service) {
        case 'guaranteed':
            showSection('instagramGuaranteedSection');
            break;
        case 'cheap':
            showSection('instagramCheapSection');
            break;
        case 'views':
            showSection('instagramViewsSection');
            break;
        case 'likes':
            showSection('instagramLikesSection');
            break;
    }
}

// ============================================
// BACK NAVIGATION
// ============================================

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

// ============================================
// TARIFF LOADING FUNCTIONS
// ============================================

function loadTelegramTariffs(serviceType) {
    console.log('📊 Telegram tariflari yuklanmoqda:', serviceType);
    
    const tariffs = tariffsData.telegram[serviceType];
    let sectionId;
    
    switch(serviceType) {
        case 'premium':
            sectionId = 'telegramPremiumTariffs';
            break;
        case 'stars':
            sectionId = 'telegramStarsTariffs';
            break;
        case 'gift':
            sectionId = 'telegramGiftTariffs';
            break;
    }
    
    const container = document.getElementById(sectionId);
    if (!container) return;
    
    let html = '';
    tariffs.forEach(tariff => {
        const discount = tariff.originalPrice ? 
            Math.round(((tariff.originalPrice - tariff.price) / tariff.originalPrice) * 100) : 0;
        
        html += `
            <div class="tariff-card">
                <div class="tariff-header">
                    <span class="tariff-badge">${tariff.badge}</span>
                    <div>
                        ${tariff.originalPrice ? `
                            <span class="original-price">${formatPrice(tariff.originalPrice)}</span>
                        ` : ''}
                        <span class="tariff-price">${formatPrice(tariff.price)}</span>
                        ${discount > 0 ? `
                            <div class="discount-badge">-${discount}%</div>
                        ` : ''}
                    </div>
                </div>
                <h3>${tariff.emoji ? tariff.emoji + ' ' : ''}${tariff.name}</h3>
                <p>${tariff.description}</p>
                <ul class="tariff-features">
                    ${tariff.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
                <button class="btn-service" onclick="addToCart('${tariff.id}', 'Telegram ${tariff.type === 'premium' ? 'Premium' : tariff.type === 'stars' ? 'Stars' : 'Gift'} - ${tariff.name}', ${tariff.price})">
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
    let sectionId, title, icon;
    
    switch(serviceType) {
        case 'guaranteed':
            sectionId = 'instagramGuaranteedTariffs';
            title = 'INSTAGRAM KAFOLATLANGAN OBUNACHILAR';
            icon = 'fas fa-shield-alt';
            break;
        case 'cheap':
            sectionId = 'instagramCheapTariffs';
            title = 'INSTAGRAM ARZON OBUNACHILAR';
            icon = 'fas fa-wallet';
            break;
        case 'views':
            sectionId = 'instagramViewsTariffs';
            title = 'INSTAGRAM KO\'RISHLAR';
            icon = 'fas fa-eye';
            break;
        case 'likes':
            sectionId = 'instagramLikesTariffs';
            title = 'INSTAGRAM LAYKLAR';
            icon = 'fas fa-heart';
            break;
    }
    
    const container = document.getElementById(sectionId);
    if (!container) return;
    
    let html = '';
    tariffs.forEach(tariff => {
        const discount = tariff.originalPrice ? 
            Math.round(((tariff.originalPrice - tariff.price) / tariff.originalPrice) * 100) : 0;
        
        html += `
            <div class="tariff-card">
                <div class="tariff-header">
                    <span class="tariff-badge">${tariff.badge}</span>
                    <div>
                        ${tariff.originalPrice ? `
                            <span class="original-price">${formatPrice(tariff.originalPrice)}</span>
                        ` : ''}
                        <span class="tariff-price">${formatPrice(tariff.price)}</span>
                        ${discount > 0 ? `
                            <div class="discount-badge">-${discount}%</div>
                        ` : ''}
                    </div>
                </div>
                <h3>${tariff.name}</h3>
                <ul class="tariff-features">
                    ${tariff.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
                <button class="btn-service" onclick="addToCart('${tariff.id}', 'Instagram ${serviceType === 'guaranteed' ? 'Kafolatlangan' : serviceType === 'cheap' ? 'Arzon' : serviceType === 'views' ? 'Ko\'rishlar' : 'Layklar'} - ${tariff.name}', ${tariff.price})">
                    <i class="fas fa-cart-plus"></i> Savatchaga qo'shish
                </button>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Update section title
    const titleElement = document.querySelector(`#${sectionId.replace('Tariffs', 'Section')} h2`);
    if (titleElement) {
        titleElement.innerHTML = `<i class="${icon}"></i> ${title}`;
    }
}

function loadPubgTariffs() {
    console.log('🎮 PUBG tariflari yuklanmoqda');
    
    const tariffs = tariffsData.pubg;
    const container = document.getElementById('pubgTariffs');
    
    if (!container) return;
    
    let html = '';
    tariffs.forEach(tariff => {
        const discount = tariff.originalPrice ? 
            Math.round(((tariff.originalPrice - tariff.price) / tariff.originalPrice) * 100) : 0;
        
        html += `
            <div class="tariff-card">
                <div class="tariff-header">
                    <span class="tariff-badge">${tariff.badge}</span>
                    <div>
                        ${tariff.originalPrice ? `
                            <span class="original-price">${formatPrice(tariff.originalPrice)}</span>
                        ` : ''}
                        <span class="tariff-price">${formatPrice(tariff.price)}</span>
                        ${discount > 0 ? `
                            <div class="discount-badge">-${discount}%</div>
                        ` : ''}
                    </div>
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

// ============================================
// CART FUNCTIONS (MUAMMONI TEGILADIGAN QISMI)
// ============================================

// Global addToCart function
window.addToCart = function(id, name, price) {
    console.log('➕ Savatchaga qo\'shish ishlayapti:', id, name, price);
    
    // TOAST XABARI - BIRINCHI ISHLAYDI
    showToast(`✅ "${name}" savatchaga qo'shildi!`, 'success');
    
    // Check if item already exists
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
        console.log('✅ Miqdor oshirildi:', existingItem);
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1,
            date: new Date().toISOString()
        });
        console.log('✅ Yangi mahsulot qo\'shildi:', name);
    }
    
    // Update cart count
    updateCartCount();
    
    // Save to localStorage
    saveCart();
    
    // Konsolga chiqarish
    console.log('🛒 Joriy savat:', cart);
    console.log('🔢 Savatdagi mahsulotlar soni:', cart.length);
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    console.log('🔄 Savat soni yangilandi:', totalItems);
}

function showCart() {
    showSection('cartSection');
    renderCartItems();
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
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
        console.log('🛒 Savat bo\'sh');
        return;
    }
    
    let html = '';
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
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
                <div class="cart-item-price">
                    ${formatPrice(itemTotal)}
                </div>
                <button onclick="removeFromCart(${index})" class="remove-item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });
    
    container.innerHTML = html;
    document.getElementById('totalPrice').textContent = formatPrice(totalPrice);
    document.getElementById('checkoutBtn').disabled = false;
    
    console.log('✅ Savat mahsulotlari ko\'rsatildi:', cart.length, 'ta mahsulot');
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

window.removeFromCart = function(index) {
    if (confirm('Bu xizmatni savatchadan olib tashlamoqchimisiz?')) {
        cart.splice(index, 1);
        updateCartCount();
        saveCart();
        renderCartItems();
        showToast('🗑️ Mahsulot savatchadan olib tashlandi', 'info');
    }
}

function saveCart() {
    localStorage.setItem('smm_cart', JSON.stringify(cart));
    console.log('💾 Savat localStorage ga saqlandi');
}

// ============================================
// CHECKOUT FUNCTIONS
// ============================================

function checkout() {
    showSection('checkoutSection');
    renderOrderDetails();
}

function renderOrderDetails() {
    const container = document.getElementById('orderDetails');
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let html = `
        <div class="order-summary">
            <h3><i class="fas fa-shopping-bag"></i> BUYURTMA TAFSILOTLARI</h3>
            <div class="order-items-list">
    `;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        html += `
            <div class="order-item-detail">
                <div class="item-info">
                    <span class="item-name">${item.name}</span>
                    <span class="item-quantity">${item.quantity} x ${formatPrice(item.price)}</span>
                </div>
                <span class="item-total">${formatPrice(itemTotal)}</span>
            </div>
        `;
    });
    
    html += `
            </div>
            <div class="order-total-summary">
                <span><strong>Jami to'lov:</strong></span>
                <span class="total-amount"><strong>${formatPrice(totalPrice)}</strong></span>
            </div>
        </div>
        
        <div class="payment-info">
            <h3><i class="fas fa-credit-card"></i> TO'LOV KARTASI:</h3>
            <div class="bank-card">
                <div class="card-number">9860 3466 0765 9874</div>
                <div class="card-holder">ADHAMJONOV OTABEK</div>
                <div class="card-bank">Kapital Bank</div>
            </div>
            
            <div class="instructions">
                <h4><i class="fas fa-list-ol"></i> Buyurtma berish tartibi:</h4>
                <ol>
                    <li>Yuqoridagi bank kartasiga to'lov qiling</li>
                    <li>To'lov chekining skrinshotini oling</li>
                    <li>Quyidagi "✅ TO'LOV QILDIM" tugmasini bosing</li>
                    <li>Chek rasmını Adminga yuboring</li>
                </ol>
            </div>
            
            <div class="checkout-buttons">
                <button onclick="confirmPayment()" class="btn-primary">
                    <i class="fas fa-check"></i> ✅ TO'LOV QILDIM
                </button>
                <button onclick="goBackToCart()" class="btn-secondary">
                    <i class="fas fa-times"></i> ❌ BEKOR QILISH
                </button>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

window.confirmPayment = function() {
    const orderId = 'ORD-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Create order
    const currentOrder = {
        id: orderId,
        items: [...cart],
        total: totalPrice,
        date: new Date().toISOString(),
        status: 'pending',
        user: localStorage.getItem('smm_userName') || 'Mehmon'
    };
    
    // Add to orders
    orders.push(currentOrder);
    saveOrders();
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();
    
    // Show success message
    showToast('✅ Buyurtmangiz qabul qilindi! Endi chekni adminga yuboring.', 'success');
    
    // Show telegram send modal
    showTelegramSendModal(currentOrder);
}

// ============================================
// TELEGRAM SEND MODAL (BOTDAGIDEK)
// ============================================

function showTelegramSendModal(order) {
    let html = `
        <div class="telegram-send-modal">
            <div class="confirmation-icon">
                <i class="fab fa-telegram"></i>
            </div>
            <h2>TO'LOV QILIB BO'LDINGIZ!</h2>
            
            <div class="order-info">
                <p><strong>Buyurtma raqami:</strong> ${order.id}</p>
                <p><strong>Jami to'lov:</strong> ${formatPrice(order.total)}</p>
                <p><strong>Sana:</strong> ${new Date(order.date).toLocaleDateString('uz-UZ')}</p>
            </div>
            
            <div class="instructions">
                <h3><i class="fas fa-exclamation-triangle"></i> ENDI CHEKNI ADMINGA YUBORING!</h3>
                <p>To'lov chekini Telegram orqali @${ADMIN_USERNAME} ga yuboring:</p>
                
                <div class="telegram-steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <p>Quyidagi tugmani bosing</p>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <p>Telegram'da "Start" tugmasini bosing</p>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <p>To'lov chekini rasm sifatida yuboring</p>
                    </div>
                    <div class="step">
                        <div class="step-number">4</div>
                        <p>"Buyurtma raqami: ${order.id}" deb yozing</p>
                    </div>
                </div>
                
                <div class="note-box">
                    <p><i class="fas fa-info-circle"></i> <strong>Eslatma:</strong> Chekni faqat rasm shaklida yuboring. Xizmat 1-24 soat ichida boshlanadi.</p>
                </div>
            </div>
            
            <div class="telegram-action">
                <a href="https://t.me/${ADMIN_USERNAME}" target="_blank" class="btn-primary telegram-btn">
                    <i class="fab fa-telegram"></i> CHEKNI @${ADMIN_USERNAME} GA YUBORISH
                </a>
            </div>
            
            <div class="modal-footer-buttons">
                <button onclick="showHomeAfterOrder()" class="btn-secondary">
                    <i class="fas fa-home"></i> BOSH SAHIFAGA QAYTISH
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('modalBody').innerHTML = html;
    modal.style.display = 'flex';
}

window.showHomeAfterOrder = function() {
    modal.style.display = 'none';
    showSection('homeSection');
}

// ============================================
// ORDERS FUNCTIONS
// ============================================

function showOrders() {
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
}

function saveOrders() {
    localStorage.setItem('smm_orders', JSON.stringify(orders));
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatPrice(price) {
    return price.toLocaleString('uz-UZ') + ' so\'m';
}

function showToast(message, type = 'info') {
    toastr[type](message);
}

function loadUserName() {
    const userName = localStorage.getItem('smm_userName') || 'Mehmon';
    document.getElementById('userName').textContent = userName;
}

// ============================================
// SAMPLE DATA (for first time users)
// ============================================

if (!localStorage.getItem('smm_orders')) {
    orders = [
        {
            id: 'ORD-123456',
            items: [
                { id: 'tg_premium_1', name: 'Telegram Premium - 1 Oylik Premium', price: 50000, quantity: 1 }
            ],
            total: 50000,
            date: '2024-01-15T10:30:00Z',
            status: 'completed',
            user: 'Foydalanuvchi'
        },
        {
            id: 'ORD-123457',
            items: [
                { id: 'ig_likes_1', name: 'Instagram Layklar - 1000 like', price: 5000, quantity: 2 }
            ],
            total: 10000,
            date: '2024-01-18T14:45:00Z',
            status: 'processing',
            user: 'Foydalanuvchi'
        }
    ];
    saveOrders();
}

// ============================================
// TEST FUNCTION - Savatchaga test qo'shish
// ============================================

window.testAddToCart = function() {
    console.log('🧪 Test: Savatchaga qo\'shish');
    
    // Test mahsulot
    const testProduct = {
        id: 'test_1',
        name: 'Test Mahsulot',
        price: 10000
    };
    
    addToCart(testProduct.id, testProduct.name, testProduct.price);
}

// ============================================
// GLOBAL FUNCTIONS FOR HTML
// ============================================

window.showCategory = showCategory;
window.showTelegramService = showTelegramService;
window.showInstagramService = showInstagramService;
window.checkout = checkout;
window.goHome = goHome;
window.goBackToServices = goBackToServices;
window.goBackToTelegram = goBackToTelegram;
window.goBackToInstagram = goBackToInstagram;
window.goBackToCart = goBackToCart;

console.log('🎉 SMM Market veb-ilovasi tayyor! Barcha funksiyalar ishlaydi.');
console.log('🔧 Savatchaga qo\'shish funksiyasi mavjud:', typeof addToCart);