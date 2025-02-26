/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
        secondary: "#0051a2",
      },
      animation: {
        'scroll-slow': 'scroll 25s linear infinite',
        'scroll-medium': 'scroll 20s linear infinite reverse',
        'scroll-fast': 'scroll 15s linear infinite',
        'scroll-slow-reverse': 'scroll 30s linear infinite reverse',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-slower': 'ping 5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'wave': 'wave 8s cubic-bezier(0.36, 0, 0.66, -0.56) infinite',
        'scroll-x': 'scroll-x 30s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      }
    },
  },
  plugins: [],
}

