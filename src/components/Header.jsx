import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import Magnet from '../react-bits/Magnet';
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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const sectionId = path.slice(2);
      if (location.pathname === '/') {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <Link to="/" className="header__logo" aria-label="Raise The Roost Home">
          <img src="/images/roost-white-logo.svg" alt="Raise The Roost" width="40" height="40" />
          <span className="header__logo-text">Raise The Roost</span>
        </Link>

        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map(link => (
            <Magnet key={link.path} padding={20} magnetStrength={3}>
              {link.path.startsWith('/#') ? (
                <a
                  href={link.path}
                  className={`header__link ${location.pathname === '/' ? '' : ''}`}
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
                </Link>
              )}
            </Magnet>
          ))}
        </nav>

        <Link to="/#locations" className="header__cta" onClick={(e) => scrollToSection(e, '/#locations')}>
          <Magnet padding={15} magnetStrength={4}>
            <span>Find a Roost</span>
          </Magnet>
        </Link>

        <button
          className="header__burger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className={`burger-line ${mobileOpen ? 'open' : ''}`} />
          <span className={`burger-line ${mobileOpen ? 'open' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="header__mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="header__mobile-nav">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.path.startsWith('/#') ? (
                    <a
                      href={link.path}
                      className="header__mobile-link"
                      onClick={(e) => {
                        scrollToSection(e, link.path);
                        setMobileOpen(false);
                      }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="header__mobile-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <Link to="/#locations" className="header__mobile-cta" onClick={(e) => {
                scrollToSection(e, '/#locations');
                setMobileOpen(false);
              }}>
                Find a Roost
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
