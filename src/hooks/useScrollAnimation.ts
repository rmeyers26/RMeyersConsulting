'use client'

import { useInView } from 'react-intersection-observer'
import type { Variants } from 'framer-motion'

interface UseScrollAnimationOptions {
  threshold?: number
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.15, delay = 0, direction = 'up' } = options

  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  const hidden = {
    opacity: 0,
    ...(direction === 'up' && { y: 30 }),
    ...(direction === 'left' && { x: -30 }),
    ...(direction === 'right' && { x: 30 }),
  }

  const variants: Variants = {
    hidden,
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return {
    ref,
    variants,
    animate: inView ? 'visible' : 'hidden',
    initial: 'hidden',
  }
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}
