'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CAREERS } from '@/lib/data';

export default function CareersPage() {
  const [filterType, setFilterType] = useState<string>('all');

  useEffect(() => {
    document.title = 'Careers & Internships — Build Alongside Us | AdMark Digitals';
  }, []);

  const filteredRoles = filterType === 'all'
    ? CAREERS
    : CAREERS.filter((c) => c.title.toLowerCase().includes(filterType.toLowerCase()));

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Careers</span>
          </nav>
          <h1 className="page-hero__title">Build alongside us.</h1>
          <p className="page-hero__desc">
            Internships open across four disciplines. AdMark is a research-led studio. Interns work on real client and product work — not slide decks.
          </p>

          {/* Interactive filter pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <button
              type="button"
              onClick={() => setFilterType('all')}
              style={{
                background: filterType === 'all' ? '#FFFFFF' : '#141414',
                color: filterType === 'all' ? '#080808' : '#A0A0A0',
                border: '1px solid ' + (filterType === 'all' ? '#FFFFFF' : '#2A2A2A'),
                padding: '0.45rem 1rem',
                borderRadius: '4px',
                fontSize: '0.8125rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              All Openings ({CAREERS.length})
            </button>
            {['Web Development', 'UI/UX', 'Business Development', 'Marketing'].map((disc) => (
              <button
                key={disc}
                type="button"
                onClick={() => setFilterType(disc)}
                style={{
                  background: filterType === disc ? '#FFFFFF' : '#141414',
                  color: filterType === disc ? '#080808' : '#A0A0A0',
                  border: '1px solid ' + (filterType === disc ? '#FFFFFF' : '#2A2A2A'),
                  padding: '0.45rem 1rem',
                  borderRadius: '4px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {disc}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Openings */}
      <section className="section" aria-labelledby="openings-heading">
        <div className="container">
          <p className="eyebrow">CURRENT OPENINGS</p>
          <h2 id="openings-heading" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-8)' }}>
            {filteredRoles.length} opening{filteredRoles.length === 1 ? '' : 's'} available · Mysuru, Bengaluru & remote
          </h2>

          <div className="careers-grid">
            {filteredRoles.map((role) => (
              <article key={role.num} className="career-card">
                <div className="career-card__header">
                  <div>
                    <span className="career-card__num">{role.num}</span>
                    <h2 className="career-card__title">{role.title}</h2>
                  </div>
                </div>
                <div className="career-card__meta">
                  <span className="career-badge">{role.location}</span>
                  <span className="career-badge">{role.arrangement}</span>
                  <span className="career-badge">{role.type}</span>
                </div>
                <p className="career-card__desc">{role.description}</p>
                <div className="career-card__footer">
                  <Link
                    href={role.applyUrl}
                    className="btn btn--primary"
                    aria-label={`Apply for ${role.title} position`}
                  >
                    Apply <span className="btn-arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="section section--alt" aria-labelledby="how-to-apply">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 6rem)' }}>
            <div>
              <p className="eyebrow">HOW TO APPLY</p>
              <h2 id="how-to-apply" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-5)' }}>
                Tell us which role you're applying for
              </h2>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                Send your portfolio or CV with the role title in the subject line. Include a brief note on why you want to work at AdMark specifically — not a generic cover letter.
              </p>
              <p style={{ marginBottom: 'var(--space-6)' }}>
                We review applications on a rolling basis and respond to every submission.
              </p>
              <Link href="/contact" className="btn btn--primary">
                Apply via contact form <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
            <div>
              <p className="eyebrow">WHAT TO EXPECT</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
                {[
                  'Real client and product work from day one',
                  'Direct mentorship from senior engineers and designers',
                  'Exposure to the full product development cycle',
                  'Research-led approach to every project',
                  'Flexible remote working arrangements',
                  'A genuine reference and portfolio pieces at the end',
                ].map((item) => (
                  <li key={item} style={{
                    display: 'flex',
                    gap: 'var(--space-3)',
                    alignItems: 'flex-start',
                    padding: 'var(--space-3) 0',
                    borderBottom: '1px solid var(--color-border)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text-secondary)',
                  }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
