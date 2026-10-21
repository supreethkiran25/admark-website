
import React, { createContext, useContext, useEffect, useState, useRef } from 'react';

interface ScrollContextType {
  scrollY: number;
  velocity: number;
  direction: 'up' | 'down' | 'idle';
  scrollTo: (target: string | number | HTMLElement, duration?: number) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  velocity: 0,
  direction: 'idle',
  scrollTo: () => {},
});

export const useCinematicScroll = () => useContext(ScrollContext);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down' | 'idle'>('idle');

  const lastScrollY = useRef(0);
  const currentVelocity = useRef(0);
  const rafId = useRef<number | null>(null);

  // Smooth scroll helper for programmatic links and buttons
  const scrollTo = (target: string | number | HTMLElement, duration = 800) => {
    let targetTop = 0;
    if (typeof target === 'number') {
      targetTop = target;
    } else if (typeof target === 'string') {
      const el = target === '#top' ? document.body : document.querySelector(target);
      if (el) {
        targetTop = (el as HTMLElement).getBoundingClientRect().top + window.scrollY;
      }
    } else if (target instanceof HTMLElement) {
      targetTop = target.getBoundingClientRect().top + window.scrollY;
    }

    const startTop = window.scrollY;
    const distance = targetTop - startTop;
    const startTime = performance.now();

    // Cinematic easeInOutCubic curve
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startTop + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    // Intercept anchor clicks like href="#..." for cinematic smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const destination = document.querySelector(href);
        if (destination) {
          e.preventDefault();
          scrollTo(destination as HTMLElement, 900);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Frame-based scroll measurement & velocity calculation for the Wheeler
    let lastTime = performance.now();
    let isTicking = false;

    const measureScroll = () => {
      const now = performance.now();
      const dt = Math.max(now - lastTime, 16);
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      // Calculate instantaneous velocity in px/s with smoothing
      const instantVelocity = (delta / dt) * 1000;
      currentVelocity.current = currentVelocity.current * 0.75 + instantVelocity * 0.25;

      lastScrollY.current = currentY;
      lastTime = now;

      setScrollY(currentY);
      setVelocity(currentVelocity.current);

      if (Math.abs(delta) > 0.5) {
        setDirection(delta > 0 ? 'down' : 'up');
      } else {
        setDirection('idle');
      }

      isTicking = false;
    };

    const onScroll = () => {
      if (!isTicking) {
        rafId.current = requestAnimationFrame(measureScroll);
        isTicking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY, velocity, direction, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
}
