import React from 'react';
import Image from 'next/image';

export default function TrustBadgeSection() {
  const associations = [
    { name: "NRAI (National Restaurant Association of India)", src: "/logos/nrai.svg" },
    { name: "S.E.A. (Solvent Extractors' Association of India)", src: "/logos/sea.svg" },
    { name: "Mishti Udyog (Sweets & Confectionery Assoc.)", src: "/logos/mishti-udyog.svg" },
    { name: "P.B.M.A. (Posta Bazar Merchants' Association)", src: "/logos/pbma.svg" },
    { name: "CWBTA (Confederation of West Bengal Trade Assoc.)", src: "/logos/cwbta.svg" },
  ];

  const certifications = [
    { name: "FSSAI (Food Safety Standards Authority of India)", src: "/logos/fssai.svg", width: 180 },
    { name: "Make in India", src: "/logos/make-in-india.svg", width: 160 },
  ];

  const marketplaces = [
    { name: "Hyperpure by Zomato", src: "/logos/hyperpure.svg", width: 140 },
    { name: "Amazon India", src: "/logos/amazon.svg", width: 120 },
    { name: "Flipkart", src: "/logos/flipkart.svg", width: 130 },
    { name: "IndiaMART", src: "/logos/indiamart.svg", width: 130 },
  ];

  return (
    <section className="trust-badge-section" style={{ background: 'var(--cream-warm)', padding: '72px 8%', borderTop: '1px solid rgba(13,43,26,0.08)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* ══ 1. ASSOCIATIONS ══ */}
        <div style={{ marginBottom: '56px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: 'var(--green-deep)', fontWeight: 400, marginBottom: '32px' }}>
            Trade <em>Associations</em>
          </h3>
          <div className="associations-grid" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '32px 24px' }}>
            {associations.map((assoc, idx) => (
              <React.Fragment key={idx}>
                <div style={{ padding: '8px 12px', transition: 'transform 0.3s ease' }} title={assoc.name}>
                  <img src={assoc.src} alt={assoc.name} style={{ height: '42px', width: 'auto', display: 'block', objectFit: 'contain' }} />
                </div>
                {idx < associations.length - 1 && (
                  <div className="association-divider" style={{ width: '1px', height: '36px', background: 'rgba(13, 43, 26, 0.15)' }} aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ══ 2. CERTIFICATIONS & LISTED ON (SPLIT GRID) ══ */}
        <div className="trust-split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', paddingTop: '40px', borderTop: '1px solid rgba(13,43,26,0.08)' }}>
          
          {/* CERTIFICATIONS */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: 'var(--green-deep)', fontWeight: 400, marginBottom: '24px' }}>
              Quality <em>Certifications</em>
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
              {certifications.map((cert, idx) => (
                <div key={idx} title={cert.name}>
                  <img src={cert.src} alt={cert.name} style={{ height: '44px', width: 'auto', display: 'block', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </div>

          {/* LISTED ON / MARKETPLACES */}
          <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(13,43,26,0.08)', paddingLeft: '48px' }} className="marketplaces-col">
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: 'var(--green-deep)', fontWeight: 400, marginBottom: '24px' }}>
              Listed &amp; <em>Available On</em>
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '28px' }}>
              {marketplaces.map((mkt, idx) => (
                <div key={idx} title={mkt.name}>
                  <img src={mkt.src} alt={mkt.name} style={{ height: '32px', width: 'auto', display: 'block', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
