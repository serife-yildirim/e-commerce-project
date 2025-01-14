// tailwind.config.js
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        Primary: '#23A6F0',
        Secondary: '#23856D',
        alert: '#E77C40',
        darkBackground: '#252B42',
        textColor: '#252B42',
        SecondaryTextColor: '#737373',
        muted: '#999999',
      },
      height: {
        
        cardBestceller: '425px',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
   
      const newUtilities = {
        '.h6': { fontSize: '16px' },
        '.h7': { fontSize: '14px' },
      }
      addUtilities(newUtilities)
    }),
  ],
}
