import AnimatedContent from '../react-bits/AnimatedContent';
import FadeContent from '../react-bits/FadeContent';
import './Sauces.css';

const sauces = [
  { name: 'Buffalo', image: '/images/Buffalo.png' },
  { name: 'Honey BBQ', image: '/images/HoneyBBQ.png' },
  { name: 'Mango Habanero', image: '/images/MangoHabanero.png' },
  { name: 'Ranch', image: '/images/Ranch.png' },
  { name: 'Signature', image: '/images/Signature.png' },
  { name: 'Honey Mustard', image: '/images/HoneyBBQ.png' }
];

const Sauces = () => {
  return (
    <section id="sauces" className="sauces section">
      <div className="container">
        <FadeContent className="sauces__header">
          <span className="sauces__label">Flavor Adventure</span>
          <h2 className="sauces__title">Feeling Saucy?</h2>
          <p className="sauces__subtitle">
            Choose Your Winged Destiny: Where Every Sauce is a Flavor Adventure.
          </p>
        </FadeContent>

        <div className="sauces__grid">
          {sauces.map((sauce, i) => (
            <AnimatedContent key={sauce.name} distance={40} delay={i * 0.07}>
              <div className="sauces__card">
                <div className="sauces__card-image">
                  <img src={sauce.image} alt={sauce.name} />
                </div>
                <h3 className="sauces__card-name">{sauce.name}</h3>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sauces;
