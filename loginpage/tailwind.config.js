/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bglogin': "url('../src/asset/bglogin.png')",
      },
    },
  },
  plugins: [],
};
