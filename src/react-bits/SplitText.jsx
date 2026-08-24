import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';

const SplitText = ({
  text,
  className = '',
  delay = 50,
  duration = 0.8,
  splitType = 'chars',
  from = { opacity: 0, y: 30 },
  to = { opacity: 1, y: 0 },
  threshold = 0.2,
  tag = 'p',
  textAlign = 'center'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  if (!text) return null;

  const words = text.split(' ');
  const Tag = tag;

  return (
    <Tag
      ref={ref}
      className={`split-parent ${className}`}
      style={{ textAlign, overflow: 'hidden', display: 'inline-block', whiteSpace: 'normal', wordWrap: 'break-word' }}
    >
      {fontsLoaded && words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, ci) => {
            const index = wi * 10 + ci;
            return (
              <motion.span
                key={ci}
                className="split-char"
                style={{ display: 'inline-block' }}
                initial={from}
                animate={isInView ? to : from}
                transition={{
                  duration,
                  delay: (index * delay) / 1000,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {char}
              </motion.span>
            );
          })}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
