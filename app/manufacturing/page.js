"use client";
import Image from 'next/image';
import React from 'react';
import { Layers, Droplet, ShieldCheck } from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Manufacturing() {
  useScrollReveal('.reveal', 0.1);

  return (
    <div>
      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: "url('/refinery_plant.png')", opacity: 0.35 }}></div>
        <div className="hero-accent"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Built at Industrial Scale
          </h1>
          <p className="hero-subtitle">
            Take a look inside our state-of-the-art Kolkata complex, housing a 300 TPD solvent extraction unit and 150 TPD physical refinery.
          </p>
        </div>
      </section>

      {/* ══ METRICS ══ */}
      <div className="metrics-section">
        <Image className="metrics-img" src="https://2025.abudyog.in/wp-content/uploads/2025/11/RAJA8723-scaled.jpg" alt="AB Udyog Infrastructure" width={1200} height={800} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
        <div className="metrics-content reveal">
          <h2 className="section-title">Continuous Refinement</h2>
          <p className="section-body" style={{ marginTop: '20px' }}>
            Our integrated facilities deliver high-volume, consistent output. We utilize physical steam distillation—completely bypassing chemical caustic treatments—to preserve natural micronutrients in our edible oils.
          </p>
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-num">300<span className="metric-unit">+</span></div>
              <div className="metric-label">TPD Solvent Extraction</div>
            </div>
            <div className="metric-item">
              <div className="metric-num">150<span className="metric-unit">+</span></div>
              <div className="metric-label">TPD Physical Refinery</div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ PROCESS PILLARS ══ */}
      <section className="pillars-section bg-cream-warm">
        <div className="section-header-center">
          <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>How We Maintain Purity at Scale</h2>
        </div>
        <div className="pillars-grid col-3">
          <div className="pillar-card reveal">
            <div className="pillar-icon">
              <Layers size={24} aria-hidden="true" />
            </div>
            <h3 className="pillar-title">1. Raw Bran Solvent Extraction</h3>
            <p className="pillar-body">Freshly milled rice bran is processed under controlled thermal conditions, extracting raw oil with high efficiency while preserving non-fat nutrients in the DORB fraction.</p>
          </div>
          <div className="pillar-card reveal">
            <div className="pillar-icon">
              <Droplet size={24} aria-hidden="true" />
            </div>
            <h3 className="pillar-title">2. Physical Deodorization &amp; Distillation</h3>
            <p className="pillar-body">High-vacuum steam distillation strips free fatty acids (FFA) without chemical washing. This preserves natural Gamma Oryzanol (10,000+ PPM) and Tocopherols.</p>
          </div>
          <div className="pillar-card reveal">
            <div className="pillar-icon">
              <ShieldCheck size={24} aria-hidden="true" />
            </div>
            <h3 className="pillar-title">3. Derivative Fractionation</h3>
            <p className="pillar-body">By-product streams are refined into high-melting-point rice bran wax for industrial polishes and cosmetics, pure lecithin for food emulsifiers, and gums.</p>
          </div>
        </div>
      </section>

      {/* ══ QUALITY ASSURANCE ══ */}
      <section style={{ padding: '80px 8%', background: 'var(--green-deep)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title reveal" style={{ color: 'var(--white)' }}>In-House Laboratory Testing</h2>
          <p className="section-body reveal" style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '20px' }}>
            Every batch undergoes rigorous analytical testing for moisture content, peroxide value, acid value, and heavy metals. Our in-house QC laboratory ensures 100% compliance with FSSAI and FSSC 22000 specifications.
          </p>
        </div>
      </section>

      {/* ══ CERTS ══ */}
      <section className="certs-section reveal">
        <div className="section-header-center">
          <h2 className="section-title">Certified for Global Standards</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
          <Image className="certs-img" src="https://2025.abudyog.in/wp-content/uploads/2025/11/certificates-e1763163163535.png" alt="Certifications" width={800} height={200} style={{ filter: 'drop-shadow(0 8px 32px rgba(0, 0, 0, 0.08))', maxWidth: '100%', height: 'auto' }} />
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <CtaBanner 
        title={<>Schedule a Facility Visit or<br />Inquire About Industrial Supply</>}
        subtitle="Our technical team is ready to discuss your specific extraction, oil, or feed requirements."
        btnText="Contact Sales Team"
        btnLink="/contact"
      />
    </div>
  );
}
