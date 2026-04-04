import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    // 8-step golden-ratio type scale (base 16px, ×1.618 from lg upward)
    // 1: 10px  2: 12px  3: 14px  4: 16px  5: 20px  6: 32px  7: 52px  8: 84px
    fontSize: {
      '2xs':  ['0.625rem', { lineHeight: '1rem' }],        // 10px — labels, legal
      'xs':   ['0.75rem',  { lineHeight: '1.25rem' }],     // 12px — tags, badges, mono
      'sm':   ['0.875rem', { lineHeight: '1.5rem' }],      // 14px — secondary body
      'base': ['1rem',     { lineHeight: '1.625rem' }],    // 16px — primary body
      'lg':   ['1.25rem',  { lineHeight: '1.75rem' }],     // 20px — lead text
      'xl':   ['2rem',     { lineHeight: '2.5rem' }],      // 32px — h3 / section titles
      '2xl':  ['3.25rem',  { lineHeight: '3.75rem' }],     // 52px — h2 / page headings
      '3xl':  ['5.25rem',  { lineHeight: '5.75rem' }],     // 84px — h1 / hero display
    },
    extend: {
      colors: {
        // Brand palette
        porcelain: '#fffffа',  // near-white (WCAG: 20.9:1 on black, 8.0:1 on charcoal)
        charcoal:  '#515052',  // medium gray (WCAG: 8.0:1 on porcelain)
        black:     '#000103',  // near-black
        graphite:  '#333138',  // dark gray
        cinnabar:  '#ff312e',  // red accent — use only on black/graphite, large text only on others
        // Existing site palette
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
