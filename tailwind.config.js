/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ], daisyui: {
    themes: ["light", "dark", "cupcake", "night"],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }, screens: {
        xs: "476px"
      }, transitionDuration: {
        '1500': '1500ms',
        '1700': '1700ms',
        '1800': '1800ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [require("daisyui", "@tailwindcss/aspect-ratio")],
}
