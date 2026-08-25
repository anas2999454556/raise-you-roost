import { useRef } from 'react';
import { motion } from 'motion/react';
import './GlowButton.css';

const GlowButton = ({
  children,
  href,
  onClick,
  variant = 'red',
  size = 'md',
  className = '',
  as: Tag = href ? 'a' : 'button',
  ...props
}) => {
  const ref = useRef(null);

  const el = (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      className={`glow-btn glow-btn--${variant} glow-btn--${size} ${className}`}
      {...props}
    >
      <span className="glow-btn__inner">{children}</span>
      <span className="glow-btn__glow" />
    </Tag>
  );

  return el;
};

export default GlowButton;
