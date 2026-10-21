
import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@/components/Link';
import { useLocation } from 'react-router-dom';
import { COMPANY } from '@/lib/data';
import { useTheme } from '@/components/ThemeProvider';

interface HeaderProps {
  onStartProject?: () => void;
}

export function Header({ onStartProject }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
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
              src="/admark-logo-live-cropped.png"
              alt="AdMark Digitals Logo"
              className="ref-header-logo-img"
              width={26}
              height={26}
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
            {/* Theme Toggle Button (Apple HIG Segmented Glass) */}
            <button
              type="button"
              className="ref-theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                /* Sun icon for switching to light mode */
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                /* Moon icon for switching to dark mode */
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <Link
              href="/#contact"
              onClick={handleStartProjectClick}
              className="ref-header-contact-link"
            >
              Contact
            </Link>

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
                src="/admark-logo-live-cropped.png"
                alt="AdMark Digitals"
                className="ref-header-logo-img"
                width={28}
                height={28}
              />
              <span className="ref-header-brand-name">{COMPANY.name}</span>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                type="button"
                className="ref-theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
              <button
                type="button"
                className="ref-mobile-drawer__close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
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
