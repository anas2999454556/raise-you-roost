import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const FadeContent = ({
  children,
  blur = false,
  duration = 0.8,
  delay = 0,
  threshold = 0.15,
  initialOpacity = 0,
  className = '',
  style,
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{
        opacity: initialOpacity,
        filter: blur ? 'blur(8px)' : 'blur(0px)'
      }}
      animate={isInView
        ? { opacity: 1, filter: 'blur(0px)' }
        : { opacity: initialOpacity, filter: blur ? 'blur(8px)' : 'blur(0px)' }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeContent;
