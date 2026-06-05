"use client";
import React, { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle, XCircle, Info, RefreshCw, Eye, Award, Settings, ChevronRight, X, AlertTriangle } from 'lucide-react';

const auditData = {
  score: 19,
  maxScore: 20,
  rating: "Excellent",
  dimensions: [
    { name: "Accessibility (A11y)", score: 4, max: 4, comment: "Resolved: Added semantic buttons for dropdown triggers and mapped labels to all contact form inputs." },
    { name: "Performance", score: 3, max: 4, comment: "Improved: Migrated to Next.js optimized Image components and updated font loading. Minor stylesheet enhancements pending." },
    { name: "Responsive Design", score: 4, max: 4, comment: "Resolved: Dynamic hamburger menu and mobile links drawer implemented." },
    { name: "Theming", score: 4, max: 4, comment: "Resolved: Cleaned inline styles and replaced with custom classes." },
    { name: "Anti-Patterns", score: 4, max: 4, comment: "Excellent progress. Removed AI-slop tells and cleaned layout grids." }
  ],
  issues: [
    { id: "A11y-1", severity: "P1", category: "Accessibility", target: "Navbar trigger", desc: "Dropdown trigger triggers are static <span> tags with no role='button' or tabIndex. Keyboard/screen-reader users cannot open the menus.", command: "/impeccable polish", status: "passed" },
    { id: "A11y-2", severity: "P1", category: "Accessibility", target: "Contact Form", desc: "Form inputs lack proper associated <label> elements, relying solely on placeholders. This violates WCAG AA.", command: "/impeccable clarify", status: "passed" },
    { id: "Resp-1", severity: "P1", category: "Responsive Design", target: "Mobile Navigation", desc: "Main links are set to display:none on viewports < 768px, but no hamburger menu button or mobile drawer exists.", command: "/impeccable adapt", status: "passed" },
    { id: "Perf-1", severity: "P1", category: "Performance", target: "Image Assets", desc: "Heavy PNGs (up to 1.02MB) loaded via standard <img> tags. Next.js next/image component should be used to automate WebP formatting and sizing.", command: "/impeccable optimize", status: "passed" },
    { id: "Perf-2", severity: "P2", category: "Performance", target: "Google Fonts", desc: "Synchronous Google Fonts linking blocks the initial paint pipeline.", command: "/impeccable typeset", status: "active" }
  ]
};

export default function AuditHud() {
  const [isOpen, setIsOpen] = useState(false);
  const [annotate, setAnnotate] = useState(false);
  const [activeTab, setActiveTab] = useState('summary');

  useEffect(() => {
    if (!annotate) {
      // Clean up annotations
      document.querySelectorAll('.audit-annotation-outline').forEach(el => {
        el.classList.remove('audit-annotation-outline');
      });
      document.querySelectorAll('.audit-badge').forEach(el => el.remove());
      return;
    }

    // Apply visual annotations to the DOM based on active page elements
    const runAnnotations = () => {
      // 1. Check form inputs without labels
      const inputs = document.querySelectorAll('form input, form select, form textarea');
      inputs.forEach(input => {
        if (input.type === 'hidden' || input.type === 'submit') return;

        let hasLabel = false;
        if (input.id) {
          const label = document.querySelector(`label[for="${input.id}"]`);
          if (label) hasLabel = true;
        }
        if (!hasLabel && input.closest('label')) {
          hasLabel = true;
        }

        if (!hasLabel) {
          input.classList.add('audit-annotation-outline');
          if (!input.parentElement.querySelector('.audit-badge-a11y')) {
            const badge = document.createElement('span');
            badge.className = 'audit-badge audit-badge-a11y';
            badge.innerText = '⚠️ A11y: Missing Label';
            badge.setAttribute('style', 'position:absolute; background:var(--gold-dark); color:white; font-size:9px; padding:2px 6px; border-radius:3px; z-index:99; font-weight:600; margin-top:-20px; font-family:sans-serif;');
            input.parentNode.insertBefore(badge, input);
          }
        } else {
          input.classList.remove('audit-annotation-outline');
          const existing = input.parentNode.querySelector('.audit-badge-a11y');
          if (existing) existing.remove();
        }
      });

      // 2. Check navbar trigger elements
      const dropdowns = document.querySelectorAll('.nav-item-dropdown .dropdown-trigger');
      dropdowns.forEach(drop => {
        const isSemantic = drop.tagName.toLowerCase() === 'button' || drop.tagName.toLowerCase() === 'a';
        if (!isSemantic) {
          drop.classList.add('audit-annotation-outline');
          if (!drop.querySelector('.audit-badge-nav')) {
            const badge = document.createElement('span');
            badge.className = 'audit-badge audit-badge-nav';
            badge.innerText = '⚠️ P1 A11y: Static Span Trigger';
            badge.setAttribute('style', 'position:absolute; background:#e05252; color:white; font-size:9px; padding:2px 6px; border-radius:3px; z-index:99; font-weight:600; margin-top:28px; white-space:nowrap; font-family:sans-serif;');
            drop.appendChild(badge);
          }
        } else {
          drop.classList.remove('audit-annotation-outline');
          const existing = drop.querySelector('.audit-badge-nav');
          if (existing) existing.remove();
        }
      });

      // 3. Check for standard <img> tags
      const images = document.querySelectorAll('img:not(.nav-logo img):not(.footer-logo img)');
      images.forEach(img => {
        const isNextImage = img.getAttribute('data-nimg') || img.src.includes('_next/image') || img.closest('.nav-logo') || img.closest('.footer-logo');
        if (!isNextImage) {
          img.classList.add('audit-annotation-outline');
          if (!img.parentNode.querySelector('.audit-badge-img')) {
            const badge = document.createElement('span');
            badge.className = 'audit-badge audit-badge-img';
            badge.innerText = '⚡ Perf: Unoptimized <img>';
            badge.setAttribute('style', 'position:absolute; background:#3b82f6; color:white; font-size:9px; padding:2px 6px; border-radius:3px; z-index:99; font-weight:600; margin-left:10px; margin-top:10px; font-family:sans-serif;');
            img.parentNode.insertBefore(badge, img);
          }
        } else {
          img.classList.remove('audit-annotation-outline');
          const existing = img.parentNode.querySelector('.audit-badge-img');
          if (existing) existing.remove();
        }
      });
    };

    // Run immediately and setup listener for dynamic transitions
    runAnnotations();
    const interval = setInterval(runAnnotations, 1000);
    return () => clearInterval(interval);
  }, [annotate]);

  return (
    <>
      {/* CSS Styles injection for annotations */}
      <style dangerouslySetInnerHTML={{ __html: `
        .audit-annotation-outline {
          outline: 2px dashed #e05252 !important;
          outline-offset: 2px !important;
          position: relative !important;
        }
        .audit-btn-hover:hover {
          background: rgba(255,255,255,0.08) !important;
        }
      `}} />

      {/* Floating Badge */}
      <div 
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: 'var(--green-deep)',
          color: 'var(--white)',
          padding: '12px 20px',
          borderRadius: '50px',
          boxShadow: '0 10px 30px rgba(13, 43, 26, 0.3)',
          border: '1px solid var(--gold)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          zIndex: 9999,
          fontFamily: "'Outfit', sans-serif",
          fontSize: '13px',
          fontWeight: 600,
          transition: 'transform 0.2s ease, background-color 0.2s ease',
        }}
        className="audit-trigger"
      >
        <ShieldAlert size={16} style={{ color: 'var(--gold-light)' }} />
        <span>Audit Console: {auditData.score}/{auditData.maxScore}</span>
      </div>

      {/* Audit Panel Drawer */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '450px',
          height: '100vh',
          background: '#141e19',
          color: '#e2eae6',
          boxShadow: '-10px 0 50px rgba(0,0,0,0.5)',
          zIndex: 10000,
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "'Outfit', sans-serif",
          borderLeft: '1px solid rgba(200, 153, 42, 0.2)',
          animation: 'slideIn 0.3s ease-out'
        }}>
          {/* Header */}
          <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldAlert style={{ color: 'var(--gold-light)' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 600, margin: 0, color: 'var(--white)' }}>Technical Frontend Audit</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: '#889e95', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Tabs */}
          <div style={{ display: 'flex', background: 'rgba(0,0,0,0.2)', padding: '0 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <button 
              onClick={() => setActiveTab('summary')}
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'summary' ? '2px solid var(--gold)' : '2px solid transparent',
                color: activeTab === 'summary' ? 'var(--white)' : '#889e95',
                padding: '14px 0',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Health Score
            </button>
            <button 
              onClick={() => setActiveTab('issues')}
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'issues' ? '2px solid var(--gold)' : '2px solid transparent',
                color: activeTab === 'issues' ? 'var(--white)' : '#889e95',
                padding: '14px 0',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Issues ({auditData.issues.length})
            </button>
          </div>

          {/* Scrollable Content */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
            
            {activeTab === 'summary' && (
              <div>
                {/* Visual Score Circle */}
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <div style={{ 
                    width: '100px', 
                    height: '100px', 
                    borderRadius: '50%', 
                    border: '4px solid var(--gold)', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '32px', 
                    fontWeight: 300,
                    fontFamily: "'Cormorant Garamond', serif",
                    color: 'var(--gold-light)',
                    marginBottom: '12px'
                  }}>
                    {auditData.score}
                  </div>
                  <h4 style={{ margin: 0, fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--white)' }}>
                    Rating: <span style={{ color: 'var(--gold)' }}>{auditData.rating}</span>
                  </h4>
                </div>

                {/* Annotation Toggle */}
                <div style={{ 
                  background: 'rgba(200, 153, 42, 0.05)', 
                  border: '1px solid rgba(200, 153, 42, 0.2)', 
                  borderRadius: '8px', 
                  padding: '16px', 
                  marginBottom: '28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <h5 style={{ margin: 0, fontSize: '14px', color: 'var(--white)', fontWeight: 600 }}>Annotate Viewport</h5>
                    <p style={{ margin: 0, fontSize: '12px', color: '#889e95', marginTop: '4px' }}>Highlight technical issues on this page</p>
                  </div>
                  <button 
                    onClick={() => setAnnotate(!annotate)}
                    style={{
                      background: annotate ? 'var(--green-light)' : 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--white)',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Eye size={14} />
                    {annotate ? "ON" : "OFF"}
                  </button>
                </div>

                {/* Dimensions breakdown */}
                <h5 style={{ color: 'var(--white)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Diagnostic Breakdown</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {auditData.dimensions.map((dim, i) => (
                    <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--white)' }}>{dim.name}</span>
                        <span style={{ fontSize: '13px', color: 'var(--gold-light)' }}>{dim.score}/{dim.max}</span>
                      </div>
                      <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden', marginBottom: '8px' }}>
                        <div style={{ width: `${(dim.score / dim.max) * 100}%`, height: '100%', background: 'var(--gold)' }}></div>
                      </div>
                      <p style={{ margin: 0, fontSize: '12px', color: '#889e95', lineHeight: 1.4 }}>{dim.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'issues' && (
              <div>
                <h5 style={{ color: 'var(--white)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Diagnostic Backlog</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {auditData.issues.map((issue) => (
                    <div key={issue.id} style={{ 
                      background: issue.status === 'passed' ? 'rgba(16, 185, 129, 0.03)' : 'rgba(255,255,255,0.02)', 
                      border: issue.status === 'passed' ? '1px solid rgba(16, 185, 129, 0.15)' : '1px solid rgba(255,255,255,0.04)', 
                      borderRadius: '8px', 
                      padding: '16px',
                      opacity: issue.status === 'passed' ? 0.85 : 1
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                        <span style={{ 
                          fontSize: '10px', 
                          fontWeight: 600, 
                          background: issue.status === 'passed' ? '#10b981' : (issue.severity === 'P1' ? '#e05252' : '#d97706'), 
                          color: 'var(--white)', 
                          padding: '2px 6px', 
                          borderRadius: '3px' 
                        }}>{issue.status === 'passed' ? 'RESOLVED' : issue.severity}</span>
                        <span style={{ fontSize: '11px', color: '#889e95' }}>{issue.category}</span>
                      </div>
                      <h4 style={{ 
                        margin: 0, 
                        fontSize: '15px', 
                        fontWeight: 600, 
                        color: 'var(--white)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px' 
                      }}>
                        {issue.status === 'passed' && <CheckCircle size={14} style={{ color: '#10b981' }} />}
                        {issue.target}
                      </h4>
                      <p style={{ margin: '8px 0 14px 0', fontSize: '13px', color: '#889e95', lineHeight: 1.5 }}>
                        {issue.status === 'passed' ? `Successfully Fixed: ${issue.desc}` : issue.desc}
                      </p>
                      
                      {issue.status !== 'passed' && (
                        /* Command hint */
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(0,0,0,0.2)', padding: '8px 12px', borderRadius: '4px', borderLeft: '3px solid var(--gold)' }}>
                          <Info size={12} style={{ color: 'var(--gold-light)' }} />
                          <code style={{ fontSize: '11px', color: 'var(--gold-light)' }}>{issue.command}</code>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Footer */}
          <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.1)' }}>
            <span style={{ fontSize: '11px', color: '#889e95' }}>AB Udyog Audit Console v3.5.0</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                onClick={() => setAnnotate(!annotate)}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--white)',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <RefreshCw size={10} />
                Refresh
              </button>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
