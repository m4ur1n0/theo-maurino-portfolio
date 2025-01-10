/** @type {import('tailwindcss').Config} */

/**
 *   
  --background: #dfdbc3;
  --text-color: #593534;

  --highlight : #990000;
  --black : #121212;
  --white : #f1f1f1;
  --selection : #f0fc4b;
 */


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text_color: "var(--text-color)",
        highlight : "var(--highlight)",
        black : "var(--black)",
        white : "var(--white)",
        selection : "var(--selection)",
        shadow_color : "var(--shadow)",

      },
    },
  },
  plugins: [],
};
