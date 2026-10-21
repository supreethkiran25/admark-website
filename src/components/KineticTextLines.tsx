import React, { useEffect, useRef } from 'react';

interface KineticTextLinesProps {
  className?: string;
}

const LINE_1_ITEMS = [
  { text: 'ERP', outline: false },
  { text: 'CRM', outline: true },
  { text: 'Chatbots', outline: false },
  { text: 'AI Agents', outline: true },
  { text: 'Digital Systems', outline: false },
  { text: 'Next-Gen Web', outline: true },
  { text: 'Cloud Scale', outline: false },
  { text: 'Automation', outline: true },
];

const LINE_2_ITEMS = [
  { text: 'Websites', outline: true },
  { text: 'Mobile Apps', outline: true },
  { text: 'Ecommerce', outline: true },
  { text: 'Automation', outline: true },
  { text: 'AI Workflows', outline: true },
  { text: 'Full-Stack', outline: true },
  { text: 'Performance', outline: true },
  { text: 'Cloud Native', outline: true },
];

export function KineticTextLines({ className = '' }: KineticTextLinesProps) {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // High-performance GPU RAF transform loop:
  // - 100% continuous motion that NEVER stops when cursor hovers on any word
  // - Real-time scroll and wheel speed responsiveness with smooth momentum decay
  useEffect(() => {
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    let targetSpeedMultiplier = 1.0;
    let currentSpeedMultiplier = 1.0;
    let rafId: number;

    // Line 1: moves to the left (50% repeat cycle in 80s)
    const baseSpeed1 = 50 / (80 * 1000); // % per millisecond
    let pos1 = 0;

    // Line 2: moves to the right (50% repeat cycle in 90s)
    const baseSpeed2 = 50 / (90 * 1000); // % per millisecond
    let pos2 = -50;

    let lastTime = performance.now();

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      lastScrollY = currentY;

      // Boost speed on scroll down; decelerate or reverse on scroll up
      const boost = delta * 0.05;
      targetSpeedMultiplier = Math.max(-2.5, Math.min(4.5, 1.0 + boost));
    };

    const onWheel = (e: WheelEvent) => {
      const boost = e.deltaY * 0.015;
      targetSpeedMultiplier = Math.max(-2.5, Math.min(4.5, 1.0 + boost));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: true });

    const loop = (now: number) => {
      const dt = Math.min(now - lastTime, 50);
      lastTime = now;

      // Natural fluid decay back to cruising speed (1.0)
      targetSpeedMultiplier += (1.0 - targetSpeedMultiplier) * 0.06;
      currentSpeedMultiplier += (targetSpeedMultiplier - currentSpeedMultiplier) * 0.12;

      // Update Line 1 position (moving left, wraps cleanly at -50% and 0%)
      pos1 -= baseSpeed1 * dt * currentSpeedMultiplier;
      while (pos1 <= -50) pos1 += 50;
      while (pos1 > 0) pos1 -= 50;

      // Update Line 2 position (moving right, wraps cleanly at 0% and -50%)
      pos2 += baseSpeed2 * dt * currentSpeedMultiplier;
      while (pos2 >= 0) pos2 -= 50;
      while (pos2 < -50) pos2 += 50;

      // Apply GPU-composited hardware transforms
      if (line1Ref.current) {
        line1Ref.current.style.transform = `translate3d(${pos1.toFixed(4)}%, 0, 0)`;
      }
      if (line2Ref.current) {
        line2Ref.current.style.transform = `translate3d(${pos2.toFixed(4)}%, 0, 0)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onWheel);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`kinetic-text-section ${className}`}
      aria-label="Kinetic Capabilities Ticker"
    >
      {/* Line 1: Forward Moving Strip */}
      <div className="kinetic-text-strip" id="kinetic-line-1">
        <div ref={line1Ref} className="kinetic-text-track kinetic-text-track--left">
          <div className="kinetic-text-group">
            {LINE_1_ITEMS.map((item, idx) => (
              <React.Fragment key={`l1-a-${idx}`}>
                <span className={`kinetic-text-word ${item.outline ? 'is-outline' : ''}`}>
                  {item.text}
                </span>
                <em className="kinetic-text-dot" aria-hidden="true">·</em>
              </React.Fragment>
            ))}
          </div>
          {/* Seamless loop duplicate */}
          <div className="kinetic-text-group" aria-hidden="true">
            {LINE_1_ITEMS.map((item, idx) => (
              <React.Fragment key={`l1-b-${idx}`}>
                <span className={`kinetic-text-word ${item.outline ? 'is-outline' : ''}`}>
                  {item.text}
                </span>
                <em className="kinetic-text-dot">·</em>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Line 2: Counter-Moving Outline Strip */}
      <div className="kinetic-text-strip is-secondary" id="kinetic-line-2">
        <div ref={line2Ref} className="kinetic-text-track kinetic-text-track--right is-outline-track">
          <div className="kinetic-text-group">
            {LINE_2_ITEMS.map((item, idx) => (
              <React.Fragment key={`l2-a-${idx}`}>
                <span className={`kinetic-text-word ${item.outline ? 'is-outline' : ''}`}>
                  {item.text}
                </span>
                <em className="kinetic-text-dot" aria-hidden="true">·</em>
              </React.Fragment>
            ))}
          </div>
          {/* Seamless loop duplicate */}
          <div className="kinetic-text-group" aria-hidden="true">
            {LINE_2_ITEMS.map((item, idx) => (
              <React.Fragment key={`l2-b-${idx}`}>
                <span className={`kinetic-text-word ${item.outline ? 'is-outline' : ''}`}>
                  {item.text}
                </span>
                <em className="kinetic-text-dot">·</em>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KineticTextLines;
