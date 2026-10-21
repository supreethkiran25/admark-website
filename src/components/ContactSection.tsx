'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ContactSectionProps {
  prefilledNote?: string;
}

export function ContactSection({ prefilledNote }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    service: 'Digital Solutions',
    projectDetails: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [prefilledUsed, setPrefilledUsed] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (prefilledNote && !prefilledUsed) {
      setFormData((prev) => ({
        ...prev,
        projectDetails: prefilledNote,
      }));
      setPrefilledUsed(true);
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  }, [prefilledNote, prefilledUsed]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (res.ok) {
        setSuccess(true);
        setFormData({
          fullName: '',
          workEmail: '',
          phone: '',
          company: '',
          service: 'Digital Solutions',
          projectDetails: '',
          honeypot: '',
        });
      } else {
        setErrorMsg(data?.message || 'Failed to submit enquiry. Please try again or email us directly.');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection or reach out at info@admarkdigitals.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="sec-nth" id="contact" style={{ padding: '0 0 clamp(60px, 8vw, 100px)' }} aria-labelledby="contact-title">
      <div className="contact-card-nth">
        <span className="eyebrow-nth" style={{ color: '#888888' }}>
          09 Contact
        </span>

        <h2 id="contact-title" className="contact-headline-nth">
          Tell us what <br /> <em>you&apos;re building.</em>
        </h2>

        <p className="contact-sub-nth">
          We&apos;re based in Mysuru with teams in Bengaluru and Hyderabad. Drop a line. We reply within one business day.
        </p>

        {success ? (
          <div style={{
            maxWidth: '560px',
            margin: '0 auto',
            padding: '36px',
            background: '#141414',
            border: '1px solid #292929',
            borderRadius: '24px',
            textAlign: 'center',
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: 'rgba(229, 57, 53, 0.15)',
              color: 'var(--color-accent)',
              display: 'grid',
              placeItems: 'center',
              margin: '0 auto 16px',
              fontSize: '24px',
            }}>
              ✓
            </div>
            <h3 style={{ fontSize: '24px', marginBottom: '8px', color: '#FFFFFF' }}>
              Enquiry Transmitted
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>
              Thank you for reaching out. Our team will review your requirements and follow up within one business day.
            </p>
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="pillb pillb--outline"
              style={{ marginTop: '24px' }}
            >
              Submit another note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form-nth" noValidate>
            {/* Honeypot anti-spam */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <label>
              <span>Name *</span>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>

            <label>
              <span>Email *</span>
              <input
                type="email"
                name="workEmail"
                required
                value={formData.workEmail}
                onChange={handleChange}
                placeholder="you@company.com"
                autoComplete="email"
              />
            </label>

            <label>
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 96866 58055"
                autoComplete="tel"
              />
            </label>

            <label>
              <span>Company / Organisation</span>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company or project"
                autoComplete="organization"
              />
            </label>

            <label className="full">
              <span>Requirement Scope</span>
              <select name="service" value={formData.service} onChange={handleChange}>
                <option value="Custom website">Custom website</option>
                <option value="SaaS build">SaaS build</option>
                <option value="Custom ERP">Custom ERP</option>
                <option value="E-commerce platform">E-commerce platform</option>
                <option value="Mobile application">Mobile application</option>
                <option value="Research paper">Research paper</option>
                <option value="Internship enquiry">Internship enquiry</option>
              </select>
            </label>

            <label className="full">
              <span>Project Notes *</span>
              {prefilledUsed && (
                <span className="prefilled-badge">
                  ✓ Note prefilled from your hero inquiry
                </span>
              )}
              <textarea
                ref={textareaRef}
                name="projectDetails"
                required
                rows={4}
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Tell us what you're trying to build."
              />
            </label>

            {errorMsg && (
              <div className="full" style={{ color: '#FF5252', fontSize: '14px', marginTop: '4px' }}>
                {errorMsg}
              </div>
            )}

            <div className="contact-form-bottom">
              <p className="contact-note">
                We reply within one business day.
              </p>

              <button type="submit" disabled={loading} className="pillb pillb--accent">
                <span>{loading ? 'Sending...' : 'Send message'}</span>
                <i>→</i>
              </button>
            </div>
          </form>
        )}

        {/* Direct Studio Contact Links */}
        <div className="contact-direct-strip">
          <span>
            Email:{' '}
            <a href="mailto:info@admarkdigitals.com">info@admarkdigitals.com</a>
          </span>
          <span>
            Call:{' '}
            <a href="tel:+919686658055">+91 96866 58055</a>
          </span>
          <span>
            WhatsApp:{' '}
            <a href="https://wa.me/919686658055" target="_blank" rel="noopener noreferrer">
              +91 96866 58055 ↗
            </a>
          </span>
          <span>
            Office:{' '}
            <span>Prashanth Plaza, 5th Cross, 4th Main, Saraswathipuram, Mysuru 570009, Karnataka</span>
          </span>
        </div>

        {/* Massive Italic Watermark */}
        <div className="watermark-nth" aria-hidden="true">
          admark digitals
        </div>
      </div>
    </section>
  );
}
