import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const ParallaxSection = ({
  children,
  speed = 0.3,
  className = '',
  style = {},
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden', position: 'relative', ...style }}>
      <motion.div style={{ y, willChange: 'transform' }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
