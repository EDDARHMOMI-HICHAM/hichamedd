// Premium Portfolio JS - Hicham Eddarhmoumi
document.addEventListener('DOMContentLoaded', function() {
    // Tailwind script already loaded in HTML
    initializeTailwind();
    initializeMobileMenu();
    initializePortfolioFilters();
    initializeProcessAccordions();
    initializeProjectModals();
    initializeContactForm();
    initializeScrollAnimations();
    initializeActiveNav();
    initializeContactPrefill();
});

// Tailwind Configuration
function initializeTailwind() {
    if (typeof tailwind !== 'undefined') {
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'gold': '#EAB308',
                        'gold-dark': '#CA8A04',
                        'emerald-custom': '#00C4A0',
                        'dark-bg': '#0A0A0A',
                        'card-bg': '#111111'
                    }
                }
            }
        };
    }
}

// Mobile Menu Toggle
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('mobile-menu');
            
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('svg');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
                } else {
                    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6h12v12" />`;
                }
            }
        });

        // Close mobile menu when clicking nav links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('mobile-menu');
            });
        });
    }
}

// Portfolio Filters
function initializePortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length === 0 || projectCards.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active', 'bg-gold', 'text-dark-bg'));
            filterBtns.forEach(b => b.classList.add('border-zinc-700', 'text-white'));
            btn.classList.add('active', 'bg-gold', 'text-dark-bg');
            btn.classList.remove('border-zinc-700', 'text-white');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    // Re-trigger animation
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.transition = 'all 0.4s ease';
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.style.transition = 'all 0.2s ease';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });

    // Set initial active filter
    const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allBtn) {
        allBtn.classList.add('active', 'bg-gold', 'text-dark-bg');
        allBtn.classList.remove('border-zinc-700', 'text-white');
    }
}

// Process Section Accordions - Fully working expand/collapse
function initializeProcessAccordions() {
    const processHeaders = document.querySelectorAll('.process-header');

    processHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const arrow = header.querySelector('.process-arrow');
            const isCurrentlyOpen = content.classList.contains('open');

            if (isCurrentlyOpen) {
                // Close this one
                content.classList.remove('open');
                if (arrow) arrow.style.transform = 'rotate(0deg)';
                header.classList.remove('!bg-zinc-800');
            } else {
                // Open this one
                content.classList.add('open');
                if (arrow) arrow.style.transform = 'rotate(180deg)';
                header.classList.add('!bg-zinc-800');
            }
        });
    });
}

// Project Detail Modals
function initializeProjectModals() {
    const viewProjectBtns = document.querySelectorAll('.view-project-btn');
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal');

    if (!modal || viewProjectBtns.length === 0) return;

    // Project Data
    const projectsData = {
        'ecobloom': {
            title: 'EcoBloom',
            category: 'Logo Design',
            year: '2025',
            description: 'Minimalist organic logo for a sustainable skincare brand. Hand-drawn elements refined into a clean, modern digital mark that conveys natural beauty and eco-consciousness.',
            challenge: 'Create a logo that feels premium yet approachable, representing sustainability without being cliché.',
            solution: 'Combined hand-sketched leaf motifs with modern typography. Used a soft earthy palette with a refined monogram.',
            deliverables: 'Primary logo, secondary marks, color palette, typography system, brand guidelines, social assets.',
            impact: 'The new identity helped EcoBloom increase brand recognition by 40% and secure partnerships with major retailers.'
        },
        'voltforge': {
            title: 'VoltForge',
            category: 'Logo Design',
            year: '2025',
            description: 'Bold tech logo for an electric vehicle charging startup. Modern, powerful, and instantly recognizable in the EV space.',
            challenge: 'Stand out in a crowded EV market while communicating energy, speed, and reliability.',
            solution: 'Dynamic lightning bolt integrated with a strong geometric wordmark. High contrast and scalable design.',
            deliverables: 'Logo suite, app icon, charging station signage system, pitch deck visuals.',
            impact: 'Logo featured in TechCrunch and helped raise $2.4M in seed funding.'
        },
        'lumina': {
            title: 'Lumina Atelier',
            category: 'Brand Identity',
            year: '2024',
            description: 'Complete brand identity for a luxury candle & home fragrance studio. Elegant, warm, and sophisticated.',
            challenge: 'Position as a premium home fragrance brand competing with international luxury labels.',
            solution: 'Rich color story, custom typography, and a delicate monogram. Tactile packaging direction.',
            deliverables: 'Full brand book, packaging design direction, website visuals, social templates, launch campaign.',
            impact: 'Sold out first collection in 11 days. Featured in Vogue Arabia.'
        },
        'brewhaven': {
            title: 'Brew Haven',
            category: 'Social Media',
            year: '2025',
            description: '30-day Instagram & TikTok campaign for a specialty coffee shop. Cozy, aesthetic, and community-focused content.',
            challenge: 'Increase foot traffic and build a loyal local following in a competitive cafe scene.',
            solution: 'Warm moody photography, ASMR-style reels, user-generated content strategy, and seasonal storytelling.',
            deliverables: '90+ posts & reels, content calendar, hashtag strategy, community management playbook.',
            impact: '3.2x engagement rate. 47% increase in in-store visits during campaign period.'
        },
        'moroccan-soul': {
            title: 'Moroccan Soul',
            category: 'Video Editing',
            year: '2024',
            description: 'Cinematic brand film for a luxury riad in Marrakech. Capturing the soul, light, and heritage of Morocco.',
            challenge: 'Tell an emotional story that feels authentic to Moroccan culture while appealing to international luxury travelers.',
            solution: 'Shot on location with natural light. Slow cinematic pacing, traditional instruments mixed with modern score.',
            deliverables: '2:30min hero film, 3x 30s social cuts, teaser, behind-the-scenes.',
            impact: 'Over 1.8M views. Bookings increased 65% in the following quarter.'
        },
        'atlas': {
            title: 'Atlas Studio',
            category: 'Website Design',
            year: '2025',
            description: 'Modern portfolio website for a photography & motion studio. Clean, bold, and performance-focused.',
            challenge: 'Showcase high-end visual work without overwhelming the user. Fast, accessible, and beautiful on all devices.',
            solution: 'Masonry grid with smart filtering, subtle micro-interactions, and a cinematic case study experience.',
            deliverables: 'Custom Webflow site, CMS setup, SEO optimization, analytics integration.',
            impact: 'Won "Site of the Month" on Awwwards. Led to 4 new high-ticket client projects.'
        }
    };

    viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            const data = projectsData[projectId];

            if (!data) return;

            modalContent.innerHTML = `
                <div class="p-8">
                    <!-- Modal Header -->
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <div class="flex items-center gap-3 mb-2">
                                <span class="px-3 py-1 text-xs font-semibold rounded-full bg-zinc-800 text-gold">${data.category}</span>
                                <span class="text-sm text-zinc-500">${data.year}</span>
                            </div>
                            <h2 class="text-4xl font-bold text-white">${data.title}</h2>
                        </div>
                        <button id="close-modal-btn" class="text-zinc-400 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6h12v12" />
                            </svg>
                        </button>
                    </div>

                    <!-- Hero Visual -->
                    <div class="w-full h-80 bg-zinc-900 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-zinc-800/60 to-black/60"></div>
                        <div class="text-center z-10">
                            <div class="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-dark-bg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.768 0-1.469-.423-1.84-1.103M9 21H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 9h4.017c.768 0 1.469.423 1.84 1.103" />
                                </svg>
                            </div>
                            <p class="text-gold font-semibold text-lg">Premium ${data.category}</p>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-5 gap-8">
                        <!-- Main Content -->
                        <div class="md:col-span-3">
                            <div class="mb-8">
                                <h4 class="uppercase tracking-[2px] text-xs text-gold mb-3">THE BRIEF</h4>
                                <p class="text-lg text-zinc-300 leading-relaxed">${data.description}</p>
                            </div>

                            <div class="mb-8">
                                <h4 class="uppercase tracking-[2px] text-xs text-gold mb-3">THE CHALLENGE</h4>
                                <p class="text-zinc-300 leading-relaxed">${data.challenge}</p>
                            </div>

                            <div>
                                <h4 class="uppercase tracking-[2px] text-xs text-gold mb-3">THE SOLUTION</h4>
                                <p class="text-zinc-300 leading-relaxed">${data.solution}</p>
                            </div>
                        </div>

                        <!-- Sidebar -->
                        <div class="md:col-span-2">
                            <div class="bg-zinc-900 rounded-2xl p-6 mb-6">
                                <h4 class="font-semibold text-white mb-4 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2" />
                                    </svg>
                                    DELIVERABLES
                                </h4>
                                <p class="text-sm text-zinc-400">${data.deliverables}</p>
                            </div>

                            <div class="bg-zinc-900 rounded-2xl p-6">
                                <h4 class="font-semibold text-white mb-4 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-emerald-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                    IMPACT
                                </h4>
                                <p class="text-sm text-emerald-custom font-medium">${data.impact}</p>
                            </div>
                        </div>
                    </div>

                    <!-- CTA -->
                    <div class="mt-10 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row gap-4">
                        <a href="contact.html" 
                           class="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gold hover:bg-yellow-500 transition-all text-dark-bg font-semibold text-lg">
                            Start a Similar Project
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <button onclick="closeProjectModal()"
                                class="flex-1 sm:flex-none px-8 py-4 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition-all text-white font-medium">
                            Close
                        </button>
                    </div>
                </div>
            `;

            modal.classList.remove('hidden');
            modal.classList.add('flex');

            // Re-attach close handler
            setTimeout(() => {
                const newCloseBtn = document.getElementById('close-modal-btn');
                if (newCloseBtn) {
                    newCloseBtn.onclick = closeProjectModal;
                }
            }, 100);
        });
    });

    // Close modal handlers
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeProjectModal);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeProjectModal();
        }
    });
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    }
}

// Contact Form Handler with Google Apps Script Integration
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxvWMhIAfBs9nGt-XAgtCaqnhzMHYSxqtiZVg1Wk_6JgUtTSNcUaUiCVmYtvHOpvIjU/exec"; 

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // 1. Trigger Premium Loading State
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                Sending...
            </span>
        `;

        // 2. Gather form input safely BEFORE resetting anything
        const formData = new FormData(form);
        const dataPayload = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone") || "N/A",
            service: formData.get("service"),
            message: formData.get("message"),
            fileData: null,
            fileName: null,
            mimeType: null
        };

        // 3. Process File attachments if present
        const fileInput = document.getElementById("file-upload");
        const file = fileInput ? fileInput.files[0] : null;

        if (file) {
            try {
                const base64String = await getBase64(file);
                dataPayload.fileData = base64String.split(",")[1]; // Strip base64 prefix
                dataPayload.fileName = file.name;
                dataPayload.mimeType = file.type;
            } catch (error) {
                alert("Error reading attached file. Please try again.");
                resetButton(submitBtn, originalText);
                return;
            }
        }

        // 4. Broadcast transmission to Google Sheet
        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(dataPayload),
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                }
            });

            const result = await response.json();

            if (result.status === "success") {
                // 5. Update UI to success checkmark
                submitBtn.innerHTML = `
                    <span class="flex items-center justify-center gap-2 text-emerald-custom">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 10l7-7m0 0l7 7" />
                        </svg>
                        Message Sent!
                    </span>
                `;

                // Fire custom toast message panel
                showToastNotification();
                
                // Safe to reset inputs now
                form.reset();
                const fileInfo = document.getElementById('file-info');
                if (fileInfo) fileInfo.classList.add('hidden');

                // Return button back to standard state
                setTimeout(() => {
                    resetButton(submitBtn, originalText);
                }, 2500);

            } else {
                throw new Error(result.message || "Unknown server error");
            }

        } catch (error) {
            console.error("Transmission Error!", error);
            alert("Something went wrong with the submission: " + error.message);
            resetButton(submitBtn, originalText);
        }
    });

    // Local Helper: Base64 converter
    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    // Local Helper: Clear button attributes
    function resetButton(btn, originalHTML) {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
    }
}

function showToastNotification() {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 right-6 z-[999] toast bg-zinc-900 border border-emerald-custom/30 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-start gap-4 max-w-sm`;
    toast.innerHTML = `
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-custom/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-emerald-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7" />
            </svg>
        </div>
        <div>
            <p class="font-semibold text-white">Thank you, Hicham received your message!</p>
            <p class="text-sm text-zinc-400 mt-0.5">He'll get back to you within 24 hours.</p>
        </div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = 'all 0.4s ease';
        toast.style.opacity = '0';
        setTimeout(() => toast.parentNode.removeChild(toast), 400);
    }, 5200);
}

// Scroll Animations (simple fade-in)
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.premium-card, .service-card, .project-card, .timeline-item, .testimonial-card');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 80);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            el.style.opacity = '0.01';
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });
    }
}

// Active Navigation Link
function initializeActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Pre-fill Contact form from URL parameters (?plan= or ?service=)
function initializeContactPrefill() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');
    const service = urlParams.get('service');

    const serviceSelect = form.querySelector('select[name="service"]');
    const messageField = form.querySelector('textarea[name="message"]');

    if (!serviceSelect) return;

    let preselectedValue = '';
    let prefillMessage = '';

    if (plan) {
        if (plan === 'Starter') {
            preselectedValue = 'Starter Package';
            prefillMessage = `Hi Hicham,\n\nI'm interested in the Starter package. I have a small business/startup and would like to get a professional logo + basic brand presence.\n\nLooking forward to hearing from you.`;
        } else if (plan === 'Professional') {
            preselectedValue = 'Professional Package';
            prefillMessage = `Hi Hicham,\n\nI'm interested in the Professional package. I need a full logo + brand identity along with social media assets and a short video.\n\nPlease let me know your availability for a quick call.`;
        } else if (plan === 'Premium') {
            preselectedValue = 'Premium Package';
            prefillMessage = `Hi Hicham,\n\nI'm interested in the Premium package. I want a complete brand identity + custom website + professional video production.\n\nI'd love to discuss my project in more detail.`;
        }
    } 
    
    if (service) {
        if (service === 'Logo Design') {
            preselectedValue = 'Logo Design';
            prefillMessage = `Hi Hicham,\n\nI'm looking for a new logo design. I need something modern, memorable, and versatile that works across digital and print.\n\nI have a rough idea of the direction but would love your professional input.`;
        } else if (service === 'Brand Identity') {
            preselectedValue = 'Brand Identity';
            prefillMessage = `Hi Hicham,\n\nI need a full brand identity (logo, colors, typography, guidelines). This is for a growing business and I want it to feel premium and consistent everywhere.`;
        } else if (service === 'Social Media Posts') {
            preselectedValue = 'Social Media Posts';
            prefillMessage = `Hi Hicham,\n\nI'm looking for help creating high-quality social media content (posts, carousels, reels). I want a consistent visual style that matches my brand.`;
        } else if (service === 'Video Editing') {
            preselectedValue = 'Video Editing';
            prefillMessage = `Hi Hicham,\n\nI have some raw footage and would like professional video editing + cinematic color grading. The style I'm going for is modern and emotional.`;
        } else if (service === 'Website Design') {
            preselectedValue = 'Website Design';
            prefillMessage = `Hi Hicham,\n\nI need a modern, fast, and beautiful website. I'm looking for someone who can handle both the design and development side.`;
        } else if (service === 'Custom Project') {
            preselectedValue = 'Custom Project';
            prefillMessage = `Hi Hicham,\n\nI have something unique in mind and would like to discuss a custom project/package. I have a specific vision and budget in mind.\n\nLooking forward to chatting with you about the details.`;
        }
    }

    if (preselectedValue) {
        let optionExists = false;
        for (let i = 0; i < serviceSelect.options.length; i++) {
            if (serviceSelect.options[i].value === preselectedValue) {
                optionExists = true;
                serviceSelect.selectedIndex = i;
                break;
            }
        }
        
        if (!optionExists) {
            const newOption = new Option(preselectedValue, preselectedValue, true, true);
            serviceSelect.add(newOption);
        }
    }

    if (prefillMessage && messageField && !messageField.value) {
        messageField.value = prefillMessage + '\n\n';
        messageField.focus();
        messageField.setSelectionRange(messageField.value.length, messageField.value.length);
    }
}

// Utility: Copy email to clipboard
window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = event.target.innerText;
        event.target.innerText = 'Copied!';
        setTimeout(() => {
            event.target.innerText = originalText;
        }, 1800);
    });
}