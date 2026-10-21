'use client';

import React, { useState } from 'react';
import { METHODOLOGY_STAGES } from '@/lib/data';

export function MethodologyTimeline() {
  const [selectedStageIdx, setSelectedStageIdx] = useState<number>(0);
  const activeStage = METHODOLOGY_STAGES[selectedStageIdx];

  return (
    <section className="section-dossier" id="methodology" aria-labelledby="methodology-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-dossier__header">
          <div className="section-dossier__tag">
            <span className="section-index">03 // METHODOLOGY</span>
            <span className="eyebrow-line" />
          </div>
          <h2 id="methodology-title" className="section-dossier__title">
            The 6-stage delivery lifecycle.
          </h2>
          <p className="section-dossier__lead">
            Every engagement progresses through staged gates. No engineering begins until architecture is formally specified, and no release deploys without passing automated verification.
          </p>
        </div>

        {/* Timeline Navigation Strip */}
        <div className="timeline-nav" role="tablist" aria-label="Methodology Stages">
          {METHODOLOGY_STAGES.map((stage, idx) => {
            const isCurrent = selectedStageIdx === idx;
            return (
              <button
                key={stage.num}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                aria-controls="timeline-stage-detail"
                id={`stage-tab-${stage.num}`}
                onClick={() => setSelectedStageIdx(idx)}
                className={`timeline-step-btn ${isCurrent ? 'timeline-step-btn--active' : ''}`}
              >
                <div className="timeline-step-num">{stage.num}</div>
                <div className="timeline-step-info">
                  <span className="timeline-step-name">{stage.name}</span>
                  <span className="timeline-step-duration">{stage.duration}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Dossier */}
        <div
          id="timeline-stage-detail"
          role="tabpanel"
          aria-labelledby={`stage-tab-${activeStage.num}`}
          className="timeline-detail-card"
        >
          <div className="timeline-detail-header">
            <div className="timeline-detail-title-group">
              <span className="timeline-gate-badge">PHASE GATE {activeStage.num} {'//'} {activeStage.duration}</span>
              <h3 className="timeline-detail-name">{activeStage.name}</h3>
            </div>
            <div className="timeline-progress-pill">
              STAGE {activeStage.num} OF 06
            </div>
          </div>

          <p className="timeline-detail-desc">{activeStage.description}</p>

          <div className="timeline-detail-grid">
            {/* Core Activities */}
            <div className="timeline-detail-col">
              <span className="timeline-subhead">CORE ACTIVITIES &amp; VERIFICATION</span>
              <ul className="timeline-activities-list">
                {activeStage.activities.map((act, i) => (
                  <li key={i} className="timeline-activity-item">
                    <span className="activity-arrow" aria-hidden="true">↳</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hard Deliverable Gate */}
            <div className="timeline-detail-col timeline-detail-col--deliverable">
              <div className="deliverable-box">
                <span className="deliverable-label">MANDATORY GATE DELIVERABLE</span>
                <p className="deliverable-name">{activeStage.deliverable}</p>
                <div className="deliverable-metric-row">
                  <span className="deliverable-metric-label">ACCEPTANCE THRESHOLD:</span>
                  <span className="deliverable-metric-val">{activeStage.metric}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
