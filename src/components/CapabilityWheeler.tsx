'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';

export function CapabilityWheeler() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const activeService = SERVICES[activeIndex] || SERVICES[0];
  const total = SERVICES.length;
  const anglePerSegment = 360 / total;
  const currentAngle = -(activeIndex * anglePerSegment);

  const handleNext = () => {
    setIsSpinning(true);
    setActiveIndex((prev) => (prev + 1) % total);
    setTimeout(() => setIsSpinning(false), 450);
  };

  const handlePrev = () => {
    setIsSpinning(true);
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setTimeout(() => setIsSpinning(false), 450);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = e.clientX - startX.current;
    if (diff > 40) {
      handlePrev();
    } else if (diff < -40) {
      handleNext();
    }
  };

  return (
    <section className="cap-wheeler-sec" id="wheeler" aria-labelledby="wheeler-heading">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
          <div className="ref-section-pill" style={{ margin: '0 auto 16px' }}>
            <span className="ref-section-pill__dot" />
            <span>Interactive Capability Wheeler</span>
          </div>
          <h2 id="wheeler-heading" style={{ fontSize: 'clamp(28px, 4vw, 46px)', letterSpacing: '-0.03em', color: '#FFFFFF' }}>
            Rotate the wheel. <br />
            <span style={{ color: 'var(--color-accent)' }}>Architected for real production load.</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', marginTop: '12px' }}>
            Spin the rotary selector to inspect our five specialized capability pillars, production deliverables, and verification metrics.
          </p>
        </div>

        {/* Wheeler Stage */}
        <div
          className="cap-wheeler"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onWheel={(e) => {
            // Optional smooth wheel interaction
            if (Math.abs(e.deltaY) > 60) {
              if (e.deltaY > 0) handleNext();
              else handlePrev();
            }
          }}
        >
          {/* Circular Rotary Dial */}
          <div className="cap-wheeler__dial-wrap">
            <div
              className={`cap-wheeler__dial ${isSpinning ? 'is-spinning' : ''}`}
              style={{ transform: `rotate(${currentAngle}deg)` }}
            >
              {SERVICES.map((s, idx) => {
                const segAngle = idx * anglePerSegment;
                const isCurrent = idx === activeIndex;
                return (
                  <button
                    key={s.id}
                    type="button"
                    className={`cap-wheeler__node ${isCurrent ? 'is-active' : ''}`}
                    style={{
                      transform: `rotate(${segAngle}deg) translate(140px) rotate(-${segAngle}deg)`,
                    }}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Select ${s.title}`}
                  >
                    <span className="cap-wheeler__node-num">{s.num}</span>
                    <span className="cap-wheeler__node-label">{s.shortTitle}</span>
                  </button>
                );
              })}

              {/* Center Core Wheel Hub */}
              <div className="cap-wheeler__center-hub">
                <span className="cap-wheeler__center-accent" />
                <span className="cap-wheeler__center-text">ADMARK</span>
                <span className="cap-wheeler__center-sub">DIAL</span>
              </div>
            </div>

            {/* Stepper Controls */}
            <div className="cap-wheeler__nav-controls">
              <button
                type="button"
                onClick={handlePrev}
                className="cap-wheeler__nav-btn"
                aria-label="Previous capability"
              >
                ←
              </button>
              <span className="cap-wheeler__nav-indicator">
                {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="cap-wheeler__nav-btn"
                aria-label="Next capability"
              >
                →
              </button>
            </div>
          </div>

          {/* Active Detail Showcase Card */}
          <div className="cap-wheeler__card">
            <div className="cap-wheeler__card-header">
              <span className="cap-wheeler__card-badge">Pillar {activeService.num}</span>
              <span className="cap-wheeler__card-metric">{activeService.primaryMetric}</span>
            </div>

            <h3 className="cap-wheeler__card-title">{activeService.title}</h3>
            <p className="cap-wheeler__card-desc">{activeService.fullDesc}</p>

            {/* Deliverables Checklist */}
            <div className="cap-wheeler__card-deliverables">
              <p className="cap-wheeler__card-sec-label">Core Deliverables</p>
              <div className="cap-wheeler__card-grid">
                {activeService.deliverables.slice(0, 4).map((del, dIdx) => (
                  <div key={dIdx} className="cap-wheeler__card-item">
                    <span className="cap-wheeler__card-check">✓</span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills & Overview Link */}
            <div className="cap-wheeler__card-footer">
              <div className="cap-wheeler__tags">
                {activeService.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="cap-wheeler__tag">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/services/${activeService.slug}`}
                className="btn btn--secondary"
                style={{ fontSize: '13px', padding: '8px 18px', whiteSpace: 'nowrap' }}
              >
                Explore Pillar Overview →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
