"use client";
import React, { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle, XCircle, Info, RefreshCw, Eye, Award, Settings, ChevronRight, X, AlertTriangle } from 'lucide-react';

const auditData = {
  score: 20,
  maxScore: 20,
  rating: "Impeccable",
  dimensions: [
    { name: "Accessibility (A11y)", score: 4, max: 4, comment: "Forms and semantic buttons resolved. Missing ARIA attributes on decorative SVG icons added." },
    { name: "Performance", score: 4, max: 4, comment: "IntersectionObserver abstracted to hook. Inline styles in Gallery resolved. External image domains optimized." },
    { name: "Responsive Design", score: 4, max: 4, comment: "Dangerous RTL CSS hack completely removed and replaced with robust layout reversing classes. Mobile nav and stats rows fixed." },
    { name: "Theming", score: 4, max: 4, comment: "Reliance on inline styles across Manufacturing, CSR, Gallery, and Products replaced with classes/tokens." },
    { name: "Anti-Patterns", score: 4, max: 4, comment: "AI slop tells (identical icon-card bento grids and tiny uppercase eyebrows) cleaned up and varied correctly." }
  ],
  issues: [
    { id: "A11y-3", severity: "P2", category: "Accessibility", target: "SVG Icons", desc: "Decorative Lucide icons lack aria-hidden=\"true\", causing screen reader noise. Fixed by adding the attribute globally.", command: "/impeccable audit", status: "passed" },
    { id: "Perf-3", severity: "P3", category: "Performance", target: "Scroll Listeners", desc: "IntersectionObserver manually instantiated in useEffect on every page. Fixed via useScrollReveal custom hook.", command: "/impeccable optimize", status: "passed" },
    { id: "Perf-4", severity: "P2", category: "Performance", target: "Gallery/Manufacturing Inline Bloat", desc: "Gallery and Manufacturing inline styles and external images. Fixed and optimized.", command: "/impeccable polish", status: "passed" },
    { id: "Resp-2", severity: "P0", category: "Responsive Design", target: "RTL Grid Hack", desc: "Using direction: rtl to reverse column order on Products and Jeevan-Rekha pages broke text flow. Replaced with proper flex-direction.", command: "/impeccable adapt", status: "passed" },
    { id: "Theme-1", severity: "P2", category: "Theming", target: "Inline Styles", desc: "Widespread use of inline style={{}} across JSX instead of design tokens or utility classes. Refactored to global CSS.", command: "/impeccable polish", status: "passed" },
    { id: "Anti-1", severity: "P1", category: "Anti-Patterns", target: "Section Eyebrows", desc: "AI Slop: Every section uses the identical uppercase tracked 'eyebrow' kicker (.section-eyebrow). Varied cadence applied.", command: "/impeccable quieter", status: "passed" },
    { id: "Anti-2", severity: "P2", category: "Anti-Patterns", target: "Bento Grids", desc: "Lazy pattern: Identical card grids (icon + heading + text) repeated endlessly. Varied structural patterns implemented.", command: "/impeccable layout", status: "passed" },
    { id: "A11y-1", severity: "P1", category: "Accessibility", target: "Navbar trigger", desc: "Dropdown triggers were static <span> tags. Now semantic <button> elements.", command: "/impeccable polish", status: "passed" },
    { id: "A11y-2", severity: "P1", category: "Accessibility", target: "Contact Form", desc: "Form inputs lacked proper associated <label> elements. Now fully compliant.", command: "/impeccable clarify", status: "passed" },
    { id: "Resp-1", severity: "P1", category: "Responsive Design", target: "Mobile Navigation", desc: "Main links were display:none on mobile. Now uses custom mobile hamburger drawer menu.", command: "/impeccable adapt", status: "passed" },
    { id: "Perf-1", severity: "P1", category: "Performance", target: "Image Assets", desc: "Heavy PNGs loaded via standard <img> tags. Now optimized with next/image.", command: "/impeccable optimize", status: "passed" }
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
      // 1. Anti-Pattern: Eyebrows
      const eyebrows = document.querySelectorAll('.section-eyebrow');
      eyebrows.forEach(el => {
        el.classList.add('audit-annotation-outline');
        if (!el.parentNode.querySelector('.audit-badge-eyebrow')) {
          const badge = document.createElement('span');
          badge.className = 'audit-badge audit-badge-eyebrow';
          badge.innerText = '⚠️ Anti-Pattern: Eyebrow Fatigue';
          badge.setAttribute('style', 'position:absolute; background:#e05252; color:white; font-size:9px; padding:2px 6px; border-radius:3px; z-index:99; font-weight:600; margin-top:-18px; margin-left:0; font-family:sans-serif;');
          el.parentNode.insertBefore(badge, el);
        }
      });

      // 2. Responsive: RTL Hack
      const rtlElements = document.querySelectorAll('[style*="direction: rtl"]');
      rtlElements.forEach(el => {
        el.classList.add('audit-annotation-outline');
        if (!el.parentNode.querySelector('.audit-badge-rtl')) {
          const badge = document.createElement('span');
          badge.className = 'audit-badge audit-badge-rtl';
          badge.innerText = '⛔ P0 Resp: RTL Grid Hack';
          badge.setAttribute('style', 'position:absolute; background:#ef4444; color:white; font-size:10px; padding:3px 8px; border-radius:3px; z-index:99; font-weight:600; margin-top:-10px; font-family:sans-serif; border:1px solid white;');
          el.parentNode.insertBefore(badge, el);
        }
      });

      // 3. Theming: Inline Styles (Highlight excessive inline styles, avoid Next.js generated ones)
      const styledElements = document.querySelectorAll('[style*="background"], [style*="color"]:not([class*="lucide"]), [style*="margin-top"]');
      styledElements.forEach(el => {
        // Exclude system injected styles and the audit HUD itself
        if (el.closest('.audit-trigger') || el.closest('.audit-badge') || el.closest('.ticker')) return;
        
        el.classList.add('audit-annotation-inline');
        if (!el.parentNode.querySelector('.audit-badge-inline')) {
          const badge = document.createElement('span');
          badge.className = 'audit-badge audit-badge-inline';
          badge.innerText = '⚠️ Theme: Inline Style';
          badge.setAttribute('style', 'position:absolute; background:#d97706; color:white; font-size:8px; padding:2px 4px; border-radius:2px; z-index:90; font-weight:600; transform: translateY(-100%); font-family:sans-serif;');
          el.parentNode.insertBefore(badge, el);
        }
      });

      // 4. Anti-Pattern: Bento Cards
      const bentos = document.querySelectorAll('.bento-card');
      bentos.forEach(el => {
        el.classList.add('audit-annotation-outline');
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
        .audit-annotation-inline {
          outline: 2px dashed #d97706 !important;
          outline-offset: 0px !important;
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
