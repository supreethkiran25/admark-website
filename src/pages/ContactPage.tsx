
import React, { useEffect } from 'react';
import { Link } from '@/components/Link';
import { COMPANY } from '@/lib/data';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — Start a Project | AdMark Digitals';
  }, []);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <h1 className="page-hero__title">Tell us what you're building.</h1>
          <p className="page-hero__desc">
            We're based in Mysuru with teams in Bengaluru and Hyderabad. We reply within one business day.
          </p>
        </div>
      </div>

      <section className="section" aria-labelledby="contact-form-heading">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'clamp(3rem, 8vw, 8rem)', alignItems: 'start' }}>
            {/* Form */}
            <div>
              <p className="eyebrow">NEW PROJECT BRIEF</p>
              <h2 id="contact-form-heading" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-6)' }}>
                Start a project enquiry
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <aside>
              <div style={{ position: 'sticky', top: 'calc(var(--header-height) + 2rem)', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                {/* Direct contact */}
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>DIRECT CONTACT</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)',
                        fontSize: 'var(--text-base)',
                        fontWeight: 500,
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                        padding: 'var(--space-4)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        transition: 'border-color 250ms ease',
                      }}
                    >
                      <span style={{ width: '36px', height: '36px', background: '#1a1a1a', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--color-accent)' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </span>
                      <div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginBottom: '2px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                        <div>{COMPANY.email}</div>
                      </div>
                    </a>

                    <a
                      href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)',
                        fontSize: 'var(--text-base)',
                        fontWeight: 500,
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                        padding: 'var(--space-4)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      <span style={{ width: '36px', height: '36px', background: '#1a1a1a', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--color-accent)' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                      </span>
                      <div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginBottom: '2px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</div>
                        <div>{COMPANY.phone}</div>
                      </div>
                    </a>

                    <a
                      href={COMPANY.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)',
                        fontSize: 'var(--text-base)',
                        fontWeight: 500,
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                        padding: 'var(--space-4)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                      aria-label="Contact via WhatsApp — opens in new tab"
                    >
                      <span style={{ width: '36px', height: '36px', background: '#1a1a1a', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#25D366' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </span>
                      <div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginBottom: '2px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>WhatsApp</div>
                        <div>{COMPANY.phone}</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Office address */}
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>OFFICE</p>
                  <address style={{
                    fontStyle: 'normal',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}>
                    {COMPANY.address.line1},<br />
                    {COMPANY.address.line2},<br />
                    {COMPANY.address.line3}
                  </address>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-3)' }}>
                    Also: Bengaluru & Hyderabad
                  </p>
                </div>

                {/* Response note */}
                <div style={{
                  padding: 'var(--space-4)',
                  background: 'var(--color-bg-alt)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                }}>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', maxWidth: '100%' }}>
                    We reply to every enquiry. Response time is typically <strong style={{ color: 'var(--color-text)' }}>within one business day</strong>.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
