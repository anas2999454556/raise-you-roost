import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const TiltCard = ({
  children,
  className = '',
  maxTilt = 12,
  scale = 1.04,
  glare = true,
  disabled = false,
}) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(rawX, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(rawY, { stiffness: 300, damping: 30 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const handleMouseMove = (e) => {
    if (disabled) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rawY.set(((x - centerX) / centerX) * maxTilt);
    rawX.set(-((y - centerY) / centerY) * maxTilt);

    if (glare) {
      glareX.set((x / rect.width) * 100);
      glareY.set((y / rect.height) * 100);
    }
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    rawX.set(0);
    rawY.set(0);
    setHovered(false);
  };

  const handleMouseEnter = () => {
    if (!disabled) setHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        scale: hovered ? scale : 1,
        transition: 'scale 0.3s ease',
      }}
    >
      {children}
      {glare && hovered && (
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
            zIndex: 10,
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
