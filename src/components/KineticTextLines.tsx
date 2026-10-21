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
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  const pos1Ref = useRef(0);
  const pos2Ref = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Base speeds + momentum boost from smooth scroll
      const scrollBoost = Math.abs(velocity) * 0.18;
      const speed1 = 45 + scrollBoost;
      const speed2 = 40 + scrollBoost;

      // Track 1 moves Left
      pos1Ref.current -= speed1 * dt;
      // Track 2 moves Right
      pos2Ref.current += speed2 * dt;

      if (track1Ref.current) {
        const halfWidth = track1Ref.current.scrollWidth / 2;
        if (halfWidth > 0) {
          if (pos1Ref.current <= -halfWidth) {
            pos1Ref.current += halfWidth;
          }
          track1Ref.current.style.transform = `translate3d(${pos1Ref.current}px, 0, 0)`;
        }
      }

      if (track2Ref.current) {
        const halfWidth = track2Ref.current.scrollWidth / 2;
        if (halfWidth > 0) {
          if (pos2Ref.current >= 0) {
            pos2Ref.current -= halfWidth;
          }
          track2Ref.current.style.transform = `translate3d(${pos2Ref.current}px, 0, 0)`;
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [velocity]);

  return (
    <section className={`kinetic-text-section ${className}`} aria-label="Kinetic Capability Lines">
      {/* Line 1: Forward Moving Strip */}
      <div className="kinetic-text-strip" id="kinetic-line-1">
        <div className="kinetic-text-track" ref={track1Ref}>
          <div className="kinetic-text-group">
            {LINE_1_ITEMS.map((item, idx) => (
              <React.Fragment key={`l1-a-${idx}`}>
                <span className={`kinetic-text-word ${item.outline ? 'is-outline' : ''}`}>
                  {item.text}
                </span>
                <em className="kinetic-text-dot">·</em>
              </React.Fragment>
            ))}
          </div>
          {/* Seamless loop clone */}
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
        <div className="kinetic-text-track is-outline-track" ref={track2Ref}>
          <div className="kinetic-text-group">
            {LINE_2_ITEMS.map((item, idx) => (
              <React.Fragment key={`l2-a-${idx}`}>
                <span className={`kinetic-text-word ${item.outline ? 'is-outline' : ''}`}>
                  {item.text}
                </span>
                <em className="kinetic-text-dot">·</em>
              </React.Fragment>
            ))}
          </div>
          {/* Seamless loop clone */}
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
