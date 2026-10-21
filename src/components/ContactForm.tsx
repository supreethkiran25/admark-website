'use client';

import { useState } from 'react';
import { SERVICES, COMPANY } from '@/lib/data';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  fullName: string;
  workEmail: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  projectDetails: string;
  privacyAck: boolean;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  service?: string;
  projectDetails?: string;
  privacyAck?: string;
}

const BUDGET_OPTIONS = [
  'Under ₹1 lakh',
  '₹1–3 lakhs',
  '₹3–7 lakhs',
  '₹7–15 lakhs',
  '₹15–30 lakhs',
  'Over ₹30 lakhs',
  'Not sure yet',
];

const TIMELINE_OPTIONS = [
  'As soon as possible',
  'Within 1 month',
  '1–3 months',
  '3–6 months',
  'Flexible',
];

const initialForm: FormData = {
  fullName: '',
  workEmail: '',
  company: '',
  service: '',
  budget: '',
  timeline: '',
  projectDetails: '',
  privacyAck: false,
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = 'Your name is required.';
  if (!data.workEmail.trim()) {
    errors.workEmail = 'Your work email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.workEmail)) {
    errors.workEmail = 'Please enter a valid email address.';
  }
  if (!data.service) errors.service = 'Please select a service or project category.';
  if (!data.projectDetails.trim()) {
    errors.projectDetails = 'Please describe your project briefly.';
  } else if (data.projectDetails.trim().length < 20) {
    errors.projectDetails = 'Please provide a bit more detail (at least 20 characters).';
  }
  if (!data.privacyAck) errors.privacyAck = 'Please acknowledge the privacy notice to submit.';
  return errors;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormState>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent double submission
    if (status === 'submitting') return;

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      el?.focus();
      return;
    }

    setStatus('submitting');
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Server error');
      }

      setStatus('success');
      setFormData(initialForm);
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-status form-status--success" role="status" aria-live="polite">
        <strong>Thanks for reaching out.</strong> Your project enquiry has been submitted successfully. We'll reply within one business day.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
      noValidate
      aria-label="Project enquiry form"
    >
      {status === 'error' && (
        <div className="form-status form-status--error" role="alert" aria-live="assertive">
          Something went wrong. Please try again, or email us directly at{' '}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
        </div>
      )}

      {/* Name + Email */}
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="field-fullName">
            Full name <span className="required" aria-label="required">*</span>
          </label>
          <input
            id="field-fullName"
            name="fullName"
            type="text"
            className={`form-input${errors.fullName ? ' error' : ''}`}
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'error-fullName' : undefined}
            disabled={status === 'submitting'}
          />
          {errors.fullName && (
            <span id="error-fullName" className="form-error" role="alert">{errors.fullName}</span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="field-workEmail">
            Work email <span className="required" aria-label="required">*</span>
          </label>
          <input
            id="field-workEmail"
            name="workEmail"
            type="email"
            className={`form-input${errors.workEmail ? ' error' : ''}`}
            value={formData.workEmail}
            onChange={handleChange}
            placeholder="you@company.com"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.workEmail}
            aria-describedby={errors.workEmail ? 'error-workEmail' : undefined}
            disabled={status === 'submitting'}
          />
          {errors.workEmail && (
            <span id="error-workEmail" className="form-error" role="alert">{errors.workEmail}</span>
          )}
        </div>
      </div>

      {/* Company + Service */}
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="field-company">Company <span style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}>(optional)</span></label>
          <input
            id="field-company"
            name="company"
            type="text"
            className="form-input"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company or startup name"
            autoComplete="organization"
            disabled={status === 'submitting'}
          />
        </div>

        <div className="form-field">
          <label htmlFor="field-service">
            Service category <span className="required" aria-label="required">*</span>
          </label>
          <select
            id="field-service"
            name="service"
            className={`form-select${errors.service ? ' error' : ''}`}
            value={formData.service}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'error-service' : undefined}
            disabled={status === 'submitting'}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>{s.num} — {s.title}</option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
          {errors.service && (
            <span id="error-service" className="form-error" role="alert">{errors.service}</span>
          )}
        </div>
      </div>

      {/* Budget + Timeline */}
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="field-budget">Budget range <span style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}>(optional)</span></label>
          <select
            id="field-budget"
            name="budget"
            className="form-select"
            value={formData.budget}
            onChange={handleChange}
            disabled={status === 'submitting'}
          >
            <option value="">Select a budget range</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="field-timeline">Project timeline <span style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}>(optional)</span></label>
          <select
            id="field-timeline"
            name="timeline"
            className="form-select"
            value={formData.timeline}
            onChange={handleChange}
            disabled={status === 'submitting'}
          >
            <option value="">Select a timeline</option>
            {TIMELINE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Project details */}
      <div className="form-field">
        <label htmlFor="field-projectDetails">
          Project details <span className="required" aria-label="required">*</span>
        </label>
        <textarea
          id="field-projectDetails"
          name="projectDetails"
          className={`form-textarea${errors.projectDetails ? ' error' : ''}`}
          value={formData.projectDetails}
          onChange={handleChange}
          rows={5}
          placeholder="Describe what you're building or the problem you're solving. The more context you give, the better we can assess fit."
          aria-required="true"
          aria-invalid={!!errors.projectDetails}
          aria-describedby={errors.projectDetails ? 'error-projectDetails' : undefined}
          disabled={status === 'submitting'}
        />
        {errors.projectDetails && (
          <span id="error-projectDetails" className="form-error" role="alert">{errors.projectDetails}</span>
        )}
      </div>

      {/* Privacy */}
      <div className="form-field">
        <label className="form-checkbox">
          <input
            id="field-privacyAck"
            name="privacyAck"
            type="checkbox"
            checked={formData.privacyAck}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.privacyAck}
            aria-describedby={errors.privacyAck ? 'error-privacyAck' : undefined}
            disabled={status === 'submitting'}
          />
          <span>
            I acknowledge that AdMark Digitals will process my contact information to respond to this enquiry, as described in the{' '}
            <a href="/privacy-policy" style={{ color: 'var(--color-accent)' }}>Privacy Policy</a>.
          </span>
        </label>
        {errors.privacyAck && (
          <span id="error-privacyAck" className="form-error" role="alert">{errors.privacyAck}</span>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="btn btn--primary"
          disabled={status === 'submitting'}
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>Submitting…</>
          ) : (
            <>Send enquiry <span className="btn-arrow" aria-hidden="true">↗</span></>
          )}
        </button>
      </div>
    </form>
  );
}
