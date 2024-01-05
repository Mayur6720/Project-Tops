/* eslint-disable no-undef */
/**  @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}' ,
  ],
  theme: {
    extend: {
      colors : {
        'neutralWhite' : '#FFF',
        'brandPrimary' : '#4CAF4F',
        'neutralDGrey' : '#4D4D4D',
        'neutralSilver':'#F5F7FA',
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
}

