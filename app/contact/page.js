"use client";
import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Building2, Factory, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal('.reveal', 0.1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refId, setRefId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setRefId(`ABU-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 600);
  };

  return (
    <div style={{ background: 'var(--cream)' }}>
      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: "url('/ab_udyog_physical_refinery_pumping_pipeline_manifold.png')", opacity: 0.3 }} />
        <div className="hero-accent" />
        <div className="hero-content" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '840px' }}>
          <h1 className="hero-title" style={{ margin: '0 auto' }}>
            B2B Trade Desk &amp; Corporate Contact
          </h1>
          <p className="hero-subtitle" style={{ margin: '20px auto 0 auto', maxWidth: '640px' }}>
            Direct channels for bulk edible oil procurement, distributorship applications, animal feed sourcing, and refinery logistics inquiries.
          </p>
        </div>
      </section>

      {/* ══ MAIN INTEGRATED CONTACT COMMAND MATRIX ══ */}
      <section style={{ padding: '80px 8%', background: 'var(--cream)' }}>
        <div 
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: '32px',
            maxWidth: '1280px',
            margin: '0 auto',
            alignItems: 'stretch'
          }}
        >
          {/* ── LEFT COLUMN: CORPORATE & REFINERY DIRECTORY ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', height: '100%' }}>
            
            {/* Corporate Directory Dossier */}
            <div style={{ 
              background: '#FFFFFF', 
              border: '1px solid var(--color-border)', 
              borderTop: '4px solid var(--green-deep)',
              padding: '32px' 
            }}>
              <span style={{ color: 'var(--gold-dark)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                Official Facility Directory
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, color: 'var(--green-deep)', marginBottom: '20px', lineHeight: 1.2 }}>
                AB Udyog Pvt. Ltd. Operations
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Corporate Office */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ padding: '8px', background: 'rgba(18, 42, 28, 0.05)', color: 'var(--green-deep)', flexShrink: 0 }}>
                    <Building2 size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: 'var(--green-deep)', marginBottom: '3px' }}>
                      Registered Corporate Office
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.5, margin: 0 }}>
                      11A, Rawdon Street, Kolkata – 700017,<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>

                {/* Refinery Plant */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                  <div style={{ padding: '8px', background: 'rgba(18, 42, 28, 0.05)', color: 'var(--green-deep)', flexShrink: 0 }}>
                    <Factory size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: 'var(--green-deep)', marginBottom: '3px' }}>
                      Refinery &amp; Solvent Extraction Plant
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.5, margin: 0 }}>
                      Uchalan, Purba Burdwan – 713427,<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>

                {/* Direct Communications */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>General &amp; Corporate Mail:</span>
                    <a href="mailto:info@abudyog.in" style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: '13px', fontWeight: 700, color: 'var(--green-deep)', textDecoration: 'none' }}>
                      info@abudyog.in
                    </a>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Distributor &amp; Bulk Sales Line:</span>
                    <a href="tel:+917439289709" style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: '13px', fontWeight: 700, color: 'var(--green-deep)', textDecoration: 'none' }}>
                      +91 74392 89709
                    </a>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Dispatch &amp; Operations Desk:</span>
                    <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: '13px', fontWeight: 700, color: 'var(--gold-dark)' }}>
                      Mon – Sat: 09:00 – 18:00 IST
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Verified Location Map — flex: 1 for equal column height */}
            <div style={{ 
              background: '#FFFFFF', 
              border: '1px solid var(--color-border)', 
              overflow: 'hidden',
              flex: 1,
              minHeight: '260px',
              position: 'relative'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5!2d88.35!3d22.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMyJzI0LjAiTiA4OMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                allowFullScreen="" 
                loading="lazy"
                style={{ border: 0, width: '100%', height: '100%' }}
                title="AB Udyog Corporate Office Location Map">
              </iframe>
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                background: 'rgba(18, 42, 28, 0.92)',
                color: 'var(--white)',
                padding: '10px 16px',
                borderLeft: '4px solid var(--gold)',
                backdropFilter: 'blur(6px)'
              }}>
                <h4 style={{ fontSize: '13px', fontWeight: 700, margin: 0, color: 'var(--white)' }}>Corporate HQ Map</h4>
                <p style={{ fontSize: '11px', color: 'var(--gold-light)', margin: '2px 0 0 0' }}>11A, Rawdon Street, Kolkata</p>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: FORMAL B2B TRADE DESK FORM ── */}
          <div style={{ 
            background: '#FFFFFF', 
            border: '1px solid var(--color-border)', 
            borderTop: '4px solid var(--gold)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between',
            height: '100%',
            boxSizing: 'border-box'
          }}>
            <span style={{ color: 'var(--gold-dark)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
              Commercial Desk Inquiry
            </span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, color: 'var(--green-deep)', marginBottom: '8px', lineHeight: 1.15 }}>
              Submit Business Inquiry
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '32px', lineHeight: 1.6 }}>
              Fill out the parameters below to route your inquiry directly to our sales, procurement, or export department.
            </p>

            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                style={{
                  background: 'var(--green-deep)',
                  color: 'var(--white)',
                  padding: '40px 32px',
                  border: '1px solid var(--gold)',
                  textAlign: 'center',
                }}
              >
                <CheckCircle2 size={48} style={{ color: 'var(--gold-light)', margin: '0 auto 16px auto' }} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
                  Commercial Inquiry Received
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.65, marginBottom: '24px' }}>
                  Thank you for your submission. Our B2B trade desk manager will review your technical specifications and contact your organization within 24 hours.
                </p>
                <div style={{
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--gold-light)',
                  background: 'rgba(255,255,255,0.06)',
                  padding: '12px 20px',
                  border: '1px solid rgba(212,175,55,0.4)',
                  display: 'inline-block',
                }}>
                  Reference Track ID: {refId}
                </div>
                <br />
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                  style={{
                    marginTop: '28px',
                    background: 'transparent',
                    border: '1px solid var(--gold)',
                    color: 'var(--gold-light)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '12px 28px',
                    cursor: 'pointer',
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="contact-form-row">
                  <div>
                    <label htmlFor="full-name" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green-deep)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', display: 'block' }}>
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      id="full-name" 
                      placeholder="e.g. Rajesh Sharma" 
                      maxLength={100} 
                      required 
                      style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--color-border)', background: 'var(--cream)', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="company-name" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green-deep)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', display: 'block' }}>
                      Company / Organization Name *
                    </label>
                    <input 
                      type="text" 
                      id="company-name" 
                      placeholder="e.g. Apex Foods Pvt. Ltd." 
                      maxLength={120} 
                      required 
                      style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--color-border)', background: 'var(--cream)', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div>
                    <label htmlFor="email-address" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green-deep)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', display: 'block' }}>
                      Corporate Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email-address" 
                      placeholder="name@company.com" 
                      maxLength={120} 
                      required 
                      style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--color-border)', background: 'var(--cream)', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone-number" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green-deep)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', display: 'block' }}>
                      Phone / Mobile Number *
                    </label>
                    <input 
                      type="tel" 
                      id="phone-number" 
                      placeholder="+91 98765 43210" 
                      maxLength={25} 
                      pattern="[\+]?[0-9\s\-]+" 
                      required 
                      style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--color-border)', background: 'var(--cream)', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product-category" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green-deep)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', display: 'block' }}>
                    Product Interest Category *
                  </label>
                  <select 
                    id="product-category" 
                    defaultValue="" 
                    required
                    style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--color-border)', background: 'var(--cream)', fontSize: '14px', outline: 'none' }}
                  >
                    <option value="" disabled>Select Product Line / Inquiry Type</option>
                    <option value="ab-health">AB Health Edible Oils (Soyabean &amp; Rice Bran Oil)</option>
                    <option value="jeevan-rekha">Jeevan Rekha (Rice Bran &amp; Mustard Oil)</option>
                    <option value="ab-dorb">AB DORB Animal Feed (Magik / Platinum / Premium)</option>
                    <option value="industrial-wax">Rice Bran Wax</option>
                    <option value="industrial-gums">Rice Bran Gums</option>
                    <option value="industrial-lecithin">Rice Bran Lecithin</option>
                    <option value="industrial-fatty-acid">Rice Bran Fatty Acid</option>
                    <option value="industrial-spent-earth">Spent Bleaching Earth</option>
                    <option value="bulk-packaging">Bulk Packaging / Co-Packing Services</option>
                    <option value="distributorship">Distributorship / Agency Application</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="order-volume" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green-deep)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', display: 'block' }}>
                    Estimated Order Volume / Dispatch Requirements
                  </label>
                  <input 
                    type="text" 
                    id="order-volume" 
                    placeholder="e.g. 20 Metric Tons / Tanker Load / Retail Cases" 
                    maxLength={100} 
                    style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--color-border)', background: 'var(--cream)', fontSize: '14px', outline: 'none' }}
                  />
                </div>

                <div>
                  <label htmlFor="message-body" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green-deep)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', display: 'block' }}>
                    Commercial Details &amp; Specifications *
                  </label>
                  <textarea 
                    id="message-body" 
                    placeholder="Provide details regarding target delivery date, quality parameters, or packaging preferences..." 
                    rows={4} 
                    maxLength={2000} 
                    required
                    style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--color-border)', background: 'var(--cream)', fontSize: '14px', outline: 'none' }}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ 
                    marginTop: '8px', 
                    padding: '16px 32px', 
                    fontSize: '12px', 
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    width: '100%', 
                    textAlign: 'center', 
                    cursor: 'pointer',
                    background: 'var(--green-deep)',
                    color: 'var(--white)',
                    border: 'none'
                  }}
                >
                  {loading ? 'Submitting Commercial Inquiry...' : 'Submit Commercial Inquiry'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}

