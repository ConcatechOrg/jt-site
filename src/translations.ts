export const translations = {
  EN: {
    nav_commodities: "Commodities",
    nav_contact: "Contact Us",
    nav_faq: "FAQ",

    hero_title_line1: "Conecting",
    hero_title_line2_part1: "the world to",
    hero_title_line2_part2: "essential raw",
    hero_title_emphasized: "materials",

    hero_paragraph_line1: "We facilitate direct connections",
    hero_paragraph_line2: "between buyers and product owners,",
    hero_paragraph_line3: "ensuring a responsible supply of essential resources.",

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
    partner_brazil_description: "Sugar, rice, soybeans, corn",

    partner_mexico_title: "Mexico",
    partner_mexico_description: "Beans, corn, and avocados",

    partner_china_title: "China",
    partner_china_description: "Rice, soybeans, corn, and chicken",

    partner_vietnam_title: "Vietnam",
    partner_vietnam_description: "Rice, soybeans, corn, and chicken",

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
    partner_brazil_description: "Sucre, riz, soja, maïs",

    partner_mexico_title: "Mexique",
    partner_mexico_description: "Haricots, maïs et avocats",

    partner_china_title: "Chine",
    partner_china_description: "Riz, soja, maïs et poulet",

    partner_vietnam_title: "Vietnam",
    partner_vietnam_description: "Riz, soja, maïs et poulet",

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
      }
    ]
  },

  ES: {
    nav_commodities: "Mercancías",
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
          "El diseño ecológico está en el centro de nuestra estrategia. Estamos comprometidos con mejorar nuestras ofertas y ampliar nuestras capacidades de diseño y producción.",
      },
      {
        title: "Soporte 24/7",
        description:
          "Estamos dedicados a proporcionar el más alto nivel de atención al cliente, asegurando calidad y excelencia en todo lo que hacemos.",
      },
      {
        title: "Funcionalidad multilingüe",
        description:
          "Con nuestra funcionalidad multilingüe, puede comunicarse eficazmente a través de las fronteras y ampliar su impacto global.",
      },
      {
        title: "Tecnología avanzada",
        description:
          "Siempre innovando, nuestro equipo desarrolla tecnología de vanguardia. Viva el futuro – contáctenos.",
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
    partner_brazil_description: "Azúcar, arroz, soja, maíz",

    partner_mexico_title: "México",
    partner_mexico_description: "Frijoles, maíz y aguacates",

    partner_china_title: "China",
    partner_china_description: "Arroz, soja, maíz y pollo",

    partner_vietnam_title: "Vietnam",
    partner_vietnam_description: "Arroz, soja, maíz y pollo",

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
      description: "Mercancía agrícola de alta calidad para exportación",
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
      description: "Mercancía mineral de alta calidad para exportación",
      imageCard: "/assets/ore-card-image.png",
      imageDetail: "/assets/ore-commodities-image.png",
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
      slug: "meat",
      title: "Carne de cerdo, pollo, vaca ...",
      description: "Mercancía cárnica de alta calidad para exportación",
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
      "slug": "energy",
      title: "Energía limpia, petróleo, gas ...",
      description: "Mercancía energética de alta calidad para exportación",
      imageCard: "/assets/energy-card-image.png",
      imageDetail: "/assets/energy-commodities-image.png",
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
    }
  ]
  },
};
