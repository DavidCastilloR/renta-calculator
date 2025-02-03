module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FBF2C0",
        primary: "#33658A",
        black: "#1C110A",
      },
      screens: {
        sm: "850px",
        // => @media (min-width: 640px) { ... }

        md: "900px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
