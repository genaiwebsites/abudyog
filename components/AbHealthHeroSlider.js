"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';

const SLIDES = [
  {
    id: 'ab-health-range',
    titleLine1: 'Pure Nourishment For',
    titleLine2: 'Every Indian Kitchen',
    subLine1: 'Heart-smart physically refined Rice Bran & light Soyabean Oil —',
    subLine2: 'delivering uncompromised taste, natural purity, and everyday family wellness.',
    desktopBanner: '/banners/products/ab-health-edible-oils-rice-bran-soyabean-oil-hero-banner-desktop.jpg',
    mobileBanner: '/banners/products/ab-health-edible-oils-rice-bran-soyabean-oil-hero-banner-mobile.jpg',
    alt: 'AB Health Edible Oils Range — Physically Refined Rice Bran Oil and Refined Soyabean Oil',
    textColor: '#122A1C',
    subColor: '#2C332E',
    navColor: '#122A1C'
  },
  {
    id: 'ab-health-rice-bran',
    titleLine1: 'Heart-Smart Cooking',
    titleLine2: 'Rich in Natural Oryzanol',
    subLine1: '100% physically refined with high smoke point and zero chemical processing —',
    subLine2: 'active cholesterol defense crafted for healthy, vibrant families.',
    desktopBanner: '/banners/products/ab-health-physically-refined-rice-bran-oil-hero-banner-desktop.jpg',
    mobileBanner: '/banners/products/ab-health-physically-refined-rice-bran-oil-hero-banner-mobile.jpg',
    alt: 'AB Health Physically Refined Rice Bran Oil 15L Tin — Heart Smart Cooking',
    textColor: '#122A1C',
    subColor: '#2C332E',
    navColor: '#122A1C'
  },
  {
    id: 'ab-health-soyabean',
    titleLine1: 'Light, Pure & Fortified',
    titleLine2: 'For Crisp Daily Frying',
    subLine1: 'Fortified with Vitamins A & D, Omega-3 & Omega-6 essential fatty acids —',
    subLine2: 'light texture and neutral aroma for golden, wholesome everyday meals.',
    desktopBanner: '/banners/products/ab-health-refined-soyabean-oil-hero-banner-desktop.jpg',
    mobileBanner: '/banners/products/ab-health-refined-soyabean-oil-hero-banner-mobile.jpg',
    alt: 'AB Health Refined Soyabean Oil 1L Pouch — Light & Fortified Daily Cooking',
    textColor: '#122A1C',
    subColor: '#2C332E',
    navColor: '#122A1C'
  }
];

export default function AbHealthHeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const currentSlide = SLIDES[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      className="ab-health-hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="AB Health Hero Banner Carousel"
    >
      {/* ══ SLIDE IMAGES ══ */}
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
            <picture style={{ width: '100%', height: '100%', display: 'block' }}>
              <source media="(max-width: 768px)" srcSet={slide.mobileBanner} />
              <img
                className="ab-health-banner-img"
                src={slide.desktopBanner}
                alt={slide.alt}
              />
            </picture>
          </div>
        );
      })}

      {/* ══ LEFT-ALIGNED CLEAN TYPOGRAPHY ══ */}
      <div className="ab-health-hero-text-wrap">
        <h1
          key={`title-${currentIndex}`}
          className="ab-health-hero-title"
          style={{ color: currentSlide.textColor }}
        >
          {currentSlide.titleLine1}
          <br />
          {currentSlide.titleLine2}
        </h1>

        <p
          key={`sub-${currentIndex}`}
          className="ab-health-hero-sub"
          style={{ color: currentSlide.subColor }}
        >
          {currentSlide.subLine1}
          <br />
          {currentSlide.subLine2}
        </p>
      </div>

      {/* ══ UNIFIED BOTTOM-LEFT NAVIGATION BAR (NO BACKGROUND BOX) ══ */}
      <div
        className="ab-health-hero-controls-left"
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          padding: 0
        }}
      >
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
              style={{
                width: idx === currentIndex ? '32px' : '10px',
                height: '3px',
                background: idx === currentIndex ? '#122A1C' : 'rgba(18, 42, 28, 0.25)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.35s ease',
                padding: 0
              }}
            />
          ))}
        </div>

        <span style={{ width: '1px', height: '14px', background: 'rgba(18, 42, 28, 0.25)', margin: '0 6px' }} />

        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              color: currentSlide.navColor,
              fontSize: '15px',
              cursor: 'pointer',
              padding: '2px 4px',
              opacity: 0.85,
              transition: 'opacity 0.25s ease'
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
          >
            ←
          </button>

          <span
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: '11px',
              fontWeight: 700,
              color: currentSlide.navColor,
              letterSpacing: '0.12em',
              opacity: 0.9
            }}
          >
            0{currentIndex + 1} / 0{SLIDES.length}
          </span>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              color: currentSlide.navColor,
              fontSize: '15px',
              cursor: 'pointer',
              padding: '2px 4px',
              opacity: 0.85,
              transition: 'opacity 0.25s ease'
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
