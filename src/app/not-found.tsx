import GlowButton from '@/components/ui/GlowButton'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-void flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-mono text-cyan text-sm mb-4">// 404</div>
        <h1 className="text-xl md:text-2xl font-bold text-slate-light font-sans mb-4">
          Page Not Found
        </h1>
        <p className="text-ghost mb-8">
          This route doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="font-mono text-xs text-ghost/50 mb-8">
          <span className="text-green-dim">$</span> cd ~/home
        </div>
        <GlowButton href="/" variant="primary">
          Back to Home
        </GlowButton>
      </div>
    </div>
  )
}
