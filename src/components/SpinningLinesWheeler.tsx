'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useCinematicScroll } from '@/components/SmoothScrollProvider';

export function SpinningLinesWheeler() {
  const { velocity } = useCinematicScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ r1: 0, r2: 0, r3: 0, r4: 0 });

  const currentR1 = useRef(0);
  const currentR2 = useRef(0);
  const currentR3 = useRef(0);
  const currentR4 = useRef(0);
  const rafId = useRef<number | null>(null);

  // Dynamic lines rotation loop responding to scroll velocity
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // Base rotation speeds + scroll momentum velocity boost
      const vBoost = velocity * 0.04;
      const speed1 = 20 + vBoost;        // Outer radial spokes
      const speed2 = -14 - vBoost * 0.8; // Counter-rotating dashed ring
      const speed3 = 28 + vBoost * 1.2;  // 3D Orbital ring 1
      const speed4 = -22 - vBoost;       // 3D Orbital ring 2

      currentR1.current = (currentR1.current + speed1 * dt) % 360;
      currentR2.current = (currentR2.current + speed2 * dt) % 360;
      currentR3.current = (currentR3.current + speed3 * dt) % 360;
      currentR4.current = (currentR4.current + speed4 * dt) % 360;

      setRotation({
        r1: currentR1.current,
        r2: currentR2.current,
        r3: currentR3.current,
        r4: currentR4.current,
      });

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [velocity]);

  // 3D Mouse Parallax Tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 26;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 26;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Generate 48 precision radial tick lines
  const tickCount = 48;
  const ticks = Array.from({ length: tickCount }, (_, i) => i * (360 / tickCount));

  // Generate 12 main line spokes
  const spokes = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <section
      className="spinning-lines-section"
      id="lines-wheeler"
      aria-label="Interactive Spinning Lines Wheeler"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container">
        {/* Header Ribbon */}
        <div className="spinning-lines-header">
          <div className="ref-section-pill">
            <span className="ref-section-pill__dot" />
            <span>Kinetic Architecture</span>
          </div>
          <h2 className="spinning-lines-title">
            Engineered with mathematical precision. <br />
            <em>Every line in motion.</em>
          </h2>
          <p className="spinning-lines-desc">
            An interactive kinetic gyroscope representing our core digital systems — research, architectural structure, and scaled performance in continuous synchronization.
          </p>
        </div>

        {/* 3D Kinetic Spinning Lines Stage */}
        <div
          className="spinning-lines-stage"
          style={{
            transform: `perspective(1200px) rotateX(${-tilt.y}deg) rotateY(${tilt.x}deg)`,
          }}
        >
          {/* Ambient Lighting Dome */}
          <div className="spinning-lines-ambient" aria-hidden="true" />

          {/* SVG Complex Multi-Layered Spinning Line Geometry */}
          <svg
            viewBox="0 0 600 600"
            className="spinning-lines-svg"
            aria-hidden="true"
          >
            <defs>
              {/* Radial gradient for glowing line accents */}
              <radialGradient id="lineGlowGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E53935" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#E53935" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#E53935" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="crimsonLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#FF6B6B" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#E53935" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Static Reference Coordinate Crosshairs */}
            <g className="lines-static-crosshairs" opacity="0.22">
              <line x1="300" y1="30" x2="300" y2="570" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 6" />
              <line x1="30" y1="300" x2="570" y2="300" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 6" />
              <circle cx="300" cy="300" r="270" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.12" />
              <circle cx="300" cy="300" r="210" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.08" />
              <circle cx="300" cy="300" r="140" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.1" />
            </g>

            {/* Layer 1: Outer Radial Tick Lines Wheel (Rotates at r1) */}
            <g transform={`rotate(${rotation.r1} 300 300)`}>
              {ticks.map((deg, idx) => {
                const isMajor = idx % 4 === 0;
                const innerR = isMajor ? 244 : 252;
                const outerR = 264;
                const rad = (deg * Math.PI) / 180;
                const x1 = 300 + innerR * Math.cos(rad);
                const y1 = 300 + innerR * Math.sin(rad);
                const x2 = 300 + outerR * Math.cos(rad);
                const y2 = 300 + outerR * Math.sin(rad);
                return (
                  <line
                    key={`tick-${idx}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={isMajor ? '#E53935' : '#FFFFFF'}
                    strokeWidth={isMajor ? '2' : '1'}
                    strokeOpacity={isMajor ? '0.85' : '0.35'}
                  />
                );
              })}
            </g>

            {/* Layer 2: Counter-Rotating Dashed Measurement Track (Rotates at r2) */}
            <g transform={`rotate(${rotation.r2} 300 300)`}>
              <circle
                cx="300"
                cy="300"
                r="228"
                fill="none"
                stroke="#E53935"
                strokeWidth="1.5"
                strokeDasharray="14 10 2 10"
                strokeOpacity="0.65"
              />
              <circle
                cx="300"
                cy="300"
                r="184"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeDasharray="8 6"
                strokeOpacity="0.3"
              />
            </g>

            {/* Layer 3: Main Spoke Wheel with Accent Nodes (Rotates at r1) */}
            <g transform={`rotate(${rotation.r1} 300 300)`}>
              {spokes.map((deg, idx) => {
                const rad = (deg * Math.PI) / 180;
                const r = 175;
                const x2 = 300 + r * Math.cos(rad);
                const y2 = 300 + r * Math.sin(rad);
                const isAccent = idx % 3 === 0;
                return (
                  <g key={`spoke-${idx}`}>
                    <line
                      x1="300"
                      y1="300"
                      x2={x2}
                      y2={y2}
                      stroke={isAccent ? 'url(#crimsonLineGrad)' : '#FFFFFF'}
                      strokeWidth={isAccent ? '1.75' : '1'}
                      strokeOpacity={isAccent ? '0.75' : '0.22'}
                    />
                    {isAccent && (
                      <circle
                        cx={x2}
                        cy={y2}
                        r="3.5"
                        fill="#E53935"
                        stroke="#FFFFFF"
                        strokeWidth="1"
                      />
                    )}
                  </g>
                );
              })}
            </g>

            {/* Layer 4: 3D Elliptical Kinetic Orbit Lines (Spinning at r3 & r4) */}
            <g transform={`rotate(${rotation.r3} 300 300)`}>
              <ellipse
                cx="300"
                cy="300"
                rx="240"
                ry="95"
                fill="none"
                stroke="url(#crimsonLineGrad)"
                strokeWidth="1.5"
                strokeDasharray="18 8 4 8"
                strokeOpacity="0.75"
              />
            </g>

            <g transform={`rotate(${rotation.r4} 300 300)`}>
              <ellipse
                cx="300"
                cy="300"
                rx="210"
                ry="80"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.25"
                strokeDasharray="12 12"
                strokeOpacity="0.45"
              />
            </g>

            {/* Central Core Glowing Hub & Precision Cross */}
            <circle cx="300" cy="300" r="48" fill="#0C0D11" stroke="#2A2A2E" strokeWidth="1.5" />
            <circle cx="300" cy="300" r="48" fill="url(#lineGlowGrad)" opacity="0.4" />
            <circle cx="300" cy="300" r="16" fill="none" stroke="#E53935" strokeWidth="1.5" strokeOpacity="0.8" />
            <circle cx="300" cy="300" r="5" fill="#E53935" />

            {/* Micro Precision Labels on Axes */}
            <text x="300" y="20" textAnchor="middle" fill="#888888" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="0.1em">000° // NORTH</text>
            <text x="580" y="304" textAnchor="start" fill="#888888" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="0.1em">090°</text>
            <text x="300" y="590" textAnchor="middle" fill="#888888" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="0.1em">180° // SOUTH</text>
            <text x="18" y="304" textAnchor="end" fill="#888888" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="0.1em">270°</text>
          </svg>

          {/* Floating Telemetry Badges */}
          <div className="lines-badge lines-badge--tl">
            <span className="lines-badge__label">RADIAL MOMENTUM</span>
            <span className="lines-badge__val">{Math.round(Math.abs(velocity) + 20)} RPM</span>
          </div>

          <div className="lines-badge lines-badge--tr">
            <span className="lines-badge__label">SYSTEM VECTOR</span>
            <span className="lines-badge__val">12.3051° N // 76.6554° E</span>
          </div>

          <div className="lines-badge lines-badge--bl">
            <span className="lines-badge__label">KINETIC KERNEL</span>
            <span className="lines-badge__val">HARMONIC 4-AXIS</span>
          </div>

          <div className="lines-badge lines-badge--br">
            <span className="lines-badge__label">VELOCITY SYNC</span>
            <span className="lines-badge__val">ACTIVE // 60FPS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
