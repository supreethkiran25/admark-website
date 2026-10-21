
import React from 'react';
import { CASE_STUDIES } from '@/lib/data';

export function SelectedWorkGrid() {
  return (
    <section className="section-dossier" id="work" aria-labelledby="work-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-dossier__header">
          <div className="section-dossier__tag">
            <span className="section-index">05 // SELECTED WORK</span>
            <span className="eyebrow-line" />
          </div>
          <h2 id="work-title" className="section-dossier__title">
            Case study dossiers.
          </h2>
          <p className="section-dossier__lead">
            Every engagement follows a documented trajectory from operational problem audit to measured business outcome.
          </p>
        </div>

        {/* Work Grid */}
        <div className="work-dossier-grid">
          {CASE_STUDIES.map((cs) => (
            <article key={cs.id} className="case-dossier-card">
              {/* Card Meta Bar */}
              <div className="case-dossier-meta">
                <div className="case-dossier-tag-group">
                  <span className="case-dossier-tag">{cs.tag}</span>
                  {cs.isPlaceholder && (
                    <span className="case-placeholder-badge">
                      PLACEHOLDER ENTRY // PRODUCTION REPLACEMENT READY
                    </span>
                  )}
                </div>
                <span className="case-dossier-year">{cs.year}</span>
              </div>

              {/* Title & Client */}
              <h3 className="case-dossier-title">{cs.title}</h3>
              <p className="case-dossier-client">{cs.client}</p>

              {/* 4-Part Structure: Problem -> Research -> Build -> Outcome */}
              <div className="case-breakdown-grid">
                <div className="case-step">
                  <span className="case-step-label">01 // PROBLEM</span>
                  <p className="case-step-body">{cs.problem}</p>
                </div>

                <div className="case-step">
                  <span className="case-step-label">02 // RESEARCH</span>
                  <p className="case-step-body">{cs.research}</p>
                </div>

                <div className="case-step">
                  <span className="case-step-label">03 // BUILD</span>
                  <p className="case-step-body">{cs.build}</p>
                </div>

                <div className="case-step case-step--outcome">
                  <span className="case-step-label">04 // OUTCOME</span>
                  <p className="case-step-body">{cs.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
