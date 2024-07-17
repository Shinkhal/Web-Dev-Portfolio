// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
  darkMode: 'class', // Enables class-based dark mode

  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('/public/background-gradient-lights.jpg')",
      },
      colors: {
        "light-content": "#A7A7A7",
        "dark-heading": "#1f2428",
        "dark-content": "#666666",
        "light-heading": "#CCCCCC",
        "dark-mode": "#191919",
        "dark-card": "#363636",
        "green-text": "#018C0F",
        "greenbg": "#D7FFE0",
      },
    },
  },
  plugins: [],
};
