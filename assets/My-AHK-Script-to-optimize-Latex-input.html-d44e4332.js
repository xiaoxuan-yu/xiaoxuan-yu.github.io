import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,b as p,d as n,a as o}from"./app-95e271fc.js";const c={},e=n("p",null,"通过 AHK 脚本实现了如下功能:",-1),i=n("ul",null,[n("li",null,"若干关键词的快速输入 (\\frac,\\mathscr,\\mathrm,\\bold)"),n("li",null,"箭头的快速输入 (双向箭头, 左、右箭头及长箭头)"),n("li",null,"希腊字母的快速输入 ('@'作为关键字，区分大小写)")],-1),u=o(`<p>脚本内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.</span>
<span class="token punctuation">;</span> <span class="token comment">#Warn  ; Enable warnings to assist with detecting common errors.</span>
SendMode Input  <span class="token punctuation">;</span> Recommended <span class="token keyword">for</span> new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  <span class="token punctuation">;</span> Ensures a consistent starting directory.
:o:fra::<span class="token punctuation">\\</span>frac<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">}</span>•<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">}</span>•<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">{</span>Left <span class="token number">4</span><span class="token punctuation">}</span>+<span class="token punctuation">{</span>Left<span class="token punctuation">}</span> <span class="token punctuation">;</span> <span class="token punctuation">\\</span>frac<span class="token punctuation">{</span>•<span class="token punctuation">}</span><span class="token punctuation">{</span>•<span class="token punctuation">}</span>
:o:<span class="token operator">&lt;=</span><span class="token operator">&gt;</span>::<span class="token punctuation">\\</span>Leftrightarrow <span class="token punctuation">;</span> <span class="token operator">&lt;=</span><span class="token operator">&gt;</span>
:o:<span class="token operator">=</span><span class="token operator">&gt;</span>::<span class="token punctuation">\\</span>Rightarrow <span class="token punctuation">;</span> <span class="token operator">=</span><span class="token operator">&gt;</span>
:o:<span class="token operator">&lt;=</span>::<span class="token punctuation">\\</span>Leftarrow <span class="token punctuation">;</span> <span class="token operator">&lt;=</span>
:o?:--<span class="token operator">&gt;</span>::<span class="token punctuation">\\</span>longrightarrow <span class="token punctuation">;</span> --<span class="token operator">&gt;</span>
:o:-<span class="token operator">&gt;</span>::<span class="token punctuation">\\</span>rightarrow <span class="token punctuation">;</span> -<span class="token operator">&gt;</span>
:o?:<span class="token operator">&lt;</span>--::<span class="token punctuation">\\</span>longleftarrow <span class="token punctuation">;</span> <span class="token operator">&lt;</span>--
:o:<span class="token operator">&lt;</span>-::<span class="token punctuation">\\</span>leftarrow<span class="token punctuation">;</span> <span class="token operator">&lt;</span>-
:o?:<span class="token operator">=</span>::<span class="token punctuation">\\</span> <span class="token operator">=</span><span class="token punctuation">\\</span><span class="token punctuation">{</span>Space<span class="token punctuation">}</span>
:o:@a::<span class="token punctuation">\\</span>alpha
:o:@b::<span class="token punctuation">\\</span>beta
:o:@c::<span class="token punctuation">\\</span>chi
:oc:@d::<span class="token punctuation">\\</span>delta
:oc:@D::<span class="token punctuation">\\</span>Delta
:o:@e::<span class="token punctuation">\\</span>epsilon
:o:@ve::<span class="token punctuation">\\</span>varepsilon
:oc:@f::<span class="token punctuation">\\</span>phi
:oc:@F::<span class="token punctuation">\\</span>Phi
:o:@vf::<span class="token punctuation">\\</span>varphi
:oc:@g::<span class="token punctuation">\\</span>gamma
:oc:@G::<span class="token punctuation">\\</span>Gamma
:o:@h::<span class="token punctuation">\\</span>eta
:o:@i::<span class="token punctuation">\\</span>iota
:o:@k::<span class="token punctuation">\\</span>kappa
:oc:@l::<span class="token punctuation">\\</span>lambda
:oc:@L::<span class="token punctuation">\\</span>Lambda
:o:@m::<span class="token punctuation">\\</span>mu
:o:@n::<span class="token punctuation">\\</span>nu
:oc:@p::<span class="token punctuation">\\</span>pi
:oc:@P::<span class="token punctuation">\\</span>Pi
:oc:@q::<span class="token punctuation">\\</span>theta
:oc:@Q::<span class="token punctuation">\\</span>Theta
:o:@vq::<span class="token punctuation">\\</span>vartheta
:o:@r::<span class="token punctuation">\\</span>rho
:oc:@s::<span class="token punctuation">\\</span>sigma
:oc:@S::<span class="token punctuation">\\</span>Sigma
:o:@t::<span class="token punctuation">\\</span>tau
:oc:@u::<span class="token punctuation">\\</span>upsilon
:oc:@U::<span class="token punctuation">\\</span>Upsilon
:o:@v::<span class="token punctuation">\\</span>digamma
:oc:@w::<span class="token punctuation">\\</span>omega
:oc:@W::<span class="token punctuation">\\</span>Omega
:oc:@x::<span class="token punctuation">\\</span>xi
:oc:@X::<span class="token punctuation">\\</span>Xi
:oc:@y::<span class="token punctuation">\\</span>psi
:oc:@Y::<span class="token punctuation">\\</span>Psi
:o:@z::<span class="token punctuation">\\</span>zeta
:o:scr::<span class="token punctuation">\\</span>mathscr<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">}</span>•<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">{</span>Left<span class="token punctuation">}</span>+<span class="token punctuation">{</span>Left<span class="token punctuation">}</span>
:o:rm::<span class="token punctuation">\\</span>mathrm<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">}</span>•<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">{</span>Left<span class="token punctuation">}</span>+<span class="token punctuation">{</span>Left<span class="token punctuation">}</span>
:o:bd::<span class="token punctuation">\\</span>bold<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">}</span>•<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">{</span>Left<span class="token punctuation">}</span>+<span class="token punctuation">{</span>Left<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前中英文自动切换的问题有待进一步解决.</p>`,3);function l(r,d){return a(),t("div",null,[e,i,p(" more "),u])}const m=s(c,[["render",l],["__file","My-AHK-Script-to-optimize-Latex-input.html.vue"]]);export{m as default};
