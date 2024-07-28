/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlueDarkModeBackground: "hsl(207, 26%, 17%)",
        veryDarkBlueLightModeText: "hsl(200, 15%, 8%)",
        darkGrayLightModeInput: "hsl(0, 0%, 52%)",
        veryLightGrayLightModeBackground: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
