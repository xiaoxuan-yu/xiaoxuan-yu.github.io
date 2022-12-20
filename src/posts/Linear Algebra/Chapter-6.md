---
title: Chapter 6 内积空间
date: 2020-07-26 15:51:11
tag:
	- Linear Algebra
category: 
	- 线性代数学习笔记
---
线性代数学习笔记第六章，参考教材为《Linear Algebra Done Right》。

<!--more-->

## 6.A 内积与范数
### 内积
- 点积
对于$x,y\in\bold R^n$,$x$和$y$的点积定义为: $x\cdot y=x_1+y_1+...+x_ny_n$
其中$x=(x_1,...,x_n),\ y=(y_1,...,y_n)$
值得注意的是,点积是一个数而不是一个向量.显然$x\cdot x=||x||^2$.
$\bold R$上的点积具有如下的性质:
	- 对所有$x\in \bold R^n$均有$x\cdot x\geq0$
	- $x\cdot x=0 \iff x=0$
	- 对于固定的$y\in\bold R^n$,$\bold R^n\rightarrow\bold R^n$的将$x$变为$x\cdot y$的映射是线性的
	- 对于所有$x,y\in\bold R^n$,$x\cdot y=y\cdot x$
- 内积
$V$上的内积就是一个函数,它把$V$中元素的每个有序对$(u,v)$都映成一个数$\left<u,v\right>\in\bold F$,并且具有如下性质:
	- 正性
	对于所有$v\in V,\left<u,v\right>\geq0$
	- 定性
	$\left<v,v\right>=0\iff v=0$
	- 第一个位置的加性
	对于所有$u,v,w\in V$, $\left<u+v,w\right>=\left<u,w\right>+\left<v,w\right>$
	- 第一个位置的齐性
	$\forall \lambda\in\bold F,\ u,v\in V$, $\left< \lambda u,v\right>=\lambda\left<u,v\right>$
	- 共轭对称性
	$\forall u,v\in V,\ \left<u,v\right>=\overline{\left<v,u\right>}$
- 内积空间
内积空间就是带有内积的向量空间$V$
- 内积的基本性质
	- 对每个确定的$u\in V$,将$v$映射为$\left<v,u\right>$的函数是$V\to\bf F$的线性映射
	- $\forall u\in V,\ \left<0,u\right>=\left<u,0\right>=0$
	- $\forall u,v,w\in V,\ \left<u,v+w\right>=\left<u,v\right>+\left<u,w\right>$
	- $\forall \lambda\in\bf {F}$, $u,v\in V,\ \left<u,\lambda v\right>=\bar\lambda\left<u,v\right>$

### 范数
- 范数
对于$v\in V$,$v$的范数定义为:$||v||^2=\sqrt{\left<v,v\right>}$
- 范数的基本性质
设$v\in V$
	- $||v||=0\iff v=0$
	- $\forall \lambda\in\bold F,||\lambda v||=|\lambda|\ ||v||$
- 正交
两个向量$u,v$是正交的,如果$\left<u,v\right>=0$
$0$正交于$V$中任意向量且$0$是$V$中唯一一个与自身正交的向量
- 勾股定理
设$u,v$是$V$中的正交向量,则$||u+v||^2=||u||^2+||v||^2$
- 正交分解
设$u,v\in V$并且$v\neq 0$.令$c=\frac{\left<u,v\right>}{||v||^2},\ w=u-\frac{\left<u,v\right>}{||v||^2}v$, 则$\left<w,v\right>=0$且$u=cv+w$
- **柯西-施瓦茨不等式**
设$u,v\in V$则:
$$\boxed{|\left<u,v\right>|\leq||u||\ ||v||}$$
等号成立当且仅当$u,v$之一是另一个的标量倍.
> proof:
若$v=0$,那么得证.因此假设$v\neq0$.由正交分解:
>$$u=\frac{\left<u,v\right>}{||v||^2}v+w$$
>由正交分解:
>$$||u||^2=||\frac{\left<u,v\right>}{||v||^2}||^2+||w||^2=\frac{|\left<u,v\right>|^2}{||v||^2}+||w||^2\geq\frac{|\left<u,v\right>|^2}{||v||^2}$$
>两端同乘$||v||^2$后开方即证毕.

- 三角不等式
设$u,v\in V$,则$||u+v||\leq||u||+||v||$.等号成立当且仅当$u,v$之一是另一个的非负标量倍.
- 平行四边形恒等式
设$u,v\in V$,则$||u+v||^2+||u-v||^2=2(||u||^2+||v||^2)$

## 6.B 规范正交基
- 规范正交
	- 如果一个向量组中每个向量的范数都是$1$且和其他向量正交,则称这个向量组是规范正交的
	- 也就是所,$V$上的向量组$e_1,...,e_n$是规范正交的,如果
	$$\left<e_j,e_k\right>=\begin{cases}1,\ j=k\\0,\ j\neq k\end{cases}$$
- 规范正交线性组合的范数
如果$e_1,...,e_m$是$V$中的规范正交向量组,则对所有$a_1,...,a_m\in\bold F$均有:
$$||a_1e_1+...+a_me_m||^2=|a_1|^2+...+|a_m|^2$$
- 规范正交组是线性无关的
- 规范正交基
$V$的规范正交基是$V$中的规范正交组构成的基
- 适当长度的规范正交组是规范正交基
$V$中每个长度为$\text{dim}V$的规范正交向量组都是$V$的规范正交基
- 将向量表示为规范正交基的线性组合
设$e_1,...,e_n$是$V$的规范正交基且$v\in V$,则:
$$v=\left<v,e_1\right>e_1+...+\left<v,e_n\right>e_n$$
且:
$$||v||^2=|\left<v,e_1\right>|^2+...+|\left<v,e_n\right>|^2$$
- Gram-Schimidt过程(施密特正交化):
假设$v_1,...,v_m$是$V$中线性无关的向量组,令$e_1=v_1/||v_1||$.对$j=2,...,m$,定义$e_j$由下式导出:
$$e_{j}=\frac{v_{j}-\left\langle v_{j}, e_{1}\right\rangle e_{1}-\cdots-\left\langle v_{j}, e_{j}-1\right\rangle e_{j-1}}{\left\|v_{j}-\left\langle v_{j}, e_{1}\right\rangle e_{1}-\cdots-\left\langle v_{j}, e_{j-1}\right\rangle e_{j-1}\right\|}$$
那么$e_1,...,e_m$是$V$的一组规范正交基使得对$j=1,...,m$:
$$\text{span}(v_1,...,v_j)=\text{span}(e_1,...,e_j)$$
- 规范正交基的存在性
每个有限维内积空间都有规范正交基.
- 规范正交组扩充为规范正交基
设$V$是有限维的,则$V$中的每个规范正交向量组都可以扩充为$V$的规范正交基
- 关于规范正交基的上三角矩阵
设$T\in\mathcal L(V)$,如果$T$关于$V$的某个基具有上三角矩阵,那么$T$关于$V$的某个规范正交基也具有上三角矩阵.
$\Rightarrow$
> **舒尔定理**:
设$V$是有限维的复向量空间且$T\in\mathcal L(V)$,则$T$关于$V$的某个规范正交基具有上三角矩阵.

### 内积空间上的线性泛函
$V$上的线性泛函是从$V$到$\bold F$的映射,也就是说线性泛函是$\mathcal L(V,\bold F)$中的元素
- 里斯表示定理
设$V$是有限维并且$\phi$是$V$上的线性泛函,则存在唯一的向量$u\in V$使得对于每个$v\in V$均有$\phi(v)=\left<u,v\right>$

## 6.C 正交补与极小化问题
### 正交补
- 正交补
设$U$是$V$的子集,则$U$的正交补($U^\perp$)是由$V$中与$U$的每个向量都正交的那些向量组成的集合:
$$U^\perp=\{v\in V:\forall u\in U,\left<v,u\right>=0\}$$
- 正交补的基本性质
	- 若$U$是$V$的子集,则$U^\perp$是$V$的子空间
	- $\{0\}^\perp=V$
	- $V^\perp=\{0\}$
	- 若$U$是$V$的子集,则$U\cap U^\perp\subset\{0\}$
	- 若$U$和$W$均为$V$的子集且$U\subset W$则$W^\perp\subset U^\perp$
- 子空间与其正交补的直和
设$U$是$V$的子空间,则$V=U\oplus U^\perp$
- 正交补的维数
设$V$是有限维的并且$U$是$V$的子空间,则$\text{dim}U^\perp\ =\ \text{dim}V-\text{dim}U$
- 正交补的正交补
$$U\ =\ (U^\perp)^\perp$$
- 正交投影
设$U$是$V$的有限维子空间.定义$U$到$V$的正交投影为如下算子$P_U\in\mathcal L(V)$:对$v\in V$,将其写成$v=u+w$,其中$u\in U$且$w\in U^\perp$,则$P_Uv=u$
- 正交投影的性质
设$U$是$V$的有限维子空间且$v\in V$,则:
	- $P_U\in\mathcal L(V)$
	- 对每个$u\in U$均有$P_Uu=u$
	- 对每个$w\in U^\perp$均有$P_Uw=0$
	- $\text{range}P_U=U$
	- $\text{null}P_U=U^\perp$
	- $v-P_Uv\in U^\perp$
	- $P_U^2=P_U$
	- $||P_Uv||\leq||v||$
	- 对$U$的每个规范正交基$e_1,...,e_m$均有$P_U v=\left<v,e_1\right>e_1+...+\left<v,e_m\right>e_m$

### 极小化问题
- 到子空间的最小距离
设$U$是$V$的子空间,$v\in V$且$u\in U$,则:
$$||v-P_Uv||\leq||v-u||$$
进一步,等号成立当且仅当$u=P_Uv$