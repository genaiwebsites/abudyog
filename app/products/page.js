"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Sparkles, FlaskConical, Microscope, Fuel } from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';
import ProductsHeroSlider from '@/components/ProductsHeroSlider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Products() {
  useScrollReveal('.reveal', 0.1);

  return (
    <div>
      {/* ══ HERO BANNER CAROUSEL ══ */}
      <ProductsHeroSlider />

      {/* ══ 01. FLAGSHIP CONSUMER EDIBLE OILS — JEEVAN REKHA ══ */}
      <section style={{ background: 'var(--cream)', padding: '80px 8%' }}>
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <Image 
              className="about-img-main" 
              src="/jr_oil_combo.png" 
              alt="Jeevan Rekha Rice Bran & Mustard Oil" 
              width={800} 
              height={600} 
              style={{ objectFit: 'cover', borderRadius: 0 }} 
            />
          </div>
          <div className="about-text reveal">
            <span style={{ color: 'var(--gold-dark)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Flagship Consumer Edible Oils
            </span>
            <h2 className="section-title">Jeevan Rekha</h2>
            <br />
            <p className="section-body">
              Physically refined Rice Bran Oil and cold-pressed Kachhi Ghani Mustard Oil — crafted for authentic flavor, purity, and daily health. High in natural Oryzanol and essential fatty acids, physically refined without harsh chemicals for uncompromised family nutrition.
            </p>
            <div className="about-tags" style={{ marginTop: '24px' }}>
              <span className="about-tag">Kachhi Ghani Mustard</span>
              <span className="about-tag">Physically Refined RBO</span>
              <span className="about-tag">Zero Trans Fat</span>
            </div>
            <br /><br />
            <Link href="https://jeevanrekhafoods.com/products" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'var(--green-deep)', color: 'var(--white)' }}>
              View Jeevan Rekha Products
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 02. TRADITIONAL CONSUMER FOODS — AB HEALTH ══ */}
      <section style={{ background: '#F5E9C6', padding: '80px 8%', borderTop: '1px solid rgba(212, 175, 55, 0.35)', borderBottom: '1px solid rgba(212, 175, 55, 0.35)' }}>
        <div className="about-grid">
          <div className="about-text reveal" style={{ paddingLeft: 0 }}>
            <span style={{ color: '#745c00', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Traditional Consumer Foods
            </span>
            <h2 className="section-title" style={{ color: 'var(--green-deep)' }}>AB Health Edible Oils</h2>
            <br />
            <p className="section-body" style={{ color: '#403B31' }}>
              Purity-first consumer edible oils — physically refined Rice Bran Oil and refined Soyabean Oil — fortified with Vitamins A &amp; D and enriched with natural Oryzanol. Formulated for high-temperature stability, cholesterol control, and heart-smart daily cooking performance.
            </p>
            <div className="about-tags" style={{ marginTop: '24px' }}>
              <span className="about-tag" style={{ borderColor: 'rgba(116,92,0,0.3)', color: '#745c00', background: 'rgba(255,255,255,0.6)' }}>Vit. A &amp; D Fortified</span>
              <span className="about-tag" style={{ borderColor: 'rgba(116,92,0,0.3)', color: '#745c00', background: 'rgba(255,255,255,0.6)' }}>Natural Oryzanol</span>
              <span className="about-tag" style={{ borderColor: 'rgba(116,92,0,0.3)', color: '#745c00', background: 'rgba(255,255,255,0.6)' }}>Zero Trans Fat</span>
              <span className="about-tag" style={{ borderColor: 'rgba(116,92,0,0.3)', color: '#745c00', background: 'rgba(255,255,255,0.6)' }}>FSSAI &amp; FSSC 22000</span>
            </div>
            <br /><br />
            <Link href="/products/ab-health" className="btn-primary" style={{ background: 'var(--green-deep)', color: 'var(--white)' }}>
              Explore AB Health Range
            </Link>
          </div>
          <div className="about-img-wrap reveal">
            <Image 
              className="about-img-main" 
              src="/ab-health-edible-oils-brand-showcase-kolkata.svg" 
              alt="AB Health Refined Edible Oils — Soyabean & Rice Bran Oil" 
              width={800} 
              height={600} 
              style={{ objectFit: 'cover', borderRadius: 0 }} 
            />
          </div>
        </div>
      </section>

      {/* ══ 03. ANIMAL NUTRITION — AB DORB ══ */}
      <section className="products-section bg-green-deep" style={{ padding: '80px 8%' }}>
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <Image className="about-img-main" src="/abu_dorb_combo.svg" alt="AB DORB Animal Feed Nutrition Range" width={800} height={600} style={{ objectFit: 'cover', borderRadius: 0 }} />
          </div>
          <div className="about-text reveal">
            <span style={{ color: 'var(--gold-light)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              High-Protein Animal Feed
            </span>
            <h2 className="section-title text-white">AB DORB Nutrition</h2>
            <br />
            <p className="section-body" style={{ color: 'rgba(255,255,255,0.85)' }}>
              High-protein de-oiled rice bran serving as the foundational nutrition block for aquaculture, poultry, and cattle industries. Marketed under the Magik, ABU Platinum, and ABU Premium sub-brands, our DORB provides essential amino acids and energy for superior feed conversion ratios in livestock.
            </p>
            <div className="about-tags" style={{ marginTop: '24px' }}>
              <span className="about-tag" style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'var(--gold-light)', background: 'rgba(255,255,255,0.05)' }}>Aquaculture</span>
              <span className="about-tag" style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'var(--gold-light)', background: 'rgba(255,255,255,0.05)' }}>Poultry Feed</span>
              <span className="about-tag" style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'var(--gold-light)', background: 'rgba(255,255,255,0.05)' }}>Cattle &amp; Swine</span>
            </div>
            <br /><br />
            <Link href="/products/de-oiled-rice-bran" className="btn-primary">
              Explore AB DORB Feed
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 04. BYPRODUCTS BENTO — INDUSTRIAL DERIVATIVES ══ */}
      <section className="bento-section" style={{ background: 'var(--cream)', padding: '80px 8%' }}>
        <div className="section-header-center reveal" style={{ marginBottom: '40px' }}>
          <span style={{ color: 'var(--gold-dark)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            Industrial Circular Economy
          </span>
          <h2 className="section-title">Commercial-Grade Bran Derivatives</h2>
          <p className="section-body" style={{ margin: '12px auto 0', textAlign: 'center' }}>
            High-purity bio-derivatives recovered during vegetable oil processing for cosmetics, food, pharma, and biofuel industries.
          </p>
        </div>
        <div className="bento-grid" style={{ marginTop: '36px' }}>
          <div className="bento-card featured reveal grid-span-2">
            <div className="bento-icon-container">
              <Sparkles size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">Rice Bran Wax</div>
            <p className="bento-body">Premium natural wax used in cosmetics, polishes, and food applications — offering excellent binding and structural properties.</p>
            <Link href="/products/rice-bran-wax" className="btn-light-ghost" style={{ marginTop: '24px' }}>View Product</Link>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon-container">
              <FlaskConical size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">Rice Bran Gums</div>
            <p className="bento-body">Versatile emulsifying and stabilizing agent widely utilized in the food and pharmaceutical industries.</p>
            <Link href="/products/rice-bran-gums" className="btn-light-ghost" style={{ marginTop: '24px' }}>View Product</Link>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon-container">
              <Microscope size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">Rice Bran Lecithin</div>
            <p className="bento-body">Natural emulsifier and antioxidant ideal for bakery, confectionery, and nutraceutical formulations.</p>
            <Link href="/products/rice-bran-lecithin" className="btn-light-ghost" style={{ marginTop: '24px' }}>View Product</Link>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon-container">
              <Fuel size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">Rice Bran Fatty Acid</div>
            <p className="bento-body">High-purity distilled fatty acid distillate for soap manufacturing, oleochemicals, and bio-diesel feedstock.</p>
            <Link href="/products/rice-bran-fatty-acid" className="btn-light-ghost" style={{ marginTop: '24px' }}>View Product</Link>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon-container">
              <Sparkles size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">Spent Bleaching Earth</div>
            <p className="bento-body">Eco-friendly clay residue enriched with 20% residual oil for high-calorific cement kiln fuel and soil conditioning.</p>
            <Link href="/products/spent-bleaching-earth" className="btn-light-ghost" style={{ marginTop: '24px' }}>View Product</Link>
          </div>
        </div>
      </section>

      {/* ══ 05. CTA BANNER ══ */}
      <CtaBanner 
        title="Partner With Us for Premium Rice-Bran Products"
        subtitle="Delivered globally with reliability, traceability, and scale."
        btnText="Contact Our Team"
        btnLink="/contact"
      />
    </div>
  );
}

