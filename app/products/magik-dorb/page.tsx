"use client";
import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export default function MagikDorbPage(): React.ReactElement {
  const [scriptsLoaded, setScriptsLoaded] = useState<boolean>(false);

  // Initialize GSAP animations when scripts are loaded
  useEffect(() => {
    if (!scriptsLoaded || typeof window === 'undefined' || !window.gsap) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Hero Timeline entrance
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.to('.hero-ring', { opacity: 0.6, rotate: 15, duration: 2.4 }, 0);
    tl.fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.0 }, 0.3);
    tl.fromTo('.hero-tagline-item', { opacity: 0, y: 16 }, { opacity: 1, y: 0, stagger: 0.12, duration: 0.7 }, 0.6);
    tl.fromTo('.hero-cta', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, 0.9);
    tl.fromTo('#productWrap', { opacity: 0, scale: 0.88, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1.4 }, 0.3);
    tl.fromTo('.data-pill', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, stagger: 0.15, duration: 0.7, ease: 'back.out(1.5)' }, 1.0);
    tl.fromTo('#scrollIndicator', { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.4);

    if (ScrollTrigger) {
      // Parallax scroll on hero
      ScrollTrigger.create({
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self: any) => {
          const prog = self.progress;
          gsap.set('#productWrap', { y: prog * -80 });
          gsap.set('.hero-ring', { rotate: 15 + prog * 40 });
        },
      });

      // Navbar background scroll
      ScrollTrigger.create({
        trigger: document.body,
        start: '80px top',
        onEnter: () => document.getElementById('nav-dorb')?.classList.add('scrolled'),
        onLeaveBack: () => document.getElementById('nav-dorb')?.classList.remove('scrolled'),
      });

      // Batch card reveal
      ScrollTrigger.batch('.feed-card', {
        onEnter: (cards: HTMLElement[]) => {
          gsap.to(cards, { y: 0, opacity: 1, stagger: 0.14, duration: 1.0, ease: 'expo.out' });
          cards.forEach((c) => {
            const fill = c.querySelector('.feed-card-bar-fill') as HTMLElement | null;
            if (fill) gsap.to(fill, { width: (fill.dataset.fill || '0') + '%', duration: 1.4, delay: 0.4 });
          });
        },
        start: 'top 88%',
        once: true,
      });

      // Stats counters
      ScrollTrigger.create({
        trigger: '#stats',
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to('.stat-item', { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: 'expo.out' });
          const data = [
            { id: 'stat1', end: 99 },
            { id: 'stat2', end: 200 },
            { id: 'stat3', end: 3 },
            { id: 'stat4', end: 40 },
          ];
          data.forEach((t, i) => {
            const el = document.getElementById(t.id);
            if (!el) return;
            const counter = { val: 0 };
            gsap.to(counter, {
              val: t.end,
              duration: 2.5,
              delay: i * 0.15,
              ease: 'power3.out',
              onUpdate: () => {
                el.textContent = Math.floor(counter.val).toString();
              },
            });
          });
        },
      });

      // Comparison grid item reveal
      gsap.set('.cmp-item', { opacity: 0, y: 20 });
      ScrollTrigger.create({
        trigger: '#advantage',
        start: 'top 70%',
        once: true,
        onEnter: () => gsap.to('.cmp-item', { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 }),
      });

      // Quality attribute reveal
      gsap.set('.quality-attr', { opacity: 0, x: -20 });
      ScrollTrigger.create({
        trigger: '#quality',
        start: 'top 70%',
        once: true,
        onEnter: () => gsap.to('.quality-attr', { opacity: 1, x: 0, stagger: 0.15, duration: 0.8 }),
      });
    }

    // Continuous ring spin
    gsap.to('.hero-ring', { rotate: '+=360', duration: 80, repeat: -1, ease: 'none' });
  }, [scriptsLoaded]);

  return (
    <div className="magik-dorb-container">
      {/* GSAP Scripts */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.ScrollTrigger) setScriptsLoaded(true);
        }}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.gsap) setScriptsLoaded(true);
        }}
      />

      {/* DESIGN.md Typography & Component Rules */}
      <style jsx global>{`
        .magik-dorb-container {
          --cream: #FAFCFF !important;
          --warm-white: #F4F8FC !important;
          --warm-white-rgb: 244, 248, 252 !important;
          --beige: #FFF9F2 !important;
          --beige-rgb: 255, 249, 242 !important;
          --beige-mid: #FFE5CC !important;
          --gold: #D85800 !important;          /* Terracotta Pack Orange */
          --gold-light: #F2994A !important;    /* Warm Amber Sunshine */
          --gold-pale: #FFF6E5 !important;     /* Pack Glow */
          --green-muted: #276E36 !important;   /* Meadow Pasture Green */
          --green-pale: #F0F7F2 !important;    /* Fresh Quality Tint */
          --green-deep: #1C4425 !important;    /* Deep Forest Green */
          --text-dark: #0F2A4A !important;     /* Ocean Navy Blue */
          --text-mid: #334E68 !important;      /* Body Copy Navy */
          --text-light: #486581 !important;    /* Subtext Navy Slate */
          --marquee-bg: #0F2A4A !important;    /* Deep Ocean Navy Banner */
          --marquee-text: #FFC20E !important;  /* Bright Pack Yellow */

          /* DESIGN.md Font Tokens */
          --font-display: var(--font-archivo), 'Archivo', system-ui, sans-serif !important;
          --font-body: var(--font-plus-jakarta), 'Plus Jakarta Sans', system-ui, sans-serif !important;
          --font-mono: var(--font-space-mono), 'Space Mono', monospace !important;

          background: var(--cream) !important;
          color: var(--text-dark) !important;
          font-family: var(--font-body) !important;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          line-height: 1.6;
        }

        .magik-dorb-container ::-webkit-scrollbar { width: 6px; }
        .magik-dorb-container ::-webkit-scrollbar-track { background: var(--beige); }
        .magik-dorb-container ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 3px; }

        /* ── HEADER NAVBAR & BACK BUTTON ── */
        #nav-dorb {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(16px, 2vh, 20px) clamp(24px, 5vw, 48px);
          background: transparent !important;
          border-bottom: 1px solid transparent !important;
          box-shadow: none !important;
          transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease !important;
        }

        #nav-dorb .nav-links a {
          text-decoration: none;
          color: #0F2A4A !important;
          font-family: var(--font-body) !important;
          font-size: 0.82rem !important;
          font-weight: 700 !important;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          position: relative;
          padding: 4px 0;
          transition: color 0.3s ease !important;
        }
        #nav-dorb .nav-links a::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2.5px;
          background: #D85800 !important; transition: width 0.3s ease, background-color 0.3s ease !important;
        }
        #nav-dorb .nav-links a:hover { color: #D85800 !important; }
        #nav-dorb .nav-links a:hover::after { width: 100%; }

        #nav-dorb .nav-back-btn {
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 9px 20px !important;
          border-radius: 9999px !important;
          border: 1.5px solid #0F2A4A !important;
          color: #0F2A4A !important;
          background: transparent !important;
          font-family: var(--font-body) !important;
          font-size: 0.78rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.1em !important;
          text-transform: uppercase !important;
          text-decoration: none !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          white-space: nowrap !important;
        }
        #nav-dorb .nav-back-btn:hover {
          background: #D85800 !important;
          color: #FFFFFF !important;
          border-color: #D85800 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 18px rgba(216, 88, 0, 0.25) !important;
        }

        #nav-dorb.scrolled {
          background: rgba(15, 42, 74, 0.96) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          padding: clamp(10px, 1.5vh, 12px) clamp(24px, 5vw, 48px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25) !important;
          border-bottom: 1px solid rgba(255, 194, 14, 0.3) !important;
        }
        #nav-dorb.scrolled .nav-links a { color: #FFFFFF !important; }
        #nav-dorb.scrolled .nav-links a::after { background: #FFC20E !important; }
        #nav-dorb.scrolled .nav-links a:hover { color: #FFC20E !important; }
        #nav-dorb.scrolled .nav-back-btn {
          border-color: #FFC20E !important;
          color: #FFC20E !important;
          background: rgba(255, 194, 14, 0.12) !important;
        }
        #nav-dorb.scrolled .nav-back-btn:hover {
          background: #FFC20E !important;
          color: #0F2A4A !important;
          border-color: #FFC20E !important;
          box-shadow: 0 6px 18px rgba(255, 194, 14, 0.3) !important;
        }

        .nav-logo { display: flex; align-items: center; }
        .nav-logo img { height: clamp(36px, 4vh, 44px); width: auto; object-fit: contain; }
        .nav-links { display: flex; justify-content: center; gap: clamp(24px, 3vw, 48px); list-style: none; margin: 0; padding: 0; }

        @media (max-width: 860px) {
          .nav-links { display: none; }
        }

        /* ── HERO SECTION & MASSIVE HERO PRODUCT BAG ── */
        #hero {
          position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center;
          overflow: hidden; background: #F4F8FC !important; z-index: 2; padding: clamp(110px, 15vh, 150px) 0 clamp(60px, 10vh, 100px) 0;
          box-sizing: border-box;
        }
        .hero-ring {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: min(95vw, 920px); aspect-ratio: 1; pointer-events: none; opacity: 0; z-index: 1;
        }
        .hero-inner {
          position: relative; z-index: 3; display: grid; grid-template-columns: 0.9fr 1.1fr;
          align-items: center; gap: clamp(30px, 4vw, 60px); width: 100%; max-width: 1440px;
          padding: 0 clamp(24px, 5vw, 80px); margin: 0 auto;
        }
        .hero-text-col {
          max-width: 600px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .hero-title {
          font-family: var(--font-display) !important;
          font-size: clamp(3.2rem, 7vw, 7.2rem) !important;
          font-weight: 800 !important;
          line-height: 0.96 !important;
          letter-spacing: -0.04em !important;
          color: #0F2A4A !important;
          margin-bottom: clamp(24px, 3.5vh, 36px);
          opacity: 0;
          font-style: normal !important;
        }

        /* Non-Italic Orange Accent 'g' */
        .hero-title .hero-g-accent {
          color: #D85800 !important;
          font-style: normal !important;
          font-weight: 800 !important;
          font-family: inherit !important;
        }

        .hero-taglines { display: flex; flex-direction: column; gap: 14px; margin-bottom: clamp(32px, 4.5vh, 44px); width: 100%; }
        .hero-tagline-item {
          display: flex; align-items: center; gap: 12px;
          font-family: var(--font-body) !important;
          font-size: clamp(0.92rem, 1.5vw, 1.06rem) !important;
          font-weight: 500 !important;
          color: #334E68 !important; opacity: 0; line-height: 1.5; text-align: left;
        }
        .hero-tagline-dot { width: 8px; height: 8px; border-radius: 50%; background: #D85800 !important; flex-shrink: 0; }

        /* Solid Elevated Industrial Pill CTA Button */
        .hero-cta {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 12px !important;
          padding: 15px 34px !important;
          border-radius: 100px !important;
          background: #D85800 !important;
          color: #FFFFFF !important;
          font-family: var(--font-body) !important;
          font-size: 0.85rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.12em !important;
          text-transform: uppercase !important;
          border: none !important;
          box-shadow: 0 8px 24px rgba(216, 88, 0, 0.28) !important;
          text-decoration: none !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          opacity: 0;
          cursor: pointer !important;
        }
        .hero-cta:hover {
          background: #0F2A4A !important;
          color: #FFFFFF !important;
          transform: translateY(-3px) scale(1.03) !important;
          box-shadow: 0 14px 32px rgba(15, 42, 74, 0.35) !important;
          gap: 16px !important;
        }
        .hero-cta svg {
          width: 18px !important;
          height: 18px !important;
          stroke: #FFFFFF !important;
          transition: transform 0.3s ease !important;
        }
        .hero-cta:hover svg {
          transform: translateX(4px) !important;
        }

        /* Hero Product Column & MASSIVE PRODUCT BAG */
        .hero-product-col {
          display: flex; align-items: center; justify-content: center; position: relative; width: 100%;
        }
        .hero-product-wrap {
          position: relative;
          width: min(100%, 580px);
          height: clamp(460px, 65vh, 660px);
          display: flex; align-items: center; justify-content: center; opacity: 0;
        }
        .product-halo {
          position: absolute; inset: 0; border-radius: 50%;
          background: radial-gradient(ellipse at center, #FFF6E5 0%, transparent 65%);
          opacity: 0.9; z-index: 1; transition: transform 0.6s var(--ease-out-expo), opacity 0.6s ease;
        }
        .hero-product-shadow {
          position: absolute; bottom: 2%; left: 50%; transform: translateX(-50%); width: 65%; height: 28px;
          background: radial-gradient(ellipse at center, rgba(15, 42, 74, 0.2) 0%, transparent 70%);
          z-index: 1; border-radius: 50%; pointer-events: none;
          transition: width 0.6s var(--ease-out-expo), opacity 0.6s ease, transform 0.6s var(--ease-out-expo);
        }
        .hero-product-img {
          position: relative; z-index: 2;
          height: 100%; max-height: 620px; width: auto; max-width: 100%;
          transform: scale(1.15);
          object-fit: contain;
          filter: drop-shadow(0 20px 42px rgba(15, 42, 74, 0.16));
          transition: transform 0.6s var(--ease-out-expo); cursor: pointer;
        }

        .hero-product-wrap:hover .hero-product-img { transform: translateY(-12px) scale(1.18); }
        .hero-product-wrap:hover .hero-product-shadow { width: 50%; opacity: 0.6; transform: translateX(-50%) translateY(12px); }
        .hero-product-wrap:hover .product-halo { transform: scale(1.08); opacity: 1; }

        /* REDUCED ORBIT RADIUS AS REQUESTED BY USER */
        .pill-orbit-ring {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 110%; max-width: 580px; aspect-ratio: 1; border-radius: 50%;
          animation: spinOrbit 45s linear infinite; pointer-events: none; z-index: 3;
        }
        .pill-anchor {
          position: absolute; width: 0; height: 0; display: flex; align-items: center; justify-content: center;
          animation: counterSpinOrbit 45s linear infinite;
        }
        .pill-anchor.top-left  { top: 14.6%; left: 14.6%; }
        .pill-anchor.top-right { top: 14.6%; left: 85.4%; }
        .pill-anchor.bot-left  { top: 85.4%; left: 14.6%; }
        .pill-anchor.bot-right { top: 85.4%; left: 85.4%; }

        @keyframes spinOrbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes counterSpinOrbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }

        /* Orbiting Data Pills */
        .magik-dorb-container .data-pill {
          position: relative !important;
          pointer-events: auto !important;
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 10px !important;
          font-family: var(--font-body) !important;
          white-space: nowrap !important;
          box-shadow: none !important;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          cursor: default !important;
          opacity: 0;
          width: auto !important;
          height: auto !important;
        }

        .magik-dorb-container .data-pill-icon-circle {
          width: 46px !important;
          height: 46px !important;
          border-radius: 50% !important;
          background: #FFFFFF !important;
          border: 1.5px solid #FFE5CC !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow: 0 4px 14px rgba(15, 42, 74, 0.1) !important;
          flex-shrink: 0 !important;
          transition: all 0.3s ease !important;
        }

        .magik-dorb-container .data-pill-icon-circle svg {
          width: 22px !important;
          height: 22px !important;
          stroke: #D85800 !important;
          transition: transform 0.3s ease !important;
        }

        .magik-dorb-container .data-pill:hover {
          transform: translateY(-4px) scale(1.04) !important;
        }

        .magik-dorb-container .data-pill:hover .data-pill-icon-circle {
          border-color: #D85800 !important;
          box-shadow: 0 8px 20px rgba(216, 88, 0, 0.25) !important;
          background: #FFF6E5 !important;
        }

        .magik-dorb-container .data-pill:hover .data-pill-icon-circle svg {
          transform: scale(1.15) rotate(8deg) !important;
        }

        .magik-dorb-container .data-pill-text {
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          font-size: clamp(0.85rem, 1.2vw, 0.95rem) !important;
        }

        .magik-dorb-container .data-pill-label {
          font-weight: 700 !important;
          color: #0F2A4A !important;
        }

        .magik-dorb-container .data-pill-sub {
          color: #486581 !important;
          font-weight: 500 !important;
        }

        .scroll-indicator {
          position: absolute; bottom: clamp(10px, 3vh, 30px); left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px; opacity: 0;
          font-family: var(--font-body) !important;
          font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: #486581 !important;
        }
        .scroll-line {
          width: 1px; height: 40px; background: linear-gradient(to bottom, #D85800, transparent);
          animation: scrollLine 2s ease-in-out infinite;
        }
        @keyframes scrollLine {
          0%, 100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(0.4); opacity: 0.3; }
        }

        /* ── SECTION TITLES & BALANCED 2-COLUMN GRID HEADERS ── */
        .section-title {
          font-family: var(--font-display) !important;
          font-size: clamp(2.4rem, 5.5vw, 4.2rem) !important;
          font-weight: 700 !important;
          line-height: 1.08 !important;
          letter-spacing: -0.02em !important;
          color: #0F2A4A !important; word-break: break-word; margin: 0;
          font-style: normal !important;
        }

        /* About Marquee Strip */
        #about-strip {
          background: #0F2A4A !important; padding: clamp(24px, 4vw, 40px) 0; display: flex;
          align-items: center; overflow: hidden; position: relative; z-index: 2;
        }
        .strip-marquee-track {
          display: flex; gap: clamp(30px, 6vw, 60px); white-space: nowrap; animation: marquee 20s linear infinite;
          padding-left: clamp(30px, 6vw, 60px);
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .strip-item {
          font-family: var(--font-display) !important;
          font-size: clamp(1rem, 2vw, 1.25rem) !important;
          font-style: normal !important;
          font-weight: 600 !important;
          color: #FFC20E !important; display: flex; align-items: center; gap: clamp(16px, 3vw, 30px);
        }
        .strip-item::after { content: '✦'; font-style: normal; font-size: 0.6rem; color: #D85800 !important; }

        /* Applications Grid Section */
        #applications {
          padding: clamp(70px, 10vw, 120px) clamp(24px, 5vw, 80px); max-width: 1400px;
          margin: 0 auto; position: relative; z-index: 2; background: #FAFCFF !important;
        }
        .applications-header {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: clamp(24px, 4vw, 50px) !important;
          align-items: end !important;
          margin-bottom: clamp(40px, 6vw, 64px) !important;
          width: 100% !important;
        }
        .applications-header .section-title {
          text-align: left !important;
        }
        .applications-header p {
          font-family: var(--font-body) !important;
          font-size: clamp(0.95rem, 2vw, 1.08rem) !important;
          color: #334E68 !important; font-weight: 400; line-height: 1.7; margin: 0 !important; max-width: 580px;
          text-align: left !important;
        }
        .feed-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: clamp(16px, 2vw, 24px); }
        .feed-card {
          background: #FFFFFF !important;
          border: 1.5px solid #FFE5CC !important; border-radius: 16px; padding: clamp(24px, 2.5vw, 32px) clamp(20px, 2vw, 28px);
          position: relative; overflow: hidden; cursor: default; opacity: 0; will-change: transform, opacity;
          min-width: 0; display: flex; flex-direction: column; justify-content: space-between; z-index: 1;
          transition: box-shadow 0.4s ease, transform 0.4s ease, border-color 0.4s ease;
        }
        .feed-card:hover {
          box-shadow: 0 14px 32px rgba(15, 42, 74, 0.1) !important; transform: translateY(-4px); border-color: #D85800 !important;
        }
        .feed-card-glow {
          position: absolute; top: -30px; right: -30px; width: 120px; height: 120px;
          background: radial-gradient(circle, #FFF6E5 0%, transparent 70%); border-radius: 50%;
          opacity: 0.5; z-index: 0; transition: transform 0.6s var(--ease-out-expo), opacity 0.6s ease;
        }
        .feed-card:hover .feed-card-glow {
          transform: scale(2.5) translate(-10px, 10px); opacity: 0.85;
          background: radial-gradient(circle, #F2994A 0%, transparent 70%);
        }
        .feed-card-content { position: relative; z-index: 2; }
        .feed-card-icon-wrap {
          width: 44px; height: 44px; background: #F4F8FC !important;
          border: 1px solid #FFE5CC !important; border-radius: 12px; display: flex; align-items: center;
          justify-content: center; font-size: 1.4rem; margin-bottom: 16px;
          transition: transform 0.4s ease, border-color 0.4s ease, background 0.4s ease;
        }
        .feed-card:hover .feed-card-icon-wrap {
          transform: scale(1.1) rotate(5deg); border-color: #D85800 !important; background: #FFF6E5 !important;
        }
        .feed-card-title {
          font-family: var(--font-display) !important; font-size: clamp(1.2rem, 2vw, 1.45rem) !important; font-weight: 700 !important;
          color: #0F2A4A !important; margin-bottom: 10px; line-height: 1.18; font-style: normal !important;
        }
        .feed-card-desc { font-family: var(--font-body) !important; font-size: clamp(0.84rem, 1vw, 0.9rem) !important; color: #334E68 !important; font-weight: 400; line-height: 1.6; margin: 0; }
        .feed-card-bar { margin-top: 20px; height: 3px; background: #FFE5CC !important; border-radius: 3px; overflow: hidden; }
        .feed-card-bar-fill {
          height: 100%; background: linear-gradient(to right, #276E36, #D85800) !important;
          border-radius: 3px; width: 0%; transition: width 1.2s var(--ease-out-expo);
        }

        /* Stats Row Section */
        #stats {
          padding: clamp(50px, 8vw, 70px) clamp(24px, 5vw, 80px);
          background: #F4F8FC !important;
          border-top: 1.5px solid #FFE5CC !important;
          border-bottom: 1.5px solid #FFE5CC !important;
          position: relative; z-index: 2;
        }
        .stats-inner {
          max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr);
          gap: clamp(24px, 4vw, 40px); text-align: center;
        }
        .stat-item {
          display: flex; flex-direction: column; align-items: center; gap: 8px; opacity: 0;
          transition: transform 0.4s ease; cursor: default;
        }
        .stat-item:hover { transform: translateY(-8px) scale(1.05); }
        .stat-number {
          font-family: var(--font-display) !important; font-size: clamp(2.6rem, 6vw, 4.4rem) !important; font-weight: 800 !important;
          color: #0F2A4A !important; line-height: 1; transition: color 0.4s ease; font-style: normal !important;
        }
        .stat-item:hover .stat-number { color: #D85800 !important; }
        .stat-number span { color: #D85800 !important; transition: color 0.4s ease; }
        .stat-item:hover .stat-number span { color: #F2994A !important; }
        .stat-label {
          font-family: var(--font-body) !important; font-size: clamp(0.7rem, 1.5vw, 0.8rem) !important; font-weight: 700 !important;
          letter-spacing: 0.1em; text-transform: uppercase; color: #486581 !important; transition: color 0.4s ease;
        }
        .stat-item:hover .stat-label { color: #0F2A4A !important; }

        /* Advantage Comparison Section */
        #advantage {
          background: #FFF9F2 !important;
          border-bottom: 1.5px solid #FFE5CC !important;
          padding: clamp(70px, 10vw, 120px) clamp(24px, 5vw, 80px); position: relative; overflow: hidden; z-index: 2;
        }
        .advantage-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 2; }
        .advantage-header {
          display: flex; flex-direction: column; align-items: center; text-align: center;
          margin-bottom: clamp(40px, 6vw, 64px); width: 100%;
        }
        .advantage-header .section-title {
          text-align: center !important; width: 100%;
        }
        .advantage-header p {
          margin-top: 16px; font-family: var(--font-body) !important; font-size: clamp(0.95rem, 2vw, 1.05rem) !important; color: #334E68 !important; font-weight: 400;
          max-width: 600px; width: 100%; text-align: center !important; margin-left: auto; margin-right: auto;
        }
        .comparison-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 4vw, 36px); align-items: stretch; }
        .cmp-col-magik, .cmp-col-others {
          border-radius: 24px; padding: clamp(32px, 5vw, 48px) clamp(24px, 4vw, 40px);
          position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;
          transition: box-shadow 0.4s ease, transform 0.4s ease;
        }
        .cmp-col-magik { background: #0F2A4A !important; color: #FFFFFF !important; }
        .cmp-col-others { background: #FFFFFF !important; border: 1.5px solid #FFE5CC !important; }

        .cmp-col-magik::before {
          content: ''; position: absolute; top: -80px; right: -80px; width: 300px; height: 300px;
          border-radius: 50%; background: radial-gradient(circle, #D85800 0%, transparent 70%); opacity: 0.25;
        }

        .cmp-col-heading {
          font-family: var(--font-display) !important; font-size: clamp(1.8rem, 4vw, 2.2rem) !important; font-weight: 700 !important;
          margin-bottom: clamp(24px, 4vw, 36px); line-height: 1.12; font-style: normal !important; text-align: left !important;
        }
        .cmp-col-magik .cmp-col-heading { color: #FFFFFF !important; }
        .cmp-col-others .cmp-col-heading { color: #0F2A4A !important; }

        .cmp-item {
          display: flex; align-items: flex-start; gap: 16px; padding: 16px 12px;
          border-top: 1px solid rgba(255,255,255,0.12); margin-top: 4px; border-radius: 12px; opacity: 0; transition: all 0.3s ease; text-align: left;
        }
        .cmp-col-others .cmp-item { border-top-color: #FFE5CC !important; }
        .cmp-col-magik .cmp-item:hover { background: rgba(255,255,255,0.08); transform: translateX(8px); }
        .cmp-col-others .cmp-item:hover { background: #FFF9F2 !important; transform: translateX(8px); }

        .cmp-item-icon {
          width: 36px; display: flex; align-items: flex-start; justify-content: center;
          flex-shrink: 0; font-size: 1.35rem; line-height: 1;
        }
        .cmp-item-text { min-width: 0; }
        .cmp-item-title { font-family: var(--font-display) !important; font-size: clamp(1.08rem, 2vw, 1.18rem) !important; font-weight: 600 !important; line-height: 1.25; font-style: normal !important; }
        .cmp-col-magik .cmp-item-title { color: #FFFFFF !important; }
        .cmp-col-others .cmp-item-title { color: #0F2A4A !important; }
        .cmp-item-sub { font-family: var(--font-body) !important; font-size: clamp(0.82rem, 1.5vw, 0.88rem) !important; font-weight: 400; margin-top: 4px; line-height: 1.5; }
        .cmp-col-magik .cmp-item-sub { color: rgba(255, 255, 255, 0.88) !important; }

        .cmp-badge {
          display: inline-flex; align-items: center; gap: 6px; margin-top: 28px; padding: 10px 22px;
          border-radius: 100px; font-family: var(--font-body) !important; font-size: 0.78rem !important; font-weight: 700 !important; letter-spacing: 0.06em; opacity: 0; width: fit-content;
        }
        .cmp-col-magik .cmp-badge { background: #D85800 !important; color: #FFFFFF !important; }
        .cmp-col-others .cmp-badge { background: #FFF9F2 !important; color: #334E68 !important; }

        /* Quality Section */
        #quality {
          position: relative; padding: clamp(70px, 10vw, 120px) clamp(24px, 5vw, 80px);
          background: #F0F7F2 !important;
          overflow: hidden; z-index: 2;
        }
        .quality-inner {
          max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 0.95fr 1.05fr;
          gap: clamp(40px, 8vw, 80px); align-items: center; position: relative; z-index: 2;
        }
        .quality-text .section-title { color: #1C4425 !important; text-align: left !important; }
        .quality-text p {
          margin-top: 24px; font-family: var(--font-body) !important; font-size: clamp(0.95rem, 2vw, 1.05rem) !important; font-weight: 400;
          line-height: 1.75; color: #0F2A4A !important; max-width: 460px; margin-bottom: 0; text-align: left !important;
        }
        .quality-attributes { display: flex; flex-direction: column; gap: 0; }
        .quality-attr {
          display: flex; align-items: flex-start; gap: clamp(20px, 3vw, 28px); padding: 24px 0;
          border-bottom: 1px solid rgba(28, 68, 37, 0.18) !important; opacity: 0; transition: background 0.3s ease, padding-left 0.3s ease; text-align: left;
        }
        .quality-attr:hover { padding-left: 8px; }
        .quality-attr:first-child { border-top: 1px solid rgba(28, 68, 37, 0.18) !important; }

        .quality-attr-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #FFFFFF !important;
          border: 1.5px solid rgba(28, 68, 37, 0.2) !important;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(28, 68, 37, 0.08) !important;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
          margin-top: 2px;
        }

        .quality-attr:hover .quality-attr-icon {
          transform: scale(1.12) translateY(-3px) !important;
          border-color: #276E36 !important;
          box-shadow: 0 10px 24px rgba(39, 110, 54, 0.22) !important;
          background: #FFF9F2 !important;
        }

        .quality-attr-icon svg {
          width: 26px;
          height: 26px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .quality-attr:hover .quality-attr-icon.icon-mesh svg {
          transform: rotate(15deg) scale(1.1);
        }
        .quality-attr:hover .quality-attr-icon.icon-hue svg {
          transform: rotate(-12deg) scale(1.15);
        }
        .quality-attr-icon.icon-chem svg {
          transition: transform 0.4s ease;
        }
        .quality-attr:hover .quality-attr-icon.icon-chem svg {
          transform: translateY(-2px) scale(1.1);
        }

        .quality-attr-text h4 { font-family: var(--font-display) !important; font-size: clamp(1.12rem, 2vw, 1.25rem) !important; font-weight: 700 !important; color: #1C4425 !important; margin: 0; font-style: normal !important; text-align: left !important; }
        .quality-attr-text p { font-family: var(--font-body) !important; font-size: clamp(0.84rem, 1.5vw, 0.88rem) !important; color: #334E68 !important; font-weight: 400; margin-top: 4px; line-height: 1.5; text-align: left !important; }

        /* ── CROSS-DEVICE RESPONSIVE BREAKPOINTS ── */
        @media (max-width: 1200px) {
          .hero-product-wrap {
            width: min(100%, 500px);
            height: clamp(400px, 58vh, 580px);
          }
          .hero-product-img {
            transform: scale(1.1);
          }
          .pill-orbit-ring {
            width: 110%;
            max-width: 520px;
          }
          .feed-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 1024px) {
          #hero {
            padding: clamp(120px, 15vh, 150px) 0 clamp(60px, 8vh, 90px) 0;
          }
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: clamp(40px, 6vh, 60px);
          }
          .hero-text-col {
            max-width: 100%;
            display: flex; flex-direction: column; align-items: center; text-align: center;
          }
          .hero-tagline-item { justify-content: center; text-align: center; }
          .hero-cta { margin: 0 auto; }
          .hero-product-wrap {
            margin: 0 auto;
            width: min(100%, 460px);
            height: clamp(360px, 52vh, 520px);
          }
          .hero-product-img {
            transform: scale(1.05);
          }
          .pill-orbit-ring {
            width: 108%;
            max-width: 480px;
          }
          .applications-header { grid-template-columns: 1fr !important; gap: 20px !important; }
          .applications-header p { text-align: left !important; }
          .comparison-grid { grid-template-columns: 1fr; }
          .quality-inner { grid-template-columns: 1fr; gap: 40px; }
          .quality-text .section-title, .quality-text p { text-align: center !important; margin-left: auto; margin-right: auto; }
        }

        @media (max-width: 640px) {
          #hero {
            padding: 100px 0 60px 0;
          }
          .hero-inner {
            padding: 0 20px;
          }
          .hero-title {
            font-size: clamp(2.8rem, 11vw, 3.8rem) !important;
          }
          .hero-product-wrap {
            width: min(100%, 340px);
            height: clamp(300px, 42vh, 400px);
          }
          .hero-product-img {
            transform: scale(1.0);
          }
          .pill-orbit-ring {
            width: 105%;
            max-width: 360px;
          }
          .feed-grid { grid-template-columns: 1fr; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); gap: 32px 16px; }
          #nav-dorb .nav-back-btn {
            padding: 7px 14px !important;
            font-size: 0.72rem !important;
          }
        }
      `}</style>

      {/* Navigation Header with Back to All Products Button */}
      <nav id="nav-dorb" role="navigation">
        <div className="nav-logo">
          <Link href="/">
            <img
              src="/logo.png"
              alt="AB Udyog Pvt. Ltd."
            />
          </Link>
        </div>

        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#applications">Applications</a></li>
          <li><a href="#advantage">Advantage</a></li>
          <li><a href="#quality">Quality</a></li>
        </ul>

        <div>
          <Link href="/products" className="nav-back-btn" aria-label="Back to all products">
            ← All Products
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" aria-label="Hero">
        <svg className="hero-ring" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="300" cy="300" r="280" stroke="#D85800" strokeWidth="0.8" strokeDasharray="6 18" />
          <circle cx="300" cy="300" r="240" stroke="#276E36" strokeWidth="0.5" strokeDasharray="3 14" opacity="0.5" />
          <circle cx="300" cy="300" r="200" stroke="#D85800" strokeWidth="0.3" opacity="0.3" />
          <g stroke="#D85800" strokeWidth="1.2" opacity="0.6">
            <line x1="300" y1="18" x2="300" y2="36" /> <line x1="291" y1="27" x2="309" y2="27" />
            <line x1="300" y1="564" x2="300" y2="582" /> <line x1="291" y1="573" x2="309" y2="573" />
            <line x1="18" y1="300" x2="36" y2="300" /> <line x1="27" y1="291" x2="27" y2="309" />
            <line x1="564" y1="300" x2="582" y2="300" /> <line x1="573" y1="291" x2="573" y2="309" />
          </g>
        </svg>

        <div className="hero-inner">
          <div className="hero-text-col">
            <h1 className="hero-title">Ma<span className="hero-g-accent">g</span>ik<br />DORB</h1>
            <div className="hero-taglines">
              <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Super Fine Mesh Grade</div>
              <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Naturally Light & Free of Adulterants</div>
              <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Consistent Batch-to-Batch Nutrient Profile</div>
            </div>
            <a className="hero-cta" href="#applications">
              View Feed Applications
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="hero-product-col">
            <div className="hero-product-wrap" id="productWrap">
              <div className="product-halo"></div>
              <div className="hero-product-shadow"></div>
              <img
                className="hero-product-img"
                src="/ab-udyog-magik-dorb-super-fine-animal-feed-pack.png"
                alt="AB Udyog Magik DORB Super Fine Animal Feed Pack"
              />

              {/* Exact Orbit Data Pills Matching Reference Image & index.html */}
              <div className="pill-orbit-ring">
                <div className="pill-anchor top-left">
                  <div className="data-pill" aria-label="Super fine grade">
                    <div className="data-pill-icon-circle" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FFF6E5" />
                      </svg>
                    </div>
                    <div className="data-pill-text">
                      <span className="data-pill-label">Super Fine</span>
                      <span className="data-pill-sub">Grade</span>
                    </div>
                  </div>
                </div>

                <div className="pill-anchor top-right">
                  <div className="data-pill" aria-label="Homogeneous blend">
                    <div className="data-pill-icon-circle" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" fill="#FFF6E5" />
                      </svg>
                    </div>
                    <div className="data-pill-text">
                      <span className="data-pill-label">Homogeneous</span>
                      <span className="data-pill-sub">Blend</span>
                    </div>
                  </div>
                </div>

                <div className="pill-anchor bot-left">
                  <div className="data-pill" aria-label="Light colour">
                    <div className="data-pill-icon-circle" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
                        <path d="M12 2v20" />
                        <path d="M12 4a8 8 0 0 1 0 16z" fill="#D85800" stroke="none" />
                      </svg>
                    </div>
                    <div className="data-pill-text">
                      <span className="data-pill-label">Light</span>
                      <span className="data-pill-sub">Colour</span>
                    </div>
                  </div>
                </div>

                <div className="pill-anchor bot-right">
                  <div className="data-pill" aria-label="High returns">
                    <div className="data-pill-icon-circle" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="19" x2="12" y2="5" />
                        <polyline points="5 12 12 5 19 12" />
                      </svg>
                    </div>
                    <div className="data-pill-text">
                      <span className="data-pill-label">High</span>
                      <span className="data-pill-sub">Returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" id="scrollIndicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* Marquee Strip */}
      <div id="about-strip" aria-hidden="true">
        <div className="strip-marquee-track" id="marqueeTrack">
          <span className="strip-item">De-Oiled Rice Bran</span>
          <span className="strip-item">High Digestibility Rations</span>
          <span className="strip-item">Super Fine Mesh Grade</span>
          <span className="strip-item">Homogeneous Particle Size</span>
          <span className="strip-item">Controlled Oil & Silica Content</span>
          <span className="strip-item">AB Udyog Certified Quality</span>
          <span className="strip-item">De-Oiled Rice Bran</span>
          <span className="strip-item">High Digestibility Rations</span>
          <span className="strip-item">Super Fine Mesh Grade</span>
          <span className="strip-item">Homogeneous Particle Size</span>
          <span className="strip-item">Controlled Oil & Silica Content</span>
          <span className="strip-item">AB Udyog Certified Quality</span>
        </div>
      </div>

      {/* Applications Section */}
      <section id="applications" aria-labelledby="applications-heading">
        <div className="applications-header">
          <div>
            <h2 id="applications-heading" className="section-title">Formulated for<br />Every Feed</h2>
          </div>
          <p>Engineered for seamless integration into commercial livestock and aquaculture rations. Magik DORB replaces raw bran with a stable, high-value nutrient base.</p>
        </div>

        <div className="feed-grid">
          <article className="feed-card">
            <div className="feed-card-glow"></div>
            <div className="feed-card-content">
              <div className="feed-card-icon-wrap">🐄</div>
              <h3 className="feed-card-title">Cattle Feed</h3>
              <p className="feed-card-desc">Optimizes energy density and digestible fibre in dairy and beef cattle formulations, supporting consistent milk yield and body condition.</p>
            </div>
            <div className="feed-card-bar"><div className="feed-card-bar-fill" data-fill="88"></div></div>
          </article>

          <article className="feed-card">
            <div className="feed-card-glow"></div>
            <div className="feed-card-content">
              <div className="feed-card-icon-wrap">🐓</div>
              <h3 className="feed-card-title">Poultry Feed</h3>
              <p className="feed-card-desc">Micro-milled particle sizing allows clean pelleting and extrusion, improving feed conversion ratios (FCR) in broilers and layer flocks.</p>
            </div>
            <div className="feed-card-bar"><div className="feed-card-bar-fill" data-fill="92"></div></div>
          </article>

          <article className="feed-card">
            <div className="feed-card-glow"></div>
            <div className="feed-card-content">
              <div className="feed-card-icon-wrap">🐟</div>
              <h3 className="feed-card-title">Fish Feed</h3>
              <p className="feed-card-desc">Homogeneous dispersion prevents nutrient separation in floating and sinking feed pellets for pond and cage aquaculture systems.</p>
            </div>
            <div className="feed-card-bar"><div className="feed-card-bar-fill" data-fill="85"></div></div>
          </article>

          <article className="feed-card">
            <div className="feed-card-glow"></div>
            <div className="feed-card-content">
              <div className="feed-card-icon-wrap">🐷</div>
              <h3 className="feed-card-title">Pig Feed</h3>
              <p className="feed-card-desc">Provides high metabolisable energy with controlled moisture content, offering a cost-effective energy source across grower and finisher feeds.</p>
            </div>
            <div className="feed-card-bar"><div className="feed-card-bar-fill" data-fill="80"></div></div>
          </article>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-number"><span id="stat1">0</span><span>%</span></div>
            <div className="stat-label">Purity Standard</div>
          </div>
          <div className="stat-item">
            <div className="stat-number"><span id="stat2">0</span><span>+</span></div>
            <div className="stat-label">Ration Formulations</div>
          </div>
          <div className="stat-item">
            <div className="stat-number"><span id="stat3">0</span><span>x</span></div>
            <div className="stat-label">Better FCR Efficiency</div>
          </div>
          <div className="stat-item">
            <div className="stat-number"><span id="stat4">0</span><span>%</span></div>
            <div className="stat-label">Lower Feed Cost Per Ton</div>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section id="advantage">
        <div className="advantage-inner">
          <div className="advantage-header">
            <h2 className="section-title">Magik DORB vs.<br />Standard DORB</h2>
            <p>A side-by-side comparison of technical specifications and performance in commercial feed production.</p>
          </div>

          <div className="comparison-grid">
            <div className="cmp-col-magik">
              <div>
                <h3 className="cmp-col-heading">Tested Quality Standard</h3>
                <div className="cmp-item">
                  <div className="cmp-item-icon" aria-hidden="true">💰</div>
                  <div className="cmp-item-text">
                    <div className="cmp-item-title">Optimized Unit Cost</div>
                    <div className="cmp-item-sub">Higher energy density per rupee spent, maximizing ration margin</div>
                  </div>
                </div>
                <div className="cmp-item">
                  <div className="cmp-item-icon" aria-hidden="true">⚖️</div>
                  <div className="cmp-item-text">
                    <div className="cmp-item-title">Consistent Crude Protein & Fibre</div>
                    <div className="cmp-item-sub">Controlled residual oil and low sand/silica content</div>
                  </div>
                </div>
                <div className="cmp-item">
                  <div className="cmp-item-icon" aria-hidden="true">📈</div>
                  <div className="cmp-item-text">
                    <div className="cmp-item-title">Higher Feed Digestibility</div>
                    <div className="cmp-item-sub">Drives faster weight gain and consistent daily milk output</div>
                  </div>
                </div>
                <div className="cmp-item">
                  <div className="cmp-item-icon" aria-hidden="true">🏆</div>
                  <div className="cmp-item-text">
                    <div className="cmp-item-title">Maximised Batch Yields</div>
                    <div className="cmp-item-sub">Lower pellet durability loss and predictable FCR across batches</div>
                  </div>
                </div>
              </div>
              <div className="cmp-badge">✓ Verified Grade Standard</div>
            </div>

            <div className="cmp-col-others">
              <div>
                <h3 className="cmp-col-heading">Uncertified Alternatives</h3>
                <div className="cmp-item">
                  <div className="cmp-item-icon" aria-hidden="true">💸</div>
                  <div className="cmp-item-text">
                    <div className="cmp-item-title">Variable Sourcing Costs</div>
                    <div className="cmp-item-sub">Unpredictable quality forces higher safety margins in formulation</div>
                  </div>
                </div>
                <div className="cmp-item">
                  <div className="cmp-item-icon" aria-hidden="true">⚠️</div>
                  <div className="cmp-item-text">
                    <div className="cmp-item-title">Inconsistent Nutrient Profile</div>
                    <div className="cmp-item-sub">High sand/silica variation causes gut irritation and machine wear</div>
                  </div>
                </div>
                <div className="cmp-item">
                  <div className="cmp-item-icon" aria-hidden="true">🤏</div>
                  <div className="cmp-item-text">
                    <div className="cmp-item-title">Lower Energy Density</div>
                    <div className="cmp-item-sub">Excess moisture reduces shelf life and limits growth potential</div>
                  </div>
                </div>
                <div className="cmp-item">
                  <div className="cmp-item-icon" aria-hidden="true">📉</div>
                  <div className="cmp-item-text">
                    <div className="cmp-item-title">Uncertain Production Yields</div>
                    <div className="cmp-item-sub">Poor pellet binding leads to high dust loss and feed wastage</div>
                  </div>
                </div>
              </div>
              <div className="cmp-badge">✕ Uncertified Input</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality">
        <div className="quality-inner">
          <div className="quality-text">
            <h2 className="section-title">Rigorous Quality Control</h2>
            <p>Every consignment undergoes strict laboratory testing to ensure moisture control, uniform particle size, and zero chemical adulteration.</p>
          </div>
          <div className="quality-attributes">
            <div className="quality-attr">
              <div className="quality-attr-icon icon-mesh" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#276E36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#F0F7F2" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#F0F7F2" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#F0F7F2" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#D85800" stroke="#D85800" />
                </svg>
              </div>
              <div className="quality-attr-text">
                <h4>Micro-Milled Texture</h4>
                <p>Sifted for uniform particle distribution, ensuring easy mixing and high pellet durability across all feed types</p>
              </div>
            </div>

            <div className="quality-attr">
              <div className="quality-attr-icon icon-hue" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#D85800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" fill="#FFF6E5" stroke="#D85800" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#F2994A" />
                </svg>
              </div>
              <div className="quality-attr-text">
                <h4>Light Golden Hue</h4>
                <p>Natural pale appearance confirming proper solvent extraction and freedom from overheating or spoilage</p>
              </div>
            </div>

            <div className="quality-attr">
              <div className="quality-attr-icon icon-chem" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1C4425" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 2v5.5L4.5 17.5A2 2 0 0 0 6.2 20h11.6a2 2 0 0 0 1.7-2.5L14 7.5V2" fill="#F0F7F2" />
                  <path d="M8.5 2h7" />
                  <path d="M7 14h10" stroke="#D85800" strokeWidth="2.5" />
                </svg>
              </div>
              <div className="quality-attr-text">
                <h4>Standardized Chemical Profile</h4>
                <p>Strict moisture (&lt;10%) and sand-silica limits (&lt;1.5%) for stable shelf life and reliable nutrition</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
