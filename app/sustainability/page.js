"use client";
import React from 'react';
import Link from 'next/link';
import { Heart, Sprout, GraduationCap, ShieldCheck, Leaf, Users, Award, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import CtaBanner from '@/components/CtaBanner';
import Image from 'next/image';

export default function CSRPage() {
  useScrollReveal('.reveal', 0.1);

  return (
    <>
      {/* ══ HERO BANNER ══ */}
      <section className="sustainability-hero">
        <div className="hero-bg-graphic-wrap">
          <Image
            src="/ab-udyog-sustainability-green-eco-handshake.png"
            alt="AB Udyog Sustainability Green Leaf Handshake Graphic"
            width={1100}
            height={500}
            priority
            className="hero-handshake-graphic-fluid"
          />
        </div>
        <div className="hero-gradient-overlay-left" aria-hidden="true" />

        <div className="hero-container-inner">
          <div className="hero-content-left">
            <h1 className="hero-sustainability-title-left">
              Harmonizing Industry. <em>Nurturing Our Planet.</em>
            </h1>

            <p className="hero-sustainability-subtitle-left">
              At AB Udyog, industrial progress goes hand-in-hand with environmental stewardship—combining physical refining with a circular zero-waste value chain that strengthens West Bengal&apos;s agro-ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ══ PHILOSOPHY SECTION ══ */}
      <section style={{ background: 'var(--cream)', padding: '100px 8%' }}>
        <div className="about-grid">
          <div className="about-text reveal" style={{ paddingLeft: '0' }}>
            <h2 className="section-title">A Grounded Vision for <em>Agro-Industrial Progress</em></h2>
            <br />
            <p className="section-body">
              For decades, AB Udyog has operated at the intersection of agriculture and modern processing in West Bengal. We believe manufacturing should strengthen, rather than deplete, the agro-ecosystems and local communities in which we work.
            </p>
            <br />
            <p className="section-body">
              By maintaining physical refining lines that eliminate chemical neutralizers and utilizing agricultural residues for plant energy, we reduce processing footprints. Simultaneously, our continuous commercial demand for fresh rice bran creates steady value for regional rice mills and rural agricultural supply chains.
            </p>
          </div>
          
          <div className="about-img-wrap reveal">
            <Image className="about-img-main" src="/ab-udyog-jeevan-rekha-csr-community-worker-welfare-kolkata.png" alt="AB Udyog factory team and workers engaged in responsible manufacturing and local welfare in West Bengal" width={800} height={600} style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ══ OPERATIONAL BENCHMARKS BOARD ══ */}
      <section className="bg-green-deep text-white" style={{ padding: '80px 8%' }}>
        <div className="section-header-center reveal" style={{ marginBottom: '60px' }}>
          <h2 className="section-title text-white">Our Practical <em>Commitments</em></h2>
          <p className="section-body" style={{ color: 'rgba(255,255,255,0.7)', margin: '16px auto 0 auto', maxWidth: '640px' }}>
            We focus our environmental and operational stewardship on practical, measurable manufacturing priorities across our facilities.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
          
          <div className="bento-card reveal" style={{ background: 'rgba(255,255,255,0.03)', padding: '40px 32px', textAlign: 'center' }}>
            <div style={{ color: 'var(--gold-light)', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <TrendingUp size={32} aria-hidden="true" />
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: 'var(--gold-light)', fontWeight: 400, lineHeight: 1.1 }}>Circular</div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--white)', marginTop: '16px' }}>Co-Product Recovery</h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', lineHeight: 1.5 }}>Every extraction fraction—from bran meal to wax, gums, and fatty acids—is directed into secondary industrial use.</p>
          </div>

          <div className="bento-card reveal" style={{ background: 'rgba(255,255,255,0.03)', padding: '40px 32px', textAlign: 'center' }}>
            <div style={{ color: 'var(--gold-light)', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <Leaf size={32} aria-hidden="true" />
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: 'var(--gold-light)', fontWeight: 400, lineHeight: 1.1 }}>Physical</div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--white)', marginTop: '16px' }}>Refining Process</h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', lineHeight: 1.5 }}>Utilizing high-vacuum steam distillation to preserve natural Gamma Oryzanol without chemical caustic washing.</p>
          </div>

          <div className="bento-card reveal" style={{ background: 'rgba(255,255,255,0.03)', padding: '40px 32px', textAlign: 'center' }}>
            <div style={{ color: 'var(--gold-light)', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <Users size={32} aria-hidden="true" />
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: 'var(--gold-light)', fontWeight: 400, lineHeight: 1.1 }}>Regional</div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--white)', marginTop: '16px' }}>Milling Linkages</h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', lineHeight: 1.5 }}>Sourcing fresh paddy rice bran from local milling partners across Bengal within hours of milling to prevent enzyme degradation.</p>
          </div>

          <div className="bento-card reveal" style={{ background: 'rgba(255,255,255,0.03)', padding: '40px 32px', textAlign: 'center' }}>
            <div style={{ color: 'var(--gold-light)', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <ShieldCheck size={32} aria-hidden="true" />
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: 'var(--gold-light)', fontWeight: 400, lineHeight: 1.1 }}>Biomass</div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--white)', marginTop: '16px' }}>Auxiliary Energy</h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', lineHeight: 1.5 }}>Utilizing agricultural residues and eco-fuel byproducts for plant steam generation, lowering reliance on fossil fuels.</p>
          </div>

        </div>
      </section>

      {/* ══ THE FOUR CSR PILLARS ══ */}
      <section className="bg-white" style={{ padding: '100px 8%' }}>
        <div className="section-header-center reveal" style={{ marginBottom: '60px' }}>
          <h2 className="section-title">Pillars of Our <em>Operational Responsibility</em></h2>
          <p className="section-body" style={{ margin: '16px auto 0 auto', maxWidth: '640px' }}>
            Our sustainability approach is structured around four long-term operational priorities across sourcing, refining, and community engagement.
          </p>
        </div>

        <div className="bento-grid">
          
          <div className="bento-card featured reveal grid-span-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div className="bento-icon-container" style={{ marginBottom: 0, width: '48px', height: '48px' }}>
                <Sprout size={22} aria-hidden="true" />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: 'var(--gold-light)', margin: 0 }}>Regional Agro-Linkages &amp; Timely Sourcing</h3>
            </div>
            <p className="bento-body" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.7 }}>
              We work closely with regional rice mills across West Bengal&apos;s paddy belt to procure fresh rice bran directly after milling. Sourcing rapidly prevents free fatty acid (FFA) escalation, converting a perishable milling by-product into valuable nutrition while providing dependable commercial off-take for local agro-enterprises.
            </p>
          </div>

          <div className="bento-card reveal" style={{ background: 'var(--cream-warm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div className="bento-icon-container" style={{ marginBottom: 0, width: '48px', height: '48px' }}>
                <TrendingUp size={22} aria-hidden="true" />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: 'var(--green-deep)', margin: 0 }}>Zero-Waste Circularity</h3>
            </div>
            <p className="bento-body" style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
              All industrial derivatives from our continuous physical refining lines are channeled into secondary productive uses: <Link href="/products/rice-bran-fatty-acid" style={{ color: 'var(--gold-dark)', textDecoration: 'underline', fontWeight: 600 }}>fatty acids</Link> for soaps and oleochemicals, <Link href="/products/rice-bran-wax" style={{ color: 'var(--gold-dark)', textDecoration: 'underline', fontWeight: 600 }}>rice bran wax</Link> for cosmetics and polishes, <Link href="/products/de-oiled-rice-bran" style={{ color: 'var(--gold-dark)', textDecoration: 'underline', fontWeight: 600 }}>DORB</Link> for animal feeds, and <Link href="/products/spent-bleaching-earth" style={{ color: 'var(--gold-dark)', textDecoration: 'underline', fontWeight: 600 }}>spent earth</Link> as auxiliary fuel for cement kilns.
            </p>
          </div>

          <div className="bento-card reveal" style={{ background: 'var(--cream-warm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div className="bento-icon-container" style={{ marginBottom: 0, width: '48px', height: '48px' }}>
                <ShieldCheck size={22} aria-hidden="true" />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: 'var(--green-deep)', margin: 0 }}>Workplace Safety &amp; Local Welfare</h3>
            </div>
            <p className="bento-body" style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
              Operating responsibly begins on the plant floor. We maintain strict hygiene protocols, machinery safeguards, and protective standards for our plant teams. Our facilities prioritize local hiring, providing fair, dependable industrial employment for communities surrounding our Uchalan complex.
            </p>
          </div>

          <div className="bento-card featured reveal grid-span-2" style={{ background: 'var(--green-deep)', color: 'var(--white)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div className="bento-icon-container" style={{ marginBottom: 0, width: '48px', height: '48px' }}>
                <Leaf size={22} aria-hidden="true" />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: 'var(--gold-light)', margin: 0 }}>Resource &amp; Energy Efficiency</h3>
            </div>
            <p className="bento-body" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.7 }}>
              We continuously optimize our plant utilities through multi-stage heat recovery systems and boiler fuel management. By reusing process steam and minimizing thermal loss, our engineering teams lower emissions per ton of refined oil, ensuring production efficiency aligns with environmental responsibility.
            </p>
          </div>

        </div>
      </section>

      {/* ══ PLEDGE QUOTE ══ */}
      <section style={{ background: 'var(--cream-warm)', padding: '80px 8%', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }} className="reveal">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontStyle: 'italic', color: 'var(--green-deep)', lineHeight: 1.4, position: 'relative' }}>
            <span style={{ fontSize: '72px', position: 'absolute', top: '-40px', left: '0', opacity: 0.1, fontFamily: 'serif' }}>“</span>
            Responsible manufacturing is about respect—for the raw agricultural materials we refine, the local communities we operate within, and the environment we share. We build an enduring enterprise through steady, conscientious practices.
            <span style={{ fontSize: '72px', position: 'absolute', bottom: '-80px', right: '0', opacity: 0.1, fontFamily: 'serif' }}>”</span>
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '30px' }}>
            <Award size={20} style={{ color: 'var(--gold)' }} aria-hidden="true" />
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--green-deep)' }}>Management, AB Udyog Pvt. Ltd.</span>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <CtaBanner 
        title="Committed to Responsible Agro-Processing"
        subtitle="Connect with our team to learn more about our manufacturing standards, co-product sourcing, and quality certifications."
        btnText="Get in Touch"
        btnLink="/contact?ref=sustainability"
      />
    </>
  );
}
