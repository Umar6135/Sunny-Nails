/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7F1E0",
        secondary: "#302F34",
        darkyellow: "#FDC41F",
        darkyellow200: "#EEB614",
      },
      fontSize: {

        heading: '65px',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      container: {
        center: true,
        screens: {
          sm: "100%",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-clip-path': {
          clipPath: 'inset(0 40% 0 40%)',
        },
      });
    },
    function ({ addComponents, theme }) {
      addComponents({
        '.pill-btn': {
          fontSize: '14px',
          fontFamily: theme('fontFamily.montserrat').join(', '),
          lineHeight: '1.23',
          display: 'block',
          paddingBlock: '9.5px',
          paddingInline: '20px',
          color: theme('colors.secondary'),
          fontWeight: '500',
          borderRadius: "55px",
          border: "1px solid theme('colors.secondary')"
        },
        '.pill-btn.active': {
          backgroundColor: theme('colors.darkyellow'),
          border: "0",
        },
        ".gallery-card:hover .gallery-card-info": {
          opacity: "1",
          zIndex: "1",
        },


        ".gallery-card-info": {
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        ".accordion-header.active h4": {
          color: theme('colors.darkyellow'),
        },
        '.theme-btn': {
          display: 'flex',
          backgroundColor: theme('colors.darkyellow'),
          alignItems: 'center',
          fontFamily: theme('fontFamily.inter').join(', '),
          height: 'fit-content',
          padding: '4px 4px 4px 24px',
          borderRadius: '58px',
          fontSize: '14px',
          fontWeight: '400',
          color: theme('colors.secondary'),
          transition: "0.3s",
        },
        '.theme-btn:hover': {
          backgroundColor: theme('colors.darkyellow200'),
        },
        '.theme-btn span': {
          marginLeft: '18px',
        },
        '.theme-btn img': {
          width: 'auto',
          height: 'auto',
        },
        '.owl-dots': {
          position: "absolute",
          bottom: "40px",
          display: "flex",
          gap: "4px",
          left: "50%",
        },
        '.owl-dots button': {
          width: "10px",
          height: "10px",
          backgroundColor: "#F7F1E0 !important",
          borderRadius: "50%",
        },
        '.owl-dots button.active': {
          backgroundColor: "#FDC41F !important",
        },

      });
    },
  ],
};
