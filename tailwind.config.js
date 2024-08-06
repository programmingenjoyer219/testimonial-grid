module.exports = {
  content: ['./*.html'],
  screens: {
    sm: '425px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
