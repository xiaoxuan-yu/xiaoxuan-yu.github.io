import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
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
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          name: "category",
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          name: "tag",
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
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
