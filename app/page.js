"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Heart, Star, Activity, Sparkles, Factory, Award } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';

export default function Home() {
  const stats = [
    { target: 100, suffix: '%', label: "In-House Raw Processing", icon: <ShieldCheck size={18} /> },
    { target: 50, suffix: '+', label: "Quality Checks Per Batch", icon: <Activity size={18} /> },
    { target: 25, suffix: '+', label: "Years of Refining Legacy", icon: <Award size={18} /> },
    { target: 450, suffix: ' TPD', label: "Total Combined Capacity", icon: <Factory size={18} /> }
  ];

  return (
    <div className="w-full relative overflow-hidden bg-dot-grid">
      {/* Background Decorative Curves & Blurs (Wow Factor) */}
      <div className="absolute top-1/6 left-1/10 w-96 h-96 rounded-full bg-accent/8 blur-[120px] -z-10 liquid-blur" />
      <div className="absolute bottom-1/3 right-1/10 w-[450px] h-[450px] rounded-full bg-primary/5 blur-[150px] -z-10 liquid-blur" />
      
      <svg className="absolute right-0 top-0 w-1/2 h-full opacity-25 pointer-events-none -z-10 text-accent/20 hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M100,0 C65,25 55,65 100,100" fill="none" stroke="currentColor" strokeWidth="0.25" />
        <path d="M100,5 C70,30 60,70 100,95" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 1" />
        <path d="M100,15 C75,35 65,75 100,85" fill="none" stroke="currentColor" strokeWidth="0.08" strokeDasharray="2 2" />
      </svg>

      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-accent/20 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-accent uppercase bg-accent/5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                India&apos;s Golden Standard of Purity
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight text-foreground">
                The Science of Wellness, <br />
                <span className="text-accent italic font-bold">Refinement at Scale.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-sm md:text-base text-foreground/80 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                From our world-class solvent extraction and physical refining facility in Kolkata, AB Udyog delivers the pure, 10,000+ PPM Oryzanol strength of Jeevan Rekha Rice Bran Oil directly to millions of kitchens.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link 
                  href="/products/jeevan-rekha" 
                  className="bg-primary hover:bg-accent text-white hover:text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 active-press focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Explore Jeevan Rekha <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link 
                  href="/about" 
                  className="border border-border hover:border-accent text-foreground hover:text-accent px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5 active-press bg-background/50 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Our 25-Year Legacy
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Image / Product Visualizer */}
          <div className="lg:col-span-5 flex justify-center relative">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="relative w-[300px] h-[400px] md:w-[360px] md:h-[480px] rounded-[2rem] overflow-hidden shadow-2xl border border-accent/25 bg-background/40 backdrop-blur-sm p-1.5 group">
                <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
                  <Image 
                    src="/premium_cooking_oil.png" 
                    alt="Jeevan Rekha Premium Edible Oil bottle packaging visual" 
                    fill
                    priority
                    sizes="(max-width: 768px) 300px, 360px"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Floating overlay block - Wow Factor */}
                <div className="absolute bottom-6 left-6 right-6 p-4 premium-card rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0">
                    <Heart size={20} className="fill-accent/20 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[9px] text-accent font-mono font-bold uppercase tracking-widest leading-none mb-1">Active Heart Defense</p>
                    <p className="text-xs font-serif font-bold text-foreground leading-none">10,000+ PPM Oryzanol</p>
                  </div>
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
                <span className="mx-8 text-accent">✦</span> 100% Physically Refined
                <span className="mx-8 text-accent">✦</span> 10,000+ PPM Oryzanol
                <span className="mx-8 text-accent">✦</span> Zero Trans Fat
                <span className="mx-8 text-accent">✦</span> Cholesterol Free
                <span className="mx-8 text-accent">✦</span> High Smoke Point (232°C)
                <span className="mx-8 text-accent">✦</span> Chemical Free Distillation
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Brand Values (Why Us) */}
      <section className="py-20 md:py-28 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Visual Anchor */}
            <div className="relative order-2 lg:order-1">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl border border-accent/15 p-2 bg-background/50 backdrop-blur-sm group">
                  <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden">
                    <Image 
                      src="/healthy_cooking_bg.png" 
                      alt="Healthy culinary cooking representing physical refined oil benefits"
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-[1200ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 to-transparent pointer-events-none" />
                  </div>
                </div>
              </ScrollReveal>
              
              <div className="absolute -bottom-6 -right-6 premium-card p-5 rounded-2xl shadow-lg border border-accent/20 flex items-center gap-4 max-w-[260px] z-10">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Activity size={24} className="animate-pulse" />
                </div>
                <div>
                  <p className="text-[9px] text-foreground/50 font-bold uppercase tracking-widest leading-tight mb-0.5">Safety Certified</p>
                  <p className="text-sm font-serif font-bold text-foreground">FSSAI & ISO Compliant</p>
                </div>
              </div>
            </div>

            {/* Content & Specifics */}
            <div className="space-y-12 order-1 lg:order-2">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
                    Elevating Edible Oils into a Standard of Trust
                  </h2>
                  <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
                    Our solvent extraction and continuous refinery facilities avoid harsh chemical washes, utilizing high-temperature steam distillation to retain native nutritional benefits.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-8">
                {[
                  {
                    icon: <ShieldCheck size={22} />,
                    title: "Physical Distillation",
                    desc: "No caustic soda or phosphoric acids are introduced. Impurities are scrubbed through low-pressure steam extraction."
                  },
                  {
                    icon: <Heart size={22} />,
                    title: "Heart Health Safeguards",
                    desc: "Specially monitored temperatures preserve active oryzanol lipids to actively assist in regulating bad cholesterol."
                  },
                  {
                    icon: <Star size={22} />,
                    title: "Kitchen Efficiency",
                    desc: "Boasting a high smoke threshold of 232°C, our oils reduce food absorption by up to 15%, keeping cooking light."
                  }
                ].map((item, idx) => (
                  <ScrollReveal key={idx} direction="up" delay={0.2 + idx * 0.1}>
                    <div className="flex gap-5 group">
                      <div className="w-12 h-12 rounded-xl border border-accent/12 bg-white/60 backdrop-blur-sm flex items-center justify-center shrink-0 text-accent group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm active-press-sm">
                        {React.cloneElement(item.icon, { className: "group-hover:scale-110 group-hover:rotate-3 transition-transform" })}
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="font-bold text-base text-foreground group-hover:text-accent transition-colors duration-300">{item.title}</h4>
                        <p className="text-foreground/75 font-light text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Division Selection Router */}
      <section className="py-20 md:py-28 bg-background/60 backdrop-blur-sm border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl space-y-4">
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-serif text-foreground">
                  Our Integrated Portfolios
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
                  From high-volume edible consumer oils to feed grades and chemical industrial raw materials, we process the complete value chain.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="up" delay={0.3}>
              <Link 
                href="/products" 
                className="text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1 group active-press"
              >
                View Full Specifications <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Consumer B2C Link */}
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <Link 
                href="/products/jeevan-rekha" 
                className="group relative rounded-[2.5rem] overflow-hidden flex flex-col justify-end h-[450px] lg:h-[500px] w-full border border-accent/15 hover:border-accent/40 shadow-md hover:shadow-2xl transition-all duration-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent"
              >
                <Image 
                  src="/mustard_oil.png" 
                  alt="Jeevan Rekha premium cooking oil flagship range representation" 
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover transform group-hover:scale-[1.03] transition-transform duration-[1200ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent transition-opacity duration-500" />
                
                <div className="absolute top-6 left-6 bg-accent text-white text-[9px] font-mono font-bold uppercase tracking-widest px-4 py-2 rounded-full z-10 shadow-md flex items-center gap-1.5">
                  <Sparkles size={10} className="animate-pulse" /> Consumer Brand (B2C)
                </div>
                
                <div className="relative z-10 p-8 w-full space-y-3">
                  <h4 className="text-3xl font-serif text-accent font-bold">Jeevan Rekha Range</h4>
                  <p className="font-light text-white/90 text-sm leading-relaxed max-w-sm">
                    Premium physically refined Rice Bran Oil and pure Mustard Oil bottled to secure everyday family wellness.
                  </p>
                  <div className="flex items-center gap-1.5 font-bold text-xs tracking-widest uppercase text-white group-hover:text-accent transition-colors pt-2">
                    Explore Consumer Products <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Industrial B2B Link */}
            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <Link 
                href="/products" 
                className="group relative rounded-[2.5rem] overflow-hidden flex flex-col justify-end h-[450px] lg:h-[500px] w-full border border-accent/15 hover:border-accent/40 shadow-md hover:shadow-2xl transition-all duration-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent"
              >
                <Image 
                  src="/refinery_plant.png" 
                  alt="High-volume industrial manufacturing plant representing raw material derivatives" 
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover transform group-hover:scale-[1.03] transition-transform duration-[1200ms] grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/30 to-transparent transition-opacity duration-500" />
                
                <div className="absolute top-6 left-6 bg-background/25 backdrop-blur-md border border-white/20 text-white text-[9px] font-mono font-bold uppercase tracking-widest px-4 py-2 rounded-full z-10 flex items-center gap-1.5">
                  <Factory size={10} /> Industrial Processing (B2B)
                </div>
                
                <div className="relative z-10 p-8 w-full space-y-3">
                  <h4 className="text-3xl font-serif text-white font-bold">Industrial Derivatives</h4>
                  <p className="font-light text-white/90 text-sm leading-relaxed max-w-sm">
                    Feed-grade DORB (De-Oiled Rice Bran), refined vegetable wax, stabilizing gums, and lecithins supplied globally.
                  </p>
                  <div className="flex items-center gap-1.5 font-bold text-xs tracking-widest uppercase text-white/90 group-hover:text-white transition-colors pt-2">
                    Explore Specifications <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Metrics & Legacy (Enhanced Cards) */}
      <section className="py-20 bg-transparent border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
              <div className="premium-card p-8 rounded-[2rem] text-center space-y-4 relative overflow-hidden group">
                {/* Micro-spark background glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/12 transition-colors duration-500" />
                
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto transition-transform group-hover:scale-110 duration-300">
                  {stat.icon}
                </div>
                
                <div className="space-y-1">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-accent leading-none">
                    {stat.target}
                    <span className="text-2xl font-sans align-middle ml-0.5">{stat.suffix}</span>
                  </p>
                  <p className="text-[10px] md:text-xs text-foreground/60 uppercase font-bold tracking-widest leading-relaxed max-w-[150px] mx-auto pt-2">
                    {stat.label}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
