module.exports = {
   content: ["./public/**/*.{html,js}"],
   theme: {
      extend: {
         colors: {
            primary: "#14b8a6",
            secondary: "#64748b",
            dark: "#0f172a",
         },
         fontFamily: {
            inter: ['"inter"', "sans-serif"],
            stretchPro: ["'Stretch Pro'", "sans-serif"],
         },
         boxShadow: {
            divide: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)",
         },
      },
   },
   plugins: [],
   darkMode: "class",
};
