"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import CtaBanner from '@/components/CtaBanner';
import AbHealthHeroSlider from '@/components/AbHealthHeroSlider';
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
  <div style={{ background: G, padding: 'clamp(56px, 6vw, 92px) clamp(32px, 5vw, 72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'clamp(480px, 55vh, 580px)' }}>
    {children}
  </div>
);

/* ─── full image panel (edge-to-edge, zero whitespace margins, responsive) ───── */
const FullImagePanel = ({ children }) => (
  <div style={{ position: 'relative', width: '100%', minHeight: 'clamp(480px, 55vh, 580px)', overflow: 'hidden' }}>
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
          HERO — SEO Banners Slider Carousel
      ════════════════════════════════════════════════════════════ */}
      <AbHealthHeroSlider />

      {/* ════════════════════════════════════════════════════════════
          ABOUT — brand SVG left | dark text right
      ════════════════════════════════════════════════════════════ */}
      <div className="ab-split" style={{ minHeight: 'clamp(480px, 55vh, 580px)' }}>
        <FullImagePanel>
          <Image
            src="/ab-health-edible-oils-brand-showcase-kolkata.svg"
            alt="AB Health Edible Oils Brand Showcase — Rice Bran & Soyabean Oil"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </FullImagePanel>
        <DarkPanel>
          <div className="reveal">
            <Image
              src="/ab-health-brand-logo-vector.svg"
              alt="AB Health Brand Logo"
              width={160}
              height={50}
              style={{ width: '160px', height: 'auto', marginBottom: '16px' }}
            />
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.15, marginBottom: '20px' }}>
              About AB Health
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', lineHeight: 1.85, marginBottom: '28px', maxWidth: '400px' }}>
              AB Health is a consumer foods vertical of AB Udyog Pvt. Ltd., delivering premium edible oils designed for modern Indian kitchens. Every product is carefully processed, fortified, and quality-tested.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
              {['FSSAI Certified', 'FSSC 22000', 'Vit. A & D Fortified'].map(t => (
                <span key={t} style={{ padding: '5px 14px', border: `1px solid rgba(212,175,55,0.4)`, color: GOLD_L, fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxSizing: 'border-box' }}>{t}</span>
              ))}
            </div>
            <Link href="/about" className="btn-primary" style={{ display: 'inline-block' }}>Know More About Us</Link>
          </div>
        </DarkPanel>
      </div>

      {/* ════════════════════════════════════════════════════════════
          PRODUCT 01 — dark text left | Soyabean Oil image right
      ════════════════════════════════════════════════════════════ */}
      <div id="products" className="ab-split" style={{ minHeight: 'clamp(480px, 55vh, 580px)' }}>
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
        <FullImagePanel>
          <Image
            src="/ab-health-refined-soyabean-oil-pouch-1l.svg"
            alt="AB Health Refined Soyabean Oil 1L Pouch"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </FullImagePanel>
      </div>

      {/* ════════════════════════════════════════════════════════════
          PRODUCT 02 — Rice Bran Oil image left | dark text right
      ════════════════════════════════════════════════════════════ */}
      <div className="ab-split" style={{ minHeight: 'clamp(480px, 55vh, 580px)' }}>
        <FullImagePanel>
          <Image
            src="/ab-health-physically-refined-rice-bran-oil-tin-15l.svg"
            alt="AB Health Physically Refined Rice Bran Oil 15L Tin"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </FullImagePanel>
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
          WHY CHOOSE — 3×2 grid on Soft Champagne Gold (#F5E9C6 / secondary-container) per DESIGN.md
      ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#F5E9C6', padding: '96px 8%', borderTop: '1px solid rgba(212, 175, 55, 0.35)', borderBottom: '1px solid rgba(212, 175, 55, 0.35)' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span style={{ color: '#745c00', fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
            Unmatched Quality Standards
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: G, lineHeight: 1.15 }}>
            Why Choose AB Health
          </h2>
        </div>
        {/* 3-col × 2-row grid — sharp 0px corners, white cards, champagne gold border */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: `1px solid rgba(212, 175, 55, 0.4)`, maxWidth: '920px', margin: '0 auto', background: '#FFFFFF', borderRadius: 0, boxShadow: '0 4px 20px rgba(116, 92, 0, 0.05)' }}>
          {ADVANTAGES.map((item, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '44px 24px',
                gap: '16px',
                borderRight: (i + 1) % 3 !== 0 ? `1px solid rgba(212, 175, 55, 0.25)` : 'none',
                borderBottom: i < 3 ? `1px solid rgba(212, 175, 55, 0.25)` : 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(245, 233, 198, 0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#FFFFFF';
              }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: 0, background: 'rgba(212, 175, 55, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#745c00', flexShrink: 0 }}>
                {item.icon}
              </div>
              <p style={{ color: G, fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', lineHeight: 1.6, margin: 0, whiteSpace: 'pre-line' }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          HEALTH BENEFITS — 2×2 grid on Alabaster White (#F9F9F6)
      ════════════════════════════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: '100px 8%' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px', maxWidth: '640px', margin: '0 auto 52px' }}>
          <span style={{ color: GOLD_DARK, fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
            Nourishment In Every Drop
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: G, lineHeight: 1.15, marginBottom: '14px' }}>
            Health Benefits
          </h2>
          <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7, margin: '0 auto' }}>
            Oils that do more than just cook — they nourish every meal.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', border: `1px solid ${BORDER}`, maxWidth: '1000px', margin: '0 auto', background: '#FFFFFF', borderRadius: 0 }}>
          {BENEFITS.map((item, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                padding: '52px 48px',
                borderRight: i % 2 === 0 ? `1px solid ${BORDER}` : 'none',
                borderBottom: i < 2 ? `1px solid ${BORDER}` : 'none',
                background: '#FFFFFF',
                transition: 'background 0.25s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = CREAM_W}
              onMouseLeave={e => e.currentTarget.style.background = '#FFFFFF'}
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
      <div className="ab-split" style={{ minHeight: 'clamp(480px, 55vh, 580px)' }}>
        {/* Photo — fixed height, cover */}
        <FullImagePanel>
          <Image
            src="/ab_udyog_refinery_control_room_plc_automation.png"
            alt="AB Udyog plant engineer operating automated PLC refinery control systems"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </FullImagePanel>
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
                <span key={t} style={{ padding: '7px 18px', border: `1px solid rgba(212,175,55,0.4)`, color: GOLD_L, fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxSizing: 'border-box' }}>{t}</span>
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
