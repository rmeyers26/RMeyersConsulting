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
        'bg-surface border border-border rounded-xl shadow-card',
        hover && 'transition-all duration-300 hover:shadow-card-hover hover:border-surface-2',
        className
      )}
    >
      {children}
    </div>
  )
}
