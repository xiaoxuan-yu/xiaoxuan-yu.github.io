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
      apiKey: "7f7a2ce9f3f51daa3dbda4fb30c27859",
      indexName: "blog_youmans",
      appId: "L5HX5R6H8Z",
      placeholder: '搜索',
      translations: {
        button: {
          buttonText: "搜索"
        }
      }
      // 你的选项
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
