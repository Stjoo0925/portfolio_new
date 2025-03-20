/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 애플 스타일 색상
        'apple-blue': '#0071e3',
        'apple-blue-dark': '#0055AA',
        'apple-gray': '#f5f5f7',
        'apple-dark': '#1d1d1f',
        'apple-black': '#000000',
        'apple-white': '#ffffff',
      },
      fontFamily: {
        sans: ['SF Pro Display', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-pattern.svg')",
      },
      boxShadow: {
        'apple': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
        'apple-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'apple-button': '0 2px 5px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      screens: {
        'xs': '480px',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [],
} 