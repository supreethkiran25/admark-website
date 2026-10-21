'use client';

import React from 'react';
import { COMPANY } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function TeamSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      className="sec-nth"
      id="about"
      aria-labelledby="team-title"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="wrap-nth">
        <span className="eyebrow-nth" data-reveal>Studio &amp; People</span>
        <h2 id="team-title" data-reveal data-reveal-delay="100">
          Small team. <em>Serious</em> craft.
        </h2>

        <p
          style={{
            maxWidth: '640px',
            color: 'var(--color-text-secondary)',
            marginTop: '20px',
            fontSize: '17px',
            lineHeight: 1.6,
          }}
          data-reveal
          data-reveal-delay="200"
        >
          We are a research-led digital studio headquartered in Mysuru with teams in Bengaluru and
          Hyderabad. We build custom software around how your business actually runs — not from
          pre-made templates or copied codebases.
        </p>

        {/* Studio stats strip */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap',
            marginTop: '40px',
            paddingBottom: '40px',
            borderBottom: '1px solid var(--color-border)',
          }}
          data-reveal
          data-reveal-delay="300"
        >
          {[
            { val: '2022', label: 'Founded' },
            { val: '3', label: 'Cities' },
            { val: '4', label: 'Co-founders' },
            { val: '5', label: 'Capability Pillars' },
            { val: '15+', label: 'Projects Shipped' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 3vw, 42px)',
                  fontWeight: 300,
                  letterSpacing: '-0.04em',
                  color: '#FFFFFF',
                  lineHeight: 1,
                }}
              >
                {stat.val}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'var(--color-text-secondary)',
                  marginTop: '6px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="team-grid-nth" style={{ marginTop: '48px' }}>
          {COMPANY.leadership.map((member, i) => (
            <div
              key={member.name}
              className="team-card-nth"
              data-reveal
              data-reveal-delay={String(i * 90 + 400)}
            >
              <div className="team-card-nth__top">
                <div className="team-avatar-nth">{member.initials}</div>
                <span
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    color: '#666',
                    textAlign: 'right',
                    lineHeight: 1.4,
                  }}
                >
                  {member.title}
                </span>
              </div>

              <div>
                <h3 className="team-card-nth__title">{member.name}</h3>
                <div className="team-card-nth__role">{member.role}</div>
                <p className="team-card-nth__bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
