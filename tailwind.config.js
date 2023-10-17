/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      colors:{
        bg0:"#ffe2e6",
        bg1:'#fff4de',
        bg2:"#dcfce7",
        bg3:"#f4e8ff",
        btn1:"#f9597d",
        btn2:'#ff947a',
        btn3:"#3cd856",
        btn4:"#bf83fe"
      }

    },
  },
  plugins: [],
};
