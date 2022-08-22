
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bodyBackground': 'hsl(185, 41%, 84%)',
        'sectionBackground': 'hsl(0, 0%, 100%)',
        'darkWhite': 'hsl(189, 41%, 97%)',
        'veryLightBlue': 'hsl(185, 41%, 84%)',
        'grayishBlue': 'hsl(186, 14%, 43%)',
        'mediumBlue': 'hsl(172, 67%, 45%)',
        'veryDarkBlue': 'hsl(183, 100%, 15%)',
        'white': 'hsl(0, 0%, 100%)',
        'beige': 'hsl(0, 0%, 41%)',
        'darkRed': 'hsla(0, 100%, 50%, 0.692)'
      },
      textColor: {
        skin: {
          base: "var(--text-color)"
        }
      },
      backgroundColor: {
        skin: {
          background: "var(--background-color)",
          backgroundDark: "var(--background-color-dark)",
          backgroundLight: "var(--background-color-light)"
        }
      }
    },
    fontFamily: {
      'monoSpace': ['Space Mono', 'monospace'],
      'alata': ['Alata', 'sans-serif'],
      'josefinSans': ['Josefin Sans', 'sans-serif']
    },
    boxShadow: {
      shadow: '0px 15px 15px 3px rgb(0 0 0 / 15%)'
    },
  },
  plugins: [],
}

