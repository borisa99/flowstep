module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3471E7',
        gray: {
          900: '#121827',
          800: '#38414B',
          700: '#68737E',
          600: '#919CA8',
          500: '#AFB9C6',
          400: '#BAC1CB',
          300: '#D6DDE4',
          250: '#E5E5E5',
          200: '#E8ECF1',
          100: '#EFF2F6',
          50: '#F6F7F9',
          25: '#FCFCFD',
        },
        blue: {
          900: '#234180',
          800: '#254AA3',
          700: '#2C5DCC',
          600: '#3471E7',
          500: '#4B90F2',
          400: '#6BB0F7',
          300: '#93C9FA',
          200: '#BADCFC',
          100: '#D5E8FD',
          50: '#F1F8FE',
        },
        success: '#3FA758',
        successBg: '#E8F7EB',
        critical: '#EB5D57',
        criticalBg: '#FAF0F0',
        warning: '#EE8D20',
        warningBg: '#F7F0E8',
        other: '#EE8D20',
        otherBg: '#F7F0E8',
      },
      spacing: {
        0.5: '0.125rem',
        1.5: '0.375rem',
        2.8: '0.7rem', // ~11.25px
        12.5: '3.125rem',
        13: '3.25rem',
        15: '3.75rem',
        15.5: '3.825rem',
        17: '4.25rem',
        18.5: '4.625rem',
        19: '4.75rem',
        21: '5.25rem',
        22.5: '5.625rem',
      },
      minHeight: {
        appCardImg: '19.5rem',
        5: '1.25rem',
      },
      minWidth: {
        5: '1.25rem',
      },
      width: {
        2.75: '0.45rem', // ~7.2px
        4.5: '1.125rem',
        62: '15.5rem',
        68: '17rem',
        76: '19.5rem',
        84: '21rem',
        92: '23.5rem',
        100: '25rem',
        108: '27rem', // 432px
        128: '32rem',
        sm: '5.188rem', // ~83px
        md: '7.688rem', // ~123px
        lg: '10.875rem', // ~174px
        xl: '24.313rem', // 389px
        '2xl': '43rem', // 688px
      },
      height: {
        4.5: '1.125rem',
        footer: '18.5rem',
        header: '3.5rem',
        'appCard-base': '24.25rem',
        'appCard-lg': '28.2rem',
        'screentCard-base': '33.5rem',
        'screenCard-lg': '36rem',
        76: '19.5rem',
        50: '12.5rem', // 200px
        featured: '19.5rem',
      },
      borderRadius: {
        default: '0.625rem', // 10px
        double: '1.25rem', // 20px
        '4xl': '2rem', // 32px
        4: '0.25rem',
        100: '6.25rem', // 100px
      },
      borderWidth: {
        1: '1px',
      },
      boxShadow: {
        default:
          '0px 0px 40px 0px #0000000F, 0px 8px 20px 0px #00000008, 0px 1px 8px 0px #00000017',
        custom:
          '0px 0px 40px 0px rgba(0, 0, 0, 0.04), 0px 0px 20px 0px rgba(0, 0, 0, 0.02)',
      },
      aspectRatio: {
        '9/19.5': '9 / 19.5',
      },
      rotate: {
        9.71: '9.71deg',
      },
    },
    fontFamily: {
      light: ['Nunito', 'sans-serif'],
      regular: ['Nunito', 'sans-serif'],
      bold: ['Nunito', 'sans-serif'],
      extrabold: ['Nunito', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '24px'],
      l: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['28px', '36px'],
      '4xl': ['32px', '40px'],
      '5xl': ['40px', '48px'],
      '6xl': ['48px', '56px'],
    },
  },
  plugins: [],
}
