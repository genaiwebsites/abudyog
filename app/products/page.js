"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Sparkles, FlaskConical, Microscope, Fuel } from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Products() {
  useScrollReveal('.reveal', 0.1);

  return (
    <div>
      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: "url('/ab-udyog-plant-machinery-refinery.jpg')", opacity: 0.25 }}></div>
        <div className="hero-accent"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            From Field to Table, Purely Refined
          </h1>
          <p className="hero-subtitle">
            Three distinct product lines spanning edible oils, animal nutrition, and premium industrial derivatives. Explore the diverse applications of rice bran and mustard seeds.
          </p>
        </div>
      </section>

      {/* ══ CONSUMER FOODS ══ */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <Image className="about-img-main" src="/jr_oil_combo.png" alt="Jeevan Rekha Rice Bran & Mustard Oil" width={800} height={600} style={{ objectFit: 'cover' }} />
          </div>
          <div className="about-text reveal">
            <h2 className="section-title">Jeevan Rekha Foods</h2>
            <br />
            <p className="section-body">
              Physically refined Rice Bran Oil and cold-pressed Kachhi Ghani Mustard Oil — crafted for purity, flavor, and healthier everyday living. High in natural Oryzanol and heart-healthy fats, Jeevan Rekha Rice Bran Oil is physically refined without the use of harsh chemicals, ensuring the retention of natural antioxidants.
            </p>
            <div className="about-tags" style={{ marginTop: '24px' }}>
              <span className="about-tag">Zero Trans Fat</span>
              <span className="about-tag">High Smoke Point</span>
              <span className="about-tag">Cold Pressed</span>
            </div>
            <br /><br />
            <Link href="https://jeevanrekhafoods.com/products" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'var(--green-deep)', color: 'var(--white)' }}>View Jeevan Rekha Products</Link>
          </div>
        </div>
      </section>

      {/* ══ ANIMAL NUTRITION ══ */}
      <section className="products-section bg-green-deep">
        <div className="about-grid-reverse">
          <div className="about-img-wrap reveal">
            <Image className="about-img-main" src="/abu_dorb_combo.svg" alt="AB DORB" width={800} height={600} style={{ objectFit: 'cover' }} />
          </div>
          <div className="about-text reveal">
            <h2 className="section-title text-white">AB DORB Nutrition</h2>
            <br />
            <p className="section-body" style={{ color: 'rgba(255,255,255,0.9)' }}>
              High-protein de-oiled rice bran serving as the foundational nutrition block for aquaculture, poultry, and cattle industries. Marketed under the Magik, ABU Platinum, and ABU Premium sub-brands, our DORB provides essential amino acids and energy for superior feed conversion ratios in livestock.
            </p>
            <div className="about-tags" style={{ marginTop: '24px' }}>
              <span className="about-tag" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--gold-light)' }}>Aquaculture</span>
              <span className="about-tag" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--gold-light)' }}>Poultry</span>
              <span className="about-tag" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--gold-light)' }}>Cattle</span>
            </div>
            <br /><br />
            <Link href="/products/de-oiled-rice-bran" className="btn-primary">Explore AB DORB</Link>
          </div>
        </div>
      </section>

      {/* ══ BYPRODUCTS BENTO ══ */}
      <section className="bento-section">
        <h2 className="section-title reveal">Commercial-Grade Bran Derivatives</h2>
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
          <div className="bento-card reveal grid-span-2">
            <div className="bento-icon-container">
              <Fuel size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">Fatty Acids &amp; Spent Earth</div>
            <p className="bento-body">High-quality fatty acid extracts and eco-friendly spent earth for industrial reuse and biofuel production.</p>
            <Link href="/products/fatty-acids-spent-earth" className="btn-light-ghost" style={{ marginTop: '24px' }}>View Product</Link>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <CtaBanner 
        title="Partner With Us for Premium Rice-Bran Products"
        subtitle="Delivered globally with reliability, traceability, and scale."
        btnText="Contact Our Team"
        btnLink="/contact"
      />
    </div>
  );
}
