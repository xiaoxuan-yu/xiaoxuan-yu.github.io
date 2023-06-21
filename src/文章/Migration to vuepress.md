---
title: 迁移至 vuepress 的说明
tag:
  - Blog
  - Vuepress
category:
  - 技术
toc: false
date: 2022-12-21 21:44:56
isOriginal: trues
---
为了更好的性能和拓展性，转战 `vuepress` 。
<!-- more -->

- 初始化
```bash
npm init vuepress-theme-hope@next [dir]
```
其中的 `[dir]` 为初始化所用的目录名称，如 `blog` 等。随后参照[主题文档](https://vuepress-theme-hope.github.io/v2/zh/guide/)进行样式、信息和组件的配置即可。
- 部署

使用 Github Action ，同步生成 `gh-pages` 分支并部署到 Github Pages 和远端服务器。

```yml

name: 部署文档

on:
  push:
    branches:
      # 确保这是你正在使用的分支名称
      - master

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # 如果你文档需要 Git 子模块，取消注释下一行
          submodules: true



      - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: 安装依赖
        run: npm ci

      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          npm run docs:build
          > src/.vuepress/dist/.nojekyll

      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: gh-pages
          folder: src/.vuepress/dist

      - name: 部署到 aliyun
        uses: mdallasanta/ssh-scp-deploy@v1.2.0
        with:
          local: 'src/.vuepress/dist'                                                  # Local file path - REQUIRED false - DEFAULT ./
          remote: '/home/git/blog-vue'                                                 # Remote file path - REQUIRED false - DEFAULT ~/
          host: ${{secrets.HOST}}                                      # Remote server address - REQUIRED true
          port: ${{secrets.PORT}}                                      # Remote server port - REQUIRED false - DEFAULT 22
          user: ${{secrets.USER}}                                      # Remote server user - REQUIRED true
          password: ${{secrets.PASSWORD}}                              # User password - REQUIRED at least one of "password" or "key" 
          pre_upload: echo "This will be executed before the upload!"  # Command to run via ssh before scp upload - REQUIRED false
          post_upload: echo "This will be executed after the upload!"  # Command to run via ssh after scp upload - REQUIRED false
          ssh_options: -o StrictHostKeyChecking=no                     # A set of ssh_option separated by -o - REQUIRED false - DEFAULT -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null
          scp_options: -v                                              # Flags to use during scp - REQUIRED false - DEFAULT ''
```
如果这样进行最终部署，那么仅需要上传 `[dir]\src` 即可完成文档的自动生成和部署，此时 `master` (或 `main`) 分支只含有编写的博客文档数据。
