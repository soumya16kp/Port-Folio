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
      // MERGED ANIMATIONS
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-neon': 'pulse-neon 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'morph-slow': 'morph 15s ease-in-out infinite',
        'morph-slow-delay': 'morph 15s ease-in-out 3s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'twinkle': 'twinkle 5s ease-in-out infinite',
        'shooting-star': 'shooting-star 3s linear infinite',
        'nebula-pulse': 'nebula-pulse 15s ease-in-out infinite',
        'nebula-pulse-delay': 'nebula-pulse 20s ease-in-out 5s infinite',
        'pulse-slow': 'pulse 10s ease-in-out infinite',
        'pulse-very-slow': 'pulse 20s ease-in-out infinite',
      },
      // MERGED KEYFRAMES
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 5px 0px currentColor' },
          '50%': { opacity: '1', boxShadow: '0 0 20px 5px currentColor' },
        },
        morph: {
          '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            transform: 'translate(100px, 150px) scale(1.2)',
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'shooting-star': {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(300px, 300px)', opacity: '0' },
        },
        'nebula-pulse': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '20px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}