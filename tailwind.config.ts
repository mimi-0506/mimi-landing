import { type Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        myeongjo: ["var(--font-myeongjo)", "serif"],
        songmyung: ["var(--font-songmyung)", "serif"],
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};

export default config;
