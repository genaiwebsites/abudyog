"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Heart, ShieldCheck, Leaf, Flame, Sparkles, Activity, PlusCircle } from 'lucide-react';
import ScrollReveal from '../../../components/ScrollReveal';

export default function ABHealth() {
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
              <Sparkles size={12} /> B2C Wellness Division
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground font-bold">
              AB Health Supplements
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
              Concentrated phytosterols and Gamma Oryzanol lipids extracted from fresh rice bran to support cardiovascular, metabolic, and cellular health.
            </p>
          </ScrollReveal>
        </div>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
          {/* Left: Product Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[430px] rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-primary/10 shadow-xl p-8 flex flex-col items-center justify-between hover:border-accent/40 hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-6 left-6 bg-primary text-white text-[9px] font-mono font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
                  Phytochemical Lab
                </div>
                <div className="relative w-44 h-44 md:w-52 md:h-52 my-auto overflow-hidden">
                  <Image 
                    src="/ab_health_product.png" 
                    alt="AB Health Oryzanol Supplements bottle visual" 
                    fill
                    priority
                    sizes="200px"
                    className="object-contain rounded-2xl"
                  />
                </div>
                <div className="text-center space-y-1 z-10 pt-4 border-t border-border/60 w-full">
                  <h3 className="font-serif text-2xl font-bold text-primary">AB HEALTH</h3>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground/50">Gamma Oryzanol Phytosterols</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Product details */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">Nutraceutical Division</span>
              <h3 className="text-2xl md:text-3.5xl font-serif text-foreground font-bold">Natural Bio-Active Concentrates</h3>
              <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
                Gamma Oryzanol is a mixture of ferulic acid esters of sterols and triterpene alcohols extracted directly from crude rice bran oil. AB Health isolates this compound in our dedicated Kolkata processing facility, preserving its high biological potency for concentrated capsules and supplement grades.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface/50 border border-border/60 space-y-1">
                <div className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider">Metabolic Protection</div>
                <h4 className="font-serif font-bold text-foreground text-sm flex items-center gap-1">
                  <Heart size={14} className="fill-accent/15 text-accent animate-pulse" /> Cholesterol Management
                </h4>
                <p className="text-[11px] text-foreground/60 leading-relaxed font-light">Assists in reducing LDL cholesterol and raising HDL ratios naturally.</p>
              </div>

              <div className="p-4 rounded-xl bg-surface/50 border border-border/60 space-y-1">
                <div className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider font-bold">Active Defense</div>
                <h4 className="font-serif font-bold text-foreground text-sm flex items-center gap-1">
                  <Activity size={14} className="text-accent" /> Powerful Antioxidant
                </h4>
                <p className="text-[11px] text-foreground/60 leading-relaxed font-light">Scavenges cellular free radicals, reducing physical oxidative stress.</p>
              </div>

              <div className="p-4 rounded-xl bg-surface/50 border border-border/60 space-y-1">
                <div className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider">Hormonal Balance</div>
                <h4 className="font-serif font-bold text-foreground text-sm flex items-center gap-1">
                  <PlusCircle size={14} className="text-accent" /> Endocrine Support
                </h4>
                <p className="text-[11px] text-foreground/60 leading-relaxed font-light">Supports natural endocrine activity, assisting muscle recovery.</p>
              </div>

              <div className="p-4 rounded-xl bg-surface/50 border border-border/60 space-y-1">
                <div className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider">Purity Certified</div>
                <h4 className="font-serif font-bold text-foreground text-sm flex items-center gap-1">
                  <ShieldCheck size={14} className="text-accent" /> 100% Non-GMO Base
                </h4>
                <p className="text-[11px] text-foreground/60 leading-relaxed font-light">Derived exclusively from high-quality native Indian rice crops.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <section className="py-12 border-t border-border space-y-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-serif text-foreground font-bold">Supplement Specifications</h3>
              <p className="text-foreground/75 font-light text-sm leading-relaxed">
                Refined under strict cleanroom conditions conforming to WHO-GMP standards.
              </p>
            </div>
          </ScrollReveal>

          <div className="premium-card rounded-[2.5rem] p-6 md:p-8 overflow-hidden bg-background/50 border border-border">
            <div className="space-y-4">
              {[
                { key: "Active Ingredient", val: "Gamma Oryzanol (98.5% Min)" },
                { key: "Physical Form", val: "Fine crystalline powder / Veg capsules" },
                { key: "Source", val: "Oryza Sativa (Rice Bran Extract)" },
                { key: "Heavy Metals", val: "Complies with pharmacopoeia thresholds (Less than 10 PPM)" },
                { key: "Moisture Content", val: "0.5% Max" }
              ].map((spec, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-border/60 last:border-0 last:pb-0">
                  <span className="text-[10px] sm:text-xs font-bold text-foreground/50 uppercase tracking-widest w-full sm:w-1/3 mb-1 sm:mb-0">{spec.key}</span>
                  <span className="text-sm md:text-base font-semibold text-foreground w-full sm:w-2/3 sm:text-right">{spec.val}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
