import CountUp from '../react-bits/CountUp';
import AnimatedContent from '../react-bits/AnimatedContent';
import './Stats.css';

const stats = [
  { value: 6, suffix: '+', label: 'Locations' },
  { value: 15, suffix: '+', label: 'Sauce Flavors' },
  { value: 50, suffix: 'K+', label: 'Meals Served' },
  { value: 4, suffix: '.8', label: 'Avg Rating' }
];

const Stats = () => {
  return (
    <section className="stats section">
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, i) => (
            <AnimatedContent key={stat.label} distance={30} delay={i * 0.1}>
              <div className="stats__item">
                <div className="stats__value">
                  <CountUp to={stat.value} duration={2} delay={0.2} />
                  <span className="stats__suffix">{stat.suffix}</span>
                </div>
                <p className="stats__label">{stat.label}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
