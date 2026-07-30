import React from 'react';

export default function HomeTrustBar() {
  const trustItems = [
    { 
      name: "FSSAI Certified - Food Safety and Standards Authority of India", 
      src: "/logos/fssai.png", 
      height: 36, 
      url: "https://www.fssai.gov.in/" 
    },
    { 
      name: "Make in India Initiative", 
      src: "/logos/make-in-india-lion-logo.png", 
      height: 64, 
      url: "https://www.pmindia.gov.in/en/major_initiatives/make-in-india/" 
    },
    { 
      name: "National Restaurant Association of India (NRAI)", 
      src: "/logos/nrai.png", 
      height: 36, 
      url: "https://nrai.org/" 
    },
    { 
      name: "Hyperpure by Zomato", 
      src: "/logos/zomato-hyperpure-logo.png", 
      height: 26, 
      url: "https://www.hyperpure.com/ind/kolkata/jeevan-rekha-rice-bran-oil-1-l-pack-of-12?source=SEARCH_ALL" 
    },
    { 
      name: "Amazon India", 
      src: "/logos/amazon.png", 
      height: 24, 
      url: "https://www.amazon.in/" 
    },
    { 
      name: "Flipkart", 
      src: "/logos/flipkart.png", 
      height: 26, 
      url: "https://www.flipkart.com/" 
    },
    { 
      name: "IndiaMART", 
      src: "/logos/indiamart.png", 
      height: 30, 
      url: "https://www.indiamart.com/" 
    },
  ];

  return (
    <section className="home-trust-bar">
      <style>{`
        .home-trust-bar {
          background: #FAF8F5;
          border-top: 1px solid rgba(18, 42, 28, 0.08);
          border-bottom: 1px solid rgba(18, 42, 28, 0.08);
          padding: 24px 5%;
        }

        .home-trust-container {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .home-trust-label {
          font-family: var(--font-outfit), 'Plus Jakarta Sans', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2D6A4F;
          white-space: nowrap;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .home-trust-label::after {
          content: '';
          display: inline-block;
          width: 20px;
          height: 1px;
          background: rgba(45, 106, 79, 0.3);
        }

        .home-trust-logos {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 16px 28px;
          flex: 1;
        }

        .home-trust-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          flex-shrink: 0;
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
        }

        .home-trust-item img {
          display: block;
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        .home-trust-item:hover {
          transform: translateY(-2px);
          opacity: 0.85;
        }

        /* Tablet (≤ 1024px): tighter gaps */
        @media (max-width: 1024px) {
          .home-trust-logos {
            gap: 14px 22px;
          }
        }

        /* Mobile landscape / small tablet (≤ 768px): stack label above logos */
        @media (max-width: 768px) {
          .home-trust-container {
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          .home-trust-label {
            font-size: 11px;
            white-space: normal;
            text-align: center;
          }
          .home-trust-label::after {
            display: none;
          }
          .home-trust-logos {
            justify-content: center;
            gap: 12px 20px;
          }
          .home-trust-item img {
            /* reduce logo sizes on mobile */
            max-height: 28px !important;
          }
        }

        /* Small mobile (≤ 480px): tighter and smaller */
        @media (max-width: 480px) {
          .home-trust-bar {
            padding: 20px 4%;
          }
          .home-trust-logos {
            gap: 10px 16px;
          }
          .home-trust-item img {
            max-height: 24px !important;
          }
        }
      `}</style>

      <div className="home-trust-container">
        <div className="home-trust-label">
          Trusted Brand &amp; Retail Availability
        </div>
        <div className="home-trust-logos">
          {trustItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.url}
              target="_blank" 
              rel="noopener noreferrer" 
              className="home-trust-item" 
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
    </section>
  );
}
