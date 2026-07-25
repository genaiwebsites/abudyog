import React from 'react';

export default function TrustBadgeSection() {
  const associations = [
    { name: "NRAI (National Restaurant Association of India)", src: "/logos/nrai.png", height: 42 },
    { name: "S.E.A. (Solvent Extractors' Association of India)", src: "/logos/sea.png", height: 46 },
    { name: "Mishti Udyog (Sweets & Confectionery Assoc.)", src: "/logos/mishti_udyog.png", height: 46 },
    { name: "P.B.M.A. (Posta Bazar Merchants' Association)", src: "/logos/pbma.png", height: 46 },
    { name: "CWBTA (Confederation of West Bengal Trade Assoc.)", src: "/logos/cwbta.png", height: 46 },
  ];

  const certifications = [
    { name: "FSSAI (Food Safety & Standards Authority of India)", src: "/logos/fssai.png", height: 44 },
    { name: "Make in India", src: "/logos/make_in_india.png", height: 40 },
  ];

  const marketplaces = [
    { name: "Hyperpure by Zomato", src: "/logos/hyperpure.png", height: 32 },
    { name: "Amazon India", src: "/logos/amazon.png", height: 32 },
    { name: "Flipkart", src: "/logos/flipkart.png", height: 32 },
    { name: "IndiaMART", src: "/logos/indiamart.png", height: 32 },
  ];

  return (
    <section className="trust-badge-section" style={{ background: 'var(--cream)', padding: '72px 8%', borderTop: '1px solid rgba(18, 42, 28, 0.08)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* ══ 1. TRADE ASSOCIATIONS ══ */}
        <div style={{ marginBottom: '56px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)', opacity: 0.85, marginBottom: '32px' }}>
            Associations
          </h3>
          <div className="associations-grid" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '28px 36px' }}>
            {associations.map((assoc, idx) => (
              <React.Fragment key={idx}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px 8px' }} title={assoc.name}>
                  <img 
                    src={assoc.src} 
                    alt={assoc.name} 
                    style={{ height: `${assoc.height}px`, width: 'auto', maxHeight: '52px', objectFit: 'contain', filter: 'brightness(0.96) contrast(1.04)' }} 
                  />
                </div>
                {idx < associations.length - 1 && (
                  <div className="association-divider" style={{ width: '1px', height: '32px', background: 'rgba(18, 42, 28, 0.18)' }} aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ══ 2. CERTIFICATIONS & LISTED ON (2-COLUMN GRID) ══ */}
        <div className="trust-split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', paddingTop: '40px', borderTop: '1px solid rgba(18, 42, 28, 0.08)' }}>
          
          {/* CERTIFICATIONS */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)', opacity: 0.85, marginBottom: '28px' }}>
              Certifications
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
              {certifications.map((cert, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} title={cert.name}>
                  <img 
                    src={cert.src} 
                    alt={cert.name} 
                    style={{ height: `${cert.height}px`, width: 'auto', maxHeight: '48px', objectFit: 'contain', filter: 'brightness(0.96) contrast(1.04)' }} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* LISTED ON */}
          <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(18, 42, 28, 0.12)', paddingLeft: '48px' }} className="marketplaces-col">
            <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)', opacity: 0.85, marginBottom: '28px' }}>
              Listed on:
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '24px 32px' }}>
              {marketplaces.map((mkt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} title={mkt.name}>
                  <img 
                    src={mkt.src} 
                    alt={mkt.name} 
                    style={{ height: `${mkt.height}px`, width: 'auto', maxHeight: '36px', objectFit: 'contain', filter: 'brightness(0.96) contrast(1.04)' }} 
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
