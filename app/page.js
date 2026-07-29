"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import CtaBanner from '@/components/CtaBanner';
import HomeTrustBar from '@/components/HomeTrustBar';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Wheat, Sparkles, FlaskConical, Microscope, Fuel } from 'lucide-react';

export default function Home() {
  useScrollReveal('.reveal', 0.1);

  return (
    <>
      {/* ══ HERO (ANIMATED — FRAMER MOTION) ══ */}
      <HeroSection />

      {/* ══ TRUST & RETAIL AVAILABILITY BAR ══ */}
      <HomeTrustBar />

      {/* ══ ABOUT OVERVIEW ══ */}
      <section className="about-overview-section" id="about">
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <Image className="about-img-main" src="/ab-udyog-rice-bran-oil-refinery-plant-kolkata.png" alt="AB Udyog Continuous Solvent Extraction & Physical Rice Bran Oil Refinery Plant in Kolkata" width={800} height={600} style={{ objectFit: 'cover' }} />
          </div>
          <div className="about-text reveal">
            <h2 className="section-title">A Legacy Forged in <em>Purity &amp; Progress</em></h2>
            <br />
            <p className="section-body">
              Founded with a mission to bring healthier cooking solutions to every household, AB Udyog Pvt. Ltd. has evolved into one of Eastern India's leading producers of rice bran oil and value-added by-products. With a 300 TPD solvent-extraction unit and a 150 TPD refinery, we combine traditional values with cutting-edge technology.
            </p>
            <div className="about-tags" style={{ marginTop: '24px' }}>
              <span className="about-tag">Purity</span>
              <span className="about-tag">Innovation</span>
              <span className="about-tag">Integrity</span>
              <span className="about-tag">ISO Certified</span>
              <span className="about-tag">FSSAI</span>
            </div>
            <br /><br />
            <Link href="/about" className="btn-primary">Know More About Us</Link>
          </div>
        </div>
      </section>

      {/* ══ SUSTAINABLE SOURCING PARALLAX ══ */}
      <section className="parallax-window-section panel-left" id="sourcing">
        <div className="parallax-window-bg" style={{ backgroundImage: "url('/bengal_rice_belt_paddy_fields_refinery_sourcing.png')" }} />
        <div className="parallax-window-grid">
          <div className="parallax-window-spacer" />
          <div className="parallax-window-panel">
            <h2 className="section-title">Sourced from the <em>Bengal Rice Belt</em></h2>
            <p className="section-body">
              We operate at the core of India's most fertile rice-growing valleys. Sourcing fresh raw bran directly from regional rice mills within hours of milling preserves crucial nutrients, ensures absolute freshness, and supports local farm livelihoods.
            </p>
            <div className="parallax-window-stats">
              <div className="parallax-window-stat">
                <div className="parallax-window-stat-num">100<span className="parallax-window-stat-unit">%</span></div>
                <div className="parallax-window-stat-label">Traceable Farm-to-Refinery Loop</div>
              </div>
              <div className="parallax-window-stat">
                <div className="parallax-window-stat-num">3k<span className="parallax-window-stat-unit">+</span></div>
                <div className="parallax-window-stat-label">Farmers Integrated in Network</div>
              </div>
              <div className="parallax-window-stat">
                <div className="parallax-window-stat-num">Zero<span className="parallax-window-stat-unit">Waste</span></div>
                <div className="parallax-window-stat-label">Eco-Friendly Circular Value Chain</div>
              </div>
              <div className="parallax-window-stat">
                <div className="parallax-window-stat-num">Fresh<span className="parallax-window-stat-unit">Bran</span></div>
                <div className="parallax-window-stat-label">Processed Within Hours of Milling</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CORE BRANDS & MANUFACTURING VERTICALS ══ */}
      <section className="products-section" id="products">
        <div className="section-header-center reveal" style={{ marginBottom: '48px', textAlign: 'center' }}>
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#FFD700', 
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '11px', 
            fontWeight: 700, 
            letterSpacing: '0.18em', 
            textTransform: 'uppercase', 
            marginBottom: '12px'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFD700', display: 'inline-block' }}></span>
            OUR BRANDS &amp; PRODUCTS
          </div>
          <h2 className="section-title">Refining Excellence for <em>Home &amp; Industry</em></h2>
          <p className="section-body" style={{ margin: '16px auto 0 auto', maxWidth: '640px' }}>
            From daily consumer cooking oils to high-protein feeds and refined industrial by-products.
          </p>
        </div>

        {/* 4 Distinct Elevated Card Boxes Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '24px', 
            maxWidth: '1280px', 
            margin: '0 auto' 
          }}
        >
          {/* Card 1: Jeevan Rekha */}
          <Link 
            href="https://jeevanrekhafoods.com/products" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="reveal"
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#0B2316',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              textDecoration: 'none',
              overflow: 'hidden',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#FFD700';
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.45)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Edge-to-Edge Image Box — Uncropped Product Pouches Display */}
            <div style={{ position: 'relative', width: '100%', height: '220px', background: '#FFFFFF', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image 
                src="/jeevan-rekha-rice-bran-mustard-soyabean-oil-variations.png" 
                alt="Jeevan Rekha Rice Bran Oil, Mustard Oil & Soyabean Oil Range" 
                fill 
                unoptimized
                sizes="(max-width: 768px) 100vw, 25vw" 
                style={{ objectFit: 'contain', objectPosition: 'center', padding: '12px' }} 
              />
            </div>
            {/* Bottom Card Body */}
            <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', background: '#0B2316' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '8px' }}>
                  Jeevan Rekha
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.25 }}>
                  Rice Bran &amp; Mustard Oil
                </h3>
                <p style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', lineHeight: 1.55, margin: 0 }}>
                  Physically refined Rice Bran Oil &amp; cold-pressed Mustard Oil — crafted for purity, flavor, and daily health.
                </p>
              </div>
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#FFD700', fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                <span>Explore Foods</span>
                <span style={{ fontSize: '14px' }}>→</span>
              </div>
            </div>
          </Link>

          {/* Card 2: AB Health */}
          <Link 
            href="/products/ab-health" 
            className="reveal"
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#0B2316',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              textDecoration: 'none',
              overflow: 'hidden',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#FFD700';
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.45)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Edge-to-Edge Image Box — Zero Padding */}
            <div style={{ position: 'relative', width: '100%', height: '220px', background: '#0B2316', overflow: 'hidden' }}>
              <Image 
                src="/ab-health-edible-oils-brand-showcase-kolkata.svg" 
                alt="AB Health Oils" 
                fill 
                unoptimized
                sizes="(max-width: 768px) 100vw, 25vw" 
                style={{ objectFit: 'cover', padding: 0 }} 
              />
            </div>
            {/* Bottom Card Body */}
            <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', background: '#0B2316' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '8px' }}>
                  AB Health
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.25 }}>
                  AB Health Oils
                </h3>
                <p style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', lineHeight: 1.55, margin: 0 }}>
                  100% physically refined rice bran &amp; health oil blends — rich in natural Oryzanol for active family wellness.
                </p>
              </div>
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#FFD700', fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                <span>Explore AB Health</span>
                <span style={{ fontSize: '14px' }}>→</span>
              </div>
            </div>
          </Link>

          {/* Card 3: Magik DORB */}
          <Link 
            href="/products/magik-dorb" 
            className="reveal"
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#0B2316',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              textDecoration: 'none',
              overflow: 'hidden',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#FFD700';
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.45)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Top Image Box — /abu_dorb_combo.svg Filled Edge-to-Edge Without Margins */}
            <div style={{ position: 'relative', width: '100%', height: '220px', background: '#0B2316', overflow: 'hidden' }}>
              <Image 
                src="/abu_dorb_combo.svg" 
                alt="Magik DORB Animal Feed" 
                fill 
                unoptimized
                sizes="(max-width: 768px) 100vw, 25vw" 
                style={{ objectFit: 'cover', padding: 0 }} 
              />
            </div>
            {/* Bottom Card Body */}
            <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', background: '#0B2316' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '8px' }}>
                  Super Fine Feed Grade
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.25 }}>
                  Magik DORB Feed
                </h3>
                <p style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', lineHeight: 1.55, margin: 0 }}>
                  Micro-milled, high-protein de-oiled rice bran — wholesome, nutrient-rich feed for fish, poultry, cattle, and swine.
                </p>
              </div>
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#FFD700', fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                <span>Explore Magik DORB</span>
                <span style={{ fontSize: '14px' }}>→</span>
              </div>
            </div>
          </Link>

          {/* Card 4: Industrial Bran Derivatives */}
          <Link 
            href="/products" 
            className="reveal"
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#0B2316',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              textDecoration: 'none',
              overflow: 'hidden',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#FFD700';
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.45)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Edge-to-Edge Image Box — Zero Padding */}
            <div style={{ position: 'relative', width: '100%', height: '220px', background: '#0B2316', overflow: 'hidden' }}>
              <Image 
                src="/rice_bran_wax_product.png" 
                alt="Industrial Bran Derivatives" 
                fill 
                sizes="(max-width: 768px) 100vw, 25vw" 
                style={{ objectFit: 'cover', padding: 0 }} 
              />
            </div>
            {/* Bottom Card Body */}
            <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', background: '#0B2316' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FFD700', marginBottom: '8px' }}>
                  Industrial
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.25 }}>
                  Bran Derivatives
                </h3>
                <p style={{ fontFamily: 'var(--font-outfit)', fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', lineHeight: 1.55, margin: 0 }}>
                  Refined wax, lecithin, gums, &amp; fatty acids — premium industrial by-products for food, pharma, and energy.
                </p>
              </div>
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#FFD700', fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                <span>View All</span>
                <span style={{ fontSize: '14px' }}>→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ══ CIRCULAR VALUE CHAIN — INDUSTRIAL DERIVATIVES MATRIX ══ */}
      <section 
        id="byproducts"
        style={{ 
          background: 'var(--cream)', 
          padding: '96px 8%',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="section-header-center reveal" style={{ marginBottom: '48px', textAlign: 'center' }}>
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--gold-dark)', 
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '11px', 
            fontWeight: 700, 
            letterSpacing: '0.18em', 
            textTransform: 'uppercase', 
            marginBottom: '12px'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-dark)', display: 'inline-block' }}></span>
            ZERO-WASTE VALUE CHAIN
          </div>
          <h2 className="section-title" style={{ color: 'var(--green-deep)', maxWidth: '820px', margin: '0 auto' }}>
            Commercial-Grade <em>Bran Derivatives &amp; Feeds</em>
          </h2>
          <p className="section-body" style={{ color: 'var(--muted)', margin: '16px auto 0 auto', maxWidth: '640px', textAlign: 'center' }}>
            High-purity bio-nutrients and technical by-products recovered during physical refining and continuous solvent extraction.
          </p>
        </div>

        {/* 6-Card Symmetrical Grid — Crisp White Cards, Zero Image Overlays */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '1280px',
            margin: '0 auto'
          }}
        >
          {[
            {
              slug: 'de-oiled-rice-bran',
              title: 'De-Oiled Rice Bran (DORB)',
              category: 'ANIMAL NUTRITION',
              metric: '16.0% MIN PROTEIN',
              desc: 'Magik, ABU Platinum & Premium DORB — protein-rich feed enhancing growth for aquaculture, poultry, and cattle.',
              image: '/banners/products/ab-dorb-podium-feed-showcase-banner-desktop.svg',
              link: '/products/de-oiled-rice-bran'
            },
            {
              slug: 'rice-bran-wax',
              title: 'Rice Bran Wax',
              category: 'COSMETICS & POLISHES',
              metric: '76°C MELTING POINT',
              desc: 'Hard, crystalline natural vegetable wax offering binding, thickener, and moisture barrier properties.',
              image: '/rice_bran_wax_product.png',
              link: '/products/rice-bran-wax'
            },
            {
              slug: 'rice-bran-gums',
              title: 'Rice Bran Gums',
              category: 'INDUSTRIAL EMULSIONS',
              metric: 'ACTIVE PHOSPHATIDES',
              desc: 'Versatile emulsifying and stabilizing phosphatide agent for animal feed binders and industrial sizing.',
              image: '/rice_bran_gums_product.png',
              link: '/products/rice-bran-gums'
            },
            {
              slug: 'rice-bran-lecithin',
              title: 'Rice Bran Lecithin',
              category: 'FOOD & NUTRACEUTICALS',
              metric: 'NON-GMO ALTERNATIVE',
              desc: 'Natural non-GMO emulsifier and antioxidant ideal for bakery, confectionery, and personal care.',
              image: '/rice_bran_lecithin_product.png',
              link: '/products/rice-bran-lecithin'
            },
            {
              slug: 'rice-bran-fatty-acid',
              title: 'Rice Bran Fatty Acid',
              category: 'BIOFUELS & SOAPS',
              metric: '99.5% FATTY MATTER',
              desc: 'High-purity distilled semi-solid fatty acid distillate for soap manufacturing and bio-diesel feedstock.',
              image: '/rice_bran_fatty_acid_product.png',
              link: '/products/rice-bran-fatty-acid'
            },
            {
              slug: 'spent-bleaching-earth',
              title: 'Spent Bleaching Earth',
              category: 'KILN FUEL & SOIL',
              metric: '20.0% RESIDUAL OIL',
              desc: 'Eco-friendly clay residue enriched with residual oil for high-calorific cement kiln fuel and soil conditioning.',
              image: '/spent_bleaching_earth_product.png',
              link: '/products/spent-bleaching-earth'
            }
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                textDecoration: 'none',
                overflow: 'hidden',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--gold-dark)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(18, 42, 28, 0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Product Thumbnail Banner — Pure Crisp Image, Zero Overlay */}
              <div style={{ position: 'relative', width: '100%', height: '190px', background: '#F9F9F6', overflow: 'hidden' }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                />
                
                {/* Technical Metric pill */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(18, 42, 28, 0.92)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid var(--gold)',
                  padding: '4px 10px',
                  color: 'var(--gold-light)',
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.1em'
                }}>
                  {item.metric}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {item.category}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--green-deep)', marginBottom: '10px', lineHeight: 1.25 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>

                {/* Card CTA Link Footer */}
                <div style={{
                  marginTop: '20px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  color: 'var(--green-deep)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase'
                }}>
                  <span>Technical Specs &amp; COA</span>
                  <span style={{ fontSize: '14px', color: 'var(--gold-dark)', transition: 'transform 0.25s ease' }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══ INDUSTRIAL INFRASTRUCTURE PARALLAX ══ */}
      <section className="parallax-window-section" id="infrastructure">
        <div className="parallax-window-bg" style={{ backgroundImage: "url('/DJI_0140.jpg')" }} />
        <div className="parallax-window-grid">
          <div className="parallax-window-spacer" />
          <div className="parallax-window-panel">
            <h2 className="section-title">Built at <em>Industrial Scale</em></h2>
            <p className="section-body">
              At AB Udyog, our integrated solvent-extraction and physical refining facility operates continuously to output premium oils and high-protein feeds. Our on-site labs and fully certified processes verify product purity at scale.
            </p>
            <div className="parallax-window-stats">
              <div className="parallax-window-stat">
                <div className="parallax-window-stat-num">300<span className="parallax-window-stat-unit">TPD</span></div>
                <div className="parallax-window-stat-label">Solvent Extraction Capacity</div>
              </div>
              <div className="parallax-window-stat">
                <div className="parallax-window-stat-num">150<span className="parallax-window-stat-unit">TPD</span></div>
                <div className="parallax-window-stat-label">Physical Refining Capacity</div>
              </div>
              <div className="parallax-window-stat">
                <div className="parallax-window-stat-num">30<span className="parallax-window-stat-unit">Yrs</span></div>
                <div className="parallax-window-stat-label">Refinement legacy in East India</div>
              </div>
              <div className="parallax-window-stat">
                <div className="parallax-window-stat-num">5<span className="parallax-window-stat-unit">Lines</span></div>
                <div className="parallax-window-stat-label">Certified By-Product Lines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <CtaBanner 
        title="Partner With Us for Premium Rice-Bran Products"
        subtitle="Delivered globally with reliability, traceability, and scale."
        btnText="Contact Our Team"
        btnLink="/contact"
      />
    </>
  );
}
