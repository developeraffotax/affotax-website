/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'black': '0 8px 12px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
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
        Montserrat: ["Montserrat", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
         outfit: ["var(--font-outfit)"],
        
      }
    },
  },
  plugins: [
    require('flowbite-typography'),
  ],
  
};
