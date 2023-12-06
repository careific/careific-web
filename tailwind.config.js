/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'blue': '#0068FB',
        'orange': '#FF9825',
        'pink': '#FF227A',
      },
      fontFamily: {
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}

