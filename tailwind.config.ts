import type { Config } from "tailwindcss";

interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>;
}

const config: Config & {
  theme: { colors: RecursiveKeyValuePair };
} = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-[a-z0-9-]*/,
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    boxShadow: {
      0: "0px 0px 0px 0px var(--effect-shadow-e0)",
      1: "0px 1px 3px -1px var(--effect-shadow-e3)",
      2: "0px 3px 4px -2px var(--effect-shadow-e3)",
      3: "0px 8px 24px -4px var(--effect-shadow-e2)",
      4: "0px 18px 32px -8px var(--effect-shadow-e2)",
      5: "0px 28px 24px -8px var(--effect-shadow-e1)",
      6: "0px 40px 48px -8px var(--effect-shadow-e1)",
    },
    fontSize: {
      "2xs": ["10px", "16px"],
      xs: ["11px", "16px"],
      sm: ["12px", "16px"],
      base: ["14px", "24px"],
      md: ["16px", "24px"],
      lg: ["18px", "28px"],
      xl: ["20px", "32px"],
      "2xl": ["26px", "40px"],
      "3xl": ["32px", "40px"],
    },
    borderRadius: {
      0: "0px",
      4: "4px",
      6: "6px",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      32: "32px",
      48: "48px",
      64: "64px",
      100: "100px",
    },
    colors: {
      outline: {
        none: "var(--outline-none)",
        white: "var(--outline-white)",
        black: "var(--outline-black)",
        "base-em": "var(--outline-base-em)",
        "low-em": "var(--outline-low-em)",
        "med-em": "var(--outline-med-em)",
        "high-em": "var(--outline-high-em)",
        primary: {
          "base-em": "var(--outline-primary-base-em)",
          "low-em": "var(--outline-primary-low-em)",
          "med-em": "var(--outline-primary-med-em)",
          "high-em": "var(--outline-primary-high-em)",
        },
        success: {
          "base-em": "var(--outline-success-base-em)",
          "low-em": "var(--outline-success-low-em)",
          "med-em": "var(--outline-success-med-em)",
          "high-em": "var(--outline-success-high-em)",
        },
        danger: {
          "base-em": "var(--outline-danger-base-em)",
          "low-em": "var(--outline-danger-low-em)",
          "med-em": "var(--outline-danger-med-em)",
          "high-em": "var(--outline-danger-high-em)",
        },
        info: {
          "base-em": "var(--outline-info-base-em)",
          "low-em": "var(--outline-info-low-em)",
          "med-em": "var(--outline-info-med-em)",
          "high-em": "var(--outline-info-high-em)",
        },
        warning: {
          "base-em": "var(--outline-warning-base-em)",
          "low-em": "var(--outline-warning-low-em)",
          "med-em": "var(--outline-warning-med-em)",
          "high-em": "var(--outline-warning-high-em)",
        },
        "neutral-alt": {
          white: "var(--outline-neutral-alt-white)",
          black: "var(--outline-neutral-alt-black)",
        },
      },
      text: {
        white: "var(--text-white)",
        black: "var(--text-black)",
        "low-em": "var(--text-low-em)",
        "med-em": "var(--text-med-em)",
        "high-em": "var(--text-high-em)",
        disabled: "var(--text-disabled)",
        primary: {
          "base-em": "var(--text-primary-base-em)",
          "low-em": "var(--text-primary-low-em)",
          "med-em": "var(--text-primary-med-em)",
          "high-em": "var(--text-primary-high-em)",
        },
        secondary: {
          "med-em": "var(--text-secondary-med-em)",
          "high-em": "var(--text-secondary-high-em)",
        },
        success: {
          "med-em": "var(--text-success-med-em)",
          "high-em": "var(--text-success-high-em)",
        },
        danger: {
          "med-em": "var(--text-danger-med-em)",
          "high-em": "var(--text-danger-high-em)",
        },
        info: {
          "med-em": "var(--text-info-med-em)",
          "high-em": "var(--text-info-high-em)",
        },
        "neutral-alt": {
          white: "var(--text-neutral-alt-white)",
          black: "var(--text-neutral-alt-black)",
        },
      },
      surface: {
        white: "var(--surface-white)",
        black: "var(--surface-black)",
        disabled: {
          "base-em": "var(--surface-disabled-base-em)",
          "low-em": "var(--surface-disabled-low-em)",
          "med-em": "var(--surface-disabled-med-em)",
          "high-em": "var(--surface-disabled-high-em)",
        },
        "primary-accent": {
          1: "var(--surface-primary-accent-1)",
          2: "var(--surface-primary-accent-2)",
          3: "var(--surface-primary-accent-3)",
          4: "var(--surface-primary-accent-4)",
        },
        "secondary-accent": {
          1: "var(--surface-secondary-accent-1)",
          2: "var(--surface-secondary-accent-2)",
          3: "var(--surface-secondary-accent-3)",
          4: "var(--surface-secondary-accent-4)",
        },
        "success-accent": {
          1: "var(--surface-success-accent-1)",
          2: "var(--surface-success-accent-2)",
          3: "var(--surface-success-accent-3)",
          4: "var(--surface-success-accent-4)",
        },
        "danger-accent": {
          1: "var(--surface-danger-accent-1)",
          2: "var(--surface-danger-accent-2)",
          3: "var(--surface-danger-accent-3)",
          4: "var(--surface-danger-accent-4)",
        },
        "info-accent": {
          1: "var(--surface-info-accent-1)",
          2: "var(--surface-info-accent-2)",
          3: "var(--surface-info-accent-3)",
          4: "var(--surface-info-accent-4)",
        },
        "warning-accent": {
          1: "var(--surface-warning-accent-1)",
          2: "var(--surface-warning-accent-2)",
          3: "var(--surface-warning-accent-3)",
          4: "var(--surface-warning-accent-4)",
        },
        "surface-s": {
          0: "var(--surface-s-0)",
          1: "var(--surface-s-1)",
          2: "var(--surface-s-2)",
          3: "var(--surface-s-3)",
          4: "var(--surface-s-4)",
          bg: "var(--surface-s-bg)",
          "high-em": "var(--surface-s-high-em)",
        },
        "neutral-alt": {
          white: "var(--surface-neutral-alt-white)",
          black: "var(--surface-neutral-alt-black)",
        },
      },
      shadow: {
        e0: "var(--effect-shadow-e0)",
        e1: "var(--effect-shadow-e1)",
        e2: "var(--effect-shadow-e2)",
        e3: "var(--effect-shadow-e3)",
      },
    },
  },
  plugins: [],
};

export default config;
