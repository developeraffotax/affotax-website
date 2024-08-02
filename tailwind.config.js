/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors : {
        primary : '#ff7f45',
        secondary : '#FFFFFF',
        tertiary : '#000000',
        darkslategray: "#23314e",
        
        coral: "#ff7f45",
        seashell: "#f7efea",
        
      },
      spacing: {},
      

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        
      }
    },
  },
  plugins: [
    require('flowbite-typography'),
  ],
  
};
