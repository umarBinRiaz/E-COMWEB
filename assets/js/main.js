/* ==========================================
   INITIALIZATION & UI INTERACTIONS
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {

    // 1. Hide Loader when page loads
    window.addEventListener('load', () => {
        const loader = document.getElementById('loading-screen');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
        }
    });

    // 2. Initialize Swiper Slider
    if (document.querySelector('.hero-swiper')) {
        new Swiper('.hero-swiper', {
            loop: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            speed: 800,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // 3. Initialize AOS Animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // 4. Sticky Header Effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('sticky-active');
        } else {
            header.classList.remove('sticky-active');
        }
    });
});

/* ==========================================
   WHATSAPP ORDERING ENGINE
   ========================================== */
function orderOnWhatsApp(productName, category, price, productUrl) {
    const phoneNumber = "923000000000"; // Replace with brand WhatsApp number
    const message = `Hello Noor,%0A%0AI want to order:%0A*Product Name:* ${encodeURIComponent(productName)}%0A*Category:* ${encodeURIComponent(category)}%0A*Price:* ${encodeURIComponent(price)}%0A*Product Link:* ${encodeURIComponent(productUrl || window.location.href)}%0A*Quantity:* 1`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}
/* ==========================================
   FLASH SALE COUNTDOWN TIMER
   ========================================== */
function initCountdown() {
    // Set deadline to 3 days from current time
    const targetDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(timer);
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const hElem = document.getElementById("timer-hours");
        const mElem = document.getElementById("timer-minutes");
        const sElem = document.getElementById("timer-seconds");

        if (hElem && mElem && sElem) {
            hElem.innerText = hours < 10 ? '0' + hours : hours;
            mElem.innerText = minutes < 10 ? '0' + minutes : minutes;
            sElem.innerText = seconds < 10 ? '0' + seconds : seconds;
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
});
/* ==========================================
   ANIMATED COUNTER & BACK-TO-TOP TRIGGER
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {

    // Back to top button visibility listener
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Animated Statistics Counters
    const counters = document.querySelectorAll('.counter-number');
    let animated = false;

    window.addEventListener('scroll', () => {
        const counterSection = document.querySelector('.counter-section');
        if (counterSection && !animated) {
            const sectionPos = counterSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight;

            if (sectionPos < screenPos) {
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    let count = 0;
                    const speed = target / 50;

                    const updateCount = () => {
                        count += speed;
                        if (count < target) {
                            counter.innerText = Math.ceil(count);
                            setTimeout(updateCount, 30);
                        } else {
                            counter.innerText = target + "+";
                        }
                    };
                    updateCount();
                });
                animated = true;
            }
        }
    });
});
/* ==========================================
   DARK / LIGHT THEME TOGGLE ENGINE
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Check saved theme preference or system setting
    const savedTheme = localStorage.getItem('noorcart_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateToggleIcons(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        updateToggleIcons(false);
    }

    // 2. Attach Click Listeners to all theme toggle buttons
    const themeButtons = document.querySelectorAll('.theme-toggle-btn');
    themeButtons.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });
});

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Apply attribute
    document.documentElement.setAttribute('data-theme', newTheme);

    // Save to LocalStorage
    localStorage.setItem('noorcart_theme', newTheme);

    // Update Icons
    updateToggleIcons(newTheme === 'dark');
}

function updateToggleIcons(isDark) {
    const themeButtons = document.querySelectorAll('.theme-toggle-btn');
    themeButtons.forEach(btn => {
        if (isDark) {
            btn.innerHTML = '<i class="fa-solid fa-sun text-warning fs-5"></i>';
            btn.setAttribute('title', 'Switch to Light Mode');
        } else {
            btn.innerHTML = '<i class="fa-solid fa-moon text-dark fs-5"></i>';
            btn.setAttribute('title', 'Switch to Dark Mode');
        }
    });
}