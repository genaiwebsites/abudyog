"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Wheat, Sparkles, FlaskConical, Microscope, Fuel } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import CtaBanner from '@/components/CtaBanner';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal('.reveal', 0.1);

  return (
    <>
      {/* ══ HERO (ANIMATED — FRAMER MOTION) ══ */}
      <HeroSection />

      {/* ══ ABOUT ══ */}
      <section id="about">
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <Image className="about-img-main" src="/factory1.webp" alt="AB Udyog Facility" width={800} height={600} style={{ objectFit: 'cover' }} />
          </div>
          <div className="about-text reveal">
            <h2 className="section-title">A Legacy Forged in<br />Purity &amp; Progress</h2>
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
            <h2 className="section-title">Sourced from the<br />Bengal Rice Belt</h2>
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

      {/* ══ PRODUCTS ══ */}
      <section className="products-section" id="products">
        <div className="products-header">
          <div>
            <h2 className="section-title reveal">From Field to Table,<br />Purely Refined</h2>
          </div>
          <p className="section-body reveal" style={{ margin: 0, maxWidth: '340px' }}>
            Three distinct product lines spanning edible oils, animal nutrition, and premium industrial derivatives.
          </p>
        </div>

        <div className="products-grid">
          <Link href="https://jeevanrekhafoods.com/products" target="_blank" rel="noopener noreferrer" className="product-card reveal">
            <Image className="product-img" src="/jr_oil_combo.png" alt="Jeevan Rekha Rice Bran & Mustard Oil" width={600} height={800} style={{ objectFit: 'cover' }} />
            <div className="product-overlay">
              <div className="product-tag">Jeevan Rekha Foods</div>
              <div className="product-name">Rice Bran<br />&amp; Mustard Oil</div>
              <div className="product-desc">Physically refined Rice Bran Oil and cold-pressed Kachhi Ghani Mustard Oil — crafted for purity, flavor, and healthier everyday living.</div>
              <span className="product-link">Explore Foods</span>
            </div>
          </Link>
          <Link href="/products/de-oiled-rice-bran" className="product-card reveal">
            <Image className="product-img" src="/abu_dorb_combo.svg" alt="AB DORB" width={600} height={800} style={{ objectFit: 'cover' }} />
            <div className="product-overlay">
              <div className="product-tag">Animal Feed · DORB</div>
              <div className="product-name">AB DORB</div>
              <div className="product-desc">High-protein de-oiled rice bran — wholesome nutrition for fish, poultry, cattle, and swine.</div>
              <span className="product-link">About DORB</span>
            </div>
          </Link>
          <Link href="/products" className="product-card reveal">
            <Image className="product-img" src="/rice_bran_wax.png" alt="Derivatives" width={600} height={800} style={{ objectFit: 'cover' }} />
            <div className="product-overlay">
              <div className="product-tag">Industrial</div>
              <div className="product-name">Bran<br />Derivatives</div>
              <div className="product-desc">Wax, lecithin, gums, and fatty acids — premium by-products for food, pharma, and industrial use.</div>
              <span className="product-link">View All</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ══ BYPRODUCTS BENTO ══ */}
      <section className="bento-section" id="byproducts">
        <h2 className="section-title reveal">Commercial-Grade<br />Bran Derivatives</h2>
        <div className="bento-grid">
          <div className="bento-card featured reveal">
            <div className="bento-icon-container">
              <Wheat size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">De-Oiled Rice Bran (DORB)</div>
            <p className="bento-body" style={{ marginTop: '12px', maxWidth: '480px' }}>Magik, ABU Platinum &amp; ABU Premium DORB — protein-rich, low-fat nutrition designed to enhance growth, feed conversion, and overall performance for fish, pig, poultry, and cattle. Trusted by farmers, season after season.</p>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon-container">
              <Sparkles size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">Rice Bran Wax</div>
            <p className="bento-body">Premium natural wax used in cosmetics, polishes, and food applications — offering excellent binding and structural properties.</p>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon-container">
              <FlaskConical size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">Rice Bran Gums</div>
            <p className="bento-body">Versatile emulsifying and stabilizing agent widely utilized in the food and pharmaceutical industries.</p>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon-container">
              <Microscope size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">Rice Bran Lecithin</div>
            <p className="bento-body">Natural emulsifier and antioxidant ideal for bakery, confectionery, and nutraceutical formulations.</p>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon-container">
              <Fuel size={24} aria-hidden="true" />
            </div>
            <div className="bento-title">Fatty Acids &amp; Spent Earth</div>
            <p className="bento-body">High-quality fatty acid extracts and eco-friendly spent earth for industrial reuse and biofuel production.</p>
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIAL INFRASTRUCTURE PARALLAX ══ */}
      <section className="parallax-window-section" id="infrastructure">
        <div className="parallax-window-bg" style={{ backgroundImage: "url('/DJI_0140.jpg')" }} />
        <div className="parallax-window-grid">
          <div className="parallax-window-spacer" />
          <div className="parallax-window-panel">
            <h2 className="section-title">Built at<br />Industrial Scale</h2>
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

      {/* ══ CERTS ══ */}
      <section className="certs-section reveal">
        <div className="section-header-center">
          <h2 className="section-title">Certified for<br />Global Standards</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
          <Image className="certs-img" src="https://2025.abudyog.in/wp-content/uploads/2025/11/certificates-e1763163163535.png" alt="Certifications" width={800} height={200} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <CtaBanner 
        title={<>Partner With Us for<br />Premium Rice-Bran Products</>}
        subtitle="Delivered globally with reliability, traceability, and scale."
        btnText="Contact Our Team"
        btnLink="/contact"
      />
    </>
  );
}
