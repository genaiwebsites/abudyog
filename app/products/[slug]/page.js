"use client";
import Image from 'next/image';
import React, { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, ShieldCheck, FileText, Settings, Droplet, HelpCircle, Layers } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const productData = {
  'ab-health': {
    title: 'AB Health Gamma Oryzanol',
    shortName: 'AB Health',
    desc: 'Concentrated Gamma Oryzanol nutraceutical supplements.',
    fullDesc: 'AB Health is our B2C wellness division product line, offering concentrated phytosterols and Gamma Oryzanol lipids extracted directly from fresh rice bran. Processed under strict WHO-GMP standards at our Kolkata complex, these active bio-nutrients support cardiovascular health, metabolic protection, and cell recovery.',
    image: '/ab_health_product.png',
    features: ['Cholesterol Management', 'Powerful Antioxidant', 'Endocrine Support', '100% Non-GMO Base'],
    applications: ['Daily Wellness Capsule', 'Cardiovascular Support', 'Oxidative Stress Reduction', 'Sports Nutrition Recovery'],
    specifications: [
      { parameter: 'Active Ingredient', value: 'Gamma Oryzanol (98.5% Min)' },
      { parameter: 'Physical Form', value: 'Fine Crystalline Powder / Veg Capsules' },
      { parameter: 'Sourcing Base', value: 'Oryza Sativa (Native Rice Bran)' },
      { parameter: 'Heavy Metals', value: 'Complies with pharmacopoeia (Less than 10 PPM)' },
      { parameter: 'Moisture Content', value: '0.5% Max' }
    ]
  },
  'de-oiled-rice-bran': {
    title: 'De-Oiled Rice Bran (DORB)',
    shortName: 'AB DORB',
    desc: 'High-protein, low-fat animal feed foundation.',
    fullDesc: 'After crude oil has been extracted from the hard outer brown layer of rice after chaff (rice husk), De-Oiled Rice Bran (DORB) is obtained. DORB is widely used in the manufacture of poultry feed, cattle feed, and fish feed, as well as industrial applications like sodium silicate, silica gel, and insulation bricks. We market it under three premium sub-brands: Magik, ABU Platinum, and ABU Premium.',
    image: '/abu_dorb_combo.svg',
    features: ['High Protein Content', 'Optimized Fiber Grades', 'Excellent Digestibility', 'Rich in Vitamins & Minerals'],
    applications: ['Aquaculture (Fish & Shrimp)', 'Poultry Feed Sourcing', 'Cattle & Swine Feed', 'Industrial Silica & Bricks'],
    grades: [
      {
        name: 'Grade 1 (Premium)',
        specs: [
          { parameter: 'Moisture', value: '10.0% – 12.0%' },
          { parameter: 'Protein', value: 'Min 16.0%' },
          { parameter: 'Fibre', value: 'Max 14.0%' },
          { parameter: 'Sand & Silica', value: 'Max 5.0%' },
          { parameter: 'Form', value: 'Powder and Pellets' }
        ]
      },
      {
        name: 'Grade 2 (Standard)',
        specs: [
          { parameter: 'Moisture', value: '10.0% – 12.0%' },
          { parameter: 'Protein', value: '15.0% – 18.0%' },
          { parameter: 'Fibre', value: '16.0% – 18.0%' },
          { parameter: 'Sand & Silica', value: 'Max 5.0%' },
          { parameter: 'Form', value: 'Powder and Pellets' }
        ]
      },
      {
        name: 'Grade 3 (Utility)',
        specs: [
          { parameter: 'Moisture', value: '10.0% – 12.0%' },
          { parameter: 'Protein', value: '15.0% – 18.0%' },
          { parameter: 'Fibre', value: '18.0% – 20.0%' },
          { parameter: 'Sand & Silica', value: 'Max 5.0%' },
          { parameter: 'Form', value: 'Powder and Pellets' }
        ]
      }
    ]
  },
  'rice-bran-wax': {
    title: 'Rice Bran Wax',
    shortName: 'Bran Wax',
    desc: 'Hard, crystalline natural vegetable wax.',
    fullDesc: 'Rice Bran Wax is a by-product of rice bran oil production. It is a naturally hard, crystalline vegetable wax. Crude rice bran oil is first gently heated and then cooled until the waxy fraction solidifies, allowing it to be filtered out using vegetable ethanol. Widely utilized in cosmetics, skincare, and hair care, formulators view it as an excellent thickener, binder, plasticizer, and gelling agent that restores moisture, softens hair, and provides a protective skin-conditioning barrier.',
    image: '/rice_bran_wax.png',
    features: ['High Melting Point (76-82°C)', 'Non-sticky & Hard', 'Excellent Binding Agent', 'Restores Moisture & Softness'],
    applications: ['Cosmetics & Lipsticks', 'Skincare & Conditioning', 'Hair Gels & Softeners', 'Fruit Coatings & Polishes'],
    specifications: [
      { parameter: 'Free Fatty Acids (FFA)', value: '7.0% Max' },
      { parameter: 'Iodine Value (IV)', value: '7.8 Max' },
      { parameter: 'Melting Point (MP)', value: '76°C' },
      { parameter: 'Colour & Appearance', value: 'Yellowish Brown' },
      { parameter: 'Acid Insoluble Substances (AIS)', value: '48% Max' },
      { parameter: 'Physical Texture', value: 'Solid' }
    ]
  },
  'rice-bran-gums': {
    title: 'Rice Bran Gums',
    shortName: 'Bran Gums',
    desc: 'Natural emulsifier derived during oil degumming.',
    fullDesc: 'Rice Bran Gums consist of complex phospholipids and glycolipids recovered during the early hydration and degumming stages of vegetable oil refining. Widely used as a natural emulsifying, stabilizing, and binding agent, they are essential for feed binders, industrial emulsions, and textile sizing.',
    image: '/quality_lab.png',
    features: ['Natural Emulsification', 'High Viscosity Binder', 'Active Phosphatides', 'Stabilizing Agent'],
    applications: ['Animal Feed Binder', 'Industrial Emulsions', 'Textile Sizing', 'Leather Processing'],
    specifications: [
      { parameter: 'Free Fatty Acids (FFA)', value: '7.0% Max' },
      { parameter: 'Oil Content', value: '10.0% - 15.0%' },
      { parameter: 'Iodine Value', value: '75 - 80' },
      { parameter: 'Insoluble Matter', value: '55.0% Max' },
      { parameter: 'Acid Value', value: '40.0% Max' },
      { parameter: 'Saponification Value', value: '82.0%' }
    ]
  },
  'rice-bran-lecithin': {
    title: 'Rice Bran Lecithin',
    shortName: 'Lecithin',
    desc: 'Premium natural emulsifier and antioxidant.',
    fullDesc: 'Rice Bran Lecithin exhibits an excellent, well-balanced fatty acid profile and contains key micronutrients and natural antioxidants. It serves as a premium, appealing alternative for manufacturers seeking non-genetically modified (non-GMO) lecithin over soybean and sunflower alternatives. Highly valuable for cosmetic, nutraceutical, and personal care formulations due to its high unsaponifiable matter.',
    image: '/rice_bran_lecithin.png',
    features: ['Non-GMO Alternative', 'Micronutrient Rich', 'Excellent Emulsifier', 'High Unsaponifiables'],
    applications: ['Bakery & Confectionery', 'Chocolate Manufacturing', 'Nutraceuticals', 'Personal Care & Cosmetics'],
    specifications: [
      { parameter: 'Free Fatty Acids (FFA)', value: '25.0% Max' },
      { parameter: 'Moisture, Impurities & Volatiles (MIV)', value: '1.0% Max' },
      { parameter: 'Colour', value: 'Brown' },
      { parameter: 'Acid Value', value: '50' }
    ]
  },
  'fatty-acids-spent-earth': {
    title: 'Fatty Acids & Spent Earth',
    shortName: 'Industrial Derivatives',
    desc: 'Eco-friendly derivatives for industrial use.',
    fullDesc: 'Our physical steam refining and bleaching processes yield valuable industrial-grade circular derivatives. Rice Bran Fatty Acid is a distilled semi-solid distillate widely used in soaps and bio-diesel. Spent Bleaching Earth is the safe clay residue from the activated earth decolorization step, widely reused as fuel in boilers, cement manufacturing, and soil conditioners.',
    image: '/refinery_plant.png',
    features: ['High Fatty Matter', 'Zero Waste Circularity', 'Eco-Safe Disposal', 'Alternative Boiler Fuel'],
    applications: ['Soap Manufacturing', 'Bio-Diesel Production', 'Cement Manufacturing', 'Boiler Fuel & Soil Conditioning'],
    subproducts: [
      {
        name: 'Rice Bran Fatty Acid',
        specs: [
          { parameter: 'Colour & Appearance', value: 'White and semi-solid' },
          { parameter: 'Acid Value (mg KOH/gm)', value: '180 - 185' },
          { parameter: 'Saponification Value (mg KOH/gm)', value: '192 – 198' },
          { parameter: 'Moisture & Impurities (% wt)', value: '0.2 Max' },
          { parameter: 'Total Fatty Matter (% wt)', value: '99.5 Max' },
          { parameter: 'Other Impurities', value: 'Free from mineral acids and extraneous matter' }
        ]
      },
      {
        name: 'Rice Bran Spent Earth',
        specs: [
          { parameter: 'Moisture', value: '10.0%' },
          { parameter: 'Oil Content', value: '20.0%' },
          { parameter: 'Properties', value: 'Safe for landfills, cement manufacturing, or as a fuel in boilers' }
        ]
      }
    ]
  }
};

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

  return (
    <>
      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: `url('${product.image}')`, opacity: 0.25 }}></div>
        <div className="hero-accent"></div>
        <div className="hero-content" style={{ textAlign: 'center', margin: '0 auto' }}>
          <div className="hero-eyebrow" style={{ justifyContent: 'center' }}>
            <span>Commercial Derivative</span>
          </div>
          <h1 className="hero-title" style={{ margin: '0 auto' }}>
            <em>{product.title}</em>
          </h1>
          <p className="hero-subtitle" style={{ margin: '20px auto 0 auto' }}>
            {product.desc}
          </p>
        </div>
      </section>

      {/* ══ PRODUCT DETAILS ══ */}
      <section style={{ background: 'var(--cream)', padding: '80px 8%' }}>
        <div style={{ marginBottom: '40px' }}>
          <Link href="/products" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', fontSize: '11px', borderColor: 'rgba(13, 43, 26, 0.15)' }}>
            <ArrowLeft size={14} aria-hidden="true" /> Back to All Products
          </Link>
        </div>

        <div className="about-grid">
          <div className="about-text reveal" style={{ paddingLeft: '0' }}>
            <span className="eyebrow-minimal">Product Overview</span>
            <h2 className="section-title">{product.shortName} <br/><em>Specifications</em></h2>
            <br />
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
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link href="/contact" className="btn-primary">Inquire Now</Link>
            </div>
          </div>
          
          <div className="about-img-wrap reveal">
            <div className="about-frame" style={{ borderColor: 'var(--gold)' }}></div>
            <Image className="about-img-main" src={product.image} alt={product.title} width={800} height={600} style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ══ B2B SPECIFICATIONS TABLES ══ */}
      <section style={{ background: 'var(--white)', padding: '80px 8%', borderTop: '1px solid var(--border)' }}>
        <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-header-center" style={{ marginBottom: '48px' }}>
            <span className="eyebrow-minimal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>B2B Quality Assurance</span>
            <h2 className="section-title">Technical <em>Specifications</em></h2>
            <p className="section-body" style={{ margin: '16px auto 0 auto', textAlign: 'center' }}>
              Verified laboratory parameters supporting bulk order formulation and industrial application compliance.
            </p>
          </div>

          {/* Standard specifications table */}
          {product.specifications && (
            <div className="spec-table-container">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Chemical / Physical Parameter</th>
                    <th>Standard Specification Limit</th>
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

          {/* Multi-Grade comparison tables (for DORB) */}
          {product.grades && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {product.grades.map((grade, idx) => (
                <div key={idx} className="spec-grade-block">
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: 'var(--green-deep)', marginBottom: '16px', borderBottom: '1px solid rgba(200, 153, 42, 0.2)', paddingBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Layers size={18} style={{ color: 'var(--gold)' }} aria-hidden="true" /> {grade.name}
                  </h3>
                  <div className="spec-table-container">
                    <table className="spec-table">
                      <thead>
                        <tr>
                          <th>Parameter</th>
                          <th>Specification Target</th>
                        </tr>
                      </thead>
                      <tbody>
                        {grade.specs.map((spec, i) => (
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

          {/* Multi-Subproduct comparison tables (for Fatty Acids / Spent Earth) */}
          {product.subproducts && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {product.subproducts.map((sub, idx) => (
                <div key={idx} className="spec-grade-block">
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: 'var(--green-deep)', marginBottom: '16px', borderBottom: '1px solid rgba(200, 153, 42, 0.2)', paddingBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Settings size={18} style={{ color: 'var(--gold)' }} aria-hidden="true" /> {sub.name}
                  </h3>
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

          <div style={{ marginTop: '40px', padding: '24px', background: 'var(--cream)', borderLeft: '3px solid var(--gold)', borderRadius: '0 4px 4px 0' }}>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 600, color: 'var(--green-deep)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Settings size={16} aria-hidden="true" /> Batch Certification (COA)
            </h4>
            <p className="section-body" style={{ margin: 0, fontSize: '13px' }}>
              We supply complete Certificates of Analysis (COA) and gas chromatography testing reports with every commercial shipment. Contact our sales department to request specific documentation or samples.
            </p>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <div className="cta-banner">
        <div className="cta-text">
          <h2>Partner With Us for<br />Premium Rice-Bran Products</h2>
          <p>Delivered globally with reliability, traceability, and scale.</p>
        </div>
        <div className="cta-action">
          <Link href="/contact" className="btn-dark">Contact Our Team</Link>
        </div>
      </div>
    </>
  );
}
