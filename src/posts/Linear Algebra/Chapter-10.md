---
title: Chapter 10 迹与行列式
date: 2020-07-26 16:11:37
tag:
	- Linear Algebra
category: 
	- 线性代数学习笔记
---
线性代数学习笔记第十章，参考教材为《Linear Algebra Done Right》。

<!--more-->


## 10.A 迹
### 基的变更
- 定义: 单位矩阵,$I$
设$n$是正整数,$n\times n$对角矩阵:
$$
\begin{pmatrix}
1&&0\\
&\ddots&\\
0&&1
\end{pmatrix}
$$
称为单位矩阵,记作$I$.
- 可逆的 逆
方阵$A$成为可逆的,如果存在一个同样大小的方阵$B$使得$AB=BA=I$,称$B$是$A$的逆,记作$A^{-1}$
- 线性映射之积的矩阵
假设$u_1,...,u_n$和$v_1,...,v_n$以及$w_1,...,w_n$都是$V$的基.设$S,T\in\mathcal L(V)$.则:
$$
\begin{aligned}
&\mathcal M(ST,(u_1,...,u_n),(w_1,...,w_n))=\\
&\mathcal M(S,(v_1,...,v_n),(w_1,...,w_n))\mathcal M(T,(u_1,...,u_n),(v_1,...,v_n))
\end{aligned}
$$
- 恒等算子关于两个基的矩阵
设$u_1,...,u_n$和$v_1,..,v_n$都是$V$的基,则矩阵$\mathcal M(I,(u_1,...,u_n),(v_1,...,v_n))$和$\mathcal M(I,(v_1,...,v_n),(u_1,...,u_n))$都是可逆的,且它们互为逆
- **基变更公式**
设$T\in\mathcal L(V)$,令$u_1,...,u_n$和$v_1,...,v_n$是$V$的基, $A=\mathcal M(I,(u_1,...u_n),(v_1,...,v_n))$则:
$$\mathcal M(T,(u_1,...,u_n))=A^{-1}\mathcal L(T,(v_1,...,v_n))A$$

### 迹:算子和矩阵间的联系
- 算子的迹
设$T\in\mathcal L(V)$
	- 若$\bf F=C$,则$T$的迹等于$T$的按重数重复的全体本征值之和
	- 若$\bf F=R$,则$T$的迹等于$T_{\bf C}$的按重数重复的全体本征值之和

T的迹记作$\text{trace}\ T$
- 迹和特征多项式
设$T\in\mathcal L(V)$,$n=\text{dim}\ V$则$\text{trace}\ T$等于$T$的特征多项式中$z^{n-1}$的系数的相反数
- 矩阵的迹
定义方阵$A$的迹为其对角线元素之和,记作$\text{trace}\ A$
- $AB$的迹等于$BA$的迹
如果$A$和$B$是相同阶数的方阵,那么$\text{trace}(AB)=\text{trace}(BA)$
- 算子的矩阵的迹不依赖于基
设$T\in\mathcal L(V)$,如果$u_1,...,u_n$和$v_1,...,v_n$是$V$的基,则
$$\text{trace}\ \mathcal M(T,(u_1,...,u_n))=\text{trace}\ \mathcal M(T,(v_1,...,v_n))$$
- 算子的迹等于矩阵的迹
若$T\in\mathcal L(V)$,则$\text{trace}\ T=\text{trace}\ \mathcal M(T)$
- 迹是可加的
若$S,T\in\mathcal L(V)$,则$\text{trace}(S+T)=\text{trace}\ S+\text{trace}\ T$
- 恒等算子不是$ST$和$TS$的差
不存在算子$S,T\in\mathcal L(V)$使得$ST-TS=I$

## 10.B 行列式
### 算子的行列式
- 定义:算子的行列式
设$T\in\mathcal L(V)$
	- 若$\bf F=C$,则$T$的行列式是$T$的按重数重复的全体本征值之积
	- 若$\bf E=R$,则$T$的行列式是$T_{\bf C}$的按重数重复的全体本征值之积

T的行列式记作$\text{det}\ T$.
- 行列式和特征多项式
设$T\in\mathcal L(V),\ n=\text{dim}\ V$,则$\text{det}\ T$等于$(-1)^n$乘以$T$的特征多项式的常数项
- 特征多项式、迹和行列式
设$T\in\mathcal L(V)$.则$T$的特征多项式可以写作$z^n-(\text{trace\ }T)z^{n-1}+\cdots+(-1)^n(\text{det\ }T)$
- **可逆等价于行列式非0**
$V$上的算子是可逆的当且仅当它的行列式是非零的
- $T$的特征多项式等于$\text{det}(zI-T)$

### 矩阵的行列式
- 排列
$(1,...,n)$的一个排列是一个组$(m_1,...,m_n)$,$1,...,n$中的每个数恰好在其中出现一次
$(1,...,n)$中的所有排列组成的集合记为$\text{perm}\ n$
- 排列的符号
	- 如果在组$(m_1,...,m_n)$中使得$1\leq j<k\leq n$且$j$出现在$k$之后的整数对$(j,k)$的个数为整数,那么排列的符号定义为$1$,反之定义为$-1$
	- 也就是说,如果自然顺序被改变偶数次,排列的符号等于$1$;反之等于$-1$
- 矩阵的行列式
$n\times n$矩阵
$$
\begin{pmatrix}
A_{1,1}&\cdots&A_{1,n}\\
\vdots&&\vdots\\
A_{n,1}&\cdots&A_{n,n}
\end{pmatrix}
$$
的行列式定义为:
$$\text{det}\ A\ =\ \sum_{(m_1,...,m_n)\in\text{perm}\ n}(\text{sign}(m_1,...m_n))A_{m_1,n}\cdots A_{m_n,n}$$
- 交换矩阵的两列
$A$和$B$是通过交换两列得到的矩阵,则$\text{det}\ A\ =\ \text{det}\ B$
- 具有两相同列的矩阵
若$A$有两列值相同的,则$\text{det}\ A=0$
- 重排矩阵的列
设$A\ =\ (A_{\cdot,1},...,A_{\cdot,n})$是$n\times n$矩阵,$(m_1,...m_n)$是一个排列,那么:
$$\text{det}(A_{\cdot,1},...,A_{\cdot,n})=(\text{sign}(m_1,...,m_n))\text{det}\ A$$
- 行列式是每一列的线性函数
设$k,n$是满足$1\leq k\leq n$的正整数,固定除了$A_{\cdot,k}$之外的那些$n\times 1$矩阵$A_{\cdot,1}...$,那么把$A_{\cdot,k}$映射为:
$$\text{det}(A_{\cdot,1},...,A_{\cdot,k},...,A_{\cdot,n})$$
的函数,是从$\bf F$上的$n\times 1$矩阵构成的向量空间到$\bf F$的线性映射
- 行列式是可乘的
若$A$和$B$是大小相同的方阵,则$\text{det}(AB)\ =\ \text{det}(BA)\ =\ \text{det}(A)\text{det}(B)$
- 算子的行列式并不依赖于基,且等于其矩阵的行列式
- 算子的行列式是可乘的
设$S,T\in\mathcal L(V)$,则$\text{det}(ST)\ =\ \text{det}(TS)\ =\ \text{det}(S)\text{det}(T)$