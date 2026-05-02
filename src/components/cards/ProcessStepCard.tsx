'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ProcessStep } from '@/types'
import { cn } from '@/lib/utils'

interface ProcessStepCardProps {
  step: ProcessStep
  index: number
  isLast: boolean
}

export default function ProcessStepCard({ step, index, isLast }: ProcessStepCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 },
        },
      }}
      className="relative"
    >
      {/* Vertical connector */}
      {!isLast && (
        <div className="absolute left-6 top-[60px] bottom-0 border-l border-border z-0 hidden md:block" />
      )}

      <div
        className={cn(
          'relative z-10 rounded-xl border p-6 cursor-pointer group',
          'bg-surface border-border',
          'transition-all duration-300',
          expanded ? 'border-amber/30 shadow-amber-sm' : 'hover:border-amber/20'
        )}
        onClick={() => setExpanded(v => !v)}
      >
        <div className="flex items-start space-x-5">
          {/* Number node */}
          <div className="w-12 h-12 rounded-xl border border-border bg-surface-2 flex items-center justify-center shrink-0">
            <span className="font-sans text-sm font-medium text-amber">{step.number}</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between space-x-3">
              <div>
                <h3 className="text-ink font-semibold font-sans text-lg">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-amber mt-0.5">{step.subtitle}</p>
              </div>
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                className="text-ink-3 shrink-0 mt-1 text-sm"
              >
                ▾
              </motion.span>
            </div>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 space-y-4">
                    <p className="text-ink-2 text-sm leading-relaxed">{step.description}</p>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 font-sans text-xs">
                      <div className="flex items-center space-x-2">
                        <span className="text-amber">Deliverable:</span>
                        <span className="text-ink-2">{step.deliverable}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-amber">Timeline:</span>
                        <span className="text-ink-2">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
