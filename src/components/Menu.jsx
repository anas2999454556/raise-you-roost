import { useState } from 'react';
import TiltCard from '../react-bits/TiltCard';
import AnimatedContent from '../react-bits/AnimatedContent';
import FadeContent from '../react-bits/FadeContent';
import GlowButton from '../react-bits/GlowButton';
import './Menu.css';

const categories = ['All', 'Chicken', 'Sandwiches', 'Sides'];

const menuItems = [
  {
    name: 'The Original Roost',
    desc: 'Hand-breaded chicken with our signature South Carolina seasoning.',
    price: '$9.99',
    tag: 'Popular',
    cat: 'Chicken',
    image: '/images/P4-26-Roost-Nuggets-Hero-sm.png',
  },
  {
    name: 'Spicy Chicken Sandwich',
    desc: 'Crispy spicy chicken breast with pickles on a toasted brioche bun.',
    price: '$10.49',
    tag: 'New',
    cat: 'Sandwiches',
    image: '/images/Spicy-Chicken-Sandwich.jpg',
  },
  {
    name: 'Chicken Tenders Pack',
    desc: 'Tender, juicy chicken strips hand-breaded and fried to golden perfection.',
    price: '$8.99',
    tag: null,
    cat: 'Chicken',
    image: '/images/P4-26-Roost-Nuggets-Hero-sm.png',
  },
  {
    name: 'Giant Combo',
    desc: 'Two pieces of chicken, biscuit, side and a drink.',
    price: '$12.99',
    tag: 'Value',
    cat: 'Chicken',
    image: '/images/family-meal-with-plates.webp',
  },
  {
    name: 'Goliath Pack',
    desc: 'Eight pieces of chicken, four biscuits, two sides. Feeds the whole family.',
    price: '$24.99',
    tag: null,
    cat: 'Chicken',
    image: '/images/family-meal-with-plates.webp',
  },
  {
    name: 'Honey Butter Biscuit',
    desc: 'Flaky, buttery biscuit glazed with local honey.',
    price: '$2.49',
    tag: 'Side',
    cat: 'Sides',
    image: '/images/Web-2x.jpg',
  },
];

const tagColors = {
  Popular: 'red',
  New: 'gold',
  Value: 'ghost',
  Side: 'outline',
};

const Menu = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? menuItems
    : menuItems.filter(m => m.cat === active);

  return (
    <section id="menu" className="menu section">
      <div className="container">
        <FadeContent className="menu__header">
          <span className="section-label">Our Menu</span>
          <h2 className="menu__title">What We Serve</h2>
          <p className="menu__subtitle">
            From our signature fried chicken to homestyle biscuits,
            every item is made with care and tradition.
          </p>
        </FadeContent>

        {/* Category Filter */}
        <AnimatedContent distance={20} delay={0.1} className="menu__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`menu__filter ${active === cat ? 'menu__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </AnimatedContent>

        {/* Grid */}
        <div className="menu__grid">
          {filtered.map((item, i) => (
            <AnimatedContent key={item.name} distance={40} delay={i * 0.07}>
              <TiltCard className="menu__card" maxTilt={8} scale={1.02}>
                {item.tag && (
                  <span className={`menu__tag menu__tag--${tagColors[item.tag] || 'red'}`}>
                    {item.tag}
                  </span>
                )}
                <div className="menu__card-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="menu__card-overlay" />
                </div>
                <div className="menu__card-body">
                  <div className="menu__card-header">
                    <h3 className="menu__card-name">{item.name}</h3>
                    <span className="menu__card-price">{item.price}</span>
                  </div>
                  <p className="menu__card-desc">{item.desc}</p>
                  <button className="menu__card-order">Order Now →</button>
                </div>
              </TiltCard>
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent distance={20} delay={0.3} className="menu__footer">
          <GlowButton href="/menu" as="a" variant="outline" size="lg">
            View Full Menu
          </GlowButton>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Menu;
