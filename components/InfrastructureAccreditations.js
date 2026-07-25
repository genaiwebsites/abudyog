import React from 'react';

export default function InfrastructureAccreditations() {
  const tradeBodies = [
    { 
      name: "S.E.A. (Solvent Extractors' Association of India)", 
      src: "/logos/sea.png", 
      height: 52, 
      url: "https://seaofindia.com/" 
    },
    { 
      name: "Mishti Udyog (Sweets & Savouries Entrepreneurs' Assoc. of Bengal)", 
      src: "/logos/mishti_udyog.png", 
      height: 52, 
      url: "https://mishtiudyog.org/" 
    },
    { 
      name: "P.B.M.A. (Posta Bazar Merchants' Association Kolkata)", 
      src: "/logos/pbma.png", 
      height: 52, 
      url: "https://pbmakolkata.com/" 
    },
    { 
      name: "CWBTA (Confederation of West Bengal Trade Associations)", 
      src: "/logos/cwbta.png", 
      height: 52, 
      url: "https://cwbta.in/" 
    },
  ];

  const qualityCertifications = [
    { 
      name: "FSSAI (Food Safety & Standards Authority of India)", 
      src: "/logos/fssai.png", 
      height: 44, 
      url: "https://www.fssai.gov.in/" 
    },
    { 
      name: "Make in India Initiative", 
      src: "/logos/make_in_india.png", 
      height: 44, 
      url: "https://www.pmindia.gov.in/en/major_initiatives/make-in-india/" 
    },
  ];

  return (
    <section className="infra-accred-section">
      <style>{`
        .infra-accred-section {
          background: #FAF8F5;
          padding: 80px 5%;
          border-top: 1px solid rgba(18, 42, 28, 0.08);
        }

        .infra-accred-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .infra-accred-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .infra-accred-subtitle {
          font-family: var(--font-outfit), sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #2D6A4F;
          margin-bottom: 8px;
        }

        .infra-accred-title {
          font-family: var(--font-outfit), sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #0B2518;
          letter-spacing: -0.01em;
          margin: 0;
        }

        /* Two-column grid on desktop */
        .infra-accred-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
        }

        .infra-accred-card {
          background: #FFFFFF;
          border: 1px solid rgba(18, 42, 28, 0.08);
          border-radius: 16px;
          padding: 36px 28px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .infra-card-title {
          font-family: var(--font-outfit), sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #0B2518;
          margin-bottom: 28px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          line-height: 1.4;
        }

        .infra-card-title::before,
        .infra-card-title::after {
          content: '';
          height: 1px;
          min-width: 18px;
          flex-shrink: 0;
          background: rgba(45, 106, 79, 0.25);
        }

        .infra-logos-flex {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 18px 28px;
          width: 100%;
        }

        .infra-logo-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          flex-shrink: 0;
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
        }

        .infra-logo-item img {
          display: block;
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        .infra-logo-item:hover {
          transform: translateY(-2px);
          opacity: 0.85;
        }

        /* Tablet (≤ 1024px) */
        @media (max-width: 1024px) {
          .infra-accred-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
        }

        /* Small tablet / mobile landscape (≤ 768px): single column */
        @media (max-width: 768px) {
          .infra-accred-section {
            padding: 56px 5%;
          }
          .infra-accred-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .infra-accred-title {
            font-size: 22px;
          }
          .infra-accred-header {
            margin-bottom: 32px;
          }
          .infra-logo-item img {
            max-height: 44px !important;
          }
        }

        /* Small mobile (≤ 480px) */
        @media (max-width: 480px) {
          .infra-accred-section {
            padding: 40px 4%;
          }
          .infra-accred-card {
            padding: 24px 16px;
          }
          .infra-accred-title {
            font-size: 19px;
          }
          .infra-card-title {
            font-size: 13px;
          }
          .infra-logos-flex {
            gap: 14px 20px;
          }
          .infra-logo-item img {
            max-height: 38px !important;
          }
        }

        /* Extra small (≤ 360px) */
        @media (max-width: 360px) {
          .infra-logo-item img {
            max-height: 32px !important;
          }
          .infra-logos-flex {
            gap: 12px 16px;
          }
        }
      `}</style>

      <div className="infra-accred-container">
        <div className="infra-accred-header">
          <div className="infra-accred-subtitle">Industrial Quality &amp; Governance</div>
          <h2 className="infra-accred-title">Regulatory Compliance &amp; Trade Affiliations</h2>
        </div>

        <div className="infra-accred-grid">
          
          {/* TRADE BODIES */}
          <div className="infra-accred-card">
            <div className="infra-card-title">Official Trade Associations &amp; Merchant Bodies</div>
            <div className="infra-logos-flex">
              {tradeBodies.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.url}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="infra-logo-item" 
                  title={`Visit official ${item.name} website`}
                  aria-label={`Visit official ${item.name} website (opens in new tab)`}
                >
                  <img 
                    src={item.src} 
                    alt={item.name} 
                    style={{ height: `${item.height}px`, width: 'auto' }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* QUALITY ACCREDITATIONS */}
          <div className="infra-accred-card">
            <div className="infra-card-title">Government &amp; Food Safety Standards</div>
            <div className="infra-logos-flex">
              {qualityCertifications.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.url}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="infra-logo-item" 
                  title={`Visit official ${item.name} portal`}
                  aria-label={`Visit official ${item.name} portal (opens in new tab)`}
                >
                  <img 
                    src={item.src} 
                    alt={item.name} 
                    style={{ height: `${item.height}px`, width: 'auto' }}
                  />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
