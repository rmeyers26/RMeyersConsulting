'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { processSteps } from '@/data/process'
import { useScrollAnimation, staggerContainer } from '@/hooks/useScrollAnimation'

export default function ProcessPreview() {
  const { ref, variants, animate } = useScrollAnimation()

  return (
    <section id="how-we-work" className="section-padding bg-canvas relative overflow-hidden scroll-mt-28 md:scroll-mt-24">
      <div className="section-container">
        <motion.div ref={ref} variants={variants} initial="hidden" animate={animate} className="mb-12">
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-xl font-bold text-ink font-sans mb-4">
            No surprises.
          </h2>
          <p className="text-ink-2 max-w-xl">
            A clear process. You know what we&apos;re doing, and what comes next.
          </p>
        </motion.div>

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
                  <div className="w-12 h-12 rounded-xl border border-border bg-surface-2 flex items-center justify-center mb-4 relative z-10">
                    <span className="font-sans text-sm font-medium text-amber">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-ink font-semibold font-sans mb-1">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-amber mb-2">
                    {step.subtitle}
                  </p>
                </motion.div>

                {/* Connector between steps */}
                {i < processSteps.length - 1 && (
                  <div className="flex-1 border-t border-border self-start mt-6 -mx-1 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical list */}
          <div className="flex flex-col gap-0 md:hidden relative pl-0">
            {/* Vertical connector */}
            <div className="absolute left-6 top-6 bottom-6 border-l border-border" />

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
                <div className="w-12 h-12 rounded-xl border border-border bg-surface-2 flex items-center justify-center shrink-0 relative z-10">
                  <span className="font-sans text-sm font-medium text-amber">{step.number}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-ink font-semibold font-sans">{step.title}</h3>
                  <p className="font-sans text-xs text-amber mt-0.5">{step.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/process"
            className="font-sans text-sm text-amber hover:text-amber-dim transition-colors"
          >
            See Our Full Process →
          </Link>
        </div>
      </div>
    </section>
  )
}
