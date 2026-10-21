'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useCinematicScroll } from '@/components/SmoothScrollProvider';

interface StudioWheelerProps {
  variant?: 'floating' | 'inline';
}

export function StudioWheeler({ variant = 'floating' }: StudioWheelerProps) {
  const { velocity, scrollTo } = useCinematicScroll();
  const [rotation, setRotation] = useState(0);
  const [mouseAngle, setMouseAngle] = useState(45);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const currentRotation = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  // Wheel circular text
  const text = '• ADMARK DIGITALS • RESEARCH • DESIGN • ENGINEERING • SCALE ';

  useEffect(() => {
    // Show after slight delay for cinematic entrance
    const timer = setTimeout(() => setIsVisible(true), 600);

    // Continuous smooth animation loop responding to scroll velocity
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // Base idle rotation: 18 deg/s
      // Add boost from scroll velocity (velocity in px/s)
      const velocityBoost = velocity * 0.045;
      const speed = 18 + velocityBoost;

      currentRotation.current = (currentRotation.current + speed * dt) % 360;
      setRotation(currentRotation.current);

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      clearTimeout(timer);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [velocity]);

  // Track mouse position to point center arrow towards cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const angleRad = Math.atan2(dy, dx);
      const angleDeg = (angleRad * 180) / Math.PI;
      setMouseAngle(angleDeg);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('features') || document.getElementById('process') || document.getElementById('work');
    if (target) {
      scrollTo(target, 1000);
    }
  };

  const isFloating = variant === 'floating';

  return (
    <aside
      ref={containerRef}
      className={`studio-wheeler ${isFloating ? 'studio-wheeler--floating' : 'studio-wheeler--inline'} ${
        isVisible ? 'is-visible' : ''
      } ${isHovered ? 'is-hovered' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label="Interactive studio rotary wheeler — click to explore core capabilities"
      title="Interactive Studio Wheeler • Click to explore"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e as unknown as React.MouseEvent);
        }
      }}
    >
      {/* Outer Rotating Circular Typography Ring */}
      <div
        className="studio-wheeler__ring"
        style={{ transform: `rotate(${rotation}deg)` }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 140 140" className="studio-wheeler__svg">
          <defs>
            <path
              id="wheelerCirclePath"
              d="M 70, 70 m -52, 0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
            />
          </defs>
          <text className="studio-wheeler__text">
            <textPath href="#wheelerCirclePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Inner Frosted Glass Hub with Dynamic Directional Core */}
      <div className="studio-wheeler__hub">
        <div
          className="studio-wheeler__arrow"
          style={{ transform: `rotate(${mouseAngle - 90}deg)` }}
          aria-hidden="true"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
        <span className="studio-wheeler__hub-label">EXPLORE</span>
      </div>

      {/* Ambient Radial Energy Ring */}
      <div className="studio-wheeler__glow" aria-hidden="true" />
    </aside>
  );
}
