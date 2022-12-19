import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Youmans' Blog",
      description: "学化学的瞎写点东西",
    },
  },

  theme,

  shouldPrefetch: false,

  plugins: [
    searchPlugin({
      // 你的选项
    }),
  ],
});
