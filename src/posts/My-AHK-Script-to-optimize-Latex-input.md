---
title: 通过AutoHotkey脚本实现Latex的输入优化
date: 2020-06-21 22:31:54
tag:
  - Auto Hot Key
  - LaTeX
category: 
  - 技术
---

通过AHK脚本实现了如下功能:

- 若干关键词的快速输入(\frac,\mathscr,\mathrm,\bold)
- 箭头的快速输入(双向箭头,左、右箭头及长箭头)
- 希腊字母的快速输入('@'作为关键字，区分大小写)

<!--more-->

脚本内容如下：

```bash
#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
:o:fra::\frac{{}•{}}{{}•{}}{Left 4}+{Left} ; \frac{•}{•}
:o:<=>::\Leftrightarrow ; <=>
:o:=>::\Rightarrow ; =>
:o:<=::\Leftarrow ; <=
:o?:-->::\longrightarrow ; -->
:o:->::\rightarrow ; ->
:o?:<--::\longleftarrow ; <--
:o:<-::\leftarrow; <-
:o?:=::\ =\{Space}
:o:@a::\alpha  
:o:@b::\beta
:o:@c::\chi
:oc:@d::\delta
:oc:@D::\Delta
:o:@e::\epsilon
:o:@ve::\varepsilon
:oc:@f::\phi
:oc:@F::\Phi
:o:@vf::\varphi
:oc:@g::\gamma
:oc:@G::\Gamma
:o:@h::\eta
:o:@i::\iota
:o:@k::\kappa
:oc:@l::\lambda
:oc:@L::\Lambda
:o:@m::\mu
:o:@n::\nu
:oc:@p::\pi
:oc:@P::\Pi
:oc:@q::\theta
:oc:@Q::\Theta
:o:@vq::\vartheta
:o:@r::\rho
:oc:@s::\sigma
:oc:@S::\Sigma
:o:@t::\tau
:oc:@u::\upsilon
:oc:@U::\Upsilon
:o:@v::\digamma
:oc:@w::\omega
:oc:@W::\Omega
:oc:@x::\xi
:oc:@X::\Xi
:oc:@y::\psi
:oc:@Y::\Psi
:o:@z::\zeta
:o:scr::\mathscr{{}•{}}{Left}+{Left}
:o:rm::\mathrm{{}•{}}{Left}+{Left}
:o:bd::\bold{{}•{}}{Left}+{Left}
```

目前中英文自动切换的问题有待进一步解决.