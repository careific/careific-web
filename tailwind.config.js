/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'blue': '#0068FB',
        'orange': '#FF9825',
        'pink': '#FF227A',
        'gray': '#CACACA'
      },
      fontFamily: {
        inter: ['Inter']
      },
      height: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

