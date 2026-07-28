"use client";
import Image from 'next/image';
import React from 'react';
import { Package, Factory, Flame, ShieldCheck, HeartPulse, ClipboardList, Cpu, Activity, Gauge } from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';
import InfrastructureAccreditations from '@/components/InfrastructureAccreditations';
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
          {/* Card 1: Extraction Hall */}
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
                Heavy-duty continuous extraction hall equipped with counter-current extractors and automated solvent recovery blowers.
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

      {/* ══ CONNECTED INDUSTRIAL PROCESS TIMELINE ══ */}
      <section style={{ background: '#F7F5F0', padding: '96px 8%', borderTop: '1px solid var(--color-border)' }}>
        <div className="section-header-center" style={{ marginBottom: '64px', textAlign: 'center' }}>
          <h2 className="section-title reveal" style={{ textAlign: 'center', fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
            End-to-End Processing Rigor
          </h2>
        </div>

        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative' }}>
          {/* Continuous Horizontal Connecting Line (Desktop) */}
          <div 
            className="hidden-mobile"
            style={{
              position: 'absolute',
              top: '25px',
              left: '12%',
              right: '12%',
              height: '2px',
              background: 'linear-gradient(90deg, var(--gold) 0%, var(--green-deep) 50%, var(--gold-dark) 100%)',
              zIndex: 1
            }}
          />

          {/* 3 Step Timeline Nodes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Node 1 */}
            <div className="reveal" style={{ textAlign: 'center', padding: '0 12px' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'var(--green-deep)',
                color: 'var(--gold)',
                border: '3px solid var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                fontSize: '16px',
                margin: '0 auto 24px auto',
                boxShadow: '0 4px 14px rgba(18, 42, 28, 0.15)'
              }}>
                01
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--green-deep)', marginBottom: '12px' }}>
                Rapid Sourcing & Stabilization
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
                Fresh paddy rice bran is sourced directly from regional rice mills and stabilized within hours of milling to lock in peak natural Oryzanol content before enzymatic degradation occurs.
              </p>
            </div>

            {/* Node 2 */}
            <div className="reveal" style={{ textAlign: 'center', padding: '0 12px' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'var(--green-deep)',
                color: 'var(--gold)',
                border: '3px solid var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                fontSize: '16px',
                margin: '0 auto 24px auto',
                boxShadow: '0 4px 14px rgba(18, 42, 28, 0.15)'
              }}>
                02
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--green-deep)', marginBottom: '12px' }}>
                Continuous Solvent Extraction
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
                Automated counter-current extractors efficiently separate raw oil from de-oiled bran solids, which are processed into high-protein AB DORB animal feed with zero nutritional waste.
              </p>
            </div>

            {/* Node 3 */}
            <div className="reveal" style={{ textAlign: 'center', padding: '0 12px' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'var(--green-deep)',
                color: 'var(--gold)',
                border: '3px solid var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                fontSize: '16px',
                margin: '0 auto 24px auto',
                boxShadow: '0 4px 14px rgba(18, 42, 28, 0.15)'
              }}>
                03
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--green-deep)', marginBottom: '12px' }}>
                High-Vacuum Distillation
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
                Steam deodorization under high vacuum strips away free fatty acids without chemical caustic washes, keeping natural antioxidants and essential fatty acids fully intact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ LABORATORY SPECIFICATION CARDS (DARK EXECUTIVE UI) ══ */}
      <section style={{ background: 'var(--green-deep)', color: 'var(--white)', padding: '96px 8%' }}>
        <div className="section-header-center" style={{ marginBottom: '56px', textAlign: 'center' }}>
          <h2 className="section-title reveal" style={{ textAlign: 'center', color: 'var(--white)' }}>
            Certified Excellence at Every Stage
          </h2>
          <p className="reveal" style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '16px', margin: '16px auto 0 auto', maxWidth: '640px', lineHeight: 1.7 }}>
            Every production batch undergoes continuous laboratory testing for purity, safety, and international export specifications.
          </p>
        </div>

        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {/* Spec Card 1 */}
          <div className="reveal" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(212, 160, 23, 0.3)', padding: '36px 28px', borderRadius: '4px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(212, 160, 23, 0.15)', color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '2px', letterSpacing: '0.08em', marginBottom: '20px' }}>
              10,000+ PPM ORYZANOL
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--white)', marginBottom: '12px' }}>
              Micronutrient Retention
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.78)', lineHeight: '1.65', margin: 0 }}>
              Spectrophotometric testing verifies the retention of 10,000+ PPM natural Oryzanol across our edible Rice Bran Oil portfolio for active heart health benefits.
            </p>
          </div>

          {/* Spec Card 2 */}
          <div className="reveal" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(212, 160, 23, 0.3)', padding: '36px 28px', borderRadius: '4px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(212, 160, 23, 0.15)', color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '2px', letterSpacing: '0.08em', marginBottom: '20px' }}>
              &lt; 0.1% FFA CONTENT
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--white)', marginBottom: '12px' }}>
              Free Fatty Acid Control
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.78)', lineHeight: '1.65', margin: 0 }}>
              High-vacuum steam distillation reduces free fatty acids to &lt;0.1%, ensuring high smoke points, low peroxide values, and extended commercial shelf stability.
            </p>
          </div>

          {/* Spec Card 3 */}
          <div className="reveal" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(212, 160, 23, 0.3)', padding: '36px 28px', borderRadius: '4px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(212, 160, 23, 0.15)', color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '2px', letterSpacing: '0.08em', marginBottom: '20px' }}>
              EXPORT SPEC FEED
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--white)', marginBottom: '12px' }}>
              Feed Protein & Fiber Specs
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.78)', lineHeight: '1.65', margin: 0 }}>
              Automated wet-chemistry analysis tests every batch of AB DORB for crude protein, moisture, and silica content to meet rigorous international animal feed standards.
            </p>
          </div>
        </div>
      </section>

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
