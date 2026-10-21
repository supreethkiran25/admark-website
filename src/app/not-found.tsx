'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 Not Found | AdMark Digitals';
  }, []);

  return (
    <div className="sec-nth" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="wrap-nth" style={{ textAlign: 'center' }}>
        <span className="eyebrow-nth">Error 404</span>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 76px)', marginBottom: '16px' }}>
          Endpoint Not <em>Found</em>
        </h1>
        <p style={{ maxWidth: '500px', margin: '0 auto 32px', color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6 }}>
          The requested page could not be located in the AdMark Digitals studio directory. Return to the home overview or get in touch.
        </p>
        <div style={{ display: 'inline-flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="pillb">
            <span>Return to overview</span>
            <i>→</i>
          </Link>
          <Link href="/#contact" className="pillb pillb--outline">
            <span>Start a project</span>
            <i>↗</i>
          </Link>
        </div>
      </div>
    </div>
  );
}
