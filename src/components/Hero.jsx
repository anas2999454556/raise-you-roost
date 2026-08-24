import { motion } from 'motion/react';
import Magnet from '../react-bits/Magnet';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src="/images/bg-promo.webp" alt="" className="hero__bg-img" />
        <div className="hero__bg-overlay" />
      </div>
      <div className="hero__content container">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Now delivering through DoorDash
        </motion.div>

        <h1 className="hero__title">Raise The Roost</h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Chicken & Biscuits
        </motion.p>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Best fried chicken, sauces, chicken tenders & sandwiches.
          Made from scratch daily.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <Magnet padding={20} magnetStrength={4}>
            <a href="#menu" className="hero__btn hero__btn--primary">View Our Menu</a>
          </Magnet>
          <Magnet padding={20} magnetStrength={4}>
            <a href="#locations" className="hero__btn hero__btn--secondary">Find a Location</a>
          </Magnet>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
