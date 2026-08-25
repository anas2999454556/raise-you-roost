import CountUp from '../react-bits/CountUp';
import AnimatedContent from '../react-bits/AnimatedContent';
import ShinyText from '../react-bits/ShinyText';
import './Stats.css';

const stats = [
  { value: 6, suffix: '+', label: 'Locations', desc: 'Across South Carolina' },
  { value: 15, suffix: '+', label: 'Sauce Flavors', desc: 'Made in-house' },
  { value: 50, suffix: 'K+', label: 'Meals Served', desc: 'And counting' },
  { value: 4, suffix: '.8★', label: 'Avg Rating', desc: 'Google & Yelp' },
];

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__inner">
        {/* Background elements */}
        <div className="stats__bg-glow stats__bg-glow--1" />
        <div className="stats__bg-glow stats__bg-glow--2" />

        <div className="container">
          <div className="stats__grid">
            {stats.map((stat, i) => (
              <AnimatedContent key={stat.label} distance={40} delay={i * 0.12}>
                <div className="stats__item">
                  <div className="stats__value">
                    <ShinyText
                      text={String(stat.value)}
                      speed={3}
                      color="var(--white)"
                      shineColor="var(--gold)"
                      spread={100}
                      className="stats__num"
                    />
                    <span className="stats__suffix">{stat.suffix}</span>
                  </div>
                  <p className="stats__label">{stat.label}</p>
                  <p className="stats__desc">{stat.desc}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
