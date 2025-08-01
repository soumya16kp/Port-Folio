/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // important for React files
  ],
  theme: {
    extend: {
      colors: {
        'neon-yellow': '#faff00',
        'neon-pink': '#ff00c8',
        'neon-purple': '#b000f0',
        'neon-cyan': '#00f7ff',
        'neon-green': '#39ff14',
        black: '#000',
      },
      dropShadow: {
        neonGreen: '0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14',
        neonPink: '0 0 5px #ff00c8, 0 0 10px #ff00c8, 0 0 20px #ff00c8',
        neonCyan: '0 0 5px #00f7ff, 0 0 10px #00f7ff, 0 0 20px #00f7ff',

      },
    },
  },
  plugins: [],
};
