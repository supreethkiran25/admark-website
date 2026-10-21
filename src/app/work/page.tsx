'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/data';
import { CTASection } from '@/components/CTASection';

export default function WorkPage() {
  const [selectedType, setSelectedType] = useState<'All' | 'Product' | 'Website'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesType =
        selectedType === 'All'
          ? true
          : selectedType === 'Product'
          ? p.type.toLowerCase().includes('saas') || p.type.toLowerCase().includes('product')
          : !p.type.toLowerCase().includes('saas');
      const matchesQuery =
        searchQuery === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.industry.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesQuery;
    });
  }, [selectedType, searchQuery]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Work</span>
          </nav>
          <h1 className="page-hero__title">What we&apos;ve worked on.</h1>
          <p className="page-hero__desc">
            A comprehensive index of digital products, web platforms, and engineering systems delivered for founders and organizations across diverse industries.
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
                  {type === 'All' ? `All (${PROJECTS.length})` : type === 'Product' ? 'SaaS & Products' : 'Web Platforms'}
                </button>
              ))}
            </div>

            <div style={{ position: 'relative', flexGrow: 1, maxWidth: '320px' }}>
              <input
                type="text"
                placeholder="Filter by keyword or industry..."
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

      {/* Projects Grid: What we've worked on & their industry */}
      <section className="section" aria-labelledby="all-work-heading">
        <div className="container">
          <p className="eyebrow">DELIVERED CLIENT WORK</p>
          <h2 id="all-work-heading" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-8)' }}>
            Systems by industry vertical ({filteredProjects.length})
          </h2>

          <div className="work-projects">
            {filteredProjects.map((project) => (
              <article key={project.slug} className="work-card">
                <div className="work-card__image">
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: '#111111',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    padding: '24px',
                    textAlign: 'center',
                  }}>
                    <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
                      {project.title}
                    </span>
                    <span style={{
                      display: 'inline-block',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      background: 'rgba(229, 36, 42, 0.08)',
                      border: '1px solid rgba(229, 36, 42, 0.25)',
                      color: '#FF6B6B',
                      fontSize: '11px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}>
                      {project.industry}
                    </span>
                  </div>
                </div>

                <div className="work-card__body">
                  <p className="work-card__category" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{project.category}</span>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '12px' }}>
                      {project.industry}
                    </span>
                  </p>
                  <h3 className="work-card__title">{project.title}</h3>
                  <p className="work-card__desc">{project.description || project.summary}</p>
                  
                  <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)', flexWrap: 'wrap' }}>
                    <Link href={`/work/${project.slug}`} className="btn btn--secondary" style={{ fontSize: 'var(--text-sm)' }}>
                      View Overview →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
