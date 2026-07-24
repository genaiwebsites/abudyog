"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Target, Award, Users, ShieldCheck } from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  useScrollReveal('.reveal', 0.1);

  return (
    <div>
      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: "url('/hero_rice_paddy.png')", opacity: 0.25 }}></div>
        <div className="hero-accent"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Rooted in Agriculture, Refined for Progress
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
            <Image className="about-img-main" src="/factory1.webp" alt="Kolkata physical refinement refinery plant" width={800} height={600} style={{ objectFit: 'cover' }} />
          </div>
          <div className="about-text reveal">
            <h2 className="section-title">An Engineering Standard in Food Manufacturing</h2>
            <br />
            <p className="section-body">
              AB Udyog Pvt. Ltd. operates a high-capacity continuous solvent extraction and physical refining complex in Kolkata, West Bengal. Established with a mission of structural purity and agro-based progress, we have spent four decades processing agricultural crops into food items and value-added derivatives.
            </p>
            <br />
            <p className="section-body">
              By processing freshly harvested rice bran within hours of milling, our plant prevents natural oxidation. Our physical refinery bypasses caustic soda and acid treatments completely, employing high-temperature steam distillation to wash raw oil while locking in natural micronutrients.
            </p>
            <div className="about-tags" style={{ marginTop: '24px' }}>
              <span className="about-tag">10,000+ PPM Oryzanol</span>
              <span className="about-tag">Zero Caustic Washing</span>
              <span className="about-tag">Physical Steam Distillation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CORE PILLARS ══ */}
      <section className="pillars-section">
        <div className="section-header-center">
          <h2 className="section-title text-white">Our Operational Pillars</h2>
        </div>
        <div className="pillars-grid">
          <div className="pillar-card reveal">
            <div className="pillar-icon">
              <Target size={24} aria-hidden="true" />
            </div>
            <h3 className="pillar-title">Physical Refinement Purity</h3>
            <p className="pillar-body">Zero chemical treatment. We rely strictly on high-temperature vacuum deodorization and physical steam distillation to retain natural Gamma Oryzanol.</p>
          </div>
          <div className="pillar-card reveal">
            <div className="pillar-icon">
              <Award size={24} aria-hidden="true" />
            </div>
            <h3 className="pillar-title">FSSC 22000 Compliance</h3>
            <p className="pillar-body">Our Kolkata processing facility adheres to strict global food safety standards, guaranteeing hazard-free processing for consumer food and animal feed lines.</p>
          </div>
          <div className="pillar-card reveal">
            <div className="pillar-icon">
              <Users size={24} aria-hidden="true" />
            </div>
            <h3 className="pillar-title">Farm Community Sourcing</h3>
            <p className="pillar-body">Partnering with regional rice mills across West Bengal's agricultural belt to source fresh raw bran within hours of milling, empowering regional farming economics.</p>
          </div>
          <div className="pillar-card reveal">
            <div className="pillar-icon">
              <ShieldCheck size={24} aria-hidden="true" />
            </div>
            <h3 className="pillar-title">Zero-Waste By-Product Loop</h3>
            <p className="pillar-body">Every byproduct of extraction is processed into commercial value — DORB for animal feed, refined wax for cosmetics, and lecithin for food emulsification.</p>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <CtaBanner 
        title={<>Explore Our Industrial &amp;<br />Retail Product Portfolio</>}
        subtitle="Partner with Eastern India's premier physically refined oil and DORB producer."
        btnText="View All Products"
        btnLink="/products"
      />
    </div>
  );
}
