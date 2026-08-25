import { useState } from 'react';
import AnimatedContent from '../react-bits/AnimatedContent';
import FadeContent from '../react-bits/FadeContent';
import './Sauces.css';

const sauces = [
  { name: 'Buffalo', heat: 3, image: '/images/Buffalo.png', color: '#C8102E', desc: 'Classic fiery kick' },
  { name: 'Honey BBQ', heat: 1, image: '/images/HoneyBBQ.png', color: '#D4A843', desc: 'Sweet & smoky' },
  { name: 'Mango Habanero', heat: 4, image: '/images/MangoHabanero.png', color: '#E87D2B', desc: 'Tropical fire' },
  { name: 'Ranch', heat: 0, image: '/images/Ranch.png', color: '#8BB4D4', desc: 'Cool & creamy' },
  { name: 'Signature', heat: 2, image: '/images/Signature.png', color: '#9B0D23', desc: 'The Roost original' },
  { name: 'Honey Mustard', heat: 0, image: '/images/HoneyBBQ.png', color: '#D4A843', desc: 'Tangy & sweet' },
];

const HeatDots = ({ level }) => (
  <div className="sauce__heat" aria-label={`Heat level ${level} of 4`}>
    {Array.from({ length: 4 }).map((_, i) => (
      <span key={i} className={`sauce__heat-dot ${i < level ? 'sauce__heat-dot--on' : ''}`} />
    ))}
  </div>
);

const Sauces = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="sauces" className="sauces section">
      <div className="container">
        <FadeContent className="sauces__header">
          <span className="section-label">Flavor Adventure</span>
          <h2 className="sauces__title">Feeling Saucy?</h2>
          <p className="sauces__subtitle">
            Choose Your Winged Destiny. Where Every Sauce is a Flavor Adventure.
          </p>
        </FadeContent>

        <div className="sauces__grid">
          {sauces.map((sauce, i) => (
            <AnimatedContent key={sauce.name} distance={50} delay={i * 0.07}>
              <div
                className={`sauces__card ${hovered === sauce.name ? 'sauces__card--hovered' : ''}`}
                onMouseEnter={() => setHovered(sauce.name)}
                onMouseLeave={() => setHovered(null)}
                style={{ '--sauce-color': sauce.color }}
              >
                <div className="sauces__card-image">
                  <img src={sauce.image} alt={sauce.name} loading="lazy" />
                </div>
                <div className="sauces__card-info">
                  <h3 className="sauces__card-name">{sauce.name}</h3>
                  <p className="sauces__card-desc">{sauce.desc}</p>
                  <HeatDots level={sauce.heat} />
                </div>
                <div className="sauces__card-glow" />
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sauces;
