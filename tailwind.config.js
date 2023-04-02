/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  // NOTE: It's fixing flickering issue
  important: '#__mtg',
  theme: {
    extend: {},
  },
  plugins: [],
}
