"use client";
import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      {open && (
        <div style={{
          background: 'var(--green-deep)',
          border: '1px solid var(--gold)',
          padding: '20px',
          width: '280px',
          marginBottom: '12px',
          boxShadow: 'none',
          borderRadius: 0,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              B2B Trade Desk
            </span>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', padding: 0 }}
              aria-label="Close trade desk"
            >
              <X size={16} />
            </button>
          </div>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '12px', lineHeight: 1.6, marginBottom: '16px' }}>
            Get instant daily market rates for DORB, Rice Bran Oil, and Industrial Derivatives via WhatsApp.
          </p>
          <a
            href="https://wa.me/917439289709?text=Hello%20AB%20Udyog%2C%20I%20would%20like%20to%20inquire%20about%20daily%20bulk%20rates."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              textAlign: 'center',
              background: 'var(--gold)',
              color: 'var(--green-deep)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '10px 16px',
              textDecoration: 'none',
              borderRadius: 0,
            }}
          >
            Chat on WhatsApp
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'var(--green-deep)',
          color: 'var(--gold)',
          border: '1px solid var(--gold)',
          padding: '12px 18px',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderRadius: 0,
        }}
        aria-label="Toggle WhatsApp Trade Desk"
      >
        <MessageSquare size={16} /> Trade Desk
      </button>
    </div>
  );
}
