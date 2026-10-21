
import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const standards = [
  {
    val: '< 800ms',
    label: 'Sub-Second Response',
    spec: 'Time to First Byte at the 95th percentile with edge caching and CDN delivery.',
  },
  {
    val: '95+',
    label: 'Lighthouse Score',
    spec: 'Guaranteed performance, accessibility, SEO, and best practices across every build.',
  },
  {
    val: '99.9%',
    label: 'Uptime SLA',
    spec: 'Multi-zone infrastructure with automated backups, health checks, and failover.',
  },
  {
    val: '100%',
    label: 'Type-Safe Code',
    spec: 'Strict TypeScript, decoupled APIs, and tested critical paths on every deployment.',
  },
];

export function TrackRecordSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      className="sec-nth"
      id="standards"
      aria-labelledby="track-record-title"
      style={{ background: 'var(--color-surface)' }}
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="wrap-nth">
        <span className="eyebrow-nth" data-reveal>Engineering Standards</span>
        <h2 id="track-record-title" data-reveal data-reveal-delay="100">
          Our bar. <em>Not negotiable.</em>
        </h2>
        <p
          data-reveal
          data-reveal-delay="200"
          style={{
            color: 'var(--color-text-secondary)',
            fontSize: 'clamp(16px, 1.3vw, 18px)',
            marginTop: '16px',
            maxWidth: '560px',
            lineHeight: 1.6,
          }}
        >
          Every project ships with these standards enforced — not aspirational metrics
          written in a proposal.
        </p>

        <div className="track-grid-nth">
          {standards.map((item, i) => (
            <div
              key={item.label}
              className="track-card-nth"
              data-reveal
              data-reveal-delay={String(i * 100 + 200)}
            >
              <div className="track-card-nth__val">{item.val}</div>
              <div>
                <h3 className="track-card-nth__label">{item.label}</h3>
                <p className="track-card-nth__spec">{item.spec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
