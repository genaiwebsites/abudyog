"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Heart, ShieldCheck, Leaf, Flame, Sparkles } from 'lucide-react';
import ScrollReveal from '../../../components/ScrollReveal';

export default function JeevanRekha() {
  const packs = [
    { title: "1 Litre Pouch", desc: "Everyday compact kitchen use." },
    { title: "5 Litre Jar", desc: "Perfect for family households." },
    { title: "15 Litre Tin / Jar", desc: "Bulk culinary food service." }
  ];

  return (
    <div className="w-full pt-12 pb-24 bg-dot-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Back Link */}
        <ScrollReveal direction="up" delay={0.1}>
          <Link 
            href="/products" 
            className="text-accent hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold tracking-widest uppercase group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1 max-w-max active-press-sm"
          >
            <ArrowLeft size={14} className="transform group-hover:-translate-x-0.5 transition-transform" /> Back to Master Portfolios
          </Link>
        </ScrollReveal>

        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
              <Sparkles size={12} /> Consumer Flagship
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground font-bold">
              Jeevan Rekha Oils
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
              100% Physically Refined Rice Bran Oil and Premium Mustard Oil processed to protect your family&apos;s heart health.
            </p>
          </ScrollReveal>
        </div>

        {/* Dual Layout: Oil Packaging & Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-8">
          {/* Visual Container */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[430px] rounded-[2.5rem] bg-white/70 backdrop-blur-md border border-accent/20 shadow-xl p-8 flex flex-col items-center justify-between hover:border-accent/40 hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-6 left-6 bg-primary text-white text-[9px] font-mono font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase">
                  Flagship Brand
                </div>
                <div className="relative w-40 h-40 md:w-48 md:h-48 my-auto overflow-hidden">
                  <Image 
                    src="/premium_cooking_oil.png" 
                    alt="Jeevan Rekha Oil Bottle Packaging Mockup" 
                    fill
                    priority
                    sizes="200px"
                    className="object-contain"
                  />
                </div>
                <div className="text-center space-y-1 z-10 pt-4 border-t border-border/60 w-full">
                  <h3 className="font-serif text-2xl font-bold text-primary">JEEVAN REKHA</h3>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground/50">Physically Refined Cooking Oil</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Core Science & Nutritional Claims */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-foreground font-bold">The Science of Heart-Protecting Nutrition</h3>
                <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
                  Unlike conventional edible oils bleached and chemically refined with caustic soda (which strips nutrients and leaves soap-stock byproducts), Jeevan Rekha is processed using advanced high-vacuum physical distillation. This continuous refinement safeguards the oil&apos;s vital bio-active components.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6">
              {[
                {
                  icon: <Heart size={20} className="fill-accent/15 text-accent" />,
                  title: "10,000+ PPM Oryzanol Enrichment",
                  desc: "A naturally occurring plant antioxidant clinically proven to lower bad LDL cholesterol and support cardiorespiratory wellness."
                },
                {
                  icon: <Flame size={20} className="text-accent" />,
                  title: "High Thermal Smoke Threshold (232°C)",
                  desc: "Thermally stable at high temperatures, preventing oil breakdown into harmful compounds. Perfect for high-heat frying."
                },
                {
                  icon: <Leaf size={20} className="text-accent" />,
                  title: "Zero Trans Fats & Low Absorption",
                  desc: "Completely cholesterol and trans-fat free. High viscosity ensures food absorbs up to 15% less oil during preparation."
                }
              ].map((feature, idx) => (
                <ScrollReveal key={idx} direction="up" delay={0.2 + idx * 0.1}>
                  <div className="flex gap-4 p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-accent/12 hover:border-accent/30 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-background border border-border/80 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-base text-foreground leading-snug group-hover:text-accent transition-colors duration-300">{feature.title}</h4>
                      <p className="text-foreground/75 font-light text-xs md:text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Packaging Availability */}
        <section className="pt-12 border-t border-border space-y-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-serif text-foreground font-bold">Available Packaging Configurations</h3>
              <p className="text-foreground/75 font-light text-sm leading-relaxed">
                Bottled and packeted inside FSSAI-certified facilities to guarantee total purity.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packs.map((pack, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.1 * idx} className="h-full">
                <div className="premium-card p-6 rounded-2xl flex flex-col justify-between h-full group">
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-accent uppercase tracking-wider group-hover:text-primary transition-colors">Pack size</div>
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
          <div className="bg-primary text-white rounded-[2.5rem] p-8 md:p-12 shadow-lg flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />
            <div className="space-y-2 text-center md:text-left z-10 max-w-2xl">
              <h4 className="font-serif text-2xl md:text-3xl text-accent font-bold">Become a Jeevan Rekha Distributor</h4>
              <p className="font-light text-white/90 text-sm leading-relaxed">
                Connect with our commercial partnerships team in Kolkata to expand distribution networks across your region.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="bg-accent hover:bg-white text-white hover:text-primary px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shrink-0 shadow-md flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent active-press"
            >
              Partner with Us <ArrowUpRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
