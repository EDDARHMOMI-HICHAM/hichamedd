/**
 * HICHAM EDD — COMPLETE BILINGUAL TRANSLATION SYSTEM
 * Languages: Français ('fr' - Default) & Moroccan Darija ('darija')
 * 100% Comprehensive Coverage (FAQ, Legal, Calculator, Modals, Badges)
 */

const translations = {
  // =========================================================================
  // FRANÇAIS (DEFAULT)
  // =========================================================================
  fr: {
    dir: "ltr",
    langName: "Français",
    code: "fr",
    flag: "🇫🇷",
    siteTitle: "Hicham Eddarhmoumi | Graphic Designer & Monteur Vidéo Maroc",
    translatingText: "Traduction en français en cours...",
    
    // Top Announcement Bar
    announcement: "🔥 Offre Spéciale : -30% de réduction valable 30 jours à partir du 15 Novembre 2026 ! Devis & Facture Légale",
    
    // Navigation (Must be whitespace-nowrap on single line)
    nav: {
      home: "Accueil",
      services: "Services & Packs",
      portfolio: "Portfolio",
      blog: "Articles",
      about: "À propos",
      contact: "Contact",
      challenge: "🏆 Défi Créatif"
    },
    
    // CTAs
    cta: {
      whatsapp: "WhatsApp Direct",
    download_cert: "📥 Télécharger le certificat (Image)",
      view_packs: "Voir les Tarifs",
      free_quote: "Demander un Devis",
      discuss_project: "Parler de votre projet",
      book_sprint: "Réserver ce sprint",
      read_article: "Lire l'article complet",
      back_to_blog: "← Retour aux articles",
      reserve_sprint: "Réserver une journée de sprint →",
      other_articles: "Lire d'autres articles",
      view_reel: "Voir la vidéo (Reel)",
      view_instagram: "Voir le carrousel (1080×1350)",
      view_brandbook: "Consulter la charte (10 slides)",
      send_message: "Envoyer le message & Réserver"
    },
    
    // Hero Section
    hero: {
      online_status: "En ligne • Disponible cette semaine pour nouveaux projets",
      badge: "⚡ Designer & Monteur Vidéo IA à la journée pour Startups & Agences",
      title_part1: "Travaillez avec un Designer Dédié par Jour",
      title_part2: "(Per Day) Sans Engagements Long Terme",
      subtitle: "Lancement de produit, campagnes publicitaires, génération et montage de vidéos par Intelligence Artificielle (IA) et montage professionnel par journée d'immersion : réactivité immédiate, Devis préalable et Facture légale conforme au Maroc.",
      badge1: "Livraison rapide dans les délais",
      badge2: "Devis & Facture Légale Maroc",
      badge3: "Échange direct sur WhatsApp",
      exp_years: "3+ Ans",
      exp_label: "D'expérience",
      location: "Agadir & Tout le Maroc (En ligne)",
      role_badge: "Lead Designer chez SehaLink",
      cta: "Réserver une journée",
      audit_btn: "📊 Diagnostiquer votre marque",
      whatsapp_btn: "WhatsApp 06 53 34 25 03"
    },

    // Tools Ticker
    tools: {
      heading: "Logiciels et outils créatifs maîtrisés avec précision"
    },

    // Audiences
    audiences: {
      title: "À qui s'adresse cette formule par jour (Per Day) ?",
      subtitle: "Une solution agile et économique taillée sur mesure pour les entreprises marocaines qui refusent la lourdeur du recrutement traditionnel.",
      card1_badge: "Startups & E-Commerce",
      card1_title: "Fondateurs de Startups & E-commerçants",
      card1_desc: "Vous lancez un produit ou une marque et vous avez besoin de packaging 3D, de bannières publicitaires et de génération de vidéos par Intelligence Artificielle et montage par logiciels professionnels en 48 heures chrono ? Évitez le coût d'un salaire fixe et des charges CNSS : bénéficiez d'un sprint créatif concentré.",
      card1_f1: "Identité de lancement & visuels publicitaires à fort taux de conversion",
      card1_f2: "Génération de vidéos par Intelligence Artificielle et montage professionnel",
      card1_f3: "Devis transparent et Facture officielle pour vos dépenses d'entreprise",
      
      card2_badge: "Agences & Studios",
      card2_title: "Agences de Marketing & Communication",
      card2_desc: "Surcroît d'activité imprévu, deadlines serrées ou client exigeant sans équipe disponible en interne ? J'interviens en marque blanche (White-Label) avec rigueur et autonomie, en vous livrant des fichiers sources impeccables (PSD, AI, PR, AE, Figma).",
      card2_f1: "Renfort immédiat en marque blanche (White-Label garanti)",
      card2_f2: "Fichiers sources ouverts et parfaitement organisés par calques",
      card2_f3: "Respect absolu des briefs et des chartes graphiques de vos clients"
    },

    // Process
    process: {
      title: "Comment se déroule notre journée de travail ?",
      subtitle: "Un processus fluide, transparent et ultra-rapide en 4 étapes simples.",
      step1_num: "01",
      step1_title: "Briefing & Devis officiel",
      step1_desc: "Échange direct sur WhatsApp ou appel pour définir votre liste de livrables prioritaires, cadrer le timing et valider le Devis.",
      step2_num: "02",
      step2_title: "Sprint de production dédié",
      step2_desc: "Concentration exclusive à 100% sur votre projet durant la journée sans aucune distraction extérieure.",
      step3_num: "03",
      step3_title: "Retours & ajustements en direct",
      step3_desc: "Envoi continu des propositions et ajustements instantanés en direct sur WhatsApp pour une satisfaction totale.",
      step4_num: "04",
      step4_title: "Livraison finale & Facturation",
      step4_desc: "Remise des exports haute définition et des fichiers sources éditables, accompagnés de votre Facture officielle conforme."
    },

    // Security & Guarantees
    security: {
      title: "Garanties professionnelles & Conformité légale au Maroc",
      subtitle: "Votre sérénité et la protection de vos investissements sont au cœur de ma démarche.",
      p1_title: "Devis & Facturation Légale",
      p1_desc: "Chaque prestation est couverte par un devis détaillé préalable et une facture commerciale officielle conforme à la législation fiscale marocaine pour sécuriser vos bilans comptables.",
      p2_title: "Paiement Bancaire Sécurisé",
      p2_desc: "Règlements sécurisés par virement bancaire professionnel via CIH Bank ou Attijariwafa bank, offrant une traçabilité totale et une sécurité absolue.",
      p3_title: "Clause de Confidentialité (NDA)",
      p3_desc: "Engagement strict de discrétion totale sur vos campagnes, vos stratégies, vos lancements et vos données clients. Possibilité de signer un accord NDA formel."
    },

    // Diagnostic Brand Audit Banner on Services Page
    services: {
      audit_tag: "💡 Audit Diagnostique Gratuit",
      audit_title: "Besoin de connaître les failles de votre marque avant de choisir un pack ?",
      audit_desc: "Passez un audit express en 12 critères et recevez un bilan officiel instantané avec recommandations concrètes pour votre projet.",
      audit_btn: "📊 Diagnostiquer votre marque gratuitement"
    },

    // Services & Packs
    pricing: {
      title: "Packs & Tarifs par Journée (Sprints Dédiés)",
      subtitle: "Des formules claires avec réduction immédiate de 30% — Devis préalable et Facture légale inclus.",
      special_offer: "Offre Spéciale",
      per_day: "DH / Jour",
      for_2days: "DH (2 Jours)",
      save_badge: "Économisez 30%",

      pack1_badge: "Interventions Rapides",
      pack1_title: "Journée Libre (Day Pass)",
      pack1_desc: "Idéal pour liquider une to-do list accumulée, retoucher des supports existants ou concevoir des visuels urgents en 24h.",
      pack1_old_price: "430 DH",
      pack1_new_price: "300 DH",
      pack1_f1: "1 journée de sprint créatif (7 heures dédiées)",
      pack1_f2: "Graphisme ou Montage vidéo selon vos priorités",
      pack1_f3: "Ajustements et révisions en direct sur WhatsApp",
      pack1_f4: "Fichiers sources HD & Facture légale",

      pack2_badge: "Recommandé Agences",
      pack2_title: "Pack Agency Backup",
      pack2_desc: "La formule parfaite pour absorber les pics de charge en agence et livrer vos clients en temps record en marque blanche.",
      pack2_old_price: "430 DH",
      pack2_new_price: "300 DH",
      pack2_f1: "Intervention en marque blanche (White-Label)",
      pack2_f2: "Respect strict des chartes clients et des guidelines",
      pack2_f3: "Livraison des calques natifs (PSD, AI, Premiere, After Effects)",
      pack2_f4: "Communication directe et disponibilité immédiate",

      pack3_badge: "Nouveaux Produits",
      pack3_title: "Pack Startup Launch",
      pack3_desc: "Pack intensif de 2 jours (14 heures de production) pour lancer un nouveau produit ou marque avec un pack visuel complet.",
      pack3_old_price: "860 DH",
      pack3_new_price: "600 DH",
      pack3_f1: "2 journées de sprint immersif (14 heures)",
      pack3_f2: "Logo de lancement, typographies & bannières publicitaires",
      pack3_f3: "Packaging 3D réaliste et mockups produits",
      pack3_f4: "2 vidéos Reels générées par IA et montées par logiciels professionnels",

      pack4_badge: "Réseaux Sociaux",
      pack4_title: "Pack Content 30 Jours",
      pack4_desc: "Deux journées complètes pour produire le calendrier éditorial d'un mois entier sur Instagram, TikTok et Facebook.",
      pack4_old_price: "860 DH",
      pack4_new_price: "600 DH",
      pack4_f1: "2 journées de production de contenu intensif",
      pack4_f2: "15 posts / carrousels créatifs (1080×1350)",
      pack4_f3: "4 Reels vidéo générées par IA et montées par logiciels professionnels",
      pack4_f4: "Organisation complète des fichiers prêts à publier"
    },

    // Interactive Sprint Calculator (Strictly 2 services: Design 300 DH vs 430 DH, Video 350 DH vs 500 DH)
    calc: {
      title: "Calculateur de Sprint Personnalisé",
      subtitle: "Calculez précisément votre investissement selon votre besoin et votre durée avec application automatique de la réduction de 30%.",
      step1: "1. Choisissez le service requis :",
      opt_design: "Graphic Design (300 DH / jour)",
      opt_design_note: "300 DH/j au lieu de 430 DH (-30%)",
      opt_video: "Video Editing & Reels (350 DH / jour)",
      opt_video_note: "350 DH/j au lieu de 500 DH (-30%)",
      
      step2: "2. Choisissez le nombre de jours (1 à 5 jours) :",
      btn_1day: "1 Jour",
      btn_2days: "2 Jours",
      btn_3days: "3 Jours",
      btn_4days: "4 Jours",
      btn_5days: "5 Jours",
      
      summary_heading: "Estimation détaillée de votre sprint :",
      original_price_label: "Prix standard avant réduction :",
      discounted_price_label: "Tarif Offre Spéciale (-30%) :",
      savings_label: "Votre économie immédiate :",
      taxes_note: "* Tarifs nets avec Devis officiel préalable et Facture légale déductible.",
      cta_whatsapp_calc: "Commander ce sprint sur WhatsApp"
    },

    // Portfolio & Projects
    portfolio: {
      title: "Réalisations & Études de Cas",
      subtitle: "Découvrez des projets récents menés pour des marques et entreprises marocaines à fort impact.",
      category_all: "Tous les projets",
      category_video: "Vidéos & Reels (9:16)",
      category_social: "Posts Carrousel (1080×1350)",
      category_brand: "Charte Graphique & Identité",

      // Project 1: Video
      p1_badge: "Génération IA & Montage Professionnel",
      p1_title: "Spot Promotionnel & Reels Cinématiques — Baklawa.ma",
      p1_client: "Baklawa.ma • E-Commerce Gourmand",
      p1_desc: "Toulid et génération des plans vidéo par Intelligence Artificielle (IA) et montage par logiciels professionnels en format 9:16 pour TikTok et Instagram Reels : découpage au rythme, étalonnage cinématographique et sound design.",
      p1_btn: "Voir la vidéo et les détails ▶",

      // Project 2: Social
      p2_badge: "Carrousel Instagram (1080×1350)",
      p2_title: "Campagne Social Media & Visuels Publicitaires — Nihao Brand",
      p2_client: "Nihao Brand • Cosmétique & Bien-être",
      p2_desc: "Conception d'une série de posts au format optimal 1080x1350 : détourage produit sous Photoshop, retouches ombres et lumières, bannières publicitaires Ads générant un engagement de +40%.",
      p2_btn: "Feuilleter les posts (Carrousel) ▶",

      // Project 3: Branding
      p3_badge: "Identité Visuelle & Guideline",
      p3_title: "Livre d'Identité & Charte Graphique Complète — Logistocean",
      p3_client: "Logistocean • Transport & Logistique",
      p3_desc: "Création complète de la charte de marque (10 pages) : construction géométrique du logo au ratio doré, palette chromatique corporate, typographies officielles, packaging et marquage flotte de transport.",
      p3_btn: "Consulter la charte (10 slides) ▶"
    },

    // Blog
    blog: {
      header_tag: "💡 Analyses, Guides & Stratégies Éprouvées",
      header_title: "20 Articles & Guides Pratiques",
      header_desc: "Tout ce que vous devez savoir sur le design graphique, le montage vidéo, le branding au Maroc, les tarifs et l'intelligence artificielle pour faire grandir votre entreprise.",
    audit_box_tag: "🎯 Audit Gratuit pour Entreprises",
    audit_box_title: "Votre identité visuelle freine-t-elle vos ventes ?",
    audit_box_desc: "Identifiez les vraies failles de vos visuels et vidéos en 12 questions et recevez votre bilan officiel pour votre entreprise.",
    audit_box_btn: "📊 Diagnostiquer votre marque",
      title: "Articles & Conseils Stratégiques",
      subtitle: "Analyses concrètes et retours d'expérience pour maximiser le ROI de votre communication visuelle au Maroc.",
      
      art1_category: "Stratégie & Entrepreneuriat",
      art1_read_time: "4 min de lecture",
      art1_date: "07 Novembre 2026",
      art1_title: "Pourquoi la formule « Designer par Jour » surpasse le recrutement classique pour les PME au Maroc ?",
      art1_excerpt: "Comparatif économique et opérationnel : comment économiser jusqu'à 60% sur vos coûts créatifs tout en obtenant des résultats en 48h.",
      
      art2_category: "E-Commerce & Vidéo Ads",
      art2_read_time: "5 min de lecture",
      art2_date: "01 Novembre 2026",
      art2_title: "5 secrets de montage de Reels et TikTok qui multiplient les ventes des boutiques en ligne au Maroc",
      art2_excerpt: "Le guide pas-à-pas pour générer des vidéos par Intelligence Artificielle et les monter par logiciels professionnels pour captiver dans les 3 premières secondes."
    },

    // About Me
    about: {
      badge: "Parcours Professionnel & Vision Créative",
      title: "Hicham Eddarhmoumi (Hicham Edd)",
      subtitle: "Designer Graphique & Monteur Vidéo basé à Agadir, au service des entreprises et agences ambitieuses partout au Maroc.",
      intro: "Passionné par l'intersection entre le design visuel percutant et la rentabilité commerciale, j'accompagne depuis plus de 3 ans des startups, des e-commerçants et des agences de communication dans la création d'images de marque mémorables et de vidéos générées par IA et montées par logiciels professionnels.",
      current_role_title: "Rôle Actuel : Lead Designer chez SehaLink",
      current_role_desc: "J'occupe actuellement le poste de Designer Graphique principal chez SehaLink, plateforme marocaine innovante spécialisée dans les technologies de santé. J'y conçois l'ensemble des interfaces produit, des chartes de communication médicale et des campagnes publicitaires multicanales.",
      experience_title: "Expériences en Agence & Projets Sous Contrat Confidentiel (NDA)",
      experience_desc: "Au fil de mon parcours, j'ai collaboré en marque blanche avec des agences renommées (notamment Ocean Connecting et Opti-Sent) ainsi que de nombreuses PME marocaines. En raison d'accords stricts de non-divulgation (NDA), plusieurs de ces projets d'envergure restent confidentiels mais témoignent d'une rigueur absolue et du respect des plus hauts standards de l'industrie.",
      
      timeline_heading: "Chronologie & Jalons Clés :",
      t1_year: "2022 - 2023",
      t1_title: "Freelance Agences & Motion Design",
      t1_desc: "Réalisation de campagnes de branding et de vidéos motion design pour des clients du secteur logistique, tech et restauration.",
      
      t2_year: "2024 - 2025",
      t2_title: "Création Visuelle E-Commerce & Intégration SehaLink",
      t2_desc: "Direction artistique pour des marques e-commerce émergentes et prise en charge du pôle créatif chez SehaLink.",
      
      t3_year: "2026",
      t3_title: "Lancement du Modèle « Designer Per Day »",
      t3_desc: "Mise en place d'une offre moderne par journées d'immersion avec devis et facturation légale, plébiscitée par les startups et agences à travers le Maroc.",

      values_heading: "Mes Principes de Travail :",
      v1_title: "Vitesse d'Exécution & Respect des Délais",
      v1_desc: "Une deadline est un engagement sacré. Je livre vos projets clés en main dans le temps imparti sans excuses.",
      v2_title: "Fichiers Ouverts & Propriété 100%",
      v2_desc: "Vous êtes propriétaire exclusif de toutes les créations, incluant les fichiers sources éditables (PSD, AI, PR, AE, Figma).",
      v3_title: "Facturation Transparente & Régularité",
      v3_desc: "Émission systématique d'un devis préalable et d'une facture commerciale officielle pour la comptabilité de votre entreprise."
    },

    // Contact
    contact: {
      badge: "Parlons de votre projet",
      title: "Contactez-moi & Réservez votre journée",
      subtitle: "Un projet urgent, un lancement de produit ou un besoin de renfort ? Échangeons directement sur WhatsApp ou remplissez le formulaire ci-dessous.",
      
      info_heading: "Coordonnées Directes",
      phone_label: "Téléphone & WhatsApp :",
      email_label: "Adresse Email :",
      address_label: "Adresse :",
      address_val: "Agadir & Tout le Maroc (Prestations en ligne)",
      hours_label: "Disponibilité :",
      hours_val: "Du Lundi au Samedi : 09h00 - 19h00",

      wa_direct_btn: "Ouvrir WhatsApp directement",
      form_heading: "Envoyez un message direct",
      form_name_placeholder: "Ex: Karim  / Startup Maroc",
      form_email_placeholder: "karim@exemple.ma",
      form_phone_placeholder: "06 00 00 00 00",
      form_message_placeholder: "Décrivez brièvement vos besoins créatifs et vos délais...", 

      payment_heading: "Facturation & Règlements Bancaires au Maroc :",
      payment_desc: "Toutes les prestations font l'objet d'un Devis officiel préalable et d'une Facture commerciale en règle pour votre comptabilité. Règlements acceptés par virement bancaire professionnel :",
      bank_cih_name: "CIH BANK",
      bank_cih_desc: "Compte professionnel dédié pour virement direct rapide",
      bank_attijari_name: "Attijariwafa bank",
      bank_attijari_desc: "Virement interbancaire sécurisé avec justificatif instantané",

      form_name: "Votre Nom / Nom de votre Société",
      form_email: "Votre Adresse Email",
      form_phone: "Votre Numéro de Téléphone (WhatsApp)",
      form_service: "Type de Service Souhaité",
      form_service_select: "-- Sélectionnez un service --",
      form_service_design: "Graphic Design (Identité, Posts, Packaging)",
      form_service_video: "Génération IA & Montage Vidéo (Reels, TikTok, Publicités)",
      form_message: "Décrivez brièvement votre projet et vos délais souhaités...",
      form_submit: "Envoyer le message & Réserver"
    },

    // FAQ Accordion (100% Translated)
    faq: {
      heading: "Foire Aux Questions",
      title: "Questions Fréquentes",
      q1: "Comment réserver ma journée de travail créatif ?",
      a1: "Il vous suffit d'envoyer un message sur WhatsApp au 06 53 34 25 03 ou de remplir le formulaire. Nous validons ensemble votre liste de livrables prioritaires, le Devis officiel et la date fixée pour le sprint.",
      q2: "Livrez-vous les fichiers sources ouverts (PSD, AI, Premiere) ?",
      a2: "Oui, absolument et à 100%. Vous êtes propriétaire exclusif de toutes les créations. À la fin de la journée, vous recevez les exports HD optimisés ainsi que tous les fichiers sources éditables organisés par calques.",
      q3: "Délivrez-vous une facture légale pour la comptabilité de mon entreprise ?",
      a3: "Tout à fait. Chaque prestation fait l'objet d'un Devis officiel préalable et d'une Facture commerciale en bonne et due forme, conforme aux normes fiscales marocaines et déductible pour votre entreprise.",
      q4: "Comment intégrez-vous l'Intelligence Artificielle dans les vidéos ?",
      a4: "Nous utilisons les outils d'IA les plus avancés pour générer des séquences ultra-réalistes, des voix off et des visuels de haute qualité, puis nous effectuons le montage, le sound design et l'étalonnage avec les logiciels professionnels de référence (Premiere Pro, After Effects, DaVinci Resolve)."
    },

    // Legal & Footer (100% Translated)
    legal: {
      privacy_badge: "Conformité CNDP Maroc",
      privacy_title: "Politique de Confidentialité & Données",
      privacy_p1: "Conformément à la loi marocaine n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, les informations recueillies sur ce site (nom, email, téléphone WhatsApp) sont uniquement utilisées pour traiter vos demandes de devis et gérer nos prestations de design et de montage vidéo.",
      privacy_p2: "Vos données ne sont en aucun cas vendues, louées ou transmises à des tiers sans votre accord préalable.",
      privacy_p3: "Toutes les créations réalisées pour votre compte bénéficient d'une stricte confidentialité protégée par le secret professionnel et le cas échéant par un accord de non-divulgation (NDA).",

      terms_badge: "Cadre Contractuel Légal",
      terms_title: "Conditions Générales d'Utilisation & de Prestation",
      terms_p1: "Les présentes conditions régissent l'ensemble des prestations créatives fournies par Hicham Eddarhmoumi sous la formule « Designer par Jour » (Per Day).",
      terms_p2: "1. Devis & Réservation : Chaque sprint journalier commence après accord sur la to-do list et acceptation formelle du Devis chiffré.",
      terms_p3: "2. Propriété Intellectuelle : Dès le règlement intégral de la facture, le client devient propriétaire exclusif de 100% des droits sur les livrables finaux et les fichiers sources éditables remis.",
      terms_p4: "3. Facturation & Paiement : Les règlements sont effectués par virement bancaire professionnel (CIH Bank / Attijariwafa bank) et donnent lieu à la délivrance d'une facture légale conforme.",

      back_home: "← Retour à l'accueil",
      footer_rights: "© 2026 Hicham Edd. Tous droits réservés. Devis & Facture Légale Maroc."
    }
  },

  // =========================================================================
  // الدارجة المغربية (MOROCCAN DARIJA)
  // =========================================================================
  darija: {
    dir: "rtl",
    langName: "الدارجة المغربية",
    code: "darija",
    flag: "🇲🇦",
    siteTitle: "هشام الدغمومي | ديزاينر ومونتير فيديو بالنهار فالمغرب",
    translatingText: "جاري الترجمة إلى الدارجة المغربية...",
    
    // Top Announcement Bar
    announcement: "🔥 عرض خاص: تخفيض 30% صالح لمدة 30 يوم ابتداءً من 15 نونبر 2026! مع Devis و Facture قانونية",
    
    // Navigation (Must be whitespace-nowrap on single line)
    nav: {
      home: "الرئيسية",
      services: "الخدمات والباقات",
      portfolio: "الأعمال",
      blog: "المقالات",
      about: "من أنا",
      contact: "اتصل بي",
      challenge: " تحدي الإبداع"
    },
    
    // CTAs
    cta: {
      whatsapp: "واتساب مباشر",
    download_cert: "📥 احتفظ بالشهادة (تحميل كصورة)",
      view_packs: "شوف الباقات والأثمنة",
      free_quote: "طلب Devis مسبق",
      discuss_project: "نهضرو فالمشروع ديالك",
      book_sprint: "حجز هاد السبرينت",
      read_article: "قراءة المقال بالكامل",
      back_to_blog: "← الرجوع للمقالات",
      reserve_sprint: "حجز نهار ديال الخدمة (Sprint) ←",
      other_articles: "قراءة مقالات أخرى",
      view_reel: "مشاهدة الفيديو (Reel)",
      view_instagram: "تصفح الكاروسيل (1080×1350)",
      view_brandbook: "الاطلاع على الهوية (10 سلايدات)",
      send_message: "إرسال الرسالة وحجز الموعد"
    },
    
    // Hero Section
    hero: {
      online_status: "أونلاين • متاح هاد الأسبوع للمشاريع الجديدة",
      badge: "⚡ ديزاينر ومونتير فيديو بالنهار للـ Startups والوكالات فالمغرب",
      title_part1: "تخدم مع ديزاينر بالنهار",
      title_part2: "(Per Day) بلا التزامات طويلة الأمد",
      subtitle: "عندك إطلاق منتوج، حملات إعلانية، توليد الفيديوهات بالذكاء الاصطناعي والمونتاج ببرامج المونتاج الاحترافية، ولا ضغط مفاجئ فالوكالة مع زبون مزروب؟ كنخدم معك بنظام الأيام المركزة: تركيز كامل، تواصل فالحين، Devis رسمي مسبق، وفاتورة قانونية (Facture) لضبط حسابات ومصاريف شركتك.",
      badge1: "تسليم سريع فالموعد المحدد",
      badge2: "Devis و Facture قانونية فالمغرب",
      badge3: "تواصل مباشر وفوري فواتساب",
      exp_years: "3+ سنين",
      exp_label: "د الخبرة",
      location: "أكادير والمغرب كامل (أونلاين)",
      role_badge: "Lead Designer فمنصة SehaLink",
      whatsapp_btn: "تواصل فـ واتساب 0653342503",
      audit_btn: "تشخيص علامتك التجارية"
    },

    // Tools Ticker
    tools: {
      heading: "البرامج والأدوات اللي كنخدم بيهم "
    },

    // Audiences
    audiences: {
      title: "شكون اللي صالحة ليه هاد الخدمة بالنهار (Per Day)؟",
      subtitle: "حلول عملية مقادة  للشركات والماركات اللي ما باغيّاش تدخل فصداع التوظيف التقليدي ومصاريف الرواتب الثابتة.",
      card1_badge: "Startups & التجارة الإلكترونية",
      card1_title: "أصحاب الـ Startups ومتاجر الإيكوميرس",
      card1_desc: "عندك إطلاق براند جديدة، حملة إعلانية، ومحتاج باكاجينغ 3D، وبوستات وبانيرات ديال شهر كامل، مع توليد الفيديوهات بالذكاء الاصطناعي والمونتاج ببرامج المونتاج فـ 48 ساعة فقط؟ بلا ما تخلص راتب شهري ومصاريف CNSS، كنعطيك تركيز 100% باش تكون واجد فالسوق بسرعة وتبدا المبيعات.",
      card1_f1: "هوية إطلاق المنتوج وتصاميم إعلانات تجيب المبيعات",
      card1_f2: "توليد الفيديوهات بالذكاء الاصطناعي والمونتاج ببرامج المونتاج",
      card1_f3: "Devis واضح وفاتورة قانونية (Facture) تخصمها من مصاريف شركتك",
      
      card2_badge: "الوكالات واستوديوهات الإشهار",
      card2_title: "أصحاب وكالات الـ Marketing والـ Communication",
      card2_desc: "طاح عليكم ضغط مفاجئ، كليان مزروب، ومحتاج يد إضافية محترفة تعاونك تسالي الـ Deadlines؟ كنخدم معك بنظام White-Label (ماركة بيضاء)، كانكون متاح فالحين، وكنسلمك الملفات المفتوحة كاملة (PSD, AI, Premiere, After Effects, Figma) باش تبقى وكالتك ديما فالمستوى.",
      card2_f1: "تدخل فالحين بنظام الماركة البيضاء (White-Label مضمون)",
      card2_f2: "تسليم الملفات الأصلية كاملة منظمة بالطبقات (Layers)",
      card2_f3: "احترام تام للهويات البصرية ودليل المعايير ديال العملاء ديالك"
    },

    // Process
    process: {
      title: "كيفاش كيدوز نهار الخدمة ديالي خطوة بخطوة؟",
      subtitle: "طريقة عمل واضحة، سريعة وسلسة فـ 4 خطوات محددة.",
      step1_num: "01",
      step1_title: "الـ Brief و Devis رسمي",
      step1_desc: "كنهضرو فواتساب أو مكالمة خفيفة، كنحددو قائمة المهام والملفات المطلوبة، وكنعطيك Devis رسمي فيه السعر والوقت.",
      step2_num: "02",
      step2_title: "سبرينت إنتاج مركز",
      step2_desc: "تفرغ كامل 100% للمشروع ديالك طيلة ساعات اليوم بلا أي تشتيت خارجي باش نساليو فالوقت.",
      step3_num: "03",
      step3_title: "تعديلات لحظية فالحين",
      step3_desc: "كنشارك معك المقترحات أولاً بأول فواتساب، وأي تعديل كيطبق مباشرة فنفس اللحظة حتى تكون راضي تماماً.",
      step4_num: "04",
      step4_title: "التسليم النهائي والفاتورة",
      step4_desc: "كنسلمك جميع الملفات بجودة عالية مع الملفات المفتوحة الأصلية، وكنصيفط ليك الفاتورة القانونية (Facture) ديال شركتك."
    },

    // Security & Guarantees
    security: {
      title: "ضمانات قانونية وأداء موثوق 100% فالمغرب",
      subtitle: "راحة البال ديالك وحماية استثماراتك هما الأولوية الأولى عندي.",
      p1_title: "Devis و Facture قانونية رسمية",
      p1_desc: "كل خدمة مؤطرة بـ Devis مفصل مسبق وفاتورة تجارية رسمية مطابقة للمحاسبة والضرائب المغربية لضبط مصاريف شركتك.",
      p2_title: "أداء بنكي آمن ومباشر",
      p2_desc: "الأداء كيتم بتحويل بنكي رسمي وموثوق عبر الحساب البنكي فـ CIH Bank أو Attijariwafa bank، مع إشعار فوري وحماية كاملة لكل درهم.",
      p3_title: "التزام السرية التامة (NDA)",
      p3_desc: "سرية تامة ومطلقة على مشاريعك، تصاميمك، واستراتيجيات حملاتك الإعلانية. إمكانية توقيع اتفاقية عدم إفشاء (NDA) قبل البدء."
    },

    // Diagnostic Brand Audit Banner on Services Page
    services: {
      audit_tag: "💡 تدقيق تشخيصي مجاني",
      audit_title: "باغي تعرف ثغرات علامتك قبل ما تختار الباقة؟",
      audit_desc: "دوز فحص سريع من 12 معياراً وخذ تقرير فوري وشهادة تدقيق رسمية باش تعرف بالضبط شنو خاص مشروعك.",
      audit_btn: "📊 ابدأ تشخيص علامتك مجاناً"
    },

    // Services & Packs
    pricing: {
      title: "الباقات وعروض الأيام (Packs & Tarifs)",
      subtitle: "عروض واضحة بنظام الأيام مع تخفيض 30% فوري — Devis مسبق وفاتورة قانونية مضمونة.",
      special_offer: "عرض خاص",
      per_day: "درهم / نهار",
      for_2days: "درهم (يومين)",
      save_badge: "توفير 30%",

      pack1_badge: "للمشاريع السريعة",
      pack1_title: "اليوم الحر (Day Pass)",
      pack1_desc: "مثالي لتصفية قائمة مهام متراكمة (To-Do List)، تعديل تصاميم سابقة، أو تجهيز بوستات إعلانية مستعجلة فـ 24 ساعة.",
      pack1_old_price: "430 درهم",
      pack1_new_price: "300 درهم",
      pack1_f1: "نهار كامل د الخدمة المركزة (7 ساعات مخصصة)",
      pack1_f2: "غرافيك ديزاين أو مونتاج فيديو حسب أولوياتك",
      pack1_f3: "تعديلات وتواصل مباشر وسريع فواتساب",
      pack1_f4: "ملفات مفتوحة بجودة عالية + Facture رسمية",

      pack2_badge: "الأكثر طلباً للوكالات",
      pack2_title: "Pack Agency Backup",
      pack2_desc: "الباقة المفضلة للوكالات لتفريج ضغط الـ Deadlines وتسيير مشاريع العملاء المستعجلة بنظام White-Label فوري.",
      pack2_old_price: "430 درهم",
      pack2_new_price: "300 درهم",
      pack2_f1: "خدمة بنظام الماركة البيضاء (White-Label)",
      pack2_f2: "احترام صارم لشارتر ودليل بصرية العميل",
      pack2_f3: "تسليم ملفات العمل المفتوحة (PSD, AI, PR, AE)",
      pack2_f4: "تواصل دائم وجاهزية للرد فالحين",

      pack3_badge: "إطلاق منتوج جديد",
      pack3_title: "Pack Startup Launch",
      pack3_desc: "يومان ديال الخدمة المركزة (14 ساعة إنتاج) لإطلاق منتوج أو براند جديدة بكل ما كتحتاجه من تصاميم، باكاجينغ وإعلانات.",
      pack3_old_price: "860 درهم",
      pack3_new_price: "600 درهم",
      pack3_f1: "يومين ديال الخدمة المركزة (14 ساعة إنتاج)",
      pack3_f2: "لوغو الإطلاق، تيبوغرافي، وبانيرات إعلانية",
      pack3_f3: "تصميم باكاجينغ وموكاب ثلاثي الأبعاد واقعي",
      pack3_f4: "2 فيديوهات ريلز بتوليد الفيديوهات بالذكاء الاصطناعي والمونتاج ببرامج المونتاج",

      pack4_badge: "محتوى شهر كامل",
      pack4_title: "Pack Content 30 Jours",
      pack4_desc: "يومان كاملان لتجهيز جدول محتوى شهر كامل لمنصات إنستغرام، تيك توك وفيسبوك جاهز للنشر مباشرة.",
      pack4_old_price: "860 درهم",
      pack4_new_price: "600 درهم",
      pack4_f1: "يومين ديال إنتاج المحتوى السوشيال ميديا",
      pack4_f2: "15 بوست وكاروسيل احترافي (1080×1350)",
      pack4_f3: "4 ريلز بتوليد الفيديوهات بالذكاء الاصطناعي والمونتاج ببرامج المونتاج",
      pack4_f4: "تنظيم وترتيب الملفات لتسهيل النشر اليومي"
    },

    // Interactive Sprint Calculator (Strictly 2 services: Design 300 DH vs 430 DH, Video 350 DH vs 500 DH)
    calc: {
      title: "الآلة الحاسبة التفاعلية لتقدير تكلفة الأيام",
      subtitle: "احسب بالضبط تكلفة السبرينت ديالك على حسب الخدمة وعدد الأيام مع تطبيق تخفيض 30% فالحين.",
      step1: "1. اختار الخدمة اللي محتاجها فالمشروع ديالك :",
      opt_design: "غرافيك ديزاين (300 درهم / نهار)",
      opt_design_note: "300 درهم للنهار بلاصة 430 درهم (-30%)",
      opt_video: "فيديو إيديتينغ وريلز (350 درهم / نهار)",
      opt_video_note: "350 درهم للنهار بلاصة 500 درهم (-30%)",
      
      step2: "2. حدد عدد الأيام اللي باغي تحجز فيها (من 1 إلى 5 أيام) :",
      btn_1day: "1 نهار",
      btn_2days: "2 أيام",
      btn_3days: "3 أيام",
      btn_4days: "4 أيام",
      btn_5days: "5 أيام",
      
      summary_heading: "تفاصيل السعر التقديري للسبرينت ديالك :",
      original_price_label: "السعر الأصلي العادي (قبل التخفيض) :",
      discounted_price_label: "سعر العرض الخاص الحالي (-30%) :",
      savings_label: "المبلغ اللي وفرتيه فهاد العرض :",
      taxes_note: "* السعر النهائي يتضمن Devis مسبق وفاتورة رسمية (Facture) قانونية قابلة للخصم الضريبي.",
      cta_whatsapp_calc: "حجز بهاد السعر فواتساب مباشرة"
    },

    // Portfolio & Projects
    portfolio: {
      title: "الأعمال ودراسات الحالة (Case Studies)",
      subtitle: "أعمال حقيقية تم إنجازها لشركات وماركات مغربية حققت نتائج ملموسة وأرقام تفاعل عالية.",
      category_all: "جميع الأعمال",
      category_video: "فيديوهات وريلز (9:16)",
      category_social: "بوستات سوشيال ميديا (1080×1350)",
      category_brand: "هوية بصرية وشارتر (Branding)",

      // Project 1: Video
      p1_badge: "توليد بالذكاء الاصطناعي ومونتاج احترافي",
      p1_title: "إعلان سينمائي وريلز لمنتوجات Baklawa.ma",
      p1_client: "Baklawa.ma • متجر حلويات مغربية راقية",
      p1_desc: "توليد الفيديوهات بالذكاء الاصطناعي والمونتاج ببرامج المونتاج بمقاس 9:16 لمنصات TikTok و Instagram Reels: تقطيع ديناميكي على إيقاع الموسيقى، تصحيح الألوان السينمائي (Color Grading)، ومؤثرات صوتية محترفة.",
      p1_btn: "مشاهدة الفيديو وكواليس المونتاج ▶",

      // Project 2: Social
      p2_badge: "كاروسيل إنستغرام (1080×1350)",
      p2_title: "إطلاق حملة سوشيال ميديا وبوستات إعلانية — Nihao Brand",
      p2_client: "Nihao Brand • ماركة عناية وتجميل",
      p2_desc: "تصميم 18 بوست وكاروسيل بمقاس 1080x1350 الموصى به: تفريغ احترافي للمنتوجات بفوتوشوب، ضبط الإضاءة والظلال، وصناعة بصرية رفعت من التفاعل بنسبة تفوق 40%.",
      p2_btn: "تصفح البوستات (كاروسيل) ▶",

      // Project 3: Branding
      p3_badge: "هوية بصرية ودليل معايير كامل",
      p3_title: "دليل الهوية البصرية الرسمية — شركة Logistocean",
      p3_client: "Logistocean • لوجستيك ونقل البضائع",
      p3_desc: "تصميم متكامل لهوية الماركة من 10 صفحات: شبكة بناء الشعار الهندسية، لوحة الألوان الرسمية، اختيار الخطوط، تصاميم القرطاسية، التغليف، وتطبيقات أسطول الشاحنات.",
      p3_btn: "الاطلاع على كتاب الهوية (10 سلايدات) ▶"
    },

    // Blog
    blog: {
      header_tag: "💡 مقالات وأدلة استراتيجية عملية",
      header_title: "20 مقال ودليل عملي للشركات",
      header_desc: "كل ما كتحتاج تعرفو على الجرافيك ديزاين، مونتاج الفيديو، الهوية البصرية فالمغرب، الأسعار والذكاء الاصطناعي باش تطور مشروعك.",
    audit_box_tag: "🎯 تدقيق مجاني للمشاريع",
    audit_box_title: "واش هويتك وإعلاناتك الحالية كتضيع عليك مبيعات؟",
    audit_box_desc: "اكتشف المشاكل الحقيقية فالتصاميم والفيديوهات ديالك فـ 12 سؤالاً فقط، وخذ تقرير تدقيق وشهادة لشركتك.",
    audit_box_btn: "📊 تشخيص علامتك التجارية مجاناً",
      title: "مقالات ونصائح لأصحاب الشركات والوكالات",
      subtitle: "نصائح وتجارب عملية فالتصميم، إعلانات السوشيال ميديا، والمونتاج لزيادة أرباح مشروعك فالمغرب.",
      
      art1_category: "استراتيجية وتسيير الشركات",
      art1_read_time: "4 دقائق قراءة",
      art1_date: "07 نونبر 2026",
      art1_title: "علاش خدمة «ديزاينر بالنهار» أحسن للـ Startups والشركات الصغرى فالمغرب من التوظيف التقليدي؟",
      art1_excerpt: "مقارنة مالية وعملية: كيفاش تقدر شركة صغرى توفر أكثر من 60% من مصاريف التصميم وتحصل على نتائج فورية فـ 48 ساعة فقط.",
      
      art2_category: "إيكوميرس وفيديوهات إعلانية",
      art2_read_time: "5 دقائق قراءة",
      art2_date: "01 نونبر 2026",
      art2_title: "5 أسرار فمونتاج الريلز والتيك توك كتضاعف مبيعات المتاجر الإلكترونية فالمغرب",
      art2_excerpt: "كيفاش دير توليد الفيديوهات بالذكاء الاصطناعي والمونتاج ببرامج المونتاج باش توقف الزائر فالـ 3 ثواني الأولى ويقنعو يضغط على الشراء مباشرة."
    },

    // About Me
    about: {
      badge: "المسار المهني والرؤية الإبداعية",
      title: "هشام الدغمومي",
      subtitle: "مصمم جرافيك ومونتير فيديو محترف مقيم بأكادير، كنخدم مع الشركات والمقاولات والوكالات فجميع مدن المغرب.",
      intro: "شغوف بالجمع بين التصميم الإبداعي الجذاب والنتائج التسويقية الملموسة، مع توليد الفيديوهات بالذكاء الاصطناعي والمونتاج ببرامج المونتاج. مع أكثر من 3 سنوات من الخبرة فالمجال، ساعدت مقاولات ناشئة، براندات تجارة إلكترونية، ووكالات تواصل باش يبنيو هويات بصرية قوية.",
      current_role_title: "المنصب الحالي : Lead Designer لدى منصة SehaLink",
      current_role_desc: "كنشغل حالياً منصب مصمم جرافيك رئيسي لدى SehaLink، المنصة المغربية الرائدة فالتكنولوجيا الصحية. فهاد المنصب كنسيّر الهوية البصرية الرقمية، تصاميم واجهات التطبيقات، وتصاميم الحملات الترويجية والطبية.",
      experience_title: "تجارب سابقة فالوكالات وأعمال سرية بنظام (NDA)",
      experience_desc: "خلال مساري المهني، اشتغلت بنظام الماركة البيضاء (White-Label) مع وكالات تسويق معروفة بحال Ocean Connecting و Opti-Sent، بالإضافة لعشرات الشركات والمتاجر المغربية. وبسبب اتفاقيات الحفاظ على السرية (NDA)، كاينين بزاف د المشاريع الكبيرة اللي ما نقدرش نذكر أسماء أصحابها علناً، ولكنها كتبين التزامي الكامل بالدقة وأعلى معايير الجودة.",
      
      timeline_heading: "محطات ومراحل المسار المهني :",
      t1_year: "2022 - 2023",
      t1_title: "فريلانس مع الوكالات وموشن جرافيك",
      t1_desc: "إنجاز حملات هوية بصرية، موكابات، وتصاميم موشن جرافيك لشركات اللوجستيك والتكنولوجيا والمطاعم.",
      
      t2_year: "2024 - 2025",
      t2_title: "صناعة تصاميم الإيكوميرس والالتحاق بـ SehaLink",
      t2_desc: "إدارة الهويات البصرية لبراندات إيكوميرس صاعدة وتولي قيادة التصميم الجرافيكي فمنصة SehaLink الصحية.",
      
      t3_year: "2026",
      t3_title: "إطلاق نموذج «ديزاينر بالنهار» (Designer Per Day)",
      t3_desc: "إطلاق خدمة الأيام المركزة مع Devis و Facture قانونية، واللي لاقات إقبال كبير من الشركات الناشئة والوكالات فالمغرب.",

      values_heading: "مبادئ وقيم الخدمة ديالي :",
      v1_title: "السرعة فالتنفيذ واحترام المواعيد",
      v1_desc: "الـ Deadline كنز ما كنفرطش فيه. التسليم كيكون فالموعد المضبوط بلا أعذار ولا تعطال.",
      v2_title: "الملفات المفتوحة ملكية ديالك 100%",
      v2_desc: "كتستلم الملفات الأصلية كاملة بـ PSD, AI, Premiere, After Effects باش تبقى محتافظ بأصول مشروعك.",
      v3_title: "الشفافية والفوترة القانونية",
      v3_desc: "كنخدم بطرق رسمية وقانونية مع تسليم Devis مسبق وفاتورة رسمية (Facture) لضبط حسابات المحاسبة لشركتك."
    },

    // Contact
    contact: {
      badge: "نهضرو فالمشروع ديالك",
      title: "تواصل معايا وحجز نهار العمل ديالك",
      subtitle: "عندك مشروع مستعجل، إطلاق منتوج، أو محتاج يد مساعدة فالوكالة؟ تواصل معايا مباشرة فواتساب أو عمر الاستمارة أسفله وغادي نجاوبك فالحين.",
      
      info_heading: "معلومات الاتصال المباشرة",
      phone_label: "الهاتف وواتساب :",
      email_label: "البريد الإلكتروني :",
      address_label: "العنوان :",
      address_val: "أكادير والمغرب كامل (خدمات أونلاين)",
      hours_label: "ساعات العمل والتواصل :",
      hours_val: "من الاثنين إلى السبت : 09:00 صباحاً - 07:00 مساءً",

      wa_direct_btn: "تواصل فـ واتساب مباشرة",
      form_heading: "صيفط ميساج مباشر",
      form_name_placeholder: "مثال: كريم بنجلون / ستارت آب المغرب",
      form_email_placeholder: "karim@exemple.ma",
      form_phone_placeholder: "06 00 00 00 00",
      form_message_placeholder: "شرح باختصار الاحتياجات الإبداعية والوقت اللي باغي تسالي فيه...", 

      payment_heading: "الفوترة والأداء القانوني فالمغرب :",
      payment_desc: "جميع الخدمات كيدوز عليها Devis رسمي مسبق، مع تسليم فاتورة تجارية قانونية (Facture) لضبط حسابات المحاسبة لشركتك. وسائل الأداء المعتمدة عبر التحويل البنكي الرسمي :",
      bank_cih_name: "CIH BANK",
      bank_cih_desc: "حساب بنكي مهني معتمد للتحويل السريع والمباشر",
      bank_attijari_name: "التجاري وفا بنك (Attijariwafa)",
      bank_attijari_desc: "تحويل بنكي آمن ومباشر مع توصيل فوري",

      form_name: "الاسم ديالك / اسم الشركة ديالك",
      form_email: "البريد الإلكتروني ديالك",
      form_phone: "رقم الهاتف ديالك (واتساب)",
      form_service: "نوع الخدمة اللي محتاجها",
      form_service_select: "-- اختار الخدمة من هنا --",
      form_service_design: "غرافيك ديزاين (هوية بصرية، بوستات، باكاجينغ)",
      form_service_video: "توليد الفيديوهات بالذكاء الاصطناعي والمونتاج ببرامج المونتاج",
      form_message: "شرح باختصار المشروع ديالك والتاريخ اللي باغي تبدا فيه...",
      form_submit: "إرسال الرسالة وحجز الموعد"
    },

    // FAQ Accordion (100% Translated in Moroccan Darija)
    faq: {
      heading: "الأسئلة الشائعة",
      title: "أسئلة كيتعاودو بزاف",
      q1: "كيفاش نقدر نحجز نهار الخدمة ديالي مع هشام ؟",
      a1: "الطريقة ساهلة بزاف : صيفط ليا ميساج فواتساب فـ 0653342503 أو عمر الاستمارة فالموقع. كنهضرو ، كنحددو قائمة المهام اللي عندك، كنعطيك Devis رسمي فيه السعر والوقت، وكنبداو الخدمة.",
      q2: "واش كتسلم الملفات المفتوحة الأصلية (PSD, AI, Premiere) ؟",
      a2: "نعم 100%. جميع الملفات الأصلية المفتوحة بالطبقات ديالها كتسلم ليك كاملة فآخر نهار الخدمة. كتكون نتا هو المالك الوحيد والشرعي لجميع التصاميم والفيديوهات.",
      q3: "واش كتعطي Facture رسمية معترف بيها قانونياً فالمغرب للمحاسبة ؟",
      a3: "أكيد وبشكل رسمي. كل خدمة كتكون مؤطرة بـ Devis مسبق و Facture قانونية مطابقة لمعايير الضرائب والمحاسبة المغربية باش تدفعها للكونطابل وتخصمها من مصاريف شركتك.",
      q4: "كيفاش كتخدمو بتوليد الفيديوهات بالذكاء الاصطناعي والمونتاج ؟",
      a4: "كنستخدمو أقوى أدوات الذكاء الاصطناعي (AI) لتوليد مشاهد واقعية، أصوات احترافية، وعناصر بصرية جذابة، ومن بعد كنديرو المونتاج، تصحيح الألوان (Color Grading) وهندسة الصوت بأحدث برامج المونتاج بحال Premiere Pro و DaVinci Resolve باش تخرج النتيجة سينمائية."
    },

    // Legal & Footer (100% Translated in Moroccan Darija)
    legal: {
      privacy_badge: "مطابقة لقوانين CNDP المغربية",
      privacy_title: "سياسة الخصوصية وحماية المعطيات الشخصية",
      privacy_p1: "مطابقة لمقتضيات القانون المغربي رقم 09-08 المتعلق بحماية الأشخاص الذاتيين تجاه معالجة المعطيات ذات الطابع الشخصي، المعلومات اللي كتقدمها فهاد الموقع (الاسم، البريد، ورقم الواتساب) كتستعمل فقط لمعالجة طلبات Devis وتسيير خدمات التصميم والمونتاج.",
      privacy_p2: "معلوماتك سرية وما يمكنش نهائياً يتم بيعها ولا مشاركتها مع أي طرف ثالث بلا موافقتك الصريحة المسبقة.",
      privacy_p3: "جميع التصاميم والفيديوهات المنجزة لحسابك كتمتع بحماية تامة وسرية مهنية مطلقة، مع إمكانية إبرام اتفاقية سرية (NDA) رسمية.",

      terms_badge: "الإطار القانوني والتعاقدي",
      terms_title: "شروط الاستخدام والخدمة القانونية",
      terms_p1: "هاد الشروط كتنظم جميع الخدمات الإبداعية اللي كيقدمها هشام الدغمومي بنظام خدمة « ديزاينر بالنهار » (Designer Per Day).",
      terms_p2: "1. الـ Devis والحجز : كل نهار عمل كيبدا بعد الاتفاق على لائحة المهام وقبول الـ Devis الرسمي المحدد للسعر والوقت.",
      terms_p3: "2. الملكية الفكرية : بمجرد أداء الفاتورة، كيولي العميل هو المالك الحصري 100% لجميع الحقوق والملفات المفتوحة المسلمة.",
      terms_p4: "3. الفوترة والأداء : الأداء كيتم بتحويل بنكي رسمي (CIH Bank / Attijariwafa bank) مع تسليم فاتورة تجارية قانونية قابلة للخصم المحاسباتي.",

      back_home: "← الرجوع للصفحة الرئيسية",
      footer_rights: "جميع الحقوق محفوظة. Devis و Facture قانونية فالمغرب."
    }
  }
};

if (typeof window !== 'undefined') {
  window.translations = translations;
}
