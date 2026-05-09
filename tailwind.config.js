/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'eu-blue': '#24BFD6',
        'eu-dark-blue': '#2B4AA5',
        'slate-navy': '#062B3D',
        'logo-sky': '#9BD9F6',
        'logo-aqua': '#21D3D5',
        'logo-purple': '#6D48D8',
        'ice-blue': '#F2FBFD',
        'ink-blue': '#041B2A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
