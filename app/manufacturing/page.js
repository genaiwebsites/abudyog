"use client";
import React from 'react';
import Image from 'next/image';
import { Factory, Cog, Layers, Zap, Sparkles } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

export default function Manufacturing() {
  const steps = [
    {
      title: "Fresh Bran Conditioning",
      desc: "Raw bran is collected within hours of rice milling and subjected to high-temperature conditioning to stop enzyme decay and preserve lipids."
    },
    {
      title: "Solvent Pelletization",
      desc: "Bran is compressed into stable pellets to guarantee optimal closed-loop hexane solvent permeability inside our 300 TPD extraction plant."
    },
    {
      title: "Continuous Extraction",
      desc: "Closed-system hexane washes separate crude golden lipids from de-oiled rice bran (DORB) safely, reclaiming 99% of solvent."
    },
    {
      title: "High-Vacuum Steam Refinery",
      desc: "Crude oil is physically distilled under 150 TPD capacities, using high heat and low vacuum to strip fatty acids without caustic sodas."
    }
  ];

  return (
    <div className="w-full pt-12 pb-24 bg-dot-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
              <Factory size={12} /> Industrial Infrastructure
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground">
              Science Meets Scale
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
              Inside AB Udyog&apos;s integrated Kolkata facility: processing raw grains into high-value B2C and B2B products.
            </p>
          </ScrollReveal>
        </div>

        {/* Plant Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-foreground font-bold">The Kolkata Facility</h3>
                <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
                  Our fully automated refinery houses multi-stage industrial machinery. We source raw ingredients directly from elite mills across East India, feeding a continuous supply line.
                </p>
                <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
                  By controlling the entire process from extraction to packaging, we verify batch consistency and eradicate contamination risks completely.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <ScrollReveal direction="up" delay={0.2}>
                <div className="premium-card p-6 rounded-2xl">
                  <span className="block text-3xl font-serif font-bold text-accent leading-none">300+</span>
                  <span className="text-[10px] font-mono font-bold text-foreground/50 uppercase tracking-wider block mt-2">Tonnes / Day Extraction</span>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="premium-card p-6 rounded-2xl">
                  <span className="block text-3xl font-serif font-bold text-accent leading-none">150+</span>
                  <span className="text-[10px] font-mono font-bold text-foreground/50 uppercase tracking-wider block mt-2">Tonnes / Day refinery</span>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal direction="left" delay={0.3}>
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl border border-accent/25 p-1.5 bg-background/50 backdrop-blur-sm group">
              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden">
                <Image 
                  src="/refinery_plant.png" 
                  alt="Continuous extraction plant showing automated industrial refining" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms]"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Process Flow */}
        <section className="pt-12 border-t border-border space-y-12 relative">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-2xl font-serif text-foreground font-bold">Continuous Extraction & Distillation Workflow</h3>
              <p className="text-foreground/75 font-light text-sm leading-relaxed max-w-xl">
                A technical look at the four major steps in our refining system.
              </p>
            </div>
          </ScrollReveal>

          {/* Connected Piping Timeline (Wow Factor) */}
          <div className="relative">
            {/* Horizontal Line Connecting Steps in Desktop View */}
            <div className="absolute top-[2.5rem] left-[12%] right-[12%] h-[1px] bg-accent/20 hidden lg:block -z-10 border-t border-dashed border-accent/30" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <ScrollReveal key={idx} direction="up" delay={0.1 * idx} className="h-full">
                  <div className="premium-card p-6 rounded-[2rem] flex flex-col justify-between h-full text-center lg:text-left group hover:border-accent/40">
                    <div className="space-y-4">
                      {/* Step Indicator Pin */}
                      <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center text-accent text-xs font-mono font-bold mx-auto lg:mx-0 relative z-10 bg-background shadow-md transition-transform group-hover:scale-110 duration-300">
                        0{idx + 1}
                      </div>
                      <h4 className="font-serif text-lg font-bold text-foreground leading-snug group-hover:text-accent transition-colors duration-300">{step.title}</h4>
                      <p className="text-foreground/75 font-light text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Steam Refining Details */}
        <ScrollReveal direction="up" delay={0.2} className="pt-8">
          <div className="bg-primary text-white rounded-[2.5rem] p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-[9px] font-mono font-bold tracking-widest text-accent uppercase">
                  <Layers size={10} /> Refining Science
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-accent font-bold">Steam Distillation vs Caustic Washing</h3>
                <p className="font-light text-white/90 text-sm leading-relaxed max-w-3xl">
                  Traditional refineries neutralize raw fatty acids by introducing caustic soda (sodium hydroxide), producing soap stock. This chemical reaction breaks down the valuable Oryzanol antioxidants.
                  <br /><br />
                  <strong>The AB Udyog Advantage:</strong> Our continuous physical refinery injects superheated steam under deep vacuum. This selectively vaporizes free fatty acids based on boiling point variances, preserving all native 10,000+ PPM Oryzanol lipids and guaranteeing chemical-free purity for Jeevan Rekha.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-24 h-24 rounded-full bg-accent/15 flex items-center justify-center text-accent animate-spin-slow">
                  <Cog size={45} className="animate-spin" style={{ animationDuration: '8s' }} />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
