import { useState } from 'react';
import AnimatedContent from '../react-bits/AnimatedContent';
import FadeContent from '../react-bits/FadeContent';
import './Locations.css';

const locations = [
  { city: 'Columbia', state: 'SC', address: '123 Main St', status: 'Open Now' },
  { city: 'Charleston', state: 'SC', address: '456 King St', status: 'Open Now' },
  { city: 'Greenville', state: 'SC', address: '789 Main St', status: 'Coming Soon' },
  { city: 'Myrtle Beach', state: 'SC', address: '321 Ocean Blvd', status: 'Open Now' },
  { city: 'Spartanburg', state: 'SC', address: '555宜E Main St', status: 'Coming Soon' },
  { city: 'Florence', state: 'SC', address: '200 Irby St', status: 'Open Now' }
];

const Locations = () => {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? locations
    : locations.filter(l => l.status === (filter === 'open' ? 'Open Now' : 'Coming Soon'));

  return (
    <section id="locations" className="locations section">
      <div className="container">
        <FadeContent className="locations__header">
          <span className="locations__label">Find Us</span>
          <h2 className="locations__title">Restaurant Locations</h2>
          <p className="locations__subtitle">
            We're bringing Raise The Roost to communities across South Carolina.
          </p>
        </FadeContent>

        <AnimatedContent distance={20} className="locations__filters">
          {['all', 'open', 'coming'].map(f => (
            <button
              key={f}
              className={`locations__filter ${filter === f ? 'locations__filter--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All Locations' : f === 'open' ? 'Open Now' : 'Coming Soon'}
            </button>
          ))}
        </AnimatedContent>

        <div className="locations__grid">
          {filtered.map((loc, i) => (
            <AnimatedContent key={loc.city} distance={30} delay={i * 0.06}>
              <div className="locations__card">
                <div className="locations__card-top">
                  <h3 className="locations__card-city">{loc.city}</h3>
                  <span className={`locations__status ${loc.status === 'Coming Soon' ? 'locations__status--soon' : ''}`}>
                    {loc.status}
                  </span>
                </div>
                <p className="locations__card-state">{loc.state}</p>
                <p className="locations__card-address">{loc.address}</p>
                <div className="locations__card-line" />
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
