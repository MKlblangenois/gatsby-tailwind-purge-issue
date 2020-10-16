module.exports = {
   future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
   },
   purge: {
      layers: ["components", "utilities"],
      content: ["./src/**/*.js"],
      safelist: ["bg-red-500"],
   },
   theme: {
      fontFamily: {
         sans: ["Nunito Sans", "sans-serif"],
      },
   },
   variants: {},
   plugins: [require("@tailwindcss/ui")],
};
