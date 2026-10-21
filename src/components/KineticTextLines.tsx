import React, { useEffect, useRef } from 'react';
import { useCinematicScroll } from '@/components/SmoothScrollProvider';

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
  const { velocity } = useCinematicScroll();
  const sectionRef = useRef<HTMLElement>(null);

  // Calm, steady marquee speed with gentle scroll responsiveness
  useEffect(() => {
    if (!sectionRef.current) return;
    const absV = Math.abs(velocity);
    // Subtle acceleration during scrolling (at most 15% boost), base speed 80s/90s
    const factor = Math.max(0.85, 1 - Math.min(absV / 300, 0.15));
    sectionRef.current.style.setProperty('--mq-dur-1', `${80 * factor}s`);
    sectionRef.current.style.setProperty('--mq-dur-2', `${90 * factor}s`);
  }, [velocity]);

  return (
    <section
      ref={sectionRef}
      className={`kinetic-text-section ${className}`}
      aria-label="Kinetic Capabilities Ticker"
    >
      {/* Line 1: Forward Moving Strip */}
      <div className="kinetic-text-strip" id="kinetic-line-1">
        <div className="kinetic-text-track kinetic-text-track--left">
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
        <div className="kinetic-text-track kinetic-text-track--right is-outline-track">
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
