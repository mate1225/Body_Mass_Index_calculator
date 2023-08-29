/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Blue: "hsla(227, 92%, 58%, 1)",
        Borders: "hsla(200, 24%, 88%, 1)",
        Dark_Electric_Blue: "hsla(215, 17%, 44%, 1)",
        Gunmetal: "hsla(215, 31%, 21%, 1)",
        Pure_White: "hsla(0, 0%, 100%, 1)",
        Labels: "hsla(215, 17%, 45%, 1)",
        bgColor: "hsla(227, 92%, 58%, 0.15)",
      },
      backgroundImage: {
        gradient1:
          "linear-gradient(315deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)",
        gradient2: "linear-gradient(90deg, #345FF6 0%, #587DFF 100%)",
      },
      boxShadow: {
        cardShadow: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
      },
    },
  },
  plugins: [],
};
