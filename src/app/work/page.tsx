'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/data';
import { CTASection } from '@/components/CTASection';

export default function WorkPage() {
  const [selectedType, setSelectedType] = useState<'All' | 'Product' | 'Website'>('All');
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    document.title = 'Our Work — Client Projects & Systems | AdMark Digitals';
  }, []);

  const featuredProject = PROJECTS.find((p) => p.featured);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesType = selectedType === 'All' ? true : p.type === selectedType;
      const matchesQuery = searchQuery === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.industry.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesQuery;
    });
  }, [selectedType, searchQuery]);

  const products = filteredProjects.filter((p) => p.type === 'Product');
  const websites = filteredProjects.filter((p) => p.type === 'Website');

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Work</span>
          </nav>
          <h1 className="page-hero__title">Built by AdMark.</h1>
          <p className="page-hero__desc">
            Software products we ship for real operations, and websites we designed for founders, MSMEs, and organisations across India.
          </p>

          {/* Interactive Filter Bar */}
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'inline-flex', background: '#121212', padding: '4px', borderRadius: '6px', border: '1px solid #222222' }}>
              {(['All', 'Product', 'Website'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  style={{
                    padding: '0.45rem 1rem',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: selectedType === type ? '#FFFFFF' : 'transparent',
                    color: selectedType === type ? '#080808' : '#888888',
                  }}
                >
                  {type === 'All' ? `All (${PROJECTS.length})` : type === 'Product' ? 'Products & SaaS' : 'Websites'}
                </button>
              ))}
            </div>

            <div style={{ position: 'relative', flexGrow: 1, maxWidth: '320px' }}>
              <input
                type="text"
                placeholder="Filter by keyword or stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem 0.75rem 0.5rem 2rem',
                  fontSize: '0.8125rem',
                  borderRadius: '6px',
                  background: '#121212',
                  border: '1px solid #262626',
                  color: '#FFFFFF',
                  outline: 'none',
                }}
              />
              <span style={{ position: 'absolute', left: '0.65rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.4, fontSize: '0.75rem' }}>
                🔍
              </span>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '0.65rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured (only shown when All is active and no search) */}
      {selectedType === 'All' && !searchQuery && featuredProject && (
        <section className="section" aria-labelledby="work-featured-heading">
          <div className="container">
            <p className="eyebrow">FEATURED PROJECT</p>
            <article className="work-card work-card--featured" style={{ marginTop: 'var(--space-6)' }}>
              <div className="work-card__image">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #111111 0%, #1f1f1f 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}>
                  <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
                    <div style={{ fontSize: '4rem', fontWeight: 900, letterSpacing: '-0.05em', marginBottom: '0.5rem' }}>REXU</div>
                    <div style={{
                      fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em',
                      color: '#E5242A', textTransform: 'uppercase',
                    }}>
                      Safety · SaaS · B2B & B2C
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-card__body">
                <div>
                  <p className="work-card__category">{featuredProject.category}</p>
                  <h2 className="work-card__title" id="work-featured-heading">{featuredProject.headline}</h2>
                  <p className="work-card__desc">{featuredProject.description}</p>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
                  <a
                    href={featuredProject.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                    aria-label="View REXU project — opens in new tab"
                  >
                    View project <span className="btn-arrow" aria-hidden="true">↗</span>
                  </a>
                  <Link href={`/work/${featuredProject.slug}`} className="btn btn--secondary">
                    Case overview
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Products */}
      {(selectedType === 'All' || selectedType === 'Product') && products.length > 0 && (
        <section className="section section--alt" aria-labelledby="products-heading">
          <div className="container">
            <p className="eyebrow">PRODUCTS & PLATFORMS</p>
            <h2 id="products-heading" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-8)' }}>
              Software products we architect and ship ({products.length})
            </h2>
            <div className="work-projects">
              {products.map((project) => (
                <article key={project.slug} className="work-card">
                  <div className="work-card__image">
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: '#111111',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <span style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white', letterSpacing: '-0.03em' }}>
                        {project.title}
                      </span>
                    </div>
                  </div>
                  <div className="work-card__body">
                    <p className="work-card__category">{project.category}</p>
                    <h3 className="work-card__title">{project.headline}</h3>
                    <p className="work-card__desc">{project.description}</p>
                    <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)', flexWrap: 'wrap' }}>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-card__link"
                          aria-label={`View ${project.title} — opens in new tab`}
                        >
                          View live <span aria-hidden="true">→</span>
                        </a>
                      )}
                      <Link href={`/work/${project.slug}`} className="btn btn--ghost" style={{ fontSize: 'var(--text-sm)' }}>
                        Overview
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Websites */}
      {(selectedType === 'All' || selectedType === 'Website') && websites.length > 0 && (
        <section className="section" aria-labelledby="websites-heading">
          <div className="container">
            <p className="eyebrow">WEBSITES & BRAND PLATFORMS</p>
            <h2 id="websites-heading" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-8)' }}>
              Client systems delivered across industries ({websites.length})
            </h2>
            <div className="work-projects">
              {websites.map((project) => (
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
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}>
                      <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', opacity: 0.35 }}>
                        {project.title.slice(0, 2).toUpperCase()}
                      </span>
                      <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {project.industry}
                      </span>
                    </div>
                  </div>
                  <div className="work-card__body">
                    <p className="work-card__category">{project.category}</p>
                    <h3 className="work-card__title">{project.title}</h3>
                    {project.quote && (
                      <p className="work-card__desc" style={{ fontStyle: 'italic' }}>
                        &ldquo;{project.quote}&rdquo;
                      </p>
                    )}
                    <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)', flexWrap: 'wrap' }}>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-card__link"
                          aria-label={`View ${project.title} project — opens in new tab`}
                        >
                          View project <span aria-hidden="true">→</span>
                        </a>
                      )}
                      <Link href={`/work/${project.slug}`} className="btn btn--ghost" style={{ fontSize: 'var(--text-sm)' }}>
                        Overview
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredProjects.length === 0 && (
        <section className="section" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <div className="container">
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem' }}>
              No projects found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => { setSelectedType('All'); setSearchQuery(''); }}
              style={{ marginTop: '1rem', background: '#FFFFFF', color: '#080808', border: 'none', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, cursor: 'pointer' }}
            >
              Reset Filters
            </button>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
