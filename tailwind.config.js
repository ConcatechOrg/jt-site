/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gold: "#D4AF37",      
      navy: "#003366",
      darkBlue:"#012141",
      lightBlue: "#DFE3F3",
      blueSoft: "#385D84",
      softWhite: "#F1F2FF",
      dark: "#1E1E1E",
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
    },
    fontFamily: {
      bai: ['"Bai Jamjuree"', 'sans-serif'],
      shoulders: ['"Big Shoulders Text"', 'sans-serif'],
      roboto: ['"Roboto"', 'sans-serif'],
    },
    extend: {
      fontSize: {
        // Bai Jamjuree
        'bai-base': ['1rem', { lineHeight: '1', letterSpacing: '0%' }], // 16px 100%
        'bai-36-400': ['2.25rem', { lineHeight: '2rem', letterSpacing: '1%' }], // 36px weight 400
        'bai-36-600': ['2.25rem', { lineHeight: '2.2rem', letterSpacing: '1%' }], // 36px weight 600
        'bai-24-400': ['1.5rem', { lineHeight: '1.5rem', letterSpacing: '0%' }],
        'bai-24-600': ['1.5rem', { lineHeight: '1.5rem', letterSpacing: '0%' }],
        'bai-title-md': ['1.39375rem', { lineHeight: '2.09125rem', letterSpacing: '0.013125rem' }], // 22.3px

        // Big Shoulders Text (ex-Roboto)
        'shoulders-24-400': ['1.5rem', { lineHeight: '1.5rem', letterSpacing: '0%' }],
        'shoulders-24-700': ['1.5rem', { lineHeight: '1.5rem', letterSpacing: '0%' }],
        'shoulders-20-400': ['1.25rem', { lineHeight: '2rem', letterSpacing: '0%' }],
        'shoulders-20-700': ['1.25rem', { lineHeight: '2rem', letterSpacing: '0%' }],
        'shoulders-16-400': ['1rem', { lineHeight: '1rem', letterSpacing: '0%' }],

        'roboto-24-400': ['4.5rem', { lineHeight: '1.5rem', letterSpacing: '0%' }], // 24px peso 400
        'roboto-24-700': ['4.5rem', { lineHeight: '1.5rem', letterSpacing: '0%' }], // 24px peso 700
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
}
