"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';

const SLIDES = [
  {
    id: 'jeevan-rekha-pouches',
    title: 'Pure Health & Authentic Flavor',
    subtitle: '100% Physically Refined Rice Bran & Cold-Pressed Kachhi Ghani Pure Mustard Oil',
    desktopBanner: '/banners/products/jeevan-rekha-rice-bran-mustard-oil-banner-desktop.svg',
    mobileBanner: '/banners/products/jeevan-rekha-rice-bran-mustard-oil-banner-mobile.svg',
    alt: 'Jeevan Rekha Physically Refined Rice Bran Oil & Kachhi Ghani Pure Mustard Oil Pouches',
  },
  {
    id: 'ab-dorb-nutrition',
    title: 'High-Protein Animal Nutrition',
    subtitle: 'Magik, ABU Platinum & Premium DORB Formulated for Superior FCR in Livestock',
    desktopBanner: '/banners/products/ab-dorb-animal-feed-nutrition-banner-desktop.svg',
    mobileBanner: '/banners/products/ab-dorb-animal-feed-nutrition-banner-mobile.svg',
    alt: 'AB DORB De-Oiled Rice Bran Animal Feed Range — Magik, ABU Platinum & Premium',
  },
  {
    id: 'jeevan-rekha-family',
    title: 'Crafted for Daily Family Nutrition',
    subtitle: 'Enriched with 12,000+ PPM Gamma Oryzanol, Zero Trans-Fat & Natural Antioxidants',
    desktopBanner: '/banners/products/jeevan-rekha-family-culinary-cooking-banner-desktop.svg',
    mobileBanner: '/banners/products/jeevan-rekha-family-culinary-cooking-banner-mobile.svg',
    alt: 'Jeevan Rekha Edible Cooking Oil Family Culinary Excellence',
  },
  {
    id: 'ab-dorb-showcase',
    title: 'Zero-Waste Industrial Scale',
    subtitle: 'Commercial Feeds & High-Purity Bio-Nutrient Derivatives Recovered at Scale',
    desktopBanner: '/banners/products/ab-dorb-podium-feed-showcase-banner-desktop.svg',
    mobileBanner: '/banners/products/ab-dorb-podium-feed-showcase-banner-mobile.svg',
    alt: 'AB DORB Animal Feed Podium Display and Industrial Products',
  }
];

export default function ProductsHeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section 
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(460px, 58vh, 560px)',
        background: '#0A1A11',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="AB Udyog Product Master Page Hero Banner"
    >
      {/* ══ PERMANENT FULL-BLEED TOP GRADIENT SHADER (PERFECT NAVBAR READABILITY) ══ */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(180deg, rgba(10, 26, 17, 0.95) 0%, rgba(10, 26, 17, 0.5) 60%, transparent 100%)',
          zIndex: 20,
          pointerEvents: 'none'
        }}
      />

      {/* ══ FULL-BLEED SLIDE IMAGES (EDGE-TO-EDGE, ZERO BOXED GAPS) ══ */}
      {SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.7s ease',
              zIndex: 1,
              overflow: 'hidden'
            }}
          >
            {/* Full-Bleed Edge-to-Edge Responsive Picture */}
            <picture style={{ width: '100%', height: '100%', display: 'block' }}>
              <source media="(max-width: 768px)" srcset={slide.mobileBanner} />
              <img
                src={slide.desktopBanner}
                alt={slide.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />
            </picture>

            {/* High-Contrast Left-Side Text Shader */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(10, 26, 17, 0.90) 0%, rgba(10, 26, 17, 0.65) 45%, rgba(10, 26, 17, 0.15) 80%, transparent 100%)',
                pointerEvents: 'none'
              }}
            />
          </div>
        );
      })}

      {/* ══ IMPACTFUL EDITORIAL TEXT OVERLAY (OFFSET FOR FIXED NAVBAR) ══ */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1280px',
          height: '100%',
          margin: '0 auto',
          padding: '80px 8% 0 8%',
          display: 'flex',
          flexDirection: 'column',
          justify: 'center',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ maxWidth: '640px' }}>
          <h1 
            key={`title-${currentIndex}`}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 3.4vw, 42px)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#FFFFFF',
              margin: '0 0 12px 0',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 16px rgba(0,0,0,0.65)',
              animation: 'fadeInUp 0.6s ease both'
            }}
          >
            {SLIDES[currentIndex].title}
          </h1>

          <p 
            key={`sub-${currentIndex}`}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(13.5px, 1.05vw, 15.5px)',
              lineHeight: 1.6,
              color: '#E8BE5A',
              margin: 0,
              fontWeight: 500,
              letterSpacing: '0.02em',
              textShadow: '0 1px 10px rgba(0,0,0,0.65)',
              animation: 'fadeInUp 0.7s ease both 0.1s'
            }}
          >
            {SLIDES[currentIndex].subtitle}
          </p>
        </div>
      </div>

      {/* ══ BOTTOM LEFT: PROGRESS INDICATOR LINES ══ */}
      <div 
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '8%',
          zIndex: 25,
          display: 'flex',
          gap: '6px',
          alignItems: 'center'
        }}
      >
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Slide ${idx + 1}`}
            style={{
              width: idx === currentIndex ? '32px' : '10px',
              height: '3px',
              background: idx === currentIndex ? '#E8BE5A' : 'rgba(255, 255, 255, 0.35)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0
            }}
          />
        ))}
      </div>

      {/* ══ BOTTOM RIGHT: SLIDE NUMBERING COUNTER & ARROW NAVIGATION ══ */}
      <div 
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '8%',
          zIndex: 25,
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          background: 'rgba(10, 26, 17, 0.65)',
          backdropFilter: 'blur(6px)',
          padding: '6px 14px',
          border: '1px solid rgba(212, 175, 55, 0.3)'
        }}
      >
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '16px',
            cursor: 'pointer',
            padding: '2px 6px',
            transition: 'color 0.25s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#E8BE5A'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}
        >
          ←
        </button>
        
        <span style={{ 
          fontFamily: 'var(--font-space-mono), monospace', 
          fontSize: '11px', 
          fontWeight: 700,
          color: '#E8BE5A', 
          letterSpacing: '0.12em' 
        }}>
          0{currentIndex + 1} / 0{SLIDES.length}
        </span>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '16px',
            cursor: 'pointer',
            padding: '2px 6px',
            transition: 'color 0.25s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#E8BE5A'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}
        >
          →
        </button>
      </div>
    </section>
  );
}
