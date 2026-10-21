
import React, { useState } from 'react';

export function BentoFeaturesSection() {
  return (
    <section className="bento-sec" id="features" aria-label="Core Engineering Features">
      <div className="bento-sec__container">
        {/* Section Header */}
        <div className="bento-sec__header">
          <div className="ref-section-pill">
            <span className="ref-section-pill__dot" />
            <span>01 What we build</span>
          </div>
          <h2 className="bento-sec__title">
            Five capability pillars. <br />
            full-stack technology, not just websites.
          </h2>
          <p className="bento-sec__subtitle">
            Digital products, AI systems, data intelligence, growth strategy, and tech talent, grouped so you can find what you need without wading through a long list.
          </p>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="bento-grid">
          {/* Card 1 (Top Left): Telemetry & Metrics Dashboard */}
          <div className="bento-card bento-card--dashboard">
            <div className="bento-card__badge-row">
              <span className="bento-tag">Digital Solutions</span>
              <span className="bento-status">
                <span className="bento-status__dot" />
                Live in Production
              </span>
            </div>

            <div className="bento-dashboard-grid">
              {/* Metric Item 1 */}
              <div className="bento-metric-tile">
                <span className="bento-metric-tile__label">Web Development</span>
                <div className="bento-stars-row" aria-label="Web Development">
                  {[...Array(6)].map((_, i) => (
                    <span key={i} className="bento-star-dot" />
                  ))}
                </div>
              </div>

              {/* Metric Item 2 */}
              <div className="bento-metric-tile">
                <span className="bento-metric-tile__label">App Development</span>
                <div className="bento-stars-row" aria-label="App Development">
                  {[...Array(6)].map((_, i) => (
                    <span key={i} className="bento-star-dot" />
                  ))}
                </div>
              </div>

              {/* Metric Item 3 */}
              <div className="bento-metric-tile">
                <span className="bento-metric-tile__label">Custom Software</span>
                <div className="bento-stars-row" aria-label="Custom Software">
                  {[...Array(6)].map((_, i) => (
                    <span key={i} className="bento-star-dot" />
                  ))}
                </div>
              </div>

              {/* Metric Item 4 */}
              <div className="bento-metric-tile">
                <span className="bento-metric-tile__label">SaaS Software</span>
                <div className="bento-stars-row" aria-label="SaaS Software">
                  {[...Array(6)].map((_, i) => (
                    <span key={i} className="bento-star-dot" />
                  ))}
                </div>
              </div>
            </div>

            <div className="bento-card__bottom-meta">
              <span>99.9% Client Retention</span>
              <span>Sub-40ms Edge Latency</span>
            </div>
          </div>

          {/* Card 2 (Top Right): Interactive Line Chart */}
          <div className="bento-card bento-card--chart">
            <div className="bento-chart-container">
              {/* Interactive glowing chart */}
              <svg
                viewBox="0 0 340 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bento-chart-svg"
              >
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(229, 57, 53, 0.35)" />
                    <stop offset="100%" stopColor="rgba(229, 57, 53, 0.0)" />
                  </linearGradient>
                  <filter id="curveGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#E53935" floodOpacity="0.6" />
                  </filter>
                </defs>

                {/* Area under curve */}
                <path
                  d="M 10 130 C 60 120, 90 150, 140 100 C 190 50, 230 90, 280 40 L 330 35 L 330 180 L 10 180 Z"
                  fill="url(#chartGradient)"
                />

                {/* Smooth curve line */}
                <path
                  d="M 10 130 C 60 120, 90 150, 140 100 C 190 50, 230 90, 280 40 L 330 35"
                  stroke="#E53935"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="url(#curveGlow)"
                />

                {/* Data point glow dot */}
                <circle cx="280" cy="40" r="4" fill="#FFFFFF" />
                <circle cx="280" cy="40" r="9" fill="rgba(229, 57, 53, 0.45)" />
              </svg>

              {/* Tooltip Tags on chart (matches screenshot) */}
              <div className="bento-tooltip bento-tooltip--views">
                <span className="bento-tooltip__val">AI &amp; Models</span>
                <span className="bento-tooltip__sub">deployed</span>
              </div>

              <div className="bento-tooltip bento-tooltip--clicks">
                <span className="bento-tooltip__val">Data Intel</span>
                <span className="bento-tooltip__sub">curated</span>
              </div>

              <div className="bento-tooltip-badge">
                <span>Scale</span>
              </div>
            </div>

            <div className="bento-chart-footer">
              <span className="bento-chart-title">Business Growth &amp; Strategy</span>
              <span className="bento-chart-delta">▲ Measurable Outcomes</span>
            </div>
          </div>

          {/* Card 3 (Bottom Left): Connect with Google Search Console with Cursor */}
          <div className="bento-card bento-card--connect">
            {/* Top pill button */}
            <div className="bento-connect-top">
              <div className="bento-connect-btn">
                <span>AI &amp; Intelligent Systems</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>

            {/* Brand Logo inside spotlight */}
            <div className="bento-connect-center">
              <div className="bento-google-box">
                <span className="bento-google-text">WhatsApp Chat</span>
                <span className="bento-gsc-label">AI Agents &amp; Automation</span>
              </div>

              {/* Authentic White Mouse Pointer Cursor Hovering */}
              <div className="bento-mouse-cursor" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path
                    d="M3 3L10.07 20.97L13.59 13.59L20.97 10.07L3 3Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <p className="bento-connect-desc">
              Custom AI models, automation workflows, and WhatsApp chat agents.
            </p>
          </div>

          {/* Card 4 (Bottom Right): 3D Floating Rank Cards */}
          <div className="bento-card bento-card--rankings">
            <div className="bento-rankings-stage">
              {/* Floating Pill 1 */}
              <div className="bento-rank-pill bento-rank-pill--1">
                <span className="bento-rank-pill__name">Dedicated Developers</span>
                <span className="bento-rank-pill__tag">Vetted Tech</span>
              </div>

              {/* Floating Pill 2 */}
              <div className="bento-rank-pill bento-rank-pill--2">
                <span className="bento-rank-pill__name">Data &amp; Analytics</span>
                <span className="bento-rank-pill__tag">BI Pipelines</span>
              </div>

              {/* Floating Pill 3 */}
              <div className="bento-rank-pill bento-rank-pill--3">
                <span className="bento-rank-pill__name">QA &amp; DevOps</span>
                <span className="bento-rank-pill__tag">Production Ready</span>
              </div>
            </div>

            <div className="bento-rankings-footer">
              <span>Workforce &amp; Tech Hiring</span>
              <span>Flexible Hiring Models</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
