import AnimatedContent from '../react-bits/AnimatedContent';
import FadeContent from '../react-bits/FadeContent';
import './News.css';

const news = [
  {
    date: 'Nov 25, 2025',
    title: 'Sleigh the Season: Festive Food, Drink and Delivery Deals',
    excerpt: 'Raise The Roost is lighting up the holidays with merry meal deals and seasonal sips.',
    image: '/images/Christmas.jpg'
  },
  {
    date: 'Nov 17, 2025',
    title: 'Thanksgiving Week Deals Worth Gobbling Up',
    excerpt: 'Convenience and savings are the main courses this Thanksgiving.',
    image: '/images/Thanksgiving.webp'
  },
  {
    date: 'Oct 15, 2025',
    title: 'Breakfast Deals Before the First Bell',
    excerpt: 'Limited-time breakfast deals are serving up big flavors and bold savings.',
    image: '/images/Coffee-Breakfast-Sandwich.webp'
  }
];

const News = () => {
  return (
    <section id="news" className="news section">
      <div className="container">
        <FadeContent className="news__header">
          <span className="news__label">What's Cooking</span>
          <h2 className="news__title">Latest News</h2>
        </FadeContent>

        <div className="news__grid">
          {news.map((item, i) => (
            <AnimatedContent key={i} distance={40} delay={i * 0.1}>
              <article className="news__card">
                <div className="news__card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news__card-body">
                  <span className="news__date">{item.date}</span>
                  <h3 className="news__card-title">{item.title}</h3>
                  <p className="news__card-excerpt">{item.excerpt}</p>
                </div>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
