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

  // Silky smooth scroll-responsive kinetic animation (Web Animations API)
  useEffect(() => {
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    let targetSpeed = 1.0;
    let currentSpeed = 1.0;
    let rafId: number;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      lastScrollY = currentY;

      // Scroll speed responsiveness: accelerates forward when scrolling down,
      // and gently slows / reverses when scrolling up
      const boost = delta * 0.04;
      targetSpeed = Math.max(-2.5, Math.min(4.5, 1.0 + boost));
    };

    const onWheel = (e: WheelEvent) => {
      const boost = e.deltaY * 0.015;
      targetSpeed = Math.max(-2.5, Math.min(4.5, 1.0 + boost));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: true });

    const loop = () => {
      // Natural fluid decay back to cruising speed (1.0)
      targetSpeed += (1.0 - targetSpeed) * 0.05;

      // Dampened interpolation for smooth 60/120fps physics
      currentSpeed += (targetSpeed - currentSpeed) * 0.1;

      // Apply dynamic playbackRate to tracks without stopping or restarting
      if (line1Ref.current && typeof line1Ref.current.getAnimations === 'function') {
        const anims1 = line1Ref.current.getAnimations();
        for (let i = 0; i < anims1.length; i++) {
          anims1[i].playbackRate = currentSpeed;
        }
      }

      if (line2Ref.current && typeof line2Ref.current.getAnimations === 'function') {
        const anims2 = line2Ref.current.getAnimations();
        for (let i = 0; i < anims2.length; i++) {
          anims2[i].playbackRate = currentSpeed;
        }
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
