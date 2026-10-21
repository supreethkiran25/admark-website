'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useCinematicScroll } from '@/components/SmoothScrollProvider';

type NexusMode = 'hyperboloid' | 'helix' | 'torus' | 'gyroscope';

interface ModeInfo {
  id: NexusMode;
  num: string;
  label: string;
  tagline: string;
}

const MODES: ModeInfo[] = [
  { id: 'hyperboloid', num: '01', label: 'Ruled Hyperboloid', tagline: 'Straight spinning lines generating curved 3D geometry' },
  { id: 'torus', num: '02', label: 'Harmonic Torus', tagline: 'Continuous multi-frequency parametric topology' },
  { id: 'helix', num: '03', label: 'Quantum Helix', tagline: 'Tri-strand resonant wave matrix in continuous motion' },
  { id: 'gyroscope', num: '04', label: 'Kinetic Gyro', tagline: '3-axis orthogonal precession with velocity coupling' },
];

export function KineticNexus() {
  const { velocity } = useCinematicScroll();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeMode, setActiveMode] = useState<NexusMode>('hyperboloid');
  const activeModeRef = useRef<NexusMode>('hyperboloid');
  activeModeRef.current = activeMode;

  // Interaction & 3D rotation state
  const rotX = useRef(0.35);
  const rotY = useRef(0.2);
  const targetRotX = useRef(0.35);
  const targetRotY = useRef(0.2);
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const modeMorphRef = useRef(0); // For smooth transitions between geometries

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let lastTimestamp = performance.now();

    // Resize handling with devicePixelRatio for Retina crispness
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse drag controls
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) {
        // Subtle hover parallax
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const normX = (e.clientX - rect.left) / rect.width - 0.5;
          const normY = (e.clientY - rect.top) / rect.height - 0.5;
          targetRotY.current += normX * 0.015;
          targetRotX.current -= normY * 0.015;
        }
        return;
      }
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      targetRotY.current += dx * 0.008;
      targetRotX.current += dy * 0.008;
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging.current = false;
    };

    const canvasElem = canvas;
    canvasElem.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Render loop
    const render = (now: number) => {
      const dt = Math.min((now - lastTimestamp) / 1000, 0.1);
      lastTimestamp = now;

      // Smooth inertia rotation
      rotX.current += (targetRotX.current - rotX.current) * 0.08;
      rotY.current += (targetRotY.current - rotY.current) * 0.08;

      // Base auto spin + scroll momentum coupling
      const scrollBoost = Math.abs(velocity) * 0.004;
      const autoSpin = (0.28 + scrollBoost) * dt;
      targetRotY.current += autoSpin;

      timeRef.current += dt * (1 + scrollBoost * 2);
      const t = timeRef.current;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const cx = width / 2;
      const cy = height / 2;
      const fov = 420;

      ctx.clearRect(0, 0, width, height);

      // Helper: Project 3D (x,y,z) to 2D screen coordinates
      const project = (x: number, y: number, z: number) => {
        // Rotate around X
        const cosX = Math.cos(rotX.current);
        const sinX = Math.sin(rotX.current);
        const y1 = y * cosX - z * sinX;
        const z1 = y * sinX + z * cosX;

        // Rotate around Y
        const cosY = Math.cos(rotY.current);
        const sinY = Math.sin(rotY.current);
        const x2 = x * cosY + z1 * sinY;
        const z2 = -x * sinY + z1 * cosY;

        // Perspective divide
        const distance = 460;
        const sz = z2 + distance;
        const scale = fov / Math.max(sz, 1);
        return {
          sx: cx + x2 * scale,
          sy: cy + y1 * scale,
          z: z2,
          scale,
        };
      };

      const mode = activeModeRef.current;

      // DRAW GEOMETRIES ACCORDING TO ACTIVE MODE
      if (mode === 'hyperboloid') {
        // Doubly-ruled hyperboloid: purely straight lines that spin to create a curved 3D surface
        const lineCount = 36;
        const topRadius = 140;
        const waistRadius = 60;
        const halfHeight = 130;

        for (let i = 0; i < lineCount; i++) {
          const theta = (i / lineCount) * Math.PI * 2 + t * 0.4;
          const twist = 1.15; // Angular twist between top and bottom

          // Family 1 (Right-leaning ruled lines)
          const p1 = project(
            topRadius * Math.cos(theta),
            -halfHeight,
            topRadius * Math.sin(theta)
          );
          const p2 = project(
            topRadius * Math.cos(theta + twist),
            halfHeight,
            topRadius * Math.sin(theta + twist)
          );

          // Family 2 (Left-leaning counter-ruled lines)
          const p3 = project(
            topRadius * Math.cos(theta),
            -halfHeight,
            topRadius * Math.sin(theta)
          );
          const p4 = project(
            topRadius * Math.cos(theta - twist),
            halfHeight,
            topRadius * Math.sin(theta - twist)
          );

          // Average Z for depth-based coloring
          const avgZ1 = (p1.z + p2.z) / 2;
          const alpha1 = Math.max(0.12, Math.min(0.9, (avgZ1 + 180) / 360));
          const isAccent1 = i % 4 === 0;

          ctx.beginPath();
          ctx.moveTo(p1.sx, p1.sy);
          ctx.lineTo(p2.sx, p2.sy);
          ctx.strokeStyle = isAccent1 ? `rgba(229, 57, 53, ${alpha1 * 0.95})` : `rgba(255, 255, 255, ${alpha1 * 0.38})`;
          ctx.lineWidth = isAccent1 ? 1.5 : 0.85;
          ctx.stroke();

          const avgZ2 = (p3.z + p4.z) / 2;
          const alpha2 = Math.max(0.08, Math.min(0.7, (avgZ2 + 180) / 360));
          ctx.beginPath();
          ctx.moveTo(p3.sx, p3.sy);
          ctx.lineTo(p4.sx, p4.sy);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha2 * 0.22})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();

          // Accent vertex nodes at waist
          if (isAccent1) {
            const midTheta = theta + twist / 2;
            const pm = project(
              waistRadius * Math.cos(midTheta),
              0,
              waistRadius * Math.sin(midTheta)
            );
            ctx.beginPath();
            ctx.arc(pm.sx, pm.sy, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = '#E53935';
            ctx.fill();
          }
        }
      } else if (mode === 'torus') {
        // Harmonic Torus knot line sculpture
        const strands = 28;
        const stepsPerStrand = 48;
        const R = 125;
        const r = 50;

        for (let s = 0; s < strands; s++) {
          const strandOffset = (s / strands) * Math.PI * 2;
          const isCrimson = s % 5 === 0;

          ctx.beginPath();
          for (let step = 0; step <= stepsPerStrand; step++) {
            const phi = (step / stepsPerStrand) * Math.PI * 2;
            const theta = strandOffset + t * 0.5;

            const x = (R + r * Math.cos(phi)) * Math.cos(theta);
            const y = (R + r * Math.cos(phi)) * Math.sin(theta);
            const z = r * Math.sin(phi);

            const pt = project(x, y, z);
            if (step === 0) ctx.moveTo(pt.sx, pt.sy);
            else ctx.lineTo(pt.sx, pt.sy);
          }

          const alpha = isCrimson ? 0.9 : 0.25;
          ctx.strokeStyle = isCrimson ? '#E53935' : `rgba(255, 255, 255, ${alpha})`;
          ctx.lineWidth = isCrimson ? 1.6 : 0.85;
          ctx.stroke();
        }
      } else if (mode === 'helix') {
        // Triple-Strand Quantum Helix Wave
        const numPoints = 64;
        const strandCount = 3;
        const strandRadius = 75;
        const totalHeight = 320;

        for (let s = 0; s < strandCount; s++) {
          const sOffset = (s / strandCount) * Math.PI * 2;
          const isPrime = s === 0;

          ctx.beginPath();
          for (let i = 0; i < numPoints; i++) {
            const fraction = i / (numPoints - 1);
            const y = (fraction - 0.5) * totalHeight;
            const angle = fraction * Math.PI * 5 + sOffset + t * 0.9;
            const x = strandRadius * Math.cos(angle);
            const z = strandRadius * Math.sin(angle);

            const pt = project(x, y, z);
            if (i === 0) ctx.moveTo(pt.sx, pt.sy);
            else ctx.lineTo(pt.sx, pt.sy);

            // Cross struts between strands
            if (i % 6 === 0 && isPrime) {
              const nextAngle = angle + (2 * Math.PI) / 3;
              const xNext = strandRadius * Math.cos(nextAngle);
              const zNext = strandRadius * Math.sin(nextAngle);
              const ptNext = project(xNext, y, zNext);

              ctx.save();
              ctx.beginPath();
              ctx.moveTo(pt.sx, pt.sy);
              ctx.lineTo(ptNext.sx, ptNext.sy);
              ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
              ctx.lineWidth = 0.75;
              ctx.stroke();
              ctx.restore();
            }
          }

          ctx.strokeStyle = isPrime ? '#E53935' : 'rgba(255, 255, 255, 0.35)';
          ctx.lineWidth = isPrime ? 2 : 1;
          ctx.stroke();
        }
      } else if (mode === 'gyroscope') {
        // 3-Axis Orthogonal Kinetic Gyro Rings
        const rings = [
          { r: 140, axis: 'x', color: '#E53935', width: 2, speed: 0.6 },
          { r: 115, axis: 'y', color: '#FFFFFF', width: 1.25, speed: -0.45 },
          { r: 90, axis: 'z', color: 'rgba(255, 255, 255, 0.6)', width: 1, speed: 0.8 },
          { r: 65, axis: 'x', color: '#E53935', width: 1.5, speed: -0.7 },
        ];

        rings.forEach((ring, rIdx) => {
          const segs = 60;
          const rAngle = t * ring.speed;

          ctx.beginPath();
          for (let i = 0; i <= segs; i++) {
            const a = (i / segs) * Math.PI * 2;
            let x = 0, y = 0, z = 0;

            if (ring.axis === 'x') {
              x = ring.r * Math.cos(a);
              y = ring.r * Math.sin(a) * Math.cos(rAngle);
              z = ring.r * Math.sin(a) * Math.sin(rAngle);
            } else if (ring.axis === 'y') {
              x = ring.r * Math.cos(a) * Math.cos(rAngle);
              y = ring.r * Math.sin(a);
              z = ring.r * Math.cos(a) * Math.sin(rAngle);
            } else {
              x = ring.r * Math.cos(a + rAngle);
              y = ring.r * Math.sin(a + rAngle);
              z = 0;
            }

            const pt = project(x, y, z);
            if (i === 0) ctx.moveTo(pt.sx, pt.sy);
            else ctx.lineTo(pt.sx, pt.sy);

            // Micro ticks along outer ring
            if (rIdx === 0 && i % 4 === 0) {
              const tickOuter = project(x * 1.06, y * 1.06, z * 1.06);
              ctx.save();
              ctx.beginPath();
              ctx.moveTo(pt.sx, pt.sy);
              ctx.lineTo(tickOuter.sx, tickOuter.sy);
              ctx.strokeStyle = 'rgba(229, 57, 53, 0.7)';
              ctx.lineWidth = 1;
              ctx.stroke();
              ctx.restore();
            }
          }

          ctx.strokeStyle = ring.color;
          ctx.lineWidth = ring.width;
          ctx.stroke();
        });

        // Core glowing pulse point
        const corePt = project(0, 0, 0);
        ctx.beginPath();
        ctx.arc(corePt.sx, corePt.sy, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#E53935';
        ctx.shadowColor = '#E53935';
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      canvasElem.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [velocity]);

  const activeModeData = MODES.find((m) => m.id === activeMode) || MODES[0];

  return (
    <section
      className="kinetic-nexus-sec"
      id="systems-nexus"
      aria-label="Interactive Kinetic Systems Topology"
      ref={containerRef}
    >
      <div className="container">
        {/* Editorial Section Header */}
        <div className="kinetic-nexus-header">
          <div className="ref-section-pill">
            <span className="ref-section-pill__dot" />
            <span>Interactive Systems Topology</span>
          </div>
          <h2 className="kinetic-nexus-title">
            Architected from first principles. <br />
            <em>Continuous geometric precision.</em>
          </h2>
          <p className="kinetic-nexus-desc">
            A bespoke generative 3D line sculpture representing our core engineering architecture. 
            Drag to rotate in space, scroll to accelerate throughput, and switch modes to inspect mathematical topologies.
          </p>
        </div>

        {/* 3D Canvas Interactive Viewport */}
        <div className="kinetic-nexus-stage">
          {/* Subtle Ambient Radial Lighting */}
          <div className="kinetic-nexus-ambient" aria-hidden="true" />

          {/* Interactive HTML5 Canvas */}
          <canvas
            ref={canvasRef}
            className="kinetic-nexus-canvas"
            title="Click and drag to rotate 3D line sculpture"
          />

          {/* Minimal Drag Hint */}
          <div className="kinetic-nexus-hint" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 9l-3 3 3 3M19 9l3 3-3 3M9 5l3-3 3 3M9 19l3 3 3-3" />
            </svg>
            <span>DRAG TO ORBIT 3D FIELD</span>
          </div>

          {/* Active Topology HUD Card */}
          <div className="kinetic-nexus-hud">
            <span className="kinetic-nexus-hud__code">{activeModeData.num} // TOPOLOGY</span>
            <strong className="kinetic-nexus-hud__name">{activeModeData.label}</strong>
            <p className="kinetic-nexus-hud__desc">{activeModeData.tagline}</p>
          </div>
        </div>

        {/* 4 Mode Selectors (Apple-Style Segmented HUD Control) */}
        <div className="kinetic-nexus-modes" role="tablist" aria-label="Select Topology Mode">
          {MODES.map((mode) => {
            const isActive = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                role="tab"
                aria-selected={isActive}
                className={`kinetic-nexus-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveMode(mode.id)}
              >
                <span className="kinetic-nexus-btn__num">{mode.num}</span>
                <span className="kinetic-nexus-btn__label">{mode.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
