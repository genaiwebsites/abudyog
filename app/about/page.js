"use client";
import React from 'react';
import Image from 'next/image';
import { Globe, Award, ShieldCheck, Quote } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

export default function About() {
  return (
    <div className="w-full bg-dot-grid">
      {/* Editorial Header Hero */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 bg-primary text-white overflow-hidden rounded-b-[2.5rem] shadow-lg">
        {/* Background Image Blend Overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <Image 
            src="/healthy_cooking_bg.png" 
            alt="Solvent extraction agriculture backdrop"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-accent rounded-full text-[10px] md:text-xs font-bold tracking-widest text-accent uppercase bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span> Our Corporate Story
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] text-white">
              Rooted in Engineering. <br />
              <span className="text-accent italic font-bold">Refined for Wellness.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-sm md:text-base font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
              Discover how AB Udyog evolved from Kolkata&apos;s primary solvent extraction hub into Eastern India&apos;s driving force behind physically refined edible oils.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Kolkata Facility Grid */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative rounded-[2.5rem] shadow-xl overflow-hidden aspect-[4/3] border border-accent/25 p-1.5 bg-background/50 backdrop-blur-sm group">
                <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden">
                  <Image 
                    src="/refinery_plant.png" 
                    alt="Kolkata physical refinement continuous processing refinery plant" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1000ms]"
                  />
                </div>
              </div>
            </ScrollReveal>
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-full w-28 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center shadow-lg border-4 border-background animate-pulse">
              <span className="text-2xl md:text-3xl font-serif font-bold leading-none">25+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold mt-1 text-center leading-tight">
                Years of<br />Refining
              </span>
            </div>
          </div>

          <div className="space-y-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
                  Mastering the Chemistry of Pure Extraction
                </h2>
                <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
                  Headquartered in Kolkata, AB Udyog Pvt Ltd operates on the boundary of modern food processing. For decades, our massive solvent extraction unit has processed fresh rice bran directly within hours of milling to prevent raw fatty-acid deterioration.
                </p>
                <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
                  Instead of using typical chemical refining that strips vitamins and leaves trace residues, we built a continuous, high-vacuum steam physical refinery. This enables high-purity, zero-chemical processing at a regional scale.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex gap-8 pt-6 border-t border-border">
                <div>
                  <p className="font-bold text-2xl md:text-3xl text-primary font-serif">100%</p>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-foreground/50 mt-1">In-House Quality Control</p>
                </div>
                <div>
                  <p className="font-bold text-2xl md:text-3xl text-primary font-serif">Kolkata</p>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-foreground/50 mt-1">Regional Processing Hub</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 md:py-28 bg-background/50 backdrop-blur-sm border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                Our Core Philosophies
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
                Guiding our migration from bulk commercial commodity supplies into a household wellness standard.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <div className="premium-card p-8 md:p-12 rounded-[2rem] flex flex-col justify-between h-full group">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent transition-transform group-hover:scale-110 duration-300">
                    <Globe size={24} />
                  </div>
                  <h4 className="text-2xl font-serif text-foreground font-bold">Our Corporate Vision</h4>
                  <p className="font-light text-sm md:text-base leading-relaxed text-foreground/75">
                    To transition from Eastern India&apos;s premium B2B solvent manufacturer into a nationwide household FMCG name. We intend for Jeevan Rekha to be synonymous with verified health protection, making physically refined oils accessible to every family.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <div className="premium-card p-8 md:p-12 rounded-[2rem] flex flex-col justify-between h-full group">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent transition-transform group-hover:scale-110 duration-300">
                    <Award size={24} />
                  </div>
                  <h4 className="text-2xl font-serif text-foreground font-bold">Our Operations Mission</h4>
                  <p className="font-light text-sm md:text-base leading-relaxed text-foreground/75">
                    To run our extraction units under strict, chemical-free processing pipelines. We pledge to maintain 10,000+ PPM Oryzanol preservation, zero trans-fats, and total component traceability across all consumer and industrial distributions.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Corporate Leadership Citation */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-5xl mx-auto">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-primary text-white rounded-[2.5rem] p-8 md:p-16 shadow-xl relative overflow-hidden">
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
                  <div className="absolute bottom-0 right-0 bg-accent text-primary rounded-full p-1 border border-primary">
                    <ShieldCheck size={14} />
                  </div>
                </div>
                <h5 className="font-serif text-xl font-bold text-accent">The Leadership</h5>
                <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold mt-1">Managing Director</p>
                <p className="text-[9px] text-white/50">AB Udyog Pvt Ltd</p>
              </div>
              
              <div className="md:col-span-8 space-y-4 text-white/90 font-light text-sm md:text-base italic leading-relaxed">
                <p>
                  &quot;The edible oil market in India is highly competitive, saturated with products that compromise on health for the sake of mass production. At AB Udyog, we have always refused to make that compromise.&quot;
                </p>
                <p>
                  &quot;For years, our solvent plant in Kolkata has been a benchmark for B2B scale and absolute purity. However, true impact is made when you reach the consumer directly. That is the genesis of Jeevan Rekha.&quot;
                </p>
                <p>
                  &quot;Moving from a B2B giant to a nationwide B2C success is a monumental shift. But our foundation is rooted in research, evidence, and state-of-the-art physical refinement. We are delivering a promise of heart-protecting wellness straight to the Indian kitchen.&quot;
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
