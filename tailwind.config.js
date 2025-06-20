/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firacode: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
};
