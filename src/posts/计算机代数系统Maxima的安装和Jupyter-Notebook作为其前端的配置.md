---
title: 计算机代数系统Maxima的安装和Jupyter Notebook作为其前端的配置
date: 2020-07-31 09:53:05
tags:
  - CAS
  - Maxima
  - Jupyter Notebook
category:
  - 技术
---

Maxima是著名的开源计算机代数系统，本文记录了作者的安装和前端配置的过程，希望给后来者参考。以下内容以Manjaro Linux为例

<!--more-->

## Maxima的安装

```bash
sudo pacman -S maxima
```

## Jupyter Notebook的安装

```bash
sudo pacman -S jupyter
```

## Maxima-Jupyter Kernel的安装

```bash
yay -S maxima-jupyter-git
```

Arch Linux用户应当也可以用这种方法比较简便地完成安装。其他发行版的用户则可以根据[Github页面](https://github.com/robert-dodier/maxima-jupyter)上的指示通过源码完成安装。

## 代码高亮

进入CodeMirror的安装文件夹，在`mode`文件夹下创建名为`maxima`的子文件夹，将下载的[maxima.js](https://github.com/robert-dodier/maxima-jupyter/blob/master/maxima.js)复制入你创建的`maxima`目录中，并如[这个页面](https://github.com/robert-dodier/maxima-jupyter/blob/master/codemirror-mode-meta-patch)修改`mode`文件夹中的meta.js

## 测试

```bash
jupyter console --kernal=maxima
```

如果可以正常执行则安装成功。

## 创建Jupyter Notebook的启动器

```bash
$ sudo su
# cd /usr/share/applications
# vim Jupyter.desktop
```

将以下内容粘入：

```
[Desktop Entry]
Type=Application
Encoding=UTF-8
Name=Jupyter Notebook
GenericName=Jupyter NoteBook
Comment=A cross-platform notebook
Exec=/bin/jupyter-notebook
Terminal=false
```

如果希望自定义图标可以添加

```
Icon=图片地址
```

## 自定义Jupyter Notebook的启动目录

```bash
jupyter notebook --generate-config
```

打开生成的`jupyter_notebook_config.py`,取消以下键值的注释并修改:

```
c.NotebookApp.notebook_dir=你想要的启动目录
```

