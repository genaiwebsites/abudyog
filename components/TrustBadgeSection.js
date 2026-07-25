import React from 'react';

export default function TrustBadgeSection() {
  const associations = [
    { name: "NRAI (National Restaurant Association of India)", src: "/logos/nrai.png", width: 140, height: 50 },
    { name: "S.E.A. (Solvent Extractors' Association of India)", src: "/logos/sea.png", width: 64, height: 50 },
    { name: "Mishti Udyog (Sweets & Confectionery Assoc.)", src: "/logos/mishti_udyog.png", width: 64, height: 50 },
    { name: "P.B.M.A. (Posta Bazar Merchants' Association)", src: "/logos/pbma.png", width: 64, height: 50 },
    { name: "CWBTA (Confederation of West Bengal Trade Assoc.)", src: "/logos/cwbta.png", width: 64, height: 50 },
  ];

  const certifications = [
    { name: "FSSAI (Food Safety & Standards Authority of India)", src: "/logos/fssai.png", width: 120, height: 48 },
    { name: "Make in India", src: "/logos/make_in_india.png", width: 110, height: 48 },
  ];

  const marketplaces = [
    { name: "Hyperpure by Zomato", src: "/logos/hyperpure.png", width: 110, height: 40 },
    { name: "Amazon India", src: "/logos/amazon.png", width: 100, height: 34 },
    { name: "Flipkart", src: "/logos/flipkart.png", width: 100, height: 36 },
    { name: "IndiaMART", src: "/logos/indiamart.png", width: 90, height: 42 },
  ];

  return (
    <section className="trust-badge-section" style={{ background: '#F9F8F3', padding: '72px 5%', borderTop: '1px solid rgba(18, 42, 28, 0.08)' }}>
      <style>{`
        .trust-wrapper {
          max-width: 1240px;
          margin: 0 auto;
        }

        .trust-card-main {
          background: #FFFFFF;
          border: 1px solid rgba(18, 42, 28, 0.08);
          border-radius: 16px;
          padding: 36px 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          margin-bottom: 28px;
        }

        .trust-header {
          font-family: var(--font-outfit), 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #2D6A4F;
          text-anchor: middle;
          text-align: center;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .trust-header::before,
        .trust-header::after {
          content: '';
          height: 1px;
          width: 36px;
          background: rgba(45, 106, 79, 0.25);
        }

        .logo-box {
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px 12px;
          border-radius: 8px;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .logo-box:hover {
          background: rgba(244, 241, 234, 0.5);
          transform: translateY(-2px);
        }

        .logo-img-norm {
          max-height: 100%;
          max-width: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }

        .assoc-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-around;
          gap: 16px 24px;
        }

        .assoc-pipe {
          width: 1px;
          height: 32px;
          background: rgba(18, 42, 28, 0.12);
        }

        .trust-grid-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        @media (max-width: 900px) {
          .trust-grid-bottom {
            grid-template-columns: 1fr;
          }
          .assoc-pipe {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .trust-card-main {
            padding: 24px 18px;
          }
          .assoc-row {
            gap: 12px 16px;
          }
          .logo-box {
            height: 48px;
            padding: 4px 8px;
          }
        }
      `}</style>

      <div className="trust-wrapper">
        
        {/* ══ 1. INDUSTRY ASSOCIATIONS ══ */}
        <div className="trust-card-main">
          <div className="trust-header">
            Industry Associations &amp; Trade Bodies
          </div>
          <div className="assoc-row">
            {associations.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="logo-box" title={item.name} style={{ width: item.width + 'px' }}>
                  <img 
                    src={item.src} 
                    alt={item.name} 
                    className="logo-img-norm" 
                    style={{ maxHeight: item.height + 'px' }}
                  />
                </div>
                {idx < associations.length - 1 && (
                  <div className="assoc-pipe" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ══ 2. CERTIFICATIONS & LISTED ON DUAL CARDS ══ */}
        <div className="trust-grid-bottom">
          
          {/* CERTIFICATIONS */}
          <div className="trust-card-main" style={{ marginBottom: 0 }}>
            <div className="trust-header">
              Certifications &amp; Accreditations
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '20px 36px' }}>
              {certifications.map((item, idx) => (
                <div key={idx} className="logo-box" title={item.name} style={{ width: item.width + 'px' }}>
                  <img 
                    src={item.src} 
                    alt={item.name} 
                    className="logo-img-norm" 
                    style={{ maxHeight: item.height + 'px' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* LISTED ON */}
          <div className="trust-card-main" style={{ marginBottom: 0 }}>
            <div className="trust-header">
              Available &amp; Listed On
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px 28px' }}>
              {marketplaces.map((item, idx) => (
                <div key={idx} className="logo-box" title={item.name} style={{ width: item.width + 'px' }}>
                  <img 
                    src={item.src} 
                    alt={item.name} 
                    className="logo-img-norm" 
                    style={{ maxHeight: item.height + 'px' }}
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
