'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { COMPANY } from '@/lib/data';

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms of Service | AdMark Digitals';
  }, []);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Terms of Service</span>
          </nav>
          <h1 className="page-hero__title">Terms of Service</h1>
          <p className="page-hero__desc">
            Terms and conditions for using this website and engaging AdMark Digitals services.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)' }}>
              Last updated: October 2026
            </p>

            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>1. Use of this website</h2>
            <p>This website is provided for informational purposes. By accessing it, you agree to use it lawfully and not to interfere with its operation or the experience of other users.</p>

            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>2. Intellectual property</h2>
            <p>All content on this website — including text, design, code, and imagery — is owned by or licensed to AdMark Digitals. You may not reproduce, distribute, or modify any content without written permission.</p>

            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>3. Service engagements</h2>
            <p>Project engagements with AdMark Digitals are governed by separately executed statements of work and service agreements. Submitting an enquiry through this website does not create a binding contract.</p>

            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>4. Limitation of liability</h2>
            <p>AdMark Digitals is not liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on information published here.</p>

            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>5. Third-party links</h2>
            <p>Links to external websites are provided for convenience. AdMark Digitals is not responsible for the content or practices of linked third-party sites.</p>

            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>6. Governing law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts of Mysuru, Karnataka.</p>

            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>7. Contact</h2>
            <p>For questions about these terms, contact us at <a href={`mailto:${COMPANY.email}`} style={{ color: 'var(--color-accent)' }}>{COMPANY.email}</a>.</p>

            <div style={{ marginTop: 'var(--space-10)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--color-border)' }}>
              <Link href="/" className="btn btn--secondary">← Back to home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
