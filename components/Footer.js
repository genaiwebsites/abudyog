"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 px-6 lg:px-16 border-t border-primary/20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-12 -right-12 w-60 h-60 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 w-full relative z-10">
        {/* Branding & Bio */}
        <div className="space-y-5 lg:col-span-2">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-primary-foreground border border-accent/20 flex items-center justify-center">
              <Image 
                src="/abu_logo.png" 
                alt="AB Udyog Logo" 
                fill 
                sizes="40px"
                className="object-contain p-1.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-sm md:text-base tracking-wide leading-none text-accent">
                AB UDYOG
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-white/50 leading-none mt-1">
                PVT LTD
              </span>
            </div>
          </Link>
          <p className="text-white/70 font-light text-xs md:text-sm leading-relaxed max-w-sm">
            East India&apos;s leading agro-based food manufacturer. Specializing in advanced physical refining of Rice Bran Oil (Jeevan Rekha), high-protein animal feeds (AB DORB), and eco-friendly industrial derivatives.
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-4 pt-2">
            <a 
              href="https://www.instagram.com/jeevanrekhafoods/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active-press"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/JeevanRekhaFoods" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active-press"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/jeevanrekha/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active-press"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="font-bold mb-5 tracking-widest uppercase text-[10px] md:text-xs text-accent">
            Company
          </h4>
          <ul className="space-y-3.5 text-xs md:text-sm font-medium flex flex-col items-start text-white/80">
            <li>
              <Link href="/about" className="hover:text-accent transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/manufacturing" className="hover:text-accent transition-colors">
                Infrastructure
              </Link>
            </li>
            <li>
              <Link href="/quality" className="hover:text-accent transition-colors">
                Quality Assurance
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact & Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Products Column */}
        <div>
          <h4 className="font-bold mb-5 tracking-widest uppercase text-[10px] md:text-xs text-accent">
            Products
          </h4>
          <ul className="space-y-3.5 text-xs md:text-sm font-medium flex flex-col items-start text-white/80">
            <li>
              <Link href="/products/jeevan-rekha" className="hover:text-accent transition-colors">
                Jeevan Rekha RBO
              </Link>
            </li>
            <li>
              <Link href="/products/jeevan-rekha#mustard-oil" className="hover:text-accent transition-colors">
                Jeevan Rekha Mustard Oil
              </Link>
            </li>
            <li>
              <Link href="/products/de-oiled-rice-bran" className="hover:text-accent transition-colors">
                AB DORB Feed
              </Link>
            </li>
            <li>
              <Link href="/products/ab-health" className="hover:text-accent transition-colors font-semibold text-accent">
                AB Health
              </Link>
            </li>
          </ul>
        </div>

        {/* By-Products Column */}
        <div>
          <h4 className="font-bold mb-5 tracking-widest uppercase text-[10px] md:text-xs text-accent">
            By-Products
          </h4>
          <ul className="space-y-3.5 text-xs md:text-sm font-medium flex flex-col items-start text-white/80">
            <li>
              <Link href="/products/de-oiled-rice-bran" className="hover:text-accent transition-colors">
                De-Oiled Rice Bran
              </Link>
            </li>
            <li>
              <Link href="/products/rice-bran-wax" className="hover:text-accent transition-colors">
                Rice Bran Wax
              </Link>
            </li>
            <li>
              <Link href="/products/rice-bran-gums" className="hover:text-accent transition-colors">
                Rice Bran Gums
              </Link>
            </li>
            <li>
              <Link href="/products/rice-bran-lecithin" className="hover:text-accent transition-colors">
                Rice Bran Lecithin
              </Link>
            </li>
            <li>
              <Link href="/products/fatty-acids-spent-earth" className="hover:text-accent transition-colors">
                Spent Earth & Fatty Acids
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Office & Address Strip */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-white/70 font-light z-10 relative">
        <div className="flex items-center gap-3">
          <MapPin size={16} className="text-accent shrink-0" />
          <span>FMCG plant in Kolkata, West Bengal, India</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail size={16} className="text-accent shrink-0" />
          <a href="mailto:info@abudyog.in" className="hover:text-accent transition-colors">info@abudyog.in</a>
        </div>
        <div className="flex items-center gap-3">
          <Phone size={16} className="text-accent shrink-0" />
          <a href="tel:+917439289709" className="hover:text-accent transition-colors">+91 74392 89709</a>
        </div>
      </div>
      
      {/* Sub-footer */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] text-white/40 font-bold uppercase tracking-widest w-full">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} AB Udyog Pvt Ltd. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-accent cursor-pointer transition-colors">Terms of Trade</span>
        </div>
      </div>
    </footer>
  );
}
