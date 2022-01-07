module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        // headings
        'poppins': ['Poppins', 'sans-serif'],
        // body, CTA
        'open-sans': ['Open Sans', 'sans-serif']
      },
      colors: {
        'pink': '#ff52bf',
        // neutral
        'very-pale-cyan': '#ebfbff',
        'very-dark-cyan': '#00252e',
        'grayish-blue': '#808d99',

      },
      backgroundImage: {
        'mobile': "url('/images/bg-hero-mobile.svg')",
        'desktop': "url('/images/bg-hero-desktop.svg')",
      }
    },
  },
  plugins: [],
}
