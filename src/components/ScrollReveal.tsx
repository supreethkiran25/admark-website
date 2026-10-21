
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollRevealProvider() {
  const location = useLocation(); const pathname = location.pathname;

  useEffect(() => {
    // Select all elements marked for reveal
    const elements = document.querySelectorAll('.reveal-on-scroll');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Stop observing once revealed so it doesn't flicker or re-animate
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
