"use client";
import Image from 'next/image';
import React, { use, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, ShieldCheck, FileText, Settings, Droplet, HelpCircle, Layers, Download, ExternalLink, Award, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import CtaBanner from '@/components/CtaBanner';
import JsonLd from '@/components/JsonLd';

const productData = {
  'ab-health': {
    title: 'AB Health Edible Oils',
    shortName: 'AB Health',
    desc: 'Physically refined Rice Bran Oil & Soyabean Oil fortified with Vitamins A & D.',
    directAnswer: 'AB Health Rice Bran Oil is a 100% physically refined cooking oil produced via chemical-free steam distillation without caustic soda washing. Fortified with Vitamins A & D and naturally enriched with over 10,000 PPM Gamma Oryzanol, it features a high 232°C (450°F) smoke point for heart-smart daily cooking and commercial frying.',
    fullDesc: 'Crafted for modern health-conscious households and commercial culinary operations, our refining process preserves vital micro-nutrients including Tocopherols and Tocotrienols. Available in consumer retail packs (1L pouches, 5L jars, 15L tins) as well as bulk institutional containers.',
    image: '/ab-health-edible-oils-brand-showcase-kolkata.svg',
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
    title: 'De-Oiled Rice Bran (DORB)',
    shortName: 'AB DORB',
    desc: 'High-protein, low-fat animal feed foundation.',
    externalLink: '/products/magik-dorb',
    externalLinkLabel: 'Explore Magik DORB',
    directAnswer: 'De-Oiled Rice Bran (DORB) is the protein-dense agricultural derivative obtained after solvent extraction removes crude oil from raw rice bran meal. Containing 15.0%–16.5% crude protein, under 1.5% residual fat, and high digestible fiber, DORB is an essential raw material for aquaculture, poultry, and dairy cattle feeds.',
    fullDesc: 'Produced in our 300 TPD continuous extraction complex in Uchalan, West Bengal, our DORB undergoes multi-stage screening to guarantee low sand and silica (<5.0%) and high feed conversion efficiency. We supply Grade 1, Grade 2, and specialized pelletized grades for commercial feed millers across India and export corridors.',
    image: '/abu_dorb_combo.svg',
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
    title: 'Magik DORB Super Fine Animal Feed',
    shortName: 'Magik DORB',
    desc: 'Super fine animal feed grade de-oiled rice bran with 16% Min crude protein.',
    directAnswer: 'Magik DORB is AB Udyog’s flagship ultra-fine de-oiled rice bran engineered specifically for high-efficiency aquaculture, poultry, and dairy feed millers. It delivers a guaranteed minimum of 16.0% crude protein, low silica (<5.0%), and optimized particle size for maximum nutrient absorption.',
    fullDesc: 'Micro-milled and conditioned to provide uniform nutritional density and rapid water stability in aquaculture pellets. Sourced from the fertile West Bengal paddy belt and processed in our continuous solvent extraction facility under strict NABL quality testing.',
    image: '/abu_dorb_combo.svg',
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
    title: 'Refined Rice Bran Wax',
    shortName: 'Rice Bran Wax',
    desc: 'Hard, crystalline natural vegetable wax with high melting point (76°C–82°C).',
    directAnswer: 'Refined Rice Bran Wax (CAS 8016-60-2) is a premium, hard, high-melting-point (76°C–82°C) natural vegetable wax crystallized during the dewaxing stage of rice bran oil refining. It serves as a 100% plant-based, non-GMO alternative to Carnauba wax for cosmetics, pharmaceutical tablet coatings, fruit coatings, and polishes.',
    fullDesc: 'Extracted via controlled winterization and selective crystallization, this high-ester vegetable wax delivers exceptional hardness, gloss, and thermal stability. Widely formulated in lipsticks, protective barrier creams, tablet coatings, and water-repellent industrial paper treatments.',
    image: '/rice_bran_wax_product.png',
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
    title: 'Stabilized Rice Bran Gums',
    shortName: 'Rice Bran Gums',
    desc: 'Natural phosphatide emulsifier derived during physical refining.',
    directAnswer: 'Rice Bran Gums are natural phospholipid and glycolipid complexes isolated during the hydration and degumming stage of crude rice bran oil processing. They act as high-viscosity binding agents and stabilizers for animal feed formulations, industrial water-in-oil emulsions, and textile sizing.',
    fullDesc: 'Recovered during the early hydration stages of refining, these gums contain concentrated phosphatides that enhance structural pellet integrity in aquaculture feeds and provide effective phase stabilization in industrial lubricants and emulsions.',
    image: '/rice_bran_gums_product.png',
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
    title: 'Natural Rice Bran Lecithin',
    shortName: 'Rice Bran Lecithin',
    desc: 'Non-GMO natural bio-emulsifier and antioxidant for food and cosmetics.',
    directAnswer: 'Rice Bran Lecithin is an amber liquid bio-emulsifier derived from non-GMO rice bran oil. Rich in phosphatides, phytosterols, and natural antioxidants with high unsaponifiable matter, it provides a clean-label, hypoallergenic alternative to soy and sunflower lecithin for bakery, chocolate, and nutraceutical applications.',
    fullDesc: 'Exhibiting an optimal balance of essential fatty acids and natural Tocopherols, our non-GMO lecithin improves dough elasticity, moisture retention, and shelf life in confectionery and nutraceutical softgels without synthetic additives.',
    image: '/rice_bran_lecithin_product.png',
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
    title: 'Distilled Rice Bran Fatty Acid',
    shortName: 'Rice Bran Fatty Acid',
    desc: 'Distilled organic fatty acid distillate (70%–85% FFA) for soap, oleochemicals, and biofuels.',
    directAnswer: 'Rice Bran Fatty Acid is a distilled organic fatty acid co-product recovered during the high-vacuum steam deodorization of crude rice bran oil. With 70%–85% Free Fatty Acids and over 99.5% Total Fatty Matter (TFM), it is a vital raw material for commercial soap manufacturing, oleochemical distillation, and bio-diesel production.',
    fullDesc: 'Free from mineral acids and extraneous impurities, our distilled semi-solid fatty acid provides superior saponification value, accelerating batch boiling times and reducing formulation costs for industrial soap and lubricant manufacturers.',
    image: '/rice_bran_fatty_acid_product.png',
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
    title: 'Spent Bleaching Earth',
    shortName: 'Spent Earth',
    desc: 'Eco-friendly clay residue enriched with residual oil for cement kiln fuel and brick manufacturing.',
    directAnswer: 'Spent Bleaching Earth (SBE) is an activated bentonite clay residue generated during the decolorization stage of crude rice bran oil refining. Containing 20% absorbed vegetable oil, it functions as a high-calorific auxiliary fuel for cement rotary kilns and a binding additive for clay building bricks.',
    fullDesc: 'This circular eco-byproduct provides substantial calorific value from retained natural vegetable oil, making it an efficient alternative fuel source that reduces fossil coal dependency in industrial rotary kilns.',
    image: '/spent_bleaching_earth_product.png',
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
productData['fatty-acid'] = productData['rice-bran-fatty-acid'];
productData['fatty-acids'] = productData['rice-bran-fatty-acid'];
productData['spent-earth'] = productData['spent-bleaching-earth'];
productData['fatty-acids-spent-earth'] = productData['rice-bran-fatty-acid'];

export default function ProductDetail({ params }) {
  const unwrappedParams = use(params);
  const { slug } = unwrappedParams;
  const product = productData[slug];

  useScrollReveal('.reveal', 0.1);

  if (!product) {
    return (
      <div style={{ padding: '150px 8%', textAlign: 'center', background: 'var(--cream)', minHeight: '60vh' }}>
        <h1 className="section-title">Product Not Found</h1>
        <Link href="/products" className="btn-primary" style={{ marginTop: '30px' }}>Back to Products</Link>
      </div>
    );
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: product.title, url: `/products/${slug}` }
  ];

  return (
    <>
      {/* ══ STRUCTURED DATA (JSON-LD) ══ */}
      <JsonLd
        type="Product"
        includeOrg={false}
        productData={{
          name: product.title,
          description: product.desc,
          image: product.image,
          url: `/products/${slug}`,
        }}
        breadcrumbs={breadcrumbs}
        faqs={product.faqs}
      />

      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: `url('${product.image}')`, opacity: 0.25 }}></div>
        <div className="hero-content">
          <p className="hero-eyebrow">COMMERCIAL PRODUCT SPECIFICATION</p>
          <h1 className="hero-title">{product.title}</h1>
          <p className="hero-subtitle">{product.desc}</p>
        </div>
      </section>

      {/* ══ PRODUCT DETAILS & SPECS ══ */}
      <section style={{ background: 'var(--cream)', padding: '80px 8%' }}>
        <div style={{ marginBottom: '40px' }}>
          <Link href="/products" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', fontSize: '11px', borderColor: 'rgba(13, 43, 26, 0.15)' }}>
            <ArrowLeft size={14} aria-hidden="true" /> Back to All Products
          </Link>
        </div>

        <div className="about-grid">
          <div className="about-text reveal" style={{ paddingLeft: '0' }}>
            <h2 className="section-title">{product.shortName} Overview</h2>
            <br />

            {/* ══ SEAMLESS EDITORIAL LEAD PARAGRAPH ══ */}
            {product.directAnswer && (
              <p className="section-lead" style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'var(--green-deep)',
                fontWeight: 500,
                marginBottom: '16px'
              }}>
                {product.directAnswer}
              </p>
            )}

            <p className="section-body">
              {product.fullDesc}
            </p>
            <br />
            
            <div className="responsive-two-col" style={{ marginTop: '20px' }}>
              <div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: 'var(--green-deep)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={20} style={{ color: 'var(--gold)' }} aria-hidden="true" /> Key Features
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {product.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '14px', marginTop: '2px' }}>✦</span>
                      <span className="section-body" style={{ margin: 0, fontSize: '14px' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: 'var(--green-deep)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Droplet size={20} style={{ color: 'var(--gold)' }} aria-hidden="true" /> Applications
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {product.applications.map((app, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '14px', marginTop: '2px' }}>◎</span>
                      <span className="section-body" style={{ margin: 0, fontSize: '14px' }}>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <br /><br />
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              {product.externalLink ? (
                <>
                  {product.externalLink.startsWith('/') ? (
                    <Link
                      href={product.externalLink}
                      className="btn-primary"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '12px 18px', fontSize: '11px', whiteSpace: 'nowrap' }}
                    >
                      {product.externalLinkLabel || 'Explore Magik DORB'}
                    </Link>
                  ) : (
                    <a
                      href={product.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '12px 18px', fontSize: '11px', whiteSpace: 'nowrap' }}
                    >
                      {product.externalLinkLabel || 'Explore Magik DORB'} <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}
                </>
              ) : null}
              <Link 
                href={`/contact?ref=${slug}`} 
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '12px 18px', fontSize: '11px', whiteSpace: 'nowrap' }}
              >
                Request Commercial Quote
              </Link>
            </div>
          </div>

          <div className="about-img reveal" style={{ position: 'relative', width: '100%', minHeight: '380px' }}>
            <Image
              src={product.image}
              alt={`${product.title} Commercial Specification - AB Udyog`}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>

        {/* ══ TECHNICAL SPECIFICATIONS TABLE & INTEGRATED QUALITY FOOTER ══ */}
        <div style={{ marginTop: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p className="section-eyebrow">LABORATORY CERTIFIED PARAMETERS</p>
            <h3 className="section-title">Technical Specification Sheet</h3>
          </div>

          {product.specifications && (
            <div className="spec-table-container">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Chemical &amp; Physical Parameter</th>
                    <th>Certified Specification Value</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr key={i}>
                      <td className="spec-param">{spec.parameter}</td>
                      <td className="spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* If product has multi-grade tables (e.g. DORB) */}
          {product.grades && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {product.grades.map((sub, idx) => (
                <div key={idx} style={{ background: '#fff', padding: '24px', border: '1px solid var(--color-border)' }}>
                  <h4 style={{ fontFamily: 'inherit', fontSize: '15px', fontWeight: 700, color: 'var(--green-deep)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Layers size={16} style={{ color: 'var(--gold)' }} aria-hidden="true" /> {sub.name}
                  </h4>
                  <div className="spec-table-container">
                    <table className="spec-table">
                      <thead>
                        <tr>
                          <th>Parameter</th>
                          <th>Specification Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sub.specs.map((spec, i) => (
                          <tr key={i}>
                            <td className="spec-param">{spec.parameter}</td>
                            <td className="spec-value">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ══ UNIFIED QUALITY & TESTING ASSURANCE STRIP ══ */}
          <div style={{
            marginTop: '24px',
            padding: '20px 24px',
            background: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid rgba(13, 43, 26, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 320px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(200, 153, 42, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={18} style={{ color: 'var(--gold)' }} aria-hidden="true" />
              </div>
              <div>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--green-deep)', display: 'block' }}>
                  In-House NABL Accredited QA &amp; Batch COA
                </span>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--muted)', lineHeight: 1.4 }}>
                  Full Certificate of Analysis &amp; gas chromatography testing reports accompany every commercial dispatch.
                </p>
              </div>
            </div>

            {product.testingStandards && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                {product.testingStandards.map((std, i) => (
                  <span key={i} style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    padding: '6px 12px',
                    background: '#fff',
                    border: '1px solid rgba(13, 43, 26, 0.12)',
                    color: 'var(--green-deep)',
                  }}>
                    {std.standard}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* ══ REFINED MINIMALIST ACCORDION FAQ ══ */}
          {product.faqs && product.faqs.length > 0 && (
            <div style={{ marginTop: '56px', borderTop: '1px solid rgba(13, 43, 26, 0.1)', paddingTop: '40px' }}>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <span style={{ color: 'var(--gold-dark)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  PRODUCT INTELLIGENCE
                </span>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: 'var(--green-deep)', margin: 0 }}>
                  Frequently Asked Questions
                </h4>
              </div>

              <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {product.faqs.map((faq, i) => (
                  <details
                    key={i}
                    style={{
                      background: '#fff',
                      border: '1px solid rgba(13, 43, 26, 0.1)',
                      padding: '16px 20px',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s',
                    }}
                  >
                    <summary style={{
                      fontSize: '14.5px',
                      fontWeight: 600,
                      color: 'var(--green-deep)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      userSelect: 'none',
                      listStyle: 'none',
                    }}>
                      <span>{faq.question}</span>
                      <span style={{ color: 'var(--gold-dark)', fontSize: '16px', fontWeight: 400, marginLeft: '12px' }}>+</span>
                    </summary>
                    <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(13, 43, 26, 0.06)' }}>
                      <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <CtaBanner 
        title="Request Technical Specifications & Samples"
        subtitle="Get full Certificate of Analysis (COA) sheets and sample containers for your industry."
        btnText="Request Sample"
        btnLink={`/contact?ref=${slug}`}
      />
    </>
  );
}
