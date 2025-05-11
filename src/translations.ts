export const translations = {
  EN: {
    nav_commodities: "Commodities",
    nav_contact: "Contact Us",
    nav_faq: "FAQ",

    hero_title_line1: "Connecting",
    hero_title_line2_part1: "the world to",
    hero_title_line2_part2: "essential raw",
    hero_title_emphasized: "materials",

    hero_paragraph_line1: "We facilitate direct connections",
    hero_paragraph_line2: "between buyers and product owners,",
    hero_paragraph_line3: "ensuring the responsible supply of essential resources.",

    whatsapp_button: "Contact via Whatsapp",

    sliver_cards: [
      {
        title: "Eco-Friendly Design",
        description:
          "Eco-friendly design is at the core of our strategy. We are committed to improving our offerings and expanding our capabilities in design and production.",
      },
      {
        title: "24/7 Support",
        description:
          "We are dedicated to providing the highest level of customer support, ensuring quality and excellence in everything we do. Customer service is our priority.",
      },
      {
        title: "Multilingual Functionality",
        description:
          "With our multilingual functionality, you can effectively communicate across borders and broaden your global impact.",
      },
      {
        title: "Advanced Tech",
        description:
          "Constantly innovating, our expert team develops leading-edge technology. Experience the future – contact us.",
      },
    ],

    business_image_line1: "International shipping involves complex compliance paperwork.",
    business_image_line2: "We provide complete logistics solutions",
    business_image_line3: "to streamline your global supply chain",

    commodities_section_title: "Commodities",
    commodities_button: "Show Products",

    commodities_agricola_title: "Agricultural Products",
    commodities_agricola_description: "Explore our premium quality sugar, soybean, and corn with full traceability and global export standards.",

    commodities_energy_title: "Energy Resources",
    commodities_energy_description: "We offer sustainable energy options including clean energy, oil, and natural gas for global trade.",

    commodities_meat_title: "Meat Products",
    commodities_meat_description: "High-grade pork, chicken, and beef products meeting the highest standards of hygiene and safety.",

    commodities_ores_title: "Ores and Minerals",
    commodities_ores_description: "Top-grade aluminum, silver, and steel ores ready for large-scale industrial supply chains.",

    partner_section_title: "Partner Countries",

    partner_brazil_title: "Brazil",
    partner_brazil_description: "Sugar, rice, soybeans, corn and chicken",

    partner_africa_title: "Africa",
    partner_africa_description: "Ores and Minerals",

    partner_chile_title: "Chile",
    partner_chile_description: "Ores and Minerals",

    partner_vietnam_title: "Vietnam",
    partner_vietnam_description: "Rice",

    partner_usa_title: "USA",
    partner_usa_description: "Energy (oil)",

    partner_holande_title: "Netherlands",
    partner_holande_description: "Energy (oil)",


    faq_title: "Frequently asked questions",

    faq_question_1: "How long does it take to process an international order?",
    faq_answer_1:
      "The processing time depends on the commodity and destination country, but typically it takes between 7 and 15 business days.",

    faq_question_2: "Do you offer support in multiple languages?",
    faq_answer_2:
      "Yes, we offer support in English, French, and Spanish. You can change the language using the language menu at the top of the page.",

    faq_question_3: "What documents are required for import/export?",
    faq_answer_3:
      "LOI (Letter of Intent), KYC (Know Your Customer), and SPA (Sales Purchase Agreement) are generally required for international commodity trade.",

    contact_title: "Contact Us",
    contact_name: "Name",
    contact_email: "E-mail",
    contact_message: "Message",
    contact_submit: "Submit",
    contact_sending: "Sending...",
    contact_name_placeholder: "personal or company",
    contact_email_placeholder: "youremail@",
    contact_message_placeholder: "Hi, I need help with...",
    email_success: "Email sent successfully!",
    email_error: "Error sending email.",

    opening_title: "Opening hours",
    opening_weekdays: "Mon - Fri: 8:00 am / 6:00 pm",
    opening_saturday: "Saturday: 9:00 am / 7:00 pm",


    commodities: [
      {
        slug: "agricola",
        title: "Sugar, soybean, corn ...",
        description: "High-quality acricola commodity for export",
        imageCard: "/assets/acricola-card-image.png",
        imageDetail: "/assets/acricola-commodities-image.png",
        procedures: [
          { actor: "Buyer", text: "Sends LOI + CIS/KYC with ID (CEO/Manager)." },
          { actor: "Seller", text: "Sends FCO to Buyer" },
          { actor: "Buyer", text: "Signs and returns FCO with ICPO (corporate email to xxx)." },
          { actor: "Seller", text: "Sends Draft SPA to Buyer." },
          { actor: "Buyer", text: "Signs SPA and returns (corporate email to xxx)." },
          { actor: "Seller", text: "Signs SPA and returns with Proforma Invoice." },
          { actor: "Buyer", text: "Returns signed Proforma Invoice with BCL+ATV (Buyer’s bank to Seller’s bank)." },
          { actor: "Seller", text: "Seller and Buyer sign/stamp manually, then Seller sends via DocuSign (legally binding substitute for original paper)." },
          { actor: "Buyer", text: "Issues Financial Instrument Draft (real draft with confirming bank details) to Seller (official email)." },
          { actor: "Third-Party Issuer SBLC", text: "0.1% upfront TT-MT103 for legal/platform fees..." }
        ]
      },
      {
        slug: "ores",
        title: "Steel, aluminium, silver ...",
        description: "High-quality ore commodity for export",
        imageCard: "/assets/ore-card-image.png",
        imageDetail: "/assets/ore-commodities-image.png",
        procedures: [
          { "actor": "Buyer", "text": "Sends LOI + CIS addressed to the Business Facilitator and signs NCNDA with intermediaries." },
          { "actor": "Buyer", "text": "Signs Validation Agreement / ICPO addressed to the Seller Mandate." },
          { "actor": "Seller", "text": "Sends Draft Contract to Buyer. Buyer reviews, fills in, signs and returns. Seller signs, seals and sends final PDF." },
          { "actor": "Buyer", "text": "Sends POF/RWA via bank-to-bank. Seller provides past performance (with redacted seller info and unredacted buyer info & BL number)." },
          { "actor": "Buyer", "text": "Issues bank payment guarantee (DLC - MT700) within 7 working days from contract signing." },
          { "actor": "Buyer", "text": "Processes initial bank guarantee and sends SWIFT to Seller following standard procedure." },
          { "actor": "Buyer Bank", "text": "Sends readiness to issue MT700 to Seller's financier bank." },
          { "actor": "Seller Financier Bank", "text": "Responds via MT799 confirming readiness to receive MT700." },
          { "actor": "Buyer Bank", "text": "Issues MT700 to Seller’s financier bank and sends SWIFT confirmation copy to Seller." },
          { "actor": "Seller", "text": "Prepares shipment within 14 working days. Shipping/logistics company handles delivery (~21 days)." },
          { "actor": "Buyer", "text": "Pays via 100% cash-backed, confirmed, non-transferable, divisible, operative, and auto-revolving MT700 DLC via MT103 or T/T within 5 working days after SGS or approved third-party inspection at destination port in China." },
          { "actor": "Buyer", "text": "Ensures that the financial instrument is valid for 12 months and 1 week, and is revolving or for the contract term." },
          { "actor": "Seller", "text": "Provides business invitation letter to Buyer for warehouse inspection, conditional on Buyer issuing operative LC." },
          { "actor": "Intermediary", "text": "Arranges group chat with Seller after receiving confirmed Validation Agreement & NCNDA documents." },
          { "actor": "Both Parties", "text": "Accept a 20% penalty clause of the total contract value if either party breaches any SPA procedure." },
          { "actor": "Buyer", "text": "Is invited to inspect stocks before stuffing/loading, upon confirmation of operative DLC." }
        ]
      },
      {
        slug: "meat",
        title: "Pig meat, chicken, cow ...",
        description: "High-quality meat commodity for export",
        imageCard: "/assets/meat-card-image.avif",
        imageDetail: "/assets/meat-commodities-image.png",
        procedures: [
          { actor: "Buyer", text: "Sends LOI + CIS/KYC with ID (CEO/Manager)." },
          { actor: "Seller", text: "Sends FCO to Buyer" },
          { actor: "Buyer", text: "Signs and returns FCO with ICPO (corporate email to xxx)." },
          { actor: "Seller", text: "Sends Draft SPA to Buyer." },
          { actor: "Buyer", text: "Signs SPA and returns (corporate email to xxx)." },
          { actor: "Seller", text: "Signs SPA and returns with Proforma Invoice." },
          { actor: "Buyer", text: "Returns signed Proforma Invoice with BCL+ATV (Buyer’s bank to Seller’s bank)." },
          { actor: "Seller", text: "Seller and Buyer sign/stamp manually, then Seller sends via DocuSign (legally binding substitute for original paper)." },
          { actor: "Buyer", text: "Issues Financial Instrument Draft (real draft with confirming bank details) to Seller (official email)." },
          { actor: "Third-Party Issuer SBLC", text: "0.1% upfront TT-MT103 for legal/platform fees..." }
        ]
      },
      {
        slug: "energy",
        title: "Clean energy, oil, gas ...",
        description: "High-quality energy commodity for export",
        imageCard: "/assets/energy-card-image.png",
        imageDetail: "/assets/energy-commodities-image.png",
        procedures: [
          { actor: "Buyer", text: "Issues LOI (Letter of Intent)." },
          { actor: "Seller", text: "Issues SCO (Soft Corporate Offer)." },
          { actor: "Buyer", text: "Issues ICPO (Irrevocable Corporate Purchase Order)." },
          { actor: "Seller", text: "Issues FCO (Full Corporate Offer); Buyer endorses and returns." },
          { actor: "Seller", text: "Issues draft contract open for amendments." },
          { actor: "Both Parties", text: "Confirm draft contract by endorsing it." },
          { actor: "Seller", text: "Registers contract with OFAC and issues Proforma Invoice." },
          { actor: "Buyer", text: "Issues financial guarantee to cover the value of the first shipment to Seller's bank." },
          { actor: "Buyer", text: "Issues SBLC MT760 to cover first shipment to Seller’s bank within 5 working days." },
          { actor: "Seller", text: "Issues to Buyer the following certificates: Certificate of Origin, Certificate of Quality and Quantity, Certificate of Analysis." },
          { actor: "Seller", text: "Upon confirmation of Buyer's Bank Guarantee, issues full POP and shipping documents via SWIFT to Buyer’s bank: Export Permit, Title of Ownership, Port Storage Agreement, SGS Q&Q Certificate, Bill of Lading, ETA of vessel, Vessel Q88." },
          { actor: "Shipment", text: "Commences. Upon vessel arrival at discharge port, Buyer conducts SGS inspection and activates SBLC or pays via TT wire or MT103." },
          { actor: "Seller's Bank", text: "Pays commissions to all intermediaries involved in the transaction." }
        ]
      }
    ]
  },
  FR: {
    nav_commodities: "Marchandises",
    nav_contact: "Contactez-nous",
    nav_faq: "FAQ",

    hero_title_line1: "Connecter",
    hero_title_line2_part1: "le monde aux",
    hero_title_line2_part2: "ressources",
    hero_title_emphasized: "brutes essentielles",

    hero_paragraph_line1: "Nous facilitons les connexions directes",
    hero_paragraph_line2: "entre acheteurs et producteurs,",
    hero_paragraph_line3: "assurant un approvisionnement responsable.",

    whatsapp_button: "Contacter via Whatsapp",

    sliver_cards: [
      {
        title: "Conception écologique",
        description:
          "La conception écologique est au cœur de notre stratégie. Nous nous engageons à améliorer nos offres et à étendre nos capacités de conception et de production.",
      },
      {
        title: "Assistance 24h/24 et 7j/7",
        description:
          "Nous nous engageons à offrir un service client de haut niveau, garantissant qualité et excellence dans tout ce que nous faisons.",
      },
      {
        title: "Fonctionnalité multilingue",
        description:
          "Grâce à notre fonctionnalité multilingue, vous pouvez communiquer efficacement au-delà des frontières et élargir votre impact mondial.",
      },
      {
        title: "Technologie avancée",
        description:
          "Toujours innovants, notre équipe développe des technologies de pointe. Vivez l'avenir – contactez-nous.",
      },
    ],

    business_image_line1: "L'expédition internationale implique une paperasserie de conformité complexe.",
    business_image_line2: "Nous offrons des solutions logistiques complètes",
    business_image_line3: "pour rationaliser votre chaîne d'approvisionnement mondiale",

    commodities_section_title: "Produits",
    commodities_button: "Voir les produits",

    commodities_agricola_title: "Produits Agricoles",
    commodities_agricola_description: "Explorez notre sucre, soja et maïs de qualité supérieure avec une traçabilité complète et des normes mondiales.",

    commodities_energy_title: "Ressources Énergétiques",
    commodities_energy_description: "Nous proposons des options énergétiques durables, y compris l’énergie propre, le pétrole et le gaz naturel.",

    commodities_meat_title: "Produits Carnés",
    commodities_meat_description: "Produits de porc, de poulet et de bœuf de qualité supérieure respectant les normes d’hygiène les plus strictes.",

    commodities_ores_title: "Minerais et Métaux",
    commodities_ores_description: "Minerais d’aluminium, d’argent et d’acier de haute qualité prêts pour les chaînes d’approvisionnement industrielles.",

    partner_section_title: "Pays partenaires",

    partner_brazil_title: "Brésil",
    partner_brazil_description: "Sucre, riz, soja, maïs et poulet",

    partner_africa_title: "Afrique",
    partner_africa_description: "Minerais et métaux",

    partner_chile_title: "Chile",
    partner_chile_description: "Mineraux et métaux",

    partner_vietnam_title: "Vietnam",
    partner_vietnam_description: "Riz",

    partner_usa_title: "USA",
    partner_usa_description: "Énergie (pétrole)",

    partner_holande_title: "Holande",
    partner_holande_description: "Énergie (pétrole)",

    faq_title: "Questions fréquemment posées",

    faq_question_1: "Combien de temps faut-il pour traiter une commande internationale ?",
    faq_answer_1:
      "Le délai dépend de la marchandise et du pays de destination, mais prend généralement entre 7 et 15 jours ouvrables.",

    faq_question_2: "Proposez-vous une assistance multilingue ?",
    faq_answer_2:
      "Oui, nous proposons une assistance en anglais, français et espagnol. Vous pouvez changer de langue via le menu en haut de la page.",

    faq_question_3: "Quels documents sont requis pour l'import/export ?",
    faq_answer_3:
      "LOI (Lettre d’intention), KYC (Connaissance du client) et SPA (Contrat de vente) sont généralement requis pour le commerce international de marchandises.",

    contact_title: "Contactez-nous",
    contact_name: "Nom",
    contact_email: "E-mail",
    contact_message: "Message",
    contact_submit: "Envoyer",
    contact_sending: "Envoi...",
    contact_name_placeholder: "personnel ou entreprise",
    contact_email_placeholder: "votremail@",
    contact_message_placeholder: "Bonjour, j'ai besoin d'aide pour...",
    email_success: "E-mail envoyé avec succès !",
    email_error: "Erreur lors de l'envoi de l'e-mail.",

    opening_title: "Heures d'ouverture",
    opening_weekdays: "Lun - Ven : 8h00 / 18h00",
    opening_saturday: "Samedi : 9h00 / 19h00",

    commodities: [
      {
        slug: "agricola",
        title: "Sucre, soja, maïs ...",
        description: "Marchandises agricoles de haute qualité pour l'exportation",
        imageCard: "/assets/acricola-card-image.png",
        imageDetail: "/assets/acricola-commodities-image.png",
        procedures: [
          { actor: "Acheteur", text: "Envoie LOI + CIS/KYC avec pièce d'identité (PDG/Directeur)." },
          { actor: "Vendeur", text: "Envoie FCO à l'Acheteur" },
          { actor: "Acheteur", text: "Signe et retourne FCO avec ICPO (email d'entreprise à xxx)." },
          { actor: "Vendeur", text: "Envoie projet de SPA à l'Acheteur." },
          { actor: "Acheteur", text: "Signe le SPA et le retourne (email d'entreprise à xxx)." },
          { actor: "Vendeur", text: "Signe le SPA et le retourne avec la facture pro forma." },
          { actor: "Acheteur", text: "Retourne la facture pro forma signée avec BCL+ATV (banque de l'Acheteur à la banque du Vendeur)." },
          { actor: "Vendeur", text: "Le vendeur et l'acheteur signent/tamponnent manuellement, puis le vendeur envoie via DocuSign (substitut juridiquement contraignant au papier original)." },
          { actor: "Acheteur", text: "Émet le projet d'instrument financier (vrai projet avec coordonnées bancaires de confirmation) au vendeur (email officiel)." },
          { actor: "Émetteur Tiers SBLC", text: "0,1% en avance TT-MT103 pour les frais juridiques/de plateforme (validité de 30 jours, renouvelable mensuellement à 0,1%). Ces frais sont déduits du paiement du premier envoi." }
        ]
      },
      {
        slug: "ores",
        title: "Acier, aluminium, argent ...",
        description: "Marchandises minières de haute qualité pour l'exportation",
        imageCard: "/assets/ore-card-image.png",
        imageDetail: "/assets/ore-commodities-image.png",
        procedures: [
          { "actor": "Acheteur", "text": "Envoie LOI + CIS adressé au Facilitateur Commercial et signe un NCNDA avec les intermédiaires." },
          { "actor": "Acheteur", "text": "Signe l'Accord de Validation / ICPO adressé au Mandataire du Vendeur." },
          { "actor": "Vendeur", "text": "Envoie le projet de contrat à l’Acheteur. L’Acheteur le complète, le signe et le retourne. Le Vendeur le signe, le scelle et envoie la version finale en PDF." },
          { "actor": "Acheteur", "text": "Envoie POF/RWA de banque à banque. Le Vendeur fournit des performances antérieures (nom du vendeur masqué, nom de l'acheteur non masqué et numéro de connaissement)." },
          { "actor": "Acheteur", "text": "Émet une garantie bancaire de paiement (DLC - MT700) dans les 7 jours ouvrables suivant la signature du contrat." },
          { "actor": "Acheteur", "text": "Traite la garantie bancaire initiale et envoie le SWIFT au vendeur selon la procédure standard." },
          { "actor": "Banque de l'Acheteur", "text": "Envoie une déclaration de disponibilité pour émettre le MT700 à la banque du financier du Vendeur." },
          { "actor": "Banque du Financier du Vendeur", "text": "Répond via MT799 en confirmant sa disponibilité pour recevoir le MT700." },
          { "actor": "Banque de l'Acheteur", "text": "Émet le MT700 à la banque du Vendeur et envoie une copie du SWIFT au Vendeur pour vérification." },
          { "actor": "Vendeur", "text": "Prépare la commande et l'expédition sous 14 jours ouvrables. Le transporteur/logisticien effectue la livraison (~21 jours)." },
          { "actor": "Acheteur", "text": "Effectue le paiement par DLC MT700 confirmé, 100% adossé en espèces, non transférable, divisible, opérationnel et renouvelable automatiquement, via MT103 ou T/T dans les 5 jours ouvrables suivant l'inspection au port de destination en Chine (par SGS ou organisme tiers agréé)." },
          { "actor": "Acheteur", "text": "S'assure que l'instrument financier est valide pour 12 mois et 1 semaine, renouvelable ou selon la durée du contrat." },
          { "actor": "Vendeur", "text": "Fournit une lettre d'invitation commerciale à l’Acheteur pour inspection de l'entrepôt, après émission d'une LC opérante." },
          { "actor": "Intermédiaire", "text": "Organise un groupe de discussion avec le Vendeur après réception des accords de validation et documents NCNDA confirmés." },
          { "actor": "Acheteur et Vendeur", "text": "Acceptent une clause pénale de 20% de la valeur totale du contrat en cas de non-respect des procédures du SPA par l’une des parties." },
          { "actor": "Acheteur", "text": "Est invité à inspecter les stocks avant le chargement, sur présentation d’une LC opérante confirmée." }
        ]
      },
      {
        slug: "meat",
        title: "Viande porcine, poulet, bœuf ...",
        description: "Marchandises carnées de haute qualité pour l'exportation",
        imageCard: "/assets/meat-card-image.avif",
        imageDetail: "/assets/meat-commodities-image.png",
        procedures: [
          { actor: "Acheteur", text: "Envoie LOI + CIS/KYC avec pièce d'identité (PDG/Directeur)." },
          { actor: "Vendeur", text: "Envoie FCO à l'Acheteur" },
          { actor: "Acheteur", text: "Signe et retourne FCO avec ICPO (email d'entreprise à xxx)." },
          { actor: "Vendeur", text: "Envoie projet de SPA à l'Acheteur." },
          { actor: "Acheteur", text: "Signe le SPA et le retourne (email d'entreprise à xxx)." },
          { actor: "Vendeur", text: "Signe le SPA et le retourne avec la facture pro forma." },
          { actor: "Acheteur", text: "Retourne la facture pro forma signée avec BCL+ATV (banque de l'Acheteur à la banque du Vendeur)." },
          { actor: "Vendeur", text: "Le vendeur et l'acheteur signent/tamponnent manuellement, puis le vendeur envoie via DocuSign (substitut juridiquement contraignant au papier original)." },
          { actor: "Acheteur", text: "Émet le projet d'instrument financier (vrai projet avec coordonnées bancaires de confirmation) au vendeur (email officiel)." },
          { actor: "Émetteur Tiers SBLC", text: "0,1% en avance TT-MT103 pour les frais juridiques/de plateforme (validité de 30 jours, renouvelable mensuellement à 0,1%). Ces frais sont déduits du paiement du premier envoi." }
        ]
      },
      {
        slug: "energy",
        title: "Énergie propre, pétrole, gaz ...",
        description: "Marchandises énergétiques de haute qualité pour l'exportation",
        imageCard: "/assets/energy-card-image.png",
        imageDetail: "/assets/energy-commodities-image.png",
        procedures: [
          { actor: "Acheteur", text: "Émet une LOI (Lettre d'Intention)." },
          { actor: "Vendeur", text: "Émet une SCO (Offre d'Entreprise Souple)." },
          { actor: "Acheteur", text: "Émet une ICPO (Commande d'Achat d'Entreprise Irrévocable)." },
          { actor: "Vendeur", text: "Émet une FCO (Offre d'Entreprise Complète) que l'Acheteur approuve et retourne." },
          { actor: "Vendeur", text: "Émet un contrat préliminaire ouvert aux amendements." },
          { actor: "Les Deux Parties", text: "Confirment le contrat préliminaire en l'approuvant." },
          { actor: "Vendeur", text: "Enregistre le contrat auprès de l'OFAC et émet la facture pro forma." },
          { actor: "Acheteur", text: "Émet une garantie financière pour couvrir la valeur du premier envoi à la banque du Vendeur." },
          { actor: "Acheteur", text: "Émet une SBLC MT760 pour couvrir le premier envoi à la banque du Vendeur dans un délai de 5 jours ouvrables." },
          { actor: "Vendeur", text: "Fournit à l'Acheteur les certificats suivants : Certificat d'Origine, Certificat de Qualité et de Quantité, Certificat d'Analyse." },
          { actor: "Vendeur", text: "Après confirmation de la garantie bancaire de l'Acheteur, émet les documents complets de la preuve de produit (POP) et d'expédition via SWIFT à la banque de l'Acheteur : Permis d'exportation, Titre de propriété, Accord de stockage au port, Certificat SGS Q&Q, Connaissement, ETA du navire, Questionnaire Q88 du navire." },
          { actor: "Expédition", text: "Commence. À l'arrivée du navire au port de déchargement, l'Acheteur effectue l'inspection SGS et active la SBLC ou effectue le paiement complet via virement TT ou MT103." },
          { actor: "Banque du Vendeur", text: "Paie les commissions à tous les intermédiaires impliqués dans la transaction." }
        ]
      }
    ]
  },

  ES: {
    nav_commodities: "Productos",
    nav_contact: "Contáctenos",
    nav_faq: "FAQ",

    hero_title_line1: "Conectando",
    hero_title_line2_part1: "el mundo con",
    hero_title_line2_part2: "recursos",
    hero_title_emphasized: "materias primas esenciales",

    hero_paragraph_line1: "Facilitamos conexiones directas",
    hero_paragraph_line2: "entre compradores y productores,",
    hero_paragraph_line3: "asegurando un suministro responsable.",

    whatsapp_button: "Contactar por Whatsapp",

    sliver_cards: [
      {
        title: "Diseño ecológico",
        description:
          "El diseño ecológico es el núcleo de nuestra estrategia. Estamos comprometidos con mejorar nuestras ofertas y ampliar nuestras capacidades de diseño y producción.",
      },
      {
        title: "Soporte 24/7",
        description:
          "Estamos comprometidos en ofrecer el mejor servicio al cliente, garantizando calidad y excelencia en todo lo que hacemos.",
      },
      {
        title: "Funcionalidad multilingüe",
        description:
          "Con nuestra capacidad multilingüe, puede comunicarse eficazmente a través de las fronteras y ampliar su impacto global.",
      },
      {
        title: "Tecnología avanzada",
        description:
          "Siempre innovando, nuestro equipo desarrolla tecnología de vanguardia. Descubra el futuro – contáctenos.",
      },
    ],

    business_image_line1: "El envío internacional implica una documentación de cumplimiento compleja.",
    business_image_line2: "Ofrecemos soluciones logísticas completas",
    business_image_line3: "para optimizar su cadena de suministro global",

    commodities_section_title: "Commodities",
    commodities_button: "Ver productos",

    commodities_agricola_title: "Productos Agrícolas",
    commodities_agricola_description: "Descubre nuestro azúcar, soya y maíz de alta calidad con trazabilidad completa y estándares globales.",

    commodities_energy_title: "Recursos Energéticos",
    commodities_energy_description: "Ofrecemos opciones energéticas sostenibles, como energía limpia, petróleo y gas natural.",

    commodities_meat_title: "Productos Cárnicos",
    commodities_meat_description: "Carne de cerdo, pollo y res de alta calidad cumpliendo los más altos estándares de higiene y seguridad.",

    commodities_ores_title: "Minerales y Metales",
    commodities_ores_description: "Minerales de aluminio, plata y acero de alta calidad listos para grandes cadenas de suministro industrial.",

    partner_section_title: "Países socios",

    partner_brazil_title: "Brasil",
    partner_brazil_description: "Azúcar, arroz, soja, maíz y pollo",

    partner_africa_title: "África",
    partner_africa_description: "Minerales y Metales",

    partner_chile_title: "Chile",
    partner_chile_description: "Minerales y Metales",

    partner_vietnam_title: "Vietnam",
    partner_vietnam_description: "Arroz",

    partner_usa_title: "USA",
    partner_usa_description: "Energía (petróleo)",

    partner_holande_title: "Países Bajos",
    partner_holande_description: "Energía (petróleo)",


    faq_title: "Preguntas frecuentes",

    faq_question_1: "¿Cuánto tiempo toma procesar un pedido internacional?",
    faq_answer_1:
      "El tiempo de procesamiento depende de la mercancía y el país de destino, pero suele tomar entre 7 y 15 días hábiles.",

    faq_question_2: "¿Ofrecen soporte en varios idiomas?",
    faq_answer_2:
      "Sí, ofrecemos soporte en inglés, francés y español. Puede cambiar el idioma desde el menú en la parte superior de la página.",

    faq_question_3: "¿Qué documentos se requieren para importar/exportar?",
    faq_answer_3:
      "Por lo general se requieren LOI (Carta de intención), KYC (Conozca a su cliente) y SPA (Contrato de compraventa) para el comercio internacional.",

    contact_title: "Contáctanos",
    contact_name: "Nombre",
    contact_email: "Correo electrónico",
    contact_message: "Mensaje",
    contact_submit: "Enviar",
    contact_sending: "Enviando...",
    contact_name_placeholder: "personal o empresa",
    contact_email_placeholder: "tucorreo@",
    contact_message_placeholder: "Hola, necesito ayuda con...",
    email_success: "Correo enviado con éxito.",
    email_error: "Error al enviar el correo.",

    opening_title: "Horario de atención",
    opening_weekdays: "Lun - Vie: 8:00 am / 6:00 pm",
    opening_saturday: "Sábado: 9:00 am / 7:00 pm",

    commodities: [
    {
      slug: "agricola",
      title: "Azúcar, soja, maíz ...",
      description: "Producto agrícola de alta calidad para exportación",
      imageCard: "/assets/acricola-card-image.png",
      imageDetail: "/assets/acricola-commodities-image.png",
      procedures: [
        { "actor": "Comprador", "text": "Envía LOI + CIS/KYC con identificación (CEO/Gerente)." },
        { "actor": "Vendedor", "text": "Envía FCO al Comprador" },
        { "actor": "Comprador", "text": "Firma y devuelve FCO con ICPO (correo corporativo a xxx)." },
        { "actor": "Vendedor", "text": "Envía borrador de SPA al Comprador." },
        { "actor": "Comprador", "text": "Firma el SPA y lo devuelve (correo corporativo a xxx)." },
        { "actor": "Vendedor", "text": "Firma el SPA y lo devuelve con factura proforma." },
        { "actor": "Comprador", "text": "Devuelve factura proforma firmada con BCL+ATV (banco del Comprador al banco del Vendedor)." },
        { "actor": "Vendedor", "text": "El Vendedor y el Comprador firman/sellan manualmente, luego el Vendedor envía vía DocuSign (sustituto legalmente vinculante del documento original)." },
        { "actor": "Comprador", "text": "Emite borrador del instrumento financiero (borrador real con detalles del banco confirmante) al Vendedor (correo oficial)." },
        { "actor": "Emisor SBLC de Terceros", "text": "0.1% por adelantado TT-MT103 para tarifas legales/de plataforma (vigencia de 30 días, renovable mensualmente al 0.1%). Esta tarifa se deduce del pago del primer envío." }
      ]
    },
    {
      slug: "ores",
      title: "Acero, aluminio, plata ...",
      description: "Producto mineral de alta calidad para exportación",
      imageCard: "/assets/ore-card-image.png",
      imageDetail: "/assets/ore-commodities-image.png",
      procedures: [
        { "actor": "Comprador", "text": "Envía LOI + CIS dirigido al facilitador comercial. Se firma un NCNDA con el intermediario." },
        { "actor": "Intermediario", "text": "Tras firmar el Acuerdo de Validación, se envía el ICPO dirigido al mandato del vendedor." },
        { "actor": "Vendedor", "text": "Envía el borrador del contrato al Comprador." },
        { "actor": "Comprador", "text": "Revisa, completa, firma y devuelve el contrato al Vendedor." },
        { "actor": "Vendedor", "text": "Firma y sella el contrato, y reenvía la copia final en PDF al Comprador." },
        { "actor": "Comprador", "text": "Envía POF/RWA banco a banco. El Vendedor proporciona desempeño anterior con nombre del vendedor redactado, y nombre/entidad del comprador sin editar, junto con el número del BL." },
        { "actor": "Comprador", "text": "Emite una garantía de pago bancaria (DLC-MT700) dentro de los 7 días hábiles tras la firma del contrato." },
        { "actor": "Comprador", "text": "Procesa el pago inicial por garantía bancaria y envía SWIFT al Vendedor según el proceso estándar." },
        { "actor": "Banco del Comprador", "text": "Envía al banco financiador del Vendedor su disposición de emitir MT700." },
        { "actor": "Banco del Vendedor", "text": "Responde mediante MT799 confirmando estar listo para recibir el MT700." },
        { "actor": "Banco del Comprador", "text": "Emite MT700 al banco financiador del Vendedor y envía copia SWIFT al Vendedor para verificación." },
        { "actor": "Vendedor", "text": "Prepara el pedido del Comprador y realiza el embarque dentro de 14 días hábiles. Estimación de entrega por transportista: 21 días." },
        { "actor": "Ambas partes", "text": "El pago se realiza mediante DLC MT700 confirmado, no transferible, divisible, 100% respaldado en efectivo y operativo, mediante MT103 o T/T, dentro de 5 días hábiles tras la entrega e inspección en puerto destino en China por SGS u otro tercero aprobado." },
        { "actor": "Comprador", "text": "El instrumento financiero debe tener una validez de 12 meses y ser renovable o válido por la duración del contrato." },
        { "actor": "Vendedor", "text": "Proporciona carta de invitación comercial a la empresa del Comprador para inspeccionar los stocks en almacén de carga, una vez se haya confirmado el LC operativo." },
        { "actor": "Intermediario", "text": "Organiza chat grupal con el Vendedor tras recibir el Acuerdo de Validación y el documento confidencial NCNDA." },
        { "actor": "Ambas partes", "text": "Cláusula de penalización: 20% del valor total del contrato si cualquiera de las partes incumple los procedimientos del SPA." },
        { "actor": "Comprador", "text": "Es invitado a inspeccionar los stocks para confirmar existencia y disponibilidad antes del embalaje y carga, en presencia suya o de su representante, tras confirmar el LC operativo." }
      ]
    },
    {
      slug: "meat",
      title: "Carne de cerdo, pollo, vaca ...",
      description: "Producto cárnica de alta calidad para exportación",
      imageCard: "/assets/meat-card-image.avif",
      imageDetail: "/assets/meat-commodities-image.png",
      procedures: [
        { "actor": "Comprador", "text": "Envía LOI + CIS/KYC con identificación (CEO/Gerente)." },
        { "actor": "Vendedor", "text": "Envía FCO al Comprador" },
        { "actor": "Comprador", "text": "Firma y devuelve FCO con ICPO (correo corporativo a xxx)." },
        { "actor": "Vendedor", "text": "Envía borrador de SPA al Comprador." },
        { "actor": "Comprador", "text": "Firma el SPA y lo devuelve (correo corporativo a xxx)." },
        { "actor": "Vendedor", "text": "Firma el SPA y lo devuelve con factura proforma." },
        { "actor": "Comprador", "text": "Devuelve factura proforma firmada con BCL+ATV (banco del Comprador al banco del Vendedor)." },
        { "actor": "Vendedor", "text": "El Vendedor y el Comprador firman/sellan manualmente, luego el Vendedor envía vía DocuSign (sustituto legalmente vinculante del documento original)." },
        { "actor": "Comprador", "text": "Emite borrador del instrumento financiero (borrador real con detalles del banco confirmante) al Vendedor (correo oficial)." },
        { "actor": "Emisor SBLC de Terceros", "text": "0.1% por adelantado TT-MT103 para tarifas legales/de plataforma (vigencia de 30 días, renovable mensualmente al 0.1%). Esta tarifa se deduce del pago del primer envío." }
      ]
    },
    {
      slug: "energy",
      title: "Energía limpia, petróleo, gas ...",
      description: "Producto energético de alta calidad para exportación",
      imageCard: "/assets/energy-card-image.png",
      imageDetail: "/assets/energy-commodities-image.png",
      procedures: [
        { "actor": "Comprador", "text": "Emite una LOI (Carta de Intención)." },
        { "actor": "Vendedor", "text": "Emite una SCO (Oferta Corporativa Suave)." },
        { "actor": "Comprador", "text": "Emite una ICPO (Orden de Compra Corporativa Irrevocable)." },
        { "actor": "Vendedor", "text": "Emite una FCO (Oferta Corporativa Completa) que el Comprador avala y devuelve." },
        { "actor": "Vendedor", "text": "Emite borrador del contrato abierto a enmiendas." },
        { "actor": "Ambas Partes", "text": "Confirman el borrador del contrato firmándolo." },
        { "actor": "Vendedor", "text": "Registra el contrato en la OFAC y emite la Factura Proforma." },
        { "actor": "Comprador", "text": "Emite garantía financiera para cubrir el valor del primer envío al banco del Vendedor." },
        { "actor": "Comprador", "text": "Emite SBLC MT760 para cubrir el primer envío al banco del Vendedor en un plazo de 5 días hábiles." },
        { "actor": "Vendedor", "text": "Entrega al Comprador los siguientes certificados: Certificado de Origen, Certificado de Calidad y Cantidad, Certificado de Análisis." },
        { "actor": "Vendedor", "text": "Tras la confirmación de la garantía bancaria del Comprador, emite la prueba completa del producto (POP) y los documentos de envío vía SWIFT al banco del Comprador: Permiso de exportación del producto, Certificado de titularidad, Acuerdo de almacenamiento en puerto, Certificado SGS Q&Q, Conocimiento de embarque, ETA del buque, Cuestionario Q88 del buque." },
        { "actor": "Embarque", "text": "Comienza. A la llegada del buque al puerto de destino, el Comprador realiza inspección SGS y activa la SBLC o realiza el pago completo vía transferencia TT o MT103." },
        { "actor": "Banco del Vendedor", "text": "Paga las comisiones a todos los intermediarios involucrados en la transacción." }
      ]
    }
  ]
  },
};
