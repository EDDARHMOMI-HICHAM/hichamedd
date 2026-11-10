/**
 * HICHAM EDD — MULTI-PAGE APPLICATION JAVASCRIPT
 * Handles Shared Language Persistence across all HTML pages,
 * 1.0s Translation Overlay, Calculator, Modals, Sliders, and Scroll Animations.
 */

(function () {
  'use strict';

  const WHATSAPP_PHONE = "212653342503";
  let currentLang = 'darija'; // Default French

  // Brandbook 10-Slide Dataset
  const brandbookSlides = [
    {
      page: 1,
      title: { fr: "Page 1 : Couverture & Logotype Officiel", darija: "الصفحة 1 : الغلاف وشعار Logistocean الرسمي" },
      subtitle: { fr: "Cover & Official Brand Identity", darija: "Cover & Official Logotype" },
      desc: { 
        fr: "Le symbole géométrique allie le dynamisme d'une vague océanique et la robustesse d'un conteneur logistique.", 
        darija: "الغلاف الرسمي لدليل الهوية البصرية مع شعار Logistocean المصمم بدقة هندسية تعكس السرعة والموثوقية." 
      },
      tag: "01 / 10"
    },
    {
      page: 2,
      title: { fr: "Page 2 : Grille de Construction & Proportions", darija: "الصفحة 2 : شبكة بناء الشعار والنسب الذهبية" },
      subtitle: { fr: "Golden Ratio & Grid Construction", darija: "Grid Construction & Proportions" },
      desc: { 
        fr: "Structure vectorielle rigoureuse basée sur des cercles imbriqués garantissant une lisibilité parfaite à toute échelle.", 
        darija: "توزيع الدوائر والخطوط الهندسية التي تشكل الرمز البصري مع مسافات الأمان ومحاذاة الحروف بدقة متناهية." 
      },
      tag: "02 / 10"
    },
    {
      page: 3,
      title: { fr: "Page 3 : Palette Chromatique Officielle", darija: "الصفحة 3 : لوحة الألوان الرسمية ورموز Hex" },
      subtitle: { fr: "Primary & Secondary Color Codes", darija: "Official Color Palette" },
      desc: { 
        fr: "Bleu Océan Profond (#0A2540) pour la confiance institutionnelle et Bleu Cyan Vif (#0070F3) pour l'agilité numérique.", 
        darija: "الأزرق الملكي البحري (#0A2540) والأزرق المشرق (#0070F3) مع الأبيض والرمادي التقني لطباعة موحدة." 
      },
      tag: "03 / 10"
    },
    {
      page: 4,
      title: { fr: "Page 4 : Système Typographique Corporatif", darija: "الصفحة 4 : منظومة الخطوط والتايبوغرافي" },
      subtitle: { fr: "Corporate Typography Hierarchy", darija: "Typography Hierarchy" },
      desc: { 
        fr: "Hiérarchie avec Plus Jakarta Sans pour les titres percutants et Inter pour une lisibilité fluide des rapports.", 
        darija: "اعتماد خط Plus Jakarta Sans للعناوين و Inter للنصوص، لضمان وضوح وقراءة ممتازة على الشاشات والمطبوعات." 
      },
      tag: "04 / 10"
    },
    {
      page: 5,
      title: { fr: "Page 5 : Zone de Sécurité & Tailles Minimales", darija: "الصفحة 5 : منطقة الأمان والاستخدامات المحظورة" },
      subtitle: { fr: "Clearspace & Minimum Print/Digital Sizing", darija: "Clearspace & Protection" },
      desc: { 
        fr: "Zone d'exclusion obligatoire égale à la hauteur du monogramme 'L' pour préserver l'impact de la marque.", 
        darija: "تحديد مسافة التنفس الإلزامية حول الشعار، وأصغر حجم مسموح به في المطبوعات (25mm) والشاشات (100px)." 
      },
      tag: "05 / 10"
    },
    {
      page: 6,
      title: { fr: "Page 6 : Cartes de Visite & Papeterie", darija: "الصفحة 6 : بطاقات العمل والقرطاسية الرسمية" },
      subtitle: { fr: "Stationery, Letterhead & Business Cards", darija: "Business Cards & Stationery" },
      desc: { 
        fr: "Gabarits pour papier à en-tête officiel, enveloppes sécurisées et cartes de visite avec vernis sélectif.", 
        darija: "تصاميم كروت العمل الورقية الفخمة مع الورق الرسمي (Letterhead) والأظرفة البريدية بلمسات فنية راقية." 
      },
      tag: "06 / 10"
    },
    {
      page: 7,
      title: { fr: "Page 7 : Packaging & Emballages Expédition", darija: "الصفحة 7 : تصاميم الباكاجينغ ومواد التغليف" },
      subtitle: { fr: "Logistics Boxes, Tape & Delivery Packages", darija: "Packaging & Shipping" },
      desc: { 
        fr: "Déclinaisons sur cartons kraft, rubans adhésifs renforcés et étiquettes thermiques pour l'expédition e-commerce.", 
        darija: "صناديق الشحن، أشرطة اللصق، والملصقات اللوجستية التي تعزز تجربة العميل أثناء استلام الطرود." 
      },
      tag: "07 / 10"
    },
    {
      page: 8,
      title: { fr: "Page 8 : Signalétique & Habillage Locaux", darija: "الصفحة 8 : لوحات المقر واللافتات الخارجية" },
      subtitle: { fr: "Wayfinding & Exterior Warehouse Signage", darija: "Signage & Wayfinding" },
      desc: { 
        fr: "Enseignes rétroéclairées pour façades d'entrepôts, totems d'accueil et marquages directionnels intérieurs.", 
        darija: "تطبيقات اللافتات المضيئة للمستودعات والمكاتب، مع علامات الإرشاد والتوجيه الداخلي للفرق والعملاء." 
      },
      tag: "08 / 10"
    },
    {
      page: 9,
      title: { fr: "Page 9 : Flotte de Transport & Tenues", darija: "الصفحة 9 : أسطول الشاحنات وألبسة العمل" },
      subtitle: { fr: "Vehicle Fleet Branding & Uniforms", darija: "Fleet Branding & Uniforms" },
      desc: { 
        fr: "Habillage intégral des utilitaires et semi-remorques avec gilets haute visibilité floqués pour le personnel.", 
        darija: "ملصقات الشاحنات وسيارات التوصيل بحجم كبير مع زي العمل الرسمي لسائقي وموظفي الشركة." 
      },
      tag: "09 / 10"
    },
    {
      page: 10,
      title: { fr: "Page 10 : Écosystème Numérique & Réseaux", darija: "الصفحة 10 : التطبيقات الرقمية ومواقع التواصل" },
      subtitle: { fr: "Digital Banners, Social Media & App Icons", darija: "Digital Guidelines & Social Media" },
      desc: { 
        fr: "Règles pour bannières LinkedIn, signatures d'e-mails HTML, templates Instagram et icônes d'application mobile.", 
        darija: "إرشادات استخدام الشعار والألوان في الموقع الإلكتروني، التواقيع البريدية، وقوالب السوشيال ميديا." 
      },
      tag: "10 / 10"
    }
  ];

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
    // initPageTransitions();
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
    const path = window.location.pathname;
    let pageName = 'home';

    if (path.includes('services.html')) pageName = 'services';
    else if (path.includes('portfolio.html')) pageName = 'portfolio';
    else if (path.includes('blog.html') || path.includes('/blog/')) pageName = 'blog';
    else if (path.includes('about.html')) pageName = 'about';
    else if (path.includes('contact.html')) pageName = 'contact';
    else if (path.includes('challenge.html')) pageName = 'challenge';
    else if (path.includes('audit.html')) pageName = 'audit';

    document.querySelectorAll('.nav-link-btn').forEach(btn => {
      const target = btn.getAttribute('data-page');
      if (target === pageName) {
        btn.classList.add('text-brand-gold', 'bg-brand-card');
        btn.classList.remove('text-gray-300');
      } else {
        btn.classList.remove('text-brand-gold', 'bg-brand-card');
        btn.classList.add('text-gray-300');
      }
    });

    const chalBtn = document.getElementById('nav-challenge-btn');
    if (chalBtn) {
      if (pageName === 'challenge') {
        chalBtn.classList.add('ring-2', 'ring-brand-gold');
      } else {
        chalBtn.classList.remove('ring-2', 'ring-brand-gold');
      }
    }
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

  window.openVideoModal = function (title, desc) {
    const modal = document.getElementById('video-modal');
    const modalTitle = document.getElementById('video-modal-title');
    const modalDesc = document.getElementById('video-modal-desc');

    if (modalTitle) modalTitle.innerText = title || "Spot Promotionnel & Reels — Baklawa.ma";
    if (modalDesc) modalDesc.innerText = desc || "توليد الفيديوهات بالذكاء الاصطناعي والمونتاج ببرامج المونتاج الاحترافية بمقاس 9:16.";

    if (modal) modal.classList.remove('hidden');
  };

  window.closeVideoModal = function () {
    const modal = document.getElementById('video-modal');
    if (modal) modal.classList.add('hidden');
  };

  window.openSocialModal = function () {
    const modal = document.getElementById('social-modal');
    if (modal) modal.classList.remove('hidden');
    currentSocialIndex = 0;
    renderSocialSlide();
  };

  window.closeSocialModal = function () {
    const modal = document.getElementById('social-modal');
    if (modal) modal.classList.add('hidden');
  };

  window.nextSocialSlide = function () {
    currentSocialIndex = (currentSocialIndex + 1) % socialSlides.length;
    renderSocialSlide();
  };

  window.prevSocialSlide = function () {
    currentSocialIndex = (currentSocialIndex - 1 + socialSlides.length) % socialSlides.length;
    renderSocialSlide();
  };

  function renderSocialSlide() {
    const slide = socialSlides[currentSocialIndex];
    const wrapper = document.getElementById('social-slide-wrapper');
    const counter = document.getElementById('social-slide-counter');

    if (counter) {
      counter.innerText = currentLang === 'fr'
        ? `Post ${slide.num} sur ${socialSlides.length}`
        : `بوست ${slide.num} من ${socialSlides.length}`;
    }

    if (wrapper) {
      wrapper.innerHTML = `
        <div class="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#1a1a1a] via-[#121212] to-[#0A0A0A] text-white">
          <div class="flex items-center justify-between border-b border-white/10 pb-4">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-gold to-amber-500 flex items-center justify-center font-bold text-black text-sm">H</div>
              <div>
                <span class="text-xs sm:text-sm font-bold block">hixam.ed • Nihao Brand</span>
                <span class="text-[10px] text-gray-400">Sponsorisé • Agadir, Maroc</span>
              </div>
            </div>
            <span class="text-xs text-brand-gold font-mono px-2.5 py-1 rounded-md bg-brand-gold/10 border border-brand-gold/30">1080 × 1350</span>
          </div>

          <div class="my-auto text-center space-y-4 py-6">
            <div class="w-16 h-16 rounded-2xl bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold font-black text-2xl mx-auto shadow-xl shadow-brand-gold/10">
              #0${slide.num}
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white leading-tight max-w-sm mx-auto">
              ${slide.title[currentLang]}
            </h3>
            <p class="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
              ${slide.desc[currentLang]}
            </p>
            <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-gold text-black text-xs font-bold shadow-lg shadow-brand-gold/20">
              <span>Shop Now • اطلب الآن</span>
              <span>→</span>
            </div>
          </div>

          <div class="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-gray-400">
            <div class="flex items-center gap-4 text-sm">
              <span class="flex items-center gap-1.5"><span class="text-red-500">❤️</span> 1 420</span>
              <span class="flex items-center gap-1.5">💬 138</span>
              <span class="flex items-center gap-1.5">↗️ 92</span>
            </div>
            <span class="text-[11px] font-mono text-brand-gold">${slide.num} / ${socialSlides.length}</span>
          </div>
        </div>
      `;
    }
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

  function ensureProgressBar() {
    let bar = document.getElementById('page-progress-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'page-progress-bar';
      document.body.prepend(bar);
    }
    return bar;
  }

  function startProgressBar() {
    const bar = ensureProgressBar();
    bar.style.transition = 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease';
    bar.style.opacity = '1';
    bar.style.width = '35%';
    setTimeout(() => {
      if (bar.style.opacity === '1' && parseFloat(bar.style.width) < 80) {
        bar.style.width = '75%';
      }
    }, 120);
  }

  function finishProgressBar() {
    const bar = ensureProgressBar();
    bar.style.width = '100%';
    setTimeout(() => {
      bar.style.opacity = '0';
      setTimeout(() => {
        bar.style.width = '0%';
      }, 200);
    }, 150);
  }

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
    startProgressBar();

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

  function handlePopState() {
    navigateTo(window.location.href, false);
  }

  function initPageTransitions() {
    ensureProgressBar();
    document.addEventListener('click', handleLinkClick);
    window.addEventListener('popstate', handlePopState);

    // Safeguard for bfcache back/forward navigation
    window.addEventListener('pageshow', () => {
      const main = document.querySelector('main');
      if (main) {
        main.classList.remove('page-transition-out');
        main.classList.add('page-transition-in');
      }
      const bar = document.getElementById('page-progress-bar');
      if (bar) {
        bar.style.opacity = '0';
        bar.style.width = '0%';
      }
      isTransitioning = false;
    });

    const main = document.querySelector('main');
    if (main) {
      main.classList.add('page-transition-in');
    }
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
      if (video) video.pause();
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
    ctx.fillText(isAr ? '• شهادة تدقيق رسميّة • 2026 •' : '• OFFICIAL CERTIFICATE • 2026 •', 600, 95);

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

})();