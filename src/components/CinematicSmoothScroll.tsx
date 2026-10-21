'use client';

import { useEffect, useRef } from 'react';

/**
 * CinematicSmoothScroll — High-performance inertia smooth scroller.
 * Utilizes requestAnimationFrame with linear interpolation (lerp) to deliver
 * a luxurious, slow cinematic glide. Dispatches real-time scroll velocity
 * events for dynamic physics components (e.g., the rotating wheeler).
 */
export function CinematicSmoothScroll() {
  const isScrollingRef = useRef(false);
  const currentYRef = useRef(0);
  const targetYRef = useRef(0);
  const velocityRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion or is on touch/small device
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    // Detect touch-only mobile devices (retain native momentum)
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 1;
    if (isTouch && window.innerWidth < 768) return;

    let maxScroll = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    );

    const updateMaxScroll = () => {
      maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
    };
    window.addEventListener('resize', updateMaxScroll, { passive: true });

    currentYRef.current = window.scrollY;
    targetYRef.current = window.scrollY;

    // Linear interpolation factor (0.075 = slow, buttery, cinematic inertia)
    const LERP_FACTOR = 0.075;
    const SPEED_MULTIPLIER = 0.95;

    const render = () => {
      const diff = targetYRef.current - currentYRef.current;
      velocityRef.current = diff * LERP_FACTOR;

      // Broadcast velocity & scroll for dynamic physics elements (e.g., Wheeler)
      window.dispatchEvent(
        new CustomEvent('cinematic-scroll', {
          detail: {
            scrollY: currentYRef.current,
            velocity: velocityRef.current,
            targetY: targetYRef.current,
          },
        })
      );

      if (Math.abs(diff) > 0.3) {
        currentYRef.current += velocityRef.current;
        window.scrollTo(0, Math.round(currentYRef.current));
        rafIdRef.current = requestAnimationFrame(render);
      } else {
        currentYRef.current = targetYRef.current;
        window.scrollTo(0, targetYRef.current);
        isScrollingRef.current = false;
        rafIdRef.current = null;
      }
    };

    const onWheel = (e: WheelEvent) => {
      // Don't intercept if ctrl/meta is pressed (zooming) or inside horizontal scroll element
      if (e.ctrlKey || e.metaKey) return;

      const target = e.target as HTMLElement | null;
      if (target && target.closest('[data-no-smooth-scroll]')) return;

      e.preventDefault();

      // Normalize delta mode
      let deltaY = e.deltaY;
      if (e.deltaMode === 1) deltaY *= 40; // lines
      if (e.deltaMode === 2) deltaY *= 800; // pages

      targetYRef.current = Math.min(
        maxScroll,
        Math.max(0, targetYRef.current + deltaY * SPEED_MULTIPLIER)
      );

      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        currentYRef.current = window.scrollY;
        rafIdRef.current = requestAnimationFrame(render);
      }
    };

    // Smooth anchor navigation (#contact, #services, etc.)
    const onAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const elem = document.querySelector(href);
        if (elem) {
          e.preventDefault();
          const elemTop = elem.getBoundingClientRect().top + window.scrollY - 70;
          targetYRef.current = Math.min(maxScroll, Math.max(0, elemTop));
          if (!isScrollingRef.current) {
            isScrollingRef.current = true;
            currentYRef.current = window.scrollY;
            rafIdRef.current = requestAnimationFrame(render);
          }
        }
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    document.addEventListener('click', onAnchorClick);

    return () => {
      window.removeEventListener('wheel', onWheel);
      document.removeEventListener('click', onAnchorClick);
      window.removeEventListener('resize', updateMaxScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return null;
}
