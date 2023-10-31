/** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors')
const withMT = require('@material-tailwind/react/utils/withMT')
module.exports = withMT({
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#26ADC9',
          secondary: '#26ADC926',
        },
        gray: {
          primary: '#BDBDBD',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    // preflight: false, // <== disable this!
  },
})
