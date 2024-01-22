import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const breakpoints = {
  xs: '20rem', /* 320px */
  sm: '24rem', /* 384px */
  md: '28rem', /* 448px */
  lg: '32rem', /* 512px */
  xl: '36rem', /* 576px */
  '2xl': '42rem', /* 672px */
  '3xl': '48rem', /* 768px */
  '4xl': '56rem', /* 896px */
  '5xl': '64rem', /* 1024px */
  '6xl': '72rem', /* 1152px */
  '7xl': '78rem', /* 1248px */
  '8xl': '90rem', /* 1440px */
  '9xl': '120rem' /* 1920px */
}

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '0px',
        xxs: '380px',
        '3xl': '1680px'
      },
      spacing: {
        gutter: 'var(--inner-gutter)',
        'spacing-1': 'var(--spacing-spacing-1)',
        'spacing-2': 'var(--spacing-spacing-2)',
        'spacing-3': 'var(--spacing-spacing-3)',
        'spacing-4': 'var(--spacing-spacing-4)',
        'spacing-5': 'var(--spacing-spacing-5)',
        'spacing-6': 'var(--spacing-spacing-6)',
        'spacing-7': 'var(--spacing-spacing-7)',
        'spacing-8': 'var(--spacing-spacing-8)',
        'spacing-9': 'var(--spacing-spacing-9)',
        'spacing-10': 'var(--spacing-spacing-10)',
        'spacing-11': 'var(--spacing-spacing-11)'
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      },
      fontSize: {
        h1: 'clamp(2.6rem,4vw,4.2rem)'
      },
      colors: {
        dark: 'hsl(var(--dark))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      width: {
        '1-cols': 'calc(((1 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (1 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '2-cols': 'calc(((2 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (2 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '3-cols': 'calc(((3 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (3 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '4-cols': 'calc(((4 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (4 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '5-cols': 'calc(((5 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (5 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '6-cols': 'calc(((6 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (6 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '7-cols': 'calc(((7 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (7 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '8-cols': 'calc(((8 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (8 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '9-cols': 'calc(((9 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (9 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '10-cols': 'calc(((10 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (10 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '11-cols': 'calc(((11 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (11 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '12-cols': 'calc(((12 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (12 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '1/2-cols': 'calc(50% - var(--inner-gutter))',
        '1/3-cols': 'calc(33.333% - var(--inner-gutter))',
        ...breakpoints
      },
      height: breakpoints,
      inset: breakpoints,
      // margin: {
      //   '1-cols': 'calc(((((1 / var(--container-grid-columns, var(--grid-columns))) * 100%) - (var(--inner-gutter) - (1 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter)))) + var(--inner-gutter)))',
      //   '2-cols': 'calc(((((2 / var(--container-grid-columns, var(--grid-columns))) * 100%) - (var(--inner-gutter) - (2 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter)))) + var(--inner-gutter)))'
      // },
      maxWidth: {
        '8xl': breakpoints['8xl'],
        '9xl': breakpoints['9xl']
      },
      flex: {
        full: '0 0 100%'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      borderRadius: {
        '2xl': 'calc(var(--radius) + 4px)',
        xl: 'calc(var(--radius) + 2px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [],
  corePlugins: {
    container: false
  }
}
export default config
