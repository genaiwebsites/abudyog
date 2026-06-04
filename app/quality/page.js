"use client";
import React from 'react';
import Image from 'next/image';
import { Award, TestTube, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

export default function Quality() {
  const labParameters = [
    { title: "UV-Spectrophotometry", desc: "Verifies the exact parts-per-million (PPM) concentration of active Oryzanol in the refined oil." },
    { title: "Gas Chromatography", desc: "Analyzes the fatty acid distribution (SFA, MUFA, PUFA) to verify zero trans-fat levels." },
    { title: "Lipase Enzyme Testing", desc: "Checks FFA percentages in raw bran immediately upon arrival to avoid acid spikes." },
    { title: "Moisture & Impurity Scans", desc: "Ensures moisture indices are below 0.1% to maximize shelf life and stability." }
  ];

  const certifications = [
    { title: "FSSAI Certified", desc: "Conforms to the safety regulations of the Food Safety and Standards Authority of India." },
    { title: "ISO 9001:2015", desc: "Systematic international protocol controls governing manufacturing consistency." },
    { title: "HACCP Compliant", desc: "Hazard Analysis Critical Control Point certified for food packaging hygiene." },
    { title: "100% Veg / Halal", desc: "Processed inside a purely vegetable-derived facility with zero cross-contamination." }
  ];

  return (
    <div className="w-full pt-12 pb-24 bg-dot-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
              <ShieldCheck size={12} /> Quality Control
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground">
              Analytical Precision
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
              Every batch of Jeevan Rekha Oil is analyzed across fifty parameters inside our Kolkata laboratory.
            </p>
          </ScrollReveal>
        </div>

        {/* Lab Overview Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: Visual Image (4 cols) */}
          <div className="md:col-span-4 relative min-h-[320px] rounded-[2.5rem] overflow-hidden border border-accent/20 p-1.5 bg-background/50 backdrop-blur-sm shadow-md group">
            <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden">
              <Image 
                src="/quality_lab.png" 
                alt="Quality Control Laboratory testing edible oils" 
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms]"
              />
            </div>
          </div>

          {/* Column 2: Lab Card (4 cols) */}
          <ScrollReveal direction="up" delay={0.2} className="md:col-span-4 h-full">
            <div className="premium-card p-6 md:p-8 rounded-[2rem] space-y-6 flex flex-col justify-between h-full group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent transition-transform group-hover:scale-110 duration-300">
                  <TestTube size={20} />
                </div>
                <h3 className="text-xl font-serif text-foreground font-bold">In-House Laboratory</h3>
                <p className="text-foreground/75 font-light text-xs leading-relaxed">
                  Our advanced laboratory operates 24/7. We scan raw agricultural inputs immediately upon receipt and test the final edible products prior to packaging.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-border/60">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={14} className="text-accent shrink-0" />
                  <span className="text-[11px] font-medium text-foreground">50+ Parameter Checks per batch</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={14} className="text-accent shrink-0" />
                  <span className="text-[11px] font-medium text-foreground">UV-Spectrophotometry Checks</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={14} className="text-accent shrink-0" />
                  <span className="text-[11px] font-medium text-foreground">Gas Chromatography Profiling</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Column 3: Parameters (4 cols) */}
          <div className="md:col-span-4 space-y-6 flex flex-col justify-between h-full premium-card p-6 md:p-8 rounded-[2rem]">
            <ScrollReveal direction="up" delay={0.1}>
              <h3 className="text-lg font-serif text-foreground font-bold border-b border-border pb-3">
                Core Lab Parameters
              </h3>
            </ScrollReveal>

            <div className="grid gap-4 flex-grow pt-2">
              {labParameters.map((param, idx) => (
                <ScrollReveal key={idx} direction="up" delay={0.2 + idx * 0.1}>
                  <div className="flex gap-3 group/item">
                    <div className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center shrink-0 font-mono text-[9px] font-bold text-accent transition-transform group-hover/item:scale-110">
                      0{idx + 1}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-xs text-foreground leading-none group-hover/item:text-accent transition-colors duration-300">{param.title}</h4>
                      <p className="text-foreground/75 font-light text-[10px] leading-relaxed">{param.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications and Compliance */}
        <section className="pt-12 border-t border-border space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <ScrollReveal direction="up" delay={0.1}>
              <h3 className="text-2xl md:text-3xl font-serif text-foreground font-bold">Certifications & Compliance</h3>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-foreground/75 font-light text-sm leading-relaxed">
                AB Udyog operates under national food health and safety guidelines.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.1 * idx} className="h-full">
                <div className="premium-card p-6 rounded-[2rem] flex flex-col justify-between h-full text-center group hover:border-accent/40">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Award size={20} />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-foreground leading-snug">{cert.title}</h4>
                    <p className="text-foreground/75 font-light text-xs leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
