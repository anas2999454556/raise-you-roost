import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AnimatedContent from '../react-bits/AnimatedContent';
import FadeContent from '../react-bits/FadeContent';
import GlowButton from '../react-bits/GlowButton';
import './Locations.css';

const locations = [
  { city: 'Columbia', state: 'SC', address: '123 Main Street', hours: 'Mon–Sun: 10am–10pm', status: 'Open Now' },
  { city: 'Charleston', state: 'SC', address: '456 King Street', hours: 'Mon–Sun: 10am–11pm', status: 'Open Now' },
  { city: 'Greenville', state: 'SC', address: '789 Main Street', hours: 'Opening Fall 2026', status: 'Coming Soon' },
  { city: 'Myrtle Beach', state: 'SC', address: '321 Ocean Blvd', hours: 'Mon–Sun: 11am–10pm', status: 'Open Now' },
  { city: 'Spartanburg', state: 'SC', address: '555 E Main Street', hours: 'Opening 2026', status: 'Coming Soon' },
  { city: 'Florence', state: 'SC', address: '200 Irby Street', hours: 'Mon–Sun: 10am–9pm', status: 'Open Now' },
];

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Locations = () => {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? locations
    : locations.filter(l => l.status === (filter === 'open' ? 'Open Now' : 'Coming Soon'));

  return (
    <section id="locations" className="locations section">
      <div className="container">
        <FadeContent className="locations__header">
          <span className="section-label">Find Us</span>
          <h2 className="locations__title">Restaurant Locations</h2>
          <p className="locations__subtitle">
            We're bringing Raise The Roost to communities across South Carolina.
          </p>
        </FadeContent>

        {/* Filters */}
        <AnimatedContent distance={20} className="locations__filters">
          {[
            { key: 'all', label: 'All Locations' },
            { key: 'open', label: 'Open Now' },
            { key: 'coming', label: 'Coming Soon' },
          ].map(f => (
            <button
              key={f.key}
              className={`locations__filter ${filter === f.key ? 'locations__filter--active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.key === 'open' && <span className="locations__filter-dot" />}
              {f.label}
            </button>
          ))}
        </AnimatedContent>

        {/* Grid */}
        <div className="locations__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((loc, i) => (
              <motion.div
                key={loc.city}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`locations__card ${loc.status === 'Open Now' ? 'locations__card--open' : 'locations__card--soon'}`}>
                  <div className="locations__card-top">
                    <div>
                      <span className={`locations__status ${loc.status === 'Coming Soon' ? 'locations__status--soon' : ''}`}>
                        {loc.status === 'Open Now' && <span className="locations__status-pulse" />}
                        {loc.status}
                      </span>
                      <h3 className="locations__card-city">{loc.city}, {loc.state}</h3>
                    </div>
                    <div className="locations__pin">
                      <PinIcon />
                    </div>
                  </div>

                  <div className="locations__card-body">
                    <p className="locations__card-address">{loc.address}</p>
                    <p className="locations__card-hours">{loc.hours}</p>
                  </div>

                  <div className="locations__card-actions">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(`${loc.address} ${loc.city} ${loc.state}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="locations__card-link"
                    >
                      Get Directions →
                    </a>
                  </div>

                  <div className="locations__card-stripe" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatedContent distance={20} delay={0.3} className="locations__footer">
          <p className="locations__footer-text">More locations expanding across the Southeast.</p>
          <GlowButton href="/#about" as="a" variant="ghost" size="sm">
            Franchise Opportunities →
          </GlowButton>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Locations;
