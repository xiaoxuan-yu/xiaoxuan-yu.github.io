---
title: Chapter 7 内积空间上的算子
date: 2020-07-26 15:55:49
tag:
	- Linear Algebra
category: 
	- 线性代数学习笔记
---
线性代数学习笔记第七章，参考教材为《Linear Algebra Done Right》。

<!--more-->


## 7.A 自伴算子和正规算子
### 伴随
- 定义
设$T\in\mathcal L(V,W)$.$T$的伴随是满足如下条件的函数$T^*:W\to V$: $\forall v\in V,w\in W,\ \left<Tv,w\right>=\left<v,T^*w\right>$
- 伴随是线性映射
若$T\in\mathcal L(V,W)$,则$T^*\in\mathcal L(W,V)$
- 伴随的性质
	- 对所有$S,T\in\mathcal L(V,W)$均有$(S+T)^*=S^*+T^*$
	- 对所有$\lambda\in\bf F,\ T\in\mathcal L(V,W)$有$(\lambda T)^*=\bar\lambda T^*$
	- 对所有$T\in\mathcal L(V,W)$,有$(T^*)^*=T$
	- $I^*=I$,这里的$I$是$V$上的恒等算子
	- 对所有$T\in\mathcal L(V,W),\ S\in\mathcal L(W,U)$均有$(ST)^*=T^*S^*$($U$是$\bf F$上的内积空间)
- $T^*$的零空间和值域
设$T\in\mathcal L(V,W)$,则:
	- $\text{null}\ T^*=(\text{range}\ T)^\perp$
	- $\text{range}\ T^*=(\text{null}\ T)^\perp$
	- $\text{null}\ T=(\text{range}\ T^*)^\perp$
	- $\text{range}\ T=(\text{null}\ T^*)^\perp$
- 共轭转置
$m\times n$矩阵的共轭转置是先互换行和列,然后再对每个元素取复共轭得到的$n\times m$矩阵
- $T^*$的矩阵
设$T\in\mathcal L(V,W)$.假设$e_1,...,e_n$是$V$的规范正交基,$f_1,...,f_m$是$W$的规范正交基.则$\mathcal M(T^*,(f_1,...,f_m),(e_1,...,e_n))$是$\mathcal M(T,(e_1,...,e_n),(f_1,...,f_m))$的共轭转置.

### 自伴算子
- 定义
算子$T\in\mathcal L(V)$称为自伴的,如果$T=T^*$,也就是说,$T\in\mathcal L(V)$是自伴的当且仅当$\forall v,w\in V,\ \left<Tv,w\right>=\left<v,Tw\right>$
- 两个自伴算子的和是自伴的,实数和自伴算子的乘积是自伴的
- 自伴算子的本征值是实的
- 在$\bf C$上只有$0$算子才能使得$Tv$总正交于$v$
- 在$\bf C$上,仅自伴算子才能使$\left<Tv,v\right>$都是实数
- 若$T=T^*$且对所有$v$均有$\left<Tv,v\right>=0,$ 则$T=0$.

### 正规算子
- 定义
内积空间上的算子称为正规的,如果它和它的伴随是交换的.也就是所,$T\in\mathcal L(V)$是正规的,如果:$TT^*=T^*T$
- $T$是正规的当且仅当对所有的$v$,均有$||Tv||=||T^*v||$
$$
\begin{aligned}
T^*T=TT^*&\iff TT^*-T^*T=0\\&\iff \forall v\in V,\ \left<(T^*T-TT^*)v,v\right>=0\\&\iff \forall v\in V,\left<T^*Tv,v\right>=\left<TT^*v,v\right>\\&\iff\forall v\in V,\ ||Tv||^2=||T^*v||^2
\end{aligned}
$$
其重要推论是$\text{null}\ T=\text{null}\ T^*$
- 若$T$正规,则$T$和$T^*$有相同的本征向量
- 正规算子的正交本征向量
设$T\in\mathcal L(V)$是正规的,则$T$的相应于不同本征值的本征向量是正交的.

## 7.B **谱定理**
### 复谱定理
设$\bf F=\bf C$且$T\in\mathcal L(V)$则以下条件等价:
- a. $T$是正规的
- b. $V$有一个由$T$的本征向量组成的规范正交基
- c. $T$关于$V$某个规范正交基具有对角矩阵

> proof:
(b) \( c \)显然等价,因此只需证明(a)\( c \)的等价性
首先假设\( c \)成立.
那么$T$在$V$的某个规范正交基上有对角矩阵,则$T^*$在$V$的某个规范正交基上有对角矩阵,由任意两个对角矩阵都是交换的可证$T$正规.
然后假设(a)成立,则$T$是正规的,由舒尔定理,$V$有一个规范正交基$e_1,...,e_n$使得$T$关于这个基具有上三角矩阵.于是:
>$$\mathcal M(T,(e_1,...,e_n))=\begin{pmatrix}a_{1,1}&\cdots&a_{1,n}\\&\ddots&\vdots\\0&&a_{n,n}\end{pmatrix}$$
>只需证明该矩阵为对角矩阵即可.
>$$||Te_1||^2=|a_{1,1}|^2=||T^*e_1||^2=|a_{1,1}|^2+...+|a_{1,n}|^2$$
>由此$|a_{1,k}|=0,\ k=2,...,n$
以此类推直到最后一行,可以证得矩阵中所有非对角线元素全部为0,\( c \)成立.
$\text{Q.E.D.}$

### 实谱定理
证明实谱定理之前需要几个引理:
- 可逆的二次式
设$T\in\mathcal L(V)$是自伴的,并设$b,c\in\bf R$使得$b^2<4c$,则:
$$T^2=bT=cI$$
是可逆的.
- 自伴算子都具有本征值
设$V\neq\{0\}$且$T\in\mathcal L(V)$是自伴算子,则$T$有本征值

> proof:
设$V$是实向量空间.设$n=\text{dim}\ V$,取$v\in V,\ v\neq 0$,则:$v,Tv,T^2v,...,T^nv$线性相关,于是有不全为$0$的实数$a_0,...,a_n$使得:
>$$0=a_0v+a_1Tv+...+a_nT^nv$$
>取多项式$a_0+a_1x+...+a_nx_n$,并将其分解:
>$$a_0+a_1x+...+a_nx^n=c(x^2+b_1x+c_1)...(x^2b_Mx+c_M)(x-\lambda_1)...(x-\lambda_m)$$
>其中$c$是非零实数,$b_i,c_i,\lambda_i\in\bf{R}$,$\ b_j^2<4c_j,\ m+M\geq 1$,那么:
>$$0=c(T^2+b_1T+c_1I)...(T^2+b_MT+c_MI)(T-\lambda_1I)...(T-\lambda_mI)v$$
>由第一个引理,每个$T^2+b_jT+c_j$都是可逆的,那么$m>0$且:
>$$0=(T-\lambda_1I)...(T-\lambda_m I)v$$
>至少有一个$j$使得$T-\lambda_jI$不是单的,也就是说$T$有本征值
$\text{Q.E.D}$

- 自伴算子和不变子空间
设$T\in\mathcal L(V)$是自伴的,并设$U$是$V$的在$T$下不变的子空间.则:
	- $U^\perp$在$T$下是不变的
	- $T|_U\in\mathcal L(U)$是自伴的
	- $T|_{U^\perp}\in\mathcal L(U^\perp)$是自伴的
- 实谱定理
设$\bf F=\bf R$且$T\in\mathcal L(V)$,则以下条件等价:
	- a. $T$是自伴的
	- b. $V$有一个由$T$的本征向量组成的规范正交基
	- c. $T$关于$V$的某个规范正交基具有对角矩阵

> proof:
首先假设\( c \)成立,显然(a)成立.
接下来假设(a)成立,使用归纳法证明(b)成立:
若$\text{dim}\ V=1$,则(b)显然正确,下设$\text{dim}\ V>1$且对于维数更小的向量空间,(b)成立.
首先假设$u$是$T$的本征向量且$||u||=1$,设$U=\text{span}(u)$,则$U$是$V$的一维不变子空间.
由引理3的\( c \),$T_{U^\perp}\in\mathcal L(U^\perp)$是自伴的
由归纳假设,$U^\perp$有一个由$T|_{U^\perp}$的本征向量组成的规范正交基,将$u$添加进这个规范正交基,就得到了$V$的一个由$T$的本征向量组成的规范正交基.(b)成立.
最后假设(b)成立,显然(c)成立.
$\text{Q.E.D.}$

## 7.C 正算子和等距同构
### 正算子
称算子$T\in\mathcal L(V)$是正的,如果$T$是自伴的并且对于所有的$v\in V$均有$\left<Tv,v\right>\geq 0$
p.s.如果$V$是复向量空间,则$T$自伴的条件可以从上面的定义中去掉.
- 定义:平方根
算子$R$称为算子$T$的平方根,如果$R^2=T$.
- 正算子的刻画
设$T\in\mathcal L(V)$,则以下条件等价:
	- $T$是正的
	- $T$是自伴的并且$T$的所有本征值非负
	- $T$有正的平方根
	- $T$有自伴的平方根
	- 存在算子$R\in\mathcal L(V)$使得$T=R^*R$

这个定理可以与$\bf C$中非负数的刻画相对应.复数$z$非负当且仅当其具有非负平方根,与第三个条件对应;复数$z$非负当且仅当它具有实的平方根,这对应于第四个条件;$z$非负当且仅当有复数$w$使得$z=\bar w w$,这对应于第五个条件
- 每个正算子都有唯一的平方根
$V$上每个正算子都有唯一的平方根

> proof:
假设$T\in\mathcal L(V)$是正的,$v\in V$是$T$的一个本征向量.则有$\lambda\geq 0$使得:$Tv=\lambda v$
下面证明$Rv=\sqrt \lambda v$.
根据谱定理,$V$有一个由$R$的本征向量构成的规范正交基$e_1,...,e_n$.因为$R$是正算子,其本征值均是非负的,因此存在非负数$\lambda_1,...,\lambda_n$使得对于每一个$j=1,...,n$均有
>$$Re_j=\sqrt\lambda_j e_j$$
>因为$e_1,...,e_n$是$V$的基,所以$\exists a_1,...a_n\in\bf F$使得
>$$v=a_1e_1+...+a_ne_n$$
>于是
>$$Rv=a_1\sqrt\lambda_1e_1+...+a_n\sqrt\lambda_n e_n$$
>因此
>$$R^2v=a_1\lambda_1 e_1+...+a_n\lambda_n e_n$$
>又$R^2=T,\ Tv=\lambda v$
因此:
>$$a_1\lambda_1 e_1+...+a_n\lambda_n e_n=a_1\lambda e_1+...+a_n\lambda e_n$$
>这意味着对于$j=1,...,n$, $a_j(\lambda-\lambda_j)=0$
所以
>$$v=\sum_{\{j:\lambda_j=\lambda\}}a_je_j$$
>也就是:
>$$Rv=\sum_{\{j:\lambda_j=\lambda\}}a_j\sqrt\lambda e_j=\sqrt \lambda v$$
>这就意味着$R$在$T$的本征向量上是唯一确定的,由谱定理,$V$有一个由$T$的本正向量构成的基,那么$R$也就唯一确定了.
$\text{Q.E.D.}$

### 等距同构
算子$S\in\mathcal L(V)$称为等距同构,如果对于所有的$v\in V$,均有$||Sv||=||v||$,也就是说,算子是等距同构的当且仅当它保持范数.实内积空间上的等距同构通常称为正交算子,复内积空间上的等距同构通常称为酉算子.
- 等距同构的刻画
设$S\in\mathcal L(V)$,则以下条件等价:
	- $S$等距同构
	- 对所有$u,v\in V$均有$\left<Su,Sv\right>=\left<u,v\right>$
	- 对$V$中的任意规范正交向量组$e_1,...,e_n$均有$Se_1,...,Se_n$是规范正交的
	- $V$有规范正交基$e_1,...,e_n$使得$Se_1,...,Se_n$是规范正交的
	- $S^*S=I$
	- $SS^*=I$
	- $S^*$等距同构
	- $S$是可逆的并且$S^{-1}=S^*$
- $\bf F\ =\ C$时等距同构的描述
设$V$是夫内积空间,$S\in\mathcal L(V)$,则以下条件等价:
	- $S$等距同构
	- $V$有一个由$S$的本征向量组成的规范正交基,相应的本征值的绝对值均为$1$

### 极分解和奇异值分解
- 类比:$\bf C$和$\mathcal L(V)$(首先定义$\sqrt T$是$T$的唯一的正平方根)

|                           $\bf C$                            |                       $\mathcal L(V)$                        |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                           复数$z$                            |                           算子$T$                            |
|                           $\bar z$                           |                            $T^*$                             |
|                            非负数                            |                            正算子                            |
|                     单位元($\bar zz=1$)                      |                     全体等距同构$T^*T=I$                     |
| $\forall z\in\bf C$, $z=(\frac{z}{\|z\|})\|z\|=(\frac{z}{\|z\|})\sqrt{\bar zz}$   | $\forall T\in\mathcal L(V),\ \exists S\in\mathcal L(V),\ T=S\sqrt{T^*T}$, 其中$S$为等距同构 |
- 极分解
设$T\in\mathcal L(V)$,则有一个等距同构$S\in\mathcal L(V)$使得$T=S\sqrt{T^*T}$

> proof:
> 设$v\in V$,则:
> $$
> \begin{aligned}
||Tv||^2=\left<Tv,Tv\right>&=\left<T^*Tv,v\right>\\
&=\left<\sqrt{T^*T}\sqrt{T^*T}v,v\right>\\
&=\left<\sqrt{T^*T}v,\sqrt{T^*T}v\right>\\
&=||\sqrt{T^*T}v||^2
\end{aligned}
> $$
> 于是对于所有$v\in V$均有
>$$||Tv||=||\sqrt{T^*T}v||\tag{1}$$
> 定义线性映射$S_1:\text{range}\sqrt{T^*T}\leftarrow\text{range} T$为:
> $$S_1(\sqrt{T^*T}v)=Tv\tag{2}$$
> 证明的思路是将$S_1$扩张成一个等距同构映射$S\in\mathcal L(V)$使得$T=S\sqrt{T^*T}$
首先必须验证$S_1$的定义是合理的.为此假设$v_1,v_2\in V$使得$\sqrt{T^*T}v_1=\sqrt{T^*T}v_2$.为使$S_1$的定义有意义,必须有$Tv_1=Tv_2$.
> $$
> \begin{aligned}
	||Tv_1-Tv_2||&=||T(v_1-v_2)||\\
	&=||\sqrt{T^*T}(v_1-v_2)||\\
	&=||\sqrt{T^*T}v_1-\sqrt{T^*T}v_2||\\
	&=0
> \end{aligned}
> $$
> 因此$Tv_1=Tv_2$.而$S_1$的线性是显然的.
有上述推导可知$S_1$将$\text{range}\sqrt{T^*T}$映射到$\text{range}T$上,而由$(1),(2)$, $||S_1u||=||u||$是显然的.
接下来要将$S_1$扩张成整个$V$上的一个等距同构$S$.由于$S_1$是单的(等距同构算子可逆),那么对其使用线性映射基本定理有:
> $$\text{dim\ range}\sqrt{T^*T}=\text{dim\ range}T$$
>这说明$\text{dim\ }(\text{range}\sqrt{T^*T})^\perp=\text{dim\ }(\text{range}T)^\perp$,分别取$(\text{range\ }\sqrt{T^*T})^\perp$和$(\text{range\ }T)^\perp$的规范正交基$e_1,...,e_m$和$f_1,...,f_m$定义线性映射$S_2:(\text{range\ }\sqrt{T^*T})^\perp\rightarrow(\text{range} T)^\perp$:
> $$S_2(a_1e_2+...+a_me_m)=a_1f_1+...+a_mf_m$$
> 那么对于所有$w\in(\text{range\ }\sqrt{T^*T})^\perp$均有$||S_2w||=||w||$
现在设$S$是$V$上的算子,在$\text{range}\sqrt{T^*T}$上与$S_1$相等,在$(\text{range}\sqrt{T^*T})^\perp$上与$S_2$相等.由于每一个$v\in V$可以唯一地写成:
> $$v=u+w$$
> 其中$u\in\text{range}\sqrt{T^*T},\ w\in(\text{range}\sqrt{T^*T})^\perp$,那么根据上述定义,对于$v\in V$:
> $$Sv=S_1u+S_2w$$
> 其等距同构性由勾股定理显然可证.而$\forall v\in V$:
> $$S(\sqrt{T^*T}v)=S_1(\sqrt{T^*T}v)=Tv$$
> $\text{Q.E.D.}$

特别地,考虑$\bf F=C$的情形,设$T=S\sqrt{T^*T}$是$T\in\mathcal L(V)$的极分解,其中$S$是等距同构则$V$有一个规范正交基使得$S$关于这个基有对角矩阵,并且$V$还有一个规范正交基使得$\sqrt{T^*T}$关于这个基有对角矩阵.
**注意:未必有规范正交基使得$S$和$\sqrt{T^*T}$的矩阵同时具有这么好的对角形式**

- 奇异值分解
	- 奇异值
	设$T\in\mathcal L(V)$则$T$的奇异值就是$\sqrt{T^*T}$的本征值,而且每个本征值$\lambda$都要重复$\text{dim}E(\lambda,\sqrt{T^*T})$次.
	由于$T$的奇异值都是正算子$\sqrt{T^*T}$的本征值,所以它们均非负.
	每个$T\in\mathcal L(V)$都有$\text{dim}V$个奇异值.
	- 奇异值分解
	设$T\in\mathcal L(V)$有奇异值$s_1,...,s_n$.则$V$有两个规范正交基$e_1,...,e_n$和$f_1,...,f_n$使得对于每个$v\in V$均有$Tv=s_1\left<v,e_1\right>f_1+...+s_n\left<v,e_n\right>f_n$
	
	> proof:
	> 对$\sqrt{T^*T}$应用谱定理可知,有$V$的规范正交基$e_1,...e_n$使得对$j=1,...,n$均有$\sqrt{T^*T}e_j=s_je_j$
	而对于每一个$v\in V$均有
	> $$v=\left<v,e_1\right>e_1+...+\left<v,e_n\right>e_n\tag{1}$$
	>将算子$\sqrt{T^*T}$作用在$(1)$式的两端,则对于每个$v\in V$均有:
	>$$\sqrt{T^*T}v=s_1\left<v,e_1\right>e_1+...+s_n\left<v,e_n\right>e_n\tag{2}$$
	> 由极分解定理,有等距同构$S\in\mathcal L(V)$使得$T=S\sqrt{T^*T}$.将$S$作用到$(2)$式两端,则对于每个$v\in V$均有
	>$$Tv=s_1\left<v,e_1\right>Se_1+...+s_n\left<v,e_n\right>Se_n\tag{3}$$
	>对每个j,令$f_j=Se_j$,由于$S$是等距同构,因此$f_1,...,f_n$是$V$的规范正交基,那么$(3)$式化为:
	>$$Tv=s_1\left<v,e_1\right>f_1+...+s_n\left<v,e_n\right>f_n$$
	>$\text{Q.E.D.}$
	
	- 不对算子开平方描述其奇异值
	设$T\in\mathcal L(V)$,则$T$的奇异值是$T^*T$的本征值的非负平方数,且每个本征值都要重复$\text{dim}E(\lambda,T^*T)$次.