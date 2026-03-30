import { cn } from '@/lib/utils'

interface TerminalWindowProps {
  children: React.ReactNode
  className?: string
  path?: string
  title?: string
}

export default function TerminalWindow({
  children,
  className,
  path = '~/rmeyers-consulting',
  title,
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden border border-border shadow-card',
        'bg-surface',
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-ghost truncate">
          {title ?? path}
        </span>
      </div>
      {/* Content */}
      <div className="p-5 font-mono text-sm leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export function TerminalLine({
  type,
  children,
}: {
  type: 'prompt' | 'output' | 'success' | 'comment'
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-2 min-h-[1.5rem]">
      {type === 'prompt' && (
        <span className="text-green-dim shrink-0">$</span>
      )}
      {type === 'comment' && (
        <span className="text-ghost/50 shrink-0">#</span>
      )}
      <span
        className={cn(
          type === 'prompt' && 'text-slate-light',
          type === 'output' && 'text-ghost pl-4',
          type === 'success' && 'text-green pl-4',
          type === 'comment' && 'text-ghost/50 italic'
        )}
      >
        {children}
      </span>
    </div>
  )
}
