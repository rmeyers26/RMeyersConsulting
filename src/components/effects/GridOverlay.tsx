import { cn } from '@/lib/utils'

interface GridOverlayProps {
  className?: string
  variant?: 'dots' | 'lines'
}

export default function GridOverlay({ className, variant = 'dots' }: GridOverlayProps) {
  if (variant === 'dots') {
    return (
      <div
        className={cn('absolute inset-0 pointer-events-none', className)}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(28,25,23,0.025) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
    )
  }

  return (
    <div
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{
        backgroundImage: `
          linear-gradient(rgba(28,25,23,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(28,25,23,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    />
  )
}
