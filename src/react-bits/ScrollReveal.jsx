import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

/**
 * Cinematic clip-path reveal animation — text/images sweep in from bottom.
 */
const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  once = true,
  direction = 'up',   // 'up' | 'left' | 'right' | 'fade'
  distance = 40,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-60px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      clipPath: 'inset(10% 0% 10% 0%)',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      clipPath: 'inset(0% 0% 0% 0%)',
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
