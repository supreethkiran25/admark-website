'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY } from '@/lib/data';

interface CTASectionProps {
  headline?: string;
  sub?: string;
}

export function CTASection({
  headline = 'Have a project in mind?',
  sub = 'Let\'s talk about what you need and how we can help. We review your requirements and reply within one business day.',
}: CTASectionProps) {
  return (
    <section className="sec-nth" style={{ paddingTop: '40px' }} aria-labelledby="cta-comp-heading">
      <div className="contact-card-nth" style={{ padding: 'clamp(50px, 7vw, 90px) 4vw' }}>
        <span className="eyebrow-nth" style={{ color: '#888888' }}>
          Ready to build?
        </span>

        <h2 id="cta-comp-heading" style={{ fontSize: 'clamp(32px, 5vw, 68px)', marginBottom: '16px' }}>
          {headline}
        </h2>

        <p style={{ maxWidth: '560px', margin: '0 auto 36px', color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6 }}>
          {sub}
        </p>

        <div style={{ display: 'inline-flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/contact" className="pillb pillb--accent">
            <span>Start a project</span>
            <i>→</i>
          </Link>

          <a href={`mailto:${COMPANY.email}`} className="pillb pillb--outline">
            <span>Email us direct</span>
            <i>↗</i>
          </a>
        </div>

        <div style={{ marginTop: '36px', fontSize: '13px', color: '#777777' }}>
          Direct enquiries: <a href={`mailto:${COMPANY.email}`} style={{ color: '#F5F5F5' }}>{COMPANY.email}</a> · <a href={`tel:${COMPANY.phone1.replace(/\s+/g, '')}`} style={{ color: '#F5F5F5' }}>{COMPANY.phone1}</a>
        </div>
      </div>
    </section>
  );
}
