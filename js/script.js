const products = [
    {
        id: 'tank-construction',
        name: 'Fluid & Water Tanks',
        tag: 'Storage',
        image: './images/S1.png',
        shortDesc: 'Pressed steel tanks, HDG water tanks, and modular steel tanks engineered for commercial water storage and rapid on-site assembly across Zambia.',
        longDesc: 'Zerox Technology is Zambia\'s trusted manufacturer of pressed steel tanks, galvanized steel tanks, and HDG water tanks for industrial, commercial, municipal, and agricultural use. Our modular steel tanks feature bolt-together construction for rapid on-site assembly, with options including sectional steel panels, Abeco steel tanks, premium stainless steel, and dedicated fire water storage systems. From heavy duty steel tanks for mining water storage to commercial water storage for residential estates — every tank is engineered for durability, customization, and long-term performance.',
        features: ['Design & Fabrication of Pressed Steel Tanks', 'HDG & Galvanized Steel Tank Manufacturing', 'Erection & Installation of Above-Ground Tanks', 'Modular Steel Tank Assembly', 'Pipeline Connection & Integration', 'Non-Destructive Testing (NDT) & Pressure Testing', 'Tank Rehabilitation, Maintenance & Upgrades'],
        applications: ['Municipal water tanks for councils & utilities', 'Mining water tanks & industrial storage', 'Commercial water storage for facilities', 'Agricultural and irrigation systems', 'Schools, hospitals, and public institutions', 'Emergency and backup water supply', 'Residential estates & housing developments']
    },
    {
        id: 'civil-engineering',
        name: 'Civil Engineering Works',
        tag: 'Engineering',
        image: './images/hero-min.png',
        shortDesc: 'Steel fabrication, structural steelworks, tank installation services, and commercial & industrial construction across Zambia.',
        longDesc: 'Our Civil Engineering division delivers end-to-end infrastructure and steel fabrication solutions across Zambia. We specialize in structural steel fabrication, steel tank erection, and tank installation services — from laying strong, durable reinforced concrete foundations to constructing access and internal roads. Our commercial construction and industrial construction capabilities include drainage systems and culverts, comprehensive site preparation and earthworks, and fabrication of structural steelworks and platforms for tanks, machinery, and industrial buildings.',
        features: ['Steel Fabrication & Structural Steelworks', 'Steel Tank Erection & Installation Services', 'Foundations & Structural Concrete Works', 'Drainage Systems & Culverts', 'Road Construction', 'Site Preparation & Earthworks', 'Platform Construction for Tanks & Machinery'],
        applications: ['Commercial construction projects', 'Industrial construction & mining infrastructure', 'Tank installation & steel tank erection', 'Agricultural and irrigation systems', 'Residential estates', 'Schools, hospitals, and public institutions']
    },
    {
        id: 'general-supply',
        name: 'Construction & Mining Supply',
        tag: 'Supply',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
        shortDesc: 'Mining water tanks, fuel storage tanks, diesel storage tanks, fuel bowsers, water bowsers, PPE, and heavy duty industrial equipment across Zambia.',
        longDesc: 'Zerox provides reliable procurement and supply of essential materials for the construction and mining industries across Zambia. Our mining supply range includes mining water tanks, fuel storage tanks, diesel storage tanks, fuel bowsers, water bowsers, and tank stands for mining equipment. We also supply heavy duty steel tanks, electrical fittings, plumbing components, certified PPE, and bulk construction materials like cement, steel, and aggregates — ensuring your project site stays fully stocked and operational.',
        features: ['Mining Water Tanks & Heavy Duty Steel Tanks', 'Fuel Storage Tanks & Diesel Storage Tanks', 'Fuel Bowsers & Water Bowsers', 'Tank Stands for Mining Equipment', 'Electrical Materials & Fittings', 'PPE & Safety Gear', 'Construction Materials & Aggregates'],
        applications: ['Mining water storage & fuel storage', 'Fuel & diesel tank installations', 'Commercial & industrial facilities', 'Construction site supply', 'Agricultural operations', 'Institutional & public infrastructure']
    }
];

const projects = [
    { images: ["images/1.jpg"] },
    { images: ["images/2.jpeg"] },
    { images: ["images/3.jpeg"] },
    { images: ["images/4.jpeg"] },
    { images: ["images/5.jpeg"] },
    { images: ["images/6.jpeg"] },
    { images: ["images/7.jpeg"] },
    { images: ["images/8.jpeg"] },
    { images: ["images/9.jpeg"] },
    { images: ["images/10.jpeg"] },
    { images: ["images/11.jpeg"] },
    { images: ["images/12.jpeg"] },
    { images: ["images/13.jpeg"] },
    { images: ["images/14.jpeg"] },
    { images: ["images/15.jpeg"] },
    { images: ["images/16.jpeg"] },
    { images: ["images/17.jpeg"] }
];

let currentProjectIndex = 0;

// ── Hero Carousel Data ──
const heroSlides = [
    {
        staticText: 'Commercial',
        typedText: 'Pressed Steel & Water Tanks',
        subtext: 'Galvanized steel tanks, HDG water tanks, and modular steel tanks — engineered for municipal, commercial, and industrial water storage across Zambia.',
        image: 'images/h-1.jpeg'
    },
    {
        staticText: 'Professional',
        typedText: 'Steel Fabrication & Construction',
        subtext: 'Structural steel fabrication, tank installation services, and commercial & industrial construction — from foundations to steel tank erection in Lusaka and beyond.',
        image: 'images/h-2.png'
    },
    {
        staticText: 'Reliable',
        typedText: 'Mining & Fuel Storage',
        subtext: 'Mining water tanks, fuel storage tanks, diesel storage tanks, fuel bowsers, and water bowsers — heavy duty steel tanks built for Zambia\'s mining sector.',
        image: 'images/h-3.png'
    }
];

let heroCurrentSlide = 0;
let heroInterval = null;
let typewriterTimeout = null;
const HERO_ROTATE_DELAY = 8000;

function typeWriter(text, element, speed = 50, callback) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            typewriterTimeout = setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function showHeroSlide(index, animate = true) {
    heroCurrentSlide = index;
    const slide = heroSlides[index];

    const staticEl = document.getElementById('hero-static-text');
    const typeEl = document.getElementById('hero-typewriter');
    const subtextEl = document.getElementById('hero-subtext');
    const imageEl = document.getElementById('hero-image');
    const dots = document.querySelectorAll('.hero-dot');

    // Clear any pending typewriter
    if (typewriterTimeout) clearTimeout(typewriterTimeout);

    if (animate) {
        // Fade out
        staticEl.classList.add('fade-out');
        subtextEl.classList.add('fade-out');
        imageEl.classList.add('fade-out');
        typeEl.textContent = '';

        setTimeout(() => {
            // Update content
            staticEl.textContent = slide.staticText;
            subtextEl.textContent = slide.subtext;
            imageEl.src = slide.image;

            // Fade in
            staticEl.classList.remove('fade-out');
            subtextEl.classList.remove('fade-out');
            imageEl.classList.remove('fade-out');

            // Typewriter on the gold headline
            typeWriter(slide.typedText, typeEl, 45);
        }, 500);
    } else {
        // Instant set (first load)
        staticEl.textContent = slide.staticText;
        subtextEl.textContent = slide.subtext;
        imageEl.src = slide.image;
        typeWriter(slide.typedText, typeEl, 45);
    }

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextHeroSlide() {
    showHeroSlide((heroCurrentSlide + 1) % heroSlides.length);
}

function goToHeroSlide(index) {
    if (index === heroCurrentSlide) return;
    clearInterval(heroInterval);
    showHeroSlide(index);
    heroInterval = setInterval(nextHeroSlide, HERO_ROTATE_DELAY);
}

function startHeroCarousel() {
    showHeroSlide(0, false);
    heroInterval = setInterval(nextHeroSlide, HERO_ROTATE_DELAY);
}

// ── Existing Functions ──

function switchPage(pageId, extra = null) {
    document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));

    if (pageId === 'product') {
        renderProductPage(extra);
        document.getElementById('view-product').classList.add('active');
    } else {
        const activeView = document.getElementById(`view-${pageId}`);
        activeView.classList.add('active');

        if (extra && extra.startsWith('#')) {
            setTimeout(() => {
                const el = document.querySelector(extra);
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            }, 100);
        }
    }
    window.scrollTo(0, 0);
    document.getElementById('mobile-menu').classList.remove('active');
    lucide.createIcons();
}

function renderProductPage(id) {
    const product = products.find(p => p.id === id);
    const content = document.getElementById('product-content');

    content.innerHTML = `
                <section class="py-16">
                    <div class="container mx-auto px-6">
                        <div class="flex items-center space-x-2 text-sm text-gray-500 mb-8">
                            <span onclick="switchPage('home')" class="cursor-pointer hover:text-[#0A1931]">Home</span>
                            <i data-lucide="chevron-right" size="14"></i>
                            <span onclick="switchPage('home', '#products')" class="cursor-pointer hover:text-[#0A1931]">Services</span>
                            <i data-lucide="chevron-right" size="14"></i>
                            <span class="text-[#0A1931] font-bold">${product.name}</span>
                        </div>

                        <div class="grid md:grid-cols-2 gap-12 items-start mb-20">
                            <div>
                                <span class="bg-[#F5A623] text-[#0A1931] text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">${product.tag}</span>
                                <h1 class="text-4xl md:text-5xl font-extrabold text-[#0A1931] mb-6">${product.name}</h1>
                                <p class="text-lg text-gray-700 leading-relaxed mb-8">${product.longDesc}</p>
                                
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 class="font-bold text-[#0A1931] mb-4 flex items-center">
                                            <i data-lucide="layers" class="mr-2 text-[#F5A623]"></i> Key Services
                                        </h3>
                                        <ul class="space-y-2 text-sm text-gray-600">
                                            ${product.features.map(f => `<li class="flex items-center"><i data-lucide="circle" size="6" class="mr-2 fill-[#F5A623] text-[#F5A623]"></i> ${f}</li>`).join('')}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-[#0A1931] mb-4 flex items-center">
                                            <i data-lucide="target" class="mr-2 text-[#F5A623]"></i> Applications
                                        </h3>
                                        <ul class="space-y-2 text-sm text-gray-600">
                                            ${product.applications.map(a => `<li class="flex items-center"><i data-lucide="circle" size="6" class="mr-2 fill-[#0A1931] text-[#0A1931]"></i> ${a}</li>`).join('')}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
                                <img src="${product.image}" alt="${product.name}" class="w-full h-auto object-cover">
                            </div>
                        </div>

                        <!-- Product CTA -->
                        <div class="bg-[#0A1931] rounded-3xl p-12 text-center text-white relative overflow-hidden">
                            <div class="relative z-10">
                                <h2 class="text-3xl font-bold mb-4">Request Specs & Pricing</h2>
                                <p class="text-gray-400 mb-8 max-w-xl mx-auto">Our engineering team is ready to help you find the perfect configuration for your specific fluid storage needs.</p>
                                <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                                    <a href="tel:+260965933111" class="bg-[#F5A623] text-[#0A1931] font-bold py-4 px-10 rounded-xl hover:bg-white transition">Call Our Engineers</a>
                                    <button onclick="switchPage('home', '#contact')" class="border-2 border-white text-white font-bold py-4 px-10 rounded-xl hover:bg-white hover:text-[#0A1931] transition">Get a Digital Quote</button>
                                </div>
                            </div>
                            <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-[#F5A623] rounded-full opacity-10"></div>
                        </div>
                    </div>
                </section>
            `;
    lucide.createIcons();
}

function renderGrids() {
    const solutionsGrid = document.getElementById('solutions-grid-home');
    solutionsGrid.innerHTML = products.map(p => `
                <div class="solution-card snap-start bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover border border-gray-100">
                    <div class="h-64 overflow-hidden relative group">
                        <img src="${p.image}" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
                        <div class="absolute top-4 left-4">
                            <span class="bg-[#F5A623] text-[#0A1931] text-[10px] font-bold px-3 py-1 rounded-full uppercase">${p.tag}</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h4 class="font-bold text-xl text-[#0A1931]">${p.name}</h4>
                        <p class="text-gray-500 text-sm mt-2 mb-6 min-h-[3rem]">${p.shortDesc}</p>
                        <button onclick="switchPage('product', '${p.id}')" class="flex items-center text-[#0A1931] font-bold hover:text-[#F5A623] transition">
                            Read More <i data-lucide="arrow-up-right" size="18" class="ml-1"></i>
                        </button>
                    </div>
                </div>
            `).join('');

    const fullPortfolioGrid = document.getElementById('full-project-grid');
    if (fullPortfolioGrid) {
        fullPortfolioGrid.innerHTML = projects.map((p, i) => `
                    <div onclick="openModal(${i}, true)" class="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover">
                        <div class="h-64 overflow-hidden relative">
                            <img src="${p.images[0]}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                                 <span class="bg-white text-[#0A1931] px-4 py-2 rounded-full font-bold shadow-lg">View Image</span>
                            </div>
                        </div>
                    </div>
                `).join('');
    }
    lucide.createIcons();
}

let modalShowArrows = false;

function openModal(index, showArrows = false) {
    currentProjectIndex = index;
    modalShowArrows = showArrows;
    updateModalContent();
    updateArrowVisibility();
    document.getElementById('portfolio-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('portfolio-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateModalContent() {
    const project = projects[currentProjectIndex];
    document.getElementById('modal-img').src = project.images[0];
}

function updateArrowVisibility() {
    const prev = document.getElementById('modal-prev');
    const next = document.getElementById('modal-next');
    if (!modalShowArrows) {
        prev.style.display = 'none';
        next.style.display = 'none';
    } else {
        prev.style.display = currentProjectIndex > 0 ? '' : 'none';
        next.style.display = currentProjectIndex < projects.length - 1 ? '' : 'none';
    }
}

function prevSlide() {
    if (currentProjectIndex > 0) {
        currentProjectIndex--;
        updateModalContent();
        updateArrowVisibility();
    }
}

function nextSlide() {
    if (currentProjectIndex < projects.length - 1) {
        currentProjectIndex++;
        updateModalContent();
        updateArrowVisibility();
    }
}

function toggleMenu() {
    document.getElementById('mobile-menu').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    renderGrids();
    startHeroCarousel();
    lucide.createIcons();
});

window.onscroll = function () {
    const nav = document.getElementById('main-nav');
    if (window.pageYOffset > 50) {
        nav.classList.remove('py-6', 'md:py-8');
        nav.classList.add('py-3', 'md:py-4', 'bg-[#0A1931]');
    } else {
        nav.classList.remove('py-3', 'md:py-4', 'bg-[#0A1931]');
        nav.classList.add('py-6', 'md:py-8');
    }
};

/////////////////////////////////////////////////

// Check if there are enough logos to create a smooth scrolling effect
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.logo-container');
    const width = container.scrollWidth / 2;

    // Set the keyframes for smoother animation
    const styleSheet = document.styleSheets[0];
    let keyframesRule;

    for (let i = 0; i < styleSheet.cssRules.length; i++) {
        if (styleSheet.cssRules[i].name === 'scroll') {
            keyframesRule = styleSheet.cssRules[i];
            break;
        }
    }

    if (keyframesRule) {
        keyframesRule.deleteRule('100%');
        keyframesRule.appendRule(`100% { transform: translateX(${-width}px); }`);
    }
});