import Typography from "typography"

// const colors = {
//   bodyColor: "hsla(0,0%,80%,0.73)",
// }

const vondensteinTheme = {
  baseFontSize: "21px",
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: "Rosario",
      styles: ["700"],
    },
    {
      name: "Crimson Text",
      styles: ["400", "400i", "600"],
    },
  ],
  headerFontFamily: ["Rosario", "sans-serif"],
  bodyFontFamily: ["Crimson Text", "serif"],
  headerColor: "#fdf9f2",
  bodyColor: "#9a9a9a",
  headerWeight: "700",
  bodyWeight: 400,
  boldWeight: 600,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    return {
      a: {
        color: "inherit",
      },
      "a:hover": {
        textDecoration: "underline",
        textDecorationStyle: "solid",
      },
      hr: {
        height: "8px",
        color: "#1b1b1b",
        backgroundColor: "#1b1b1b",
        backgroundSize: "3px 3px",
        borderRadius: "4px",
        // width: "65%",
      },
    }
  },
  // plugins: [new CodePlugin()],
}

const typography = new Typography(vondensteinTheme)

export default typography
