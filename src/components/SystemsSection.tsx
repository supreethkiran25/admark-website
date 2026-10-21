'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function SystemsSection() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const sectionRef = useScrollReveal();

  const pillars = [
    SERVICES.find((s) => s.slug === 'digital-solutions') || SERVICES[0],
    SERVICES.find((s) => s.slug === 'ai-intelligent-systems') || SERVICES[1],
    SERVICES.find((s) => s.slug === 'data-analytics') || SERVICES[2],
    SERVICES.find((s) => s.slug === 'business-growth-strategy') || SERVICES[3],
    SERVICES.find((s) => s.slug === 'workforce-tech-hiring') || SERVICES[4],
  ].filter(Boolean);

  const toggleRow = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug);
  };

  return (
    <section
      className="sec-nth"
      id="services"
      aria-labelledby="systems-title"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="wrap-nth">
        <span className="eyebrow-nth" data-reveal data-reveal-delay="0">
          Systems &amp; Capabilities
        </span>
        <h2 id="systems-title" data-reveal data-reveal-delay="100">
          Everything you need to <em>run</em> and grow
        </h2>

        <div className="systems-list-nth" role="list">
          {pillars.map((service, index) => {
            const isExpanded = expandedSlug === service.slug;
            const num = String(index + 1).padStart(2, '0');

            return (
              <div
                key={service.slug}
                className="system-row-nth"
                onClick={() => toggleRow(service.slug)}
                role="listitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleRow(service.slug);
                  }
                }}
                aria-expanded={isExpanded}
                data-reveal
                data-reveal-delay={String(index * 80)}
              >
                <div className="system-row-nth__main">
                  <span className="system-row-nth__num">{num}</span>
                  <h3 className="system-row-nth__title">{service.title}</h3>
                  <p className="system-row-nth__desc">{service.longDescription || service.description}</p>
                  <span className="system-row-nth__arrow" aria-hidden="true">
                    {isExpanded ? '↓' : '↗'}
                  </span>
                </div>

                {isExpanded && (
                  <div className="system-row-nth__details" onClick={(e) => e.stopPropagation()}>
                    <div>
                      <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', color: '#A1A1A1', textTransform: 'uppercase', marginBottom: '10px' }}>
                        Core Capabilities
                      </p>
                      <div className="system-row-nth__tags">
                        {service.subservices.map((sub) => (
                          <span key={sub} className="system-tag-pill">
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="pillb pillb--outline"
                        style={{ fontSize: '13px', padding: '4px 6px 4px 16px' }}
                      >
                        <span>View capability pillar</span>
                        <i style={{ width: '26px', height: '26px', fontSize: '12px' }}>↗</i>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
