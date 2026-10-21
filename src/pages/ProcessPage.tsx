
import React, { useState, useEffect } from 'react';
import { Link } from '@/components/Link';
import { PROCESS_STEPS } from '@/lib/data';
import { CTASection } from '@/components/CTASection';

const STAGE_DETAILS = [
  'Every engagement begins with an honest audit. We review your business model, identify the actual market problem you\'re solving, and map user intent against your current digital reality — before writing a single line of code or designing a single screen.',
  'We examine what your competitors are doing, where they\'re succeeding and failing, and what user behaviour tells us about your segment. We run a technical feasibility study to ensure the solution we\'re designing can actually be built within your timeline and budget.',
  'Based on the research, we produce wireframes, define the information architecture, and lock the technology stack. Conversion logic is built into structure at this stage — not as an afterthought.',
  'We engineer in focused sprints against fixed milestones. Version control is non-negotiable. Every sprint produces reviewable, deployable output — no black-box development cycles.',
  'Before any release, we run performance audits, security checks, accessibility reviews, and end-to-end functional testing. We don\'t ship until the quality bar is met.',
  'Deployment is the beginning, not the end. We monitor infrastructure post-launch, respond to early production issues, and scale resources as real traffic demands.',
];

export default function ProcessPage() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Our Process — From Research to Launch | AdMark Digitals';
  }, []);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Process</span>
          </nav>
          <h1 className="page-hero__title">From research to launch.</h1>
          <p className="page-hero__desc">
            Six stages, same every time. No surprise scope. You always know what phase we're in and what comes next.
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <section className="section section--dark" aria-labelledby="process-heading">
        <div className="container">
          <p className="eyebrow eyebrow--light">THE METHODOLOGY</p>
          <h2 id="process-heading" style={{ color: 'white', marginBottom: 'var(--space-2)' }}>
            How every engagement runs
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: 'var(--space-10)', maxWidth: '55ch' }}>
            We use the same six-phase framework across all projects — whether it's a two-week marketing site or a sixteen-week ERP build. The depth of each phase scales with scope. The sequence never changes.
          </p>

          <ol className="process-list">
            {PROCESS_STEPS.map((step, i) => {
              const isSelected = activeStage === i;
              return (
                <li
                  key={step.num}
                  className="process-item"
                  onClick={() => setActiveStage(isSelected ? null : i)}
                  style={{
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                    borderLeft: isSelected ? '2px solid var(--color-accent)' : undefined,
                    paddingLeft: isSelected ? 'var(--space-4)' : undefined,
                  }}
                >
                  <span className="process-item__num">{step.num}</span>
                  <div>
                    <h2 className="process-item__title">{step.title}</h2>
                    <p className="process-item__desc">{step.desc}</p>
                    <p className="process-item__desc" style={{ marginTop: 'var(--space-3)', color: isSelected ? '#FFFFFF' : undefined }}>
                      {STAGE_DETAILS[i]}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* What this means for you */}
      <section className="section" aria-labelledby="process-promise">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 6rem)' }}>
            <div>
              <p className="eyebrow">WHAT THIS MEANS FOR YOU</p>
              <h2 id="process-promise" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-5)' }}>
                No surprises. No disappearing acts.
              </h2>
              <p>
                Many agencies deliver the final product and move on. We maintain a working relationship through every phase — keeping you informed at each milestone, flagging risks before they become problems, and involving you in decisions that affect your outcome.
              </p>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {[
                  { title: 'Fixed milestone reviews', desc: 'You review and approve before we advance. No scope drift.' },
                  { title: 'Transparent timelines', desc: 'You receive realistic delivery estimates before we begin.' },
                  { title: 'Direct team access', desc: 'You communicate with the engineers and designers doing the work.' },
                  { title: 'Post-launch monitoring', desc: 'We watch the infrastructure and respond to issues after deployment.' },
                ].map((item) => (
                  <div key={item.title} style={{
                    padding: 'var(--space-5)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                  }}>
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>{item.title}</h3>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
