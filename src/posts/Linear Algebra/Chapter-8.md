---
title: Chapter 8 复向量空间上的算子
date: 2020-07-26 16:01:32
tag:
	- Linear Algebra
category: 
	- 线性代数学习笔记
---
线性代数学习笔记第八章，参考教材为《Linear Algebra Done Right》。

<!--more-->


## 8.A 广义本征向量和幂零算子
### 算子幂的零空间
- 递增的零空间序列
设$T\in\mathcal L(V)$,则:
$$\{0\}\subset\text{null}\ T^0\subset\text{null}\ T^1\subset\cdots\subset\text{null}\ T^k\subset\text{null}\ T^{k+1}\subset\cdots$$
- 零空间序列中的等式
设$T\in\mathcal L(V)$.设$m$是非负证书使得$\text{null}\ T^m=\text{null}\ T^{m+1}$,则:
$$\text{null}\ T^m=\text{null}\ T^{m+1}=\text{null}\ T^{x+2}=\cdots$$
- 零空间停止增长
设$T\in\mathcal L(V)$.令$n=\text{dim}\ V$,则:
$$\text{null}\ T^n=\text{null}\ T^{n+1}=\cdots$$
- $V$等于$\text{null}\ T^{\text{dim\ }V}$和$\text{range}\ T^{\text{dim\ }V}$的i直和
设$T\in\mathcal L(V)$.令$n=\text{dim}\ V$,则:$V=\text{null}\ T^n\oplus\text{range\ }T^n$

### 广义本征向量
- 广义本征向量
设$T\in\mathcal L(V)$,$\lambda$是$T$的本征值.向量$v\in V$成为$T$的相应于$\lambda$的n广义本征向量,如果$v\neq 0$且存在$j\in\bf N^*$使得$(T-\lambda I)^jv=0$
- 广义本征空间
设$T\in\mathcal L(V)$并且$\lambda\in\bf F$,则$T$的相对应于$\lambda$的广义本征空间定义为$T$的相应于$\lambda$的所有广义本征向量的集合,包括$0$向量
设$T\in\mathcal L(V),\ \lambda\in\bf F$,则:$G(\lambda,T)=\text{null}(T-\lambda I)^{\text{dim}\ V}$
- 线性无关的广义本征向量
设$T\in\mathcal L(V)$,$\lambda_1,...,\lambda_m$是$T$的o所欲不同的本征值,$v_1,...,v_m$分别为相应的广义本征向量,则$v_1,...,v_m$线性无关.

### 幂零算子
- 幂零的
一个算子成为幂零的,如果它的某个幂等于$0$
- $n$维空间上幂零算子的$n$次幂等于$0$
- 幂零算子的矩阵
设$N$是$V$上的幂零算子,那么$V$有一个基使得$N$关于这个基的矩阵形如:
$$
\begin{pmatrix}
0&&*\\
&\ddots&\\
0&&0
\end{pmatrix}
$$
> ![](https://cdn.jsdelivr.net/gh/xiaoxuan-yu/Youmans-Blog/img/5b6025be38264c44993bf702f86b9203.png)

## 算子的分解
- $p(T)$的零空间和像空间在$T$下是不变的
- **复向量空间上算子的刻画**
假设$V$是复向量空间,$T\in\mathcal L(V)$.设$\lambda_1,...,\lambda_m$是$T$的不同本征值,则:
	- $V=G(\lambda_1,T)\oplus \cdots\oplus G(\lambda_m,T)$
	- 每个$G(\lambda_j,T)$在T下都是不变的
	- 每个$(T-\lambda_j I)|_{G(\lambda_j,T)}$都是不变的
- 广义本征向量的基
设$V$是复向量空间,$T\in\mathcal L(V)$,则$V$有一个由$T$的广义本征向量组成的基.

### 本征值的重数
- 重数
设$T\in\mathcal L(V)$.$T$的本征值$\lambda$的重数定义为相应的广义本征空间$G(\lambda,T)$的维数.
- 重数的等于$\text{dim}\ V$
设$V$是复向量空间,$T\in\mathcal L(V)$.则$T$的所有本征值的重数之和等于$\text{dim}\ V$.

### 分块对角矩阵
- 分块对角矩阵
分块对角矩阵是形如:
$$
\begin{pmatrix}
A_1&&0\\
&\ddots&\\
0&&A_m
\end{pmatrix}
$$
的方阵,其中$A-1,...,A_m$位于对角线上且为方阵,矩阵上的其他元素都等于$0$
- 具有上三角块的分块对角矩阵
假设$V$是复向量空间,$T\in\mathcal L(V)$.设$\lambda_1,...,\lambda_m$是$T$的所有互不相同的本征值,重数分别为$d_1,...,d_m$,则$V$有一个基使得$T$关于这个基有分块对角矩阵
$$
\begin{pmatrix}
A_1&&0\\
&\ddots&\\
0&&A_m
\end{pmatrix}
$$
其中每个$A_j$都是如下形式的$d-j\times d_j$上三角矩阵:
$$
\begin{pmatrix}
\lambda_1&&*\\
&\ddots&\\
*&&\lambda_j
\end{pmatrix}
$$

### 平方根
- 恒等加幂零有平方根
设$N\in\mathcal L(V)$,则$I+N$有平方根
- $\bf C$上可你算子有平方根
设$V$是复向量空间,如果$T\in\mathcal L(V)$是可逆的,则$T$有平方根

## 8.C 特征多项式和极小多项式
### 凯莱-哈密顿定理
- 特征多项式
设$V$是复向量空间,$T\in\mathcal L(V)$.令$\lambda_1,...,\lambda_m$表示$T$的所有互不相同的本征值,重数分别为$d_1,...,d_m$,多项式
$$(z-\lambda_1)^{d_1}\cdots(z-\lambda_m)^{d_m}$$
成为$T$的特征多项式
- 特征多项式的次数和零点
设$V$是复向量空间,$T\in\mathcal L(V)$.则:
	- $T$的特征多项式的次数等于$\text{dim\ }V$
	- $T$的特征多项式的零点恰好是$T$的本征值
- 凯莱-哈密顿定理
设$V$是复向量空间,$T\in\mathcal L(V)$.令$q$表示$T$的特征多项式,则$q(T)=0$

### 极小多项式
- 首一多项式
首一多项式是指最高次数的项的系数为$1$的多项式
- 极小多项式
设$T\in\mathcal L(V)$则存在唯一一个次数最小的首一多项式$p$使得$p(T)=0$
设$T\in\mathcal L(V)$则$T$的极小多项式是唯一一个使得$p(T)=0$的次数最小的首一多项式
- $q(T)=0$表示$q$是极小多项式的一个倍式
设$T\in\mathcal L(V),\ q\in\mathcal P(\bf F)$.则$q(T)=0$当且仅当$q$是$T$的极小多项式的多项式倍
- 特征多项式是极小多项式的多项式倍
设$\bf F=C$,$T\in\mathcal L(V)$.则$T$的特征多项式是$T$的极小多项式的多项式倍
- 本征值是极小多项式的零点
设$T\in\mathcal L(V)$.则$T$的极小多项式的零点恰好是$T$的本征值.

## 8.D 若尔当形
- 对应于幂零算子的矩阵
设$N\in\mathcal L(V)$是幂零的,则存在向量$v_1,...,v_n\in V$和非负整数$m_1,...,m_n$使得:
	- $N^{m_1}v_1,...,Nv_1,v_1,...,N^{m_n}v_n,...,Nv_n,v_n$是$V$的基
	- $N^{m_1+1}v_1=...=N^{m_n+1}v_n=0$
- 若尔当基
设$T\in\mathcal L(V)$.$V$的基称为$T$的若尔当基,如果$T$关于这个基具有分块对角矩阵:
$$
\begin{pmatrix}
A_1&&0\\
&\ddots&\\
0&&A_p
\end{pmatrix}
$$
其中每个$A_j$都是形如
$$
\begin{pmatrix}
\lambda_j&1&&0\\
&\ddots&\ddots&\\
&&\ddots&1\\
0&&&\lambda_j
\end{pmatrix}
$$
- 若尔当形
设$V$是复向量空间,如果$T\in\mathcal L(V)$,则$V$有一个基是$T$的若尔当基