/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,html}"],
  theme: {
    colors: {
      bgcolor: "#ecf8fe",
      txtcolor: "#010d13",
      primary: "#0b8fd0",
      secondary: "#d5effd",
      accent: "#054667",
      dark_bgcolor: "#010d13",
      dark_txtcolor: "#ecf8fe",
      dark_primary: "#2fb2f4",
      dark_secondary: "#021d2c",
      dark_accent: "#99dafa",
      // arc colors section
      foregroundPrimary: "var(--arc-palette-foregroundPrimary)",
      foregroundSecondary: "var(--arc-palette-foregroundSecondary)",
      foregroundTertiary: "var(--arc-palette-foregroundTertiary)",
      maxContrast: "var(--arc-palette-maxContrastColor)",
      minContrast: "var(--arc-palette-minContrastColor)",
      backgroundExtra: "var(--arc-palette-backgroundExtra)",
      background: "var(--arc-palette-background)",
      focus: "var(--arc-palette-focus)",
      hover: "var(--arc-palette-hover)",
      cutout: "var(--arc-palette-cutoutColor)",
      title: "var(--arc-palette-title)",
      subtitle: "var(--arc-palette-subtitle)",
      "background-simple": "var(--arc-background-simple-color)",
      "background-gradient0": "var(--arc-background-gradient-color0)",
      "background-gradient1": "var(--arc-background-gradient-color1)",
      "background-gradient2": "var(--arc-background-gradient-color2)",
      "background-gradient-overlay0":
        "var(--arc-background-gradient-overlay-color0)",
      "background-gradient-overlay1":
        "var(--arc-background-gradient-overlay-color1)",
      "background-gradient-overlay2":
        "var(--arc-background-gradient-overlay-color2)"
    },
    extend: {
      keyframes: {
        // arctext_slide_animation
        slideLeft: {
          "0%": { transform: "translateX(0)"},
          "100%": { transform: "translateX(-100%)"},
        },
      },
      animation: {
        slideLeft: "slideLeft 2s forwards"
      },
      animationDelay: {
        5: "5s"
      }
      // arctext_slide_animation
    },
    fontFamily: {
      alexandria: ["alexandria", "sans-serif"],
      omotion: ["omotion", "sans"]
    }
  },
  plugins: []
};