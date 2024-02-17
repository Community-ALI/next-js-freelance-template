import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors: {
      primary: "#FFFFFF",    
      secondary: "#2B4C3B",   
      accent: "#182C25",
      dark: "#1E1E1E",
      hover: "#dedede",
      background: "#2B4C3B"   
    },

    screens: {
      'monitor': {'min': '2000px'},       // 1600px and beyond
      'laptop': {'max': '1440px'},        // 1250px up to 1440px
      'laptop-s': {'max': '1250px'},      // 1024px up to 1250px
      'tablet': {'max': '1024px'},        // 768px up to 1024px
      'tablet-s': {'max': '768px'},       // 480px up to 768px
      'mobile': {'max': '480px'},         // 340px up to 480px
      'mobile-s': {'max': '340px'},       // 0px up to 340px
    },

    extend: {

      animation:{
        glow: "glow 3s ease-in-out",
        topCover: "opening 1.5s ease-in-out forwards 1.8s",
        bottomCover: "opening 1.2s ease-in-out forwards 2s",
        company: "translate 1.8s ease-in-out forwards .4s",
        commpany: "translate 1.8s ease-in-out forwards .3s"
      },

      keyframes: {
        glow: {
          "0%": { opacity: "0%" },
          "50%": { opacity: "100%" },
          "100%": { opacity: "0%" }
        },

        opening: {
          "0%": {opacity: "100%"},
          "70%": {transform: "translateX(110vw)", opacity: "100%"},
          "100%": {transform: "translateX(110vw)", opacity: "0%"},
        },

        translate: {
          '0%': {opacity: '0', scale:"1" },
          '20%': {opacity: '1', scale:"1.1"},
          '75%': {opacity: '1', scale:"1.1" },
          '90%': {opacity: '0', scale:"1.1" },
        },

      },

      backgroundImage: {
        'background': "url('/images/background2.JPG')",
      },
    },
  },
  plugins: [],
};
export default config;
