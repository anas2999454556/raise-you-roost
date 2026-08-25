import MarqueeText from '../react-bits/MarqueeText';
import './BrandStrip.css';

const items = [
  'Hand-Breaded Daily',
  'South Carolina Recipe',
  'Crispy & Juicy',
  'Free-Range Chicken',
  'Made From Scratch',
  'Award-Winning Sauces',
  'Family Recipes',
];

const BrandStrip = () => (
  <div className="brand-strip">
    <MarqueeText
      items={items}
      speed={28}
      separator="★"
      className="brand-strip__marquee"
      itemClassName="brand-strip__item"
    />
  </div>
);

export default BrandStrip;
