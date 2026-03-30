import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'cyan' | 'green' | 'purple' | 'ghost'
  className?: string
}

export default function Badge({ children, variant = 'ghost', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-mono text-xs px-2.5 py-1 rounded-md border',
        variant === 'cyan'   && 'bg-cyan/10 border-cyan/30 text-cyan',
        variant === 'green'  && 'bg-green/10 border-green/30 text-green',
        variant === 'purple' && 'bg-purple/10 border-purple/30 text-purple',
        variant === 'ghost'  && 'bg-surface border-border text-ghost',
        className
      )}
    >
      {children}
    </span>
  )
}
