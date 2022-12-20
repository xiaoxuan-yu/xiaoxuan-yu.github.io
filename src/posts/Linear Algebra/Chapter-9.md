---
title: Chapter 9 实向量空间上的算子
date: 2020-07-26 16:05:03
tag:
	- Linear Algebra
category: 
	- 线性代数学习笔记
---
线性代数学习笔记第九章，参考教材为《Linear Algebra Done Right》。

<!--more-->


## 9.A 复化
### 向量空间的复化
- $V$的复化$V_{\bf C}$
设$V$是实向量空间.
	- $V$的复化等于$V\times V$,其元素是有序对$(u,v)$.其中$u,v\in V$,但我们写作$u+\text{i}v$
	- 定义$V_{\bf C}$上的加法为
	$$(u_1+\text{i}v_1)+(u_2+\text{i}v_2)=(u_1+u_2)+\text{i}(v_1+v_2)$$
	- 定义$V_{\bf C}$上的复标量乘法为
	$$(a+b\text{i})(c+d\text{i})=(au-bv)+\text{i}(av+bu)$$
	- 根据上述加法和标量乘法的定义,$V_{\bf C}$是复向量空间
- $V_{\bf C}$的基
设$V$是实向量空间.
	- 如果$v_1,...,v_n$是$V$的基,则它也是$V_{\bf C}$的基
	- $V_{\bf C}$的维数等于$V$的维数

### 算子的复化
- $T$的复化,$T_{\bf C}$
设$V$是实向量空间,$T\in\mathcal L(V)$.$T$的复化是定义为$T_{\bf C}(u+\text{i}v)=Tu+\text{i} Tv$的算子$T_{\bf C}\in\mathcal{L}(V_{\bf C})$,其中$u,v\in V$
- $T_{\bf C}$的矩阵等于$T$的矩阵
设$V_1,...,v_n$是实向量空间$V$的基,$T\in\mathcal L(V)$则$\mathcal M(T)\ =\mathcal M(T_{\bf C})$,其中这两个矩阵都是关于基$v_1,...,v_n$的矩阵
- 每个算子都具有一维或者二维不变子空间
>proof:
>非零的有限维复向量空间上的每个算子都具有本征值,从而具有以为不变子空间.
>因此假设$V$是实向量空间,$T\in\mathcal L(V)$.复化$T_{\bf C}$有本征值$a+b\text{i}$,其中$a,b\in \bf R$.因此存在不全为$0$的$u,v\in V$使得$T_{\bf C}(u+\text{i} v)\ =\ (a+b\text{i})(u+v\text{i})$,也就是说:
>$$Tu+\text{i}Tv=(au-bv)+(av+bu)\text{i}$$
>于是:
>$$Tu=au-bv,\ Tv=av+bu$$
>令$U$等于组$u,v$在$V$中的张成,那么$U$是$V$的一维或二维不变子空间.

### 复化的极小多项式
- $T_{\bf C}$的极小多项式等于$T$的极小多项式
设$V$是实向量空间,$T\in\mathcal L(V)$.则$T_{\bf C}$的极小多项式等于$T$的极小多项式

### 复化的本征值
- $T_{\bf C}$的是本征值,$T\in\mathcal L(V),\ \lambda\in \bf R$则$\lambda$是$T_{\bf C}$的本征值当且仅当$\lambda$是$T$的本征值
- $T_{\bf C}-\lambda I$和$T_{\bf C}-\bar\lambda I$
设$V$是实向量空间,$T\in\mathcal L(V)$,$\lambda\in\bf C$,$j$是非负整数,$u,v\in V$,则:
$$(T_{\bf C}-\lambda I)^j(u+\text{i}v)=0\iff (T_{\bf C}-\bar\lambda I)^j(u-\text{i}v)=0$$
> 推论:$T_{\bf C}$的非实数的本征值成对出现
- $\lambda$的重数等于$\bar\lambda$的重数
设$V$是实向量空间,$T\in\mathcal L(V)$,$\lambda\in \bf C$是$T_{\bf C}$的本征值.则$\lambda$作为$T_{\bf C}$的本征值等于$\bar\lambda$作为$T_{\bf C}$的本征值的重数
- 以上若干定理所能给出的重要结果是奇数维向量空间上的每个算子都有本征值

### 复化的特征多项式
- $T_{\bf C}$的特征多项式
设$V$是实向量空间,$T\in\mathcal L(V)$.则$T_{\bf C}$的特征多项式的系数都是实数.
- 特征多项式
设$V$是实向量空间,$T\in\mathcal L(V)$.则$T$的特征多项式定义为$T_{\bf C}$的特征多项式
- 特征多项式的次数和零点
设$V$是实向量空间,$T\in\mathcal L(V)$,则:
	- $T$的特征多项式的系数都是实的
	- $T$的特征多项式的次数均为$\text{dim}\ V$
	- $T$的所有本征值恰为$T$的特征多项式的所有实零点
- 凯莱-哈密顿定理
设$T\in\mathcal L(V)$,$q$是$T$的特征多项式,则$q(T)=0$
- 特征多项式是极小多项式的多项式倍
设$T\in\mathcal L(V)$,则:
	- $T$的极小多项式的次数之多是$\text{dim}\ V$;
	- $T$的特征多项式是$T$的极小多项式的多项式倍

## 9.B 实内积空间上的算子
- 非自伴的正规算子
设$V$是二维的实内积空间,$T\in\mathcal L(V)$,则以下条件等价:
	- $T$是正规的但不是自伴的
	- $T$关于$V$的每个规范正交基的矩阵都有
	$$\begin{pmatrix}a&-b\\b&a\end{pmatrix}$$
	的形式,其中$b\neq 0$
	- $T$关于$V$的某个规范正交基的矩阵有
	$$\begin{pmatrix}a&-b\\b&a\end{pmatrix}$$
	的形式,其中$b>0$
- 正规算子和不变子空间
设$V$是内积空间,$T\in\mathcal L(V)$是正规的.$U$是$V$在$T$下不变的子空间,则:
	- $U^\perp$在$T$下不变
	- $U$在$T^*$下不变
	- $(T|_U)^*=(T^*)|_U$
	- $T|_U\in\mathcal L(U)$和$T|_{U^\perp}\in\mathcal L(U^\perp)$都是正规算子
- $\bf F=R$时正规算子的刻画
设$V$时实内积空间,$T\in\mathcal L(V)$.则以下条件等价:
	- $T$时正规的
	- $V$有规范正交基使得$T$寡欲这个基有分块对角矩阵,对角线上的每个块时$1\times 1$矩阵,或者是形如
	$$\begin{pmatrix}a&-b\\b&a\end{pmatrix}$$
	的$2\times 2$矩阵,其中$b>0$
	
### 实内积空间上的等距同构
- $\bf F=R$时等距同构的刻画
设$V$时实内积空间,$S\in\mathcal L(V)$,则以下条件等价:
	- $S$是等距同构
	- $V$有规范正交基使得$S$关于这个基具有分块对角矩阵,对角线上的每个块是由$1$或$-1$构成的$1\times 1$矩阵,或是形如
	$$\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}$$
	的$2\times 2$矩阵,其中$\theta\in(0,\pi)$