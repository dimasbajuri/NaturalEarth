/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url(https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      },
      aspectRatio: {
        '1/1': '1 / 1',
        '16/9': '16 / 7',
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '8/5': '8 / 5',
        'banner': '320 / 213'
      },
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        dark: '#1c1917',
        bright: '#f8fafc',
        green: '#4ade80'
      }
    },
  },
  plugins: [],
}

