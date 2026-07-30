"use client";
import Image from 'next/image';
import React from 'react';
import { Package, Factory, Flame, ShieldCheck, HeartPulse, ClipboardList, Cpu, Activity, Gauge } from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';
import InfrastructureAccreditations from '@/components/InfrastructureAccreditations';
import AbUdyogPidDiagram from '@/components/AbUdyogPidDiagram';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Manufacturing() {
  useScrollReveal('.reveal', 0.1);

  return (
    <>
      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: "url('/ab-udyog-industrial-oil-refinery-plant.jpg')", opacity: 0.35 }} />
        <div className="hero-accent" />
        <div className="hero-content" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}>
          <h1 className="hero-title">
            Industrial-Scale Edible Oil Refining
          </h1>
          <p className="hero-subtitle" style={{ margin: '20px auto 0', maxWidth: '640px' }}>
            Inside our integrated Kolkata industrial complex — housing a 300 TPD continuous solvent extraction plant and a 150 TPD physical refinery.
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
          <h2 className="section-title">Precision Engineering & Physical Purification</h2>
          <p className="section-body" style={{ marginTop: '16px' }}>
            Our integrated Kolkata facility operates on 100% chemical-free physical steam refining — completely eliminating caustic soda washes to preserve vital micronutrients, natural antioxidants, and Oryzanol in our edible oils.
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
            Inside our Kolkata complex — engineered for continuous solvent extraction, high-vacuum physical refining, and automated SCADA control.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          {/* Card 1: Extraction Plant */}
          <div className="reveal" style={{ border: '1px solid var(--color-border)', background: 'var(--cream)', overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
              <Image
                src="/ab_udyog_continuous_solvent_extraction_hall.png"
                alt="AB Udyog continuous solvent extraction plant and heavy processing machinery in Kolkata"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--gold-dark)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                300 TPD Extraction Plant
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--green-deep)', marginBottom: '8px' }}>
                Solvent Extraction Plant
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>
                Heavy-duty continuous extraction facility equipped with counter-current extractors and automated solvent recovery blowers.
              </p>
            </div>
          </div>

          {/* Card 2: Pumping Station & Manifold */}
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
                High-pressure fluid pumping manifold and steam distillation piping engineered for chemical-free oil purification.
              </p>
            </div>
          </div>

          {/* Card 3: Control Room PLC */}
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
                Real-time SCADA and PLC control center allowing plant operators to monitor temperatures, flow rates, and valve parameters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INTERACTIVE 10-STAGE P&ID BIO-REFINING SYSTEM & BY-PRODUCTS ══ */}
      <AbUdyogPidDiagram />





      {/* ══ INDUSTRIAL COMPLIANCE & TRADE ACCREDITATIONS ══ */}
      <InfrastructureAccreditations />

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
