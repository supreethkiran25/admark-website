'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import { CTASection } from '@/components/CTASection';

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  useEffect(() => {
    document.title = 'Services — Five Capability Pillars | AdMark Digitals';
  }, []);

  const filteredServices = activeFilter === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.slug === activeFilter);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Services</span>
          </nav>
          <h1 className="page-hero__title">
            Five capability pillars.<br />
            Full-stack technology, not just websites.
          </h1>
          <p className="page-hero__desc">
            Digital products, AI systems, data intelligence, growth strategy, and tech talent — grouped so you can find what you need without wading through a long list.
          </p>

          {/* Interactive pillar filter tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              style={{
                background: activeFilter === 'all' ? '#FFFFFF' : '#141414',
                color: activeFilter === 'all' ? '#080808' : '#A0A0A0',
                border: '1px solid ' + (activeFilter === 'all' ? '#FFFFFF' : '#2A2A2A'),
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                fontSize: '0.8125rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              All Pillars ({SERVICES.length})
            </button>
            {SERVICES.map((s) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => setActiveFilter(s.slug)}
                style={{
                  background: activeFilter === s.slug ? '#FFFFFF' : '#141414',
                  color: activeFilter === s.slug ? '#080808' : '#A0A0A0',
                  border: '1px solid ' + (activeFilter === s.slug ? '#FFFFFF' : '#2A2A2A'),
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {s.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <nav className="services-list" aria-label="Services list">
            {filteredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-row"
                aria-label={`${service.title} — ${service.description}`}
              >
                <span className="service-row__num" aria-hidden="true">{service.num}</span>
                <div className="service-row__content">
                  <h2 className="service-row__title">{service.title}</h2>
                  <p className="service-row__desc">{service.longDescription}</p>
                  <div className="service-row__tags">
                    {service.subservices.map((sub) => (
                      <span key={sub} className="service-tag">{sub}</span>
                    ))}
                  </div>
                </div>
                <span className="service-row__arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <CTASection />
    </>
  );
}
