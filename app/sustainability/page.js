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
              At AB Udyog, industrial progress goes hand-in-hand with environmental stewardship—pioneering chemical-free physical refining, zero-waste circularity, and long-term prosperity for West Bengal&apos;s farming communities.
            </p>
          </div>
        </div>
      </section>

      {/* ══ PHILOSOPHY SECTION ══ */}
      <section style={{ background: 'var(--cream)', padding: '100px 8%' }}>
        <div className="about-grid">
          <div className="about-text reveal" style={{ paddingLeft: '0' }}>
            <h2 className="section-title">A Sustainable Vision for <em>Agro-Based Progress</em></h2>
            <br />
            <p className="section-body">
              For over forty years, our operations have integrated with the agricultural communities of West Bengal. We believe that modern manufacturing must build up, rather than deplete, the environments and societies it touches.
            </p>
            <br />
            <p className="section-body">
              By maintaining chemical-free physical refining lines and utilizing biomass residues for energy generation, we reduce our carbon footprint. Simultaneously, we support local agricultural infrastructure, ensuring that the farmers who feed the nation enjoy financial stability and proper community support.
            </p>
          </div>
          
          <div className="about-img-wrap reveal">
            <Image className="about-img-main" src="/ab-udyog-jeevan-rekha-csr-community-worker-welfare-kolkata.png" alt="AB Udyog Jeevan Rekha factory team and workers engaged in community edible oil distribution in Kolkata" width={800} height={600} style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ══ IMPACT METRICS BOARD ══ */}
      <section className="bg-green-deep text-white" style={{ padding: '80px 8%' }}>
        <div className="section-header-center reveal" style={{ marginBottom: '60px' }}>
          <h2 className="section-title text-white">Our Key Social <em>Metrics</em></h2>
          <p className="section-body" style={{ color: 'rgba(255,255,255,0.7)', margin: '16px auto 0 auto', maxWidth: '600px' }}>
            We back our sustainability commitments with measurable actions that positively impact livelihoods and ecosystems.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
          
          <div className="bento-card reveal" style={{ background: 'rgba(255,255,255,0.03)', padding: '40px 32px', textAlign: 'center' }}>
            <div style={{ color: 'var(--gold-light)', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <Users size={32} aria-hidden="true" />
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', color: 'var(--gold-light)', fontWeight: 300, lineHeight: 1 }}>5,000+</div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--white)', marginTop: '16px' }}>Farmers Supported</h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', lineHeight: 1.5 }}>Fair trade contracts and agricultural support services across West Bengal.</p>
          </div>

          <div className="bento-card reveal" style={{ background: 'rgba(255,255,255,0.03)', padding: '40px 32px', textAlign: 'center' }}>
            <div style={{ color: 'var(--gold-light)', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <Leaf size={32} aria-hidden="true" />
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', color: 'var(--gold-light)', fontWeight: 300, lineHeight: 1 }}>100%</div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--white)', marginTop: '16px' }}>Chemical Free</h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', lineHeight: 1.5 }}>Refined solely using steam distillation, protecting consumer health and the environment.</p>
          </div>

          <div className="bento-card reveal" style={{ background: 'rgba(255,255,255,0.03)', padding: '40px 32px', textAlign: 'center' }}>
            <div style={{ color: 'var(--gold-light)', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <GraduationCap size={32} aria-hidden="true" />
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', color: 'var(--gold-light)', fontWeight: 300, lineHeight: 1 }}>10+</div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--white)', marginTop: '16px' }}>Schools Sponsored</h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', lineHeight: 1.5 }}>Funding structural, sanitation, and supply upgrades in rural districts.</p>
          </div>

          <div className="bento-card reveal" style={{ background: 'rgba(255,255,255,0.03)', padding: '40px 32px', textAlign: 'center' }}>
            <div style={{ color: 'var(--gold-light)', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <Heart size={32} aria-hidden="true" />
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', color: 'var(--gold-light)', fontWeight: 300, lineHeight: 1 }}>100k+</div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--white)', marginTop: '16px' }}>Liters Distributed</h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', lineHeight: 1.5 }}>Vitamin-fortified edible oils supplied to low-income welfare programs.</p>
          </div>

        </div>
      </section>

      {/* ══ THE FOUR CSR PILLARS ══ */}
      <section className="bg-white" style={{ padding: '100px 8%' }}>
        <div className="section-header-center reveal" style={{ marginBottom: '60px' }}>
          <h2 className="section-title">Pillars of Our <em>CSR Charter</em></h2>
          <p className="section-body" style={{ margin: '16px auto 0 auto', maxWidth: '600px' }}>
            Our corporate citizenship activities are organized under four strategic, long-term programs.
          </p>
        </div>

        <div className="bento-grid">
          
          <div className="bento-card featured reveal grid-span-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div className="bento-icon-container" style={{ marginBottom: 0, width: '48px', height: '48px' }}>
                <Sprout size={22} aria-hidden="true" />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: 'var(--gold-light)', margin: 0 }}>Farmer Empowerment &amp; Fair Sourcing</h3>
            </div>
            <p className="bento-body" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.7 }}>
              We partner directly with regional rice mills and farmers throughout West Bengal. By maintaining stable, fair-trade pricing contracts, we protect local farm families from market volatility. We also run regular training sessions on clean post-harvest drying and storage to maximize crop quality and profitability.
            </p>
          </div>

          <div className="bento-card reveal" style={{ background: 'var(--cream-warm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div className="bento-icon-container" style={{ marginBottom: 0, width: '48px', height: '48px' }}>
                <ShieldCheck size={22} aria-hidden="true" />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: 'var(--green-deep)', margin: 0 }}>Zero-Waste Circularity</h3>
            </div>
            <p className="bento-body" style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
              All industrial derivatives from our continuous physical refining plants are directed into secondary circular economies: fatty acids are converted into bio-diesel, rice bran wax is refined for cosmetics, and spent clay is safely repurposed as eco-friendly boiler fuel for cement kilns.
            </p>
          </div>

          <div className="bento-card reveal" style={{ background: 'var(--cream-warm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div className="bento-icon-container" style={{ marginBottom: 0, width: '48px', height: '48px' }}>
                <Heart size={22} aria-hidden="true" />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: 'var(--green-deep)', margin: 0 }}>Nutrition &amp; Welfare</h3>
            </div>
            <p className="bento-body" style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
              Malnutrition remains a critical challenge. In cooperation with local non-governmental organizations, we manufacture and distribute edible oils fortified with Vitamins A and D. We also sponsor health clinics and nutritional awareness camps in rural neighborhoods near our refinery.
            </p>
          </div>

          <div className="bento-card featured reveal grid-span-2" style={{ background: 'var(--green-deep)', color: 'var(--white)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div className="bento-icon-container" style={{ marginBottom: 0, width: '48px', height: '48px' }}>
                <GraduationCap size={22} aria-hidden="true" />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: 'var(--gold-light)', margin: 0 }}>Educational Support Sponsoring</h3>
            </div>
            <p className="bento-body" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.7 }}>
              Through educational infrastructure donations, AB Udyog improves learning environments in rural schools. We fund the installation of clean drinking water filtration systems, finance classroom infrastructure upgrades, supply textbooks, and award scholarship grants to promising young students.
            </p>
          </div>

        </div>
      </section>

      {/* ══ PLEDGE QUOTE ══ */}
      <section style={{ background: 'var(--cream-warm)', padding: '80px 8%', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }} className="reveal">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontStyle: 'italic', color: 'var(--green-deep)', lineHeight: 1.4, position: 'relative' }}>
            <span style={{ fontSize: '72px', position: 'absolute', top: '-40px', left: '0', opacity: 0.1, fontFamily: 'serif' }}>“</span>
            Sustainable development is not a corporate division at AB Udyog. It is the core philosophy that drives our supply chain, protects our environment, and secures the future of the farming families who make our operations possible.
            <span style={{ fontSize: '72px', position: 'absolute', bottom: '-80px', right: '0', opacity: 0.1, fontFamily: 'serif' }}>”</span>
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '30px' }}>
            <Award size={20} style={{ color: 'var(--gold)' }} aria-hidden="true" />
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--green-deep)' }}>The Board of Directors, AB Udyog Pvt. Ltd.</span>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <CtaBanner 
        title="Join Us in Making a Sustainable Impact"
        subtitle="Partner with our trust for green initiatives, education, and community welfare."
        btnText="Collaborate With Us"
        btnLink="/contact?ref=csr"
      />
    </>
  );
}
