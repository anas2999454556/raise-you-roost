import { useRef } from 'react';
import { motion } from 'motion/react';

/**
 * Infinite horizontal marquee — the text duplicates for seamless looping.
 */
const MarqueeText = ({
  items = [],
  speed = 30,        // seconds for one full loop
  direction = 'left',
  separator = '•',
  className = '',
  itemClassName = '',
}) => {
  // Duplicate items so the animation can loop seamlessly
  const fullList = [...items, ...items];

  const xFrom = direction === 'left' ? '0%' : '-50%';
  const xTo   = direction === 'left' ? '-50%' : '0%';

  return (
    <div
      className={`marquee-root ${className}`}
      style={{ overflow: 'hidden', position: 'relative', width: '100%' }}
      aria-hidden="true"
    >
      <motion.div
        style={{ display: 'flex', width: 'max-content', gap: 0 }}
        animate={{ x: [xFrom, xTo] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        }}
      >
        {fullList.map((item, i) => (
          <span
            key={i}
            className={`marquee-item ${itemClassName}`}
            style={{ whiteSpace: 'nowrap' }}
          >
            {item}
            <span style={{ margin: '0 1em' }}>{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
