/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				'3xl': '9px 8px 0px 0px hsl(0, 0%, 7%)',
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
			},
			fontFamily: {
				redHatText: ['Red Hat Text Variable', 'sans-serif'],
			},
			colors: {
				red: 'hsl(14, 86%, 42%)',
				'red-dark': 'hsl(14, 86%, 30%)',
				'green': ' hsl(159, 69%, 38%)',
				white: '#ffffff',
				black: 'hsl(0, 0%, 7%)',
				'rose-50': 'hsl(20, 50%, 98%)',
				'rose-100': 'hsl(13, 31%, 94%)',
				'rose-300': 'hsl(14, 25%, 72%)',
				'rose-400': 'hsl(7, 20%, 60%)',
				'rose-500': 'hsl(12, 20%, 44%)',
				'rose-900': 'hsl(14, 65%, 9%)'
			},
			gridTemplateColumns: {
				'70-30': '70% 30%',
				'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
				'auto-fit-350': 'repeat(auto-fill, minmax(350px, 1fr))',
			},
			keyframes: {
				"fade-in": {
					'0%': { opacity: '0%' },
					'100%': { opacity: '100%' },
				}
			},
			animation: {
				"fade-in": 'fade-in 0.5s ease-in-out',
			}
		},
	},
	plugins: [],
}
