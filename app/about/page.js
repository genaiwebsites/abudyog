"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Eye, Target, ShieldCheck, Route, Activity, Leaf } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  useScrollReveal('.reveal', 0.1);

  return (
    <>
      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: "url('/hero_rice_paddy.png')", opacity: 0.25 }}></div>
        <div className="hero-accent"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>Our Corporate Story</span>
          </div>
          <h1 className="hero-title">
            Rooted in Agriculture.<br />
            <em>Refined for Progress.</em>
          </h1>
          <p className="hero-subtitle">
            Discover how AB Udyog Pvt. Ltd. evolved over four decades from Eastern India's premium solvent extraction facility into a pioneering agro-based food manufacturer.
          </p>
        </div>
      </section>

      {/* ══ ABOUT DETAILS ══ */}
      <section id="story">
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <div className="about-frame"></div>
            <Image className="about-img-main" src="/factory1.webp" alt="Kolkata physical refinement refinery plant" width={800} height={600} style={{ objectFit: 'cover' }} />
            <div className="about-img-badge">
              <div className="about-badge-num">40+</div>
              <div className="about-badge-label">Years of<br />Agro Scale</div>
            </div>
          </div>
          <div className="about-text reveal">
            <span className="eyebrow-minimal">Scientific Refining Heritage</span>
            <h2 className="section-title">An Engineering Standard in<br /><em>Food Manufacturing</em></h2>
            <br />
            <p className="section-body">
              AB Udyog Pvt. Ltd. operates a high-capacity continuous solvent extraction and physical refining complex in Kolkata, West Bengal. Established with a mission of structural purity and agro-based progress, we have spent four decades processing agricultural crops into food items and value-added derivatives.
            </p>
            <br />
            <p className="section-body">
              By processing freshly harvested rice bran within hours of milling, our plant prevents natural oxidation. Our physical refinery bypasses caustic soda and acid treatments completely, employing high-temperature steam distillation to wash raw oil while locking in natural micronutrients.
            </p>
            <div className="about-tags">
              <span className="about-tag">10,000+ PPM Oryzanol</span>
              <span className="about-tag">Zero Caustic Washing</span>
              <span className="about-tag">Physical Steam Distillation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VISION & MISSION BENTO ══ */}
      <section className="bento-section">
        <span className="eyebrow-large reveal">Foundational Philosophies</span>
        <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>Our Corporate<br /><em>Principles</em></h2>
        <div className="bento-grid responsive-two-col">
          <div className="bento-card featured reveal" style={{ gridColumn: 'span 1' }}>
            <div className="bento-icon-container">
              <Eye size={24} aria-hidden="true" />
            </div>
            <div className="bento-title" style={{ fontSize: '36px' }}>Our Corporate Vision</div>
            <p className="bento-body" style={{ fontSize: '16px', maxWidth: '800px', marginTop: '20px' }}>
              To be India's most reliable partner for premium agro-products and industrial derivatives. We aim to establish Jeevan Rekha as a household brand for purity and wellness while leading the industry in physical steam refining scaling and zero-waste circular operations.
            </p>
          </div>
          <div className="bento-card reveal" style={{ background: 'var(--green-mid)', color: 'var(--white)', gridColumn: 'span 1' }}>
            <div className="bento-icon-container">
              <Target size={24} style={{ color: 'var(--gold-light)' }} aria-hidden="true" />
            </div>
            <div className="bento-title" style={{ color: 'var(--gold-light)', fontSize: '36px' }}>Our Operations Mission</div>
            <p className="bento-body" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', maxWidth: '800px', marginTop: '20px' }}>
              To maintain strict control over chemical-free refining. We pledge to preserve natural health nutrients, provide high-quality B2B protein animal feeds (AB DORB), and sustain clean extraction lines with strict adherence to national food standards.
            </p>
          </div>
        </div>
      </section>

      {/* ══ PILLARS ══ */}
      <section className="pillars-section">
        <div className="section-header-center">
          <span className="eyebrow-minimal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>Corporate Pillars</span>
          <h2 className="section-title reveal">Operational <em>Standards</em></h2>
        </div>
        <div className="pillars-grid">
          <div className="pillar reveal">
            <div className="pillar-icon"><ShieldCheck size={26} aria-hidden="true" /></div>
            <div className="pillar-name">Purity</div>
            <p className="pillar-text">By physical steam refining, we scrub free fatty acids at high temperatures, completely bypassing chemical caustic washes to keep oils clean and natural.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon"><Route size={26} aria-hidden="true" /></div>
            <div className="pillar-name">Traceability</div>
            <p className="pillar-text">From sourcing fresh rice bran at local mills to continuous processing and bottling, our batch control ensures absolute traceability.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon"><Activity size={26} aria-hidden="true" /></div>
            <div className="pillar-name">Consistency</div>
            <p className="pillar-text">Our high-tech continuous processing machinery runs non-stop, producing consistent oil clarity, pungency, and protein-packed feed qualities.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon"><Leaf size={26} aria-hidden="true" /></div>
            <div className="pillar-name">Sustainability</div>
            <p className="pillar-text">We process every byproduct of the bran—converting waxes for cosmetics, gums for emulsifiers, spent clay for reuse, and acid oils for biofuel.</p>
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
