/** @type {import('tailwindcss').Config} */

import { Config, RecursiveKeyValuePair } from "tailwindcss/types/config";

const config: Config & {
  theme: { colors?: RecursiveKeyValuePair };
} = {
  presets: [require("./tailwind-preset.ts")],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-[a-z0-9-]*/,
    },
  ],
  // Customizations specific to this project would go here
  theme: {
    extend: {},
  },
};

export default config;
