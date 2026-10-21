
import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@/components/Link';
import { useLocation } from 'react-router-dom';
import { COMPANY } from '@/lib/data';
interface HeaderProps {
  onStartProject?: () => void;
}

export function Header({ onStartProject }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); const pathname = location.pathname;
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '/#features' },
    { label: 'Work', href: '/work' },
    { label: 'Process', href: '/#process' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/#contact' },
  ];

  const handleStartProjectClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      if (onStartProject) onStartProject();
    }
  };

  return (
    <>
      <header className={`ref-header-wrap ${scrolled ? 'is-scrolled' : ''}`} role="banner">
        <div className="ref-header-pill">
          {/* Brand Logo & Studio Name */}
          <Link href="/" className="ref-header-brand" aria-label="AdMark Digitals Home">
            <img
              src="/admark-emblem.png"
              alt="AdMark Digitals Logo"
              className="ref-header-logo-img"
              width={44}
              height={28}
            />
            <span className="ref-header-brand-name">AdMark Digitals</span>
          </Link>

          {/* Desktop Center Navigation (Apple HIG Liquid Glass Style) */}
          <nav className="ref-header-nav" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isWorkActive = link.href === '/work' && pathname.startsWith('/work');
              const isAboutActive = link.href === '/about' && pathname === '/about';
              const isCareersActive = link.href === '/careers' && pathname === '/careers';
              const isActive = isWorkActive || isAboutActive || isCareersActive;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`ref-header-nav-link ${isActive ? 'ref-header-nav-link--active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="ref-header-actions">
            <Link
              href="/#contact"
              onClick={handleStartProjectClick}
              className="ref-btn-nav-primary"
            >
              <span>Start a Project</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="ref-header-burger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Apple HIG Sheet Style) */}
      {mobileOpen && (
        <div
          ref={menuRef}
          className="ref-mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="ref-mobile-drawer__head">
            <Link href="/" className="ref-header-brand" onClick={() => setMobileOpen(false)}>
              <img
                src="/admark-emblem.png"
                alt="AdMark Digitals"
                className="ref-header-logo-img"
                width={44}
                height={28}
              />
              <span className="ref-header-brand-name">{COMPANY.name}</span>
            </Link>

            <button
              type="button"
              className="ref-mobile-drawer__close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="ref-mobile-drawer__links">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="ref-mobile-drawer__link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="ref-mobile-drawer__link ref-mobile-drawer__link--cta"
              onClick={(e) => {
                setMobileOpen(false);
                handleStartProjectClick(e);
              }}
            >
              Start a Project →
            </Link>
          </nav>

          <div className="ref-mobile-drawer__footer">
            <p>Direct studio lines:</p>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            <a href={`tel:${COMPANY.phone1.replace(/\s+/g, '')}`}>{COMPANY.phone1}</a>
          </div>
        </div>
      )}
    </>
  );
}
