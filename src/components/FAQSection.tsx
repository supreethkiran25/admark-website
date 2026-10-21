'use client';

import React, { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: 'How long does a typical website project take?',
      a: 'A conversion-focused marketing site lands in 3 to 5 weeks. A custom SaaS or ERP build runs 8 to 16 weeks depending on scope, integrations, and the depth of research required.',
    },
    {
      q: 'Do you build custom ERP systems from scratch?',
      a: 'Yes. We architect bespoke ERP and internal tooling: inventory, logistics, billing, dashboards, designed around your specific operational workflow, not a templated SaaS shell.',
    },
    {
      q: 'Is SEO included in every build?',
      a: 'Every project ships with technical SEO baked into the architecture: semantic markup, structured data, Core Web Vitals tuning, sitemaps and metadata. Content and ongoing SEO operations are scoped separately.',
    },
    {
      q: 'Do you offer ongoing support after launch?',
      a: 'Yes. We retain most clients on monthly or quarterly maintenance agreements covering performance monitoring, security patches, infrastructure scaling and iterative feature work.',
    },
    {
      q: 'Custom build vs pre-built: which one is right for me?',
      a: 'If you need speed-to-market and your requirements are conventional, pre-built is faster and lighter on budget. If you need unique UX, proprietary logic or long-term scalability, custom always wins on TCO.',
    },
    {
      q: 'Where are you based and do you work remotely?',
      a: 'Headquartered in Saraswathipuram, Mysuru, with active teams in Bangalore and Hyderabad. We work with clients across India and internationally, fully remote-first.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-ref-sec" id="faq" aria-label="Frequently Asked Questions">
      <div className="faq-ref-sec__container">
        {/* Left Column: Heading & Description */}
        <div className="faq-ref-sec__left">
          <div className="ref-section-pill">
            <span className="ref-section-pill__dot" />
            <span>07 FAQ</span>
          </div>

          <h2 className="faq-ref-sec__title">
            Questions we&apos;ve answered <br />
            a hundred times.
          </h2>

          <p className="faq-ref-sec__subtitle">
            No surprise scope. You always know what to expect from our research-led process.
          </p>

          <div className="faq-ref-sec__help-box">
            <span>Still have questions?</span>
            <a href="#contact" className="faq-ref-sec__help-link">
              Talk directly with our team →
            </a>
          </div>
        </div>

        {/* Right Column: Sleek Accordion Cards */}
        <div className="faq-ref-sec__right">
          <div className="faq-ref-accordion">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`faq-ref-item ${isOpen ? 'faq-ref-item--open' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="faq-ref-trigger"
                    aria-expanded={isOpen}
                  >
                    <span className="faq-ref-question">{faq.q}</span>
                    <span className="faq-ref-icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-ref-content">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
