
import React, { useState } from 'react';
import { METHODOLOGY_STAGES } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function ProcessSection() {
  const [activeStage, setActiveStage] = useState<number | null>(0);
  const sectionRef = useScrollReveal();

  return (
    <section
      className="sec-nth"
      id="process"
      aria-labelledby="process-title"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="wrap-nth">
        <div className="ref-section-pill" data-reveal>
          <span className="ref-section-pill__dot" />
          <span>02 How we work</span>
        </div>
        <h2 id="process-title" data-reveal data-reveal-delay="100">
          From research to launch. <br /> Six stages, <em>same every time.</em>
        </h2>
        <p
          data-reveal
          data-reveal-delay="200"
          style={{
            color: 'var(--color-text-secondary)',
            maxWidth: '520px',
            fontSize: 'clamp(15px, 1.25vw, 17px)',
            lineHeight: 1.6,
            marginTop: '16px',
            marginBottom: '0',
          }}
        >
          No surprise scope. You always know what phase we&apos;re in and what comes next.
        </p>

        <div className="process-list-nth" role="list">
          {METHODOLOGY_STAGES.map((stage, index) => {
            const isActive = activeStage === index;
            return (
              <div
                key={stage.num}
                className={`process-item-nth ${isActive ? 'active' : ''}`}
                onClick={() => setActiveStage(isActive ? null : index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStage(isActive ? null : index);
                  }
                }}
                aria-expanded={isActive}
              >
                <div className="process-item-nth__head">
                  <div className="process-item-nth__left">
                    <span className="process-item-nth__num">{stage.num}</span>
                    <h3 className="process-item-nth__title">{stage.name}</h3>
                  </div>
                  <div className="process-item-nth__right">
                    <span className="process-item-nth__dur">{stage.duration}</span>
                    <span className="process-item-nth__toggle" aria-hidden="true">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                </div>

                {isActive && (
                  <div className="process-item-nth__body">
                    <p className="process-item-nth__desc">{stage.description}</p>
                    {stage.activities && stage.activities.length > 0 && (
                      <div className="process-item-nth__activities">
                        {stage.activities.map((activity, actIdx) => (
                          <div key={actIdx} className="process-item-nth__activity">
                            <span className="process-item-nth__check">✓</span>
                            <span>{activity}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="process-item-nth__deliverable">
                      <strong style={{ color: '#E53935' }}>Deliverable:</strong>
                      <span>{stage.deliverable}</span>
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
