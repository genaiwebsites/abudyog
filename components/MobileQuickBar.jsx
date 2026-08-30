"use client";
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { trackB2BConversion } from '@/components/Analytics';

export default function MobileQuickBar() {
  const handleCallClick = () => {
    trackB2BConversion('phone', 'mobile_sticky_bar');
  };

  const handleWhatsAppClick = () => {
    trackB2BConversion('whatsapp', 'mobile_sticky_bar');
  };

  return (
    <>
      <style jsx>{`
        .mobile-quick-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: rgba(13, 43, 26, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid rgba(212, 160, 23, 0.35);
          padding: 10px 14px;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.35);
        }

        .mobile-quick-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          max-width: 500px;
          margin: 0 auto;
        }

        .quick-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 12px;
          font-family: var(--font-outfit), sans-serif;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 4px;
          transition: transform 0.15s ease, background 0.2s ease;
          user-select: none;
          text-align: center;
        }

        .quick-btn:active {
          transform: scale(0.97);
        }

        .btn-call {
          background: #D4A017;
          color: #06120B;
          border: 1px solid #FFD700;
        }

        .btn-whatsapp {
          background: #25D366;
          color: #FFFFFF;
          border: 1px solid #1EBE5D;
        }

        @media (max-width: 768px) {
          .mobile-quick-bar {
            display: block;
          }
          /* Add bottom padding to body/footer so content isn't obscured on mobile */
          :global(body) {
            padding-bottom: 64px;
          }
        }
      `}</style>

      <div className="mobile-quick-bar" aria-label="Quick Contact Bar">
        <div className="mobile-quick-inner">
          <a
            href="tel:+917439289709"
            className="quick-btn btn-call"
            onClick={handleCallClick}
            aria-label="Call AB Udyog Sales Desk"
          >
            <Phone size={15} strokeWidth={2.4} />
            <span>Call Sales</span>
          </a>

          <a
            href="https://wa.me/917439289709?text=Hi%20AB%20Udyog%20Team%2C%20I%20am%20inquiring%20about%20bulk%20factory%20pricing%20and%20specifications."
            target="_blank"
            rel="noopener noreferrer"
            className="quick-btn btn-whatsapp"
            onClick={handleWhatsAppClick}
            aria-label="Chat on WhatsApp with AB Udyog"
          >
            <MessageCircle size={15} strokeWidth={2.4} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
