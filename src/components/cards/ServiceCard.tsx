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
        'bg-surface border-border',
        'transition-all duration-300',
        'hover:border-amber/30 hover:shadow-card-hover'
      )}
    >
      <div className="text-xl mb-4 text-amber">
        {service.icon}
      </div>
      <h3 className="text-ink font-semibold text-lg mb-2 font-sans">
        {service.title}
      </h3>
      <p className="text-ink-2 text-sm leading-relaxed mb-4">
        {service.description}
      </p>
      <ul className="space-y-1">
        {service.deliverables.map((d, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-ink-2">
            <span className="text-amber">›</span>
            {d}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
