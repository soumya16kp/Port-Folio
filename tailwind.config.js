/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neon colors
        'neon-yellow': '#faff00',
        'neon-pink': '#ff00c8',
        'neon-purple': '#b000f0',
        'neon-cyan': '#00f7ff',
        'neon-green': '#39ff14',
        // Dark background
        'dark': '#0a0a0a',
      },
      dropShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor',
        'neon-sm': '0 0 2px currentColor, 0 0 4px currentColor',
        'neon-md': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor',
        'neon-xl': '0 0 5px currentColor, 0 0 15px currentColor, 0 0 25px currentColor',
        'neon-green': '0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14',
        'neon-pink': '0 0 5px #ff00c8, 0 0 10px #ff00c8, 0 0 20px #ff00c8',
        'neon-cyan': '0 0 5px #00f7ff, 0 0 10px #00f7ff, 0 0 20px #00f7ff',
        'neon-purple': '0 0 5px #b000f0, 0 0 10px #b000f0, 0 0 20px #b000f0',
        'neon-yellow': '0 0 5px #faff00, 0 0 10px #faff00, 0 0 20px #faff00',
      },
      boxShadow: {
        'neon': '0 0 5px 0px currentColor, 0 0 10px 0px currentColor',
        'neon-sm': '0 0 2px 0px currentColor, 0 0 4px 0px currentColor',
        'neon-md': '0 0 5px 0px currentColor, 0 0 10px 0px currentColor, 0 0 15px 0px currentColor',
        'neon-lg': '0 0 5px 0px currentColor, 0 0 10px 0px currentColor, 0 0 20px 0px currentColor',
        'neon-xl': '0 0 5px 0px currentColor, 0 0 15px 0px currentColor, 0 0 25px 0px currentColor',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-neon': 'pulse-neon 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 5px 0px currentColor' },
          '50%': { opacity: '1', boxShadow: '0 0 20px 5px currentColor' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '20px',
      },
    },
  },
  plugins: [],
}