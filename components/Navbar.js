"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
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

  if (pathname === '/products/magik-dorb') {
    return null;
  }

  return (
    <nav className={scrolled ? 'scrolled' : ''} aria-label="Main Navigation">
      <div className="nav-logo">
        <Link href="/" aria-label="AB Udyog Pvt. Ltd. Homepage">
          <img src="/logo.png" alt="AB Udyog Pvt. Ltd." />
        </Link>
      </div>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>

        <li>
          <div className="nav-item-dropdown">
            <Link 
              href="/products"
              style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.25s', display: 'flex', alignItems: 'center', gap: '4px', height: '100%', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: 0, textDecoration: 'none' }} 
              className="dropdown-trigger"
              aria-label="Products portfolio and categories"
            >
              Products <ChevronDown size={14} aria-hidden="true" />
            </Link>
            <div className="dropdown-menu two-col">
              <div className="dropdown-col">
                <div className="dropdown-group-title">Consumer</div>
                <a href="https://jeevanrekhafoods.com/products/rice-bran-oil" target="_blank" rel="noopener noreferrer" title="Jeevan Rekha Rice Bran Oil">Jeevan Rekha Rice Bran Oil</a>
                <a href="https://jeevanrekhafoods.com/products/mustard-oil" target="_blank" rel="noopener noreferrer" title="Jeevan Rekha Mustard Oil">Jeevan Rekha Mustard Oil</a>
                <Link href="/products/ab-health" title="AB Health Edible Oils">AB Health Edible Oils</Link>
              </div>
              <div className="dropdown-col">
                <div className="dropdown-group-title">Industrial</div>
                <Link href="/products/de-oiled-rice-bran" title="De-Oiled Rice Bran (DORB)">De-Oiled Rice Bran (DORB)</Link>
                <Link href="/products/rice-bran-gums" title="Rice Bran Gums">Rice Bran Gums</Link>
                <Link href="/products/rice-bran-wax" title="Rice Bran Wax">Rice Bran Wax</Link>
                <Link href="/products/rice-bran-lecithin" title="Rice Bran Lecithin">Rice Bran Lecithin</Link>
                <Link href="/products/rice-bran-fatty-acid" title="Rice Bran Fatty Acid">Rice Bran Fatty Acid</Link>
                <Link href="/products/spent-bleaching-earth" title="Spent Bleaching Earth">Spent Bleaching Earth</Link>
              </div>
            </div>
          </div>
        </li>

        <li><Link href="/infrastructure" title="Industrial Infrastructure">Infrastructure</Link></li>
        <li><Link href="/gallery" title="Refinery & Infrastructure Gallery">Gallery</Link></li>

        <li>
          <div className="nav-item-dropdown">
            <button 
              style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.25s', display: 'flex', alignItems: 'center', gap: '4px', height: '100%', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }} 
              className="dropdown-trigger"
              aria-haspopup="true"
              aria-expanded={aboutOpen}
              aria-label="About company sub-navigation"
            >
              About <ChevronDown size={14} aria-hidden="true" />
            </button>
            <div className="dropdown-menu">
              <Link href="/about" title="Company History & Overview">Company</Link>
              <Link href="/sustainability" title="Sustainability & Corporate Social Responsibility">Sustainability</Link>
            </div>
          </div>
        </li>

        <li><Link href="/contact" title="Contact Trade Desk & Sales">Contact</Link></li>
      </ul>

      {/* Hamburger button for mobile */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setMobileOpen(!mobileOpen)} 
        aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      {/* Mobile Links Drawer */}
      <ul className={`nav-links-mobile ${mobileOpen ? 'open' : ''}`}>
        <li><Link href="/" onClick={() => setMobileOpen(false)}>HOME</Link></li>

        <li className="mobile-dropdown-wrapper">
          <button className="mobile-dropdown-trigger" onClick={() => setProductsOpen(!productsOpen)}>
            PRODUCTS <ChevronDown size={16} className={`chevron ${productsOpen ? 'open' : ''}`} aria-hidden="true" />
          </button>
          <div className={`mobile-dropdown-menu ${productsOpen ? 'open' : ''}`}>
            <Link href="/products" onClick={() => setMobileOpen(false)} style={{ color: 'var(--gold-light)' }}>VIEW ALL PRODUCTS</Link>
            
            <div className="mobile-group-title">CONSUMER</div>
            <a href="https://jeevanrekhafoods.com/products/rice-bran-oil" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>JEEVAN REKHA RICE BRAN OIL</a>
            <a href="https://jeevanrekhafoods.com/products/mustard-oil" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>JEEVAN REKHA MUSTARD OIL</a>
            <Link href="/products/ab-health" onClick={() => setMobileOpen(false)}>AB HEALTH EDIBLE OILS</Link>
            
            <div className="mobile-group-title">INDUSTRIAL</div>
            <Link href="/products/de-oiled-rice-bran" onClick={() => setMobileOpen(false)}>DE-OILED RICE BRAN</Link>
            <Link href="/products/rice-bran-gums" onClick={() => setMobileOpen(false)}>RICE BRAN GUMS</Link>
            <Link href="/products/rice-bran-wax" onClick={() => setMobileOpen(false)}>RICE BRAN WAX</Link>
            <Link href="/products/rice-bran-lecithin" onClick={() => setMobileOpen(false)}>RICE BRAN LECITHIN</Link>
            <Link href="/products/rice-bran-fatty-acid" onClick={() => setMobileOpen(false)}>RICE BRAN FATTY ACID</Link>
            <Link href="/products/spent-bleaching-earth" onClick={() => setMobileOpen(false)}>SPENT BLEACHING EARTH</Link>
          </div>
        </li>

        <li><Link href="/infrastructure" onClick={() => setMobileOpen(false)}>INFRASTRUCTURE</Link></li>
        <li><Link href="/gallery" onClick={() => setMobileOpen(false)}>GALLERY</Link></li>

        <li className="mobile-dropdown-wrapper">
          <button className="mobile-dropdown-trigger" onClick={() => setAboutOpen(!aboutOpen)}>
            ABOUT <ChevronDown size={16} className={`chevron ${aboutOpen ? 'open' : ''}`} aria-hidden="true" />
          </button>
          <div className={`mobile-dropdown-menu ${aboutOpen ? 'open' : ''}`}>
            <Link href="/about" onClick={() => setMobileOpen(false)}>COMPANY</Link>
            <Link href="/sustainability" onClick={() => setMobileOpen(false)}>SUSTAINABILITY</Link>
          </div>
        </li>

        <li><Link href="/contact" onClick={() => setMobileOpen(false)}>CONTACT</Link></li>
      </ul>
    </nav>
  );
}
