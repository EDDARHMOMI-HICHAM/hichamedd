/**
 * HICHAM EDD — MULTI-PAGE APPLICATION JAVASCRIPT
 * Handles Shared Language Persistence across all HTML pages,
 * 1.0s Translation Overlay, Calculator, Modals, Sliders, and Scroll Animations.
 */

(function () {
  'use strict';

  const WHATSAPP_PHONE = "212653342503";
  let currentLang = 'darija'; // Default French



  let currentBrandbookIndex = 0;

  // Social Carousel (1080x1350) Dataset
  const socialSlides = [
    {
      num: 1,
      title: { fr: "Slide 1 : Hook Principal & Offre de Lancement", darija: "سلايد 1 : الهوك الرئيسي وعرض الإطلاق" },
      desc: { fr: "Visuel d'accroche avec packshot produit ultra-détaillé et typographie impactante.", darija: "صورة افتتاحية جذابة مع إبراز المنتوج بجودة عالية وتيبوغرافي قوي يوقف الزائر." }
    },
    {
      num: 2,
      title: { fr: "Slide 2 : La Douleur / Problème Résolu", darija: "سلايد 2 : المشكل اللي كيعاني منو الكليان" },
      desc: { fr: "Mise en avant des frustrations clients et contraste visuel percutant.", darija: "تسليط الضوء على المعاناة اليومية للكليان وكيفاش الحل كيبدل التجربة ديالو." }
    },
    {
      num: 3,
      title: { fr: "Slide 3 : Les Bénéfices & Ingrédients Clés", darija: "سلايد 3 : المميزات والمكونات الطبيعية" },
      desc: { fr: "Infographie claire avec icônes sur-mesure et zoom macro sur les finitions.", darija: "إنفوجرافيك توضيحي بالمكونات الفعالة مع أيقونات خاصة كتسهل الفهم السريع." }
    },
    {
      num: 4,
      title: { fr: "Slide 4 : Preuve Sociale & Avis Clients", darija: "سلايد 4 : آراء العملاء وشهادات الثقة" },
      desc: { fr: "Témoignages vérifiés avec notes 5 étoiles et photos réelles d'utilisatrices.", darija: "شهادات حقيقية من كليان جربو المنتوج مع تقييم 5 نجوم لتعزيز الثقة قبل الشراء." }
    },
    {
      num: 5,
      title: { fr: "Slide 5 : Comparatif Avant / Après", darija: "سلايد 5 : مقارنة قبل وبعد الاستعمال" },
      desc: { fr: "Démonstration visuelle indiscutable des résultats obtenus après utilisation.", darija: "مقارنة بصرية واضحة للنتائج الملموسة بعد الاستعمال اللي كتقنع المترددين." }
    },
    {
      num: 6,
      title: { fr: "Slide 6 : Appel à l'Action & Code Promo", darija: "سلايد 6 : دعوة للشراء وكود التخفيض" },
      desc: { fr: "Bouton d'action contrasté, mention de la livraison gratuite partout au Maroc.", darija: "زر بارز مع كود التخفيض والتأكيد على التوصيل السريع والدفع عند الاستلام." }
    }
  ];

  let currentSocialIndex = 0;

  // =========================================================================
  // INITIALIZATION ON ANY HTML PAGE
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    highlightActivePageNav();
    initScrollObserver();
    initCalculator();
    initFAQ();
    initContactForm();
    initSliders();
    if (typeof window.initAudit === 'function' && document.getElementById('audit-questions-view')) {
      window.initAudit();
    }
  });

  // =========================================================================
  // LANGUAGE SYSTEM ACROSS MULTI-PAGE SITES
  // =========================================================================
  function initLanguage() {
    const saved = localStorage.getItem('hicham_lang');
    if (saved === 'darija' || saved === 'fr') {
      currentLang = saved;
    } else {
      currentLang = 'darija'; // Default Moroccan Darija
    }
    applyLanguage(currentLang);
  }

  window.toggleLanguage = function () {
    const targetLang = currentLang === 'fr' ? 'darija' : 'fr';
    triggerLanguageSwitch(targetLang);
  };

  function triggerLanguageSwitch(targetLang) {
    const overlay = document.getElementById('lang-switch-overlay');
    const overlayText = document.getElementById('lang-switch-text');
    
    if (overlay && overlayText) {
      if (targetLang === 'darija') {
        overlayText.innerText = "جاري الترجمة إلى الدارجة المغربية...";
        overlayText.style.fontFamily = "var(--font-ar)";
      } else {
        overlayText.innerText = "Traduction en français en cours...";
        overlayText.style.fontFamily = "var(--font-fr)";
      }
      overlay.classList.add('active');
    }

    setTimeout(() => {
      currentLang = targetLang;
      localStorage.setItem('hicham_lang', currentLang);
      applyLanguage(currentLang);
      
      if (overlay) {
        setTimeout(() => {
          overlay.classList.remove('active');
        }, 200);
      }
    }, 1000);
  }

  function applyLanguage(lang) {
    if (!window.translations || !window.translations[lang]) return;
    const dict = window.translations[lang];

    document.documentElement.lang = lang === 'darija' ? 'ar' : 'fr';
    document.documentElement.dir = dict.dir;
    document.title = dict.siteTitle;

    document.querySelectorAll('.current-lang-text').forEach(el => {
      el.innerText = lang === 'fr' ? "الدارجة" : "Français";
    });
    document.querySelectorAll('.current-lang-flag').forEach(el => {
      el.innerText = lang === 'fr' ? "🇲🇦" : "🇫🇷";
    });
    const langBtnText = document.getElementById('current-lang-text');
    const langBtnFlag = document.getElementById('current-lang-flag');
    if (langBtnText) langBtnText.innerText = lang === 'fr' ? "الدارجة" : "Français";
    if (langBtnFlag) langBtnFlag.innerText = lang === 'fr' ? "🇲🇦" : "🇫🇷";

    // Translate all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getNestedValue(dict, key);
      if (val !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.innerHTML = val;
        }
      }
    });

    // Re-render Calculator if present on page
    // Call dedicated blog translations if present
    if (typeof window.applyBlogArticleTranslations === 'function') {
      window.applyBlogArticleTranslations(lang);
    }

    if (typeof calculateRate === 'function' && document.getElementById('calc-discounted-price')) {
      calculateRate();
    }

    // Re-render Brandbook & Social Slides if present
    if (document.getElementById('brandbook-slide-wrapper')) {
      renderBrandbookSlide();
    }
    if (document.getElementById('social-slide-wrapper')) {
      renderSocialSlide();
    }

    updateAllWhatsAppLinks();
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : undefined, obj);
  }

  // =========================================================================
  // NAVBAR ACTIVE STATE IN MULTI-PAGE ARCHITECTURE
  // =========================================================================
function highlightActivePageNav() {
    const path = window.location.pathname.toLowerCase();
    let pageName = 'home';

    if (path.includes('services.html')) pageName = 'services';
    else if (path.includes('blog.html') || path.includes('/blog/')) pageName = 'blog';
    else if (path.includes('about.html')) pageName = 'about';
    else if (path.includes('contact.html')) pageName = 'contact';
    else if (path.includes('challenge.html')) pageName = 'challenge';
    else if (path.includes('audit.html')) pageName = 'audit';
    else if (path.includes('privacy.html') || path.includes('terms.html')) pageName = '';
    else if (path !== '/' && !path.endsWith('/index.html') && !path.endsWith('/')) {
      pageName = 'portfolio';
    }

  window.toggleMobileMenu = function () {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  };

  // Close mobile drawer when clicking any link inside it
  document.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu || mobileMenu.classList.contains('hidden')) return;
    
    // If clicked on a link inside mobileMenu, close it
    if (e.target.closest('#mobile-menu a')) {
      mobileMenu.classList.add('hidden');
    }
  });

  // =========================================================================
  // INTERACTIVE DAY SPRINT CALCULATOR (Strictly 2 Services: Design 300 / Video 350)
  // =========================================================================
  let selectedServiceType = 'design';
  let selectedSprintDays = 1;

  const rates = {
    design: { discounted: 300, original: 430 },
    video: { discounted: 350, original: 500 }
  };

  function initCalculator() {
    if (!document.getElementById('calc-discounted-price')) return;

    window.selectServiceModule = function (type) {
      if (type !== 'design' && type !== 'video') type = 'design';
      selectedServiceType = type;

      document.querySelectorAll('.calc-service-btn').forEach(btn => {
        if (btn.getAttribute('data-service') === type) {
          btn.classList.add('border-brand-gold', 'bg-brand-gold/10', 'text-white');
          btn.classList.remove('border-brand-border', 'bg-brand-card', 'text-gray-300');
        } else {
          btn.classList.remove('border-brand-gold', 'bg-brand-gold/10', 'text-white');
          btn.classList.add('border-brand-border', 'bg-brand-card', 'text-gray-300');
        }
      });
      calculateRate();
    };

    window.selectSprintDays = function (days) {
      selectedSprintDays = parseInt(days, 10) || 1;
      if (selectedSprintDays < 1) selectedSprintDays = 1;
      if (selectedSprintDays > 5) selectedSprintDays = 5;

      document.querySelectorAll('.calc-day-btn').forEach(btn => {
        if (parseInt(btn.getAttribute('data-days'), 10) === selectedSprintDays) {
          btn.classList.add('bg-brand-gold', 'text-black', 'font-extrabold', 'border-brand-gold');
          btn.classList.remove('bg-brand-surface', 'text-gray-300', 'border-brand-border');
        } else {
          btn.classList.remove('bg-brand-gold', 'text-black', 'font-extrabold', 'border-brand-gold');
          btn.classList.add('bg-brand-surface', 'text-gray-300', 'border-brand-border');
        }
      });
      calculateRate();
    };

    calculateRate();
  }

  function calculateRate() {
    const rate = rates[selectedServiceType] || rates.design;
    const totalOriginal = rate.original * selectedSprintDays;
    const totalDiscounted = rate.discounted * selectedSprintDays;
    const totalSaved = totalOriginal - totalDiscounted;

    const elOriginal = document.getElementById('calc-original-price');
    const elDiscounted = document.getElementById('calc-discounted-price');
    const elSavings = document.getElementById('calc-savings-badge');
    const elSummaryService = document.getElementById('calc-summary-service');
    const elSummaryDays = document.getElementById('calc-summary-days');
    const elWhatsappBtn = document.getElementById('calc-whatsapp-btn');

    const currency = currentLang === 'fr' ? 'DH' : 'درهم';
    const dayWord = currentLang === 'fr' 
      ? (selectedSprintDays === 1 ? '1 Jour' : `${selectedSprintDays} Jours`) 
      : (selectedSprintDays === 1 ? 'نهار واحد (1)' : `${selectedSprintDays} أيام (${selectedSprintDays})`);

    let serviceName = "";
    if (selectedServiceType === 'design') {
      serviceName = currentLang === 'fr' ? "Graphic Design" : "غرافيك ديزاين";
    } else {
      serviceName = currentLang === 'fr' ? "Video Editing & Reels IA" : "فيديو إيديتينغ وريلز بالذكاء الاصطناعي والمونتاج";
    }

    if (elOriginal) {
      elOriginal.innerText = `${formatNumber(totalOriginal)} ${currency}`;
      elOriginal.className = "price-old text-base text-red-500 font-bold line-through decoration-red-500 decoration-2 font-mono";
    }
    if (elDiscounted) {
      elDiscounted.innerText = `${formatNumber(totalDiscounted)} ${currency}`;
      elDiscounted.className = "price-new text-3xl sm:text-4xl font-black text-emerald-400 font-mono";
    }
    if (elSavings) {
      elSavings.className = "px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-mono";
      elSavings.innerHTML = currentLang === 'fr'
        ? `Économie : -${formatNumber(totalSaved)} ${currency} (-30% Offre Spéciale)`
        : `وفرتي : -${formatNumber(totalSaved)} ${currency} (تخفيض 30% عرض خاص)`;
    }
    if (elSummaryService) elSummaryService.innerText = serviceName;
    if (elSummaryDays) elSummaryDays.innerText = dayWord;

    if (elWhatsappBtn) {
      const msg = currentLang === 'fr'
        ? `Bonjour Hicham, je souhaite réserver un sprint de ${dayWord} en [${serviceName}] au tarif Offre Spéciale de ${formatNumber(totalDiscounted)} DH (avec Devis et Facture légale). Quelles sont vos disponibilités cette semaine ?`
        : `السلام عليكم هشام، باغي نحجز سبرينت ديال ${dayWord} فـ [${serviceName}] بسعر العرض الخاص ${formatNumber(totalDiscounted)} درهم (مع Devis و Facture قانونية). واش متاح هاد الأسبوع ؟`;
      
      elWhatsappBtn.onclick = () => {
        window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
      };
    }
  }

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
  }

  // =========================================================================
  // MODALS & SLIDERS
  // =========================================================================
  function initSliders() {
    if (document.getElementById('brandbook-slide-wrapper')) renderBrandbookSlide();
    if (document.getElementById('social-slide-wrapper')) renderSocialSlide();
  }

  window.openBrandbookModal = function () {
    const modal = document.getElementById('brandbook-modal');
    if (modal) modal.classList.remove('hidden');
    currentBrandbookIndex = 0;
    renderBrandbookSlide();
  };

  window.closeBrandbookModal = function () {
    const modal = document.getElementById('brandbook-modal');
    if (modal) modal.classList.add('hidden');
  };

  window.nextBrandbookSlide = function () {
    currentBrandbookIndex = (currentBrandbookIndex + 1) % brandbookSlides.length;
    renderBrandbookSlide();
  };

  window.prevBrandbookSlide = function () {
    currentBrandbookIndex = (currentBrandbookIndex - 1 + brandbookSlides.length) % brandbookSlides.length;
    renderBrandbookSlide();
  };

  function renderBrandbookSlide() {
    const slide = brandbookSlides[currentBrandbookIndex];
    const wrapper = document.getElementById('brandbook-slide-wrapper');
    const counter = document.getElementById('brandbook-slide-counter');

    if (counter) {
      counter.innerText = currentLang === 'fr'
        ? `Page ${slide.page} sur ${brandbookSlides.length}`
        : `صفحة ${slide.page} من ${brandbookSlides.length}`;
    }

    if (wrapper) {
      wrapper.innerHTML = `
        <div class="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#1c1c1c] via-[#141414] to-[#0A0A0A] text-white">
          <div class="flex items-center justify-between border-b border-brand-border pb-3">
            <div>
              <span class="text-[10px] font-mono uppercase tracking-widest text-amber-400 block">${slide.subtitle[currentLang]}</span>
              <h4 class="text-base sm:text-lg font-bold text-white">${slide.title[currentLang]}</h4>
            </div>
            <span class="text-xs font-mono px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-brand-gold">
              ${slide.tag}
            </span>
          </div>

          <div class="my-auto py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div class="md:col-span-5 flex justify-center">
              <div class="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-blue-950/40 border-2 border-blue-500/30 flex flex-col items-center justify-center p-4 text-center shadow-xl">
                <span class="text-3xl sm:text-4xl font-black text-blue-400">LOGIS</span>
                <span class="text-[10px] text-cyan-300 font-mono tracking-widest uppercase mt-1">OCEAN CONNECT</span>
              </div>
            </div>
            <div class="md:col-span-7 space-y-3">
              <span class="text-xs font-semibold text-brand-gold uppercase tracking-wider block">Spécifications & Directives</span>
              <p class="text-xs sm:text-sm text-gray-300 leading-relaxed">
                ${slide.desc[currentLang]}
              </p>
              <div class="flex flex-wrap gap-2 pt-2 text-[11px] font-mono text-gray-400">
                <span class="px-2.5 py-1 rounded bg-brand-surface border border-brand-border">CMYK / Pantone</span>
                <span class="px-2.5 py-1 rounded bg-brand-surface border border-brand-border">Vectoriel SVG/AI</span>
                <span class="px-2.5 py-1 rounded bg-brand-surface border border-brand-border">Haute Résolution</span>
              </div>
            </div>
          </div>

          <div class="border-t border-brand-border pt-3 flex items-center justify-between text-xs text-gray-400">
            <span>Logistocean Corporate Brandbook</span>
            <div class="flex items-center gap-1.5">
              ${brandbookSlides.map((_, idx) => `
                <span class="w-2 h-2 rounded-full transition-all ${idx === currentBrandbookIndex ? 'bg-brand-gold w-5' : 'bg-white/20'}"></span>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }
  }

  // =========================================================================
  // SCROLL ANIMATIONS
  // =========================================================================
  function initScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -30px 0px"
    });

    document.querySelectorAll('.reveal-item').forEach(el => {
      observer.observe(el);
    });
  }

  // =========================================================================
  // FAQ ACCORDION
  // =========================================================================
  function initFAQ() {
    window.toggleFAQ = function (button) {
      const item = button.closest('.faq-item');
      if (!item) return;

      const isOpen = item.classList.contains('active');

      document.querySelectorAll('.faq-item.active').forEach(openItem => {
        if (openItem !== item) openItem.classList.remove('active');
      });

      if (!isOpen) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    };
  }

  // =========================================================================
  // CONTACT FORM
  // =========================================================================
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value || "";
      const email = document.getElementById('form-email')?.value || "";
      const phone = document.getElementById('form-phone')?.value || "";
      const service = document.getElementById('form-service')?.value || "";
      const message = document.getElementById('form-message')?.value || "";

      const msg = currentLang === 'fr'
        ? `Bonjour Hicham, je vous contacte depuis votre site web :%0A- Nom : ${name}%0A- Email : ${email}%0A- Tél : ${phone}%0A- Service : ${service}%0A- Projet : ${message}`
        : `السلام عليكم هشام، كنتواصل معك من الموقع الرسمي :%0A- الاسم : ${name}%0A- البريد : ${email}%0A- الهاتف : ${phone}%0A- الخدمة : ${service}%0A- تفاصيل المشروع : ${message}`;

      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${msg}`, '_blank', 'noopener,noreferrer');
    });
  }

  function updateAllWhatsAppLinks() {
    const generalLinks = document.querySelectorAll('.whatsapp-general-link');
    generalLinks.forEach(link => {
      const msg = currentLang === 'fr'
        ? "Bonjour Hicham, je souhaite réserver une journée de travail créatif (Per Day) avec Devis et Facture. Quelles sont vos disponibilités ?"
        : "السلام عليكم هشام، باغي نحجز نهار ديال الخدمة (Per Day) مع Devis و Facture. شنو هي الأوقات المتاحة عندك هاد الأسبوع ؟";
      link.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    });
  }

  // =========================================================================
  // ULTRA-SMOOTH MULTI-PAGE TRANSITIONS (PJAX + ANIMATED ACCELERATION)
  // Keeps header & footer rock-solid while seamlessly morphing main content
  // =========================================================================
  let isTransitioning = false;


  function handleLinkClick(e) {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Skip external protocols, new tabs, anchors, and modifier clicks
    if (
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('javascript:') ||
      href.includes('wa.me') ||
      link.target === '_blank' ||
      link.hasAttribute('download') ||
      e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0
    ) {
      if (href.startsWith('#') && href.length > 1) {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    // Parse target URL
    let url;
    try {
      url = new URL(link.href, window.location.href);
    } catch (err) {
      return;
    }

    // Verify same origin if not on file://
    if (url.origin !== window.location.origin && window.location.protocol !== 'file:') {
      return;
    }

    // If pointing to the exact same page & search query
    if (url.pathname === window.location.pathname && url.search === window.location.search) {
      if (url.hash) {
        e.preventDefault();
        const targetEl = document.querySelector(url.hash);
        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Prevent hard browser refresh and trigger smooth transition
    e.preventDefault();
    navigateTo(link.href, true);
  }

  function navigateTo(targetUrl, shouldPushState) {
    if (isTransitioning) return;
    isTransitioning = true;

    // Close mobile menu if opened
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }

    const main = document.querySelector('main');

    if (main) {
      main.classList.remove('page-transition-in');
      main.classList.add('page-transition-out');
    }

    // Fallback for file:// protocol where local fetch is restricted by browser security policies
    if (window.location.protocol === 'file:') {
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 180);
      return;
    }

    fetch(targetUrl)
      .then(res => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const newMain = doc.querySelector('main');
        if (!newMain) {
          window.location.href = targetUrl;
          return;
        }

        setTimeout(() => {
          document.title = doc.title;

          if (shouldPushState) {
            window.history.pushState({ url: targetUrl }, '', targetUrl);
          }

          // Sync header and footer to maintain valid relative paths across directories (e.g. /blog/)
          const currentHeader = document.querySelector('header');
          const newHeader = doc.querySelector('header');
          if (currentHeader && newHeader) {
            currentHeader.innerHTML = newHeader.innerHTML;
          }

          const currentFooter = document.querySelector('footer');
          const newFooter = doc.querySelector('footer');
          if (currentFooter && newFooter) {
            currentFooter.innerHTML = newFooter.innerHTML;
          }

          // Seamlessly swap main content
          if (main) {
            main.innerHTML = newMain.innerHTML;
            main.className = newMain.className;
          }

          // Re-initialize all interactive modules for the new content
          initLanguage();
          highlightActivePageNav();
          initScrollObserver();
          initCalculator();
          initFAQ();
          initContactForm();
          initSliders();
          updateAllWhatsAppLinks();
          if (typeof window.initAudit === 'function' && document.getElementById('audit-questions-view')) {
            window.initAudit();
          }
          if (typeof window.resetGameToStart === 'function' && document.getElementById('cr-intro-view')) {
            window.resetGameToStart();
          }

          // Scroll to targeted anchor or top of the page
          const urlObj = new URL(targetUrl, window.location.href);
          if (urlObj.hash) {
            const targetEl = document.querySelector(urlObj.hash);
            if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: 0, behavior: 'instant' });
          } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }

          // Animate new content in with smooth glide
          if (main) {
            main.classList.remove('page-transition-out');
            main.classList.add('page-transition-in');
          }

          finishProgressBar();
          isTransitioning = false;
        }, 180);
      })
      .catch(err => {
        console.warn('Seamless transition fallback to direct navigation:', err);
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 160);
      });
  }



  // =========================================================================
  // REEL & VIDEO PLAYER MODAL (FOR ALL 3 PORTFOLIO PROJECTS)
  // =========================================================================
  const reelModalData = {
    reels: {
      badge: { fr: "REELS & COULISSES MONTAGE IA", darija: "ريلز وكواليس المونتاج بالذكاء الاصطناعي" },
      title: { fr: "Spot Promotionnel & Reels — Baklawa.ma", darija: "سبوت ترويجي وريلز بالذكاء الاصطناعي — Baklawa.ma" },
      desc: { 
        fr: "Production et montage vidéo vertical 9:16 optimisé pour l'e-commerce et les conversions publicitaires (TikTok & Meta Ads).",
        darija: "إنتاج ومونتاج فيديو عمودي بمقاس 9:16 مخصص للتجارة الإلكترونية ومدروس لمضاعفة المبيعات فـ تيك توك وإنستغرام."
      },
      poster: "assets/images/reels.jpg",
      videoSrc: "assets/videos/video-rentech.mp4"
    },
    social: {
      badge: { fr: "CAMPAGNE SOCIAL MEDIA & CAROUSELS", darija: "حملة إعلانية وبوستات وكاروسيل" },
      title: { fr: "Campagne Social Media — Nihao Brand", darija: "حملة إعلانية متكاملة — Nihao Brand" },
      desc: {
        fr: "Création de carrousels pédagogiques et de visuels percutants ayant généré un engagement record sur le marché marocain.",
        darija: "تصميم بوستات وكاروسيل احترافي متناسق حقق تفاعلاً قياسياً ومبيعات قوية فالسوق المغربي."
      },
      poster: "assets/images/branding.jpg",
      videoSrc: ""
    },
    brandbook: {
      badge: { fr: "BRAND GUIDELINES & IDENTITÉ VISUELLE", darija: "دليل الهوية البصرية ودستور المعايير" },
      title: { fr: "Livre d'Identité Complète — Logistocean", darija: "كتاب الهوية البصرية ودليل المعايير — Logistocean" },
      desc: {
        fr: "Système d'identité institutionnelle complet : logotype, palette chromatique, typographies corporatives et règles d'usage.",
        darija: "دليل هوية مؤسساتية متكامل يضم الشعار الرسمي، كودات الألوان، الخطوط وتطبيقات المطبوعات والواجهات."
      },
      poster: "assets/images/studio.jpg",
      videoSrc: ""
    }
  };

  window.openReelModal = function (key) {
    const data = reelModalData[key] || reelModalData.reels;
    const modal = document.getElementById('reel-modal');
    if (!modal) return;

    const lang = currentLang === 'fr' ? 'fr' : 'darija';

    const bBadge = document.getElementById('reel-modal-badge');
    const mTitle = document.getElementById('reel-modal-title');
    const mDesc = document.getElementById('reel-modal-desc');
    const mVideo = document.getElementById('reel-modal-video');
    const mSource = document.getElementById('reel-modal-source');
    const waLink = document.getElementById('reel-modal-whatsapp');

    if (bBadge) bBadge.innerText = data.badge[lang];
    if (mTitle) mTitle.innerText = data.title[lang];
    if (mDesc) mDesc.innerText = data.desc[lang];
    if (mVideo) {
      mVideo.poster = data.poster;
      if (mSource) mSource.src = data.videoSrc;
      mVideo.load();
      mVideo.play().catch(err => console.log('Autoplay prevented:', err));
    }
    if (waLink) {
      const msg = lang === 'fr'
        ? `Bonjour Hicham, j'ai vu votre réalisation [${data.title.fr}] et je souhaite commander un projet similaire avec Devis et Facture.`
        : `السلام عليكم هشام، شفت مشروع [${data.title.darija}] وباغي نطلب خدمة مماثلة مع Devis و Facture.`;
      waLink.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    }

    modal.classList.remove('hidden');
  };

window.closeReelModal = function () {
    const modal = document.getElementById('reel-modal');
    if (modal) {
      const video = document.getElementById('reel-modal-video');
      if (video) {
        video.pause();
        video.currentTime = 0; // Rewinds video to start
      }
      modal.classList.add('hidden');
    }
  };
  
  // =========================================================================
  // CERTIFICATE IMAGE DOWNLOAD (HTML2CANVAS + NATIVE CANVAS FALLBACK)
  // =========================================================================
  window.downloadCertificateImage = function (cardId, filename) {
    const card = document.getElementById(cardId);
    if (!card) return;

    const btn = window.event ? window.event.currentTarget : null;
    const originalText = btn ? btn.innerHTML : "";
    if (btn) btn.innerHTML = currentLang === 'fr' ? "⏳ Préparation..." : "⏳ جاري التجهيز...";

    function finish() {
      if (btn) btn.innerHTML = originalText;
    }

    if (window.html2canvas) {
      window.html2canvas(card, {
        backgroundColor: '#0D0D0D',
        scale: 2,
        useCORS: true,
        logging: false
      }).then(canvas => {
        const link = document.createElement('a');
        link.download = filename || 'certificat-hichamedd.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        finish();
      }).catch(err => {
        console.warn("html2canvas fallback:", err);
        generateFallbackCertificate(cardId, filename);
        finish();
      });
    } else {
      generateFallbackCertificate(cardId, filename);
      finish();
    }
  };

  function generateFallbackCertificate(cardId, filename) {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');

    const isAudit = cardId.includes('audit');
    const isAr = currentLang === 'darija';

    // Background
    ctx.fillStyle = '#0D0D0D';
    ctx.fillRect(0, 0, 1200, 800);

    // Gold outer border
    ctx.strokeStyle = '#F5B700';
    ctx.lineWidth = 6;
    ctx.strokeRect(30, 30, 1140, 740);

    // Inner dashed gold border
    ctx.setLineDash([8, 6]);
    ctx.strokeStyle = 'rgba(245, 183, 0, 0.45)';
    ctx.lineWidth = 2;
    ctx.strokeRect(45, 45, 1110, 710);
    ctx.setLineDash([]);

    // Header Top Tag
    ctx.textAlign = 'center';
    ctx.fillStyle = '#F5B700';
    ctx.font = 'bold 18px "Plus Jakarta Sans", "Cairo", sans-serif';
    ctx.fillText(isAr ? 'شهادة تدقيق رسميّة • 2026 •' : 'OFFICIAL CERTIFICATE • 2026 •', 600, 95);

    // Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 36px "Plus Jakarta Sans", "Cairo", sans-serif';
    if (isAudit) {
      ctx.fillText(isAr ? 'شهادة تقييم الهوية المؤسساتية' : 'CERTIFICAT D\'AUDIT DE MARQUE', 600, 155);
    } else {
      ctx.fillText(isAr ? 'مسابقة من سيربح الإبداع؟' : 'CERTIFICAT DE MAÎTRISE CRÉATIVE', 600, 155);
    }

    // Awarded To Label
    ctx.font = '20px "Plus Jakarta Sans", "Cairo", sans-serif';
    ctx.fillStyle = '#9CA3AF';
    if (isAudit) {
      ctx.fillText(isAr ? 'تُمنح هذه الشهادة رسمياً إلى علامة :' : 'Décerné officiellement à la marque :', 600, 220);
    } else {
      ctx.fillText(isAr ? 'تُمنح هذه الشهادة رسمياً إلى المبدع(ة) :' : 'Décerné officiellement au candidat(e) :', 600, 220);
    }

    // Recipient Name
    const nameEl = isAudit ? document.getElementById('cert-company-display') : document.getElementById('cr-cert-player-name');
    const recipientName = nameEl ? nameEl.innerText.trim() : (isAr ? 'المتسابق' : 'Candidat');
    ctx.fillStyle = '#F5B700';
    ctx.font = 'bold 48px "Plus Jakarta Sans", "Cairo", sans-serif';
    ctx.fillText(recipientName, 600, 290);

    // Sub-info (Founder name for audit, specialty for challenge)
    ctx.font = '20px "Plus Jakarta Sans", "Cairo", sans-serif';
    ctx.fillStyle = '#D1D5DB';
    if (isAudit) {
      const fEl = document.getElementById('cert-founder-display');
      const fName = fEl ? fEl.innerText.trim() : '';
      if (fName) {
        ctx.fillText(isAr ? 'بإشراف المدير(ة) : ' + fName : 'Direction : ' + fName, 600, 345);
      }
    } else {
      const sEl = document.getElementById('cr-cert-spec');
      const sName = sEl ? sEl.innerText.trim() : '';
      if (sName) {
        ctx.fillText(isAr ? 'تخصص : ' + sName : 'Spécialité : ' + sName, 600, 345);
      }
    }

    // Exact Score Percentage
    let scorePct = '0%';
    let fractionText = '';
    if (isAudit) {
      const pEl = document.getElementById('cert-pct-display');
      scorePct = pEl ? pEl.innerText.trim() : '0%';
    } else {
      const pEl = document.getElementById('cr-cert-pct');
      const fEl = document.getElementById('cr-cert-correct-fraction');
      scorePct = pEl ? pEl.innerText.trim() : '0%';
      fractionText = fEl ? fEl.innerText.trim() : '';
    }

    ctx.fillStyle = '#10B981';
    ctx.font = 'bold 42px "JetBrains Mono", monospace';
    const displayScore = fractionText ? (scorePct + ' (' + fractionText + ')') : scorePct;
    ctx.fillText(isAr ? 'النتيجة المحققة : ' + displayScore : 'SCORE OFFICIEL : ' + displayScore, 600, 440);

    // Rank / Status badge
    const badgeEl = isAudit ? document.getElementById('cert-badge-display') : document.getElementById('cr-cert-rank');
    const badgeVal = badgeEl ? badgeEl.innerText.trim() : '';
    if (badgeVal) {
      ctx.fillStyle = '#FBBF24';
      ctx.font = 'bold 22px "Plus Jakarta Sans", "Cairo", sans-serif';
      ctx.fillText(badgeVal, 600, 500);
    }

    // Divider Line
    ctx.strokeStyle = '#2A2A2A';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(100, 620);
    ctx.lineTo(1100, 620);
    ctx.stroke();

    // Footer Left (Signatory)
    ctx.textAlign = 'left';
    ctx.fillStyle = '#F5B700';
    ctx.font = 'bold 20px "Plus Jakarta Sans", "Cairo", sans-serif';
    ctx.fillText('Hicham Eddarhmoumi', 100, 665);
    ctx.fillStyle = '#9CA3AF';
    ctx.font = '15px "Plus Jakarta Sans", "Cairo", sans-serif';
    ctx.fillText(isAr ? 'Senior Designer & Video Editor • Devis & Facture' : 'Senior Designer & Video Editor • Devis & Facture Légale', 100, 695);

    // Footer Right (Date & Verification)
    ctx.textAlign = 'right';
    const dateEl = isAudit ? document.getElementById('cert-date-display') : document.getElementById('cr-cert-date');
    const dateStr = dateEl ? dateEl.innerText.trim() : new Date().toLocaleDateString('fr-FR');
    ctx.fillStyle = '#F5B700';
    ctx.font = 'bold 20px "Plus Jakarta Sans", "Cairo", sans-serif';
    ctx.fillText(dateStr, 1100, 665);
    ctx.fillStyle = '#9CA3AF';
    ctx.font = '15px "Plus Jakarta Sans", "Cairo", sans-serif';
    ctx.fillText('Vérifié : hichamedd.com', 1100, 695);

    // Download PNG
    const a = document.createElement('a');
    a.download = filename || 'certificat-hichamedd.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  }

  // =========================================================================
  // POSTS & CAROUSEL IMAGE GALLERY
  // =========================================================================
  // حط هنا أسماء الصور لي عندك فـ مجلد assets/images/posts/
const postGalleryImages = [
    "assets/images/posts/image1.webp",
    "assets/images/posts/image2.webp",
    "assets/images/posts/image3.webp",
    "assets/images/posts/image4.webp",
    "assets/images/posts/image5.webp",
    "assets/images/posts/image6.webp",
    "assets/images/posts/image7.webp",
    "assets/images/posts/image8.webp",
    "assets/images/posts/image9.webp",
    "assets/images/posts/image10.webp",
    "assets/images/posts/image11.webp",
    "assets/images/posts/image12.webp",
    "assets/images/posts/image13.webp",
    "assets/images/posts/image14.webp",
    "assets/images/posts/image15.webp",
    "assets/images/posts/image16.webp",
    "assets/images/posts/image17.webp",
    "assets/images/posts/image18.webp",
    "assets/images/posts/image19.webp",
    "assets/images/posts/image20.webp",
    "assets/images/posts/image21.webp",
    "assets/images/posts/image22.webp",
    "assets/images/posts/image23.webp",
    "assets/images/posts/image24.webp",
    "assets/images/posts/image25.webp"
  ];

  let currentGalleryIndex = 0;

  window.openPostsGallery = function () {
    const modal = document.getElementById('posts-gallery-modal');
    if (!modal) return;
    currentGalleryIndex = 0;
    updateGalleryView();
    modal.classList.remove('hidden');
  };

  window.closePostsGallery = function () {
    const modal = document.getElementById('posts-gallery-modal');
    if (modal) modal.classList.add('hidden');
  };

  window.nextGalleryImage = function () {
    currentGalleryIndex = (currentGalleryIndex + 1) % postGalleryImages.length;
    updateGalleryView();
  };

  window.prevGalleryImage = function () {
    currentGalleryIndex = (currentGalleryIndex - 1 + postGalleryImages.length) % postGalleryImages.length;
    updateGalleryView();
  };

  function updateGalleryView() {
    const img = document.getElementById('gallery-current-img');
    const counter = document.getElementById('gallery-counter');
    const dotsContainer = document.getElementById('gallery-dots');

    if (img) {
      img.style.opacity = '0.3';
      setTimeout(() => {
        img.src = postGalleryImages[currentGalleryIndex];
        img.style.opacity = '1';
      }, 150);
    }

    if (counter) {
      counter.innerText = currentLang === 'fr'
        ? `Post ${currentGalleryIndex + 1} sur ${postGalleryImages.length}`
        : `بوست ${currentGalleryIndex + 1} من ${postGalleryImages.length}`;
    }

    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      postGalleryImages.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = idx === currentGalleryIndex
          ? 'w-6 h-2 rounded-full bg-brand-gold transition-all'
          : 'w-2 h-2 rounded-full bg-brand-border hover:bg-gray-400 transition-all';
        dot.onclick = () => {
          currentGalleryIndex = idx;
          updateGalleryView();
        };
        dotsContainer.appendChild(dot);
      });
    }
  }

  // =========================================================================
  // FULLSCREEN IMAGE ZOOM (100% LIGHTBOX)
  // =========================================================================
  window.openFullscreenImage = function () {
    const currentImg = document.getElementById('gallery-current-img');
    const fsModal = document.getElementById('gallery-fullscreen-lightbox');
    const fsImg = document.getElementById('gallery-fullscreen-img');

    if (currentImg && fsModal && fsImg) {
      fsImg.src = currentImg.src;
      fsModal.classList.remove('hidden');
    }
  };

  window.closeFullscreenImage = function () {
    const fsModal = document.getElementById('gallery-fullscreen-lightbox');
    if (fsModal) fsModal.classList.add('hidden');
  };

  // إغلاق التكبير بزر Escape فـ الكيبورد
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeFullscreenImage();
    }
  });

  // =========================================================================
  // BRANDBOOK WIDE SLIDER (10 SLIDES)
  // =========================================================================
  const brandbookGalleryImages = [
    "assets/images/logistocean/img1.webp",
    "assets/images/logistocean/img2.webp",
    "assets/images/logistocean/img3.webp",
    "assets/images/logistocean/img4.webp",
    "assets/images/logistocean/img5.webp",
    "assets/images/logistocean/img6.webp",
    "assets/images/logistocean/img7.webp",
    "assets/images/logistocean/img8.webp",
    "assets/images/logistocean/img9.webp",
    "assets/images/logistocean/img10.webp",
    "assets/images/logistocean/img11.webp",
    "assets/images/logistocean/img12.webp",
    // زيد هنا مسارات صور السلايدات ديالك من بعد
  ];


  window.openBrandbookModal = function () {
    const modal = document.getElementById('brandbook-modal');
    if (!modal) return;
    currentBrandbookIndex = 0;
    updateBrandbookView();
    modal.classList.remove('hidden');
  };

  window.closeBrandbookModal = function () {
    const modal = document.getElementById('brandbook-modal');
    if (modal) modal.classList.add('hidden');
  };

  window.nextBrandbookSlide = function () {
    currentBrandbookIndex = (currentBrandbookIndex + 1) % brandbookGalleryImages.length;
    updateBrandbookView();
  };

  window.prevBrandbookSlide = function () {
    currentBrandbookIndex = (currentBrandbookIndex - 1 + brandbookGalleryImages.length) % brandbookGalleryImages.length;
    updateBrandbookView();
  };

  function updateBrandbookView() {
    const img = document.getElementById('brandbook-current-img');
    const counter = document.getElementById('brandbook-counter');
    const dotsContainer = document.getElementById('brandbook-dots');

    if (img) {
      img.style.opacity = '0.3';
      setTimeout(() => {
        img.src = brandbookGalleryImages[currentBrandbookIndex];
        img.style.opacity = '1';
      }, 150);
    }

    if (counter) {
      counter.innerText = currentLang === 'fr'
        ? `Slide ${currentBrandbookIndex + 1} sur ${brandbookGalleryImages.length}`
        : `سلايد ${currentBrandbookIndex + 1} من ${brandbookGalleryImages.length}`;
    }

    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      brandbookGalleryImages.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = idx === currentBrandbookIndex
          ? 'px-3 py-1 rounded-lg bg-brand-gold text-black font-extrabold text-xs shadow-md shadow-brand-gold/20'
          : 'px-3 py-1 rounded-lg bg-brand-surface border border-brand-border text-gray-400 hover:text-white text-xs font-semibold';
        dot.innerText = idx + 1;
        dot.onclick = () => {
          currentBrandbookIndex = idx;
          updateBrandbookView();
        };
        dotsContainer.appendChild(dot);
      });
    }
  }

})();