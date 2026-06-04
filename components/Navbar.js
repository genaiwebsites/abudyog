"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/manufacturing', label: 'Manufacturing' },
    { href: '/quality', label: 'Quality Control' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 ${
          isScrolled 
            ? 'bg-background/85 backdrop-blur-md border-b border-border/80 shadow-sm py-3' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          {/* Logo & Brand */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 active-press"
            aria-label="AB Udyog Home Page"
          >
            <div className="relative w-9 h-9 overflow-hidden rounded-lg bg-primary border border-border group-hover:border-accent transition-colors">
              <Image 
                src="/abu_logo.png" 
                alt="AB Udyog Logo" 
                fill 
                sizes="36px"
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-sm md:text-base tracking-wide leading-none text-primary">
                AB UDYOG
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-accent leading-none mt-1">
                PVT LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`relative transition-colors duration-300 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-2 ${
                    isActive ? 'text-accent font-bold' : 'text-foreground/80'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span 
                      layoutId="activeNav" 
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent rounded-full" 
                      transition={{ type: "spring", stiffness: 350, damping: 30 }} 
                    />
                  )}
                </Link>
              );
            })}
            
            {/* Divider */}
            <div className="h-4 w-[1px] bg-border" aria-hidden="true" />

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link 
                href="/contact" 
                className="bg-primary hover:bg-accent text-white hover:text-white px-5 py-2.5 rounded-full font-bold text-[10px] tracking-widest shadow-md transition-all duration-300 flex items-center gap-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:-translate-y-0.5 active-press"
              >
                Contact Us <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Toggles */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-2 text-foreground/80 hover:text-accent transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 pb-10 flex flex-col gap-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-xl font-serif text-foreground border-b border-border pb-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link 
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`transition-colors py-2 ${isActive ? 'text-accent font-bold' : 'text-foreground/80'}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            
            <Link 
              href="/contact" 
              onClick={handleLinkClick}
              className="bg-primary text-white py-4 rounded-xl font-bold tracking-widest uppercase text-xs w-full text-center shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              Contact & Partner <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
