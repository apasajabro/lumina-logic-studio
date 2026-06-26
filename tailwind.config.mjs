/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d8ecff',
          200: '#b9ddff',
          300: '#86c5ff',
          400: '#4fa6ff',
          500: '#247fff',
          600: '#0f61ee',
          700: '#124ec2',
          800: '#17459b',
          900: '#183b78'
        }
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.16)',
        glow: '0 0 80px rgba(36, 127, 255, 0.22)'
      }
    }
  },
  plugins: []
};
