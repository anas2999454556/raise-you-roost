import { useState } from 'react';
import { motion } from 'motion/react';
import AnimatedContent from '../react-bits/AnimatedContent';
import GlowButton from '../react-bits/GlowButton';
import './CTASection.css';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="cta-section">
      {/* Animated background */}
      <div className="cta-section__bg">
        <div className="cta-section__orb cta-section__orb--1" />
        <div className="cta-section__orb cta-section__orb--2" />
        <div className="cta-section__grid" />
      </div>

      <div className="container">
        <div className="cta-section__inner">
          <AnimatedContent distance={40} delay={0.05}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Stay Fresh</span>
          </AnimatedContent>

          <AnimatedContent distance={40} delay={0.1}>
            <h2 className="cta-section__title display">
              Always Fresh.<br />
              <span className="cta-section__title-accent">Always First.</span>
            </h2>
          </AnimatedContent>

          <AnimatedContent distance={30} delay={0.2}>
            <p className="cta-section__subtitle">
              Join the Roost community. Get exclusive deals, new menu drops,
              and secret sauce updates before anyone else.
            </p>
          </AnimatedContent>

          <AnimatedContent distance={20} delay={0.3}>
            {!submitted ? (
              <form className="cta-section__form" onSubmit={handleSubmit}>
                <div className="cta-section__input-wrap">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="cta-section__input"
                    required
                    aria-label="Email address for newsletter"
                    id="cta-email-input"
                  />
                  <GlowButton as="button" type="submit" variant="red" size="md">
                    Join the Roost
                  </GlowButton>
                </div>
                <p className="cta-section__disclaimer">No spam, ever. Unsubscribe anytime.</p>
              </form>
            ) : (
              <motion.div
                className="cta-section__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="cta-section__success-icon">🍗</span>
                <p>You're in! Welcome to the Roost family.</p>
              </motion.div>
            )}
          </AnimatedContent>

          {/* Trust signals */}
          <AnimatedContent distance={20} delay={0.4} className="cta-section__trust">
            {['10K+ Subscribers', 'Weekly Deals', 'Exclusive Drops'].map((t, i) => (
              <div key={t} className="cta-section__trust-item">
                <span className="cta-section__trust-dot" />
                {t}
              </div>
            ))}
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
