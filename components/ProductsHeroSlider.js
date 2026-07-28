"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';

const SLIDES = [
  {
    id: 'ab-dorb-nutrition',
    titleLine1: 'High-Protein',
    titleLine2: 'Animal Nutrition',
    subLine1: 'Magik, ABU Platinum & Premium DORB',
    subLine2: 'Formulated for Superior FCR in Livestock',
    desktopBanner: '/banners/products/ab-dorb-animal-feed-nutrition-banner-desktop.svg',
    mobileBanner: '/banners/products/ab-dorb-animal-feed-nutrition-banner-mobile.svg',
    alt: 'AB DORB De-Oiled Rice Bran Animal Feed Range — Magik, ABU Platinum & Premium',
    textColor: '#0E2417',
    subColor: '#5C4008',
    navColor: '#0E2417',
    objectPosition: 'center 32%'
  },
  {
    id: 'jeevan-rekha-family',
    titleLine1: 'Crafted for Daily',
    titleLine2: 'Family Nutrition',
    subLine1: 'Enriched with 12,000+ PPM Gamma Oryzanol,',
    subLine2: 'Zero Trans-Fat & Natural Antioxidants',
    desktopBanner: '/banners/products/jeevan-rekha-family-culinary-cooking-banner-desktop.svg',
    mobileBanner: '/banners/products/jeevan-rekha-family-culinary-cooking-banner-mobile.svg',
    alt: 'Jeevan Rekha Edible Cooking Oil Family Culinary Excellence',
    textColor: '#0E2417',
    subColor: '#5C4008',
    navColor: '#0E2417',
    objectPosition: 'center'
  },
  {
    id: 'ab-dorb-showcase',
    titleLine1: 'Zero-Waste',
    titleLine2: 'Industrial Scale',
    subLine1: 'Commercial Feeds & High-Purity Bio-Nutrient',
    subLine2: 'Derivatives Recovered at Scale',
    desktopBanner: '/banners/products/ab-dorb-podium-feed-showcase-banner-desktop.svg',
    mobileBanner: '/banners/products/ab-dorb-podium-feed-showcase-banner-mobile.svg',
    alt: 'AB DORB Animal Feed Podium Display and Industrial Products',
    textColor: '#FFFFFF',
    subColor: '#E8BE5A',
    navColor: '#FFFFFF',
    objectPosition: 'center'
  },
  {
    id: 'jeevan-rekha-pouches',
    titleLine1: 'Pure Health &',
    titleLine2: 'Authentic Flavor',
    subLine1: '100% Physically Refined Rice Bran Oil',
    subLine2: '& Cold-Pressed Kachhi Ghani Pure Mustard Oil',
    desktopBanner: '/banners/products/jeevan-rekha-rice-bran-mustard-oil-banner-desktop.svg',
    mobileBanner: '/banners/products/jeevan-rekha-rice-bran-mustard-oil-banner-mobile.svg',
    alt: 'Jeevan Rekha Physically Refined Rice Bran Oil & Kachhi Ghani Pure Mustard Oil Pouches',
    textColor: '#0E2417',
    subColor: '#68480A',
    navColor: '#0E2417',
    objectPosition: 'center'
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

  const currentSlide = SLIDES[currentIndex];

  return (
    <section 
      className="products-hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="AB Udyog Product Master Page Hero Banner"
    >
      {/* ══ SUBTLE TOP GRADIENT SHADER FOR NAVBAR TEXT READABILITY ══ */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '95px',
          background: 'linear-gradient(180deg, rgba(8, 22, 14, 0.65) 0%, rgba(8, 22, 14, 0.18) 60%, transparent 100%)',
          zIndex: 20,
          pointerEvents: 'none'
        }}
      />

      {/* ══ 100% EDGE-TO-EDGE FULL-WIDTH SVG BANNER DISPLAY ══ */}
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
              transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.75s ease',
              zIndex: 1,
              overflow: 'hidden'
            }}
          >
            {/* 100% Full-Width Continuous SVG Image Display */}
            <picture style={{ width: '100%', height: '100%', display: 'block' }}>
              <source media="(max-width: 768px)" srcSet={slide.mobileBanner} />
              <img
                src={slide.desktopBanner}
                alt={slide.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: slide.objectPosition || 'center',
                  display: 'block'
                }}
              />
            </picture>
          </div>
        );
      })}

      {/* ══ ELEGANT UPWARD-ALIGNED LEFT TYPOGRAPHY ══ */}
      <div className={`products-hero-text-wrap ${currentSlide.textColor === '#FFFFFF' ? 'dark-theme' : ''}`}>
        <h1 
          key={`title-${currentIndex}`}
          className="products-hero-title"
          style={{ color: currentSlide.textColor }}
        >
          {currentSlide.titleLine1}
          <br />
          {currentSlide.titleLine2}
        </h1>

        <p 
          key={`sub-${currentIndex}`}
          className="products-hero-sub"
          style={{ color: currentSlide.subColor }}
        >
          {currentSlide.subLine1}
          <br />
          {currentSlide.subLine2}
        </p>
      </div>

      {/* ══ BOTTOM LEFT: PROGRESS DASHES ══ */}
      <div className="products-hero-controls-left">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Slide ${idx + 1}`}
            style={{
              width: idx === currentIndex ? '32px' : '10px',
              height: '3px',
              background: idx === currentIndex 
                ? (currentSlide.textColor === '#FFFFFF' ? '#E8BE5A' : '#0E2417')
                : (currentSlide.textColor === '#FFFFFF' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(18, 42, 28, 0.25)'),
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.35s ease',
              padding: 0
            }}
          />
        ))}
      </div>

      {/* ══ BOTTOM RIGHT: SUBTLE BORDERLESS COUNTER ══ */}
      <div className="products-hero-controls-right">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            color: currentSlide.navColor,
            fontSize: '15px',
            cursor: 'pointer',
            padding: '2px 4px',
            opacity: 0.8,
            transition: 'opacity 0.25s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
          onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}
        >
          ←
        </button>
        
        <span style={{ 
          fontFamily: 'var(--font-space-mono), monospace', 
          fontSize: '11.5px', 
          fontWeight: 700,
          color: currentSlide.navColor, 
          letterSpacing: '0.12em',
          opacity: 0.9
        }}>
          0{currentIndex + 1} / 0{SLIDES.length}
        </span>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            color: currentSlide.navColor,
            fontSize: '16px',
            cursor: 'pointer',
            padding: '2px 4px',
            opacity: 0.8,
            transition: 'opacity 0.25s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
          onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}
        >
          →
        </button>
      </div>
    </section>
  );
}
