"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Package, Settings, Flame, HeartPulse, ClipboardList } from 'lucide-react';

export default function Manufacturing() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: "url('/refinery_plant.png')", opacity: 0.35 }}></div>
        <div className="hero-accent"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>Manufacturing Infrastructure</span>
          </div>
          <h1 className="hero-title">
            Built at<br />
            <em>Industrial Scale.</em>
          </h1>
          <p className="hero-subtitle">
            Take a look inside our state-of-the-art Kolkata complex, housing a 300 TPD solvent extraction unit and 150 TPD physical refinery.
          </p>
        </div>
      </section>

      {/* ══ METRICS ══ */}
      <div className="metrics-section">
        <Image className="metrics-img" src="https://2025.abudyog.in/wp-content/uploads/2025/11/RAJA8723-scaled.jpg" alt="AB Udyog Infrastructure" width={900} height={675} style={{ objectFit: 'cover' }} />
        <div className="metrics-content reveal">
          <div className="section-eyebrow">Processing Capacity</div>
          <h2 className="section-title">Continuous<br /><em>Refinement</em></h2>
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

      {/* ══ PROCESS BENTO ══ */}
      <section className="bento-section" style={{ background: 'var(--cream-warm)' }}>
        <div className="section-eyebrow reveal">The AB Udyog Process</div>
        <h2 className="section-title reveal">How We Maintain<br /><em>Purity at Scale</em></h2>
        <div className="bento-grid">
          <div className="bento-card featured reveal" style={{ gridColumn: 'span 3', padding: '48px' }}>
            <div className="bento-icon-container">
              <Package size={24} />
            </div>
            <div className="bento-title" style={{ fontSize: '28px' }}>Phase 1: Procurement &amp; Stabilization</div>
            <p className="bento-body" style={{ marginTop: '12px', fontSize: '16px', maxWidth: '800px' }}>
              We source raw rice bran from local mills immediately after harvest. Fresh bran degrades rapidly due to natural enzymes, so we stabilize and extract it within hours to preserve the crucial 10,000+ PPM of Oryzanol.
            </p>
          </div>
          <div className="bento-card reveal" style={{ gridColumn: 'span 3', background: 'var(--green-mid)', color: 'var(--white)', padding: '48px' }}>
            <div className="bento-icon-container">
              <Settings size={24} style={{ color: 'var(--gold-light)' }} />
            </div>
            <div className="bento-title" style={{ color: 'var(--gold-light)', fontSize: '28px' }}>Phase 2: Solvent Extraction &amp; De-Oiling</div>
            <p className="bento-body" style={{ color: 'rgba(255,255,255,0.7)', marginTop: '12px', fontSize: '16px', maxWidth: '800px' }}>
              Using state-of-the-art continuous extraction machinery, we efficiently separate the raw oil from the bran. The remaining high-protein solid becomes our signature AB DORB animal feed, maintaining exceptional nutritional density.
            </p>
          </div>
          <div className="bento-card featured reveal" style={{ gridColumn: 'span 3', background: 'var(--white)', color: 'var(--charcoal)', padding: '48px' }}>
            <div className="bento-icon-container">
              <Flame size={24} style={{ color: 'var(--green-deep)' }} />
            </div>
            <div className="bento-title" style={{ color: 'var(--green-deep)', fontSize: '28px' }}>Phase 3: Physical Steam Refining</div>
            <p className="bento-body" style={{ color: 'var(--muted)', marginTop: '12px', fontSize: '16px', maxWidth: '800px' }}>
              Unlike traditional chemical refineries that use caustic washes, we employ physical steam distillation. High-temperature steam strips away free fatty acids while leaving the natural antioxidants (Oryzanol, Tocopherols) intact.
            </p>
          </div>
        </div>
      </section>

      {/* ══ QUALITY HERO DIVIDER (CREATIVE PARALLAX SEPARATOR) ══ */}
      <section style={{ 
        position: 'relative', 
        padding: '80px 8%', 
        backgroundImage: "linear-gradient(180deg, rgba(13, 43, 26, 0.86) 0%, rgba(13, 43, 26, 0.8) 100%), url('/quality_lab.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 3, maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-eyebrow" style={{ color: 'var(--gold-light)', display: 'flex', justifyContent: 'center' }}>
            <span>Quality Assurance</span>
          </div>
          <h2 className="hero-title" style={{ color: 'var(--white)', margin: '16px auto', fontSize: 'clamp(36px, 4.5vw, 56px)', fontFamily: 'var(--font-cormorant), serif', fontWeight: 300, lineHeight: 1.15 }}>
            Certified for<br />
            <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Global Standards.</em>
          </h2>
          <p className="hero-subtitle" style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '16px', margin: '24px auto 0 auto', maxWidth: '600px', lineHeight: 1.75 }}>
            Every batch of our edible oils and animal feeds undergoes strict laboratory testing to guarantee purity, traceability, and nutritional density.
          </p>
        </div>
      </section>

      {/* ══ CERTS DETAILS ══ */}
      <section className="certs-section reveal" style={{ padding: '56px 8%', background: 'var(--white)', textAlign: 'center' }}>
        <div className="section-header-center">
          <div className="section-eyebrow">Compliance &amp; Trust</div>
          <h2 className="section-title">Industry Recognitions &amp; <em>Certifications</em></h2>
        </div>
        <p className="section-body" style={{ margin: '20px auto 40px auto', textAlign: 'center', maxWidth: '600px' }}>
          AB Udyog Pvt. Ltd. operates under stringent food safety regulations. Our facilities are routinely audited to maintain our standing as Eastern India's most trusted solvent extraction plant.
        </p>
        <Image className="certs-img" src="https://2025.abudyog.in/wp-content/uploads/2025/11/certificates-e1763163163535.png" alt="Certifications" width={600} height={400} style={{ display: 'block', margin: '48px auto 0', filter: 'drop-shadow(0 8px 32px rgba(0, 0, 0, 0.08))' }} />
      </section>

      {/* ══ LAB STANDARDS (PILLARS) ══ */}
      <section className="pillars-section" style={{ padding: '56px 8%', background: 'var(--cream)' }}>
        <div className="section-header-center">
          <div className="section-eyebrow">Our Lab Standards</div>
          <h2 className="section-title reveal">Strict <em>Verification</em></h2>
        </div>
        <div className="pillars-grid col-3">
          <div className="pillar reveal">
            <div className="pillar-icon"><HeartPulse size={26} /></div>
            <div className="pillar-name">Oryzanol Retention</div>
            <p className="pillar-text">Our physical refining process is meticulously monitored to ensure over 10,000 PPM of Oryzanol remains in the final Jeevan Rekha Rice Bran Oil.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon"><Flame size={26} /></div>
            <div className="pillar-name">Free Fatty Acids (FFA)</div>
            <p className="pillar-text">Through high-temperature steam distillation, we effectively strip out FFA, guaranteeing an exceptionally low acid value and extended shelf life.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon"><ClipboardList size={26} /></div>
            <div className="pillar-name">DORB Protein Specs</div>
            <p className="pillar-text">Every batch of our De-Oiled Rice Bran is analyzed for protein and sand/silica content to ensure it meets premium animal feed standards.</p>
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
