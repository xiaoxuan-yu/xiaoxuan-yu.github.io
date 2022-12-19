import{_ as l,W as r,X as o,Z as t,$ as e,a0 as a,a1 as i,Y as s,D as d}from"./framework-8ccf14da.js";const h={},c=e("p",null,"由于网上的教程大多有点年代，且很少又包含评论、分享等功能的支持，因此，第一篇技术相关的博文就记录一下建立这个博客的过程吧，希望对后来人有所帮助。",-1),p=s(`<h1 id="基本功能的建立" tabindex="-1"><a class="header-anchor" href="#基本功能的建立" aria-hidden="true">#</a> 基本功能的建立</h1><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><ul><li>安装 git for windows</li><li>安装 node.js</li><li>注册一个 Github 帐号</li></ul><h2 id="hexo-在本地的部署" tabindex="-1"><a class="header-anchor" href="#hexo-在本地的部署" aria-hidden="true">#</a> Hexo 在本地的部署</h2><ul><li>在 node.js 中使用淘宝源以加速下载</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Hexo 的安装</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cnpm <span class="token function">install</span> hexo <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>在本地建立你的博客根目录，如 Hexo 或其他你喜欢的名字</p></li><li><p>在这个目录打开 Git Bash，执行如下命令完成初始化：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hexo init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),u=e("li",null,[e("p",null,[a("进入根目录，打开_config.yml 进行基本的配置 "),e("img",{src:"https://cdn.jsdelivr.net/gh/xiaoxuan-yu/Youmans-Blog/img/批注 2020-05-01 204111.jpg",alt:"",loading:"lazy"}),a(" 配置项非常清楚，可以根据自己的信息进行设置")])],-1),x={href:"https://hexo.io/themes/",target:"_blank",rel:"noopener noreferrer"},g=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone xxxxxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我使用的是 Melody。</p><ul><li><p>本地博客的部署，执行:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hexo g <span class="token operator">&amp;&amp;</span> hexo s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>浏览器打开 localhost:4000 预览效果。</p></li></ul><h2 id="本地向-github-的部署" tabindex="-1"><a class="header-anchor" href="#本地向-github-的部署" aria-hidden="true">#</a> 本地向 Github 的部署</h2>`,4),m={href:"http://xxx.github.io",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"安装 hexo 的自动部署工具",-1),v=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cnpm <span class="token function">install</span> hexo-deployer-git <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>修改配置文件</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/xiaoxuan-yu/Youmans-Blog/img/批注 2020-05-01 205122.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其中的 repo 项填写上述仓库的网址（形如 htps://github.com/xxx/xxx.github.io，xxx 为用户名）。</p><ul><li>执行下列命令完成部署：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hexo clean <span class="token operator">&amp;&amp;</span> hexo g <span class="token operator">&amp;&amp;</span> hexo d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第一次执行时需要输入账号密码进行验证。</p><h2 id="域名的绑定" tabindex="-1"><a class="header-anchor" href="#域名的绑定" aria-hidden="true">#</a> 域名的绑定</h2>`,8),f={href:"http://xxx.github.io",target:"_blank",rel:"noopener noreferrer"},_=s(`<figure><img src="https://cdn.jsdelivr.net/gh/xiaoxuan-yu/Youmans-Blog/img/批注 2020-05-01 210246.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>进入你 hexo 根目录下的 sources 文件夹，新建一个文本文件，内容为你的域名 (带有 www)，名称为&#39;CNAME&#39;(没有. txt!!)</li><li>执行命令，重新部署。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hexo clean <span class="token operator">&amp;&amp;</span> hexo g <span class="token operator">&amp;&amp;</span> hexo d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="hexo-的使用" tabindex="-1"><a class="header-anchor" href="#hexo-的使用" aria-hidden="true">#</a> Hexo 的使用</h2><p>请自行参考帮助文档（支持简中）。</p><h1 id="其他功能的配置" tabindex="-1"><a class="header-anchor" href="#其他功能的配置" aria-hidden="true">#</a> 其他功能的配置</h1><h2 id="主题的个性化定制" tabindex="-1"><a class="header-anchor" href="#主题的个性化定制" aria-hidden="true">#</a> 主题的个性化定制</h2><p>参考相应的帮助文档进行配置</p><h2 id="评论系统的添加" tabindex="-1"><a class="header-anchor" href="#评论系统的添加" aria-hidden="true">#</a> 评论系统的添加</h2><p>我选用的评论系统是 Gitalk，基于 Github 的 issues 功能，可以自行参照文档配置。</p><p>值得注意的是本地运行 hexo 时 Gitalk 组件会显示 Network Error， 无需理会。</p><p>另外，每一篇博文在第一次发表评论前会提示未找到相关的 issues 进行评论，这时仅需按提示登录即可。</p><h2 id="分享系统的添加" tabindex="-1"><a class="header-anchor" href="#分享系统的添加" aria-hidden="true">#</a> 分享系统的添加</h2><p>我使用的是 AddThis 平台，登陆后按提示注册，设置样式后在最后生成的 html 代码中找到 pubid 输入配置文件的相应位置即可。</p>`,14);function k(y,w){const n=d("ExternalLinkIcon");return r(),o("div",null,[c,t("more"),p,e("ul",null,[u,e("li",null,[e("p",null,[a("更换主题：进入 "),e("a",x,[a("Theme|Hexo"),i(n)]),a(" 选择你喜欢的主题，进入根目录，打开 Git Bash，执行(xxx 为该主题的地址)：")])])]),g,e("ul",null,[e("li",null,[a("新建一个 repo，名称为 "),e("a",m,[a("xxx.github.io"),i(n)]),a("(xxx 是你的用户名)")]),b]),v,e("ul",null,[e("li",null,[a("进入你的域名服务商，添加一条 CNAME 记录，将 www 域名指向 "),e("a",f,[a("xxx.github.io"),i(n)]),a("（我的服务商是 namesilo，下图仅供参考）")])]),_])}const B=l(h,[["render",k],["__file","some-tips-about-hexo-and-github-pages.html.vue"]]);export{B as default};
