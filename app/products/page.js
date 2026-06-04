"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Box, Sparkles } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

export default function ProductsMaster() {
  const b2bProducts = [
    {
      slug: 'de-oiled-rice-bran',
      title: 'De-Oiled Rice Bran (DORB)',
      tag: 'Industrial / Feed',
      img: '/dorb_feed.png',
      desc: 'Extracted raw rice bran processed into high-protein animal feed pellets and powder. Essential for fish, poultry, and cattle nutrition.'
    },
    {
      slug: 'rice-bran-wax',
      title: 'Rice Bran Wax',
      tag: 'Cosmetics / Polishes',
      img: '/rice_bran_wax.png',
      desc: 'Hard, high-melting natural vegetable wax obtained during physical winterization. Safe alternative for cosmetics and industrial polishes.'
    },
    {
      slug: 'rice-bran-gums',
      title: 'Rice Bran Gums',
      tag: 'Cosmetics / Detergents',
      img: '/rice_bran_lecithin.png',
      desc: 'Purified natural thickening, stabilizing, and emulsifying agents used in detergents, lubricants, and cosmetic conditioners.'
    },
    {
      slug: 'rice-bran-lecithin',
      title: 'Rice Bran Lecithin',
      tag: 'Nutraceuticals / Bakery',
      img: '/rice_bran_lecithin.png',
      desc: 'Non-GMO vegetable emulsifier rich in natural antioxidants and phospholipids, ideal for food, baking, and pharmaceutical uses.'
    },
    {
      slug: 'fatty-acids-spent-earth',
      title: 'Fatty Acids & Spent Earth',
      tag: 'Industrial Chemicals',
      img: '/refinery_plant.png',
      desc: 'Distilled fatty acid recovery by-product used in manufacturing candles and lubricants, combined with de-oiled bleaching earth for soil conditioning and concrete mixtures.'
    }
  ];

  return (
    <div className="w-full pt-12 pb-24 bg-dot-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
              <Box size={12} /> Master Portfolios
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground">
              Integrated Product Divisions
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
              Explore Jeevan Rekha, our consumer healthy cooking oils, and AB Udyog&apos;s certified B2B industrial rice bran derivatives.
            </p>
          </ScrollReveal>
        </div>

        {/* B2C Flagship Highlight Card */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="group relative rounded-[2.5rem] overflow-hidden border border-accent/15 shadow-md flex flex-col justify-end min-h-[380px] md:min-h-[440px] w-full p-8 md:p-12 hover:shadow-2xl hover:border-accent/40 transition-all duration-700">
            <Image 
              src="/mustard_oil.png" 
              alt="Jeevan Rekha B2C premium oil flagship lineup display" 
              fill
              sizes="100vw"
              className="object-cover transform group-hover:scale-[1.02] transition-transform duration-[1200ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-transparent" />
            
            <div className="relative z-10 max-w-2xl space-y-6 text-white text-left">
              <div className="bg-accent text-white text-[9px] font-mono font-bold uppercase tracking-widest inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full shadow-md">
                <Sparkles size={10} className="animate-pulse" /> Consumer Division (B2C)
              </div>
              <div className="space-y-3">
                <h3 className="text-4xl md:text-5xl font-serif text-accent font-bold">Jeevan Rekha</h3>
                <p className="font-light text-white/95 text-sm md:text-base leading-relaxed">
                  100% physically refined Rice Bran Oil containing 10,000+ PPM Oryzanol and pure Kachi Ghani Mustard Oil. Chemical-free health protection directly for your dining table.
                </p>
              </div>
              <div className="pt-2">
                <Link 
                  href="/products/jeevan-rekha" 
                  className="inline-flex items-center gap-2 bg-accent hover:bg-white text-white hover:text-primary px-6 py-3.5 rounded-full font-bold text-xs tracking-widest uppercase shadow-md transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent active-press"
                >
                  Explore Consumer Flagships <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* B2B Products Section */}
        <div className="space-y-8 pt-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="border-b border-border pb-4 flex items-center gap-2.5">
              <h3 className="text-2xl md:text-3xl font-serif text-foreground">
                Industrial Derivatives & By-Products (B2B)
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {b2bProducts.map((product, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.1 * (idx % 3)} className="h-full">
                <Link 
                  href={`/products/${product.slug}`}
                  className="group premium-card rounded-[2rem] overflow-hidden flex flex-col h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-accent"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
                    <Image 
                      src={product.img} 
                      alt={`${product.title} B2B product visual`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="object-cover transform group-hover:scale-[1.04] transition-transform duration-[1000ms] grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-primary/75 backdrop-blur-md text-white text-[8px] font-mono font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-full border border-white/10">
                      {product.tag}
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col flex-grow space-y-4">
                    <h4 className="text-lg md:text-xl font-serif font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                      {product.title}
                    </h4>
                    <p className="text-foreground/75 font-light text-xs md:text-sm leading-relaxed flex-grow">
                      {product.desc}
                    </p>
                    <div className="pt-2 flex items-center gap-1.5 font-bold text-xs tracking-widest uppercase text-accent group-hover:text-primary transition-colors duration-300 mt-auto">
                      View Technical Specifications <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
