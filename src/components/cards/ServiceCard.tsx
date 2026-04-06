'use client'

import { motion } from 'framer-motion'
import type { Service } from '@/types'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 },
        },
      }}
      className={cn(
        'relative rounded-xl border p-6 overflow-hidden group',
        'bg-surface/60 backdrop-blur-sm border-border',
        'transition-all duration-300',
        'hover:border-cyan/30 hover:shadow-glow-sm'
      )}
    >
      {/* Top accent bar */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-[2px] transition-all duration-300',
          service.accentColor === 'cyan'   && 'bg-cyan/0 group-hover:bg-cyan/60',
          service.accentColor === 'green'  && 'bg-green/0 group-hover:bg-green/60',
          service.accentColor === 'purple' && 'bg-purple/0 group-hover:bg-purple/60',
        )}
      />

      <div className={cn(
        'text-xl mb-4',
        service.accentColor === 'cyan'   && 'text-cyan',
        service.accentColor === 'green'  && 'text-green',
        service.accentColor === 'purple' && 'text-purple',
      )}>
        {service.icon}
      </div>
      <h3 className="text-slate-light font-semibold text-lg mb-2 font-sans">
        {service.title}
      </h3>
      <p className="text-ghost text-sm leading-relaxed mb-4">
        {service.description}
      </p>
      <ul className="space-y-1">
        {service.deliverables.map((d, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-ghost/80">
            <span className="text-cyan-dim">›</span>
            {d}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
