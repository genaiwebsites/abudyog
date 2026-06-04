"use client";
import React from 'react';
import Image from 'next/image';
import { Globe, Award, ShieldCheck, Quote, Factory, ShieldAlert, Users, Heart } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

export default function About() {
  return (
    <div className="w-full bg-dot-grid min-h-screen">
      {/* Editorial Header Hero */}
      <section className="relative pt-32 pb-24 px-6 lg:px-16 bg-secondary text-secondary-foreground overflow-hidden border-b border-primary/20">
        {/* Background Image Blend Overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <Image 
            src="/hero_rice_paddy.png" 
            alt="Solvent extraction agriculture harvest paddy backdrop"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Radial gradients for dramatic lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10" />

        <div className="relative z-20 max-w-4xl mx-auto text-center space-y-6">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-accent/30 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span> Our Corporate Story
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-6.5xl font-serif leading-[1.1] text-white font-medium">
              Rooted in Agriculture. <br />
              <span className="text-accent italic font-bold">Refined for Purity &amp; Progress.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-sm md:text-base font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
              Discover how AB Udyog Pvt. Ltd. evolved over four decades from Eastern India&apos;s premium solvent extraction facility into a pioneering agro-based food manufacturer.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Kolkata Facility Grid */}
      <section className="py-20 md:py-28 px-6 lg:px-16 max-w-7xl mx-auto bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="relative lg:col-span-6">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden aspect-[4/3] border border-primary/10 p-2 bg-surface/50 backdrop-blur-sm group">
                <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden">
                  <Image 
                    src="/refinery_plant.png" 
                    alt="Kolkata physical refinement continuous processing refinery plant" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/65 to-transparent pointer-events-none" />
                </div>
              </div>
            </ScrollReveal>
            <div className="absolute -bottom-6 -right-6 bg-accent text-foreground p-6 rounded-full w-28 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center shadow-lg border-4 border-background animate-pulse select-none">
              <span className="text-2xl md:text-3.5xl font-serif font-bold leading-none text-secondary">40+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold mt-1 text-center leading-tight">
                Years of<br />Agro Scale
              </span>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-6">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">Scientific Refining Heritage</span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
                An Engineering Standard in Food Manufacturing
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="space-y-4">
              <p className="text-foreground/80 font-light text-sm md:text-base leading-relaxed">
                AB Udyog Pvt. Ltd. operates a high-capacity continuous solvent extraction and physical refining complex in Kolkata, West Bengal. Established with a mission of structural purity and agro-based progress, we have spent four decades processing agricultural crops into food items and value-added derivatives.
              </p>
              <p className="text-foreground/80 font-light text-sm md:text-base leading-relaxed">
                By processing freshly harvested rice bran within hours of milling, our plant prevents natural oxidation. Our physical refinery bypasses caustic soda and acid treatments completely, employing high-temperature steam distillation to wash raw oil while locking in natural micronutrients.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/80">
                <div className="space-y-1">
                  <p className="font-bold text-2xl md:text-3xl text-primary font-serif">10,000+</p>
                  <p className="text-[9px] font-bold tracking-widest uppercase text-foreground/50">PPM Oryzanol Retained</p>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-2xl md:text-3xl text-primary font-serif">Kolkata</p>
                  <p className="text-[9px] font-bold tracking-widest uppercase text-foreground/50">Processing Complex</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-24 bg-surface/30 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold">Foundational Philosophies</span>
              <h2 className="text-3xl md:text-4.5xl font-serif text-foreground">
                Our Corporate Principles
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-foreground/70 font-light text-sm md:text-base leading-relaxed">
                Guiding our operations as we expand our agro-industrial processing footprint nationwide.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <div className="premium-card p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between h-full group bg-background/50 border border-border">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110 duration-300">
                    <Globe size={24} />
                  </div>
                  <h4 className="text-2xl font-serif text-foreground font-bold">Our Corporate Vision</h4>
                  <p className="font-light text-sm md:text-base leading-relaxed text-foreground/70">
                    To be India&apos;s most reliable partner for premium agro-products and industrial derivatives. We aim to establish Jeevan Rekha as a household brand for purity and wellness while leading the industry in physical steam refining scaling and zero-waste circular operations.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <div className="premium-card p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between h-full group bg-background/50 border border-border">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent shrink-0 transition-transform group-hover:scale-110 duration-300">
                    <Award size={24} />
                  </div>
                  <h4 className="text-2xl font-serif text-foreground font-bold">Our Operations Mission</h4>
                  <p className="font-light text-sm md:text-base leading-relaxed text-foreground/70">
                    To maintain strict control over chemical-free refining. We pledge to preserve natural health nutrients, provide high-quality B2B protein animal feeds (AB DORB), and sustain clean extraction lines with strict adherence to national food standards.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4 Pillars detail */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">Corporate Pillars</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Operational Standards</h2>
          <div className="w-20 h-[3px] bg-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              title: "Purity & Steam Distillation",
              desc: "By physical steam refining, we scrub free fatty acids at high temperatures, completely bypassing chemical caustic washes to keep oils clean and natural."
            },
            {
              title: "Traceable Supply Sourcing",
              desc: "From sourcing fresh rice bran at local mills to continuous processing and bottling, our batch control ensures absolute traceability."
            },
            {
              title: "Product Quality Consistency",
              desc: "Our high-tech continuous processing machinery runs non-stop, producing consistent oil clarity, pungency, and protein-packed feed qualities."
            },
            {
              title: "Sustainability & Circularity",
              desc: "We process every byproduct of the bran—converting waxes for cosmetics, gums for emulsifiers, spent clay for reuse, and acid oils for biofuel."
            }
          ].map((pillar, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
              <div className="space-y-3 p-6 rounded-2xl bg-surface/30 border border-border/60 hover:bg-surface/50 transition-colors">
                <span className="text-accent font-mono font-bold text-sm">0{idx + 1}.</span>
                <h4 className="text-base font-serif font-bold text-foreground">{pillar.title}</h4>
                <p className="text-xs text-foreground/75 font-light leading-relaxed">{pillar.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Corporate Leadership Citation */}
      <section className="py-20 md:py-28 px-6 lg:px-16 max-w-5xl mx-auto">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-primary text-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-16 -right-16 text-accent opacity-10 pointer-events-none">
              <Quote size={240} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#051a14] opacity-70" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-accent mb-4 p-1 relative overflow-hidden bg-white/5">
                  <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center">
                    <span className="font-serif text-2xl text-accent font-bold">AB</span>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-accent text-secondary rounded-full p-1 border border-primary">
                    <ShieldCheck size={14} />
                  </div>
                </div>
                <h5 className="font-serif text-xl font-bold text-accent">The Leadership</h5>
                <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold mt-1">Managing Director</p>
                <p className="text-[9px] text-white/50">AB Udyog Pvt. Ltd.</p>
              </div>
              
              <div className="md:col-span-8 space-y-4 text-white/90 font-light text-sm md:text-base italic leading-relaxed">
                <p>
                  &quot;The agro-food market in India demands massive scale, but that scale must never come at the cost of purity or consumer trust. At AB Udyog, we hold ourselves to that standard every day.&quot;
                </p>
                <p>
                  &quot;Our Kolkata continuous solvent and physical refinery plant represents four decades of process integrity. We developed the Jeevan Rekha brand to deliver that standard of purity directly to kitchens across Eastern India.&quot;
                </p>
                <p>
                  &quot;Our transition into B2C FMCG is backed by scientific physical refining. We are proud to serve families with cooking oils and feeds that are natural, chemical-free, and of verified quality.&quot;
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
