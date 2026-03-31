'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { processSteps } from '@/data/process'
import { useScrollAnimation, staggerContainer } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

export default function ProcessPreview() {
  const { ref, variants, animate } = useScrollAnimation()

  return (
    <section id="how-we-work" className="section-padding bg-abyss relative overflow-hidden scroll-mt-28 md:scroll-mt-24">
      <div className="section-container">
        <motion.div ref={ref} variants={variants} initial="hidden" animate={animate} className="mb-12">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-light font-sans mb-4">
            From Idea to Running Software
          </h2>
          <p className="text-ghost max-w-xl">
            A clear process means no surprises. You know what we&apos;re doing, why, and what comes next — every step of the way.
          </p>
        </motion.div>

        {/* Horizontal pipeline on desktop, vertical on mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative"
        >
          {/* Desktop: horizontal flex */}
          <div className="hidden md:flex items-start gap-0 relative">
            {processSteps.map((step, i) => (
              <div key={step.number} className="flex items-start flex-1">
                {/* Step card */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: i * 0.1 },
                    },
                  }}
                  className="flex-1 flex flex-col items-center text-center px-3"
                >
                  {/* Node */}
                  <div className={cn(
                    'w-12 h-12 rounded-xl border flex items-center justify-center mb-4 relative z-10',
                    'bg-surface border-border',
                    'group-hover:border-cyan/50'
                  )}>
                    <span className="font-mono text-sm font-bold text-green">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-slate-light font-semibold font-sans mb-1">
                    {step.title}
                  </h3>
                  <p className="font-mono text-xs text-cyan-dim mb-2">
                    {step.subtitle}
                  </p>
                </motion.div>

                {/* Connector line between steps */}
                {i < processSteps.length - 1 && (
                  <div className="flex items-center self-start mt-6 -mx-1 shrink-0">
                    <svg width="40" height="12" className="overflow-visible">
                      <line
                        x1="0" y1="6" x2="40" y2="6"
                        stroke="#00d4ff"
                        strokeWidth="1.5"
                        strokeDasharray="8 4"
                        className="flow-line"
                      />
                      <polygon points="36,3 40,6 36,9" fill="#00d4ff" opacity="0.7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical list */}
          <div className="flex flex-col gap-0 md:hidden relative">
            {/* Vertical flow line */}
            <div className="absolute left-6 top-0 bottom-0 w-px">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <line
                  x1="0" y1="0" x2="0" y2="100%"
                  stroke="#00d4ff"
                  strokeWidth="1.5"
                  strokeDasharray="8 4"
                  className="flow-line"
                />
              </svg>
            </div>

            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: i * 0.1 },
                  },
                }}
                className="flex items-start gap-5 pb-8 last:pb-0"
              >
                {/* Node */}
                <div className="w-12 h-12 rounded-xl border border-border bg-surface flex items-center justify-center shrink-0 relative z-10">
                  <span className="font-mono text-sm font-bold text-green">{step.number}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-slate-light font-semibold font-sans">{step.title}</h3>
                  <p className="font-mono text-xs text-cyan-dim mt-0.5">{step.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/process"
            className="font-mono text-sm text-cyan-dim hover:text-cyan transition-colors"
          >
            See Our Full Process →
          </Link>
        </div>
      </div>
    </section>
  )
}
