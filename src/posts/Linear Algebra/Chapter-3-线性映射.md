---
title: Chapter 3 线性映射
date: 2020-07-26 14:47:53
tag:
	- Linear Algebra
category: 
	- 线性代数学习笔记
---
线性代数学习笔记第三章，参考教材为《Linear Algebra Done Right》。

<!--more-->


## 3.A 向量空间的线性映射  
- 线性映射的定义  
从$V$到$W$的**线性映射**是具有如下性质的函数:
	- 加性:$\forall u,v\in V$, $T(u+v)=Tu+Tv$
	- 齐性:$\forall \lambda \in F,\ v\in V,\ T(\lambda v)=\lambda (Tv) $     
	
	将从$V$到$W$的所有线性映射构成的集合记做$\mathcal L(V,W)$  

- 线性映射和定义域的基  
设$v_1,...,v_n$是$V$的基,$w_1,...,w_n\in W$.则存在唯一一个线性映射$T:V\rightarrow W$,s.t.$\forall j=1,...,n$都有:  
$$Tv_j=w_j$$
- $\mathcal L(V,W)$上的代数运算  
	- 加法和标量乘法  
	设$S,T\in\mathcal L(V,W),\ \lambda\in \bf F$,定义:**和**$S+T$和**积**$\lambda T$是$V$到$W$的线性映射:$\forall v\in V$  
	$$(S+T)(v)=Sv+Tv$$
	$$(\lambda T)(v)=\lambda (Tv)$$
	由此可以得到:$\mathcal L(V,W)$是一个向量空间    
	- 线性映射的乘积  
	若$T\in \mathcal L(U,V),\ S\in \mathcal L(V,W)$,则定义成绩$ST\in\mathcal L(U,W)$如下:  
	$$\forall u\in U,\ (ST)(u)=S(Tu)$$
	此乘积具有结合性、单位元和分配性质,**线性映射的乘法不是交换的.**
	- $T\in\mathcal L(V,W),\ T(0)=0$

## 3.B 零空间与值域
- 零空间与单值性
	- 零空间的定义  
	对于$T\in \mathcal L(V,W)$, $T$的零空间(记做$\mathrm{null}\  T$)是指那$V$中那些被$T$映成$0$的向量构成的子集:
	$$\mathrm{null}\ T=\{v\in V:Tv=0\}$$  
	零空间$\mathrm{null}\ T$是$V$的子空间    
	- 单的  
	如果$Tu=Tv$则必有$u=v$,则称映射$T:V\rightarrow W$是**单的**, $T$是单射当且仅当$\mathrm{null}\ T=\{0\}$.
- 值域和满射性  
	- 值域的定义  
	对于$V$到$W$的映射$T$,$T$的值域是$W$中形如$Tv(v\in V)$的向量组成的子集:  
	$$\mathrm{range}\ T=\{Tv:v\in V\}$$
	值域$\mathrm{range}\ T$是$W$的子空间  
	- 满的  
	若函数$T:V\rightarrow W$的值域等于$W$,则称$T$是满的.  
- 线性映射基本定理  
	- **线性映射基本定理**   
	设$V$是有限维的, $T\in \mathcal{L}(V,W)$, 则$\mathrm{range}\ T$是有限维且:
	$$\boxed{\mathrm{dim}\ V=\mathrm{dim\ null}\ T+\mathrm{dim\ range}\ T}$$
	- 到更小维数向量空间的线性映射不是单的  
	如果$V$和$W$都是有限维向量空间并且$\mathrm{dim}\ V>\mathrm{dim}\ W$,那么$V$到$W$的线性映射一定不是单的
	- 到更大维数向量空间的线性映射不是满的  
	如果$V$和$W$都是有限维向量空间并且$\mathrm{dim}\ V<\mathrm{dim}\ W$,那么$V$到$W$的线性映射一定不是满的
	- 齐次线性方程组  
	当变量数多于方程数时,齐次线性方程组必有非零解
	- 非齐次线性方程组  
	当方程数多于变量数,必有一组常数项使得相应的非齐次线性方程组无解

## 3.C 矩阵
- 用矩阵表示线性映射  
	- Matrix,$A_{i,j}$  
	设$m,n$都是正整数.$m\times n$**矩阵**$A$是由$\bf F$的元素构成的$m$行$n$列的矩形阵列:  
	$$A=\begin{pmatrix}A_{1,1}&...&A_{1,n}\\\vdots&&\vdots\\A_{m,1}&...&A_{m,n}\end{pmatrix}$$
	记号$A_{j,k}$表示位于$A$的第$j$行第$k$列处的元素.也就是说,第一个下标代表行,第二个下标代表列.  
	- **线性映射的矩阵**  
	设$T\in\mathcal L(V,W)$,并设$v_1,...,v_n$是$V$的基,$w_1,...,w_m$是$W$的基.规定$T$关于这些基的矩阵为$m\times n$的矩阵$\mathcal M(T)$,其中$A_{j,k}$满足:  
	$$Tv_k=A_{1,k}w_1+..+A_{m,k}w_m$$
	如果这些基不是上下文自明的,采用记号$\mathcal M(T,(v_1,...,v_n),(w_1,...,w_m))$  
- 矩阵的加法和标量乘法  
	- 矩阵加法  
	规定两个相同大小的矩阵的和是吧矩阵中相对应的元素相加所得到的矩阵
	- 线性映射的和的矩阵  
	设$S,T\in \mathcal L(V,W)$,则$\mathcal M(S+T)=\mathcal M(S)+\mathcal M(T)$
	- 矩阵的标量乘法  
	标量与矩阵的乘积就是用该标量乘以矩阵的每个元素
	- 标量乘以线性映射的矩阵  
	设$\lambda\in\bf F,\ T\in \mathcal L(V,W)$,则$\mathcal M(\lambda T)=\lambda \mathcal{M}(T)$
	- 对于正整数$m,n$.元素取自$\bf F$的所有$m\times n$矩阵的集合记做$\bf F^{m,n}$.  
	$$\mathrm{dim} \bf F^{m,n}=mn$$
- 矩阵的乘法  
	- 设$\mathcal M(S)=A,\mathcal M(T)=C$
	$$\begin{align}(ST)u_k&=S(\sum_{r=1}^{n}C_{r,k}v_r)\\&=\sum_{r=1}^nC_{r,k}Sv_r\\&=\sum_{r=1}^nC_{r,k}\sum_{j=1}^mA_{j,r}w_j\\&=\sum_{j=1}^m(\sum_{r=1}^nA_{j,r}C_{r,k})w_j\end{align}$$
	因此$\mathcal M(ST)$是$m\times p$矩阵,其第$j$行第$k$列的元素等于:  
	$$\sum_{r=1}^nA_{j,r}C_{r,k}$$
	- 矩阵乘法的定义:  
	设$A$是$m\times n$矩阵,$C$是$n\times p$矩阵.$AC$定义为$m\times p$矩阵,其第$j$行第$k$列元素是:
	$$\sum_{r=1}^nA_{j,r}C_{r,k}$$
	也就是说,把$A$的第$j$行和$C$的第$k$列的对应元素相乘再求和,就得到$AC$的第$j$行第$k$列元素.  
	- 线性映射乘积的矩阵  
	若$T\in \mathcal L(U,V),\ S\in \mathcal L(V,W)$, 则$\mathcal M(ST)=\mathcal M(S) \mathcal M(T)$
	- 设$A$是$m\times n$的矩阵  
		- 若$1\leq j\leq m$,则$A_{j,\cdot}$表示$A$的第$j$行组成的$1\times n$矩阵
		- 若$1\leq k\leq n$,则$A_{\cdot,k}$表示$A$的第$k$行组成的$m\times 1$矩阵
	- 列的线性组合  
	设$A$是$m\times n$矩阵,$c=\begin{pmatrix}c_1\\\vdots\\c_n\end{pmatrix}$是$n\times 1$矩阵,则:
	$$Ac=c_1A_{\cdot,1}+\cdots+c_nA_{\cdot,n}$$

## 3.D 可逆性和同构的向量空间
- 可逆的线性映射
	- 可逆和逆
		- 线性映射$T\in\mathcal L(V,W)$成为可逆的,若存在线性映射$S\in\mathcal L(W,V)$使得$ST$等于$V$上的恒等映射且$TS$等于$W$上的恒等映射
		- 满足$ST=I$和$TS=I$的线性映射$S$称为$T$的逆,这样的$S$是唯一的,记做$T^{-1}$
	- 可逆性等价于单性和满性  
	一个线性映射是可逆的当且仅当它既是单的又是满的
- 同构的向量空间
	- 同构,同构的  
	**同构**就是可逆的线性映射
	若两个向量空间之间存在一个同构,则称这两个向量空间是同构的.
	$\bf F$上的两个有限维向量空间同构当且仅当其维数相同
	**$\mathcal L(V,W)$与$\bf F^{m,n}$同构**
	由此$\mathrm{dim}\ \mathcal L(V,W)=(\mathrm{dim}\ V)(\mathrm{dim}\ W)$
- 将线性映射视为矩阵乘法
	- 向量的矩阵  
	设$v\in V$,并设$v_1,...,v_n$是$V$的基,则规定$v$关于这个基的矩阵是$n\times 1$矩阵:
	$$\begin{pmatrix}c_1\\\vdots\\c_n\end{pmatrix}$$
	其中$c_1,...,c_n$是使得下式成立的标量:
	$$v=c_1v_1+...+c_nv_n$$
	- $\mathcal M(T)_{\cdot,k}=\mathcal M(Tv_k)$
	- 线性映射的作用类似于矩阵乘  
	设$T\in\mathcal L(V,W),v\in V$.设$v_1,...,v_n$是$V$的基,$w_1,...,w_m$是$W$的基.则:
	$$\mathcal M(Tv)=\mathcal M(T)\mathcal M(v)$$
- 算子
	- 算子的定义和$\mathcal L(V)$  
	向量空间到其自身的线性映射称为算子.记号$\mathcal L(V)$表示$V$上全体算子的集合,即$\mathcal L(V)=\mathcal L(V,V)$
	- 在有限维的情形中,单性等价于满性  
	设$V$是有限维的,并设$T\in \mathcal L(V)$,则如下叙述等价:  
		- $T$是可逆的
		- $T$是单的
		- $T$是满的

## 3.F 对偶
- 对偶空间和对偶映射
	- 线性泛函  
	$V$上的线性泛函是从$V$到$\bf F$的线性映射.也就是说,线性泛函是$\mathcal L(V,\bf F)$中的元素.
	- 对偶空间  
	$V$上的所有线性泛函构成的向量空间称为$V$的对偶空间,记做$V^{\prime}$.也就是说$V^{\prime}=\mathcal L(V,\bf F)$
	- $\mathrm{dim} V^{\prime}=\mathrm{dim} V$
	- 对偶基  
	设$v_1,...,v_n$是$V$的基,则$v_1,...,v_n$的对偶基是$V^{\prime}$中的元素组$\phi_1,...,\phi_n$,其中每个$\phi_j$都是$V$上的线性泛函,使得:
	$$\phi_j(v_k)=\begin{cases}1,&k=j\\0,&k\neq j\end{cases}$$
	其确实是对偶空间的基
	- 对偶映射  
	若$T\in\mathcal L(V,W)$,则$T$的对偶映射$T^{\prime}\in\mathcal L(W^{\prime},V^{\prime})$:  
	对于$\phi\in W^{\prime},T^{\prime}(\phi)=\phi\circ T$
		- 对偶映射的代数性质
			- 对所有$S,T\in\mathcal L(V,W)$有$(S+T)^{\prime}=S^{\prime}+T^\prime$
			- 对所有$\lambda\in \bf F$和所有$T\in\mathcal L(V,W)$有$(\lambda T)^{\prime}=\lambda T^{\prime}$
			- $(ST)^{\prime}=T^{\prime}S^\prime$
- 线性映射的对偶的空间和值域
	- 零化子  
	对于$U\subset V,U$的零化子(记为$U^0$)定义如下:
	$$U^0=\{\phi \in V^\prime:\forall u\in U,\ \phi(u)=0\}.$$
	其是$V^\prime$的子空间
	- 零化子的维数  
	$$\mathrm {dim}U+\mathrm{dim} U^0=\mathrm{dim} V.$$
	- $T^\prime$的零空间    
	  设$V$和$W$均为有限维,$T\in \mathcal L(V,W)$.则:
	  - $\mathrm{null} T^{\prime}=(\mathrm{range}T)^0$
	  - $\mathrm{dim\ null}\ T^{\prime}=\mathrm{dim\ null}\ T+\mathrm{dim}\ W-\mathrm{dim}\ V $   
	
	  $\Rightarrow T$是满的等价于$T^\prime$是单的
	- $T^\prime$的值域    
		- $\mathrm{dim\ range}\ T^{\prime}=\mathrm{dim\ range}\ T$
		- $\mathrm{range}\ T^{\prime}=(\mathrm{null}\ T)^0$    
	
		$\Rightarrow T$是单的等价于$T^\prime$是满的
- 对偶映射的矩阵
	- 转置  
	矩阵$A$的转置(记做$A^t$)是通过互换$A$的行和列的角色得到的矩阵.确切地说,若$A$是$m\times n$矩阵,则$A^t$是$n\times m$矩阵,其元素由下式给出:
	$$(A^t)_{k,j}=A_{j,k}$$
	- 性质
		- $(A+C)^t=A^t+C^t$
		- $(\lambda A)^t=\lambda A^t$
		- $(AC)^t=C^tA^t$
		- 设$T\in \mathcal L(V,W)$,则$\mathcal M(T^\prime)=(\mathcal M(T))^t$
- 矩阵的秩
	- 行秩和列秩
	  设$A$是属于$\bf F$的$m\times n$矩阵.
	  - $A$的行秩是$A$的诸行在$\bf F^{1,n}$中张成空间的维数
	  - $A$的列秩是$A$的诸列在$\bf F^{m,1}$中张成空间的维数
	
	  由此$\mathrm{range}\ T$的维数等于$\mathcal M(T)$的列秩
	- 行秩等于列秩
	- 由此定义矩阵$A$的秩为$A$的列秩
	
	
	
	


