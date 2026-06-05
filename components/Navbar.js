"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">
        <Link href="/">
          <img src="/logo.png" alt="AB Udyog Pvt. Ltd." />
        </Link>
      </div>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        
        <li>
          <div className="nav-item-dropdown">
            <button 
              style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.25s', display: 'flex', alignItems: 'center', gap: '4px', height: '100%', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }} 
              className="dropdown-trigger"
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Toggle About Us dropdown"
            >
              About Us <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              <Link href="/about">Company Profile</Link>
              <Link href="/csr">CSR</Link>
            </div>
          </div>
        </li>

        <li>
          <div className="nav-item-dropdown">
            <Link 
              href="/products"
              style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.25s', display: 'flex', alignItems: 'center', gap: '4px', height: '100%', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: 0, textDecoration: 'none' }} 
              className="dropdown-trigger"
              aria-label="Products page and dropdown"
            >
              Products <ChevronDown size={14} />
            </Link>
            <div className="dropdown-menu two-col">
              <div className="dropdown-col">
                <div className="dropdown-group-title">Retail Brands</div>
                <Link href="/products/jeevan-rekha">Jeevan Rekha Rice Bran Oil</Link>
                <Link href="/products/jeevan-rekha#mustard">Jeevan Rekha Mustard Oil</Link>
                <Link href="/products/ab-health">AB Health Gamma Oryzanol</Link>
              </div>
              <div className="dropdown-col">
                <div className="dropdown-group-title">Industrial Derivatives</div>
                <Link href="/products/de-oiled-rice-bran">De-Oiled Rice Bran (DORB)</Link>
                <Link href="/products/rice-bran-gums">Rice Bran Gums</Link>
                <Link href="/products/rice-bran-wax">Rice Bran Wax</Link>
                <Link href="/products/rice-bran-lecithin">Rice Bran Lecithin</Link>
                <Link href="/products/fatty-acids-spent-earth">Fatty Acids &amp; Spent Earth</Link>
              </div>
            </div>
          </div>
        </li>

        <li><Link href="/manufacturing">Infra &amp; Quality</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Desktop Call to Action */}
      <a href="mailto:info@abudyog.in" className="nav-cta">Partner With Us</a>

      {/* Hamburger button for mobile */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setMobileOpen(!mobileOpen)} 
        aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Links Drawer */}
      <ul className={`nav-links-mobile ${mobileOpen ? 'open' : ''}`}>
        <li><Link href="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
        
        <li>
          <div className="nav-item-dropdown">
            <button className="dropdown-trigger" onClick={() => setAboutOpen(!aboutOpen)} style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              About Us <ChevronDown size={16} style={{ transform: aboutOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
            </button>
            {aboutOpen && (
              <div className="dropdown-menu">
                <Link href="/about" onClick={() => setMobileOpen(false)}>Company Profile</Link>
                <Link href="/csr" onClick={() => setMobileOpen(false)}>CSR</Link>
              </div>
            )}
          </div>
        </li>

        <li>
          <div className="nav-item-dropdown">
            <button className="dropdown-trigger" onClick={() => setProductsOpen(!productsOpen)} style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              Products <ChevronDown size={16} style={{ transform: productsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
            </button>
            {productsOpen && (
              <div className="dropdown-menu">
                <Link href="/products" onClick={() => setMobileOpen(false)} style={{ color: 'var(--gold)' }}>View All Products</Link>
                <div className="dropdown-group-title" style={{ fontSize: '10px', color: 'var(--gold)', marginTop: '8px' }}>Retail Brands</div>
                <Link href="/products/jeevan-rekha" onClick={() => setMobileOpen(false)}>Jeevan Rekha Rice Bran Oil</Link>
                <Link href="/products/jeevan-rekha#mustard" onClick={() => setMobileOpen(false)}>Jeevan Rekha Mustard Oil</Link>
                <Link href="/products/ab-health" onClick={() => setMobileOpen(false)}>AB Health</Link>
                
                <div className="dropdown-group-title" style={{ fontSize: '10px', color: 'var(--gold)', marginTop: '8px' }}>Industrial</div>
                <Link href="/products/de-oiled-rice-bran" onClick={() => setMobileOpen(false)}>De-Oiled Rice Bran</Link>
                <Link href="/products/rice-bran-gums" onClick={() => setMobileOpen(false)}>Rice Bran Gums</Link>
                <Link href="/products/rice-bran-wax" onClick={() => setMobileOpen(false)}>Rice Bran Wax</Link>
                <Link href="/products/rice-bran-lecithin" onClick={() => setMobileOpen(false)}>Rice Bran Lecithin</Link>
                <Link href="/products/fatty-acids-spent-earth" onClick={() => setMobileOpen(false)}>Fatty Acids &amp; Spent Earth</Link>
              </div>
            )}
          </div>
        </li>

        <li><Link href="/manufacturing" onClick={() => setMobileOpen(false)}>Infra &amp; Quality</Link></li>
        <li><Link href="/gallery" onClick={() => setMobileOpen(false)}>Gallery</Link></li>
        <li><Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
        <li>
          <a href="mailto:info@abudyog.in" className="btn-dark" onClick={() => setMobileOpen(false)} style={{ padding: '12px 24px', fontSize: '11px', marginTop: '16px' }}>Partner With Us</a>
        </li>
      </ul>
    </nav>
  );
}
