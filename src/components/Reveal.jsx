import { motion, useReducedMotion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 40,
  scale = 1,
  duration = 0.65,
  amount = 0.2,
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
