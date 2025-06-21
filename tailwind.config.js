/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        tertiary: "#112240",
        lightText: "#ccd6f6",
        lightestText: "#8892b0",
          accent: '#00D9A5',
      accentDark: '#00B48F',
      darkPrimary: '#0A192F',
      darkSecondary: '#112240',
      lightText: '#EDEDED',
        
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'gradient': 'gradient 15s ease infinite',
        'background-shine': 'background-shine 2s linear infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'background-shine': {
          from: {
            'backgroundPosition': '0 0'
          },
          to: {
            'backgroundPosition': '-200% 0'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}