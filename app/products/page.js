"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Layers, Settings, Activity, Recycle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ProductsHub() {
  useScrollReveal('.reveal', 0.1);

  return (
    <>
      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: "url('https://2025.abudyog.in/wp-content/uploads/2025/11/RAJA8723-scaled.jpg')", opacity: 0.25 }}></div>
        <div className="hero-accent"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>Our Portfolio</span>
          </div>
          <h1 className="hero-title">
            From Field to Table,<br />
            <em>Purely Refined.</em>
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
            <div className="about-frame" style={{ borderColor: 'var(--gold)' }}></div>
            <Image className="about-img-main" src="/jr_oil_combo.png" alt="Jeevan Rekha Rice Bran & Mustard Oil" width={800} height={600} style={{ objectFit: 'cover' }} />
            <div className="about-img-badge" style={{ background: 'var(--green-deep)' }}>
              <div className="about-badge-num" style={{ color: 'var(--gold-light)' }}>10k</div>
              <div className="about-badge-label" style={{ color: 'var(--white)' }}>PPM<br/>Oryzanol</div>
            </div>
          </div>
          <div className="about-text reveal">
            <span className="eyebrow-minimal">B2C Retail Brand</span>
            <h2 className="section-title">Jeevan Rekha <em>Foods</em></h2>
            <br />
            <p className="section-body">
              Physically refined Rice Bran Oil and cold-pressed Kachhi Ghani Mustard Oil — crafted for purity, flavor, and healthier everyday living. High in natural Oryzanol and heart-healthy fats, Jeevan Rekha Rice Bran Oil is physically refined without the use of harsh chemicals, ensuring the retention of natural antioxidants.
            </p>
            <div className="about-tags">
              <span className="about-tag">Zero Trans Fat</span>
              <span className="about-tag">High Smoke Point</span>
              <span className="about-tag">Cold Pressed</span>
            </div>
            <br /><br />
            <Link href="/products/jeevan-rekha" className="btn-primary" style={{ background: 'var(--green-deep)', color: 'var(--white)' }}>View Jeevan Rekha Products</Link>
          </div>
        </div>
      </section>
 
      {/* ══ ANIMAL NUTRITION ══ */}
      <section className="products-section bg-green-deep">
        <div className="about-grid-reverse">
          <div className="about-img-wrap reveal">
            <div className="about-frame"></div>
            <Image className="about-img-main" src="/abu_dorb_combo.svg" alt="AB DORB" width={800} height={600} style={{ objectFit: 'cover' }} />
          </div>
          <div className="about-text reveal">
            <span className="eyebrow-minimal text-gold-light">B2B Animal Feed</span>
            <h2 className="section-title text-white">AB DORB <em>Nutrition</em></h2>
            <br />
            <p className="section-body" style={{ color: 'rgba(255,255,255,0.9)' }}>
              High-protein de-oiled rice bran serving as the foundational nutrition block for aquaculture, poultry, and cattle industries. Marketed under the Magik, ABU Platinum, and ABU Premium sub-brands, our DORB provides essential amino acids and energy for superior feed conversion ratios in livestock.
            </p>
            <div className="about-tags">
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
        <span className="eyebrow-large reveal">Industrial Derivatives</span>
        <h2 className="section-title reveal">Commercial-Grade<br /><em>Bran Derivatives</em></h2>
        <div className="bento-grid">
          <div className="bento-card featured reveal grid-span-2">
            <div className="bento-icon-container">
              <Layers size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">Rice Bran Wax</div>
            <p className="bento-body">Premium natural wax used in cosmetics, polishes, and food applications — offering excellent binding and structural properties.</p>
            <Link href="/products/rice-bran-wax" className="btn-light-ghost" style={{ marginTop: '24px' }}>View Product</Link>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon-container">
              <Settings size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">Rice Bran Gums</div>
            <p className="bento-body">Versatile emulsifying and stabilizing agent widely utilized in the food and pharmaceutical industries.</p>
            <Link href="/products/rice-bran-gums" className="btn-primary" style={{ marginTop: '24px', padding: '10px 20px' }}>View Product</Link>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon-container">
              <Activity size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">Rice Bran Lecithin</div>
            <p className="bento-body">Natural emulsifier and antioxidant ideal for bakery, confectionery, and nutraceutical formulations.</p>
            <Link href="/products/rice-bran-lecithin" className="btn-primary" style={{ marginTop: '24px', padding: '10px 20px' }}>View Product</Link>
          </div>
          <div className="bento-card reveal grid-span-2">
            <div className="bento-icon-container">
              <Recycle size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">Fatty Acids &amp; Spent Earth</div>
            <p className="bento-body">High-quality fatty acid extracts and eco-friendly spent earth for industrial reuse and biofuel production.</p>
            <Link href="/products/fatty-acids-spent-earth" className="btn-primary" style={{ marginTop: '24px', padding: '10px 20px' }}>View Product</Link>
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
