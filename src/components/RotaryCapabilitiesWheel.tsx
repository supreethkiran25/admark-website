'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';

export function RotaryCapabilitiesWheel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);

  const totalSegments = SERVICES.length;
  const anglePerSegment = 360 / totalSegments; // 72 deg

  const handleSelectSegment = (index: number) => {
    // Calculate shortest angular path
    const currentSegment = activeIndex;
    let diff = index - currentSegment;
    if (diff > totalSegments / 2) diff -= totalSegments;
    if (diff < -totalSegments / 2) diff += totalSegments;

    setRotationAngle((prev) => prev - diff * anglePerSegment);
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const nextIdx = (activeIndex - 1 + totalSegments) % totalSegments;
    handleSelectSegment(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % totalSegments;
    handleSelectSegment(nextIdx);
  };

  const activeService = SERVICES[activeIndex];

  return (
    <section
      className="sec-nth rotary-wheeler-section"
      id="capabilities-wheel"
      aria-labelledby="wheeler-section-title"
    >
      <div className="wrap-nth">
        {/* Section Pill */}
        <div className="ref-section-pill" data-reveal>
          <span className="ref-section-pill__dot" />
          <span>03 Rotary Capabilities Wheeler</span>
        </div>

        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
          <h2 id="wheeler-section-title" data-reveal data-reveal-delay="100">
            Engineered for scale. <br />
            <em>Rotated by design.</em>
          </h2>
          <p
            data-reveal
            data-reveal-delay="200"
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: 'clamp(15px, 1.25vw, 17px)',
              lineHeight: 1.6,
              marginTop: '16px',
            }}
          >
            Interact with our studio rotary wheeler to inspect the five architectural capability pillars we deploy for startups and enterprises.
          </p>
        </div>

        {/* Interactive Wheeler Grid */}
        <div className="rotary-wheeler-stage" data-reveal data-reveal-delay="300">
          {/* LEFT: Physical Tactile Rotary Wheel */}
          <div className="rotary-wheel-column">
            <div className="rotary-wheel-chassis">
              {/* Outer Graduation Tick Ring */}
              <div className="rotary-ticks-ring" aria-hidden="true" />

              {/* The Spinning Core Wheel Disc */}
              <div
                className="rotary-wheel-disc"
                style={{
                  transform: `rotate(${rotationAngle}deg)`,
                }}
              >
                {SERVICES.map((service, idx) => {
                  const segmentAngle = idx * anglePerSegment;
                  const isCurrent = activeIndex === idx;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      className={`rotary-spoke ${isCurrent ? 'is-active' : ''}`}
                      style={{
                        transform: `rotate(${segmentAngle}deg) translateY(-130px)`,
                      }}
                      onClick={() => handleSelectSegment(idx)}
                      aria-label={`Select ${service.title}`}
                      aria-pressed={isCurrent}
                    >
                      <span
                        className="rotary-spoke__badge"
                        style={{
                          transform: `rotate(${-segmentAngle - rotationAngle}deg)`,
                        }}
                      >
                        <span className="rotary-spoke__num">{service.num}</span>
                        <span className="rotary-spoke__title">{service.shortTitle || service.title}</span>
                      </span>
                    </button>
                  );
                })}

                {/* Inner Center Hub */}
                <div className="rotary-wheel-center-hub">
                  <div className="rotary-hub-ring">
                    <span className="rotary-hub-dot" />
                    <span className="rotary-hub-icon">⚙</span>
                  </div>
                </div>
              </div>

              {/* Pointer Indicator Needle */}
              <div className="rotary-wheel-pointer" aria-hidden="true">
                <span className="rotary-pointer-triangle" />
              </div>
            </div>

            {/* Tactile Rotary Controls */}
            <div className="rotary-controls-bar">
              <button
                type="button"
                onClick={handlePrev}
                className="rotary-ctrl-btn"
                aria-label="Rotate Previous Capability"
              >
                ← Prev Pillar
              </button>
              <div className="rotary-step-dots">
                {SERVICES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectSegment(idx)}
                    className={`rotary-dot ${activeIndex === idx ? 'active' : ''}`}
                    aria-label={`Jump to capability ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="rotary-ctrl-btn"
                aria-label="Rotate Next Capability"
              >
                Next Pillar →
              </button>
            </div>
          </div>

          {/* RIGHT: Active Capability Dossier Card */}
          <div className="rotary-dossier-column">
            <div className="rotary-dossier-card">
              <div className="rotary-dossier-header">
                <span className="rotary-dossier-num">{activeService.num}</span>
                <div>
                  <span className="rotary-dossier-sub">{activeService.shortTitle || 'Core Engineering Pillar'}</span>
                  <h3 className="rotary-dossier-title">{activeService.title}</h3>
                </div>
              </div>

              <p className="rotary-dossier-desc">
                {activeService.fullDesc || activeService.shortDesc}
              </p>

              {/* Deliverables Checklist */}
              <div className="rotary-dossier-deliverables">
                <h4 className="rotary-deliverables-title">Verified Deliverables:</h4>
                <ul className="rotary-deliverables-list">
                  {activeService.deliverables.slice(0, 3).map((item, dIdx) => (
                    <li key={dIdx} className="rotary-deliverable-item">
                      <span className="rotary-check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metric & CTA Footer */}
              <div className="rotary-dossier-footer">
                <div className="rotary-metric-badge">
                  <span className="rotary-metric-label">Benchmark SLA</span>
                  <strong className="rotary-metric-val">{activeService.primaryMetric}</strong>
                </div>

                <Link
                  href={`/services/${activeService.slug}`}
                  className="rotary-dossier-cta"
                >
                  <span>Explore Architecture</span>
                  <i>↗</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
