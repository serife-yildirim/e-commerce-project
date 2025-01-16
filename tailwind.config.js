// tailwind.config.js
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ProductCard ve HomePage bileşenlerinde kullanılan renkler
        Primary: '#23A6F0',
        Secondary: '#23856D',
        Secondary2: '#3C403D',
        lightBackground: '#FFFFFF',
        darkBackground: '#252B42',
        succes: '#20C071',    
        alert: '#E77C40',
        muted: '#BDBDBD',
        danger: '#E74040',
        disabledElement: '#8EC2F2',
        lightGray: '#FAFAFA',
        textColor: '#252B42',
        SecondaryTextColor: '#737373',
        lightTextColor: '#FFFFFF',
        lightGray2: '#E6E6E6',
        // Eğer "text-Secondary" farklı bir renkse buraya ekleyin
        Secondary: '#23856D',
      },
      width: {
        // ProductCard bileşeninde kullanılan genişlikler
        "Card": "325px",
      },
      height: {
        // ProductCard ve HomePage bileşenlerinde kullanılan yükseklikler
        'Category': '500px',
        'CategorySmall': '250px',
        'ProductCard': '425px',
        'BlogCard': '300px',
      },
    },
    
    headers: {
      h1: "58px",
      h2: "40px",
      h3: "30px",
      h4: "24px",
      h5: "20px",
      h6: "16px",
      h7: "14px",
      h8: "12px",
    }
  },
  plugins: [
    // Başlık boyutlarını ekleyen plugin
    plugin(function({ addUtilities, theme }) {
      const headers = theme('headers');
      const headerUtilities = Object.entries(headers).reduce((acc, [key, value]) => {
        acc[`.${key}`] = { fontSize: value };
        return acc;
      }, {});

      addUtilities(headerUtilities);
    }),

    // Tüm elementlere global border ekleyen plugin
    plugin(function ({ addUtilities }) {
      addUtilities({
        "*": {
          border: "1px solid rgba(0, 0, 0, 0.5)"
        },
      });
    }),
  ],
}
