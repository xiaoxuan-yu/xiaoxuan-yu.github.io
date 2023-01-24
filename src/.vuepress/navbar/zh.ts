import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "文章",
    icon: "blog",
    children: [
      {
        text: "归档",
        icon: "article",
        link: "/article/"
      },
      {
        text: "线性代数笔记",
        icon: "edit",
        prefix: "/posts/Linear Algebra/",
        children: [
          { text: "向量空间", icon: "edit", link: "Chapter-1-向量空间" },
          { text: "有限维向量空间", icon: "edit", link: "Chapter-2-有限维向量空间" },
          { text: "线性映射", icon: "edit", link: "Chapter-3-线性映射" },
          { text: "多项式", icon: "edit", link: "Chapter-4-多项式" },
          { text: "本征值、本征向量和不变子空间", icon: "edit", link: "Chapter-5-本征值、本征向量和不变子空间" },
          { text: "内积空间", icon: "edit", link: "Chapter-6" },
          { text: "内积空间上的算子", icon: "edit", link: "Chapter-7" },
          { text: "复向量空间上的算子", icon: "edit", link: "Chapter-8" },
          { text: "实向量空间上的算子", icon: "edit", link: "Chapter-9" },
          { text: "迹和行列式", icon: "edit", link: "Chapter-10" },
        ],
      },
    ],
  },
  {
    text: "标签",
    icon: "tag",
    link: "/tag/"
  },
  {
    text: "分类",
    icon: "categoryselected",
    link: "/category/"
  },
  {
    text: "关于",
    icon: "profile",
    link: "/intro"
  },
]);
