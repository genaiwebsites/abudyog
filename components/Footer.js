"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 px-6 md:px-12 border-t border-border bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 w-full">
        {/* Branding & Bio */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-primary border border-border">
              <Image 
                src="/abu_logo.png" 
                alt="AB Udyog Logo" 
                fill 
                sizes="32px"
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-sm tracking-wide leading-none text-primary">
                AB UDYOG
              </span>
              <span className="text-[8px] font-mono font-bold tracking-widest uppercase text-accent leading-none mt-0.5">
                PVT LTD
              </span>
            </div>
          </Link>
          <p className="text-foreground/75 font-light text-xs md:text-sm leading-relaxed max-w-xs">
            India&apos;s premier physically refined solvent plant, established in Kolkata. Transitioning from decades of B2B manufacturing scale to nationwide B2C wellness.
          </p>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="font-bold mb-4 md:mb-6 tracking-widest uppercase text-[10px] md:text-xs text-accent">
            Company
          </h4>
          <ul className="space-y-3 text-xs md:text-sm font-medium flex flex-col items-start">
            <li>
              <Link href="/about" className="text-foreground/75 hover:text-accent transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/manufacturing" className="text-foreground/75 hover:text-accent transition-colors">
                Manufacturing Plant
              </Link>
            </li>
            <li>
              <Link href="/quality" className="text-foreground/75 hover:text-accent transition-colors">
                Quality Assurance
              </Link>
            </li>
          </ul>
        </div>

        {/* Portfolios Column */}
        <div>
          <h4 className="font-bold mb-4 md:mb-6 tracking-widest uppercase text-[10px] md:text-xs text-accent">
            Portfolios
          </h4>
          <ul className="space-y-3 text-xs md:text-sm font-medium flex flex-col items-start">
            <li>
              <Link href="/products/jeevan-rekha" className="text-foreground/75 hover:text-accent transition-colors">
                Jeevan Rekha Edible Oils (B2C)
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-foreground/75 hover:text-accent transition-colors">
                Industrial By-Products (B2B)
              </Link>
            </li>
            <li>
              <Link href="/products/dorb" className="text-foreground/75 hover:text-accent transition-colors font-mono uppercase text-[10px] tracking-wider bg-accent/10 px-2 py-0.5 rounded text-accent">
                AB DORB Feed
              </Link>
            </li>
          </ul>
        </div>

        {/* Registered Office Column */}
        <div>
          <h4 className="font-bold mb-4 md:mb-6 tracking-widest uppercase text-[10px] md:text-xs text-accent">
            Registered Office
          </h4>
          <ul className="space-y-3.5 text-xs md:text-sm text-foreground/75 font-light leading-relaxed">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-accent shrink-0 mt-0.5" /> 
              <span>Kolkata, West Bengal, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-accent shrink-0" /> 
              <a href="mailto:info@abudyog.in" className="hover:text-accent transition-colors">info@abudyog.in</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-accent shrink-0" /> 
              <a href="tel:+917439289709" className="hover:text-accent transition-colors">+91 74392 89709</a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Sub-footer */}
      <div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] text-foreground/50 font-bold uppercase tracking-widest w-full">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} AB Udyog Pvt Ltd. All rights reserved.
        </p>
        <div className="flex gap-4 md:gap-6">
          <span className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-accent cursor-pointer transition-colors">Terms of Trade</span>
        </div>
      </div>
    </footer>
  );
}
