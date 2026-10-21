'use client';

import React, { useState, useEffect } from 'react';

interface HeroSectionProps {
  onAskSubmit?: (query: string) => void;
}

const ROTATING_PHRASES = [
  'SaaS that scales',
  'digital foundations',
  'growth engines',
  'websites that convert',
];

export function HeroSection({ onAskSubmit }: HeroSectionProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleStartProject = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onAskSubmit) {
      onAskSubmit('Project Inquiry');
    } else {
      const contact = document.getElementById('contact');
      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const work = document.getElementById('work') || document.getElementById('features');
    if (work) work.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-hero-shell">
      <section className="min-hero" id="top" aria-label="AdMark Digitals Studio">
        {/* Subtle Ethereal Ambient Lighting (Zero Clutter) */}
        <div className="min-hero__ambient" aria-hidden="true" />



        {/* Central Typographic Monument */}
        <div className="min-hero__center">
          <h1 className="min-hero__h1">
            <span className="min-hero__h1-line">We build</span>
            <span className="min-hero__h1-line min-hero__h1-line--accent">
              <em>{ROTATING_PHRASES[phraseIndex]}</em>
            </span>
            <span className="min-hero__h1-line">that grow with you.</span>
          </h1>

          <p className="min-hero__lead">
            Research-led, Design-driven, built to scale. Custom digital solutions for startups and enterprises.
          </p>

          <div className="min-hero__actions">
            <a
              href="#contact"
              onClick={handleStartProject}
              className="min-hero__btn-primary"
              aria-label="Contact AdMark Digitals"
            >
              <span>Contact us</span>
              <i>↗</i>
            </a>

            <a
              href="#work"
              onClick={handleScrollToWork}
              className="min-hero__btn-secondary"
              aria-label="View our work"
            >
              <span>View our work</span>
              <i>↓</i>
            </a>
          </div>
        </div>

        {/* Bottom Architectural Specification Strip */}
        <div className="min-hero__specs">
          <div className="min-hero__spec-col">
            <span className="min-hero__spec-num">01 / CLUTCH RATING</span>
            <span className="min-hero__spec-val">★★★★★ 4.9/5 on Clutch · 25+ reviews</span>
          </div>

          <div className="min-hero__spec-col">
            <span className="min-hero__spec-num">02 / SAAS BUILDS</span>
            <span className="min-hero__spec-val">5+ SaaS Platforms Built</span>
          </div>

          <div className="min-hero__spec-col">
            <span className="min-hero__spec-num">03 / WEBSITES</span>
            <span className="min-hero__spec-val">10+ Websites Shipped</span>
          </div>

          <div className="min-hero__spec-col">
            <span className="min-hero__spec-num">04 / RETENTION & TRACK RECORD</span>
            <span className="min-hero__spec-val">99.9% Client Retention · 2+ Years</span>
          </div>
        </div>
      </section>
    </div>
  );
}
