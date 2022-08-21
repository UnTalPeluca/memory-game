/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      'xs': '0.815rem',
      'sm': '0.875rem',
      'base': '0.94rem',
      'md:': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '2.75rem',
      '6xl': '3rem',
      '7xl': '3.5rem'
    },
    maxWidth: {
      'xs': '327px',
      'sm': '654px',
      'md': '689px',
      'lg': '1110px'
    },
    extend: {
      screens: {
        "xs": "480px"
      },
      colors: {
        "body-bg": "#152938",
        "dark-active": "#304859",
        "dark-hover": "#6395B8",
        "dark-idle": "#BCCED9",
        "primary-idle": "#FDA214",
        "primary-hover": "#FFB84A",
        "secondary-idle": "#DFE7EC",
        "secondary-hover": "#6395B8",
        "title": "#7191A5"
      },
      borderRadius: {
        "4xl": "26px"
      }
    },
  },
  plugins: [],
};
