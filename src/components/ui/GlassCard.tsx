import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glow?: 'cyan' | 'green' | 'none'
  hover?: boolean
}

export default function GlassCard({
  children,
  className,
  glow = 'none',
  hover = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'bg-surface/60 backdrop-blur-sm border border-border rounded-xl shadow-card',
        hover && 'transition-all duration-300 hover:border-cyan/40 hover:shadow-glow-sm',
        glow === 'cyan' && 'border-cyan/30 shadow-glow-sm',
        glow === 'green' && 'border-green/30',
        className
      )}
    >
      {children}
    </div>
  )
}
