import ScrollReveal from '../react-bits/ScrollReveal';
import AnimatedContent from '../react-bits/AnimatedContent';
import FadeContent from '../react-bits/FadeContent';
import './About.css';

const features = [
  { icon: '✦', label: 'Hand-Breaded', desc: 'Every piece coated by hand' },
  { icon: '✦', label: 'SC Recipe', desc: 'Rooted in tradition since day one' },
  { icon: '✦', label: 'Made Fresh Daily', desc: 'Never frozen, always fresh' },
];

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__grid">
          {/* Image column */}
          <ScrollReveal className="about__image-wrap" direction="left" duration={0.9} delay={0.1}>
            <div className="about__image-frame">
              <img
                src="/images/Web.png"
                alt="Raise The Roost restaurant interior"
                className="about__img"
              />
              <div className="about__image-border" />
            </div>

            {/* Floating accent badge */}
            <div className="about__badge">
              <span className="about__badge-num">Since</span>
              <span className="about__badge-year">2019</span>
              <span className="about__badge-text">South Carolina Proud</span>
            </div>
          </ScrollReveal>

          {/* Text column */}
          <div className="about__text">
            <FadeContent delay={0.1}>
              <span className="section-label">Our Story</span>
            </FadeContent>

            <AnimatedContent distance={40} delay={0.15}>
              <h2 className="about__title">
                Made From<br />
                <span className="about__title-accent">Scratch Daily</span>
              </h2>
            </AnimatedContent>

            <AnimatedContent distance={30} delay={0.25}>
              <p className="about__desc">
                Roost restaurants invite you to enjoy the ultimate comfort food experience.
                Our special recipe, rooted in South Carolina tradition, ensures that every
                piece of chicken is hand-breaded and seasoned to perfection.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={30} delay={0.35}>
              <blockquote className="about__quote">
                "A crispy golden crust and tender, juicy interior — the taste of the South in every bite."
              </blockquote>
            </AnimatedContent>

            <AnimatedContent distance={20} delay={0.45}>
              <div className="about__features">
                {features.map((f, i) => (
                  <div className="about__feature" key={f.label}>
                    <span className="about__feature-icon">{f.icon}</span>
                    <div>
                      <span className="about__feature-label">{f.label}</span>
                      <span className="about__feature-desc">{f.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
