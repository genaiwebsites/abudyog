"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Droplet, ShieldCheck, Settings, Leaf, Sprout, Layers, Activity, Recycle } from 'lucide-react';

export default function Home() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* ══ HERO (HOMEPAGE COVER BLEND) ══ */}
      <section className="hero-home" id="hero">
        <div className="hero-bg"></div>
        <div className="hero-glow"></div>
        
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>Since 1994 · Eastern India's Finest</span>
          </div>
          <h1 className="hero-title">
            Rooted in Quality,<br />
            <em>Driven by Innovation</em>
          </h1>
          <p className="hero-subtitle">
            A fully integrated rice bran processing facility delivering consistent, high-grade products to households and industries at scale.
          </p>
          <div className="hero-actions">
            <Link href="/products" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Explore Products <ArrowRight size={16} /></Link>
            <Link href="/about" className="btn-ghost" style={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: 'var(--white)' }}>Our Story</Link>
          </div>
          
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">300<span style={{ fontSize: '22px' }}>+</span></div>
              <div className="hero-stat-label">TPD Extraction</div>
            </div>
            <div>
              <div className="hero-stat-num">150<span style={{ fontSize: '22px' }}>+</span></div>
              <div className="hero-stat-label">TPD Refinery</div>
            </div>
            <div>
              <div className="hero-stat-num">30<span style={{ fontSize: '22px' }}>+</span></div>
              <div className="hero-stat-label">Years Legacy</div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <div className="ticker">
        <div className="ticker-track">
          <div className="ticker-item">ISO Certified <span className="ticker-dot"></span></div>
          <div className="ticker-item">FSSAI Compliant <span className="ticker-dot"></span></div>
          <div className="ticker-item">Rice Bran Oil <span className="ticker-dot"></span></div>
          <div className="ticker-item">Mustard Oil <span className="ticker-dot"></span></div>
          <div className="ticker-item">DORB <span className="ticker-dot"></span></div>
          <div className="ticker-item">Rice Bran Wax <span className="ticker-dot"></span></div>
          <div className="ticker-item">Rice Bran Lecithin <span className="ticker-dot"></span></div>
          <div className="ticker-item">Fatty Acids <span className="ticker-dot"></span></div>
          <div className="ticker-item">300 TPD Capacity <span className="ticker-dot"></span></div>
          <div className="ticker-item">Eastern India's Finest <span className="ticker-dot"></span></div>
          {/* duplicate for seamless loop */}
          <div className="ticker-item">ISO Certified <span className="ticker-dot"></span></div>
          <div className="ticker-item">FSSAI Compliant <span className="ticker-dot"></span></div>
          <div className="ticker-item">Rice Bran Oil <span className="ticker-dot"></span></div>
          <div className="ticker-item">Mustard Oil <span className="ticker-dot"></span></div>
          <div className="ticker-item">DORB <span className="ticker-dot"></span></div>
          <div className="ticker-item">Rice Bran Wax <span className="ticker-dot"></span></div>
          <div className="ticker-item">Rice Bran Lecithin <span className="ticker-dot"></span></div>
          <div className="ticker-item">Fatty Acids <span className="ticker-dot"></span></div>
          <div className="ticker-item">300 TPD Capacity <span className="ticker-dot"></span></div>
          <div className="ticker-item">Eastern India's Finest <span className="ticker-dot"></span></div>
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <section id="about">
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <div className="about-frame"></div>
            <Image className="about-img-main" src="/refinery_plant.png" alt="AB Udyog Facility" width={800} height={600} style={{ objectFit: 'cover' }} />
            <div className="about-img-badge">
              <div className="about-badge-num">30+</div>
              <div className="about-badge-label">Years of<br />Excellence</div>
            </div>
          </div>
          <div className="about-text reveal">
            <div className="section-eyebrow">Our Legacy</div>
            <h2 className="section-title">A Legacy Forged in<br /><em>Purity &amp; Progress</em></h2>
            <br />
            <p className="section-body">
              Founded with a mission to bring healthier cooking solutions to every household, AB Udyog Pvt. Ltd. has evolved into one of Eastern India's leading producers of rice bran oil and value-added by-products. With a 300 TPD solvent-extraction unit and a 150 TPD refinery, we combine traditional values with cutting-edge technology.
            </p>
            <div className="about-tags">
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

      {/* ══ PRODUCTS ══ */}
      <section className="products-section" id="products">
        <div className="products-header">
          <div>
            <div className="section-eyebrow">Our Portfolio</div>
            <h2 className="section-title reveal">From <em>Field to Table</em>,<br />Purely Refined</h2>
          </div>
          <p className="section-body reveal" style={{ margin: 0, maxWidth: '340px' }}>
            Three distinct product lines spanning edible oils, animal nutrition, and premium industrial derivatives.
          </p>
        </div>

        <div className="products-grid">
          <Link href="/products/jeevan-rekha" className="product-card reveal">
            <Image className="product-img" src="/premium_cooking_oil.png" alt="Rice Bran Oil" width={600} height={800} style={{ objectFit: 'cover' }} />
            <div className="product-overlay">
              <div className="product-tag">Jeevan Rekha Foods</div>
              <div className="product-name">Rice Bran<br />&amp; Mustard Oil</div>
              <div className="product-desc">Physically refined Rice Bran Oil and cold-pressed Kachhi Ghani Mustard Oil — crafted for purity, flavor, and healthier everyday living.</div>
              <span className="product-link">Explore Foods</span>
            </div>
          </Link>
          <Link href="/products/de-oiled-rice-bran" className="product-card reveal">
            <Image className="product-img" src="/dorb_feed.png" alt="DORB" width={600} height={800} style={{ objectFit: 'cover', objectPosition: 'top' }} />
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
        <div className="section-eyebrow reveal">Commercial Derivatives</div>
        <h2 className="section-title reveal">Commercial-Grade<br /><em>Bran Derivatives</em></h2>
        <div className="bento-grid">
          <div className="bento-card featured reveal">
            <div className="bento-icon-container">
              <Sprout size={24} />
            </div>
            <div className="bento-title">De-Oiled Rice Bran (DORB)</div>
            <p className="bento-body" style={{ marginTop: '12px', maxWidth: '480px' }}>Magik, ABU Platinum &amp; ABU Premium DORB — protein-rich, low-fat nutrition designed to enhance growth, feed conversion, and overall performance for fish, pig, poultry, and cattle. Trusted by farmers, season after season.</p>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon-container">
              <Layers size={24} />
            </div>
            <div className="bento-title">Rice Bran Wax</div>
            <p className="bento-body">Premium natural wax used in cosmetics, polishes, and food applications — offering excellent binding and structural properties.</p>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon-container">
              <Settings size={24} />
            </div>
            <div className="bento-title">Rice Bran Gums</div>
            <p className="bento-body">Versatile emulsifying and stabilizing agent widely utilized in the food and pharmaceutical industries.</p>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon-container">
              <Activity size={24} />
            </div>
            <div className="bento-title">Rice Bran Lecithin</div>
            <p className="bento-body">Natural emulsifier and antioxidant ideal for bakery, confectionery, and nutraceutical formulations.</p>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon-container">
              <Recycle size={24} />
            </div>
            <div className="bento-title">Fatty Acids &amp; Spent Earth</div>
            <p className="bento-body">High-quality fatty acid extracts and eco-friendly spent earth for industrial reuse and biofuel production.</p>
          </div>
        </div>
      </section>

      {/* ══ METRICS ══ */}
      <div className="metrics-section">
        <Image className="metrics-img" src="/hero_rice_paddy.png" alt="AB Udyog Infrastructure" width={900} height={675} style={{ objectFit: 'cover' }} />
        <div className="metrics-content reveal">
          <div className="section-eyebrow">Infrastructure</div>
          <h2 className="section-title">Built at<br /><em>Industrial Scale</em></h2>
          <p className="section-body" style={{ marginTop: '20px' }}>
            At AB Udyog, our integrated facilities deliver high-volume, consistent output. On-site labs and certified processes ensure every batch meets global food-safety standards.
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
            <div className="metric-item">
              <div className="metric-num">30<span className="metric-unit">+</span></div>
              <div className="metric-label">Years of Operation</div>
            </div>
            <div className="metric-item">
              <div className="metric-num">5<span className="metric-unit">+</span></div>
              <div className="metric-label">Certified By-Product Lines</div>
            </div>
          </div>
        </div>
      </div>



      {/* ══ CERTS ══ */}
      <section className="certs-section reveal">
        <div className="section-header-center">
          <div className="section-eyebrow">Compliance &amp; Trust</div>
          <h2 className="section-title">Certified for<br /><em>Global Standards</em></h2>
        </div>
        <Image className="certs-img" src="https://2025.abudyog.in/wp-content/uploads/2025/11/certificates-e1763163163535.png" alt="Certifications" width={600} height={400} style={{ display: 'block', margin: '48px auto 0', filter: 'drop-shadow(0 8px 32px rgba(0, 0, 0, 0.08))' }} />
      </section>

      {/* ══ CTA BANNER ══ */}
      <div className="cta-banner">
        <div className="cta-text">
          <h2>Partner With Us for<br />Premium Rice-Bran Products</h2>
          <p>Delivered globally with reliability, traceability, and scale.</p>
        </div>
        <div className="cta-action">
          <Link href="/contact" className="btn-dark">Contact Our Team</Link>
        </div>
      </div>
    </>
  );
}
