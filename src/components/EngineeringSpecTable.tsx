'use client';

import React from 'react';
import { ENGINEERING_STANDARDS } from '@/lib/data';

export function EngineeringSpecTable() {
  return (
    <section className="section-dossier" id="standards" aria-labelledby="standards-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-dossier__header">
          <div className="section-dossier__tag">
            <span className="section-index">04 // STANDARDS</span>
            <span className="eyebrow-line" />
          </div>
          <h2 id="standards-title" className="section-dossier__title">
            Engineering standards spec sheet.
          </h2>
          <p className="section-dossier__lead">
            Every codebase we author is audited against non-negotiable performance, accessibility, security, and uptime thresholds prior to release.
          </p>
        </div>

        {/* Spec Sheet Table */}
        <div className="spec-table-container" role="region" aria-label="Engineering Specifications">
          <div className="spec-table-header">
            <span className="spec-table-title">SPECIFICATION PROTOCOL // VERIFIED AT BUILD TIME</span>
            <span className="spec-table-status">4 / 4 STANDARDS ENFORCED</span>
          </div>

          <table className="spec-table">
            <thead>
              <tr>
                <th scope="col" style={{ width: '22%' }}>CATEGORY</th>
                <th scope="col" style={{ width: '20%' }}>TARGET BENCHMARK</th>
                <th scope="col" style={{ width: '38%' }}>SPECIFICATION THRESHOLD</th>
                <th scope="col" style={{ width: '20%' }}>VERIFICATION SUITE</th>
              </tr>
            </thead>
            <tbody>
              {ENGINEERING_STANDARDS.map((std) => (
                <tr key={std.category}>
                  <td className="spec-td-category">
                    <span className="spec-cat-bullet" aria-hidden="true" />
                    <strong>{std.category}</strong>
                  </td>
                  <td className="spec-td-metric">
                    <span className="spec-metric-pill">{std.metric}</span>
                  </td>
                  <td className="spec-td-spec">
                    <p>{std.spec}</p>
                  </td>
                  <td className="spec-td-verification">
                    <span className="spec-verify-text">{std.verificationMethod}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
