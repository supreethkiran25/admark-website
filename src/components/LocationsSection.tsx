'use client';

import React from 'react';
import { COMPANY } from '@/lib/data';

export function LocationsSection() {
  return (
    <section className="section-dossier" id="locations" aria-labelledby="locations-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-dossier__header">
          <div className="section-dossier__tag">
            <span className="section-index">07 // PRESENCE</span>
            <span className="eyebrow-line" />
          </div>
          <h2 id="locations-title" className="section-dossier__title">
            Studio locations &amp; reach.
          </h2>
          <p className="section-dossier__lead">
            Headquartered in the historic educational hub of Mysuru, with distributed teams and active client deployments in Bengaluru and Hyderabad.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="locations-grid">
          {/* Main HQ Card */}
          <div className="location-card location-card--hq">
            <div className="location-card__header">
              <span className="location-badge location-badge--hq">HEADQUARTERS</span>
              <span className="location-coord">{COMPANY.hq.coordinates}</span>
            </div>

            <h3 className="location-city">Mysuru, Karnataka</h3>
            <p className="location-address">
              {COMPANY.hq.address}
              <br />
              {COMPANY.hq.city} {COMPANY.hq.pincode}, {COMPANY.hq.country}
            </p>

            <div className="location-meta-list">
              <div className="location-meta-item">
                <span className="location-meta-label">DIRECT INQUIRIES:</span>
                <a href={`tel:${COMPANY.phone1.replace(/\s+/g, '')}`} className="location-meta-val">
                  {COMPANY.phone1}
                </a>
              </div>
              <div className="location-meta-item">
                <span className="location-meta-label">DISPATCH EMAIL:</span>
                <a href={`mailto:${COMPANY.email}`} className="location-meta-val">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          {/* Bengaluru Branch */}
          <div className="location-card">
            <div className="location-card__header">
              <span className="location-badge">TECHNOLOGY HUB</span>
              <span className="location-coord">12.9716° N, 77.5946° E</span>
            </div>

            <h3 className="location-city">Bengaluru</h3>
            <p className="location-address">
              Karnataka, India
              <br />
              Client engineering delivery, high-performance cloud architectures, and VC-backed startup advisory.
            </p>

            <div className="location-meta-list">
              <div className="location-meta-item">
                <span className="location-meta-label">CAPABILITIES:</span>
                <span className="location-meta-val">Next.js · Flutter · Cloud &amp; DevOps</span>
              </div>
            </div>
          </div>

          {/* Hyderabad Branch */}
          <div className="location-card">
            <div className="location-card__header">
              <span className="location-badge">TECHNOLOGY HUB</span>
              <span className="location-coord">17.3850° N, 78.4867° E</span>
            </div>

            <h3 className="location-city">Hyderabad</h3>
            <p className="location-address">
              Telangana, India
              <br />
              Enterprise AI solutions, retrieval-augmented systems (RAG), and automation pipelines for MSMEs.
            </p>

            <div className="location-meta-list">
              <div className="location-meta-item">
                <span className="location-meta-label">CAPABILITIES:</span>
                <span className="location-meta-val">AI Models · RAG · Data Pipelines</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
