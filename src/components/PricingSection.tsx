'use client';

import React from 'react';

export function PricingSection() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pricing-sec" id="pricing" aria-label="Flexible Pricing Plans">
      <div className="pricing-sec__container">
        {/* Header */}
        <div className="pricing-sec__header">
          <div className="ref-section-pill">
            <span className="ref-section-pill__dot" />
            <span>Pricing</span>
          </div>
          <h2 className="pricing-sec__title">
            Flexible Pricing for <br />
            Every Business
          </h2>
          <p className="pricing-sec__subtitle">
            Whether you&apos;re a venture startup or looking to scale enterprise platforms,
            we have a transparent engagement model that delivers guaranteed outcomes.
          </p>
        </div>

        {/* 3 Pricing Cards (matching screenshot with white center card) */}
        <div className="pricing-cards-grid">
          {/* Card 1: Basic */}
          <div className="pricing-card pricing-card--dark">
            <div className="pricing-card__head">
              <span className="pricing-card__plan-name">Basic</span>
              <div className="pricing-card__price-row">
                <span className="pricing-card__currency">$</span>
                <span className="pricing-card__amount">0</span>
                <span className="pricing-card__period">/month</span>
              </div>
              <p className="pricing-card__desc">
                Ideal for initial architecture audits, code reviews, and technical scoping.
              </p>
            </div>

            <ul className="pricing-card__features" aria-label="Basic plan features">
              <li>
                <span className="pricing-check">✓</span> Comprehensive Architecture Audit
              </li>
              <li>
                <span className="pricing-check">✓</span> Core Web Vitals & SEO Report
              </li>
              <li>
                <span className="pricing-check">✓</span> Technology Roadmap Recommendation
              </li>
              <li>
                <span className="pricing-check">✓</span> 30-min Executive Debrief
              </li>
            </ul>

            <div className="pricing-card__action">
              <a href="#contact" onClick={scrollToContact} className="ref-btn ref-btn--outline-card">
                <span>Start Free Trial</span>
              </a>
            </div>
          </div>

          {/* Card 2: Pro (FEATURED PURE WHITE CARD!) */}
          <div className="pricing-card pricing-card--featured-white">
            <div className="pricing-card__badge-row">
              <span className="pricing-card__pill-pro">★ Pro</span>
            </div>

            <div className="pricing-card__head">
              <div className="pricing-card__price-row">
                <span className="pricing-card__currency">$</span>
                <span className="pricing-card__amount">19</span>
                <span className="pricing-card__period">/month</span>
              </div>
              <p className="pricing-card__desc">
                Full-cycle dedicated engineering team shipping Next.js, mobile, and AI workflows.
              </p>
            </div>

            <ul className="pricing-card__features" aria-label="Pro plan features">
              <li>
                <span className="pricing-check pricing-check--dark">✓</span> Full Next.js & React 19 Engineering
              </li>
              <li>
                <span className="pricing-check pricing-check--dark">✓</span> Continuous CI/CD & Cloud Deployments
              </li>
              <li>
                <span className="pricing-check pricing-check--dark">✓</span> Direct Slack Channel with Tech Leads
              </li>
              <li>
                <span className="pricing-check pricing-check--dark">✓</span> Guaranteed Sub-second Performance
              </li>
              <li>
                <span className="pricing-check pricing-check--dark">✓</span> Bi-weekly Sprint Demo Deliverables
              </li>
            </ul>

            <div className="pricing-card__action">
              <a href="#contact" onClick={scrollToContact} className="ref-btn ref-btn--solid-black">
                <span>Start Free 7-Day Trial</span>
              </a>
            </div>
          </div>

          {/* Card 3: Premium */}
          <div className="pricing-card pricing-card--dark">
            <div className="pricing-card__head">
              <span className="pricing-card__plan-name">Premium</span>
              <div className="pricing-card__price-row">
                <span className="pricing-card__currency">$</span>
                <span className="pricing-card__amount">39</span>
                <span className="pricing-card__period">/month</span>
              </div>
              <p className="pricing-card__desc">
                Custom enterprise systems, high-concurrency cloud scaling, and AI RAG pipelines.
              </p>
            </div>

            <ul className="pricing-card__features" aria-label="Premium plan features">
              <li>
                <span className="pricing-check">✓</span> Everything in Pro included
              </li>
              <li>
                <span className="pricing-check">✓</span> Custom AI Automation & RAG Systems
              </li>
              <li>
                <span className="pricing-check">✓</span> Dedicated Lead Architect & CTO Advisory
              </li>
              <li>
                <span className="pricing-check">✓</span> 99.99% Uptime SLA & 24/7 Priority Support
              </li>
              <li>
                <span className="pricing-check">✓</span> Full IP, Source Code & Data Ownership
              </li>
            </ul>

            <div className="pricing-card__action">
              <a href="#contact" onClick={scrollToContact} className="ref-btn ref-btn--outline-card">
                <span>Start Free Trial</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
