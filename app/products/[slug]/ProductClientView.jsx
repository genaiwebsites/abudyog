"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Droplet, Layers, ExternalLink, Award } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import CtaBanner from '@/components/CtaBanner';
import JsonLd from '@/components/JsonLd';

export default function ProductClientView({ product }) {
  useScrollReveal('.reveal', 0.1);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: product.title, url: `/products/${product.slug}` }
  ];

  return (
    <>
      {/* ══ STRUCTURED DATA (JSON-LD) ══ */}
      <JsonLd
        type="Product"
        includeOrg={false}
        productData={{
          name: product.title,
          description: product.desc,
          image: product.image,
          url: `/products/${product.slug}`,
        }}
        breadcrumbs={breadcrumbs}
        faqs={product.faqs}
      />

      {/* ══ HERO BANNER ══ */}
      <section className="hero-subpage">
        <div className="hero-bg" style={{ backgroundImage: `url('${product.image}')`, opacity: 0.25 }}></div>
        <div className="hero-content">
          <p className="hero-eyebrow">COMMERCIAL PRODUCT SPECIFICATION</p>
          <h1 className="hero-title">{product.title}</h1>
          <p className="hero-subtitle">{product.desc}</p>
        </div>
      </section>

      {/* ══ PRODUCT DETAILS & SPECS ══ */}
      <section style={{ background: 'var(--cream)', padding: '80px 8%' }}>
        <div style={{ marginBottom: '40px' }}>
          <Link href="/products" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', fontSize: '11px', borderColor: 'rgba(13, 43, 26, 0.15)' }}>
            <ArrowLeft size={14} aria-hidden="true" /> Back to All Products
          </Link>
        </div>

        <div className="about-grid">
          <div className="about-text reveal" style={{ paddingLeft: '0' }}>
            <h2 className="section-title">{product.shortName} Overview</h2>
            <br />

            {/* ══ SEAMLESS EDITORIAL LEAD PARAGRAPH ══ */}
            {product.directAnswer && (
              <p className="section-lead" style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'var(--green-deep)',
                fontWeight: 500,
                marginBottom: '16px'
              }}>
                {product.directAnswer}
              </p>
            )}

            <p className="section-body">
              {product.fullDesc}
            </p>
            <br />
            
            <div className="responsive-two-col" style={{ marginTop: '20px' }}>
              <div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: 'var(--green-deep)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={20} style={{ color: 'var(--gold)' }} aria-hidden="true" /> Key Features
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {product.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '14px', marginTop: '2px' }}>✦</span>
                      <span className="section-body" style={{ margin: 0, fontSize: '14px' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: 'var(--green-deep)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Droplet size={20} style={{ color: 'var(--gold)' }} aria-hidden="true" /> Applications
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {product.applications.map((app, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '14px', marginTop: '2px' }}>◎</span>
                      <span className="section-body" style={{ margin: 0, fontSize: '14px' }}>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <br /><br />
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              {product.externalLink ? (
                <>
                  {product.externalLink.startsWith('/') ? (
                    <Link
                      href={product.externalLink}
                      className="btn-primary"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '12px 18px', fontSize: '11px', whiteSpace: 'nowrap' }}
                    >
                      {product.externalLinkLabel || 'Explore Magik DORB'}
                    </Link>
                  ) : (
                    <a
                      href={product.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '12px 18px', fontSize: '11px', whiteSpace: 'nowrap' }}
                    >
                      {product.externalLinkLabel || 'Explore Magik DORB'} <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}
                </>
              ) : null}
              <Link 
                href={`/contact?ref=${product.slug}`} 
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '12px 18px', fontSize: '11px', whiteSpace: 'nowrap' }}
              >
                Request Factory Quote &amp; TDS
              </Link>
              <Link 
                href={`/contact?ref=${product.slug}&type=sample`} 
                className="btn-ghost"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '12px 18px', fontSize: '11px', whiteSpace: 'nowrap', borderColor: 'rgba(13, 43, 26, 0.25)', color: 'var(--green-deep)' }}
              >
                Request 500g Lab Sample
              </Link>
            </div>
          </div>

          <div className="about-img reveal" style={{ position: 'relative', width: '100%', minHeight: '380px' }}>
            <Image
              src={product.image}
              alt={`${product.title} Commercial Specification - AB Udyog`}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>

        {/* ══ TECHNICAL SPECIFICATIONS TABLE & INTEGRATED QUALITY FOOTER ══ */}
        <div style={{ marginTop: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p className="section-eyebrow">LABORATORY CERTIFIED PARAMETERS</p>
            <h3 className="section-title">Technical Specification Sheet</h3>
          </div>

          {product.specifications && (
            <div className="spec-table-container">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Chemical &amp; Physical Parameter</th>
                    <th>Certified Specification Value</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr key={i}>
                      <td className="spec-param">{spec.parameter}</td>
                      <td className="spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* If product has multi-grade tables (e.g. DORB) */}
          {product.grades && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {product.grades.map((sub, idx) => (
                <div key={idx} style={{ background: '#fff', padding: '24px', border: '1px solid var(--color-border)' }}>
                  <h4 style={{ fontFamily: 'inherit', fontSize: '15px', fontWeight: 700, color: 'var(--green-deep)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Layers size={16} style={{ color: 'var(--gold)' }} aria-hidden="true" /> {sub.name}
                  </h4>
                  <div className="spec-table-container">
                    <table className="spec-table">
                      <thead>
                        <tr>
                          <th>Parameter</th>
                          <th>Specification Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sub.specs.map((spec, i) => (
                          <tr key={i}>
                            <td className="spec-param">{spec.parameter}</td>
                            <td className="spec-value">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ══ UNIFIED QUALITY & TESTING ASSURANCE STRIP ══ */}
          <div style={{
            marginTop: '24px',
            padding: '20px 24px',
            background: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid rgba(13, 43, 26, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 320px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(200, 153, 42, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={18} style={{ color: 'var(--gold)' }} aria-hidden="true" />
              </div>
              <div>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--green-deep)', display: 'block' }}>
                  In-House NABL Accredited QA &amp; Batch COA
                </span>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--muted)', lineHeight: 1.4 }}>
                  Full Certificate of Analysis &amp; gas chromatography testing reports accompany every commercial dispatch.
                </p>
              </div>
            </div>

            {product.testingStandards && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                {product.testingStandards.map((std, i) => (
                  <span key={i} style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    padding: '6px 12px',
                    background: '#fff',
                    border: '1px solid rgba(13, 43, 26, 0.12)',
                    color: 'var(--green-deep)',
                  }}>
                    {std.standard}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* ══ REFINED MINIMALIST ACCORDION FAQ ══ */}
          {product.faqs && product.faqs.length > 0 && (
            <div style={{ marginTop: '56px', borderTop: '1px solid rgba(13, 43, 26, 0.1)', paddingTop: '40px' }}>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <span style={{ color: 'var(--gold-dark)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  PRODUCT INTELLIGENCE
                </span>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: 'var(--green-deep)', margin: 0 }}>
                  Frequently Asked Questions
                </h4>
              </div>

              <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {product.faqs.map((faq, i) => (
                  <details
                    key={i}
                    style={{
                      background: '#fff',
                      border: '1px solid rgba(13, 43, 26, 0.1)',
                      padding: '16px 20px',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s',
                    }}
                  >
                    <summary style={{
                      fontSize: '14.5px',
                      fontWeight: 600,
                      color: 'var(--green-deep)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      userSelect: 'none',
                      listStyle: 'none',
                    }}>
                      <span>{faq.question}</span>
                      <span style={{ color: 'var(--gold-dark)', fontSize: '16px', fontWeight: 400, marginLeft: '12px' }}>+</span>
                    </summary>
                    <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(13, 43, 26, 0.06)' }}>
                      <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <CtaBanner 
        title="Request Technical Specifications & Samples"
        subtitle="Get full Certificate of Analysis (COA) sheets and sample containers for your industry."
        btnText="Request Sample"
        btnLink={`/contact?ref=${product.slug}`}
      />
    </>
  );
}
