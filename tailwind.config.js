/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#141717',
        black: '#000',
        'black-600': '#131313',
        'grey-50': '#CBCBCB',
        'grey-100': '#FEFEFE',
        'gray-200': '#F1F3F6',
        'gray-300': '#E4E9EC',
        'gray-400': '#A5AAAC',
        'gray-500': '#616769',
        'grey-600': '#6D7275',
        'grey-700': '#6C7275',
        'danger-100': '#FEEFF0',
        'danger-300': '#EA373F',
        'danger-600': '#7D0610',
        'success-100': '#EFF9F6',
        'success-300': '#0FBD86',
        'success-600': '#2C6B5C',
        'warning-100': '#FEFDE9',
        'warning-300': '#E3982B',
        'warning-600': '#92542C',
      },
      container: {
        center: true,
        maxWidth: {
          default: '112rem',
        },
        padding: {
          default: '40rem',
        },
      },
      fontSize: {
        ssm: ['1.2rem', '2rem'],
        sm: ['1.4rem', '2.4rem'],
        base: ['1.6rem', '2.6rem'],
        lg: ['1.8rem', '2.8rem'],
        xl: ['2rem', '3.2rem'],
        '2xl': ['2.4rem', '3rem'],
        '3xl': ['2.8rem', '3.4rem'],
        '6xl': ['3rem', '3.6rem'],
        '7xl': ['4rem', '4.4rem'],
        '8xl': ['5.4rem', '5.8rem'],
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

