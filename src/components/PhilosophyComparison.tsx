'use client';

import React from 'react';
import { PHILOSOPHY_COMPARISONS } from '@/lib/data';

export function PhilosophyComparison() {
  return (
    <section className="section-dossier" id="philosophy" aria-labelledby="philosophy-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-dossier__header">
          <div className="section-dossier__tag">
            <span className="section-index">01 // PHILOSOPHY</span>
            <span className="eyebrow-line" />
          </div>
          <h2 id="philosophy-title" className="section-dossier__title">
            Why research-first.
          </h2>
          <p className="section-dossier__lead">
            Most digital agency engagements fail because they begin with cosmetic themes instead of operational reality. We contrast the template model with validated engineering discipline.
          </p>
        </div>

        {/* 2-Column Comparison Matrix */}
        <div className="comparison-matrix" role="region" aria-label="Agency vs Engineering Comparison">
          {/* Header Row */}
          <div className="comparison-row comparison-row--header">
            <div className="comparison-cell comparison-cell--topic">
              <span>CRITERION</span>
            </div>
            <div className="comparison-cell comparison-cell--agency">
              <span className="comparison-pill comparison-pill--negative">BOILERPLATE AGENCY WORK</span>
            </div>
            <div className="comparison-cell comparison-cell--engineering">
              <span className="comparison-pill comparison-pill--positive">VALIDATED ENGINEERING (ADMARK)</span>
            </div>
          </div>

          {/* Data Rows */}
          {PHILOSOPHY_COMPARISONS.map((item, index) => (
            <div key={item.topic} className="comparison-row">
              <div className="comparison-cell comparison-cell--topic">
                <span className="comparison-index">0{index + 1}</span>
                <span className="comparison-topic-name">{item.topic}</span>
              </div>
              <div className="comparison-cell comparison-cell--agency">
                <div className="comparison-indicator-cross" aria-hidden="true">✕</div>
                <p className="comparison-text">{item.agencyWay}</p>
              </div>
              <div className="comparison-cell comparison-cell--engineering">
                <div className="comparison-indicator-check" aria-hidden="true">✓</div>
                <p className="comparison-text">{item.engineeringWay}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
