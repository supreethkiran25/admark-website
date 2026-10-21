
import React, { useEffect } from 'react';
import { Link } from '@/components/Link';
import { COMPANY } from '@/lib/data';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | AdMark Digitals';
  }, []);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Privacy Policy</span>
          </nav>
          <h1 className="page-hero__title">Privacy Policy</h1>
          <p className="page-hero__desc">
            How AdMark Digitals collects, uses, and protects your personal information.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)' }}>
              Last updated: October 2026
            </p>

            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>1. Who we are</h2>
            <p>AdMark Digitals is a digital product studio headquartered at {COMPANY.address.line1}, {COMPANY.address.line2}, {COMPANY.address.line3}. We operate the website at admarkdigitals.com.</p>

            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>2. Information we collect</h2>
            <p style={{ marginBottom: 'var(--space-3)' }}>We collect information you voluntarily provide when you:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li>Submit a project enquiry through our contact form</li>
              <li>Apply for a career opening</li>
              <li>Email or call us directly</li>
            </ul>
            <p style={{ marginTop: 'var(--space-3)' }}>This may include your name, work email address, company name, and project description. We do not collect this information passively without your knowledge.</p>

            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>3. How we use your information</h2>
            <p>We use the information you provide solely to respond to your enquiry, assess project fit, and carry out a potential engagement. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>4. Data retention</h2>
            <p>We retain enquiry information for as long as is necessary to respond to and follow up on your request, and for a reasonable period thereafter for business record-keeping purposes. You may request deletion of your data at any time by contacting us.</p>

            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>5. Cookies</h2>
            <p>This website uses only essential session cookies necessary for the website to function. We do not use third-party tracking cookies or advertising cookies.</p>

            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>6. Your rights</h2>
            <p>You have the right to access, correct, or request deletion of any personal information we hold about you. To exercise these rights, contact us at <a href={`mailto:${COMPANY.email}`} style={{ color: 'var(--color-accent)' }}>{COMPANY.email}</a>.</p>

            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>7. Contact</h2>
            <p>If you have questions about this privacy policy or how we handle your data, contact us at <a href={`mailto:${COMPANY.email}`} style={{ color: 'var(--color-accent)' }}>{COMPANY.email}</a> or at our registered office address.</p>

            <div style={{ marginTop: 'var(--space-10)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--color-border)' }}>
              <Link href="/" className="btn btn--secondary">← Back to home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
