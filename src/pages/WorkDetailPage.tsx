
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from '@/components/Link';
import { PROJECTS } from '@/lib/data';
import { CTASection } from '@/components/CTASection';

export default function ProjectPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : '';
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Case Overview | AdMark Digitals`;
    } else {
      document.title = 'Project Not Found | AdMark Digitals';
    }
  }, [project]);

  if (!project) {
    return (
      <div className="section-dossier" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <div className="container">
          <span className="section-index">ERR 404 // PROJECT NOT FOUND</span>
          <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, marginTop: '1rem', marginBottom: '1rem' }}>Project Not Found</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>The requested portfolio case could not be located in the studio archives.</p>
          <Link href="/work" className="btn-dossier btn-dossier--primary">
            <span>View All Selected Work</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    );
  }

  const related = PROJECTS.filter((p) => p.slug !== slug && p.type === project.type).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/work">Work</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <p className="eyebrow eyebrow--accent">{project.category}</p>
          <h1 className="page-hero__title">{project.headline}</h1>
          <p className="page-hero__desc">{project.description}</p>
          {project.url && (
            <div style={{ marginTop: 'var(--space-6)' }}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                aria-label={`Visit ${project.title} live — opens in new tab`}
              >
                Visit live site <span className="btn-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Project Details */}
      <section className="section" aria-labelledby="project-details">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'start' }}>
            <div>
              <p className="eyebrow">PROJECT OVERVIEW</p>
              <h2 id="project-details" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-5)' }}>
                About this project
              </h2>
              <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--color-text-secondary)', maxWidth: '60ch' }}>
                {project.description}
              </p>

              {project.quote && (
                <blockquote style={{
                  marginTop: 'var(--space-8)',
                  paddingLeft: 'var(--space-6)',
                  borderLeft: '3px solid var(--color-accent)',
                }}>
                  <p style={{ fontSize: 'var(--text-xl)', fontWeight: 600, fontStyle: 'italic', color: 'var(--color-text)', maxWidth: '100%' }}>
                    &ldquo;{project.quote}&rdquo;
                  </p>
                  {project.client && (
                    <footer style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                      — {project.client}
                    </footer>
                  )}
                </blockquote>
              )}
            </div>

            {/* Sidebar */}
            <aside style={{ padding: 'var(--space-6)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', background: 'var(--color-bg-alt)' }}>
              <dl style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                  <dt style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-1)' }}>Client</dt>
                  <dd style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>{project.client}</dd>
                </div>
                <div>
                  <dt style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-1)' }}>Industry</dt>
                  <dd style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>{project.industry}</dd>
                </div>
                <div>
                  <dt style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-1)' }}>Category</dt>
                  <dd style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>{project.category}</dd>
                </div>
                <div>
                  <dt style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>Scope of Work</dt>
                  <dd>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                      {project.scope.map((item) => (
                        <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0 }} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                {project.url && (
                  <div>
                    <dt style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-1)' }}>Live Site</dt>
                    <dd>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: 'var(--text-sm)', color: 'var(--color-accent)', fontWeight: 600 }}
                        aria-label={`Visit ${project.title} — opens in new tab`}
                      >
                        {project.url.replace(/^https?:\/\//, '')} ↗
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="section section--alt" aria-labelledby="related-projects">
          <div className="container">
            <p className="eyebrow">MORE WORK</p>
            <h2 id="related-projects" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-8)' }}>
              Related projects
            </h2>
            <div className="work-projects">
              {related.map((p) => (
                <article key={p.slug} className="work-card">
                  <div className="work-card__image">
                    <div style={{ width: '100%', height: '100%', background: 'var(--color-surface)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', opacity: 0.35 }}>
                        {p.title.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="work-card__body">
                    <p className="work-card__category">{p.category}</p>
                    <h3 className="work-card__title">{p.title}</h3>
                    <p className="work-card__desc">{p.description}</p>
                    <Link href={`/work/${p.slug}`} className="work-card__link">
                      View overview <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
