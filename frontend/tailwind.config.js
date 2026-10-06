/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        primary: '#D62828',
        accent: '#FF1E1E'
      },
      fontFamily: {
        display: ['Oswald', 'Bebas Neue', 'Impact', 'sans-serif'],
        body: ['Exo 2', 'Rajdhani', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
