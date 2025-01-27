/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b00',
          hover: '#ff8533'
        },
        accent: {
          DEFAULT: '#0066cc',
          hover: '#0080ff'
        }
      }
    }
  },
  plugins: []
}