/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#45e5a2',
        dark: '#071e3d',
      },
      animation: {
        'bg-header': 'bg-header-animation 60s infinite alternate',
        'typewriter': 'typewriter 0.7s steps(13) 0.7s 1 normal both, blinkTextCursor 500ms steps(44) infinite normal',
        'bounceIn': 'bounceIn 1s',
        'float': 'float 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
      },
      keyframes: {
        'bg-header-animation': {
          'from': { backgroundPosition: '-100vh' },
          'to': { backgroundPosition: '100vh' },
        },
        'typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blinkTextCursor': {
          'from': { borderRightColor: 'rgba(255, 255, 255, 0.75)' },
          'to': { borderRightColor: 'transparent' },
        },
        'bounceIn': {
          'from, 20%, 40%, 60%, 80%, to': {
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          },
          '0%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
          '20%': { transform: 'scale3d(1.1, 1.1, 1.1)' },
          '40%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
          '60%': { opacity: '1', transform: 'scale3d(1.03, 1.03, 1.03)' },
          '80%': { transform: 'scale3d(0.97, 0.97, 0.97)' },
          'to': { opacity: '1', transform: 'scale3d(1, 1, 1)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fadeInUp': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.1)', opacity: '0.5' },
        }
      }
    },
  },
  plugins: [],
}
