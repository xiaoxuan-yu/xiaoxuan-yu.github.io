---
title: Chapter 1 向量空间
date: 2020-07-25 21:34:26
tag:
	- Linear Algebra
category: 
	- 线性代数学习笔记
isOriginal: true
---

线性代数学习笔记第一章，参考教材为《Linear Algebra Done Right》。

<!-- more -->

## $\bf R^n \& \bf C^n$

### Complex Number
- Def:复数是一个**有序对**(a,b),其中a,b$\in\bf R$,我们将其写作$a+bi$. 所有复数构成的集记作$\bf C=\{a+bi:a,b\in\bf R\}$
- 加法和乘法定义如下($i^2=-1$)：
$$(a+bi)+(c+di)=(a+c)+(b+d)i$$
$$(a+bi)(c+di)=(ac-bd)+(ad+bc)i$$
- 复数的算数性质($\alpha,\beta,\lambda\in\bf C$)
	- 交换性: $\alpha+\beta=\beta+\alpha$,$\alpha\beta=\beta\alpha$
	- 结合性: $(\alpha+\beta)+\lambda=\alpha+(\beta+\lambda)$,$(\alpha\beta)\lambda=\alpha(\beta\lambda)$
	- 单位元: $\lambda+0=\lambda$,$\lambda1=\lambda$
	- 加法逆: 对于每一个$\alpha$,存在**唯一**的$\beta$,s.t.$\alpha+\beta=0$
	- 乘法逆: 对于每一个$\alpha$,存在**唯一**的$\beta$,s.t.$\alpha\beta=1$
	- 分配性质: $\lambda(\alpha+\beta)=\lambda\alpha+\lambda\beta$
- 由加法逆和乘法逆的唯一性可以进一步定义减法和乘法:,记$\alpha$的加法逆为$-\alpha$,乘法逆为$1/\alpha$,则减法和除法定义如下:
$$\beta-\alpha=\beta+(-\alpha)$$
$$\beta/\alpha=\beta(1/\alpha)$$
- 以$\bf F$表示数域,其中元素均为**标量(scalar)**

### 组
- 组和长度  
设$n$为非负整数,**长度**为$n$的**组**是$n$个**有顺序的**元素,这些元素用逗号隔开并且两端用括弧括起来(元素可以是**数,其他组或更抽象的东西**).长度为$n$的组具有如下的形式:
$$(x_1,...,x_n)$$
两个组相等当且仅当它们**长度相等**并且**所含的元素及元素的顺序**也相同.长度为$n$的组也成为$n$元组.**每个组的长度都是有限的.**
- $\bf F^n$  
$\bf F^n$是$\bf F$中元素组成的长度为$n$的组的集合:
$$\bf F^n=\{(x_1,...x_n):x_i\in\bf F,j=1,...,n\}$$
对于$(x_1,...x_n)\in\bf F^n$以及$j\in{1,...,n}$,称$x_j$是$(x_1,...x_n)$的第$j$个**坐标**,称$\bf F^n$中的元素为**向量**
- $\bf F$中的加法:$(x_1,...,x_n)+(y_1,...,y_n)=(x_1+y_1,...,x_n+y_n)$
	- 交换性:$x,y\in\bf F,x+y=y+x$
	- 单位元:$0=(0,...,0)$
	- $\forall x\in \bf F^n,x+0=x$
	- 加法逆:$x\in\bf F,x$的加法逆定义为满足$x+(-x)=0$的元素$-x\in\bf F^n$,即若$x=(x_1,...,x_n)$,$-x=(-x_1,...,-x_n)$
- $\bf F$中的标量乘法  
一个数$\lambda\in\bf F$与$\bf F^n$中一个向$(x_1,...,x_n)$量的乘积定义如下:
$$\lambda(x_1,...,x_n)=(\lambda x_1,...,\lambda x_n)$$

## 向量空间
- 加法和乘法的重新定义   
	- 集合$V$上的**加法**是一个函数,它把每一对$u,v\in V$都对应到$V$的一个元素$u+v$.
	- 集合$V$上的标量乘法是一个函数,它把$\forall \lambda\in \bf F$和$v\in V$对应到一个元素$\lambda v\in V$
- 向量空间:带有加法和标量乘法的集合$V$,满足如下性质:
	- 交换性  
	对所有$u,v\in V$,都有$u+v=v+u$
	- 结合性  
	对所有$u,v,w\in V$和$a,b\in \bf{F}$都有$(u+v)+w=u+(v+w)$和$(ab)v=a(bv)$
	- 加法单位元  
	存在元素$0\in V$使得对于所有$v\in V$都有$v+0=v$
	- 加法逆元  
	对于每个$v\in V$都存在$w\in V$s.t.$v+w=0$
	- 乘法单位元  
	对所有$v\in V$都有$1v=v$
	- 分配性质  
	对所有$a,b\in \bf{F}$和$u,v\in V$都有$a(u+v)=au+av)$和$(a+b)v=av+bv$
	- 向量空间中的元素成为**向量**或**点**
	- $\bf{R}$上的向量空间成为实向量空间;$\bf{C}$上的向量空间称为复向量空间
	- 基本性质
		- 加法单位元唯一
		- 加法逆元唯一 $\Rightarrow$ $-v$,减法
		- 数0乘以向量:$\forall v\in V,0v=0$
		- 数乘以向量0:$\forall a\in \bf{F},a0=0$
		- 数$-1$乘以向量:$\forall v\in V, (-1)v=v$

## 子空间
> def:如果$V$的子集$U$(采取与$V$相同的加法和乘法)也是向量空间,那么称$U$为$V$的**子空间**

- 子空间的条件
	- 加法单位元
	$0\in U$
	- 加法封闭性
	$\forall u,v\in U, u+v\in U$
	- 标量乘法封闭性
	$\forall a \in \bf{F} \& u\in U, au\in U$
- $\{0\}$是$V$最小的子空间,$V$本身是$V$最大的子空间.

### 子空间的和
- 子集的和  
设$U_1,...,U_n$都是$V$的自己,则$U_1,...,U_n$的和$U_1+...+U_n$定义为:
$$U_1+...+U_n\ ={u_1+...+u_n:u_1\in U_1,...,u_n\in U_n}$$
- 子空间的和是包含这些子空间的最小子空间

### 直和
设$U_1,...U_n$都是$V$的子空间.
和$U_1+...+U_n$称为直和如果$U_1+...+U_n$中的每一个元素都可以唯一地表示为$u_1+...+u_n$,其中每一个$u_j\in U_j$,记作:
$$U_1\oplus...\oplus U_n$$

- 直和的条件
设$U_1,...U_n$都是$V$的子空间,$U_1+...+U_n$是直和 $\Leftrightarrow$ 0表示成$u_1+...+u_n$的唯一方式是每一个$u_j=0$
- 设$U$和$V$都是$V$的子空间,那么$U+V$是直和 $\Leftrightarrow$ $U\cap W=0$
