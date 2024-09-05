/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightsteelblue: {
          "100": "#cacde5",
          "200": "#95accd",
          "300": "rgba(174, 200, 230, 0.5)",
        },
        darkgray: "#9e9e9e",
        black: "#000",
        darkslateblue: "rgba(11, 74, 164, 0.64)",
        gray: {
          "100": "#2a2123",
          "200": "#222228",
          "300": "#18181c",
        },
        darkslategray: {
          "100": "#3d3d49",
          "200": "#313139",
        },
        silver: "#c4c4c4",
        lavender: "#dfe7f5",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "8xs": "5px",
        "21xl": "40px",
        "11xl": "30px",
        xl: "20px",
        "9xl": "28px",
        "14xl": "33px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "6xl": "25px",
      xl: "20px",
      lg: "18px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "45xl": "64px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
