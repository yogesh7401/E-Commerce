/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#06283D',
        'secondary' : '#256D85',
        'teritory' : '#47B5FF',
        'light' : '#DFF6FF' 
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
