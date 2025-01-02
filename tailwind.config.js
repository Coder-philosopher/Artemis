// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Vite can scan your source files
  ],
  theme: {
    extend: {
      fontFamily: {
        // Custom font families
        dosis: ['Dosis', 'sans-serif'], // Change 'Dosis' to your desired font
      },
      
   
    },
  },
  plugins: [],
};
