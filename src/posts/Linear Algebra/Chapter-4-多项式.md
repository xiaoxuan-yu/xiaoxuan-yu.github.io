---
title: Chapter 4 多项式
date: 2020-07-26 15:34:38
tag:
	- Linear Algebra
category: 
	- 线性代数学习笔记
---
线性代数学习笔记第四章，参考教材为《Linear Algebra Done Right》。

<!--more-->

## 复共轭和绝对值  
- 实部和虚部  
设$z=a+bi$,其中$a,b\in\bf R$  
	- $z$的实部定义为$\text{Re}\ z=a$
	- $z$的虚部定义为$\text{Im}\ z=b$
- 复共轭和绝对值  
设$z\in\bf C$
	- 复共轭:$\bar z=\text{Re}\ z-(\text{Im})\ zi$
	> $z=\bar z$当且仅当$z\in\bf R$
	
	- 绝对值:$|z|=\sqrt{(\text{Re}\ z)^2+(\text{Im}\ z)^2}$
- 复数的性质
	- $z+\bar z=2\ \text{Re}\ z$
	- $z-\bar z=2\ \text{Im}\ z$
	- $z\bar z=|z|^2$
	- $\overline{w+z}=\bar w+\bar z$, $\overline{wz}=\bar w\bar z$
	- $\bar{\bar z}=z$
	- $|\text{Re}\ z|\leq|z|$, $|\text{Im}\ z|\leq|z|$
	- $|z|=|\bar z|$
	- $|wz|=|w||z|$
	- $|w+z|\leq|w|+|z|$

## 多项式系数的唯一性  
对于函数$p:\bf F\rightarrow\bf F$,若存在$a_0,...,a_m\in\bf F$使得对于所有$z\in\bf F$:  
$$p(z)=a_0+a_1z+...+a_nz^n$$  
称函数$p$为系数在$\bf F$中的多项式  

- **若一个多项式是零函数,则其所有系数均为$0$**  
这样的结果指明多项式的系数是唯一确定的,因为若一个多项式有两组不同的系数,则该多项式的两个表达式相减与上述结果是矛盾的.  
- 定义多项式$0$的次数为负无穷  

## 多项式的带余除法  
设$p,s\in\mathcal P(\bf F),s\neq 0$,则存在唯一的多项式$q,r\in\mathcal P(\bf F)$s.t.  
$$p=sq+r$$  
且$\text{deg}\ r<\text{deg}\ s$  

> proof:  
$n=\text{deg}\ p,\ m=\text{deg}\ s$.  
$n<m$显然易证,因此不妨$n\geq m$  
def: $T:\mathcal P_{n-m}(\bf F)\times\mathcal P_{m-1}(\bf F)\rightarrow\mathcal P_{n}(\bf F)$为:$T(q,r)=sq+r$  
显然其是一个线性映射.令$sq+r=0$,若不满足$q=0$和$s=0$,那么$\text{deg}\ sq\geq m$不可能等于$s$.因此$\text{nul}\ T=0$.  
又$\text{dim}(\mathcal P_{n-m}(\bf F)\times \mathcal P_{m-1}(\bf F))=n+1$  
因此$\text{dim range}\ T=n+1=\text{dim}\mathcal P_n(\bf F)$  
$\Rightarrow \text{range}\ T=\mathcal P_n{\bf F}$  
$\text{Q.E.D}$

## 多项式的零点
- 定义  
称数$\lambda\in\bf F$为多项式$p\in\mathcal P(\bf F)$的零点(根),若$p(\lambda)=0$
- 因式  
称多项式$s\in\mathcal P(\bf F)$为多项式$p\in\mathcal P(\bf F)$的因时,如果存在多项式$q\in\mathcal P(\bf F)$使得$p=qs$.
- 多项式的每一个零点对应一个一次因式  
$\Rightarrow$多项式零点的个数不超过它的次数

## $\bf C$上多项式的分解
- **代数学基本定理 **   
每一个非常数的复系数多项式都有零点.

> proof:  
设$p$是非常数的复系数多项式,假设$p$没有零点,那么$1/p$是$\bf C$上的解析函数.进一步地说,当$|z|\rightarrow\infty$时$|p(z)|\rightarrow-\infty$也就是$1/p\rightarrow 0$.因此$1/p$是$\bf C$上的有界解析函数.根据刘维尔定理,其为常数,也就是$p$为常数,矛盾.  
$\text{Q.E.D}$

- $\bf C$上多项式的分解  
若$p\in\mathcal P(\bf C)$是非常数的多项式,则其可以**唯一**分解为:  
$$p(z)=c(z-\lambda_1)\cdots(z-\lambda_m)$$  
其中$c,\lambda_1,...,\lambda_m\in\bf C$

## $\bf R$上多项式的分解
- 实系数多项式的非实零点是成对出现的  
设$p\in\mathcal P(\bf C)$是实系数多项式,如果$\lambda$是$p$的零点,那么$\bar\lambda$也是.    
- $\bf R$上多项式的分解  
设$p\in\mathcal P(\bf R)$是非常数多项式,则可以唯一分解为:  
$$p(x)=c(x-\lambda_1)...(x-\lambda_m)(x^2+b_1x+c_1)...(x^2+b_Mx+c_M)$$  
其中$c,\lambda_i,b_j,c_k\in\bf R(i=1,...,m;\ j,k=1,2...,M)$且对于所有$j$有$b_j^2<4c_j$



