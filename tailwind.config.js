module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007f5f',
        accent: '#00b37a',
        muted: '#8aa89f'
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 6px 18px rgba(0, 0, 0, 0.33)'
      }
    },
  },
  plugins: [],
}
