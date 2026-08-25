import { Link } from 'react-router-dom';
import FadeContent from '../react-bits/FadeContent';
import ShinyText from '../react-bits/ShinyText';
import './Footer.css';

const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://x.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
];

const navCols = [
  {
    title: 'Explore',
    links: [
      { label: 'Menu', href: '/menu' },
      { label: 'About', href: '/about' },
      { label: 'Locations', href: '/#locations' },
      { label: 'Sauces', href: '/#sauces' },
      { label: 'News', href: '/#news' },
    ],
  },
  {
    title: 'Order',
    links: [
      { label: 'DoorDash', href: '#' },
      { label: 'Uber Eats', href: '#' },
      { label: 'Grubhub', href: '#' },
      { label: 'Catering', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Careers', href: '#' },
      { label: 'Franchise Info', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Top section */}
      <div className="footer__top">
        <div className="container">
          <FadeContent>
            <div className="footer__top-inner">
              {/* Brand */}
              <div className="footer__brand">
                <Link to="/" className="footer__logo">
                  <img src="/images/roost-white-logo.svg" alt="Raise The Roost" width="44" height="44" />
                  <ShinyText
                    text="RAISE THE ROOST"
                    speed={5}
                    color="var(--white)"
                    shineColor="var(--gold)"
                    spread={80}
                    className="footer__logo-text"
                  />
                </Link>
                <p className="footer__tagline">
                  The South's finest chicken, made from scratch daily.<br />
                  Hand-breaded. Always fresh. Always bold.
                </p>
                <div className="footer__socials">
                  {socials.map(s => (
                    <a
                      key={s.name}
                      href={s.href}
                      className="footer__social"
                      aria-label={s.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Nav columns */}
              <div className="footer__nav">
                {navCols.map(col => (
                  <div key={col.title} className="footer__col">
                    <h4 className="footer__col-title">{col.title}</h4>
                    {col.links.map(l => (
                      <a key={l.label} href={l.href} className="footer__col-link">
                        {l.label}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </FadeContent>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copy">
              &copy; {year} Raise The Roost Chicken & Biscuits. All rights reserved.
            </p>
            <div className="footer__legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
