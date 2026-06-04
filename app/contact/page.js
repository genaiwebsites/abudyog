"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: '',
    name: '',
    email: '',
    type: 'distributor',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-12 pb-24 bg-dot-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground font-bold">
              Partner With AB Udyog
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
              Connect with our corporate office and solvent refinery in Kolkata. We support retail distributorship pipelines and bulk industrial contracts.
            </p>
          </ScrollReveal>
        </div>

        {/* Form and Contact details split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Direct channels info */}
          <div className="lg:col-span-4 h-full">
            <ScrollReveal direction="right" delay={0.2} className="h-full">
              <div className="bg-primary text-white p-8 md:p-10 rounded-[2rem] shadow-lg flex flex-col justify-between h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/5 blur-[60px] pointer-events-none" />
                
                <div className="space-y-8 relative z-10">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-accent">Corporate Channels</h3>
                    <p className="text-white/70 font-light text-xs md:text-sm">Reach our offices directly for immediate logistics coordination.</p>
                  </div>

                  <div className="space-y-6 text-sm font-light text-white/90">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-0.5">Corporate Office & Refinery</h5>
                        <p className="text-xs leading-relaxed">AB Udyog Pvt Ltd.<br />Kolkata, West Bengal<br />India</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent">
                        <Mail size={18} />
                      </div>
                      <div>
                        <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-0.5">Email Inquiries</h5>
                        <p className="text-xs font-medium">info@abudyog.in<br />partnerships@abudyog.in</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent">
                        <Phone size={18} />
                      </div>
                      <div>
                        <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-0.5">Hotline Support</h5>
                        <p className="text-xs font-semibold text-accent">+91 74392 89709</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 mt-12 text-[10px] uppercase font-bold tracking-widest text-accent relative z-10">
                  AB Udyog Logistics Pipeline
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-8 h-full">
            <ScrollReveal direction="left" delay={0.2} className="h-full">
              <div className="premium-card p-8 md:p-12 rounded-[2.5rem] h-full flex flex-col justify-between">
                {submitted ? (
                  <div className="text-center py-12 space-y-4 my-auto">
                    <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center text-accent mx-auto animate-bounce">
                      <Send size={24} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">Inquiry Logged Successfully</h3>
                    <p className="text-foreground/75 font-light text-sm max-w-md mx-auto">
                      Thank you. Our partnership relations team in Kolkata will review your details and connect with your representative shortly.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl font-bold text-foreground">Partnership Form</h3>
                      <p className="text-foreground/75 font-light text-xs md:text-sm font-medium">Complete parameters to route inquiries to appropriate sales desks.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                          <label htmlFor="company" className="text-[10px] font-mono font-bold tracking-wider uppercase text-foreground/50">Company Name</label>
                          <input 
                            id="company"
                            type="text" 
                            required
                            value={form.company}
                            onChange={(e) => setForm({...form, company: e.target.value})}
                            className="w-full bg-background border border-border/80 rounded-xl p-3 text-sm text-foreground focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all duration-300"
                            placeholder="Enter enterprise name" 
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="name" className="text-[10px] font-mono font-bold tracking-wider uppercase text-foreground/50">Representative Name</label>
                          <input 
                            id="name"
                            type="text" 
                            required
                            value={form.name}
                            onChange={(e) => setForm({...form, name: e.target.value})}
                            className="w-full bg-background border border-border/80 rounded-xl p-3 text-sm text-foreground focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all duration-300"
                            placeholder="John Doe" 
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="email" className="text-[10px] font-mono font-bold tracking-wider uppercase text-foreground/50">Email Address</label>
                          <input 
                            id="email"
                            type="email" 
                            required
                            value={form.email}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                            className="w-full bg-background border border-border/80 rounded-xl p-3 text-sm text-foreground focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all duration-300"
                            placeholder="representative@domain.com" 
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="type" className="text-[10px] font-mono font-bold tracking-wider uppercase text-foreground/50">Inquiry Target</label>
                          <select 
                            id="type"
                            value={form.type}
                            onChange={(e) => setForm({...form, type: e.target.value})}
                            className="w-full bg-background border border-border/80 rounded-xl p-3 text-sm text-foreground focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="distributor">Jeevan Rekha Distributorship</option>
                            <option value="dorb">B2B DORB Wholesale Supplies</option>
                            <option value="byproduct">Industrial Gums, Wax & Lecithins</option>
                            <option value="corporate">Other Corporate Inquiries</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-1.5">
                        <label htmlFor="message" className="text-[10px] font-mono font-bold tracking-wider uppercase text-foreground/50">Message Details</label>
                        <textarea 
                          id="message"
                          rows="4" 
                          required
                          value={form.message}
                          onChange={(e) => setForm({...form, message: e.target.value})}
                          className="w-full bg-background border border-border/80 rounded-xl p-3 text-sm text-foreground focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all duration-300"
                          placeholder="Outline wholesale logistics, required volumes, or retail region details..."
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        className="bg-primary hover:bg-accent text-white hover:text-white w-full py-4 rounded-xl font-bold tracking-widest uppercase transition-all duration-300 flex justify-center items-center gap-1.5 text-xs shadow-md hover:-translate-y-0.5 active-press cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        Submit Partnership Inquiry <ArrowUpRight size={14} />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
