"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'products' | 'byproducts' | null
  
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const productLinks = [
    { href: '/products/jeevan-rekha', name: 'Jeevan Rekha Rice Bran Oil', desc: '100% physically refined health-friendly oil' },
    { href: '/products/jeevan-rekha#mustard-oil', name: 'Jeevan Rekha Mustard Oil', desc: 'Cold pressed grade, pungent & traditional' },
    { href: '/products/de-oiled-rice-bran', name: 'AB DORB (Animal Feed)', desc: 'High protein cattle, poultry & fish feeds' },
    { href: '/products/ab-health', name: 'AB Health Supplements', desc: 'Native nutrients & concentrated Oryzanol' },
  ];

  const byproductLinks = [
    { href: '/products/de-oiled-rice-bran', name: 'De-Oiled Rice Bran', desc: 'Clean organic feed base' },
    { href: '/products/rice-bran-wax', name: 'Rice Bran Wax', desc: 'High melting point cosmetic & food wax' },
    { href: '/products/rice-bran-gums', name: 'Rice Bran Gums', desc: 'Industrial emulsifying & sizing agent' },
    { href: '/products/rice-bran-lecithin', name: 'Rice Bran Lecithin', desc: 'Premium food & pharma grade emulsifier' },
    { href: '/products/fatty-acids-spent-earth', name: 'Fatty Acids & Spent Earth', desc: 'Biofuel feeds & recycled eco clays' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 lg:px-16 ${
          isScrolled 
            ? 'bg-background/90 backdrop-blur-md border-b border-border/60 shadow-md py-3' 
            : 'bg-background/20 backdrop-blur-xs border-b border-white/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          {/* Logo & Brand */}
          <Link 
            href="/" 
            onClick={handleLinkClick}
            className="flex items-center gap-3 group cursor-pointer focus:outline-none rounded-lg p-1 active-press"
            aria-label="AB Udyog Home Page"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-primary/95 border border-primary-light/20 group-hover:border-accent transition-all duration-300 shadow-md flex items-center justify-center">
              <Image 
                src="/abu_logo.png" 
                alt="AB Udyog Logo" 
                fill 
                sizes="40px"
                className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-sm md:text-base tracking-wide leading-none text-foreground group-hover:text-primary transition-colors duration-300">
                AB UDYOG
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-accent leading-none mt-1">
                PVT LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold tracking-widest uppercase">
            <Link 
              href="/" 
              onClick={handleLinkClick}
              className={`relative transition-colors duration-300 hover:text-primary py-2 focus:outline-none ${
                pathname === '/' ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              Home
              {pathname === '/' && (
                <motion.span layoutId="activeNav" className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
              )}
            </Link>

            <Link 
              href="/about" 
              onClick={handleLinkClick}
              className={`relative transition-colors duration-300 hover:text-primary py-2 focus:outline-none ${
                pathname === '/about' ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              About
              {pathname === '/about' && (
                <motion.span layoutId="activeNav" className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
              )}
            </Link>

            {/* Products Dropdown Trigger */}
            <div 
              className="relative py-2 cursor-pointer"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1 transition-colors duration-300 hover:text-primary focus:outline-none ${
                  pathname.startsWith('/products') && !pathname.includes('wax') && !pathname.includes('gum') && !pathname.includes('lecithin') && !pathname.includes('fatty-acid')
                    ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                Products <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 bg-background/95 backdrop-blur-xl border border-border/80 rounded-2xl shadow-xl p-4 z-50 text-left normal-case tracking-normal"
                  >
                    <div className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase mb-2 px-3 border-b border-border/40 pb-1">
                      Our Main Products
                    </div>
                    <div className="flex flex-col gap-1">
                      {productLinks.map((item, idx) => (
                        <Link 
                          key={idx} 
                          href={item.href}
                          onClick={handleLinkClick}
                          className="p-3 rounded-xl hover:bg-surface/50 transition-colors flex flex-col gap-0.5 group/item focus:outline-none"
                        >
                          <span className="font-bold text-foreground text-xs group-hover/item:text-primary transition-colors flex items-center gap-1">
                            {item.name} <ArrowUpRight size={10} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </span>
                          <span className="text-[10px] text-foreground/60 leading-relaxed font-light">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* By-Products Dropdown Trigger */}
            <div 
              className="relative py-2 cursor-pointer"
              onMouseEnter={() => handleMouseEnter('byproducts')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`flex items-center gap-1 transition-colors duration-300 hover:text-primary focus:outline-none ${
                  pathname.includes('wax') || pathname.includes('gum') || pathname.includes('lecithin') || pathname.includes('fatty-acid')
                    ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                By-Products <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'byproducts' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'byproducts' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 bg-background/95 backdrop-blur-xl border border-border/80 rounded-2xl shadow-xl p-4 z-50 text-left normal-case tracking-normal"
                  >
                    <div className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase mb-2 px-3 border-b border-border/40 pb-1">
                      Agro By-Products
                    </div>
                    <div className="flex flex-col gap-1">
                      {byproductLinks.map((item, idx) => (
                        <Link 
                          key={idx} 
                          href={item.href}
                          onClick={handleLinkClick}
                          className="p-3 rounded-xl hover:bg-surface/50 transition-colors flex flex-col gap-0.5 group/item focus:outline-none"
                        >
                          <span className="font-bold text-foreground text-xs group-hover/item:text-primary transition-colors flex items-center gap-1">
                            {item.name} <ArrowUpRight size={10} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </span>
                          <span className="text-[10px] text-foreground/60 leading-relaxed font-light">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/manufacturing" 
              onClick={handleLinkClick}
              className={`relative transition-colors duration-300 hover:text-primary py-2 focus:outline-none ${
                pathname === '/manufacturing' ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              Infrastructure
              {pathname === '/manufacturing' && (
                <motion.span layoutId="activeNav" className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
              )}
            </Link>

            <Link 
              href="/quality" 
              onClick={handleLinkClick}
              className={`relative transition-colors duration-300 hover:text-primary py-2 focus:outline-none ${
                pathname === '/quality' ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              Quality
              {pathname === '/quality' && (
                <motion.span layoutId="activeNav" className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
              )}
            </Link>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+917439289709"
              className="flex items-center gap-2 text-foreground/75 hover:text-primary transition-colors text-xs font-semibold focus:outline-none"
            >
              <Phone size={14} className="text-accent" />
              <span>+91 74392 89709</span>
            </a>
            <Link 
              href="/contact" 
              onClick={handleLinkClick}
              className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full font-bold text-[10px] tracking-widest uppercase shadow-md transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 active-press focus:outline-none"
            >
              Get In Touch <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-2.5 text-foreground hover:text-primary transition-colors focus:outline-none rounded-xl"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 pb-10 flex flex-col gap-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-3 text-base font-bold text-foreground border-b border-border/60 pb-6">
              <Link 
                href="/" 
                onClick={handleLinkClick}
                className={`py-2 px-3 rounded-xl hover:bg-surface transition-colors ${pathname === '/' ? 'text-primary bg-primary/5' : 'text-foreground/80'}`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={handleLinkClick}
                className={`py-2 px-3 rounded-xl hover:bg-surface transition-colors ${pathname === '/about' ? 'text-primary bg-primary/5' : 'text-foreground/80'}`}
              >
                About Us
              </Link>

              {/* Products Section in Mobile */}
              <div className="py-2 px-3">
                <div className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase mb-2">
                  Products
                </div>
                <div className="flex flex-col gap-2 pl-3 border-l border-border">
                  {productLinks.map((item, idx) => (
                    <Link 
                      key={idx} 
                      href={item.href} 
                      onClick={handleLinkClick}
                      className="py-1.5 text-sm text-foreground/80 hover:text-primary font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* By-Products Section in Mobile */}
              <div className="py-2 px-3">
                <div className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase mb-2">
                  By-Products
                </div>
                <div className="flex flex-col gap-2 pl-3 border-l border-border">
                  {byproductLinks.map((item, idx) => (
                    <Link 
                      key={idx} 
                      href={item.href} 
                      onClick={handleLinkClick}
                      className="py-1.5 text-sm text-foreground/80 hover:text-primary font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/manufacturing" 
                onClick={handleLinkClick}
                className={`py-2 px-3 rounded-xl hover:bg-surface transition-colors ${pathname === '/manufacturing' ? 'text-primary bg-primary/5' : 'text-foreground/80'}`}
              >
                Infrastructure
              </Link>
              <Link 
                href="/quality" 
                onClick={handleLinkClick}
                className={`py-2 px-3 rounded-xl hover:bg-surface transition-colors ${pathname === '/quality' ? 'text-primary bg-primary/5' : 'text-foreground/80'}`}
              >
                Quality Control
              </Link>
            </div>
            
            <div className="flex flex-col gap-4 mt-auto">
              <a 
                href="tel:+917439289709" 
                className="flex items-center justify-center gap-2 p-4 border border-border/80 rounded-2xl text-foreground font-semibold text-sm hover:bg-surface transition-colors"
              >
                <Phone size={16} className="text-accent" />
                <span>+91 74392 89709</span>
              </a>
              <Link 
                href="/contact" 
                onClick={handleLinkClick}
                className="bg-primary text-white py-4 rounded-2xl font-bold tracking-widest uppercase text-xs w-full text-center shadow-lg transition-colors flex items-center justify-center gap-2 active-press"
              >
                Get In Touch <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
