
import React, { useState } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote:
        "AdMark didn't sell us a website. They sold us a working hypothesis, then proved it on the page.",
      name: 'Operations Lead',
      role: 'Manufacturing Client',
      company: 'Mysuru',
      avatar: 'OL',
      stars: 5,
    },
    {
      quote:
        "Everything was perfect from the first design. The website looks great and the team's follow-up was excellent. We couldn't be happier with the results.",
      name: 'Vivid Infrastructures',
      role: 'Infrastructure Client',
      company: 'Mysore',
      avatar: 'VI',
      stars: 5,
    },
    {
      quote:
        'Professional execution with a strong understanding of our brand vision. Clean, modern, and delivered on time.',
      name: 'Naidile',
      role: 'Brand Client',
      company: 'Karnataka',
      avatar: 'NL',
      stars: 5,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testi-sec" id="testimonials" aria-label="Client Testimonials">
      <div className="testi-sec__container">
        {/* Header */}
        <div className="testi-sec__header">
          <div className="ref-section-pill">
            <span className="ref-section-pill__dot" />
            <span>06 Client notes</span>
          </div>
          <h2 className="testi-sec__title">
            What Clients Say <br />
            About Our Work
          </h2>
          <p className="testi-sec__subtitle">
            Authentic client notes from startups, enterprises, and MSMEs across nine industries.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="testi-cards-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testi-card">
              {/* Star Rating */}
              <div className="testi-card__stars">
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i} className="testi-star">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="testi-card__quote">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="testi-card__author">
                <div className="testi-avatar">{t.avatar}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-meta">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="testi-controls">
          <button
            type="button"
            onClick={handlePrev}
            className="testi-ctrl-btn"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <div className="testi-ctrl-dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`testi-dot ${i === currentIndex ? 'testi-dot--active' : ''}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleNext}
            className="testi-ctrl-btn"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
