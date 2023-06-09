/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './public/**/*.html',
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },

      colors: {
        violet: {
          DEFAULT: '#4338CA',
          //50: '#EAE9F9',
          50: '#EEF2FF',
          100: '#DBD9F5',
          200: '#BDB9EC',
          300: '#9E99E4',
          400: '#8078DB',
          500: '#6158D3',
          600: '#4338CA',
          700: '#332A9F',
          800: '#251F73',
          900: '#171347',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
