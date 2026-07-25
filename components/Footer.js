import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer aria-label="Site Footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <Link href="/" aria-label="AB Udyog Pvt. Ltd. Homepage">
              <img src="/logo.png" alt="AB Udyog Pvt. Ltd." />
            </Link>
          </div>
          <p className="footer-tagline">
            Eastern India's premium physical refining and solvent extraction complex since 1994.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/jeevanrekhafoods/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram" title="AB Udyog on Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.facebook.com/JeevanRekhaFoods/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook" title="AB Udyog on Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/jeevanrekha/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn" title="AB Udyog on LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube" title="AB Udyog YouTube Channel">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about" title="Company Overview & History">Company Story</Link></li>
            <li><Link href="/sustainability" title="Sustainability & ESG Pledge">Sustainability &amp; ESG</Link></li>
            <li><Link href="/infrastructure" title="Solvent Extraction & Physical Refinery Infrastructure">Plant Infrastructure</Link></li>
            <li><Link href="/gallery" title="Refinery & Plant Facility Gallery">Facility Gallery</Link></li>
            <li><Link href="/contact" title="Contact Sales & B2B Trade Desk">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Consumer Brands</h4>
          <ul>
            <li><a href="https://jeevanrekhafoods.com/products/rice-bran-oil" target="_blank" rel="noopener noreferrer" title="Jeevan Rekha Rice Bran Oil">Jeevan Rekha Rice Bran Oil</a></li>
            <li><a href="https://jeevanrekhafoods.com/products/mustard-oil" target="_blank" rel="noopener noreferrer" title="Jeevan Rekha Mustard Oil">Jeevan Rekha Mustard Oil</a></li>
            <li><Link href="/products/ab-health" title="AB Health Physically Refined Rice Bran & Soyabean Oil">AB Health Edible Oils</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Industrial Products</h4>
          <ul>
            <li><Link href="/products/de-oiled-rice-bran" title="De-Oiled Rice Bran Animal Feed">De-Oiled Rice Bran (DORB)</Link></li>
            <li><Link href="/products/rice-bran-wax" title="Refined Rice Bran Wax">Premium Rice Bran Wax</Link></li>
            <li><Link href="/products/rice-bran-gums" title="Emulsifying Rice Bran Gums">Stabilized Rice Bran Gums</Link></li>
            <li><Link href="/products/rice-bran-lecithin" title="Natural Rice Bran Lecithin">Rice Bran Lecithin</Link></li>
            <li><Link href="/products/fatty-acids-spent-earth" title="Industrial Fatty Acids & Spent Earth">Industrial Fatty Acids &amp; Spent Earth</Link></li>
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
