"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MessageSquare, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 350);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomepage = pathname === '/';
  const showWidget = !isHomepage || scrolledPastHero;

  return (
    <div 
      className="trade-desk-container"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        opacity: showWidget ? 1 : 0,
        pointerEvents: showWidget ? 'auto' : 'none',
        transform: showWidget ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {open && (
        <div style={{
          background: '#0D2B1A',
          border: '1px solid #D4AF37',
          padding: '18px 20px',
          width: '270px',
          marginBottom: '12px',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45), 0 0 16px rgba(212, 175, 55, 0.2)',
          borderRadius: '8px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D4AF37' }}>
              B2B Trade Desk
            </span>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: 0 }}
              aria-label="Close trade desk"
            >
              <X size={14} />
            </button>
          </div>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '11px', lineHeight: 1.55, marginBottom: '14px' }}>
            Get instant daily market rates for DORB, Rice Bran Oil, and Bio-Derivatives via WhatsApp.
          </p>
          <a
            href="https://wa.me/917439289709?text=Hello%20AB%20Udyog%2C%20I%20would%20like%20to%20inquire%20about%20daily%20bulk%20rates."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              textAlign: 'center',
              background: '#D4AF37',
              color: '#0D2B1A',
              fontSize: '10px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '10px 14px',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            Chat on WhatsApp
          </a>
        </div>
      )}

      {/* Rich Premium Circular Floating Trade Desk Icon Button */}
      <button
        onClick={() => setOpen(!open)}
        className="trade-desk-btn"
        aria-label="Toggle WhatsApp Trade Desk"
        title="B2B Trade Desk & Daily Rates"
        style={{
          background: open ? '#D4AF37' : '#0D2B1A',
          color: open ? '#0D2B1A' : '#D4AF37',
          border: '1.5px solid #D4AF37',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4), 0 0 14px rgba(212, 175, 55, 0.25)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {open ? <X size={22} /> : <MessageSquare size={22} />}
      </button>
    </div>
  );
}
