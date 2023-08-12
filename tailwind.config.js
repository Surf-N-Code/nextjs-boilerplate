/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        xs: ['10px', '1.5rem'],
        sm: ['14px', '1.5rem'],
        base: ['16px', '1.5rem'],
      },
      colors: {
        brand: '#2D634E',
      },
    },
  },
  plugins: [],
};
