
import { useState, useRef } from 'react';

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className="hero__visual"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
      style={{
        transform: `perspective(1000px) rotateY(${coords.x * 0.4}deg) rotateX(${-coords.y * 0.4}deg)`,
        transition: isHovered ? 'transform 100ms ease-out' : 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Precision architectural grid */}
      <div className="hero__visual-grid" />

      {/* Animated horizontal scan line */}
      <div className="hero__visual-scanline" />

      {/* Coordinate axes */}
      <div className="hero__visual-line" />
      <div className="hero__visual-line hero__visual-line--vert" />
      <div className="hero__visual-diag" />

      {/* Floating Translucent Red Signature Plane */}
      <div
        className="hero__visual-plane"
        style={{
          transform: `translate(${coords.x * 0.7}px, ${coords.y * 0.7}px)`,
          transition: isHovered ? 'transform 120ms ease-out' : 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <span className="beacon-dot" />
            <span className="hero__visual-caption">SYSTEM CORE // 01</span>
          </div>
          <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)' }}>
            v2.6.4
          </span>
        </div>

        {/* Center telemetry graphic */}
        <div style={{ margin: 'auto 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <div style={{ height: '2px', width: '45%', backgroundColor: 'var(--color-accent)', opacity: 0.8 }} />
          <div style={{ height: '1px', width: '75%', backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div style={{ height: '1px', width: '60%', backgroundColor: 'rgba(255,255,255,0.1)' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div className="hero__visual-meta">
            <span>LAT: 12.2958° N</span>
            <br />
            <span>LNG: 76.6394° E</span>
          </div>
          <span className="hero__visual-meta" style={{ textAlign: 'right', color: 'var(--color-accent)' }}>
            MYSURU STUDIO HQ
          </span>
        </div>
      </div>

      {/* Corner crosshair accents */}
      <div className="crosshair crosshair--tl" />
      <div className="crosshair crosshair--tr" />
      <div className="crosshair crosshair--bl" />
      <div className="crosshair crosshair--br" />
    </div>
  );
}
