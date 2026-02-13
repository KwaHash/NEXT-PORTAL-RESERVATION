import { type Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		transform: {
  			'preserve-3d': 'preserve-3d'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			'primary-light': '#4263EB',
  			'primary-dark': '#3B5BDB'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			scale: 'scale 1s ease-in-out infinite',
  			'progress-fill': 'progress-fill 1s ease-in-out forwards',
  			'check-appear': 'check-appear 0.5s ease-in-out forwards',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			scale: {
  				'0%': {
  					transform: 'scale(1)'
  				},
  				'15%': {
  					transform: 'scale(1.2)'
  				},
  				'85%': {
  					transform: 'scale(1.2)'
  				},
  				'100%': {
  					transform: 'scale(1)'
  				}
  			},
  			'progress-fill': {
  				'0%': {
  					borderTopColor: 'transparent',
  					borderRightColor: 'transparent',
  					borderBottomColor: 'transparent',
  					borderLeftColor: 'transparent'
  				},
  				'25%': {
  					borderTopColor: 'primary-light',
  					borderRightColor: 'transparent',
  					borderBottomColor: 'transparent',
  					borderLeftColor: 'transparent'
  				},
  				'50%': {
  					borderTopColor: 'primary-light',
  					borderRightColor: 'primary-light',
  					borderBottomColor: 'transparent',
  					borderLeftColor: 'transparent'
  				},
  				'75%': {
  					borderTopColor: 'primary-light',
  					borderRightColor: 'primary-light',
  					borderBottomColor: 'primary-light',
  					borderLeftColor: 'transparent'
  				},
  				'100%': {
  					borderTopColor: 'primary-light',
  					borderRightColor: 'primary-light',
  					borderBottomColor: 'primary-light',
  					borderLeftColor: 'primary-light'
  				}
  			},
  			'check-appear': {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		}
  	}
  },
  plugins: [animate],
}
export default config
