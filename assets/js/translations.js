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
      art2_excerpt: "Le guide pas-à-pas pour générer des vidéos par Intelligence Artificielle et les monter par logiciels professionnels pour captiver dans les 3 premières secondes.",

      search_placeholder: "Rechercher un article...",
      filter_all: "Tous (20)",
      filter_branding: "Branding",
      filter_video: "Montage Vidéo",
      filter_pricing: "Packs & Tarifs",
      filter_ecommerce: "E-commerce",

    },

    // About Me
    about: {
      badge: "Parcours Professionnel & Vision Créative",
      title: "Hicham Eddarhmoumi (Hicham Edd)",
      subtitle: "Designer Graphique & Monteur Vidéo basé à Agadir, au service des entreprises et agences ambitieuses partout au Maroc.",
      intro: "Passionné par l'intersection entre le design visuel percutant et la rentabilité commerciale, j'accompagne depuis plus de 3 ans des startups, des e-commerçants et des agences de communication dans la création d'images de marque mémorables et de vidéos générées par IA et montées par logiciels professionnels.",
      current_role_title: "Focus Actuel : Partenaire Créatif pour Lancement de Marques & Startups",
      current_role_desc: "J'occupe actuellement le poste de Designer Graphique principal chez SehaLink, plateforme marocaine innovante spécialisée dans les technologies de santé. J'y conçois l'ensemble des interfaces produit, des chartes de communication médicale et des campagnes publicitaires multicanales.",
      experience_title: "Expériences Clés, Collaboration Flexible & Projets Sous NDA",
      experience_desc: "Au fil de mon parcours, j'ai collaboré sur des projets d'envergure auprès d'acteurs reconnus tels que la plateforme santé SehaLink et l'agence Ocean Connecting, tout en accompagnant diverses entreprises en tant que partenaire créatif indépendant (en toute agilité, hors des contraintes des contrats de salariat traditionnels). Soumis à de stricts accords de confidentialité (NDA) et intervenant régulièrement en marque blanche (White-Label), ces projets reflètent une rigueur absolue et une capacité d'adaptation rapide.",
      
timeline_heading: "Chronologie & Jalons Clés :",
      
      t1_year: "2023 - 2025",
      t1_title: "Graphisme Print & Production Vidéo Intégrale chez Ocean Connecting",
      t1_desc: "Conception de l'ensemble des supports imprimés et marketing, prise en charge de la production vidéo (cadrage, tournage sur site et montage) et pilotage des réseaux sociaux.",
      
      t2_year: "2025 - 2027",
      t2_title: "Refonte UI/UX & Direction Créative chez SehaLink & Digital And Creativity",
      t2_desc: "Rebranding complet de l'écosystème web et mobile from scratch, production de vidéos publicitaires et animations motion design, et élaboration des pitch decks d'entreprise.",
      
      t3_year: "2026",
      t3_title: "Lancement du Modèle « Designer Per Day »",
      t3_desc: "Suite à une analyse approfondie des besoins réels du marché marocain et pour offrir une alternative agile au salariat rigide, j'ai décidé de lancer cette offre de sprints créatifs dédiés par jour avec facture légale.",


      values_heading: "Mes Principes de Travail :",
      v1_title: "Vitesse d'Exécution & Respect des Délais",
      v1_desc: "Une deadline est un engagement sacré. Je livre vos projets clés en main dans le temps imparti sans excuses.",
      v2_title: "Fichiers Ouverts & Propriété 100%",
      v2_desc: "Vous êtes propriétaire exclusif de toutes les créations, incluant les fichiers sources éditables (PSD, AI, PR, AE, Figma).",
      v3_title: "Facturation Transparente & Régularité",
      v3_desc: "Émission systématique d'un devis préalable et d'une facture commerciale officielle pour la comptabilité de votre entreprise.",
      
      experience_badge: "🔒 Clause de Confidentialité (NDA) & Marque Blanche",
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
    },
    
    tarifs: {
      page_badge: "Tarifs & Collaboration • Hicham Edd",
      page_title: "Choisissez la formule adaptée à votre projet",
      page_subtitle: "Trois formules claires et flexibles sans engagement — cliquez sur une offre pour afficher les détails et tarifs.",
      tab1: "À la journée (Mensuel)",
      tab2: "À l'heure (Hourly)",
      tab3: "Sur mesure (Custom)",
      o1_tag: "Offre 1 • Travail à la journée (Monthly Retainer Days)",
      o1_title: "Forfaits Jours Mensuels Dédiés",
      o1_desc: "Réservez des journées de travail mensuelles dédiées à vos projets avec une concentration totale et des tarifs préférentiels.",
      o1_btn: "Réserver vos journées →",
      o1_std_label: "Standard d'une journée de travail :",
      o1_std_val: "1 journée = <strong class=\"text-white\">6,5 heures nettes</strong> de production focalisée (8h au total avec 1h30 de pause).",
      o1_discount_badge: "-30%",
      per_day: "/ jour",
      o1_c1_title: "🎨 Pack Design Graphique",
      o1_c1_price: "300 DH",
      o1_c1_old: "430 DH",
      o1_c1_save: "Économisez 130 DH/jour • Taux horaire net réel : ~46 DH/h",
      o1_c1_desc: "Identités visuelles, posts réseaux sociaux, supports print, visuels publicitaires et bannières Ads.",
      o1_c2_title: "🎬 Pack Montage & Création Vidéo",
      o1_c2_price: "350 DH",
      o1_c2_old: "500 DH",
      o1_c2_save: "Économisez 150 DH/jour • Taux horaire net réel : ~53,8 DH/h",
      o1_c2_desc: "Reels & TikTok, vidéos publicitaires, podcasts, motion design léger et montage vidéo.",
      o1_tbl_title: "Simulation des forfaits mensuels courants",
      o1_tbl_sub: "Jours travaillés par mois",
      o1_th1: "Jours / mois",
      o1_th2: "Heures nettes",
      o1_th3: "Design (300 DH/j)",
      o1_th4: "Vidéo (350 DH/j)",
      o1_th5: "Pack Mixte",
      o1_th6: "Usage recommandé",
      o1_r1_d: "2 Jours",
      o1_r1_h: "13,0 h",
      o1_r1_c1: "600 DH",
      o1_r1_c2: "700 DH",
      o1_r1_c3: "650 DH",
      o1_r1_n: "2 jours/mois : support régulier et tâches essentielles",
      o1_r2_d: "4 Jours",
      o1_r2_h: "26,0 h",
      o1_r2_c1: "1 200 DH",
      o1_r2_c2: "1 400 DH",
      o1_r2_c3: "1 300 DH",
      o1_r2_n: "4 jours (1 j/semaine) : continuité régulière",
      o1_r3_d: "5 Jours",
      o1_r3_h: "32,5 h",
      o1_r3_c1: "1 500 DH",
      o1_r3_c2: "1 750 DH",
      o1_r3_c3: "1 625 DH",
      o1_r3_n: "5 jours/mois : rythme de production soutenu",
      o1_r4_d: "8 Jours",
      o1_r4_h: "52,0 h",
      o1_r4_c1: "2 400 DH",
      o1_r4_c2: "2 800 DH",
      o1_r4_c3: "2 600 DH",
      o1_r4_n: "8 jours (2 j/semaine) : accompagnement intensif quasi dédié",
      o2_tag: "Offre 2 • Facturation à l'heure (Hourly Rate)",
      o2_title: "Facturation à l'Heure",
      o2_desc: "Une solution flexible pour les projets évolutifs : vous ne payez que les heures réellement travaillées, sans engagement.",
      o2_btn: "Démarrer à l'heure →",
      per_hour: "/ heure",
      o2_t1_label: "Tranche 1",
      o2_t1_range: "De 1 à 25 heures",
      o2_t1_price: "80 DH",
      o2_t1_desc: "Couvre les 25 premières heures mensuelles. Idéal pour les tâches rapides, le support continu et les retouches régulières.",
      o2_t2_label: "Tranche 2",
      o2_t2_badge: "Tarif dégressif",
      o2_t2_price: "65 DH",
      o2_t2_unit: "/ heure (dès la 26e heure)",
      o2_t2_desc: "Tarif préférentiel appliqué automatiquement dès la 26e heure : vous économisez immédiatement lorsque votre volume augmente.",
      o2_tbl_title: "Simulation du coût mensuel",
      o2_tbl_sub: "Exemples de calcul transparents",
      o2_th1: "Volume d'heures",
      o2_th2: "Tranche 1 (80 DH)",
      o2_th3: "Tranche 2 (65 DH)",
      o2_th4: "Total estimé",
      o2_th5: "Taux moyen réel",
      o2_th6: "Remarques & économies",
      o2_r1_h: "10 heures",
      o2_r1_tot: "800 DH",
      o2_r1_avg: "80,0 DH/h",
      o2_r1_n: "Tâches légères et retouches ponctuelles",
      o2_r2_h: "20 heures",
      o2_r2_tot: "1 600 DH",
      o2_r2_avg: "80,0 DH/h",
      o2_r2_n: "Accompagnement hebdomadaire (~5h/semaine)",
      o2_r3_h: "25 heures",
      o2_r3_tot: "2 000 DH",
      o2_r3_avg: "80,0 DH/h",
      o2_r3_n: "Plafond de la tranche 1 (80 DH/h)",
      o2_r4_h: "30 heures",
      o2_r4_tot: "2 325 DH",
      o2_r4_avg: "77,5 DH/h",
      o2_r4_n: "Économie : 5h facturées à 65 DH seulement",
      o2_r5_h: "35 heures",
      o2_r5_tot: "2 650 DH",
      o2_r5_avg: "75,7 DH/h",
      o2_r5_n: "Économie : 10h facturées à 65 DH seulement",
      o2_f1_t: "⚡ Flexibilité totale",
      o2_f1_d: "Contrôle à 100% de votre budget et du volume horaire chaque mois, sans minimum imposé.",
      o2_f2_t: "📊 Suivi transparent",
      o2_f2_d: "Rapport détaillé documentant chaque tâche et le temps exact passé à la minute près.",
      o2_f3_t: "🎯 Paiement au réel",
      o2_f3_d: "Vous ne réglez que le temps de production effectif ; zéro gaspillage.",
      o3_tag: "Offre 3 • Solutions Sur Mesure (Custom Solutions)",
      o3_title: "Solutions Créatives Sur Mesure",
      o3_desc: "Des formules conçues selon vos besoins et votre budget — construisons ensemble un format 100% adapté à vos objectifs.",
      o3_btn: "Demander une offre sur mesure →",
      o3_m1_t: "📦 01. Projets Clés en Main (Project-Based)",
      o3_m1_b: "Forfait fixe",
      o3_m1_d: "Accord préalable sur tous les livrables (identité complète, vidéo principale ou campagne) avec délai garanti et révisions incluses.",
      o3_m2_t: "🔄 02. Accompagnement Mensuel (Monthly Retainer)",
      o3_m2_b: "Priorité continue",
      o3_m2_d: "Livrables mensuels définis : mix équilibré entre posts réseaux sociaux, Reels et design continu avec point hebdomadaire.",
      o3_m3_t: "🚀 03. Sprints Lancement & Événements",
      o3_m3_b: "Production intensive",
      o3_m3_d: "Production rapide et intensive pour accompagner un lancement de produit, un événement majeur ou une campagne saisonnière.",
      o3_m4_t: "💡 04. Conseil & Direction Artistique",
      o3_m4_b: "Supervision créative",
      o3_m4_d: "Audit visuel, cohérence de marque et accompagnement de votre équipe via des sessions régulières.",
      o3_proc_title: "Comment démarrer ? — Notre méthode",
      o3_s1_k: "01 • Premier échange gratuit",
      o3_s1_t: "Prise de besoin",
      o3_s1_d: "Discussion directe sur WhatsApp ou appel rapide pour cadrer le projet, les objectifs et les livrables.",
      o3_s2_k: "02 • Offre claire et détaillée",
      o3_s2_t: "Proposition & planning",
      o3_s2_d: "Envoi d'un devis détaillé précisant le périmètre, le budget adapté et le calendrier sans surprise.",
      o3_s3_k: "03 • Livraison dans les délais",
      o3_s3_t: "Production & suivi",
      o3_s3_d: "Partage continu des maquettes et ajustements jusqu'à validation finale.",
      cta_heading: "Prêt à démarrer ? Contactez-moi directement sur WhatsApp",
      cta_wa_btn: "Contacter sur WhatsApp"
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
      art2_excerpt: "كيفاش دير توليد الفيديوهات بالذكاء الاصطناعي والمونتاج ببرامج المونتاج باش توقف الزائر فالـ 3 ثواني الأولى ويقنعو يضغط على الشراء مباشرة.",
      
      search_placeholder: "قلب على شي مقال...",
      filter_all: "الكل (20)",
      filter_branding: "الهوية البصرية",
      filter_video: "مونتاج الفيديو",
      filter_pricing: "الباقات والأسعار",
      filter_ecommerce: "التجارة الإلكترونية"
    },

    // About Me
    about: {    },

    // About Me
    about: {
      badge: "المسار المهني والرؤية الإبداعية",
      title: "هشام الدغمومي",
      subtitle: "مصمم جرافيك ومونتير فيديو محترف مقيم بأكادير، كنخدم مع الشركات والمقاولات والوكالات فجميع مدن المغرب.",
      intro: "شغوف بالجمع بين التصميم الإبداعي الجذاب والنتائج التسويقية الملموسة، مع توليد الفيديوهات بالذكاء الاصطناعي والمونتاج ببرامج المونتاج. مع أكثر من 3 سنوات من الخبرة فالمجال، ساعدت مقاولات ناشئة، براندات تجارة إلكترونية، ووكالات تواصل باش يبنيو هويات بصرية قوية.",
      current_role_title: " التركيز الحالي : شريك إبداعي لإطلاق ومواكبة المشاريع الناشئة",
      current_role_desc: "كنشغل حالياً منصب مصمم جرافيك رئيسي كنركّز حالياً على مرافقة أصحاب المشاريع والشركات الناشئة (Startups) ورواد الأعمال فالمغرب، من خلال بناء الهويات البصرية المتكاملة، وتجهيز المواد الإعلانية، ومونتاج الفيديوهات التسويقية لضمان إطلاق منتجاتهم وحملاتهم بأعلى جودة وسرعة.",
      experience_title: " تجارب مع منصات رائدة، وكالات، وتعاون حر (NDA)",
      experience_desc: " خلال مساري المهني، اشتغلت على مشاريع إبداعية مع علامات بارزة بحال منصة SehaLink الصحية ووكالة التسويق Ocean Connecting، إلى جانب تعاوني المستمر مع مقاولات وشركات أخرى بنظام العمل الحر والمرن على حسب الطلب (خارج قيود عقود التوظيف التقليدية). وبحكم التزامي باتفاقيات الحفاظ على السرية (NDA) والعمل بنظام الماركة البيضاء (White-Label)، العديد من هاد المشاريع الكبرى كتدوز في سرية تامة وكتبين دقة وجودة التنفيذ.",
      
      timeline_heading: "أبرز محطات وإنجازات المسار المهني :",
      
      t1_year: "2023 - 2025",
      t1_title: "تصميم المطبوعات والإنتاج المرئي الشامل مع Ocean Connecting",
      t1_desc: "تولي تصميم الهوية والمطبوعات الإشهارية (Brochures & Collateral)، مع قيادة الإنتاج المرئي من التصوير الميداني بالكاميرا إلى المونتاج الاحترافي وإدارة قنوات السوشيال ميديا.",
      
      t2_year: "2025 - 2027",
      t2_title: "إعادة بناء الهوية والـ UI/UX مع SehaLink & Digital And Creativity",
      t2_desc: "قيادة الـ Rebranding الكامل للواجهات وتطبيقات الهاتف من الصفر، وتصميم الفيديوهات والموشن جرافيك الإعلاني، وإعداد عروض الـ Pitch Decks للشركاء والمستثمرين.",
      
      t3_year: "2026",
      t3_title: "إطلاق نموذج «ديزاينر بالنهار» (Designer Per Day)",
      t3_desc: "بناءً على دراسة متطلبات السوق والحاجة الميدانية لحلول إبداعية فورية بدون تعقيدات التوظيف، قررت إطلاق خدمة السبرينت اليومي الشامل لمواكبة الشركات والوكالات بفاتورة قانونية.",


    
      values_heading: "مبادئ وقيم الخدمة ديالي :",
      v1_title: "السرعة فالتنفيذ واحترام المواعيد",
      v1_desc: "الـ Deadline كنز ما كنفرطش فيه. التسليم كيكون فالموعد المضبوط بلا أعذار ولا تعطال.",
      v2_title: "الملفات المفتوحة ملكية ديالك 100%",
      v2_desc: "كتستلم الملفات الأصلية كاملة بـ PSD, AI, Premiere, After Effects باش تبقى محتافظ بأصول مشروعك.",
      v3_title: "الشفافية والفوترة القانونية",
      v3_desc: "كنخدم بطرق رسمية وقانونية مع تسليم Devis مسبق وفاتورة رسمية (Facture) لضبط حسابات المحاسبة لشركتك.",
      experience_badge: "🔒 التزام بالسرية التامة (NDA) والماركة البيضاء",
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
    },


    tarifs: {
      page_badge: "عروض الأثمنة • Hicham Edd",
      page_title: "اختر صيغة العمل المناسبة لمشروعك",
      page_subtitle: "ثلاث صيغ واضحة ومرنة بدون تعقيدات — اضغط على أي عرض لعرض التفاصيل والأثمنة.",
      tab1: "العمل باليوم (الشهرية)",
      tab2: "نظام الساعات",
      tab3: "عروض مخصصة",
      o1_tag: "العرض الأول • العمل باليوم (Monthly Retainer Days)",
      o1_title: "باقات الأيام الشهرية المخصصة",
      o1_desc: "حجز أيام عمل شهرية مخصصة لمشاريعكم مع تركيز كامل وجودة عالية بأسعار تفضيلية.",
      o1_btn: "احجز أيامك الشهرية ←",
      o1_std_label: "معيار يوم العمل المعتمد (Workday Standard):",
      o1_std_val: "1 يوم عمل = <strong class=\"text-white\">6.5 ساعات صافية</strong> من التركيز والإنتاج الفعلي (8 ساعات إجمالية مع 1.5 ساعة استراحة).",
      o1_discount_badge: "خصم 30%",
      per_day: "/ يوم",
      o1_c1_title: "🎨 باقة التصميم الجرافيكي",
      o1_c1_price: "300 درهم",
      o1_c1_old: "430 درهم",
      o1_c1_save: "وفر 130 د.م لكل يوم عمل • معدل الساعة الصافية الفعلي: ~46 درهم/ساعة",
      o1_c1_desc: "الهويات البصرية، منشورات السوشيال ميديا، المطبوعات، تصاميم الإعلانات والبنرات.",
      o1_c2_title: "🎬 باقة المونتاج وصناعة الفيديو",
      o1_c2_price: "350 درهم",
      o1_c2_old: "500 درهم",
      o1_c2_save: "وفر 150 د.م لكل يوم عمل • معدل الساعة الصافية الفعلي: ~53.8 درهم/ساعة",
      o1_c2_desc: "ريلز وتيك توك، فيديوهات إعلانية، بودكاست، موشن جرافيك خفيف وتعديلات الفيديو.",
      o1_tbl_title: "جدول محاكاة الباقات الشهرية المعتادة",
      o1_tbl_sub: "أيام العمل في الشهر",
      o1_th1: "أيام الشهر",
      o1_th2: "الساعات الصافية",
      o1_th3: "التصميم (300 د.م/ي)",
      o1_th4: "المونتاج (350 د.م/ي)",
      o1_th5: "باقة مختلطة",
      o1_th6: "الملاءمة ونطاق الاستخدام",
      o1_r1_d: "2 أيام",
      o1_r1_h: "13.0 س",
      o1_r1_c1: "600 درهم",
      o1_r1_c2: "700 درهم",
      o1_r1_c3: "650 درهم",
      o1_r1_n: "يومان شهرياً: دعم دوري ومواكبة المهام الأساسية",
      o1_r2_d: "4 أيام",
      o1_r2_h: "26.0 س",
      o1_r2_c1: "1,200 درهم",
      o1_r2_c2: "1,400 درهم",
      o1_r2_c3: "1,300 درهم",
      o1_r2_n: "4 أيام (يوم أسبوعياً): استمرارية منتظمة ومتواصلة",
      o1_r3_d: "5 أيام",
      o1_r3_h: "32.5 س",
      o1_r3_c1: "1,500 درهم",
      o1_r3_c2: "1,750 درهم",
      o1_r3_c3: "1,625 درهم",
      o1_r3_n: "5 أيام شهرياً: وتيرة إنتاج سريعة ومتقدمة",
      o1_r4_d: "8 أيام",
      o1_r4_h: "52.0 س",
      o1_r4_c1: "2,400 درهم",
      o1_r4_c2: "2,800 درهم",
      o1_r4_c3: "2,600 درهم",
      o1_r4_n: "8 أيام (يومان أسبوعياً): مرافقة مكثفة وشبه متفرغة",
      o2_tag: "العرض الثاني • Hourly Rate",
      o2_title: "نظام الفوترة بالساعة",
      o2_desc: "حل عملي للمشاريع المتطورة والمواكبة المستمرة — كتخلص فقط على الساعات الفعلية لي تخدمات بدون أي التزام مقيد.",
      o2_btn: "ابدأ بنظام الساعات ←",
      per_hour: "/ ساعة",
      o2_t1_label: "الشطر الأول",
      o2_t1_range: "من 1 إلى 25 ساعة",
      o2_t1_price: "80 درهم",
      o2_t1_desc: "تغطية كافة ساعات العمل الشهرية الأولى من 1 إلى 25 ساعة. مثالي للمهام السريعة، الدعم التقني، والتعديلات الدورية المستمرة.",
      o2_t2_label: "الشطر الثاني",
      o2_t2_badge: "تخفيض تشجيعي",
      o2_t2_price: "65 درهم",
      o2_t2_unit: "/ ساعة (ابتداءً من الساعة 26)",
      o2_t2_desc: "سعر تفضيلي مخفض يطبق حصرياً على الساعات الإضافية (ساعة 26+). كتستافد من تخفيض فوري مع زيادة حجم الأعمال دون الحاجة لإعادة التفاوض.",
      o2_tbl_title: "جدول محاكاة التكلفة الشهرية",
      o2_tbl_sub: "نماذج حسابية واضحة",
      o2_th1: "حجم الساعات",
      o2_th2: "الشطر 1 (80 د.م)",
      o2_th3: "الشطر 2 (65 د.م)",
      o2_th4: "المجموع التقديري",
      o2_th5: "معدل الساعة الفعلي",
      o2_th6: "ملاحظات وتوفير",
      o2_r1_h: "10 ساعات",
      o2_r1_tot: "800 درهم",
      o2_r1_avg: "80.0 د.م/س",
      o2_r1_n: "مهام دورية خفيفة وتعديلات متفرقة",
      o2_r2_h: "20 ساعة",
      o2_r2_tot: "1,600 درهم",
      o2_r2_avg: "80.0 د.م/س",
      o2_r2_n: "مرافقة أسبوعية بمعدل 5 ساعات أسبوعياً",
      o2_r3_h: "25 ساعة",
      o2_r3_tot: "2,000 درهم",
      o2_r3_avg: "80.0 د.م/س",
      o2_r3_n: "الحد الأقصى للشطر الأول (سقف 80 د.م)",
      o2_r4_h: "30 ساعة",
      o2_r4_tot: "2,325 درهم",
      o2_r4_avg: "77.5 د.م/س",
      o2_r4_n: "توفير: احتساب 5 ساعات بسعر 65 د.م فقط",
      o2_r5_h: "35 ساعة",
      o2_r5_tot: "2,650 درهم",
      o2_r5_avg: "75.7 د.م/س",
      o2_r5_n: "توفير: احتساب 10 ساعات بسعر 65 د.م فقط",
      o2_f1_t: "⚡ مرونة كاملة ومطلقة",
      o2_f1_d: "تحكم 100% في عدد الساعات والميزانية كل شهر، بدون إلزام بعدد أدنى من الساعات أو عقود مقيدة.",
      o2_f2_t: "📊 تتبع شفاف ودقيق",
      o2_f2_d: "تقرير زمني مفصل كيوثق كل مهمة، وقت الانطلاق، الإنجاز، والوقت المستغرق بالدقيقة والثانية.",
      o2_f3_t: "🎯 خلاص على العمل الفعلي",
      o2_f3_d: "كتخلص فقط على الوقت المستهلك في الإنتاج والتنفيذ الحقيقي؛ صفر هدر وقيمة مضافة مضمونة.",
      o3_tag: "العرض الثالث • Custom Tailored Solutions",
      o3_title: "حلول إبداعية مخصصة",
      o3_desc: "عروض مصممة خصيصاً لتناسب احتياجاتكم وميزانيتكم — كنصممو معاً صيغة مخصصة 100% تحقق أهدافكم بأعلى جودة.",
      o3_btn: "اطلب عرضاً مخصصاً ←",
      o3_m1_t: "📦 01. المشاريع المتكاملة (Project-Based)",
      o3_m1_b: "تسعير ثابت",
      o3_m1_d: "اتفاق مسبق على كافة المخرجات والمراحل (هوية بصرية متكاملة، فيديو ترويجي رئيسي، أو حملة إعلانية) مع التزام بموعد تسليم نهائي وضمان التعديلات.",
      o3_m2_t: "🔄 02. المرافقة الشهرية الشاملة (Monthly Retainer)",
      o3_m2_b: "أولوية مستمرة",
      o3_m2_d: "مخرجات شهرية متفق عليها بوضوح: توليفة متوازنة تجمع بين منشورات السوشيال ميديا، فيديوهات الريلز، والتصميم المستمر مع تنسيق أسبوعي مباشر.",
      o3_m3_t: "🚀 03. باقات الإطلاق والمناسبات (Launch Sprints)",
      o3_m3_b: "إنتاج مكثف",
      o3_m3_d: "إنتاج مكثف وسريع لمواكبة إطلاق منتج جديد، تغطية فعالية كبرى، أو حملة تسويقية موسمية مستعجلة لضمان الجاهزية قبل الموعد المحدد.",
      o3_m4_t: "💡 04. الاستشارة والتوجيه الفني (Art Direction)",
      o3_m4_b: "إشراف إبداعي",
      o3_m4_d: "مراجعة جودة التصاميم، ضبط معايير البراند، وتوجيه فريق العمل عبر جلسات دورية وتوصيات عملية ملموسة لضمان هوية بصرية قوية متناسقة.",
      o3_proc_title: "كيفاش كنتفقو؟ — منهجية العمل",
      o3_s1_k: "01 • استشارة أولية مجانية",
      o3_s1_t: "تواصل وتحديد الحاجيات",
      o3_s1_d: "محادثة مباشرة عبر الواتساب أو اتصال سريع لتحديد نوعية المشروع، الأهداف، والمخرجات المطلوبة بدقة.",
      o3_s2_k: "02 • عرض مخصص وواضح",
      o3_s2_t: "مقترح مالي وخطة عمل",
      o3_s2_d: "تقديم مقترح مفصل يحدد حجم العمل، الميزانية الأنسب، والجدول الزمني الشفاف بدون أي مفاجآت.",
      o3_s3_k: "03 • تسليم في الموعد",
      o3_s3_t: "الانطلاق وتتبع الإنجاز",
      o3_s3_d: "بدء التنفيذ مع مشاركة المسودات أولاً بأول وأخذ ملاحظاتك وتعديلاتك حتى الاعتماد النهائي.",
      cta_heading: "جاهز نبداو الخدمة؟ تواصل معايا مباشرة على واتساب",
      cta_wa_btn: "تواصل عبر الواتساب الآن"
    }



  }
};

if (typeof window !== 'undefined') {
  window.translations = translations;
}
