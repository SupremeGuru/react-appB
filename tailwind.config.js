/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {  
        'custom': '0px 4px 40px 0px rgba(0, 0, 0, 0.1)',  
      },
      fontFamily: {  
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};