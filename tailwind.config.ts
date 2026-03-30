import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void:          '#050810',
        abyss:         '#0a0f1e',
        surface:       '#0d1526',
        'surface-2':   '#111b30',
        border:        '#1a2744',
        cyan:          '#00d4ff',
        'cyan-dim':    '#00a3c4',
        green:         '#00ff88',
        'green-dim':   '#00c96e',
        purple:        '#7c3aed',
        ghost:         '#8892a4',
        'slate-light': '#c4cdd8',
      },
      fontFamily: {
        mono:  ['var(--font-mono)', 'JetBrains Mono', 'Fira Code', 'monospace'],
        sans:  ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'glow-cyan':  'radial-gradient(ellipse at center, rgba(0,212,255,0.15) 0%, transparent 70%)',
        'glow-green': 'radial-gradient(ellipse at center, rgba(0,255,136,0.1) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':        'float 6s ease-in-out infinite',
        'blink':        'blink 1s step-end infinite',
        'slide-up':     'slideUp 0.6s ease-out forwards',
        'fade-in':      'fadeIn 0.8s ease-out forwards',
        'glow-pulse':   'glowPulse 2s ease-in-out infinite',
        'marquee':      'marquee 30s linear infinite',
        'flow':         'flowDash 0.8s linear infinite',
        'bounce-slow':  'bounceSlow 2s ease-in-out infinite',
      },
      keyframes: {
        float:      { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        blink:      { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        slideUp:    { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:     { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        glowPulse:  { '0%,100%': { opacity: '0.5' }, '50%': { opacity: '1' } },
        marquee:    { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        flowDash:   { 'to': { strokeDashoffset: '-24' } },
        bounceSlow: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      boxShadow: {
        'glow-cyan':  '0 0 20px rgba(0, 212, 255, 0.4)',
        'glow-green': '0 0 20px rgba(0, 255, 136, 0.4)',
        'glow-sm':    '0 0 10px rgba(0, 212, 255, 0.2)',
        'card':       '0 4px 32px rgba(0, 0, 0, 0.4)',
        'glass':      'inset 0 1px 0 rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
}

export default config
