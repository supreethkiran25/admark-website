'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { SERVICES, PROJECTS } from '@/lib/data';
import { CTASection } from '@/components/CTASection';
import { FAQAccordion } from '@/components/FAQAccordion';

// Map service slugs to relevant project slugs
const SERVICE_PROJECTS: Record<string, string[]> = {
  'digital-solutions': ['rexu', 'rent-flow', 'dronark-aerospace', 'vivid-infrastructures'],
  'ai-intelligent-systems': ['rexu'],
  'data-analytics': [],
  'business-growth-strategy': ['vivid-infrastructures', 'naidile'],
  'workforce-tech-hiring': [],
};

export default function ServicePage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : '';
  const service = SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} — Services | AdMark Digitals`;
    } else {
      document.title = 'Service Not Found | AdMark Digitals';
    }
  }, [service]);

  if (!service) {
    return (
      <div className="section-dossier" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <div className="container">
          <span className="section-index">ERR 404 // PILLAR NOT FOUND</span>
          <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, marginTop: '1rem', marginBottom: '1rem' }}>Capability Not Found</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>The requested service capability could not be located.</p>
          <Link href="/services" className="btn-dossier btn-dossier--primary">
            <span>View All Capability Pillars</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjectSlugs = SERVICE_PROJECTS[slug] || [];
  const relatedProjects = PROJECTS.filter((p) => relatedProjectSlugs.includes(p.slug));

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.title}</span>
          </nav>
          <p className="eyebrow eyebrow--accent">{service.num}</p>
          <h1 className="page-hero__title">{service.heroHeadline}</h1>
          <p className="page-hero__desc">{service.longDescription}</p>
          <div style={{ marginTop: 'var(--space-8)', display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn--primary">
              Start a project <span className="btn-arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Core Offerings + Capabilities */}
      <section className="section" aria-labelledby={`${slug}-offerings`}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'start' }}>
            <div>
              <p className="eyebrow">CORE OFFERINGS</p>
              <h2 id={`${slug}-offerings`} style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-6)' }}>
                {service.title}
              </h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {service.subservices.map((sub, i) => (
                  <li key={sub} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <span style={{
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                      fontVariantNumeric: 'tabular-nums',
                      minWidth: '24px',
                    }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">CAPABILITIES</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {service.capabilities.map((cap) => (
                  <li key={cap} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    padding: 'var(--space-3) 0',
                    borderBottom: '1px solid var(--color-border)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text-secondary)',
                  }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0 }} aria-hidden="true" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section section--alt" aria-labelledby={`${slug}-problems`}>
        <div className="container">
          <p className="eyebrow">PROBLEMS WE SOLVE</p>
          <h2 id={`${slug}-problems`} style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-8)' }}>
            What brings teams to us
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
            {service.problems.map((problem, i) => (
              <div key={i} style={{
                padding: 'var(--space-6)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--color-bg)',
              }}>
                <span style={{
                  display: 'block',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--color-accent)',
                  marginBottom: 'var(--space-3)',
                  fontVariantNumeric: 'tabular-nums',
                }}>{String(i + 1).padStart(2, '0')}</span>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text)', maxWidth: '100%' }}>
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section" aria-labelledby={`${slug}-work`}>
          <div className="container">
            <p className="eyebrow">RELATED WORK</p>
            <h2 id={`${slug}-work`} style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-8)' }}>
              Projects in this capability
            </h2>
            <div className="work-projects">
              {relatedProjects.map((project) => (
                <article key={project.slug} className="work-card">
                  <div className="work-card__image">
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', opacity: 0.35 }}>
                        {project.title.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="work-card__body">
                    <p className="work-card__category">{project.category}</p>
                    <h3 className="work-card__title">{project.title}</h3>
                    <p className="work-card__desc">{project.description}</p>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-card__link"
                        aria-label={`View ${project.title} — opens in new tab`}
                      >
                        View project <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service FAQs */}
      {service.faqs.length > 0 && (
        <section className="section section--alt" aria-labelledby={`${slug}-faq`}>
          <div className="container">
            <p className="eyebrow">FAQ</p>
            <h2 id={`${slug}-faq`} style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-6)' }}>
              Questions about {service.shortTitle}
            </h2>
            <FAQAccordion
              items={service.faqs.map((f, i) => ({
                num: String(i + 1).padStart(2, '0'),
                question: f.q,
                answer: f.a,
              }))}
            />
          </div>
        </section>
      )}

      {/* Other Pillars */}
      <section className="section" aria-labelledby={`${slug}-other`}>
        <div className="container">
          <p className="eyebrow">OTHER CAPABILITY PILLARS</p>
          <h2 id={`${slug}-other`} style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)' }}>
            Explore the full studio
          </h2>
          <nav className="services-list" aria-label="Other services">
            {SERVICES.filter((s) => s.slug !== slug).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="service-row"
                aria-label={`${s.title} — ${s.description}`}
              >
                <span className="service-row__num" aria-hidden="true">{s.num}</span>
                <div className="service-row__content">
                  <h3 className="service-row__title">{s.title}</h3>
                  <p className="service-row__desc">{s.description}</p>
                </div>
                <span className="service-row__arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <CTASection />
    </>
  );
}
