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
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'float-more-delayed': 'float 8s ease-in-out 4s infinite',
        'float-slow': 'float 15s ease-in-out infinite',
        'pulse-slow': 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-very-slow': 'pulse 20s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 15s linear infinite',
        'spin-very-slow': 'spin 30s linear infinite',
        'fadeIn': 'fadeIn 1.5s ease-in-out',
        'glow': 'glow 6s ease-in-out infinite',
        'glow-delayed': 'glow 6s ease-in-out 3s infinite',
        'glow-star': 'glowStar 4s ease-in-out infinite',
        'glow-star-small': 'glowStarSmall 3s ease-in-out infinite',
        'height-change': 'heightChange 10s ease-in-out infinite',
        'width-change': 'widthChange 12s ease-in-out infinite',
        'twinkle': 'twinkle 5s ease-in-out infinite',
        'twinkle-small': 'twinkleSmall 3s ease-in-out infinite',
        'nebula-glow': 'nebulaGlow 20s ease-in-out infinite',
        'nebula-glow-slow': 'nebulaGlow 30s ease-in-out infinite',
        'nebula-fade': 'nebulaFade 25s ease-in-out infinite',
        'planet-rotate': 'planetRotate 60s linear infinite',
        'planet-rotate-slow': 'planetRotate 90s linear infinite',
        'orbit': 'orbit 40s linear infinite',
        'orbit-slow': 'orbit 70s linear infinite',
        'orbit-reverse': 'orbitReverse 50s linear infinite',
        'constellation-line': 'constellationLine 8s ease-in-out infinite',
        'blackhole-glow': 'blackholeGlow 15s ease-in-out infinite',
        'blackhole-halo': 'blackholeHalo 20s ease-in-out infinite',
        'wave-expand': 'waveExpand 8s ease-out infinite',
        'signal-beam': 'signalBeam 5s ease-in-out infinite',
        'signal-beam-delayed': 'signalBeam 5s ease-in-out 2.5s infinite',
        'data-stream': 'dataStream 10s linear infinite',
        'data-stream-delayed': 'dataStream 10s linear 5s infinite',
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
        glow: {
          '0%, 100%': { opacity: '0.3', filter: 'blur(20px)' },
          '50%': { opacity: '0.7', filter: 'blur(25px)' },
        },
        glowStar: {
          '0%, 100%': { opacity: '0.7', boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.7)' },
          '50%': { opacity: '1', boxShadow: '0 0 15px 3px rgba(255, 255, 255, 0.9)' },
        },
        glowStarSmall: {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 7px 2px rgba(255, 255, 255, 0.7)' },
        },
        heightChange: {
          '0%, 100%': { height: '40px', opacity: '0.5' },
          '50%': { height: '70px', opacity: '0.8' },
        },
        widthChange: {
          '0%, 100%': { width: '40px', opacity: '0.5' },
          '50%': { width: '100px', opacity: '0.8' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        twinkleSmall: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.1)' },
        },
        nebulaGlow: {
          '0%, 100%': { opacity: '0.2', filter: 'blur(70px)' },
          '50%': { opacity: '0.4', filter: 'blur(90px)' },
        },
        nebulaFade: {
          '0%, 100%': { opacity: '0.1', filter: 'blur(60px)' },
          '50%': { opacity: '0.3', filter: 'blur(80px)' },
        },
        planetRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbit: {
          '0%': { transform: 'translateX(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) rotate(360deg)' },
        },
        orbitReverse: {
          '0%': { transform: 'translateX(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) rotate(-360deg)' },
        },
        constellationLine: {
          '0%, 100%': { strokeOpacity: '0.07', strokeWidth: '1' },
          '50%': { strokeOpacity: '0.15', strokeWidth: '1.5' },
        },
        blackholeGlow: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(15px)' },
          '50%': { opacity: '0.8', filter: 'blur(25px)' },
        },
        blackholeHalo: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
        waveExpand: {
          '0%': { transform: 'translate(-50%, -50%) scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'translate(-50%, -50%) scale(2)', opacity: '0' },
        },
        signalBeam: {
          '0%, 100%': { opacity: '0.4', height: '100%' },
          '50%': { opacity: '0.8', height: '120%' },
        },
        dataStream: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
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