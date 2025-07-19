/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue-600
          light: '#3b82f6',   // blue-500
          dark: '#1e40af',    // blue-800
        },
        accent: {
          DEFAULT: '#a78bfa', // purple-400
          light: '#c4b5fd',   // purple-300
        },
        background: {
          DEFAULT: '#f8fafc', // slate-50
          card: '#f1f5f9',    // slate-100
        },
        border: {
          DEFAULT: '#e5e7eb', // gray-200
        },
        text: {
          DEFAULT: '#1e293b', // slate-800
          secondary: '#64748b', // slate-500
        },
      },
    },
  },
  plugins: [],
}
