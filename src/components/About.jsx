import AnimatedContent from '../react-bits/AnimatedContent';
import FadeContent from '../react-bits/FadeContent';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__grid">
          <AnimatedContent direction="horizontal" distance={60} className="about__image-wrap">
            <div className="about__image">
              <img
                src="/images/Web.png"
                alt="Raise The Roost restaurant interior"
                className="about__img"
              />
            </div>
          </AnimatedContent>

          <div className="about__text">
            <FadeContent delay={0.2}>
              <span className="about__label">Our Story</span>
            </FadeContent>

            <AnimatedContent distance={40} delay={0.1}>
              <h2 className="about__title">Made from Scratch Daily</h2>
            </AnimatedContent>

            <AnimatedContent distance={30} delay={0.2}>
              <p className="about__desc">
                Roost restaurants invite you to enjoy the ultimate comfort food experience.
                Our special recipe, rooted in South Carolina tradition, ensures that every
                piece of chicken is hand-breaded and seasoned to perfection.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={30} delay={0.3}>
              <p className="about__desc">
                Enjoy a crispy golden crust and tender, juicy interior that delivers
                the taste of the South in every bite.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} delay={0.4}>
              <div className="about__features">
                <div className="about__feature">
                  <span>Hand-Breaded</span>
                </div>
                <div className="about__feature">
                  <span>South Carolina Recipe</span>
                </div>
                <div className="about__feature">
                  <span>Made Fresh Daily</span>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
