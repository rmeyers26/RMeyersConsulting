'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import type { Service } from '@/types'
import { cn } from '@/lib/utils'

const SyntaxHighlighter = dynamic(
  () => import('react-syntax-highlighter').then(m => m.Prism),
  { ssr: false, loading: () => <pre className="text-cyan text-xs opacity-70">loading...</pre> }
)

// Dynamically import style
let codeStyle: Record<string, React.CSSProperties> | undefined

if (typeof window !== 'undefined') {
  import('react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus').then(m => {
    codeStyle = m.default
  })
}

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [showCode, setShowCode] = useState(false)

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
        'relative rounded-xl border p-6 overflow-hidden cursor-pointer group',
        'bg-surface/60 backdrop-blur-sm border-border',
        'transition-all duration-300',
        showCode ? 'border-cyan/50 shadow-glow-sm' : 'hover:border-cyan/30 hover:shadow-glow-sm'
      )}
      onClick={() => setShowCode(v => !v)}
    >
      {/* Top accent bar */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-[2px] transition-all duration-300',
          service.accentColor === 'cyan'   && 'bg-cyan/0 group-hover:bg-cyan/60',
          service.accentColor === 'green'  && 'bg-green/0 group-hover:bg-green/60',
          service.accentColor === 'purple' && 'bg-purple/0 group-hover:bg-purple/60',
          showCode && service.accentColor === 'cyan'   && 'bg-cyan/60',
          showCode && service.accentColor === 'green'  && 'bg-green/60',
          showCode && service.accentColor === 'purple' && 'bg-purple/60',
        )}
      />

      {/* Front content */}
      <AnimatePresence mode="wait">
        {!showCode ? (
          <motion.div
            key="front"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className={cn(
              'text-2xl mb-4',
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
            <ul className="space-y-1 mb-4">
              {service.deliverables.map((d, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-ghost/80">
                  <span className="text-cyan-dim">›</span>
                  {d}
                </li>
              ))}
            </ul>
            <span className="font-mono text-xs text-cyan-dim group-hover:text-cyan transition-colors">
              See example →
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="code"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-cyan-dim">{service.title}</span>
              <span className="font-mono text-xs text-ghost/50">click to close</span>
            </div>
            <div className="rounded-lg overflow-hidden text-xs">
              <SyntaxHighlighter
                language={service.language}
                style={codeStyle ?? {}}
                customStyle={{
                  background: '#0a0f1e',
                  margin: 0,
                  padding: '12px',
                  fontSize: '11px',
                  lineHeight: '1.6',
                }}
                wrapLongLines
              >
                {service.codeSnippet.trim()}
              </SyntaxHighlighter>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
