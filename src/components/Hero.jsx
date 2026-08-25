import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import SplitText from '../react-bits/SplitText';
import ShinyText from '../react-bits/ShinyText';
import GlowButton from '../react-bits/GlowButton';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="hero" ref={ref}>
      {/* Parallax Background */}
      <motion.div className="hero__bg" style={{ y: bgY }}>
        <img src="/images/bg-promo.webp" alt="" className="hero__bg-img" />
        <div className="hero__bg-overlay" />
        <div className="hero__bg-vignette" />
      </motion.div>

      {/* Content */}
      <motion.div className="hero__content container" style={{ y: contentY, opacity }}>
        {/* Badge */}
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="/images/doordash-logo.svg" alt="DoorDash" className="hero__badge-icon" />
          <span>Now Delivering via DoorDash</span>
        </motion.div>

        {/* Main Title */}
        <div className="hero__title-wrap">
          <motion.div
            className="hero__eyebrow"
            initial={{ opacity: 0, letterSpacing: '20px' }}
            animate={{ opacity: 1, letterSpacing: '6px' }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Chicken & Biscuits
          </motion.div>

          <h1 className="hero__title display">
            <SplitText
              text="RAISE THE"
              className="hero__title-line"
              tag="span"
              delay={40}
              duration={0.7}
              from={{ opacity: 0, y: 60, rotateX: -30 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              textAlign="center"
            />
            <SplitText
              text="ROOST"
              className="hero__title-line hero__title-line--accent"
              tag="span"
              delay={35}
              duration={0.7}
              from={{ opacity: 0, y: 60, rotateX: -30 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              textAlign="center"
            />
          </h1>
        </div>

        {/* Tagline */}
        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Hand-breaded. Made fresh daily. South Carolina proud.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlowButton href="/menu" as="a" variant="red" size="lg">
            View Our Menu
          </GlowButton>
          <GlowButton href="/#locations" as="a" variant="outline" size="lg"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Find a Location
          </GlowButton>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="hero__stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          {[
            { val: '6+', label: 'Locations' },
            { val: '15+', label: 'Sauce Flavors' },
            { val: '4.8★', label: 'Avg. Rating' },
          ].map(s => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-val">{s.val}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <motion.span
          className="hero__scroll-line"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
        <span className="hero__scroll-label">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
