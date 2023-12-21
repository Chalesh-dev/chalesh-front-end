const { color } = require("framer-motion");

// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        'gradient-radial': 'radial-gradient(circle_at_bottom, #4338CA, #1E1B4B, #4338CA)'
      },
    },
  },
  plugins: [],
};
