const WHATSAPP_NUMBER = "923400085347";

const productsData = [
    { id: 1, name: "Royal Oud Intense Eau De Parfum 100ml", category: "perfumes", brand: "Noor-Ul-Ain", price: 4800, oldPrice: 6000, badge: "SAVE 20%", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop" },
    { id: 2, name: "Velvet Amber Luxe EDP 100ml", category: "perfumes", brand: "Noor-Ul-Ain", price: 5200, oldPrice: 6500, badge: "BESTSELLER", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop" },
    { id: 3, name: "Premium Egyptian Cotton Latha 4.5m", category: "men-unstitched", brand: "NOORCART", price: 3500, oldPrice: 4200, badge: "HOT", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=600&auto=format&fit=crop" },
    { id: 4, name: "Luxury Embroidered Lawn 3-Piece", category: "women-unstitched", brand: "NOORCART", price: 6800, oldPrice: 8000, badge: "NEW", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop" },
    { id: 5, name: "Embroidered Silk Designer Kurti", category: "ready-to-wear", brand: "NOORCART", price: 5200, oldPrice: 0, badge: "TRENDING", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop" },
    { id: 6, name: "Air-Pro Cushion Running Sneakers", category: "shoes", brand: "NOORCART", price: 6900, oldPrice: 8500, badge: "SALE", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop" },
    { id: 7, name: "Pro-Grade Leather Football", category: "sports", brand: "NOORCART", price: 2400, oldPrice: 3000, badge: "TOP RATED", image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?q=80&w=600&auto=format&fit=crop" },
    { id: 8, name: "Rose Musk Signature Parfum 50ml", category: "perfumes", brand: "Noor-Ul-Ain", price: 3900, oldPrice: 4500, badge: "NEW", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop" },
    { id: 9, name: "Oudh Al Malik Eau De Parfum 80ml", category: "perfumes", brand: "Noor-Ul-Ain", price: 4200, oldPrice: 5000, badge: "LIMITED", image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=600&auto=format&fit=crop" },
    { id: 10, name: "Classic Wash & Wear Fabric 4m", category: "men-unstitched", brand: "NOORCART", price: 2800, oldPrice: 3400, badge: "VALUE", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=600&auto=format&fit=crop" },
    { id: 11, name: "Charcoal Grey Cotton Blend Suiting 3.5m", category: "men-unstitched", brand: "NOORCART", price: 4600, oldPrice: 5400, badge: "PREMIUM", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop" },
    { id: 12, name: "Printed Lawn 2-Piece Suit", category: "women-unstitched", brand: "NOORCART", price: 3200, oldPrice: 3900, badge: "SALE", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=600&auto=format&fit=crop" },
    { id: 13, name: "Chiffon Embroidered 3-Piece Festive Suit", category: "women-unstitched", brand: "NOORCART", price: 7600, oldPrice: 9000, badge: "FESTIVE", image: "https://images.unsplash.com/photo-1610030181087-540f10f65ca9?q=80&w=600&auto=format&fit=crop" },
    { id: 14, name: "Casual Cotton Kurta for Men", category: "ready-to-wear", brand: "NOORCART", price: 2600, oldPrice: 0, badge: "NEW", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop" },
    { id: 15, name: "Printed Wrap Maxi Dress", category: "ready-to-wear", brand: "NOORCART", price: 4400, oldPrice: 5200, badge: "TRENDING", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop" },
    { id: 16, name: "Classic Leather Loafers", category: "shoes", brand: "NOORCART", price: 5400, oldPrice: 6200, badge: "CLASSIC", image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=600&auto=format&fit=crop" },
    { id: 17, name: "Kids Sport Trainers", category: "shoes", brand: "NOORCART", price: 3200, oldPrice: 3800, badge: "KIDS", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600&auto=format&fit=crop" },
    { id: 18, name: "Adjustable Dumbbell Set 10kg", category: "sports", brand: "NOORCART", price: 5800, oldPrice: 6500, badge: "FITNESS", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop" },
    { id: 19, name: "Badminton Racket Pro Duo Pack", category: "sports", brand: "NOORCART", price: 3100, oldPrice: 3700, badge: "DUO PACK", image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop" },
    { id: 20, name: "Musk Al Haramain Attar 12ml", category: "perfumes", brand: "Noor-Ul-Ain", price: 1800, oldPrice: 2200, badge: "TRAVEL SIZE", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop" }
];

let cart = JSON.parse(localStorage.getItem("noorcart_cart")) || [];
let activeCategoryOverride = null;

document.addEventListener("DOMContentLoaded", () => {
    applyCategoryFromUrl();
    renderProducts();
    updateCartUI();
    bindFilterEvents();
    bindKeyboardShortcuts();
});

function applyCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("cat") || params.get("type");
    if (!category) return;

    const radio = document.querySelector(`input[name="categoryFilter"][value="${category}"]`);
    if (radio) {
        radio.checked = true;
    } else {
        activeCategoryOverride = category;
    }
}

function bindFilterEvents() {
    const searchInput = document.getElementById("filterSearch");
    const priceRange = document.getElementById("priceRange");
    const sortSelect = document.getElementById("sortSelect");
    const categoryRadios = document.querySelectorAll('input[name="categoryFilter"]');

    if (searchInput) searchInput.addEventListener("input", debounce(renderProducts, 150));

    if (priceRange) {
        priceRange.addEventListener("input", (event) => {
            const priceLabel = document.getElementById("priceValue");
            if (priceLabel) priceLabel.innerText = `PKR ${parseInt(event.target.value).toLocaleString()}`;
            renderProducts();
        });
    }

    if (sortSelect) sortSelect.addEventListener("change", renderProducts);

    categoryRadios.forEach((radio) => radio.addEventListener("change", () => {
        activeCategoryOverride = null;
        renderProducts();
    }));
}

function bindKeyboardShortcuts() {
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") toggleCartDrawer(false);
    });
}

function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

function addToCart(productId) {
    const product = productsData.find((item) => item.id === productId);
    if (!product) return;

    const existing = cart.find((item) => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    updateCartUI();
    toggleCartDrawer(true);
}

function updateQuantity(productId, change) {
    const index = cart.findIndex((item) => item.id === productId);
    if (index === -1) return;

    cart[index].qty += change;
    if (cart[index].qty <= 0) cart.splice(index, 1);

    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem("noorcart_cart", JSON.stringify(cart));
}

function toggleCartDrawer(open) {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (!drawer || !overlay) return;

    drawer.classList.toggle("active", open);
    overlay.classList.toggle("active", open);
    document.body.style.overflow = open ? "hidden" : "";
}

function updateCartUI() {
    const cartList = document.getElementById("cartItemList");
    const totalDisplay = document.getElementById("cartTotalDisplay");
    const badgeCount = document.getElementById("cartBadgeCount");

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    if (badgeCount) badgeCount.innerText = totalQty;
    if (totalDisplay) totalDisplay.innerText = `PKR ${totalPrice.toLocaleString()}`;
    if (!cartList) return;

    if (cart.length === 0) {
        cartList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-cart-shopping"></i>
                <p class="mb-0">Your cart is empty. Add something you love.</p>
            </div>
        `;
        return;
    }

    cartList.innerHTML = cart.map((item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="flex-grow-1">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price price-mono">PKR ${item.price.toLocaleString()}</div>
                <div class="d-flex align-items-center gap-2 mt-2">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)" aria-label="Decrease quantity">-</button>
                    <span class="fw-bold" style="font-size: 0.85rem;">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
                </div>
            </div>
            <button class="btn btn-sm text-danger" onclick="updateQuantity(${item.id}, -${item.qty})" aria-label="Remove item">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `).join("");
}

function checkoutViaWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "*NEW ORDER - NOORCART*\n----------------------------\n";
    let grandTotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        grandTotal += itemTotal;
        message += `${index + 1}. *${item.name}*\n   Qty: ${item.qty} x PKR ${item.price.toLocaleString()} = PKR ${itemTotal.toLocaleString()}\n`;
    });

    message += `----------------------------\n*Grand Total: PKR ${grandTotal.toLocaleString()}*\n\nPlease share details for Delivery & Payment.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

function renderProducts() {
    const grid = document.getElementById("productGrid");
    const countDisplay = document.getElementById("productCount");
    if (!grid) return;

    const searchVal = (document.getElementById("filterSearch")?.value || "").toLowerCase();
    const maxPrice = parseInt(document.getElementById("priceRange")?.value || 100000);
    const selectedCategory = activeCategoryOverride
        || document.querySelector('input[name="categoryFilter"]:checked')?.value
        || "all";
    const sortVal = document.getElementById("sortSelect")?.value || "newest";

    let filtered = productsData.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchVal);
        const matchesPrice = item.price <= maxPrice;
        const matchesCategory = selectedCategory === "all" || item.category.toLowerCase() === selectedCategory.toLowerCase();
        return matchesSearch && matchesPrice && matchesCategory;
    });

    const sorters = {
        "price-low": (a, b) => a.price - b.price,
        "price-high": (a, b) => b.price - a.price,
        "name-az": (a, b) => a.name.localeCompare(b.name),
        "oldest": (a, b) => a.id - b.id,
        "newest": (a, b) => b.id - a.id
    };
    filtered.sort(sorters[sortVal] || sorters.newest);

    if (countDisplay) countDisplay.innerText = `Showing ${filtered.length} product${filtered.length === 1 ? "" : "s"}`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-12 empty-state">
                <i class="fa-solid fa-box-open"></i>
                <h4 class="fw-bold">No products found</h4>
                <p class="mb-0">Try a different search term or filter.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map((item) => `
        <div class="col-12 col-sm-6 col-lg-4" data-aos="fade-up">
            <div class="product-card">
                ${item.badge ? `<span class="badge-offer">${item.badge}</span>` : ""}
                <span class="badge-brand">${item.brand}</span>
                <div class="product-thumb">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="product-details">
                    <span class="product-cat">${item.category.replace("-", " ")}</span>
                    <h3 class="product-title">${item.name}</h3>
                    <div class="price-box">
                        <span class="current-price price-mono">PKR ${item.price.toLocaleString()}</span>
                        ${item.oldPrice ? `<span class="old-price price-mono">PKR ${item.oldPrice.toLocaleString()}</span>` : ""}
                    </div>
                    <button onclick="addToCart(${item.id})" class="btn-add-cart w-100">
                        <i class="fa-solid fa-cart-plus me-1"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}