import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <Link href="/">
              <img src="/logo.png" alt="AB Udyog Pvt. Ltd." />
            </Link>
          </div>
          <p className="footer-tagline">
            A committed group delivering excellence across edible oils and rice-bran based business verticals since 1994.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/jeevanrekhafoods/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.facebook.com/JeevanRekhaFoods/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/jeevanrekha/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/csr">CSR</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/manufacturing">Infra &amp; Quality</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li><Link href="/products/jeevan-rekha">Jeevan Rekha RBO</Link></li>
            <li><Link href="/products/jeevan-rekha#mustard">Mustard Oil</Link></li>
            <li><Link href="/products/de-oiled-rice-bran">AB DORB</Link></li>
            <li><Link href="/products/ab-health">AB Health</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>By-Products</h4>
          <ul>
            <li><Link href="/products/de-oiled-rice-bran">Rice Bran DORB</Link></li>
            <li><Link href="/products/rice-bran-wax">Rice Bran Wax</Link></li>
            <li><Link href="/products/rice-bran-gums">Rice Bran Gums</Link></li>
            <li><Link href="/products/rice-bran-lecithin">Rice Bran Lecithin</Link></li>
            <li><Link href="/products/fatty-acids-spent-earth">Fatty Acids & Spent Earth</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          © {new Date().getFullYear()} AB Udyog Pvt. Ltd. All rights reserved.
        </div>
        <div className="footer-gstin">
          GSTIN: 19AABCA2234F1Z0
        </div>
      </div>
    </footer>
  );
}
