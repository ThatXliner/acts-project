/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        actsTheme: {
          primary: "#C0E8F9",
          secondary: "#EFC7E5",
          accent: "#EF959C",
          neutral: "#0D1F2D",
          "base-100": "#FFFFFF",
          info: "#87B2F8",
          success: "#43D0A1",
          warning: "#DB8906",
          error: "#DE215D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
