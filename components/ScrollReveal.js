"use client";
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ScrollReveal({
  children,
  direction = 'up',
  duration = 0.6,
  delay = 0.1,
  className = '',
  amount = 0.15
}) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, disable transitions and slide displacements
  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  const getVariants = () => {
    const slideOffset = 25;
    
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: slideOffset },
          visible: { opacity: 1, y: 0 }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -slideOffset },
          visible: { opacity: 1, y: 0 }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: slideOffset },
          visible: { opacity: 1, x: 0 }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -slideOffset },
          visible: { opacity: 1, x: 0 }
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // premium expo curve
      }}
    >
      {children}
    </motion.div>
  );
}
