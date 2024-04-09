/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        setCol1: '#025464',
        setCol2: '#E57C23',
        setCol3: '#E8AA42',
        setCol4: '#F8F1F1',
        fallCol1: '#FFBB5C',
        fallCol2: '#FF9B50',
        fallCol3: '#E25E3E'
      }
    },
  },
  plugins: [],
}

