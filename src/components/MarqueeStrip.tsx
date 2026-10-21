'use client';

import React from 'react';

const ITEMS = [
  'Product Engineering',
  'Mobile Development',
  'AI Automation',
  'Cloud Infrastructure',
  'UX Design',
  'Research-Led Delivery',
  'Next.js · Flutter · AWS',
  'Mysuru · Bengaluru · Hyderabad',
  'Since 2022',
  'Production-Grade Code',
];

export function MarqueeStrip() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {/* Duplicate items for seamless loop */}
        <div className="marquee-items">
          {ITEMS.map((item) => (
            <span key={item} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
        <div className="marquee-items" aria-hidden="true">
          {ITEMS.map((item) => (
            <span key={`dup-${item}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
