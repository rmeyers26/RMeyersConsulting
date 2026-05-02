'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlowOrbProps {
  color?: 'cyan' | 'green' | 'purple'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animate?: boolean
}

const sizeMap = {
  sm:  { width: 160,  height: 160 },
  md:  { width: 256,  height: 256 },
  lg:  { width: 384,  height: 384 },
  xl:  { width: 600,  height: 600 },
}

export default function GlowOrb({
  color,
  size = 'lg',
  className,
  animate = true,
}: GlowOrbProps) {
  const dims = sizeMap[size]

  if (animate) {
    return (
      <motion.div
        className={cn('absolute rounded-full bg-amber/8 pointer-events-none blur-[120px]', className)}
        style={{ width: dims.width, height: dims.height }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    )
  }

  return (
    <div
      className={cn('absolute rounded-full bg-amber/8 pointer-events-none blur-[120px] opacity-40', className)}
      style={{ width: dims.width, height: dims.height }}
    />
  )
}
