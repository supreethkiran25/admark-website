
import React from 'react';
import { COMPANY } from '@/lib/data';

export function LeadershipSection() {
  return (
    <section className="section-dossier" id="leadership" aria-labelledby="leadership-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-dossier__header">
          <div className="section-dossier__tag">
            <span className="section-index">06 // LEADERSHIP</span>
            <span className="eyebrow-line" />
          </div>
          <h2 id="leadership-title" className="section-dossier__title">
            Executive leadership.
          </h2>
          <p className="section-dossier__lead">
            The studio is led by multidisciplinary practitioners actively steering client engagements across strategy, operations, engineering, and capital allocation.
          </p>
        </div>

        {/* 4-Column Editorial Leadership Grid */}
        <div className="leadership-grid">
          {COMPANY.leadership.map((leader) => (
            <div key={leader.name} className="leader-card">
              {/* Initials Placeholder Badge */}
              <div className="leader-avatar-wrap">
                <div className="leader-avatar-initials" aria-hidden="true">
                  <span>{leader.initials}</span>
                </div>
                <span className="leader-role-badge">{leader.title}</span>
              </div>

              {/* Name & Role */}
              <div className="leader-info">
                <h3 className="leader-name">{leader.name}</h3>
                <span className="leader-full-role">{leader.role}</span>
                <p className="leader-bio">{leader.bio}</p>
              </div>

              {/* Verified Governance Badge */}
              <div className="leader-footer">
                <span className="leader-status-indicator" />
                <span className="leader-status-text">ACTIVE STUDIO LEAD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
