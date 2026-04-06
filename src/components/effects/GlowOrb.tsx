'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlowOrbProps {
  color?: 'cyan' | 'green' | 'purple'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animate?: boolean
}

export default function GlowOrb({
  color = 'cyan',
  size = 'lg',
  className,
  animate = true,
}: GlowOrbProps) {
  const sizeClasses = {
    sm: 'w-40 h-40',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[600px] h-[600px]',
  }

  const colorClasses = {
    cyan:   'bg-cyan/5',
    green:  'bg-green/5',
    purple: 'bg-purple/8',
  }

  // Use a lighter blur on mobile to reduce GPU load on older devices.
  // blur-[40px] on small screens, blur-[80px] on larger screens.

  if (animate) {
    return (
      <motion.div
        className={cn(
          'absolute rounded-full pointer-events-none',
          sizeClasses[size],
          colorClasses[color],
          'blur-[40px] sm:blur-[80px]',
          className
        )}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    )
  }

  return (
    <div
      className={cn(
        'absolute rounded-full pointer-events-none',
        sizeClasses[size],
        colorClasses[color],
        'blur-[40px] sm:blur-[80px] opacity-60',
        className
      )}
    />
  )
}
