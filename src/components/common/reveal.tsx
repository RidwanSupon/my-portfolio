'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Distance travelled while fading in. */
  y?: number;
}

/**
 * Scroll-triggered entrance used across every section, so the whole page shares
 * one motion vocabulary instead of each block inventing its own.
 */
export function Reveal({ children, delay = 0, className, y = 18 }: RevealProps) {
  const still = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: still ? 0 : y, filter: still ? 'none' : 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  );
}
