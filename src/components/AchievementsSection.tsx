
import React from 'react';

export function AchievementsSection() {
  return (
    <section className="achieve-sec" id="results" aria-label="Proven Achievements">
      <div className="achieve-sec__container">
        {/* Left Column: Heading and Description */}
        <div className="achieve-sec__left">
          <div className="ref-section-pill">
            <span className="ref-section-pill__dot" />
            <span>04 Sectors Served</span>
          </div>

          <h2 className="achieve-sec__title">
            Versatile by design. <br />
            Industry-agnostic by architecture.
          </h2>

          <p className="achieve-sec__subtitle">
            From ERP and SaaS to e-commerce and mobile, we ship production infrastructure for startups and MSMEs across nine industries.
          </p>

          <div className="achieve-sec__stats-summary">
            <div className="achieve-mini-stat">
              <span className="achieve-mini-stat__num">99.9%</span>
              <span className="achieve-mini-stat__label">Client Retention</span>
            </div>
            <div className="achieve-mini-stat">
              <span className="achieve-mini-stat__num">2+</span>
              <span className="achieve-mini-stat__label">Years Innovation</span>
            </div>
            <div className="achieve-mini-stat">
              <span className="achieve-mini-stat__num">4.9/5</span>
              <span className="achieve-mini-stat__label">Clutch Rating</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Angled Floating Stat Cards (matches screenshot) */}
        <div className="achieve-sec__right">
          <div className="achieve-cards-stage">
            {/* Tile 1: 5+ SaaS Platforms Built */}
            <div className="achieve-tile achieve-tile--1">
              <div className="achieve-tile__icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div className="achieve-tile__value">5+</div>
              <div className="achieve-tile__label">SaaS Platforms Built</div>
            </div>

            {/* Tile 2: 10+ Websites Shipped */}
            <div className="achieve-tile achieve-tile--2">
              <div className="achieve-tile__icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="achieve-tile__value">10+</div>
              <div className="achieve-tile__label">Websites Shipped</div>
            </div>

            {/* Tile 3: 99.9% Retention */}
            <div className="achieve-tile achieve-tile--3">
              <div className="achieve-tile__icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div className="achieve-tile__value">99.9%</div>
              <div className="achieve-tile__label">Client Retention</div>
            </div>

            {/* Tile 4: 25+ Reviews on Clutch */}
            <div className="achieve-tile achieve-tile--4">
              <div className="achieve-tile__icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="achieve-tile__value">25+</div>
              <div className="achieve-tile__label">Client Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
