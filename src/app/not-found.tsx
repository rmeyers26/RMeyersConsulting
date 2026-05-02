import GlowButton from '@/components/ui/GlowButton'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-sans text-amber text-sm mb-4 tracking-widest uppercase">404</div>
        <h1 className="text-xl md:text-2xl font-bold text-ink font-sans mb-4">
          Page Not Found
        </h1>
        <p className="text-ink-2 mb-8">
          This route doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <GlowButton href="/" variant="primary">
          Back to Home
        </GlowButton>
      </div>
    </div>
  )
}
