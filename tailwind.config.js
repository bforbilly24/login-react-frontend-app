/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			lineHeight: {
				'login-125': '125%',
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.login-bg-cover': {
					backgroundImage: "url('/public/background-cover.webp')",
					backgroundSize: 'cover',
					opacity: '10%',
				},
			});
		}),
	],
};
