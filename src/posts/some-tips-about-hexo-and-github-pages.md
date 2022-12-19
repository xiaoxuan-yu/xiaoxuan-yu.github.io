---
title: Hexo+Github Pages建立博客的简易指南
date: 2020-05-01 11:51:47
tag:
    - Hexo
    - Github pages
    - Gitalk
category: 
    - 技术 
---
由于网上的教程大多有点年代，且很少又包含评论、分享等功能的支持，因此，第一篇技术相关的博文就记录一下建立这个博客的过程吧，希望对后来人有所帮助。

<!--more-->

# 基本功能的建立
## 准备工作
- 安装git for windows
- 安装node.js
- 注册一个Github帐号



## Hexo 在本地的部署

- 在node.js中使用淘宝源以加速下载
```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
- Hexo的安装
```shell
cnpm install hexo --save
```

- 在本地建立你的博客根目录，如Hexo或其他你喜欢的名字

- 在这个目录打开Git Bash，执行如下命令完成初始化：
```shell
hexo init
```
- 进入根目录，打开_config.yml 进行基本的配置
![](https://cdn.jsdelivr.net/gh/xiaoxuan-yu/Youmans-Blog/img/%E6%89%B9%E6%B3%A8%202020-05-01%20204111.jpg)
配置项非常清楚，可以根据自己的信息进行设置

- 更换主题：进入[Theme|Hexo](https://hexo.io/themes/)选择你喜欢的主题，进入根目录，打开Git Bash，执行(xxx为该主题的地址)：
```shell
git clone xxxxxxxxx
```
  我使用的是Melody。

- 本地博客的部署，执行:

  ```shell
  hexo g && hexo s
  ```

  浏览器打开localhost:4000预览效果。


## 本地向Github的部署

- 新建一个repo，名称为xxx.github.io(xxx是你的用户名)
- 安装hexo的自动部署工具

```shell
cnpm install hexo-deployer-git --save
```

- 修改配置文件

![](https://cdn.jsdelivr.net/gh/xiaoxuan-yu/Youmans-Blog/img/%E6%89%B9%E6%B3%A8%202020-05-01%20205122.jpg)

其中的repo项填写上述仓库的网址（形如htps://github.com/xxx/xxx.github.io，xxx为用户名）。

- 执行下列命令完成部署：

```shell
hexo clean && hexo g && hexo d
```

第一次执行时需要输入账号密码进行验证。

## 域名的绑定

- 进入你的域名服务商，添加一条CNAME记录，将www域名指向xxx.github.io（我的服务商是namesilo，下图仅供参考）

![](https://cdn.jsdelivr.net/gh/xiaoxuan-yu/Youmans-Blog/img/%E6%89%B9%E6%B3%A8%202020-05-01%20210246.jpg)

- 进入你hexo根目录下的sources文件夹，新建一个文本文件，内容为你的域名(带有www)，名称为'CNAME'(没有.txt!!)
- 执行命令，重新部署。

```shell
hexo clean && hexo g && hexo d
```

## Hexo的使用

请自行参考帮助文档（支持简中）。

# 其他功能的配置

## 主题的个性化定制

参考相应的帮助文档进行配置

## 评论系统的添加

我选用的评论系统是Gitalk，基于Github的issues功能，可以自行参照文档配置。

值得注意的是本地运行hexo时Gitalk组件会显示Network Error， 无需理会。

另外，每一篇博文在第一次发表评论前会提示未找到相关的issues进行评论，这时仅需按提示登录即可。

## 分享系统的添加

我使用的是AddThis平台，登陆后按提示注册，设置样式后在最后生成的html代码中找到pubid输入配置文件的相应位置即可。

