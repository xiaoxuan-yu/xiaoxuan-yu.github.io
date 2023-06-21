---
title: Chapter 5 本征值、本征向量和不变子空间
date: 2020-07-26 15:46:24
tag:
	- Linear Algebra
category: 
	- 线性代数学习笔记
isOriginal: true
---
线性代数学习笔记第五章，参考教材为《Linear Algebra Done Right》。

<!-- more -->


## 5.A 不变子空间  
- 定义  
设$T\in\mathcal L(V)$,称$V$的子空间$U$在$T$下不变,如果$\forall u\in U,\ Tu=U$.  
也就是说,$U$在$T$下不变当且仅当$T|_U$是$U$上的算子.

### 本征值和本征向量  
首先研究一维不变子空间.任取$v\in V,v\neq 0$并设$U$是$v$的标量倍构成的集合:
$$U=\{\lambda v:\lambda=\bf F\}$$
则$U$是$V$的一维子空间.  
若$U$在算子$T\in\mathcal L(V)$下不变,则$Tv\in U$.因此必有标量$\lambda\in\bf F$使得$Tv=\lambda v$.  
反之,若有某个$\lambda\in\bf F$使得$tv=\lambda v$,则$\text{span}(v)$是$V$的在$T$下的不变的一维子空间.  

- 本征值  
设$T\in\mathcal L(V)$.称数$\lambda\in\bf F$为$T$的本征值,若存在$v\in V$使得$v\neq 0$且$Tv=\lambda v$  
**$T$有一维不变子空间当且仅当$T$有本征值**
	- 本征值的等价条件  
	若$V$是有限维的,$T\in\mathcal L(V)$且$\lambda\in\bf F$,则以下条件等价  
		- $\lambda$是$T$的本征值
		- $T-\lambda I$不是单的
		- $T-\lambda I$不是满的
		- $T-\lambda I$不是可逆的
- 本征向量  
设$T\in\mathcal L(V)$,并设$\lambda\in\bf F$是T的本征值,称向量$v\in V$为$T$的相应于$\lambda$的本征向量,如果$v\neq 0$且$Tv=\lambda v$
	- **线性无关的本征向量**   
	设$T\in\mathcal L(V)$.设$\lambda_1,...,\lambda_m$是$T$的互不相关的本征值,并设$v_1,...,v_m$是相应的本征向量,则$v_1,...,v_m$是线性无关的.  
	推论:算子的互异本征值的个数不超过向量空间的维数

## 5.B 本征向量和上三角矩阵
- 定义$T^m$  
设$T\in\mathcal L(V)$,m是正整数.    
	- 定义$T^m$为$T^m=\underbrace{T\cdots T}_{m\times T}$
	- 定义$T^0=I$($I$为$V$上的恒等算子)
	- 若$T$为可你的且其逆为$T^{-1}$则定义$T^{-m}=(T^{-1})^m$
- 定义$p(T)$  
设$T\in\mathcal L(V)$,$p\in\mathcal P(F)$,对$zz\in\bf F$有$p(z)=a_0+...+a_mz^m$.则$p(T)$定义为:$p(T)=a_0I+a_1T+...+a_mT_m$
- 定义:多项式的积  
若$p,q\in\mathcal P(\bf F)$则$pq\in\mathcal P(\bf F)$是定义如下的多项式:对$z\in\bf F$有$(pq)(z)=p(z)q(z)$
一个算子的任意两个多项式是交换的:$(pq)(T)=p(T)q(T)=q(T)p(T)$

### 本征值的存在性
- **有限维非零复向量空间上的每个算子都有本征值**  
其证明依赖于代数学基本定理,略

### 上三角矩阵
- 算子的矩阵  
设$T\in\mathcal L(V)$并设$v_1,...,v_n$是$V$的基.$T$关于该基的矩阵定义为$n\times n$矩阵:
$$\mathcal M(T)=\begin{pmatrix}A_{1,1}&...&A_{1,n}\\\vdots&&\vdots\\A_{n,1}&...&A_{n,n}\end{pmatrix}$$
其元素$A_{j,k}$定义为:   
$$Tv_k=A_{1,k}v_1+...+A_{n,k}v_n$$  
如果基在上下文不是自明的则记作$\mathcal M(T,(v_1,...,v_n))$
- 矩阵的对角线  
方阵的对角线由位于左上角到右下角的直线上的元素组成.
- 上三角矩阵  
一个矩阵成为上三角的,如果位于对角线下方的元素全部为0
$$\mathcal{M}(T)=\begin{pmatrix}
\lambda_{1} & & & * \\
& \lambda_{2} & & \\
& & \ddots & \\
0 & & & \lambda_{n}
\end{pmatrix}$$
- 上三角矩阵的条件  
设$T\in\mathcal L(V)$且$V_1,...,v_n$是$V$的基,则以下条件等价:  
	- $T$关于$V_1,...,v_n$的矩阵是上三角的
	- 对于每个$j=1,...,n$有$Tv_j\in\text{span}(v_1,...,v_j)$
	- 对于每个$j=1,...,n$有$\text{span}(v_1,...,v_j)$在$T$下不变
- **在$\bf C$上,每个算子均有上三角矩阵**  
设$V$是有限维复向量空间,$T\in\mathcal L(V)$,则$T$关于$V$的某个基有上三角矩阵.

> proof:  
使用归纳法.$\text{dim}=1$显然成立.    
设对于所有维数小于$V$的复向量空间均成立,设$\lambda$是$T$的任意本征值,$U=\text{range}(T-\lambda I)$.因为$(T-\lambda I)$不是满的,所以$U$的维数小于$V$,下证其在$T$下不变.设$u\in U$:
有:$Tu=(T-\lambda I)u+\lambda u$  
由于$(T-\lambda I)u\in U$,$\lambda U\in U$,所以$U$在$T$下不变.即$T|_U$是$U$上的算子.由假设:  
$\forall j,uTu_j=(T_U)(u_j)\in\text{span}(u_1,...,u_j)$  
将$u_1,...u_m$扩展为$V$的基$u_1,...,u_m,v_1,...,v_n$.  
$\forall k,Tv_k=(T-\lambda I)v_k+\lambda v_k$  
因为$(T-\lambda I)v_k\in U=\text{span}(u_1,...,u_m)\subset\text{span}(u_1,...,u_m,v_1,...,v_n)$  
因此有:$Tv_k\in\text{span}(u_1,...,u_m,v_1,...,v_n)$  
$\text{Q.E.D}$

- 由上三角矩阵确定可逆性  
设$T\in\mathcal L(V)$关于$V$的某个基由上三角矩阵,则$T$是可逆的当且仅当这个上三角矩阵对角线上的元素都不是0.
- 设$T\in\mathcal L(V)$关于$V$的某个基由上三角矩阵,则$T$的本征值恰为这个上三角矩阵对角线上的元素.

## 5.C 本征空间和对角矩阵
- 对角矩阵  
对角矩阵指对角线以外的元素全部为0的方阵
- 本征空间  
设$T\in\mathcal L(V),\lambda \in\bf F$.$T$的相应于$\lambda$的本征空间(记作$E(\lambda,T)$)定义为:
$$E(\lambda,T)=\text{null}(T-\lambda I)$$ 
也就是说,$E(\lambda,T)$是$T$的相应于$\lambda$的全体本征向量加上$0$向量构成的集合.
- 本征空间之和是直和  
设$V$是有限维的,$T\in\mathcal L(V)$.设$\lambda_1,...,\lambda_m$是$T$的互异的本征值,则:  
$$E(\lambda_1,T)+...+E(\lambda_m,T)$$
是直和,此外:  
$$\text{dim}E(\lambda_1,T)+...+\text{dim}E(\lambda_m,T)\leq\text{dim} V$$
- 可对角化  
算子$T\in\mathcal L(V)$成为可对角化的,如果该算子关于$V$的某个基有对角矩阵
	- 等价条件  
	设$V$是有限维的,$T\in\mathcal L(V)$.用$\lambda_1,...,\lambda_m$表示$T$的所有互异的本征值,则以下条件等价
		- $T$可对角化
		- $V$有由$T$的本征向量构成的基
		- $V$由在$T$下不变的一维子空间$U_1,...,U_n$使得$V=U_1\oplus U_2\oplus...\oplus U_n$
		- $V=E(\lambda_1,T)\oplus...\oplus E(\lambda_m,T)$
		- $\text{dim}V=\text{dim}E(\lambda_1,T)+...+\text{dim}E(\lambda_m,T)$
- 本征值足够多则可以对角化  
若$T\in\mathcal L(V)$有$\text{dim}V$个互异的本征值,则$T$可对角化
















