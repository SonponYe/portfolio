module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ff41',
        accent: '#00ff41',
        muted: '#888'
      },
      fontFamily: {
        sans: ['"IBM Plex Mono"', 'monospace'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 6px 18px rgba(0, 255, 65, 0.2)',
        glow: '0 0 20px rgba(0, 255, 65, 0.4)'
      }
    },
  },
  plugins: [],
}
