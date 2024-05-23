import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    screens: { tablet: "640px", desktop: "1024px" },
    extend: {
      fontFamily: {
        sans: ["var(--font-pretendard)", "tossFace"],
      },
      colors: {
        backgroundHeavy: "rgb(var(--color-background-heavy))",
        backgroundLight: "rgb(var(--color-background-light))",
        textColor: "rgb(var(--color-complementary-text-color))",
        primary: "rgb(var(--color-primary))",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }),
        },
        { values: theme("translate"), supportsNegativeValues: true },
      );
    }),
  ],

  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
