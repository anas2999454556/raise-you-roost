import AnimatedContent from '../react-bits/AnimatedContent';
import FadeContent from '../react-bits/FadeContent';
import Magnet from '../react-bits/Magnet';
import './Menu.css';

const menuItems = [
  {
    name: 'The Original Roost',
    desc: 'Hand-breaded chicken with our signature South Carolina seasoning.',
    price: '$9.99',
    tag: 'Popular',
    image: '/images/P4-26-Roost-Nuggets-Hero-sm.png'
  },
  {
    name: 'Spicy Chicken Sandwich',
    desc: 'Crispy spicy chicken breast with pickles on a toasted brioche bun.',
    price: '$10.49',
    tag: 'New',
    image: '/images/Spicy-Chicken-Sandwich.jpg'
  },
  {
    name: 'Chicken Tenders Pack',
    desc: 'Tender, juicy chicken strips hand-breaded and fried to golden perfection.',
    price: '$8.99',
    tag: null,
    image: '/images/P4-26-Roost-Nuggets-Hero-sm.png'
  },
  {
    name: 'Giant Combo',
    desc: 'Two pieces of chicken, biscuit, side and a drink.',
    price: '$12.99',
    tag: 'Value',
    image: '/images/family-meal-with-plates.webp'
  },
  {
    name: 'Goliath Pack',
    desc: 'Eight pieces of chicken, four biscuits, two sides. Feeds the whole family.',
    price: '$24.99',
    tag: null,
    image: '/images/family-meal-with-plates.webp'
  },
  {
    name: 'Honey Butter Biscuit',
    desc: 'Flaky, buttery biscuit glazed with local honey.',
    price: '$2.49',
    tag: 'Side',
    image: '/images/Web-2x.jpg'
  }
];

const Menu = () => {
  return (
    <section id="menu" className="menu section">
      <div className="container">
        <FadeContent className="menu__header">
          <span className="menu__label">Our Menu</span>
          <h2 className="menu__title">What We Serve</h2>
          <p className="menu__subtitle">
            From our signature fried chicken to homestyle biscuits,
            every item is made with care and tradition.
          </p>
        </FadeContent>

        <div className="menu__grid">
          {menuItems.map((item, i) => (
            <AnimatedContent key={i} distance={40} delay={i * 0.08}>
              <div className="menu__card">
                {item.tag && <span className="menu__tag">{item.tag}</span>}
                <div className="menu__card-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="menu__card-body">
                  <div className="menu__card-header">
                    <h3 className="menu__card-name">{item.name}</h3>
                    <span className="menu__card-price">{item.price}</span>
                  </div>
                  <p className="menu__card-desc">{item.desc}</p>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent distance={20} delay={0.3} className="menu__footer">
          <Magnet padding={20} magnetStrength={4}>
            <a href="#" className="menu__cta">View Full Menu</a>
          </Magnet>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Menu;
