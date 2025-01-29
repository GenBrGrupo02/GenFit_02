/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['Rowdies', 'sans-serif'],
        body: ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "night",
      "winter",
    ],
  },

}


  daisyui: {
    themes: [
      {
        autumn: {
          ...require("daisyui/src/theming/themes")["autumn"],
          "--rounded-btn": "1.9rem",
          ".bg-drop-down": {
            "background-color": "#e6e5e5",
          },
          ".about-me-text-color": {
            color: "#334155",
          },
        },
        forest: {
          ...require("daisyui/src/theming/themes")["forest"],
          ".bg-drop-down": {
            "background-color": "#110D0D",
          },
          ".about-me-text-color": {
            color: "#475569",
          },
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
