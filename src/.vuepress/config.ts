import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { componentsPlugin } from "vuepress-plugin-components";

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
    docsearchPlugin({
      // 你的选项
      // appId, apiKey 和 indexName 是必填的
      apiKey: 'b8f07d35da123803a35d4a397494a617',
      appId: 'PXDFURJQIP',
      indexName: 'youmans'
    }),

    //componentsPlugin({
    //  componentOptions: {
    //    pdf: {
    //      pdfjs: "/assets/lib/pdfjs"
    //    }
    //  }
    //})
  ],
  head: [
    ['link', { rel: 'icon', href: '/atom-2.svg' }]
  ],
});
