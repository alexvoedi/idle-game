import { defineConfig } from "windicss/helpers";
import { colors } from "./src/style/colors";

export default defineConfig({
  darkMode: "class",

  attributify: true,

  plugins: [require("windicss/plugin/typography")],

  theme: {
    extend: {
      colors,
    },
  },

  shortcuts: {},
});
