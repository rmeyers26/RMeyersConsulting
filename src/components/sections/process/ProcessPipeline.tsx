'use client'

import { motion } from 'framer-motion'
import { processSteps } from '@/data/process'
import ProcessStepCard from '@/components/cards/ProcessStepCard'
import { staggerContainer } from '@/hooks/useScrollAnimation'

export default function ProcessPipeline() {
  return (
    <section className="section-padding bg-abyss">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-4 max-w-3xl mx-auto"
        >
          {processSteps.map((step, i) => (
            <ProcessStepCard
              key={step.number}
              step={step}
              index={i}
              isLast={i === processSteps.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
