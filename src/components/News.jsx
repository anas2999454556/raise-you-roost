import AnimatedContent from '../react-bits/AnimatedContent';
import FadeContent from '../react-bits/FadeContent';
import ScrollReveal from '../react-bits/ScrollReveal';
import GlowButton from '../react-bits/GlowButton';
import './News.css';

const news = [
  {
    date: 'Nov 25, 2025',
    category: 'Seasonal',
    title: 'Sleigh the Season: Festive Food, Drink and Delivery Deals',
    excerpt: 'Raise The Roost is lighting up the holidays with merry meal deals and seasonal sips. Limited time only.',
    image: '/images/Christmas.jpg',
    featured: true,
  },
  {
    date: 'Nov 17, 2025',
    category: 'Deals',
    title: 'Thanksgiving Week Deals Worth Gobbling Up',
    excerpt: 'Convenience and savings are the main courses this Thanksgiving week.',
    image: '/images/Thanksgiving.webp',
  },
  {
    date: 'Oct 15, 2025',
    category: 'Menu',
    title: 'Breakfast Deals Before the First Bell',
    excerpt: 'Limited-time breakfast deals are serving up big flavors and bold savings.',
    image: '/images/Coffee-Breakfast-Sandwich.webp',
  },
];

const News = () => {
  const [featured, ...rest] = news;

  return (
    <section id="news" className="news section">
      <div className="container">
        <FadeContent className="news__header">
          <span className="section-label">What's Cooking</span>
          <h2 className="news__title">Latest News</h2>
        </FadeContent>

        <div className="news__layout">
          {/* Featured */}
          <ScrollReveal className="news__featured" delay={0.05}>
            <article className="news__card news__card--featured">
              <div className="news__card-image">
                <img src={featured.image} alt={featured.title} loading="lazy" />
                <div className="news__card-overlay" />
              </div>
              <div className="news__card-body">
                <div className="news__card-meta">
                  <span className="news__cat">{featured.category}</span>
                  <span className="news__date">{featured.date}</span>
                </div>
                <h3 className="news__card-title">{featured.title}</h3>
                <p className="news__card-excerpt">{featured.excerpt}</p>
                <a href="#" className="news__card-link">Read More →</a>
              </div>
            </article>
          </ScrollReveal>

          {/* Secondary */}
          <div className="news__secondary">
            {rest.map((item, i) => (
              <AnimatedContent key={i} distance={40} delay={0.1 + i * 0.12}>
                <article className="news__card news__card--small">
                  <div className="news__card-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="news__card-overlay" />
                  </div>
                  <div className="news__card-body">
                    <div className="news__card-meta">
                      <span className="news__cat">{item.category}</span>
                      <span className="news__date">{item.date}</span>
                    </div>
                    <h3 className="news__card-title">{item.title}</h3>
                    <a href="#" className="news__card-link">Read More →</a>
                  </div>
                </article>
              </AnimatedContent>
            ))}
          </div>
        </div>

        <AnimatedContent distance={20} delay={0.3} className="news__footer">
          <GlowButton href="#" as="a" variant="outline" size="md">
            View All News
          </GlowButton>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default News;
