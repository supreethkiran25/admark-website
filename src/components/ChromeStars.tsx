'use client';

import React from 'react';

export function ChromeStars() {
  return (
    <div className="chrome-stars-container" aria-hidden="true">
      {/* Ambient background glow behind stars */}
      <div className="chrome-stars-glow" />

      {/* Main Large 3D Chrome Star */}
      <div className="chrome-star chrome-star--large">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="chrome-star-svg"
        >
          <defs>
            {/* Chrome metallic linear gradients */}
            <linearGradient id="chromeLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="20%" stopColor="#E0E5EC" />
              <stop offset="45%" stopColor="#8A93A0" />
              <stop offset="70%" stopColor="#FFFFFF" />
              <stop offset="90%" stopColor="#4A5260" />
              <stop offset="100%" stopColor="#1C212A" />
            </linearGradient>

            <linearGradient id="chromeDark" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#646E7E" />
              <stop offset="60%" stopColor="#1B2028" />
              <stop offset="85%" stopColor="#8F98A5" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>

            <linearGradient id="chromeRim" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#303846" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#1A1E26" />
            </linearGradient>

            <filter id="starGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 3D Beveled 4-Point Star Facets */}
          {/* North facet - light */}
          <path
            d="M100 8 L100 100 L76 76 Z"
            fill="url(#chromeLight)"
          />
          {/* North facet - dark */}
          <path
            d="M100 8 L124 76 L100 100 Z"
            fill="url(#chromeDark)"
          />

          {/* East facet - light */}
          <path
            d="M192 100 L100 100 L124 76 Z"
            fill="url(#chromeLight)"
          />
          {/* East facet - dark */}
          <path
            d="M192 100 L124 124 L100 100 Z"
            fill="url(#chromeDark)"
          />

          {/* South facet - light */}
          <path
            d="M100 192 L100 100 L124 124 Z"
            fill="url(#chromeLight)"
          />
          {/* South facet - dark */}
          <path
            d="M100 192 L76 124 L100 100 Z"
            fill="url(#chromeDark)"
          />

          {/* West facet - light */}
          <path
            d="M8 100 L100 100 L76 124 Z"
            fill="url(#chromeLight)"
          />
          {/* West facet - dark */}
          <path
            d="M8 100 L76 76 L100 100 Z"
            fill="url(#chromeDark)"
          />

          {/* Center specular gleam highlight */}
          <circle cx="100" cy="100" r="3" fill="#FFFFFF" filter="url(#starGlow)" />
          {/* Sharp ridge highlight line */}
          <line x1="100" y1="12" x2="100" y2="188" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
          <line x1="12" y1="100" x2="188" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Secondary Medium 3D Chrome Star */}
      <div className="chrome-star chrome-star--medium">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="chrome-star-svg"
        >
          {/* Facets using same chrome gradients */}
          <path d="M100 14 L100 100 L80 80 Z" fill="url(#chromeLight)" />
          <path d="M100 14 L120 80 L100 100 Z" fill="url(#chromeDark)" />
          <path d="M186 100 L100 100 L120 80 Z" fill="url(#chromeLight)" />
          <path d="M186 100 L120 120 L100 100 Z" fill="url(#chromeDark)" />
          <path d="M100 186 L100 100 L120 120 Z" fill="url(#chromeLight)" />
          <path d="M100 186 L80 120 L100 100 Z" fill="url(#chromeDark)" />
          <path d="M14 100 L100 100 L80 120 Z" fill="url(#chromeLight)" />
          <path d="M14 100 L80 80 L100 100 Z" fill="url(#chromeDark)" />
          <circle cx="100" cy="100" r="2" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Tiny Sparkle Star */}
      <div className="chrome-star chrome-star--small">
        <svg viewBox="0 0 100 100" fill="none" className="chrome-star-svg">
          <path d="M50 5 L53 45 L95 50 L53 55 L50 95 L47 55 L5 50 L47 45 Z" fill="#FFFFFF" opacity="0.8" />
          <circle cx="50" cy="50" r="1.5" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  );
}
