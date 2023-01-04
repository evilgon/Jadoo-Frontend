/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"]
      },
      backgroundImage: {
        'complex': "url('assets/images/complex.png')",
        
      },
      boxShadow:{
        'c1': '0px 4px 14px rgba(0, 0, 0, 0.12)'
      },
      colors: {
        red: '#D85950',
        purple: '#C2A1C5',
        orange: '#F7B77F',
        blue: '#00A9A8',
        green: '#5FB269',
        backgroundgray: '#EEF1F3',
        gray3: '#636363',
        lightgray: '#F3F3F3',
        lightgray2: '#F9F9F9',
        gray2:'#494949',
        gray: '#919190',
        black: '#373939',
        darkblack: '#000000',
        white: '#FFFFFF',
        gray4: '#DCDCDC',
        gray4: '#D0D0D0',
      },
      fontSize:{
        'c16': '16px',
        'c18': '18px',
        'c56': '56px'
      },
      lineHeight:{
        'c19':'19px',
        'c22':'22px',
        'c26': '26px',
        'c68':'68px'

      },
      
    },
  },
  plugins: [],
}