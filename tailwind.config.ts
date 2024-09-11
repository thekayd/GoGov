import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  theme: {
    screens: {
      lg: { max: "1440px" },
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        amber: {
          500: "var(--amber_500)",
          a400: "var(--amber_a400)",
        },
        black: {
          900: "var(--black_900)",
          "900_19": "var(--black_900_19)",
          "900_2d": "var(--black_900_2d)",
          "900_3f": "var(--black_900_3f)",
        },
        blue: {
          50: "var(--blue_50)",
          200: "var(--blue_200)",
          400: "var(--blue_400)",
          500: "var(--blue_500)",
          700: "var(--blue_700)",
          "50_00": "var(--blue_50_00)",
          "50_01": "var(--blue_50_01)",
          a700: "var(--blue_a700)",
          a700_01: "var(--blue_a700_01)",
          a700_14: "var(--blue_a700_14)",
          a700_99: "var(--blue_a700_99)",
        },
        blue_gray: {
          50: "var(--blue_gray_50)",
          100: "var(--blue_gray_100)",
          400: "var(--blue_gray_400)",
          "100_01": "var(--blue_gray_100_01)",
        },
        cyan: {
          a100: "var(--cyan_a100)",
        },
        deep_orange: {
          200: "var(--deep_orange_200)",
          "200_01": "var(--deep_orange_200_01)",
        },
        deep_purple: {
          50: "var(--deep_purple_50)",
          100: "var(--deep_purple_100)",
          a100: "var(--deep_purple_a100)",
          a100_01: "var(--deep_purple_a100_01)",
          a200: "var(--deep_purple_a200)",
        },
        teal: {
          800: "var(--teal_800)",
        },
        white: {
          a700: "var(--white_a700)",
          a700_00: "var(--white_a700_00)",
          a700_7e: "var(--white_a700_7e)",
        },
        yellow: {
          300: "var(--yellow_300)",
        },
        gray: {
          100: "var(--gray_100)",
          200: "var(--gray_200)",
          500: "var(--gray_500)",
          600: "var(--gray_600)",
          700: "var(--gray_700)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "100_01": "var(--gray_100_01)",
          "200_01": "var(--gray_200_01)",
          "500_01": "var(--gray_500_01)",
          "500_0f": "var(--gray_500_0f)",
          "600_01": "var(--gray_600_01)",
          "600_02": "var(--gray_600_02)",
          "600_03": "var(--gray_600_03)",
          "700_01": "var(--gray_700_01)",
          "800_01": "var(--gray_800_01)",
          "800_02": "var(--gray_800_02)",
          "900_01": "var(--gray_900_01)",
          "900_02": "var(--gray_900_02)",
          "900_0c": "var(--gray_900_0c)",
          "900_19": "var(--gray_900_19)",
          "900_3f": "var(--gray_900_3f)",
          "900_99": "var(--gray_900_99)",
          "900_9b": "var(--gray_900_9b)",
        },
        green: {
          800: "var(--green_800)",
        },
        indigo: {
          500: "var(--indigo_500)",
          900: "var(--indigo_900)",
          "500_01": "var(--indigo_500_01)",
          "900_01": "var(--indigo_900_01)",
          "900_26": "var(--indigo_900_26)",
          a700: "var(--indigo_a700)",
          a700_01: "var(--indigo_a700_01)",
          a700_33: "var(--indigo_a700_33)",
        },
        light_blue: {
          a700: "var(--light_blue_a700)",
        },
        light_green: {
          a100: "var(--light_green_a100)",
          a100_01: "var(--light_green_a100_01)",
        },
        orange: {
          100: "var(--orange_100)",
          200: "var(--orange_200)",
          a200: "var(--orange_a200)",
        },
        pink: {
          50: "var(--pink_50)",
        },
        purple: {
          50: "var(--purple_50)",
          100: "var(--purple_100)",
          "100_01": "var(--purple_100_01)",
        },
        red: {
          300: "var(--red_300)",
          600: "var(--red_600)",
        },
      },
      boxShadow: {
        xs: "0 1px 1px 0 #000e330c",
        sm: "0 4px 6px 0 #000e1e2d",
        md: "0 1px 2px 0 #000e333f",
        lg: "0 4px 4px 0 #0000003f",
        xl: "0 3px 2px 0 #0047ff33",
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
        notosans: "Noto Sans",
        inter: "Inter",
        proximanova: "Proxima Nova",
        lexend: "Lexend",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #3e51af,#49aeff)",
        gradient1: "linear-gradient(180deg, #edf7fe,#edf7fe00)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
