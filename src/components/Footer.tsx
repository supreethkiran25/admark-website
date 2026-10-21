
import React, { useState } from 'react';
import { Link } from '@/components/Link';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-ref" role="contentinfo">
      <div className="footer-ref__container">
        {/* Top Row: Newsletter / Direct Inquiry + Navigation Columns */}
        <div className="footer-ref__top-grid">
          {/* Brand & Newsletter Box */}
          <div className="footer-ref__brand-col">
            <Link href="/" className="footer-ref__logo-link">
              <img
                src="/admark-emblem.png"
                alt="AdMark Digitals"
                className="footer-ref__logo-img"
                width={48}
                height={30}
              />
              <span className="footer-ref__brand-name">AdMark Digitals</span>
            </Link>
            <p className="footer-ref__brand-tagline">
              Trust Us. We Deliver. Beyond Expectations. Research-led digital studio.
            </p>

            {/* Email Inquiry Subscription Input (matching screenshot) */}
            <form onSubmit={handleSubscribe} className="footer-ref__input-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                aria-label="Enter your work email"
                required
              />
              <button type="submit" className="footer-ref__submit-btn">
                <span>{subscribed ? 'Sent ✓' : 'Contact us'}</span>
              </button>
            </form>
          </div>

          {/* Navigation Links Columns */}
          <div className="footer-ref__links-grid">
            {/* Column 1: Capabilities */}
            <div className="footer-ref__col">
              <span className="footer-ref__col-title">Capabilities</span>
              <ul>
                <li><a href="#features">Digital Solutions</a></li>
                <li><a href="#features">AI &amp; Intelligent Systems</a></li>
                <li><a href="#features">Data &amp; Analytics</a></li>
                <li><a href="#features">Business Growth &amp; Strategy</a></li>
                <li><a href="#features">Workforce &amp; Tech Hiring</a></li>
              </ul>
            </div>

            {/* Column 2: Studio */}
            <div className="footer-ref__col">
              <span className="footer-ref__col-title">Studio</span>
              <ul>
                <li><a href="#process">How we work</a></li>
                <li><a href="#work">Case studies</a></li>
                <li><a href="#results">Sectors Served</a></li>
                <li><a href="#testimonials">Client notes</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact & Legal */}
            <div className="footer-ref__col">
              <span className="footer-ref__col-title">Connect</span>
              <ul>
                <li><a href="mailto:info@admarkdigitals.com">info@admarkdigitals.com</a></li>
                <li><a href="tel:+919686658055">+91 96866 58055</a></li>
                <li><a href="tel:+919632092273">+91 96320 92273</a></li>
                <li><a href="https://wa.me/919686658055" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href="https://www.linkedin.com/company/admark-digitals" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Credits Strip */}
        <div className="footer-ref__credits">
          <div className="footer-ref__locations">
            <span>HQ: Prashanth Plaza, 5th Cross, 4th Main, Saraswathipuram, Mysuru 570009</span>
            <span>·</span>
            <span>Teams: Bengaluru · Hyderabad</span>
            <span>·</span>
            <span>Team: Tejasvi Jois (CEO) · Harshith V. Malipatil (COO) · Revanth Kumar S (CTO) · Prajwal B. P. (CFO)</span>
          </div>

          <div className="footer-ref__copy">
            <span>© 2024 AdMark Digitals · Research-led digital studio. All rights reserved.</span>
            <a href="#top" onClick={scrollToTop} className="footer-ref__back-to-top">
              Back to top ↑
            </a>
          </div>
        </div>


      </div>
    </footer>
  );
}
