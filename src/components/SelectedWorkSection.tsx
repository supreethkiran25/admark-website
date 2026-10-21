
import React from 'react';
import { Link } from '@/components/Link';
import { CASE_STUDIES } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function SelectedWorkSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      className="sec-nth"
      id="work"
      aria-labelledby="work-title"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="wrap-nth">
        <div className="ref-section-pill" data-reveal>
          <span className="ref-section-pill__dot" />
          <span>03 What We&apos;ve Worked On</span>
        </div>
        <h2 id="work-title" data-reveal data-reveal-delay="100">
          What we&apos;ve worked on. <br />
          <em>Systems delivered across industries.</em>
        </h2>
        <p
          data-reveal
          data-reveal-delay="200"
          style={{
            color: 'var(--color-text-secondary)',
            maxWidth: '560px',
            fontSize: 'clamp(15px, 1.25vw, 17px)',
            lineHeight: 1.6,
            marginTop: '16px',
            marginBottom: '36px',
          }}
        >
          Production software and web platforms engineered for businesses and founders across key sector verticals.
        </p>

        {/* Clean Work Table Header */}
        <div className="work-table-header" data-reveal data-reveal-delay="250">
          <span className="work-th-name">What We&apos;ve Worked On</span>
          <span className="work-th-ind">Industry</span>
          <span className="work-th-sum">What We Built</span>
          <span className="work-th-link" aria-hidden="true" />
        </div>

        {/* Project Showcase Rows: What we've worked on & their industry */}
        <div className="work-rows-nth">
          {CASE_STUDIES.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="work-row-nth"
              aria-label={`View ${project.title} (${project.industry})`}
              data-reveal
              data-reveal-delay={String(i * 60 + 300)}
            >
              <div className="work-row-nth__name">
                {project.title}
              </div>
              <div className="work-row-nth__cat">
                <span className="work-row-nth__pill">{project.industry}</span>
              </div>
              <div className="work-row-nth__summary">{project.summary || project.headline}</div>
              <div className="work-row-nth__link" aria-hidden="true">↗</div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '36px', textAlign: 'center' }} data-reveal data-reveal-delay="500">
          <Link href="/work" className="pillb pillb--outline">
            <span>View all projects &amp; overviews</span>
            <i>→</i>
          </Link>
        </div>
      </div>
    </section>
  );
}
