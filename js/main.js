// Premium Portfolio JS - Hicham Eddarhmoumi
document.addEventListener('DOMContentLoaded', function() {
    // تفعيل جميع الخصائص عند جاهزية الصفحة
    initializeMobileMenu();
    initializePortfolioFilters();
    initializeProcessAccordions();
    initializeProjectModals();
    initializeContactForm();
    initializeScrollAnimations();
    initializeActiveNav();
    initializeContactPrefill();
});

// Mobile Menu Toggle
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('mobile-menu');
            
            const icon = mobileMenuBtn.querySelector('svg');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
                } else {
                    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6h12v12" />`;
                }
            }
        });

        // إغلاق القائمة عند الضغط على الروابط
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
            filterBtns.forEach(b => b.classList.remove('active', 'bg-gold', 'text-dark-bg'));
            filterBtns.forEach(b => b.classList.add('border-zinc-700', 'text-white'));
            btn.classList.add('active', 'bg-gold', 'text-dark-bg');
            btn.classList.remove('border-zinc-700', 'text-white');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.4s ease';
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Process Section Accordions
function initializeProcessAccordions() {
    const processHeaders = document.querySelectorAll('.process-header');

    processHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const arrow = header.querySelector('.process-arrow');
            const isCurrentlyOpen = content.classList.contains('open');

            if (isCurrentlyOpen) {
                content.classList.remove('open');
                if (arrow) arrow.style.transform = 'rotate(0deg)';
                header.classList.remove('!bg-zinc-800');
            } else {
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

    const projectsData = {
        'ecobloom': { title: 'EcoBloom', category: 'Logo Design', year: '2025', description: 'Minimalist organic logo for a sustainable skincare brand.', challenge: 'Create a logo that feels premium yet approachable.', solution: 'Combined hand-sketched leaf motifs with modern typography.', deliverables: 'Primary logo, brand guidelines.', impact: 'Increased brand recognition by 40%.' },
        'voltforge': { title: 'VoltForge', category: 'Logo Design', year: '2025', description: 'Bold tech logo for an electric vehicle charging startup.', challenge: 'Stand out in a crowded EV market.', solution: 'Dynamic lightning bolt integrated with a strong geometric wordmark.', deliverables: 'Logo suite, app icon.', impact: 'Helped raise $2.4M in seed funding.' },
        'lumina': { title: 'Lumina Atelier', category: 'Brand Identity', year: '2024', description: 'Complete brand identity for a luxury candle studio.', challenge: 'Position as a premium home fragrance brand.', solution: 'Rich color story, custom typography.', deliverables: 'Full brand book, packaging.', impact: 'Sold out first collection in 11 days.' },
        'brewhaven': { title: 'Brew Haven', category: 'Social Media', year: '2025', description: '30-day Instagram & TikTok campaign for a specialty coffee shop.', challenge: 'Increase foot traffic.', solution: 'Warm moody photography, ASMR-style reels.', deliverables: '90+ posts & reels.', impact: '47% increase in in-store visits.' },
        'moroccan-soul': { title: 'Moroccan Soul', category: 'Video Editing', year: '2024', description: 'Cinematic brand film for a luxury riad in Marrakech.', challenge: 'Tell an emotional story.', solution: 'Shot on location with natural light.', deliverables: '2:30min hero film.', impact: 'Over 1.8M views.' },
        'atlas': { title: 'Atlas Studio', category: 'Website Design', year: '2025', description: 'Modern portfolio website for a photography studio.', challenge: 'Showcase high-end visual work.', solution: 'Masonry grid with smart filtering.', deliverables: 'Custom Webflow site.', impact: 'Won "Site of the Month" on Awwwards.' }
    };

    viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            const data = projectsData[projectId];

            if (!data) return;

            modalContent.innerHTML = `
                <div class="p-8">
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
                    <div class="w-full h-80 bg-zinc-900 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-zinc-800/60 to-black/60"></div>
                        <div class="text-center z-10">
                            <p class="text-gold font-semibold text-lg">Premium ${data.category}</p>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-5 gap-8">
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
                        <div class="md:col-span-2">
                            <div class="bg-zinc-900 rounded-2xl p-6 mb-6">
                                <h4 class="font-semibold text-white mb-4 flex items-center gap-2">DELIVERABLES</h4>
                                <p class="text-sm text-zinc-400">${data.deliverables}</p>
                            </div>
                            <div class="bg-zinc-900 rounded-2xl p-6">
                                <h4 class="font-semibold text-white mb-4 flex items-center gap-2">IMPACT</h4>
                                <p class="text-sm text-emerald-custom font-medium">${data.impact}</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-10 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row gap-4">
                        <a href="contact.html" class="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gold hover:bg-yellow-500 transition-all text-dark-bg font-semibold text-lg">
                            Start a Similar Project
                        </a>
                        <button onclick="closeProjectModal()" class="flex-1 sm:flex-none px-8 py-4 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition-all text-white font-medium">
                            Close
                        </button>
                    </div>
                </div>
            `;

            modal.classList.remove('hidden');
            modal.classList.add('flex');

            const newCloseBtn = document.getElementById('close-modal-btn');
            if (newCloseBtn) newCloseBtn.onclick = closeProjectModal;
        });
    });

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeProjectModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeProjectModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeProjectModal(); });
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    }
}

// Contact Form Handler - Updated to support File Uploads
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxvWMhIAfBs9nGt-XAgtCaqnhzMHYSxqtiZVg1Wk_6JgUtTSNcUaUiCVmYtvHOpvIjU/exec"; 

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending...</span>`;

        const formData = new FormData(form);
        
        // Find the file input element inside your form
        const fileInput = form.querySelector('input[type="file"]');
        let fileData = null;
        let fileName = null;
        let mimeType = null;

        // If a file exists, read it as Base64
        if (fileInput && fileInput.files.length > 0) {
            const file = fileInput.files[0];
            fileName = file.name;
            mimeType = file.type;

            try {
                const base64String = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
                
                // Extract just the raw base64 data string, removing "data:*/*;base64,"
                fileData = base64String.split(',')[1];
            } catch (fileError) {
                console.error("Failed to process file upload:", fileError);
            }
        }

        // Construct the full payload containing form text and file components
        const dataPayload = {
            name: formData.get("name") || "N/A",
            email: formData.get("email"),
            phone: formData.get("phone") || "N/A",
            service: formData.get("service"),
            message: formData.get("message"),
            fileData: fileData,
            fileName: fileName,
            mimeType: mimeType
        };

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(dataPayload),
                headers: { "Content-Type": "text/plain;charset=utf-8" }
            });

            const result = await response.json();

            if (result.status === "success") {
                submitBtn.innerHTML = `<span class="text-emerald-custom">Message Sent!</span>`;
                showToastNotification();
                form.reset();
                setTimeout(() => { resetButton(submitBtn, originalText); }, 2500);
            } else {
                throw new Error(result.message || "Server error");
            }
        } catch (error) {
            alert("Error: " + error.message);
            resetButton(submitBtn, originalText);
        }
    });

    function resetButton(btn, originalHTML) {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
    }
}




function showToastNotification() {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 right-6 z-[999] toast bg-zinc-900 border border-emerald-custom/30 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-start gap-4 max-w-sm`;
    toast.innerHTML = `
        <div>
            <p class="font-semibold text-white">Awesome, your message sent successfully!</p>
            <p class="text-sm text-zinc-400 mt-0.5">Expect a reply from me within 24 hours.</p>
        </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.transition = 'opacity 0.4s ease';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 5200);
}

// Scroll Animations (Optimized to prevent lag)
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.premium-card, .service-card, .project-card, .timeline-item, .testimonial-card');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 }); // أسرع في الاستجابة

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            observer.observe(el);
        });
    }
}

// Active Navigation Link (Fixed for Vercel Clean URLs)
function initializeActiveNav() {
    let currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href').replace('.html', '');
        if (href === currentPage || (currentPage === 'index' && href === '')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Pre-fill Contact form
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
    if (plan) preselectedValue = plan + ' Package';
    if (service) preselectedValue = service;

    if (preselectedValue) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
            if (serviceSelect.options[i].value.toLowerCase().includes(preselectedValue.toLowerCase())) {
                serviceSelect.selectedIndex = i;
                break;
            }
        }
    }
}

// Global Copy to Clipboard function (Fixed Event Target Error)
window.copyToClipboard = function(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        if (!element) return;
        const originalText = element.innerText;
        element.innerText = 'Copied!';
        setTimeout(() => { element.innerText = originalText; }, 1800);
    });
}


// =========================================
// NEW: Page Transition Logic
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    // 1. Trigger entrance animation when page loads
    document.body.classList.add('page-transition-enter');

    // 2. Intercept link clicks for smooth exit animations
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetUrl = this.getAttribute('href');
            
            // Exclude external links, empty links, email/phone links, and anchor jumps
            const isExternal = this.target === '_blank' || targetUrl.startsWith('http') || targetUrl.startsWith('mailto:') || targetUrl.startsWith('tel:');
            const isAnchor = targetUrl.startsWith('#');
            
            if (!isExternal && !isAnchor && targetUrl !== '') {
                e.preventDefault(); // Stop instant navigation
                
                // Add the exit animation class
                document.body.classList.add('page-transition-exit');
                
                // Wait for the animation to finish (400ms matches the CSS transition), then navigate
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 400); 
            }
        });
    });
});