'use client';

import { useState } from 'react';

interface FAQItem {
  num: string;
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-list" role="list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const id = `faq-${i}`;
        const panelId = `faq-panel-${i}`;

        return (
          <div
            key={i}
            className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
            role="listitem"
          >
            <button
              id={id}
              className="faq-trigger"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="faq-trigger__num" aria-hidden="true">{item.num}</span>
              <span className="faq-trigger__question">{item.question}</span>
              <span className="faq-trigger__icon" aria-hidden="true">+</span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={id}
              className={`faq-answer${isOpen ? ' faq-answer--open' : ''}`}
            >
              <div className="faq-answer__inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
