import { type Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        main: "#fab2be",
        darkMain: "#ef95a9",
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};

export default config;
