/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#4A7C59",
          "green-light": "#6B9B7A",
          "green-dark": "#2D4A35",
          "green-darker": "#1E3224",
        },
        neutral: {
          white: "#FFFFFF",
          "gray-light": "#F5F5F5",
          "gray-medium": "#E5E5E5",
          charcoal: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1.1", fontWeight: "700" }],
        "section-title": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.2", fontWeight: "700" }],
        "body-large": ["1.25rem", { lineHeight: "1.6" }],
        "body": ["1.125rem", { lineHeight: "1.6" }],
      },
      spacing: {
        "section": "6rem",
        "section-lg": "8rem",
      },
      boxShadow: {
        "premium": "0 20px 60px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)",
        "premium-lg": "0 30px 80px -20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)",
        "glow": "0 0 40px rgba(74, 124, 89, 0.15)",
      },
    },
  },
  plugins: [],
};

