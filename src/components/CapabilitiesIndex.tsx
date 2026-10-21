'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';

interface CapabilitiesIndexProps {
  onOpenCmd: () => void;
}

export function CapabilitiesIndex({ onOpenCmd }: CapabilitiesIndexProps) {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);

  return (
    <section className="section-dossier" id="capabilities" aria-labelledby="capabilities-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-dossier__header">
          <div className="section-dossier__tag">
            <span className="section-index">02 // CAPABILITIES</span>
            <span className="eyebrow-line" />
          </div>
          <h2 id="capabilities-title" className="section-dossier__title">
            Engineering capabilities index.
          </h2>
          <p className="section-dossier__lead">
            Select any capability to inspect verified deliverables, technical architecture stacks, and production performance benchmarks.
          </p>
        </div>

        {/* Interactive Index List */}
        <div className="capabilities-index" role="tablist" aria-label="Capabilities Index">
          {SERVICES.map((service) => {
            const isExpanded = activeId === service.id;
            return (
              <div
                key={service.id}
                className={`capability-entry ${isExpanded ? 'capability-entry--active' : ''}`}
              >
                {/* Header Row Trigger */}
                <button
                  type="button"
                  className="capability-entry__trigger"
                  onClick={() => setActiveId(isExpanded ? '' : service.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`panel-${service.id}`}
                  id={`tab-${service.id}`}
                >
                  <div className="capability-entry__left">
                    <span className="capability-num">{service.num}</span>
                    <span className="capability-title">{service.title}</span>
                  </div>

                  <div className="capability-entry__right">
                    <span className="capability-short-desc">{service.shortDesc}</span>
                    <span className="capability-toggle-icon" aria-hidden="true">
                      {isExpanded ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {/* Expanded Dossier Panel */}
                {isExpanded && (
                  <div
                    id={`panel-${service.id}`}
                    role="region"
                    aria-labelledby={`tab-${service.id}`}
                    className="capability-entry__panel"
                  >
                    <div className="capability-panel-grid">
                      {/* Left: Scope & Deliverables */}
                      <div className="capability-panel-col">
                        <span className="panel-subhead">ENGINEERING SPECIFICATION</span>
                        <p className="panel-desc">{service.fullDesc}</p>

                        <span className="panel-subhead" style={{ marginTop: '1.5rem' }}>
                          VERIFIED DELIVERABLES
                        </span>
                        <ul className="panel-deliverables">
                          {service.deliverables.map((del, i) => (
                            <li key={i} className="panel-deliverable-item">
                              <span className="del-bullet" aria-hidden="true">→</span>
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Stack Tags, Metric & Action */}
                      <div className="capability-panel-col capability-panel-col--meta">
                        <div className="panel-metric-box">
                          <span className="panel-subhead">PERFORMANCE BENCHMARK</span>
                          <span className="panel-metric-val">{service.primaryMetric}</span>
                        </div>

                        <span className="panel-subhead" style={{ marginTop: '1.25rem' }}>
                          PRODUCTION STACK
                        </span>
                        <div className="panel-stack-tags">
                          {service.techStack.map((tech) => (
                            <span key={tech} className="stack-tag">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="panel-actions">
                          <button
                            type="button"
                            onClick={onOpenCmd}
                            className="btn-dossier btn-dossier--primary btn-dossier--sm"
                          >
                            <span>Brief {service.title}</span>
                            <span className="btn-arrow" aria-hidden="true">→</span>
                          </button>
                        </div>
                      </div>
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
