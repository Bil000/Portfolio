/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'var(--primary-blue)',
        'secondary-blue': 'var(--secondary-blue)',
        'dark-blue': 'var(--dark-blue)',
        'light-blue': 'var(--light-blue)',
        'gradient-start': 'var(--gradient-start)',
        'gradient-mid': 'var(--gradient-mid)',
        'gradient-end': 'var(--gradient-end)',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}