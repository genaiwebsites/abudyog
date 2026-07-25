"use client";
import Image from 'next/image';
import React from 'react';
import { Package, Factory, Flame, ShieldCheck, HeartPulse, ClipboardList, Cpu, Activity, Gauge } from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';
import TrustBadgeSection from '@/components/TrustBadgeSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Manufacturing() {
  useScrollReveal('.reveal', 0.1);

  return (
    <>
      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: "url('/ab_udyog_physical_refinery_pumping_pipeline_manifold.png')", opacity: 0.35 }} />
        <div className="hero-accent" />
        <div className="hero-content" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}>
          <h1 className="hero-title">
            Built at Industrial Scale
          </h1>
          <p className="hero-subtitle" style={{ margin: '20px auto 0', maxWidth: '600px' }}>
            Take a look inside our state-of-the-art Kolkata complex, housing a 300 TPD solvent extraction unit and 150 TPD physical refinery.
          </p>
        </div>
      </section>

      {/* ══ METRICS SPLIT ══ */}
      <div className="metrics-section">
        <Image
          className="metrics-img"
          src="/kolkata_solvent_extraction_refinery_plant.png"
          alt="AB Udyog high-capacity continuous solvent extraction plant and physical refinery facility in Kolkata"
          width={1200}
          height={800}
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="metrics-content reveal">
          <h2 className="section-title">Continuous Refinement</h2>
          <p className="section-body" style={{ marginTop: '16px' }}>
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

      {/* ══ INDUSTRIAL FACILITY SHOWCASE GRID ══ */}
      <section className="bg-white" style={{ padding: '88px 8%' }}>
        <div className="section-header-center" style={{ marginBottom: '48px', textAlign: 'center' }}>
          <h2 className="section-title reveal">State-of-the-Art Production Units</h2>
          <p className="section-body reveal" style={{ maxWidth: '640px', margin: '16px auto 0' }}>
            Take an inside look at our Kolkata refinery complex, combining continuous solvent extraction, high-temperature physical refining, and automated PLC control.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          {/* Card 1: Extraction Hall (from image4.png) */}
          <div className="reveal" style={{ border: '1px solid var(--color-border)', background: 'var(--cream)', overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
              <Image
                src="/ab_udyog_continuous_solvent_extraction_hall.png"
                alt="AB Udyog continuous solvent extraction hall and heavy processing machinery in Kolkata"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--gold-dark)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                300 TPD Extraction Hall
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--green-deep)', marginBottom: '8px' }}>
                Solvent Extraction Hall
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>
                Heavy-duty industrial extraction hall equipped with continuous counter-current extractors and automated vapor recovery blowers.
              </p>
            </div>
          </div>

          {/* Card 2: Pumping Station & Manifold (from image5.png) */}
          <div className="reveal" style={{ border: '1px solid var(--color-border)', background: 'var(--cream)', overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
              <Image
                src="/ab_udyog_physical_refinery_pumping_pipeline_manifold.png"
                alt="Physical refinery distillation piping manifold and fluid pumping station at AB Udyog"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--gold-dark)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                150 TPD Physical Refining
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--green-deep)', marginBottom: '8px' }}>
                Distillation Pumping Station
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>
                High-pressure fluid pumping manifold and steam distillation piping designed for chemical-free oil purification.
              </p>
            </div>
          </div>

          {/* Card 3: Control Room PLC (from image3.png) */}
          <div className="reveal" style={{ border: '1px solid var(--color-border)', background: 'var(--cream)', overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
              <Image
                src="/ab_udyog_refinery_control_room_plc_automation.png"
                alt="Plant engineer operating automated PLC control panels and valve manifolds at AB Udyog refinery"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--gold-dark)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                PLC Automated Control
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--green-deep)', marginBottom: '8px' }}>
                Automated Control Room
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>
                Real-time SCADA and PLC control room allowing plant operators to monitor temperatures, flow rates, and safety parameters continuously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3-PHASE PROCESS GRID ══ */}
      <section className="pillars-section bg-cream-warm" style={{ padding: '88px 8%' }}>
        <div className="section-header-center" style={{ marginBottom: '56px' }}>
          <h2 className="section-title reveal" style={{ textAlign: 'center' }}>
            How We Maintain Purity at Scale
          </h2>
        </div>
        <div className="pillars-grid col-3" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="pillar reveal">
            <div className="pillar-icon">
              <Package size={26} aria-hidden="true" />
            </div>
            <div className="pillar-name">Phase 1: Procurement</div>
            <p className="pillar-text">
              We source raw rice bran from local mills immediately after harvest. Fresh bran degrades rapidly due to natural enzymes, so we stabilize and extract it within hours to preserve the crucial 10,000+ PPM of Oryzanol.
            </p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">
              <Factory size={26} aria-hidden="true" />
            </div>
            <div className="pillar-name">Phase 2: Extraction</div>
            <p className="pillar-text">
              Using state-of-the-art continuous extraction machinery, we efficiently separate the raw oil from the bran. The remaining high-protein solid becomes our signature AB DORB animal feed, maintaining exceptional nutritional density.
            </p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon">
              <Flame size={26} aria-hidden="true" />
            </div>
            <div className="pillar-name">Phase 3: Refining</div>
            <p className="pillar-text">
              Unlike traditional chemical refineries that use caustic washes, we employ physical steam distillation. High-temperature steam strips away free fatty acids while leaving the natural antioxidants (Oryzanol, Tocopherols) intact.
            </p>
          </div>
        </div>
      </section>

      {/* ══ QUALITY PARALLAX SEPARATOR ══ */}
      <section style={{ 
        position: 'relative', 
        padding: '96px 8%', 
        backgroundImage: "linear-gradient(180deg, rgba(18, 42, 28, 0.88) 0%, rgba(18, 42, 28, 0.82) 100%), url('/ab_udyog_refinery_control_room_plc_automation.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 3, maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="hero-title" style={{ color: 'var(--white)', margin: '0 auto', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.15 }}>
            Certified for Global Standards
          </h2>
          <p className="hero-subtitle" style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '16px', margin: '20px auto 0 auto', maxWidth: '600px', lineHeight: 1.75 }}>
            Every batch of our edible oils and animal feeds undergoes strict laboratory testing to guarantee purity, traceability, and nutritional density.
          </p>
        </div>
      </section>

      {/* ══ ASSOCIATIONS, CERTIFICATIONS & MARKETPLACES ══ */}
      <TrustBadgeSection />

      {/* ══ LAB STANDARDS ══ */}
      <section className="pillars-section bg-cream" style={{ padding: '88px 8%' }}>
        <div className="section-header-center" style={{ marginBottom: '48px' }}>
          <h2 className="section-title reveal" style={{ textAlign: 'center' }}>
            Strict Verification
          </h2>
        </div>
        <div className="pillars-grid col-3" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="pillar reveal">
            <div className="pillar-icon"><HeartPulse size={26} aria-hidden="true" /></div>
            <div className="pillar-name">Oryzanol Retention</div>
            <p className="pillar-text">Our physical refining process is meticulously monitored to ensure over 10,000 PPM of Oryzanol remains in the final Jeevan Rekha Rice Bran Oil.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon"><Flame size={26} aria-hidden="true" /></div>
            <div className="pillar-name">Free Fatty Acids (FFA)</div>
            <p className="pillar-text">Through high-temperature steam distillation, we effectively strip out FFA, guaranteeing an exceptionally low acid value and extended shelf life.</p>
          </div>
          <div className="pillar reveal">
            <div className="pillar-icon"><ClipboardList size={26} aria-hidden="true" /></div>
            <div className="pillar-name">DORB Protein Specs</div>
            <p className="pillar-text">Every batch of our De-Oiled Rice Bran is analyzed for protein and sand/silica content to ensure it meets premium animal feed standards.</p>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <CtaBanner 
        title="Request a Facility Tour or Quality Audit"
        subtitle="See our continuous solvent extraction and physical refining plant in action."
        btnText="Request Audit Info"
        btnLink="/contact?ref=infra"
      />
    </>
  );
}
