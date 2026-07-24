/* ==========================================
   SHOP ENGINE WITH CART & WHATSAPP CHECKOUT
   ========================================== */

const WHATSAPP_NUMBER = "923400085347";

// Products Data
const productsData = [
    { id: 1, name: "Royal Oud Intense Eau De Parfum 100ml", category: "perfumes", brand: "Noor-Ul-Ain", price: 4800, oldPrice: 6000, badge: "SAVE 20%", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop" },
    { id: 2, name: "Velvet Amber Luxe EDP 100ml", category: "perfumes", brand: "Noor-Ul-Ain", price: 5200, oldPrice: 6500, badge: "BESTSELLER", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop" },
    { id: 3, name: "Premium Egyptian Cotton Latha 4.5m", category: "men-unstitched", brand: "NOORCART", price: 3500, oldPrice: 4200, badge: "HOT", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=600&auto=format&fit=crop" },
    { id: 4, name: "Luxury Embroidered Lawn 3-Piece", category: "women-unstitched", brand: "NOORCART", price: 6800, oldPrice: 8000, badge: "NEW", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop" },
    { id: 5, name: "Embroidered Silk Designer Kurti", category: "ready-to-wear", brand: "NOORCART", price: 5200, oldPrice: 0, badge: "TRENDING", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop" },
    { id: 6, name: "Air-Pro Cushion Running Sneakers", category: "shoes", brand: "NOORCART", price: 6900, oldPrice: 8500, badge: "SALE", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop" },
    { id: 7, name: "Pro-Grade Leather Football", category: "sports", brand: "NOORCART", price: 2400, oldPrice: 3000, badge: "TOP RATED", image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?q=80&w=600&auto=format&fit=crop" },
    { id: 8, name: "Rose Musk Signature Parfum 50ml", category: "perfumes", brand: "Noor-Ul-Ain", price: 3900, oldPrice: 4500, badge: "NEW", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop" }
];

// CART STATE
let cart = JSON.parse(localStorage.getItem('noorcart_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    // Filter Params Setup
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat') || urlParams.get('type');

    if (catParam) {
        const catRadio = document.querySelector(`input[name="categoryFilter"][value="${catParam}"]`);
        if (catRadio) {
            catRadio.checked = true;
        } else {
            window.activeCategoryOverride = catParam;
        }
    }

    renderProducts();
    updateCartUI();

    // Event Listeners
    const searchInput = document.getElementById('filterSearch');
    const priceRange = document.getElementById('priceRange');
    const sortSelect = document.getElementById('sortSelect');
    const categoryRadios = document.querySelectorAll('input[name="categoryFilter"]');

    if (searchInput) searchInput.addEventListener('input', renderProducts);
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            const priceValElem = document.getElementById('priceValue');
            if (priceValElem) priceValElem.innerText = `PKR ${parseInt(e.target.value).toLocaleString()}`;
            renderProducts();
        });
    }
    if (sortSelect) sortSelect.addEventListener('change', renderProducts);
    categoryRadios.forEach(radio => radio.addEventListener('change', () => {
        window.activeCategoryOverride = null;
        renderProducts();
    }));
});

/* --- CART ENGINE FUNCTIONS --- */
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    updateCartUI();
    toggleCartDrawer(true);
}

function updateQuantity(productId, change) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        cart[index].qty += change;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('noorcart_cart', JSON.stringify(cart));
}

function toggleCartDrawer(open) {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer && overlay) {
        if (open) {
            drawer.classList.add('active');
            overlay.classList.add('active');
        } else {
            drawer.classList.remove('active');
            overlay.classList.remove('active');
        }
    }
}

function updateCartUI() {
    const cartList = document.getElementById('cartItemList');
    const totalDisplay = document.getElementById('cartTotalDisplay');
    const badgeCount = document.getElementById('cartBadgeCount');

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (badgeCount) badgeCount.innerText = totalQty;
    if (totalDisplay) totalDisplay.innerText = `PKR ${totalPrice.toLocaleString()}`;

    if (!cartList) return;

    if (cart.length === 0) {
        cartList.innerHTML = `
            <div class="text-center py-5">
                <i class="fa-solid fa-cart-shopping fs-1 text-muted mb-2"></i>
                <p class="text-muted mb-0">Your shopping cart is empty.</p>
            </div>
        `;
        return;
    }

    cartList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="flex-grow-1">
                <div class="cart-item-title">${item.name}</div>
                <div class="text-success fw-bold" style="font-size: 0.85rem;">PKR ${item.price.toLocaleString()}</div>
                <div class="d-flex align-items-center gap-2 mt-1">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="fw-bold" style="font-size: 0.85rem;">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="btn btn-sm text-danger" onclick="updateQuantity(${item.id}, -${item.qty})">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `).join('');
}

function checkoutViaWhatsApp() {
    if (cart.length === 0) return alert("Your cart is empty!");

    let message = `*NEW ORDER - NOORCART*\n----------------------------\n`;
    let grandTotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        grandTotal += itemTotal;
        message += `${index + 1}. *${item.name}*\n   Qty: ${item.qty} x PKR ${item.price.toLocaleString()} = PKR ${itemTotal.toLocaleString()}\n`;
    });

    message += `----------------------------\n*Grand Total: PKR ${grandTotal.toLocaleString()}*\n\nPlease share details for Delivery & Payment.`;

    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
}

/* --- PRODUCT RENDERING --- */
function renderProducts() {
    const grid = document.getElementById('productGrid');
    const countDisplay = document.getElementById('productCount');
    if (!grid) return;

    const searchVal = (document.getElementById('filterSearch')?.value || '').toLowerCase();
    const maxPrice = parseInt(document.getElementById('priceRange')?.value || 100000);
    const selectedCategory = window.activeCategoryOverride || document.querySelector('input[name="categoryFilter"]:checked')?.value || 'all';
    const sortVal = document.getElementById('sortSelect')?.value || 'newest';

    let filtered = productsData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchVal);
        const matchesPrice = item.price <= maxPrice;
        const matchesCategory = (selectedCategory === 'all') || (item.category.toLowerCase() === selectedCategory.toLowerCase());
        return matchesSearch && matchesPrice && matchesCategory;
    });

    if (sortVal === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sortVal === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sortVal === 'name-az') filtered.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortVal === 'oldest') filtered.sort((a, b) => a.id - b.id);
    else filtered.sort((a, b) => b.id - a.id);

    if (countDisplay) countDisplay.innerText = `Showing ${filtered.length} products`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fa-solid fa-box-open fs-1 text-muted mb-3"></i>
                <h4 class="fw-bold">No Products Found</h4>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(item => `
        <div class="col-12 col-sm-6 col-lg-4" data-aos="fade-up">
            <div class="product-card">
                ${item.badge ? `<span class="badge-offer">${item.badge}</span>` : ''}
                <span class="badge-brand">${item.brand}</span>
                <div class="product-thumb">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="product-details">
                    <span class="product-cat">${item.category.replace('-', ' ')}</span>
                    <h3 class="product-title">${item.name}</h3>
                    <div class="price-box">
                        <span class="current-price">PKR ${item.price.toLocaleString()}</span>
                        ${item.oldPrice ? `<span class="old-price">PKR ${item.oldPrice.toLocaleString()}</span>` : ''}
                    </div>
                    <button onclick="addToCart(${item.id})" class="btn-whatsapp-order w-100 mt-2">
                        <i class="fa-solid fa-cart-plus me-1"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}