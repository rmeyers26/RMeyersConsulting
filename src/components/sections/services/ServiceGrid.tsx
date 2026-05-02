'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import ServiceCard from '@/components/cards/ServiceCard'
import { services } from '@/data/services'
import { staggerContainer } from '@/hooks/useScrollAnimation'

const buckets = [
  { id: 'build',    label: 'Build',    description: 'Custom applications your team actually uses' },
  { id: 'data',     label: 'Data',     description: 'Clean data structures and connected systems' },
  { id: 'automate', label: 'Automate', description: 'Workflows that run themselves' },
] as const

export default function ServiceGrid() {
  return (
    <section className="section-padding bg-canvas">
      <div className="section-container space-y-20">
        {buckets.map((bucket) => {
          const bucketServices = services.filter(s => s.bucket === bucket.id)
          return (
            <div key={bucket.id}>
              <div className="mb-8">
                <SectionLabel>{bucket.label}</SectionLabel>
                <p className="text-ink-2 text-sm">{bucket.description}</p>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {bucketServices.map((service, i) => (
                  <ServiceCard key={service.id} service={service} index={i} />
                ))}
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
