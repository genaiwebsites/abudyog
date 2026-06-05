"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function JeevanRekha() {
  useScrollReveal('.reveal', 0.1);

  return (
    <>
      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: "url('/healthy_cooking_bg_1780608449499.png')", opacity: 0.35 }}></div>
        <div className="hero-accent"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>B2C Retail Brand</span>
          </div>
          <h1 className="hero-title">
            Jeevan Rekha<br />
            <em>Foods.</em>
          </h1>
          <p className="hero-subtitle">
            Physically refined Rice Bran Oil and cold-pressed Kachhi Ghani Mustard Oil. Crafted for purity, flavor, and healthier everyday living.
          </p>
        </div>
      </section>

      {/* ══ RICE BRAN OIL ══ */}
      <section id="rice-bran-oil" style={{ background: 'var(--cream)', padding: '100px 8%' }}>
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <div className="about-frame" style={{ borderColor: 'var(--gold)' }}></div>
            <Image className="about-img-main" src="/premium_cooking_oil.png" alt="Jeevan Rekha Rice Bran Oil" width={800} height={600} style={{ objectFit: 'cover' }} />
            <div className="about-img-badge" style={{ background: 'var(--green-deep)' }}>
              <div className="about-badge-num" style={{ color: 'var(--gold-light)' }}>10k</div>
              <div className="about-badge-label" style={{ color: 'var(--white)' }}>PPM<br/>Oryzanol</div>
            </div>
          </div>
          <div className="about-text reveal">
            <span className="eyebrow-minimal">Heart Healthy Cooking</span>
            <h2 className="section-title">Jeevan Rekha <br/><em>Rice Bran Oil</em></h2>
            <br />
            <p className="section-body">
              Our flagship edible oil, extracted from premium rice bran and refined physically without any harsh chemicals. Rich in natural antioxidants like Oryzanol and Tocotrienols, it’s the ideal choice for modern, health-conscious families.
            </p>
            <br />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '18px' }}>✦</span>
                <span className="section-body" style={{ margin: 0 }}>High Smoke Point (Perfect for deep frying)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '18px' }}>✦</span>
                <span className="section-body" style={{ margin: 0 }}>Zero Trans Fats &amp; Cholesterol</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '18px' }}>✦</span>
                <span className="section-body" style={{ margin: 0 }}>Physically Refined (Chemical-Free)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ══ MUSTARD OIL ══ */}
      <section id="mustard" className="bg-white" style={{ padding: '100px 8%' }}>
        <div className="about-grid-reverse">
          <div className="about-img-wrap reveal">
            <div className="about-frame" style={{ borderColor: 'var(--gold)' }}></div>
            <Image className="about-img-main" src="/mustard_oil.png" alt="Jeevan Rekha Mustard Oil" width={800} height={600} style={{ objectFit: 'cover' }} />
          </div>
          <div className="about-text reveal">
            <span className="eyebrow-minimal">Traditional Pungency</span>
            <h2 className="section-title">Jeevan Rekha <br/><em>Mustard Oil</em></h2>
            <br />
            <p className="section-body">
              Extracted using traditional cold-press (Kachhi Ghani) methods, our mustard oil retains its strong, natural pungency and distinctive flavor. It's the authentic taste of Eastern India, packed with essential fatty acids.
            </p>
            <br />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '18px' }}>✦</span>
                <span className="section-body" style={{ margin: 0 }}>Cold Pressed (Kachhi Ghani)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '18px' }}>✦</span>
                <span className="section-body" style={{ margin: 0 }}>Rich in Omega 3 &amp; Omega 6</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '18px' }}>✦</span>
                <span className="section-body" style={{ margin: 0 }}>Natural Preservative Properties</span>
              </li>
            </ul>
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
