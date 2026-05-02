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
        // Light palette
        canvas:        '#FAFAF8',  // warm off-white body bg
        surface:       '#F4F3F0',  // card/section bg
        'surface-2':   '#ECEAE5',  // hover states, dividers
        border:        '#DDD9D2',  // warm light gray border
        ink:           '#1C1917',  // warm near-black (headings, body)
        'ink-2':       '#57534E',  // medium warm gray (secondary text)
        'ink-3':       '#A8A29E',  // light warm gray (placeholders, tertiary)
        amber:         '#C8641A',  // primary accent
        'amber-dim':   '#A8521A',  // hover state
        'amber-light': '#FDF0E6',  // backgrounds, chips
      },
      fontFamily: {
        mono:    ['var(--font-mono)', 'JetBrains Mono', 'Fira Code', 'monospace'],
        sans:    ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Instrument Serif', 'Georgia', 'serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in':  'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      },
      boxShadow: {
        'card':       '0 1px 4px rgba(28,25,23,0.06), 0 4px 16px rgba(28,25,23,0.05)',
        'card-hover': '0 2px 8px rgba(28,25,23,0.08), 0 8px 24px rgba(28,25,23,0.08)',
        'amber-sm':   '0 0 0 3px rgba(200,100,26,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
