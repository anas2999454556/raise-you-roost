import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import ShinyText from '../react-bits/ShinyText';
import GlowButton from '../react-bits/GlowButton';
import './Header.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Locations', path: '/#locations' },
  { label: 'News', path: '/#news' }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const sectionId = path.slice(2);
      if (location.pathname === '/') {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        {/* Logo */}
        <Link to="/" className="header__logo" aria-label="Raise The Roost Home">
          <img src="/images/roost-white-logo.svg" alt="Raise The Roost" width="38" height="38" />
          <span className="header__logo-text">
            <ShinyText text="RAISE THE ROOST" speed={4} color="var(--white)" shineColor="var(--gold)" spread={80} />
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map(link => (
            <div key={link.path} className="header__link-wrap">
              {link.path.startsWith('/#') ? (
                <a
                  href={link.path}
                  className="header__link"
                  onClick={(e) => scrollToSection(e, link.path)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.path}
                  className={`header__link ${location.pathname === link.path ? 'header__link--active' : ''}`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.span className="header__link-dot" layoutId="nav-dot" />
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <GlowButton
          href="/#locations"
          as="a"
          variant="red"
          size="sm"
          className="header__cta"
          onClick={(e) => scrollToSection(e, '/#locations')}
        >
          Find a Roost
        </GlowButton>

        {/* Burger */}
        <button
          className={`header__burger ${mobileOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="header__mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="header__mobile-bg"
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <nav className="header__mobile-nav">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  {link.path.startsWith('/#') ? (
                    <a
                      href={link.path}
                      className="header__mobile-link"
                      onClick={(e) => { scrollToSection(e, link.path); setMobileOpen(false); }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.path} className="header__mobile-link" onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                <GlowButton
                  href="/#locations"
                  as="a"
                  variant="red"
                  size="md"
                  onClick={(e) => { scrollToSection(e, '/#locations'); setMobileOpen(false); }}
                  style={{ marginTop: '16px' }}
                >
                  Find a Roost
                </GlowButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
