'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticleBackground() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  if (!ready) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 hidden md:block">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            color: { value: ['#00d4ff', '#00ff88', '#7c3aed'] },
            shape: { type: 'circle' },
            opacity: { value: 0.25 },
            size: { value: { min: 1, max: 2.5 } },
            links: {
              enable: true,
              distance: 150,
              color: '#00d4ff',
              opacity: 0.12,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: 'none',
              random: true,
              straight: false,
              outModes: { default: 'out' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'grab' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: {
              grab: { distance: 180 },
              push: { quantity: 3 },
            },
          },
          detectRetina: true,
          background: { color: 'transparent' },
        }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
