"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import CtaBanner from '@/components/CtaBanner';
import { ShieldCheck, Flame, Droplets, Package, Award, UtensilsCrossed, Heart, Activity, Scale } from 'lucide-react';

/* ─── shared tokens (mirrors globals.css vars) ──────────────────── */
const G = '#122A1C';       // deep forest green
const GOLD = '#D4AF37';
const GOLD_L = '#E8BE5A';
const GOLD_DARK = '#8A6A10'; // Dark gold for high contrast on light backgrounds (WCAG AA compliant)
const CREAM = '#F9F9F6';
const CREAM_W = '#F2EFE9';
const BORDER = '#E2E2DC';
const MUTED = '#4F5450';

/* ─── spec table row ─────────────────────────────────────────────── */
const Row = ({ k, v }) => (
  <div style={{ display: 'flex', gap: '0', padding: '13px 0', borderBottom: `1px solid rgba(255,255,255,0.07)` }}>
    <span style={{ color: GOLD, fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', width: '120px', flexShrink: 0, paddingTop: '2px' }}>{k}</span>
    <span className="font-mono-specs" style={{ color: 'rgba(255,255,255,0.72)', fontSize: '13px', lineHeight: 1.6 }}>{v}</span>
  </div>
);

/* ─── dark text panel (reused for About, Products, Commitment) ───── */
const DarkPanel = ({ children }) => (
  <div style={{ background: G, padding: 'clamp(48px, 6vw, 88px) clamp(32px, 5vw, 72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    {children}
  </div>
);

/* ─── light image panel ──────────────────────────────────────────── */
const LightPanel = ({ bg = CREAM, children }) => (
  <div style={{ background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(40px, 5vw, 72px)' }}>
    {children}
  </div>
);

/* ─── advantages ─────────────────────────────────────────────────── */
const ADVANTAGES = [
  { icon: <ShieldCheck size={26} strokeWidth={1.5} />, label: 'Fortified\nVit. A & D' },
  { icon: <Flame size={26} strokeWidth={1.5} />, label: 'High Smoke\nPoint' },
  { icon: <Droplets size={26} strokeWidth={1.5} />, label: 'Essential\nFatty Acids' },
  { icon: <UtensilsCrossed size={26} strokeWidth={1.5} />, label: 'All Cooking\nStyles' },
  { icon: <Package size={26} strokeWidth={1.5} />, label: 'Hygienically\nPackaged' },
  { icon: <Award size={26} strokeWidth={1.5} />, label: 'FSSAI &\nFSSC 22000' },
];

/* ─── health benefits ────────────────────────────────────────────── */
const BENEFITS = [
  { icon: <Heart size={34} strokeWidth={1.2} />, title: 'Heart Health', body: 'Supports healthy cardiovascular function with a balanced fat composition in every bottle.' },
  { icon: <Scale size={34} strokeWidth={1.2} />, title: 'Cholesterol Control', body: 'Helps maintain healthy cholesterol levels — validated for heart-smart daily cooking.' },
  { icon: <Activity size={34} strokeWidth={1.2} />, title: 'Balanced Nutrition', body: 'A complete fatty acid profile — Omega 3, 6, and 9 — to nourish the whole family.' },
  { icon: <Droplets size={34} strokeWidth={1.2} />, title: 'Daily Use Ready', body: 'Light, neutral, and stable across all temperatures from gentle sauteing to deep frying.' },
];

export default function AbHealthPage() {
  useScrollReveal('.reveal', 0.1);

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO — centered, dark green, no CTA buttons
      ════════════════════════════════════════════════════════════ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: "url('https://abudyog.in/wp-content/uploads/2025/11/RAJA8723-scaled.jpg')", backgroundPosition: 'center 30%', opacity: 0.15 }} />
        <div className="hero-accent" />
        <div className="hero-content" style={{ textAlign: 'center', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ margin: '0 auto' }}>
            AB Health Edible Oils
          </h1>
          <p className="hero-subtitle" style={{ margin: '20px auto 0', maxWidth: '520px' }}>
            Purity-first edible oils — fortified, certified, and formulated for modern Indian kitchens.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          ABOUT — brand SVG left | dark text right
      ════════════════════════════════════════════════════════════ */}
      <div className="ab-split">
        <LightPanel bg={CREAM_W}>
          <Image
            src="https://abudyog.in/wp-content/uploads/2026/05/AB-HEALTH-Page-05.svg"
            alt="AB Health brand visual"
            width={500}
            height={460}
            style={{ width: '100%', maxWidth: '460px', height: 'auto' }}
            unoptimized
          />
        </LightPanel>
        <DarkPanel>
          <div className="reveal">
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.15, marginBottom: '20px' }}>
              About AB Health
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', lineHeight: 1.85, marginBottom: '28px', maxWidth: '400px' }}>
              AB Health is a consumer foods vertical of AB Udyog Pvt. Ltd., delivering premium edible oils designed for modern Indian kitchens. Every product is carefully processed, fortified, and quality-tested.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
              {['FSSAI Certified', 'FSSC 22000', 'Vit. A & D Fortified'].map(t => (
                <span key={t} style={{ padding: '5px 14px', border: `1px solid rgba(212,175,55,0.35)`, color: GOLD_L, fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t}</span>
              ))}
            </div>
            <Link href="/about" className="btn-primary" style={{ display: 'inline-block' }}>Know More About Us</Link>
          </div>
        </DarkPanel>
      </div>

      {/* ════════════════════════════════════════════════════════════
          PRODUCT 01 — dark text left | Soyabean Oil image right
      ════════════════════════════════════════════════════════════ */}
      <div id="products" className="ab-split">
        <DarkPanel>
          <div className="reveal">
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.15, marginBottom: '6px' }}>
              AB Health Soyabean Oil
            </h2>
            <p style={{ color: GOLD_L, fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '20px' }}>
              For special occasions &amp; everyday meals
            </p>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '14px', lineHeight: 1.85, marginBottom: '24px', maxWidth: '380px' }}>
              Rich in Omega 3 &amp; 6, AB Health Soyabean Oil is a versatile choice for daily cooking. Its high smoke point and light texture make it ideal for frying, sauteing, and every recipe.
            </p>
            <div style={{ marginBottom: '32px' }}>
              <Row k="Composition" v="Omega 3, 6 & 9 Fatty Acids" />
              <Row k="Smoke Point" v="High — ideal for deep frying" />
              <Row k="Processing" v="Physically refined & fortified" />
              <Row k="Certification" v="FSSAI Certified · FSSC 22000" />
            </div>
            <Link href="/contact?ref=soyabean-oil" className="btn-primary" style={{ display: 'inline-block' }}>Enquire Now</Link>
          </div>
        </DarkPanel>
        <LightPanel bg={CREAM}>
          <Image
            src="https://abudyog.in/wp-content/uploads/2026/05/AB-HEALTH-Page-03.svg"
            alt="AB Health Soyabean Oil — 1L pouch"
            width={480}
            height={520}
            style={{ width: 'auto', height: 'auto', maxWidth: '380px', maxHeight: '480px' }}
            unoptimized
          />
        </LightPanel>
      </div>

      {/* ════════════════════════════════════════════════════════════
          PRODUCT 02 — Rice Bran Oil image left | dark text right
      ════════════════════════════════════════════════════════════ */}
      <div className="ab-split">
        <LightPanel bg={CREAM_W}>
          <Image
            src="https://abudyog.in/wp-content/uploads/2026/05/AB-HEALTH-Page-04.svg"
            alt="AB Health Rice Bran Oil — 1L pouch"
            width={480}
            height={520}
            style={{ width: 'auto', height: 'auto', maxWidth: '380px', maxHeight: '480px' }}
            unoptimized
          />
        </LightPanel>
        <DarkPanel>
          <div className="reveal">
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.15, marginBottom: '6px' }}>
              AB Health Rice Bran Oil
            </h2>
            <p style={{ color: GOLD_L, fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Heart Smart · Naturally Refined
            </p>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '14px', lineHeight: 1.85, marginBottom: '24px', maxWidth: '380px' }}>
              Known for its heart-friendly benefits, AB Health Rice Bran Oil helps maintain healthy cholesterol levels while offering balanced, nutritious cooking.
            </p>
            <div style={{ marginBottom: '32px' }}>
              <Row k="Key Benefit" v="Supports healthy cholesterol" />
              <Row k="Oryzanol" v="Natural antioxidant compound" />
              <Row k="Processing" v="Physically refined & fortified" />
              <Row k="Certification" v="FSSAI Certified · FSSC 22000" />
            </div>
            <Link href="/contact?ref=rice-bran-oil" className="btn-primary" style={{ display: 'inline-block' }}>Enquire Now</Link>
          </div>
        </DarkPanel>
      </div>

      {/* ════════════════════════════════════════════════════════════
          WHY CHOOSE — 3×2 bordered icon grid on deep green
      ════════════════════════════════════════════════════════════ */}
      <section style={{ background: G, padding: '88px 8%' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.15 }}>
            Why Choose AB Health
          </h2>
        </div>
        {/* 3-col × 2-row grid — no overflow possible */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: `1px solid rgba(255,255,255,0.1)`, maxWidth: '900px', margin: '0 auto' }}>
          {ADVANTAGES.map((item, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '48px 28px',
                gap: '18px',
                borderRight: (i + 1) % 3 !== 0 ? `1px solid rgba(255,255,255,0.1)` : 'none',
                borderBottom: i < 3 ? `1px solid rgba(255,255,255,0.1)` : 'none',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.06)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{ color: GOLD }}>{item.icon}</span>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', lineHeight: 1.7, margin: 0, whiteSpace: 'pre-line' }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          HEALTH BENEFITS — 2×2 bordered grid
      ════════════════════════════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: '100px 8%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '52px', flexWrap: 'wrap', gap: '24px', maxWidth: '1200px', margin: '0 auto 52px' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: G, lineHeight: 1.15 }}>Health Benefits</h2>
          </div>
          <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.75, maxWidth: '340px', margin: 0 }}>
            Oils that do more than just cook — they nourish every meal.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', border: `1px solid ${BORDER}`, maxWidth: '1000px', margin: '0 auto' }}>
          {BENEFITS.map((item, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                padding: '52px 48px',
                borderRight: i % 2 === 0 ? `1px solid ${BORDER}` : 'none',
                borderBottom: i < 2 ? `1px solid ${BORDER}` : 'none',
                background: 'var(--white)',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = CREAM_W}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--white)'}
            >
              <span style={{ color: GOLD_DARK, display: 'block', marginBottom: '20px' }}>{item.icon}</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: G, marginBottom: '10px', lineHeight: 1.2 }}>
                {item.title}
              </h3>
              <p style={{ color: MUTED, fontSize: '14px', lineHeight: 1.8, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          COMMITMENT — plant photo left | dark text right
      ════════════════════════════════════════════════════════════ */}
      <div className="ab-split" style={{ minHeight: '500px' }}>
        {/* Photo — fixed height, cover */}
        <div style={{ position: 'relative', minHeight: '500px', overflow: 'hidden' }}>
          <Image
            src="https://abudyog.in/wp-content/uploads/2025/11/RAJA8723-scaled.jpg"
            alt="AB Udyog manufacturing plant"
            fill
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            unoptimized
          />
        </div>
        <DarkPanel>
          <div className="reveal">
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.15, marginBottom: '20px' }}>
              Our Commitment
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', lineHeight: 1.85, marginBottom: '28px', maxWidth: '400px' }}>
              Every bottle leaves our facility fully tested and certified. We combine manufacturing precision with a genuine commitment to the health of every household we reach.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
              {['FSSAI Certified', 'FSSC 22000'].map(t => (
                <span key={t} style={{ padding: '7px 18px', border: `1px solid rgba(212,175,55,0.4)`, color: GOLD_L, fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{t}</span>
              ))}
            </div>
            <Link href="/contact?ref=ab-health" className="btn-primary" style={{ display: 'inline-block' }}>Get a Quote</Link>
          </div>
        </DarkPanel>
      </div>

      {/* ════════════════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════════════════ */}
      <CtaBanner
        title="Make the Healthier Choice Today"
        subtitle="Switch to AB Health oils for better cooking and better living. Contact our team for bulk orders and trade enquiries."
        btnText="Contact Us"
        btnLink="/contact?ref=ab-health"
      />
    </>
  );
}
