import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '2rem', lg: '3rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        ink: 'hsl(var(--ink))',
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 6px)',
        md: 'calc(var(--radius) - 3px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 6px)',
        '2xl': 'calc(var(--radius) + 12px)',
        '3xl': 'calc(var(--radius) + 20px)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'var(--font-inter)', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: { tightest: '-0.045em' },
      boxShadow: {
        soft: '0 1px 2px rgba(2,6,23,.04), 0 12px 32px -16px rgba(2,6,23,.18)',
        lift: '0 2px 6px rgba(2,6,23,.05), 0 28px 60px -28px rgba(2,6,23,.35)',
        glow: '0 0 0 1px hsl(var(--primary)/.16), 0 20px 60px -24px hsl(var(--primary)/.55)',
      },
      keyframes: {
        'fade-up': { from: { opacity: '0', transform: 'translateY(14px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'aurora-drift': {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(3%,-4%,0) scale(1.08)' },
        },
        'caret-blink': { '0%,70%,100%': { opacity: '1' }, '20%,50%': { opacity: '0' } },
      },
      animation: {
        'fade-up': 'fade-up .6s cubic-bezier(.22,1,.36,1) both',
        marquee: 'marquee 42s linear infinite',
        'aurora-drift': 'aurora-drift 18s ease-in-out infinite',
        'caret-blink': 'caret-blink 1.1s steps(1) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
