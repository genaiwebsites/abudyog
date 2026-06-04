"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Heart, ShieldCheck, Leaf, Flame, Sparkles, Star } from 'lucide-react';
import ScrollReveal from '../../../components/ScrollReveal';

export default function JeevanRekha() {
  return (
    <div className="w-full pt-12 pb-24 bg-dot-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-12">
        {/* Back Link */}
        <ScrollReveal direction="up" delay={0.1}>
          <Link 
            href="/products" 
            className="text-accent hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold tracking-widest uppercase group focus:outline-none rounded p-1 max-w-max active-press-sm"
          >
            <ArrowLeft size={14} className="transform group-hover:-translate-x-0.5 transition-transform" /> Back to Master Portfolios
          </Link>
        </ScrollReveal>

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
              <Sparkles size={12} /> Flagship Consumer Brands
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground font-bold">
              Jeevan Rekha Flagship Range
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
              Formulated for modern nutrition and traditional purity. Our flagship cooking oils are processed using strict chemical-free refining pipelines.
            </p>
          </ScrollReveal>
        </div>

        {/* 1. Rice Bran Oil Product */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 border-b border-border/60" id="rice-bran-oil">
          {/* Left: Product Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[430px] rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-primary/10 shadow-xl p-8 flex flex-col items-center justify-between hover:border-accent/40 hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-6 left-6 bg-primary text-white text-[9px] font-mono font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
                  100% Physical Refining
                </div>
                <div className="relative w-44 h-44 md:w-52 md:h-52 my-auto overflow-hidden">
                  <Image 
                    src="/premium_cooking_oil.png" 
                    alt="Jeevan Rekha Rice Bran Oil packaging design" 
                    fill
                    priority
                    sizes="200px"
                    className="object-contain"
                  />
                </div>
                <div className="text-center space-y-1 z-10 pt-4 border-t border-border/60 w-full">
                  <h3 className="font-serif text-2xl font-bold text-primary">JEEVAN REKHA RBO</h3>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground/50">Physically Refined Rice Bran Oil</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Product details */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">Flagship Product</span>
              <h3 className="text-2xl md:text-3.5xl font-serif text-foreground font-bold">Jeevan Rekha Rice Bran Oil</h3>
              <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
                Refined via high-vacuum steam physical distillation without caustic soda or acids. Bypassing toxic chemicals retains the native micronutrients, primarily Gamma Oryzanol, while ensuring chemical residue-free purity.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface/50 border border-border/60 space-y-1">
                <div className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider">Active Heart Health</div>
                <h4 className="font-serif font-bold text-foreground text-sm flex items-center gap-1">
                  <Heart size={14} className="fill-accent/15 text-accent animate-pulse" /> 10,000+ PPM Oryzanol
                </h4>
                <p className="text-[11px] text-foreground/60 leading-relaxed font-light">Natural lipid complex proven to regulate blood cholesterol levels.</p>
              </div>

              <div className="p-4 rounded-xl bg-surface/50 border border-border/60 space-y-1">
                <div className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider">Thermal Stability</div>
                <h4 className="font-serif font-bold text-foreground text-sm flex items-center gap-1">
                  <Flame size={14} className="text-accent" /> High Smoke Point (232°C)
                </h4>
                <p className="text-[11px] text-foreground/60 leading-relaxed font-light">Stays stable at high temperatures, preventing oil degradation.</p>
              </div>

              <div className="p-4 rounded-xl bg-surface/50 border border-border/60 space-y-1">
                <div className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider">Lighter Cooking</div>
                <h4 className="font-serif font-bold text-foreground text-sm flex items-center gap-1">
                  <Leaf size={14} className="text-accent" /> Low Food Absorption
                </h4>
                <p className="text-[11px] text-foreground/60 leading-relaxed font-light">High viscosity reduces overall oil absorption by up to 15%.</p>
              </div>

              <div className="p-4 rounded-xl bg-surface/50 border border-border/60 space-y-1">
                <div className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider">Vitamins Fortified</div>
                <h4 className="font-serif font-bold text-foreground text-sm flex items-center gap-1">
                  <ShieldCheck size={14} className="text-accent" /> Vitamin A &amp; D2
                </h4>
                <p className="text-[11px] text-foreground/60 leading-relaxed font-light">Enriched with key essential vitamins for optimal family health.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Mustard Oil Product */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 border-b border-border/60" id="mustard-oil">
          {/* Left: Product details */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">Traditional Specialty</span>
              <h3 className="text-2xl md:text-3.5xl font-serif text-foreground font-bold">Jeevan Rekha Kachi Ghani Mustard Oil</h3>
              <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
                Extracted using cold-press grinding methods from select mustard seed harvests. By processing at low temperatures, we lock in the authentic sharp taste, high pungency level, and natural rich color.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface/50 border border-border/60 space-y-1">
                <div className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider">Taste &amp; Aroma</div>
                <h4 className="font-serif font-bold text-foreground text-sm flex items-center gap-1">
                  <Star size={14} className="fill-accent/15 text-accent" /> Strong Pungency
                </h4>
                <p className="text-[11px] text-foreground/60 leading-relaxed font-light">Delivers signature sharp aroma and rich flavor to traditional Indian curries.</p>
              </div>

              <div className="p-4 rounded-xl bg-surface/50 border border-border/60 space-y-1">
                <div className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider">Nutritional Value</div>
                <h4 className="font-serif font-bold text-foreground text-sm flex items-center gap-1">
                  <Leaf size={14} className="text-accent" /> Rich in MUFA &amp; Omega-3
                </h4>
                <p className="text-[11px] text-foreground/60 leading-relaxed font-light">Naturally balanced monounsaturated fatty acids that support digestion.</p>
              </div>

              <div className="p-4 rounded-xl bg-surface/50 border border-border/60 space-y-1">
                <div className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider">Storage Stability</div>
                <h4 className="font-serif font-bold text-foreground text-sm flex items-center gap-1">
                  <ShieldCheck size={14} className="text-accent" /> Natural Preservatives
                </h4>
                <p className="text-[11px] text-foreground/60 leading-relaxed font-light">Contains native compounds that preserve mustard oil clarity without synthetics.</p>
              </div>

              <div className="p-4 rounded-xl bg-surface/50 border border-border/60 space-y-1">
                <div className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider">Safety Standards</div>
                <h4 className="font-serif font-bold text-foreground text-sm flex items-center gap-1">
                  <ShieldCheck size={14} className="text-accent" /> FSSAI Approved Purity
                </h4>
                <p className="text-[11px] text-foreground/60 leading-relaxed font-light">Strict lab screening ensures zero adulteration or argemone contaminants.</p>
              </div>
            </div>
          </div>

          {/* Right: Product Visual */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[430px] rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-primary/10 shadow-xl p-8 flex flex-col items-center justify-between hover:border-accent/40 hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-6 left-6 bg-accent text-foreground text-[9px] font-mono font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
                  Traditional Kachi Ghani
                </div>
                <div className="relative w-44 h-44 md:w-52 md:h-52 my-auto overflow-hidden">
                  <Image 
                    src="/mustard_oil.png" 
                    alt="Jeevan Rekha Mustard Oil packaging design" 
                    fill
                    sizes="200px"
                    className="object-contain"
                  />
                </div>
                <div className="text-center space-y-1 z-10 pt-4 border-t border-border/60 w-full">
                  <h3 className="font-serif text-2xl font-bold text-primary">JEEVAN REKHA MUSTARD</h3>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground/50">Cold Pressed Mustard Oil</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Packaging Availability */}
        <section className="py-12 space-y-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-serif text-foreground font-bold">Available Configurations</h3>
              <p className="text-foreground/75 font-light text-sm leading-relaxed">
                Bottled and packeted in automated sterile conditions to preserve food hygiene.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "1 Litre Pouch & Bottle", desc: "Everyday easy-pour containers." },
              { title: "2 Litre & 5 Litre Jar", desc: "Premium handle containers for family kitchens." },
              { title: "15 Litre Tin / Jar / 15Kg", desc: "High-volume packs for restaurants & wholesale." }
            ].map((pack, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.1 * idx} className="h-full">
                <div className="premium-card p-6 rounded-2xl flex flex-col justify-between h-full group bg-background/50 border border-border">
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-accent uppercase tracking-wider group-hover:text-primary transition-colors">Configuration</div>
                    <h4 className="font-serif text-lg font-bold text-foreground">{pack.title}</h4>
                    <p className="text-foreground/75 font-light text-xs leading-relaxed">{pack.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.2} className="pt-8">
          <div className="bg-primary text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />
            <div className="space-y-2 text-center md:text-left z-10 max-w-2xl">
              <h4 className="font-serif text-2xl md:text-3xl text-accent font-bold font-medium">Become a Regional Distributor</h4>
              <p className="font-light text-white/90 text-sm leading-relaxed">
                Contact our merchant channel development team to secure local distributorship contracts for Jeevan Rekha retail ranges.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="bg-accent hover:bg-white text-foreground hover:text-primary px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shrink-0 shadow-md flex items-center gap-1.5 focus:outline-none"
            >
              Partner with Us <ArrowUpRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
