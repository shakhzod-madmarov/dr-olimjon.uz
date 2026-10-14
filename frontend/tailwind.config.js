/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#132e53",
        "primary-hover": "#0c1f38",
        accent: "#285983",
        surface: "#f7f9fc",
        "surface-soft": "#eef3f8",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(220px, 1fr))",
      },
      boxShadow: {
        luxury: "0 12px 32px -10px rgba(19, 46, 83, 0.08)",
        "luxury-lg": "0 20px 44px -12px rgba(19, 46, 83, 0.14)",
      },
    },
  },
  plugins: [],
};
