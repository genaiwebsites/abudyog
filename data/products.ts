export interface ProductSpec {
  parameter: string;
  value: string;
}

export interface ProductGrade {
  name: string;
  specs: ProductSpec[];
}

export interface TestingStandard {
  standard: string;
  parameter: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductItem {
  slug: string;
  title: string;
  shortName: string;
  desc: string;
  metaTitle: string;
  metaDesc: string;
  directAnswer: string;
  fullDesc: string;
  image: string;
  ogImageName: string;
  category: string;
  externalLink?: string;
  externalLinkLabel?: string;
  features: string[];
  applications: string[];
  specifications?: ProductSpec[];
  grades?: ProductGrade[];
  testingStandards?: TestingStandard[];
  faqs?: ProductFaq[];
}

export const PRODUCTS: Record<string, ProductItem> = {
  'ab-health': {
    slug: 'ab-health',
    title: 'AB Health Edible Oils',
    shortName: 'AB Health',
    desc: 'Physically refined Rice Bran Oil & Soyabean Oil fortified with Vitamins A & D.',
    metaTitle: 'AB Health Physically Refined Edible Oils',
    metaDesc: 'Physically refined Rice Bran Oil & Soyabean Oil fortified with natural Oryzanol and Vitamins A & D. Direct manufacturer supply.',
    directAnswer: 'AB Health Rice Bran Oil is a 100% physically refined cooking oil produced via chemical-free steam distillation without caustic soda washing. Fortified with Vitamins A & D and naturally enriched with over 10,000 PPM Gamma Oryzanol, it features a high 232°C (450°F) smoke point for heart-smart daily cooking and commercial frying.',
    fullDesc: 'Crafted for modern health-conscious households and commercial culinary operations, our refining process preserves vital micro-nutrients including Tocopherols and Tocotrienols. Available in consumer retail packs (1L pouches, 5L jars, 15L tins) as well as bulk institutional containers.',
    image: '/ab-health-edible-oils-brand-showcase-kolkata.svg',
    ogImageName: 'ab_health',
    category: 'Edible Oils',
    features: ['Vit. A & D Fortified', 'Natural Oryzanol Enriched (10,000+ PPM)', 'Zero Trans Fat & Chemical-Free', 'FSSAI & FSSC 22000 Certified'],
    applications: ['Daily Family Cooking', 'Deep Frying & Sautéing', 'Heart-Smart Cholesterol Management', 'Consumer Retail Packaging'],
    specifications: [
      { parameter: 'Free Fatty Acids (FFA)', value: '0.15% Max (as Oleic)' },
      { parameter: 'Oryzanol Content', value: '10,000 PPM Min (HPLC Method ISO 12228)' },
      { parameter: 'Trans Fat', value: 'Zero (0g)' },
      { parameter: 'Fortification', value: 'Vitamin A (25 IU/g) & Vitamin D2 (4.5 IU/g)' },
      { parameter: 'Smoke Point', value: '232°C (450°F) High Thermal Stability' },
      { parameter: 'Refining Process', value: '100% Physical Steam Distillation' }
    ],
    testingStandards: [
      { standard: 'ISO 12228 / HPLC', parameter: 'Gamma Oryzanol concentration verification' },
      { standard: 'AOCS Ca 5a-40', parameter: 'Free Fatty Acid (FFA) purity index' },
      { standard: 'FSSAI Standards', parameter: 'Vitamin A & D micronutrient fortification' }
    ],
    faqs: [
      {
        question: 'What is the Gamma Oryzanol content in AB Health Rice Bran Oil?',
        answer: 'AB Health Rice Bran Oil guarantees a minimum of 10,000 PPM of natural Gamma Oryzanol, verified via HPLC (ISO 12228) analytical testing in our in-house NABL-accredited laboratory.'
      },
      {
        question: 'How is AB Health Rice Bran Oil physically refined without chemicals?',
        answer: 'We use high-temperature (240°C–260°C), high-vacuum steam distillation to strip free fatty acids and volatile impurities without caustic soda (sodium hydroxide) washing or chemical bleaching, retaining native antioxidants.'
      }
    ]
  },
  'de-oiled-rice-bran': {
    slug: 'de-oiled-rice-bran',
    title: 'De-Oiled Rice Bran (DORB)',
    shortName: 'AB DORB',
    desc: 'High-protein, low-fat animal feed foundation.',
    metaTitle: 'De-Oiled Rice Bran (DORB) Animal Feed',
    metaDesc: 'High-yield de-oiled rice bran (DORB) in powder & pellet forms. 16% protein minimum for commercial animal nutrition and feed millers.',
    externalLink: '/products/magik-dorb',
    externalLinkLabel: 'Explore Magik DORB',
    directAnswer: 'De-Oiled Rice Bran (DORB) is the protein-dense agricultural derivative obtained after solvent extraction removes crude oil from raw rice bran meal. Containing 15.0%–16.5% crude protein, under 1.5% residual fat, and high digestible fiber, DORB is an essential raw material for aquaculture, poultry, and dairy cattle feeds.',
    fullDesc: 'Produced in our 300 TPD continuous extraction complex in Uchalan, West Bengal, our DORB undergoes multi-stage screening to guarantee low sand and silica (<5.0%) and high feed conversion efficiency. We supply Grade 1, Grade 2, and specialized pelletized grades for commercial feed millers across India and export corridors.',
    image: '/abu_dorb_combo.svg',
    ogImageName: 'de_oiled_rice_bran',
    category: 'Animal Nutrition',
    features: ['16% Min Crude Protein', 'Low Silica (<5.0%)', 'High Digestibility & Fiber', 'Uniform Particle Grinding'],
    applications: ['Aquaculture (Fish & Shrimp Feeds)', 'Poultry Feed Sourcing', 'Dairy Cattle & Swine Ration', 'Industrial Sodium Silicate & Bricks'],
    grades: [
      {
        name: 'Grade 1 (Premium / Magik DORB)',
        specs: [
          { parameter: 'Moisture', value: '10.0% – 12.0%' },
          { parameter: 'Crude Protein (AOAC 990.03)', value: 'Min 16.0%' },
          { parameter: 'Crude Fibre', value: 'Max 14.0%' },
          { parameter: 'Sand & Silica (Acid Insoluble)', value: 'Max 5.0%' },
          { parameter: 'Form', value: 'Micro-Milled Powder & Extruded Pellets' }
        ]
      },
      {
        name: 'Grade 2 (Standard DORB)',
        specs: [
          { parameter: 'Moisture', value: '10.0% – 12.0%' },
          { parameter: 'Crude Protein', value: '15.0% – 16.0%' },
          { parameter: 'Crude Fibre', value: '16.0% – 18.0%' },
          { parameter: 'Sand & Silica', value: 'Max 5.0%' },
          { parameter: 'Form', value: 'Standard Powder & Pellets' }
        ]
      }
    ],
    testingStandards: [
      { standard: 'AOAC 990.03 (Dumas)', parameter: 'Crude Protein nitrogen determination' },
      { standard: 'IS 7874 (Part 1)', parameter: 'Acid Insoluble Ash (Sand & Silica testing)' },
      { standard: 'IS 3448', parameter: 'Residual oil content extraction' }
    ],
    faqs: [
      {
        question: 'What is the full form of DORB?',
        answer: 'DORB stands for De-Oiled Rice Bran. It is the high-protein meal left over after crude oil is extracted from raw rice bran via continuous hexane solvent extraction.'
      },
      {
        question: 'What is the protein and silica content of AB Udyog DORB?',
        answer: 'AB Udyog DORB delivers a minimum of 16.0% crude protein and maximum 5.0% sand/silica, ensuring superior digestibility in aquafeeds and cattle rations.'
      }
    ]
  },
  'magik-dorb': {
    slug: 'magik-dorb',
    title: 'Magik DORB Super Fine Animal Feed',
    shortName: 'Magik DORB',
    desc: 'Super fine animal feed grade de-oiled rice bran with 16% Min crude protein.',
    metaTitle: 'Magik DORB Super Fine Animal Feed',
    metaDesc: 'Super fine animal feed grade de-oiled rice bran with 16% Min crude protein for aquaculture, poultry, and high-yield cattle nutrition.',
    directAnswer: 'Magik DORB is AB Udyog’s flagship ultra-fine de-oiled rice bran engineered specifically for high-efficiency aquaculture, poultry, and dairy feed millers. It delivers a guaranteed minimum of 16.0% crude protein, low silica (<5.0%), and optimized particle size for maximum nutrient absorption.',
    fullDesc: 'Micro-milled and conditioned to provide uniform nutritional density and rapid water stability in aquaculture pellets. Sourced from the fertile West Bengal paddy belt and processed in our continuous solvent extraction facility under strict NABL quality testing.',
    image: '/abu_dorb_combo.svg',
    ogImageName: 'magik_dorb',
    category: 'Animal Nutrition',
    features: ['Guaranteed 16.0% Min Protein', 'Acid Insoluble Ash < 5.0%', 'Micro-Milled Texture', 'NABL Lab Certified Batching'],
    applications: ['Shrimp & Finfish Aquafeeds', 'Poultry Broiler & Layer Feeds', 'High-Yield Dairy Cattle Feed', 'Commercial Feed Premixes'],
    specifications: [
      { parameter: 'Crude Protein (N × 6.25)', value: 'Min 16.0% (AOAC 990.03)' },
      { parameter: 'Crude Fat / Residual Oil', value: 'Max 1.5% (IS 3448)' },
      { parameter: 'Moisture', value: '10.0% – 12.0%' },
      { parameter: 'Crude Fibre', value: 'Max 14.0%' },
      { parameter: 'Sand & Silica', value: 'Max 5.0% (IS 7874)' },
      { parameter: 'Packaging', value: '50kg Laminated PP Bags / Bulk Containers' }
    ],
    testingStandards: [
      { standard: 'AOAC 990.03', parameter: 'Crude protein determination' },
      { standard: 'IS 7874', parameter: 'Sand & silica acid insoluble ash' }
    ],
    faqs: [
      {
        question: 'Why is Magik DORB preferred for aquaculture feed?',
        answer: 'Magik DORB has ultra-low silica content (<5%) and high crude protein (16% Min), which improves pellet water stability and prevents gut irritation in fish and shrimp.'
      }
    ]
  },
  'rice-bran-wax': {
    slug: 'rice-bran-wax',
    title: 'Refined Rice Bran Wax',
    shortName: 'Rice Bran Wax',
    desc: 'Hard, crystalline natural vegetable wax with high melting point (76°C–82°C).',
    metaTitle: 'Refined Rice Bran Wax (76°C MP)',
    metaDesc: 'Premium hard natural vegetable wax (76°C melting point) for cosmetics, pharmaceuticals, polishes, and industrial coatings.',
    directAnswer: 'Refined Rice Bran Wax (CAS 8016-60-2) is a premium, hard, high-melting-point (76°C–82°C) natural vegetable wax crystallized during the dewaxing stage of rice bran oil refining. It serves as a 100% plant-based, non-GMO alternative to Carnauba wax for cosmetics, pharmaceutical tablet coatings, fruit coatings, and polishes.',
    fullDesc: 'Extracted via controlled winterization and selective crystallization, this high-ester vegetable wax delivers exceptional hardness, gloss, and thermal stability. Widely formulated in lipsticks, protective barrier creams, tablet coatings, and water-repellent industrial paper treatments.',
    image: '/rice_bran_wax_product.png',
    ogImageName: 'rice_bran_wax',
    category: 'Industrial Bio-Derivatives',
    features: ['High Melting Point (76°C–82°C)', '100% Vegetable Origin (Non-GMO)', 'Carnauba Wax Substitute', 'High Hardness & Gloss'],
    applications: ['Cosmetic Lipsticks, Balms & Mascaras', 'Pharmaceutical Tablet Coatings', 'Fruit & Paper Waterproof Coatings', 'Automotive & Leather Polishes'],
    specifications: [
      { parameter: 'Melting Point (MP)', value: '76.0°C – 82.0°C (AOCS Cc 18-80)' },
      { parameter: 'Acid Value', value: 'Max 10.0 mg KOH/g' },
      { parameter: 'Saponification Value', value: '75 – 95 mg KOH/g' },
      { parameter: 'Iodine Value', value: 'Max 15.0' },
      { parameter: 'Colour & Appearance', value: 'Hard Yellowish-Brown Flakes / Blocks' },
      { parameter: 'CAS Registry', value: '8016-60-2' }
    ],
    testingStandards: [
      { standard: 'AOCS Cc 18-80', parameter: 'Drop melting point verification' },
      { standard: 'AOCS Cd 3d-63', parameter: 'Acid value titration' }
    ],
    faqs: [
      {
        question: 'Can Rice Bran Wax replace Carnauba Wax in cosmetics?',
        answer: 'Yes. With a high melting point of 76°C–82°C, Rice Bran Wax provides equivalent hardness, structure, and thermal stability to Carnauba wax while offering superior emollient skin conditioning.'
      }
    ]
  },
  'rice-bran-gums': {
    slug: 'rice-bran-gums',
    title: 'Stabilized Rice Bran Gums',
    shortName: 'Rice Bran Gums',
    desc: 'Natural phosphatide emulsifier derived during physical refining.',
    metaTitle: 'Stabilized Rice Bran Gums',
    metaDesc: 'Natural emulsifier and binding agent byproduct derived from physical refining of crude rice bran oil for feeds and emulsions.',
    directAnswer: 'Rice Bran Gums are natural phospholipid and glycolipid complexes isolated during the hydration and degumming stage of crude rice bran oil processing. They act as high-viscosity binding agents and stabilizers for animal feed formulations, industrial water-in-oil emulsions, and textile sizing.',
    fullDesc: 'Recovered during the early hydration stages of refining, these gums contain concentrated phosphatides that enhance structural pellet integrity in aquaculture feeds and provide effective phase stabilization in industrial lubricants and emulsions.',
    image: '/rice_bran_gums_product.png',
    ogImageName: 'rice_bran_gums',
    category: 'Industrial Bio-Derivatives',
    features: ['Natural Emulsification', 'High Viscosity Binder', 'Active Phosphatides', 'Stabilizing Agent'],
    applications: ['Animal Feed Binder', 'Industrial Emulsions', 'Textile Sizing', 'Leather Processing'],
    specifications: [
      { parameter: 'Free Fatty Acids (FFA)', value: '7.0% Max' },
      { parameter: 'Oil Content', value: '10.0% – 15.0%' },
      { parameter: 'Iodine Value', value: '75 – 80' },
      { parameter: 'Insoluble Matter', value: '55.0% Max' },
      { parameter: 'Acid Value', value: '40.0% Max' },
      { parameter: 'Saponification Value', value: '82.0%' }
    ],
    testingStandards: [
      { standard: 'AOCS Ja 4-46', parameter: 'Phosphatide content testing' }
    ],
    faqs: [
      {
        question: 'What are the main applications of Rice Bran Gums?',
        answer: 'Rice Bran Gums are primarily utilized as natural binding agents in aquafeed pellets, industrial emulsifiers in lubricants, and sizing additives in textile processing.'
      }
    ]
  },
  'rice-bran-lecithin': {
    slug: 'rice-bran-lecithin',
    title: 'Natural Rice Bran Lecithin',
    shortName: 'Rice Bran Lecithin',
    desc: 'Non-GMO natural bio-emulsifier and antioxidant for food and cosmetics.',
    metaTitle: 'Natural Rice Bran Lecithin',
    metaDesc: 'Non-GMO liquid lecithin emulsifier for food processing, bakery, cosmetics, animal feeds, and pharmaceutical softgels.',
    directAnswer: 'Rice Bran Lecithin is an amber liquid bio-emulsifier derived from non-GMO rice bran oil. Rich in phosphatides, phytosterols, and natural antioxidants with high unsaponifiable matter, it provides a clean-label, hypoallergenic alternative to soy and sunflower lecithin for bakery, chocolate, and nutraceutical applications.',
    fullDesc: 'Exhibiting an optimal balance of essential fatty acids and natural Tocopherols, our non-GMO lecithin improves dough elasticity, moisture retention, and shelf life in confectionery and nutraceutical softgels without synthetic additives.',
    image: '/rice_bran_lecithin_product.png',
    ogImageName: 'rice_bran_lecithin',
    category: 'Industrial Bio-Derivatives',
    features: ['100% Non-GMO Origin', 'High Unsaponifiables', 'Clean-Label Emulsifier', 'Natural Antioxidant Content'],
    applications: ['Bakery & Confectionery', 'Chocolate Manufacturing', 'Nutraceuticals & Softgels', 'Personal Care & Cosmetics'],
    specifications: [
      { parameter: 'Acetone Insoluble (Phosphatides)', value: '60.0% Min (AOCS Ja 4-46)' },
      { parameter: 'Free Fatty Acids (FFA)', value: '25.0% Max' },
      { parameter: 'Moisture, Impurities & Volatiles (MIV)', value: '1.0% Max' },
      { parameter: 'Colour', value: 'Viscous Amber Liquid' },
      { parameter: 'Acid Value', value: '50.0 Max' }
    ],
    testingStandards: [
      { standard: 'AOCS Ja 4-46', parameter: 'Acetone insoluble phosphatide determination' }
    ],
    faqs: [
      {
        question: 'Why choose Rice Bran Lecithin over Soy Lecithin?',
        answer: 'Rice Bran Lecithin is 100% non-GMO, allergen-free, and contains higher unsaponifiable matter (Oryzanol and Tocotrienols), offering clean-label superiority in bakery and cosmetics.'
      }
    ]
  },
  'rice-bran-fatty-acid': {
    slug: 'rice-bran-fatty-acid',
    title: 'Distilled Rice Bran Fatty Acid',
    shortName: 'Rice Bran Fatty Acid',
    desc: 'Distilled organic fatty acid distillate (70%–85% FFA) for soap, oleochemicals, and biofuels.',
    metaTitle: 'Distilled Rice Bran Fatty Acid',
    metaDesc: 'High-FFA organic fatty acid derivative (70-85% FFA) for soap manufacturing, oleochemicals, and industrial bio-diesel production.',
    directAnswer: 'Rice Bran Fatty Acid is a distilled organic fatty acid co-product recovered during the high-vacuum steam deodorization of crude rice bran oil. With 70%–85% Free Fatty Acids and over 99.5% Total Fatty Matter (TFM), it is a vital raw material for commercial soap manufacturing, oleochemical distillation, and bio-diesel production.',
    fullDesc: 'Free from mineral acids and extraneous impurities, our distilled semi-solid fatty acid provides superior saponification value, accelerating batch boiling times and reducing formulation costs for industrial soap and lubricant manufacturers.',
    image: '/rice_bran_fatty_acid_product.png',
    ogImageName: 'rice_bran_fatty_acid',
    category: 'Industrial Bio-Derivatives',
    features: ['Total Fatty Matter (99.5% Min)', 'Zero Mineral Acids', 'Superior Saponification Value (192–198)', 'Distilled Semi-Solid Form'],
    applications: ['Commercial Soap & Detergent Sourcing', 'Bio-Diesel Feedstock', 'Oleochemical Distillation', 'Industrial Lubricants & Resins'],
    specifications: [
      { parameter: 'Total Fatty Matter (% wt)', value: '99.5% Min' },
      { parameter: 'Free Fatty Acids (FFA as Oleic)', value: '70.0% – 85.0%' },
      { parameter: 'Acid Value (mg KOH/gm)', value: '180 – 185' },
      { parameter: 'Saponification Value (mg KOH/gm)', value: '192 – 198' },
      { parameter: 'Moisture & Impurities', value: '0.2% Max' },
      { parameter: 'Colour & Appearance', value: 'Light Brown Semi-Solid' }
    ],
    testingStandards: [
      { standard: 'IS 548 (Part 1)', parameter: 'Total fatty matter and acid value testing' }
    ],
    faqs: [
      {
        question: 'What is the Total Fatty Matter (TFM) of Rice Bran Fatty Acid?',
        answer: 'AB Udyog Rice Bran Fatty Acid guarantees a minimum of 99.5% Total Fatty Matter with zero mineral acids, optimizing soap boiling yields.'
      }
    ]
  },
  'spent-bleaching-earth': {
    slug: 'spent-bleaching-earth',
    title: 'Spent Bleaching Earth',
    shortName: 'Spent Earth',
    desc: 'Eco-friendly clay residue enriched with residual oil for cement kiln fuel and brick manufacturing.',
    metaTitle: 'Eco-Friendly Spent Bleaching Earth',
    metaDesc: 'Residual eco-friendly bleaching clay by-product ideal for brick kilns, cement blending, and industrial auxiliary boiler fuel.',
    directAnswer: 'Spent Bleaching Earth (SBE) is an activated bentonite clay residue generated during the decolorization stage of crude rice bran oil refining. Containing 20% absorbed vegetable oil, it functions as a high-calorific auxiliary fuel for cement rotary kilns and a binding additive for clay building bricks.',
    fullDesc: 'This circular eco-byproduct provides substantial calorific value from retained natural vegetable oil, making it an efficient alternative fuel source that reduces fossil coal dependency in industrial rotary kilns.',
    image: '/spent_bleaching_earth_product.png',
    ogImageName: 'spent_bleaching_earth',
    category: 'Industrial Bio-Derivatives',
    features: ['20% Residual Oil Content', 'High Calorific Eco-Fuel', 'Zero Waste Circular Derivative', 'Landfill Safe & Soil Enriched'],
    applications: ['Cement Kiln Auxiliary Fuel', 'Industrial Boiler Energy Sourcing', 'Clay Brick Manufacturing', 'Agricultural Soil Conditioning'],
    specifications: [
      { parameter: 'Moisture Content', value: '10.0% Max' },
      { parameter: 'Residual Oil Content', value: '20.0% Min' },
      { parameter: 'Physical Texture', value: 'Fine Clay Powder / Granules' },
      { parameter: 'Environmental Safety', value: 'Safe for landfills, cement manufacturing, or boiler fuel' },
      { parameter: 'Calorific Value', value: 'High energy value from retained vegetable oil' }
    ],
    testingStandards: [
      { standard: 'IS 1448', parameter: 'Calorific value and residual moisture testing' }
    ],
    faqs: [
      {
        question: 'How is Spent Bleaching Earth used in cement manufacturing?',
        answer: 'Due to its 20% residual vegetable oil content, Spent Bleaching Earth is fed into cement rotary kilns as an auxiliary calorific energy source, reducing fossil coal consumption.'
      }
    ]
  }
};

// Aliases for alternate slug routes
PRODUCTS['fatty-acid'] = PRODUCTS['rice-bran-fatty-acid'];
PRODUCTS['fatty-acids'] = PRODUCTS['rice-bran-fatty-acid'];
PRODUCTS['spent-earth'] = PRODUCTS['spent-bleaching-earth'];
PRODUCTS['fatty-acids-spent-earth'] = PRODUCTS['rice-bran-fatty-acid'];

export function getAllProducts(): ProductItem[] {
  return Object.values(PRODUCTS).filter((p, index, self) => 
    index === self.findIndex((t) => t.slug === p.slug)
  );
}

export function getAllProductSlugs(): string[] {
  return Object.keys(PRODUCTS);
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS[slug];
}
