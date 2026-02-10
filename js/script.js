        const products = [
            {
                id: 'sectional-steel',
                name: 'Sectional Steel Tanks',
                tag: 'Industrial',
                image: 'https://images.unsplash.com/photo-1574689049868-e94ed5301745?auto=format&fit=crop&q=80&w=1200',
                shortDesc: 'Modular design for easy transport and rapid site-specific assembly.',
                longDesc: 'Our Sectional Steel Tanks are the pinnacle of industrial efficiency. Constructed from high-grade galvanized steel panels, these tanks are designed to be shipped in compact crates and bolted together on-site. This makes them ideal for remote mining districts, agricultural projects, and construction sites with limited access.',
                features: ['Hot-dip galvanized panels', 'EPDM rubber liners', 'Modular bolt-together construction', 'Internal or external bracing options'],
                applications: ['Municipal water storage', 'Agricultural irrigation', 'Temporary construction reservoirs']
            },
            {
                id: 'stainless-steel',
                name: 'Stainless Steel Series',
                tag: 'Premium',
                image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200',
                shortDesc: 'Ideal for drinking water and chemical processing needs with high corrosion resistance.',
                longDesc: 'When hygiene and purity are the priority, our Stainless Steel Series is the industry standard. These tanks are crafted from Grade 304 or 316 stainless steel, offering unparalleled resistance to corrosion and bacterial growth. Perfect for food processing, pharmaceutical manufacturing, and premium potable water storage.',
                features: ['Grade 304/316 Stainless Steel', 'Ultra-smooth interior finish', 'Aseptic welding techniques', 'Vertical or horizontal configurations'],
                applications: ['Food and Beverage production', 'Pharmaceutical manufacturing', 'High-purity water systems']
            },
            {
                id: 'fire-water',
                name: 'Fire Water Storage',
                tag: 'Safety',
                image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1200',
                shortDesc: 'High-volume reservoirs compliant with fire safety standards.',
                longDesc: 'Zerox Fire Water Storage tanks are engineered to provide life-saving reliability. Compliant with international fire protection standards, these tanks ensure that your facility has immediate, high-pressure access to water in the event of an emergency. Our designs prioritize rapid discharge and low maintenance.',
                features: ['Full compliance with SANS standards', 'High-discharge valve systems', 'Frost protection heating (optional)', 'Anti-vortex outlets'],
                applications: ['Warehouse fire protection', 'Industrial complex safety', 'Shopping mall reservoirs']
            },
            {
                id: 'custom-industrial',
                name: 'Custom Industrial',
                tag: 'Custom',
                image: 'https://images.unsplash.com/photo-1516937941184-75139597e80a?auto=format&fit=crop&q=80&w=1200',
                shortDesc: 'Bespoke engineering for unique fluid storage requirements.',
                longDesc: 'Every project has unique challenges. Our Custom Industrial division works directly with your engineers to design and fabricate storage solutions for non-standard fluids, extreme temperatures, or difficult spatial constraints. Whether it’s oil, chemical sludge, or high-temperature fluids, Zerox has the expertise.',
                features: ['Bespoke engineering blueprints', 'Chemical-resistant linings', 'Integrated thermal insulation', 'Custom dimensions and geometries'],
                applications: ['Mining chemical processing', 'Oil and gas storage', 'Wastewater treatment plants']
            }
        ];

        const projects = [
            {
                id: 1,
                name: "Municipal Water Reservoir",
                location: "Lusaka, Zambia",
                images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"]
            },
            {
                id: 2,
                name: "Industrial Fire Storage",
                location: "Kitwe Copperbelt",
                images: ["https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1200"]
            },
            {
                id: 3,
                name: "Agricultural Fluid Tank",
                location: "Mazabuka Estates",
                images: ["https://images.unsplash.com/photo-1516937941184-75139597e80a?auto=format&fit=crop&q=80&w=1200"]
            }
        ];

        let currentProjectIndex = 0;

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
                            <span onclick="switchPage('home', '#products')" class="cursor-pointer hover:text-[#0A1931]">Storage Solutions</span>
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
                                            <i data-lucide="shield-check" class="mr-2 text-[#F5A623]"></i> Key Features
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
                                    <a href="tel:+260958589885" class="bg-[#F5A623] text-[#0A1931] font-bold py-4 px-10 rounded-xl hover:bg-white transition">Call Our Engineers</a>
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
                        <p class="text-gray-500 text-sm mt-2 mb-6 h-12 overflow-hidden">${p.shortDesc}</p>
                        <button onclick="switchPage('product', '${p.id}')" class="flex items-center text-[#0A1931] font-bold hover:text-[#F5A623] transition">
                            Read More <i data-lucide="arrow-up-right" size="18" class="ml-1"></i>
                        </button>
                    </div>
                </div>
            `).join('');

            const fullPortfolioGrid = document.getElementById('full-project-grid');
            if (fullPortfolioGrid) {
                fullPortfolioGrid.innerHTML = projects.map((p, i) => `
                    <div onclick="openModal(${i})" class="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover border border-gray-100">
                        <div class="h-64 overflow-hidden relative">
                            <img src="${p.images[0]}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                                 <span class="bg-white text-[#0A1931] px-4 py-2 rounded-full font-bold shadow-lg">View Gallery</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h4 class="font-bold text-lg text-[#0A1931]">${p.name}</h4>
                            <div class="flex items-center text-gray-500 text-sm mt-2">
                                <i data-lucide="map-pin" size="14" class="mr-1"></i>
                                ${p.location}
                            </div>
                        </div>
                    </div>
                `).join('');
            }
            lucide.createIcons();
        }

        function openModal(index) {
            currentProjectIndex = index;
            updateModalContent();
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
            document.getElementById('modal-title').innerText = project.name;
            document.getElementById('modal-location').innerText = project.location;
        }

        function toggleMenu() {
            document.getElementById('mobile-menu').classList.toggle('active');
        }

        window.onload = () => {
            renderGrids();
            lucide.createIcons();
        }

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
