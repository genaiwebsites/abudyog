"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Heart, Star, Activity, Sparkles, Factory, Award, Leaf, Warehouse, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';

export default function Home() {
  const stats = [
    { target: "300", suffix: ' TPD', label: "Solvent Extraction Capacity", desc: "Processing raw bran at scale", icon: <Factory size={20} /> },
    { target: "150", suffix: ' TPD', label: "Refinery Plant Capacity", desc: "Producing pure physically refined oils", icon: <Warehouse size={20} /> },
    { target: "40+", suffix: ' Years', label: "Established Legacy", desc: "Four decades of purity & integrity", icon: <Award size={20} /> },
    { target: "100%", suffix: ' Pure', label: "In-House Raw Processing", desc: "Ensuring top-tier quality check", icon: <ShieldCheck size={20} /> }
  ];

  return (
    <div className="w-full relative overflow-hidden bg-dot-grid">
      {/* Background Decorative Curves & Blurs (Wow Factor) */}
      <div className="absolute top-[20%] left-[5%] w-96 h-96 rounded-full bg-primary/5 blur-[120px] -z-10 liquid-blur" />
      <div className="absolute bottom-[30%] right-[5%] w-[450px] h-[450px] rounded-full bg-accent/8 blur-[150px] -z-10 liquid-blur" />
      
      {/* 1. Full-Page Impactful Hero Section (100vh) */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-border/40">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero_rice_paddy.png" 
            alt="Golden rice paddy harvest representing AB Udyog agro foundation" 
            fill
            priority
            className="object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          />
          {/* Multi-gradient overlays for readable text & premium mood */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-secondary/30 z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 pt-20 pb-16">
          <div className="lg:col-span-8 text-left space-y-6">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-accent/30 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Four Decades of Agro-Food Excellence
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-serif leading-[1.1] tracking-tight text-white font-medium">
                A Legacy Forged in <br />
                <span className="text-accent italic font-bold">Purity &amp; Progress.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-sm md:text-base text-white/80 font-light max-w-2xl leading-relaxed">
                From our state-of-the-art continuous solvent extraction and physical refinery complex in Kolkata, AB Udyog processes the complete value chain of rice bran, delivering purity to kitchens and premium derivatives to global industries.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-start pt-4">
                <Link 
                  href="/products/jeevan-rekha" 
                  className="bg-accent hover:bg-accent-deep text-foreground hover:text-foreground px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 active-press focus:outline-none"
                >
                  Explore Consumer Products <ArrowRight size={14} />
                </Link>
                <Link 
                  href="/about" 
                  className="border border-white/30 hover:border-accent text-white hover:text-accent px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5 active-press bg-white/5 backdrop-blur-sm focus:outline-none"
                >
                  Discover Our Journey
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Floating stat card overlaying the hero */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="relative p-6 md:p-8 rounded-[2.5rem] bg-[#0e2207]/80 backdrop-blur-lg border border-primary/40 shadow-2xl max-w-sm w-full space-y-6 text-white text-left">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">Refining Infrastructure</div>
                  <h3 className="font-serif text-2xl font-bold">Kolkata Processing Complex</h3>
                </div>
                <div className="h-[1px] bg-white/10" />
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent shrink-0">
                      <Factory size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-accent font-serif">300 TPD</div>
                      <div className="text-[10px] text-white/60 tracking-wider uppercase font-semibold">Solvent Extraction capacity</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent shrink-0">
                      <Warehouse size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-accent font-serif">150 TPD</div>
                      <div className="text-[10px] text-white/60 tracking-wider uppercase font-semibold">Physical Refining capacity</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/5 rounded-2xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse shrink-0"></span>
                  <span className="text-[10px] text-white/70 font-light">Fully operational &amp; FSSAI, ISO certified</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Scrolling Value Ribbon */}
      <section className="bg-primary text-white py-4 overflow-hidden border-y border-accent/20">
        <div className="w-full flex">
          <div className="flex animate-marquee whitespace-nowrap text-xs font-bold tracking-widest uppercase shrink-0">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="flex items-center">
                <span className="mx-8 text-accent">✦</span> 100% physically refined
                <span className="mx-8 text-accent">✦</span> 10,000+ ppm oryzanol
                <span className="mx-8 text-accent">✦</span> cold pressed mustard oil
                <span className="mx-8 text-accent">✦</span> premium de-oiled rice bran (dorb)
                <span className="mx-8 text-accent">✦</span> zero trans fat &amp; cholesterol free
                <span className="mx-8 text-accent">✦</span> eco-friendly byproduct processing
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Preview Section */}
      <section className="py-20 md:py-28 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Anchor - Left */}
            <div className="relative">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary/10 p-2 bg-surface/50 backdrop-blur-sm group">
                  <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden">
                    <Image 
                      src="/refinery_plant.png" 
                      alt="AB Udyog Continuous Refinery Plant in Kolkata"
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e2207]/60 to-transparent pointer-events-none" />
                  </div>
                </div>
              </ScrollReveal>
              
              <div className="absolute -bottom-6 -right-6 premium-card p-6 rounded-2xl shadow-lg border border-accent/20 flex items-center gap-4 max-w-[280px] z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Award size={24} className="animate-pulse" />
                </div>
                <div>
                  <p className="text-[9px] text-foreground/50 font-bold uppercase tracking-widest leading-tight mb-0.5">Integrity &amp; Legacy</p>
                  <p className="text-sm font-serif font-bold text-foreground">A Legacy Forged in Purity</p>
                </div>
              </div>
            </div>

            {/* Content - Right */}
            <div className="space-y-6">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">Our Agro Roots</span>
                  <h2 className="text-3xl md:text-4.5xl font-serif text-foreground leading-tight">
                    Refined Agro Food Processing at Scale
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-foreground/80 font-light text-sm md:text-base leading-relaxed">
                  Established in the heart of West Bengal, AB Udyog Pvt. Ltd. represents the standard of engineering integrity in edible oil refining. Over four decades, we have transitioned from a high-yield B2B supply house to a customer-focused FMCG manufacturer.
                </p>
                <p className="text-foreground/80 font-light text-sm md:text-base leading-relaxed mt-4">
                  We process freshly harvested rice bran utilizing modern physical refining technologies. This continuous processing system prevents nutritional loss, ensuring that our flagship product, Jeevan Rekha Rice Bran Oil, delivers essential health benefits directly to your home.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3} className="pt-4">
                <Link 
                  href="/about" 
                  className="bg-primary hover:bg-primary-light text-white px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-2 shadow-md hover:-translate-y-0.5 active-press"
                >
                  Our Corporate Profile <ArrowRight size={14} />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Consumer Division (B2C) — Jeevan Rekha Showcase */}
      <section className="py-24 bg-surface/30 border-y border-border/40 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold bg-primary/10 px-3 py-1.5 rounded-full">Consumer Division (B2C)</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground">
                Jeevan Rekha Flagship Range
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-foreground/70 font-light text-sm md:text-base leading-relaxed">
                Formulated for nutritional purity and traditional taste. Our consumer line is manufactured in state-of-the-art facilities and undergoes extensive quality audits to ensure the highest standards.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Rice Bran Oil Card */}
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <div className="premium-card rounded-[2.5rem] overflow-hidden flex flex-col justify-between h-full border border-border group hover:border-accent/30 transition-all duration-500 bg-background/50">
                <div className="p-8 pb-4 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-primary/10 text-primary text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                      100% Physically Refined
                    </span>
                    <span className="text-accent flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider">
                      <Heart size={12} className="fill-accent/20 animate-pulse" /> 10,000+ PPM Oryzanol
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">Jeevan Rekha Rice Bran Oil</h3>
                  <p className="font-light text-foreground/75 text-sm leading-relaxed">
                    Refined via steam distillation without harsh chemical acids. Naturally rich in Oryzanol, which helps lower bad cholesterol, and fortified with Vitamin A &amp; D2 for comprehensive health benefits.
                  </p>
                </div>
                
                <div className="relative h-64 lg:h-72 w-full mt-6 overflow-hidden rounded-t-[2.2rem]">
                  <Image 
                    src="/premium_cooking_oil.png" 
                    alt="Jeevan Rekha Rice Bran Oil Bottle Packaging visual" 
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-[1200ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6 bg-surface/50 border-t border-border/40 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-foreground/60 uppercase">Packs: 1L, 2L, 5L, 15L</span>
                  <Link 
                    href="/products/jeevan-rekha" 
                    className="text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    View Nutrition Stats <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Mustard Oil Card */}
            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <div className="premium-card rounded-[2.5rem] overflow-hidden flex flex-col justify-between h-full border border-border group hover:border-accent/30 transition-all duration-500 bg-background/50">
                <div className="p-8 pb-4 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-accent/10 text-accent-deep text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                      Traditional Cold Press
                    </span>
                    <span className="text-primary flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider">
                      <Star size={12} className="fill-primary/20" /> Strong Pungency &amp; Aroma
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">Jeevan Rekha Mustard Oil</h3>
                  <p className="font-light text-foreground/75 text-sm leading-relaxed">
                    Extracted from quality mustard seeds using traditional cold-pressing methods. Retains the pungent taste and natural color, perfect for pickles and authentic culinary creations.
                  </p>
                </div>
                
                <div className="relative h-64 lg:h-72 w-full mt-6 overflow-hidden rounded-t-[2.2rem]">
                  <Image 
                    src="/mustard_oil.png" 
                    alt="Jeevan Rekha Mustard Oil Bottle Packaging visual" 
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-[1200ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6 bg-surface/50 border-t border-border/40 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-foreground/60 uppercase">Packs: 500ml, 1L, 5L, 15Kg</span>
                  <Link 
                    href="/products/jeevan-rekha#mustard-oil" 
                    className="text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    Explore Benefits <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Industrial Division (B2B) — Commercial Derivatives */}
      <section className="py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">Industrial Division (B2B)</span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground">
                Agro Derivatives &amp; Feed Grade Portfolios
              </h2>
              <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
                By processing the entire value chain of rice bran, we manufacture industrial-grade lipids, waxes, and nutritional feeds supplied across global supply chains.
              </p>
            </div>
            <Link 
              href="/products" 
              className="text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors flex items-center gap-1.5 cursor-pointer rounded p-1 group focus:outline-none"
            >
              All Specifications <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
            {/* DORB Card */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="premium-card rounded-[2rem] overflow-hidden flex flex-col justify-between h-full border border-border group hover:border-accent/30 transition-all bg-background/40">
                <div className="p-6 space-y-4">
                  <div className="relative w-full h-40 rounded-2xl overflow-hidden">
                    <Image 
                      src="/dorb_feed.png" 
                      alt="De-Oiled Rice Bran Feed representation" 
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-foreground">De-Oiled Rice Bran (DORB)</h4>
                  <p className="text-xs text-foreground/75 font-light leading-relaxed">
                    Organic, high-protein feed ingredient widely consumed in manufacturing cattle, fish, poultry, and swine feed formulations. Produced through oil extraction of fresh raw bran.
                  </p>
                </div>
                <div className="p-5 bg-surface/40 border-t border-border/40 flex justify-between items-center">
                  <span className="text-[9px] font-mono font-bold bg-primary/10 text-primary px-2.5 py-1 rounded">Animal Feed Range</span>
                  <Link href="/products/de-oiled-rice-bran" className="text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">Details →</Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Rice Bran Wax Card */}
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <div className="premium-card rounded-[2rem] overflow-hidden flex flex-col justify-between h-full border border-border group hover:border-accent/30 transition-all bg-background/40">
                <div className="p-6 space-y-4">
                  <div className="relative w-full h-40 rounded-2xl overflow-hidden">
                    <Image 
                      src="/rice_bran_wax.png" 
                      alt="Rice Bran Wax raw material" 
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-foreground">Refined Rice Bran Wax</h4>
                  <p className="text-xs text-foreground/75 font-light leading-relaxed">
                    High melting point vegetable wax refined from raw filter cake. Crucial component for cosmetics, paper coatings, leather polishing, and fruit preservation coatings.
                  </p>
                </div>
                <div className="p-5 bg-surface/40 border-t border-border/40 flex justify-between items-center">
                  <span className="text-[9px] font-mono font-bold bg-accent/10 text-accent-deep px-2.5 py-1 rounded">Industrial Wax</span>
                  <Link href="/products/rice-bran-wax" className="text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">Details →</Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Rice Bran Lecithin Card */}
            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <div className="premium-card rounded-[2rem] overflow-hidden flex flex-col justify-between h-full border border-border group hover:border-accent/30 transition-all bg-background/40">
                <div className="p-6 space-y-4">
                  <div className="relative w-full h-40 rounded-2xl overflow-hidden">
                    <Image 
                      src="/rice_bran_lecithin.png" 
                      alt="Rice Bran Lecithin emulsifier" 
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-foreground">Rice Bran Lecithin</h4>
                  <p className="text-xs text-foreground/75 font-light leading-relaxed">
                    High quality natural emulsifier and antioxidant derived from raw oil gums. Widely used in bakery, chocolates, cosmetics, and nutraceutical applications.
                  </p>
                </div>
                <div className="p-5 bg-surface/40 border-t border-border/40 flex justify-between items-center">
                  <span className="text-[9px] font-mono font-bold bg-primary/10 text-primary px-2.5 py-1 rounded">Emulsifier Grade</span>
                  <Link href="/products/rice-bran-lecithin" className="text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">Details →</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Micro-sections for remaining byproducts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="premium-card p-6 rounded-2xl border border-border flex flex-col md:flex-row gap-6 items-center bg-background/40">
                <div className="space-y-2 flex-grow">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-accent">By-Product</span>
                  <h4 className="text-lg font-serif font-bold text-foreground">Rice Bran Gums</h4>
                  <p className="text-xs text-foreground/75 font-light leading-relaxed">
                    Sourced during oil degumming, these gums are utilized as stabilizing and sizing agents in paper, paint, and textile industries.
                  </p>
                </div>
                <Link 
                  href="/products/rice-bran-gums"
                  className="bg-primary/5 hover:bg-primary/10 text-primary hover:text-primary-light px-5 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 shrink-0"
                >
                  Applications
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="premium-card p-6 rounded-2xl border border-border flex flex-col md:flex-row gap-6 items-center bg-background/40">
                <div className="space-y-2 flex-grow">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-accent">By-Product</span>
                  <h4 className="text-lg font-serif font-bold text-foreground">Acid Oils &amp; Spent Earth</h4>
                  <p className="text-xs text-foreground/75 font-light leading-relaxed">
                    Industrial byproducts collected during distillation. Recycled spent clay is processed for ecological earth reuse, while acid oil serves as biofuel stock.
                  </p>
                </div>
                <Link 
                  href="/products/fatty-acids-spent-earth"
                  className="bg-primary/5 hover:bg-primary/10 text-primary hover:text-primary-light px-5 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 shrink-0"
                >
                  Applications
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. Why Choose AB Udyog (4 Pillars) */}
      <section className="py-24 bg-primary text-white border-t border-accent/20 relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">The Pillars of Our Success</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">
              Why Global Partners &amp; Families Choose AB Udyog
            </h2>
            <div className="w-20 h-[3px] bg-accent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck size={32} />,
                title: "Purity First",
                desc: "100% physical steam refining ensures zero chemical traces or toxic acids in our finished products."
              },
              {
                icon: <Award size={32} />,
                title: "Batch Traceability",
                desc: "We track every batch from the collection of fresh raw bran at paddy mills to the final bottled oil."
              },
              {
                icon: <Factory size={32} />,
                title: "Processing Scale",
                desc: "Our high-capacity continuous extraction and refining plants ensure uninterrupted industrial deliveries."
              },
              {
                icon: <Leaf size={32} />,
                title: "Sustainability",
                desc: "We process every byproduct, minimizing industrial waste and contributing to a circular bio-economy."
              }
            ].map((pillar, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-accent">{pillar.icon}</div>
                  <h4 className="text-lg font-serif font-bold text-white">{pillar.title}</h4>
                  <p className="text-xs text-white/70 font-light leading-relaxed">{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Corporate Capacities & Certifications */}
      <section className="py-24 bg-transparent border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Stat Details - Left */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {stats.map((stat, idx) => (
                <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
                  <div className="premium-card p-6 md:p-8 rounded-[2rem] space-y-3 relative overflow-hidden group bg-background/50 border border-border">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-accent/10 transition-colors duration-500" />
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-transform group-hover:scale-110">
                      {stat.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl md:text-4xl font-serif font-bold text-primary">
                        {stat.target}
                        <span className="text-xl font-sans font-semibold align-baseline ml-0.5">{stat.suffix}</span>
                      </div>
                      <div className="text-xs font-bold text-foreground font-sans uppercase tracking-widest">{stat.label}</div>
                      <p className="text-xs text-foreground/60 font-light">{stat.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Certifications - Right */}
            <div className="lg:col-span-4 space-y-6">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">Standardized Quality</span>
                  <h3 className="text-2xl md:text-3.5xl font-serif text-foreground leading-tight">Accredited Food Safety Standards</h3>
                  <p className="text-xs text-foreground/75 font-light leading-relaxed">
                    Our manufacturing processes undergo regular inspection by international agencies. We ensure complete transparency across all chemical and microbiological safety criteria.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      <span className="text-xs font-bold text-foreground">FSSAI Registered Processing License</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      <span className="text-xs font-bold text-foreground">ISO 9001:2015 Quality Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      <span className="text-xs font-bold text-foreground">ISO 22000 Food Safety System</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="py-20 bg-secondary text-secondary-foreground relative border-t border-primary/20 overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">Distributor &amp; B2B Partnerships</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-serif text-white max-w-2xl mx-auto leading-tight">
              Establish a Reliable Agro-Refining Supply Line
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-white/80 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Contact our sales desk to explore bulk distribution contracts for Jeevan Rekha consumer pack ranges or industrial derivative specifications.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4} className="pt-4">
            <Link 
              href="/contact" 
              className="bg-accent hover:bg-accent-deep text-foreground hover:text-foreground px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:-translate-y-0.5 active-press focus:outline-none"
            >
              Contact Sales Desk <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
