'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * SpinningWheelerBadge — Floating interactive circular wheeler stamp.
 * Features rotating circular typography ('• ADMARK DIGITALS • RESEARCH • DESIGN • SCALE • EST 2026 •')
 * that rotates continuously and accelerates with real-time scroll velocity and user interaction.
 */
export function SpinningWheelerBadge() {
  const rotationRef = useRef(0);
  const badgeRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const handleCustomScroll = (e: Event) => {
      const customEvent = e as CustomEvent<{ velocity: number }>;
      if (customEvent.detail && typeof customEvent.detail.velocity === 'number') {
        velocityRef.current += customEvent.detail.velocity * 0.12;
      }
    };

    let lastScrollY = window.scrollY;
    const handleNativeScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      velocityRef.current += delta * 0.15;
    };

    window.addEventListener('cinematic-scroll', handleCustomScroll);
    window.addEventListener('scroll', handleNativeScroll, { passive: true });

    const animate = (currentTime: number) => {
      const dt = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Base idle spin (15 degrees per second, or 35 if hovered)
      const baseSpeed = isHovered ? 40 : 18;
      rotationRef.current += (baseSpeed + velocityRef.current) * dt;

      // Dampen scroll velocity
      velocityRef.current *= 0.92;

      if (badgeRef.current) {
        badgeRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('cinematic-scroll', handleCustomScroll);
      window.removeEventListener('scroll', handleNativeScroll);
      cancelAnimationFrame(animId);
    };
  }, [isHovered]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('contact') || document.getElementById('capabilities-wheel');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      className="spinning-wheeler-container"
      aria-label="Interactive AdMark Studio Wheeler"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      title="AdMark Digitals Wheeler • Click to Start a Project"
    >
      <div className="spinning-wheeler-wrap">
        {/* Rotating Circular Typography Ring */}
        <div ref={badgeRef} className="spinning-wheeler-disc">
          <svg viewBox="0 0 160 160" width="100%" height="100%" className="spinning-wheeler-svg">
            <defs>
              <path
                id="wheelerCirclePath"
                d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
              />
            </defs>
            <text className="spinning-wheeler-text">
              <textPath href="#wheelerCirclePath" startOffset="0%">
                • ADMARK DIGITALS • RESEARCH • DESIGN • SCALE • EST 2026 •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center Apple HIG Frosted Glass Core */}
        <div className="spinning-wheeler-core">
          <span className="spinning-wheeler-emblem" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
          <span className="spinning-wheeler-pulse" aria-hidden="true" />
        </div>
      </div>
    </aside>
  );
}
