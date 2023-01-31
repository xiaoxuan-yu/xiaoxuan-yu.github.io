import{_ as t,X as p,Y as l,$ as o,a0 as s,a1 as n,a2 as c,Z as a,F as u}from"./framework-3344266f.js";const i={},r=s("p",null,[n("为了更好的性能和拓展性，转战 "),s("code",null,"vuepress"),n(" 。")],-1),d=a(`<ul><li>初始化</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init vuepress-theme-hope@next <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),k=s("code",null,"[dir]",-1),v=s("code",null,"blog",-1),m={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/",target:"_blank",rel:"noopener noreferrer"},b=a(`<ul><li>部署</li></ul><p>使用 Github Action ，同步生成 <code>gh-pages</code> 分支并部署到 Github Pages 和远端服务器。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>
<span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token comment"># 确保这是你正在使用的分支名称</span>
      <span class="token punctuation">-</span> master

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
          <span class="token comment"># 如果你文档需要 Git 子模块，取消注释下一行</span>
          <span class="token key atrule">submodules</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>



      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> npm

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装依赖
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建文档
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=8192
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
          npm run docs<span class="token punctuation">:</span>build
          <span class="token punctuation">&gt;</span> src/.vuepress/dist/.nojekyll

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 这是文档部署到的分支名称</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> src/.vuepress/dist

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署到 aliyun
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> mdallasanta/ssh<span class="token punctuation">-</span>scp<span class="token punctuation">-</span>deploy@v1.2.0
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">local</span><span class="token punctuation">:</span> <span class="token string">&#39;src/.vuepress/dist&#39;</span>                                                  <span class="token comment"># Local file path - REQUIRED false - DEFAULT ./</span>
          <span class="token key atrule">remote</span><span class="token punctuation">:</span> <span class="token string">&#39;/home/git/blog-vue&#39;</span>                                                 <span class="token comment"># Remote file path - REQUIRED false - DEFAULT ~/</span>
          <span class="token key atrule">host</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span>secrets.HOST<span class="token punctuation">}</span><span class="token punctuation">}</span>                                      <span class="token comment"># Remote server address - REQUIRED true</span>
          <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span>secrets.PORT<span class="token punctuation">}</span><span class="token punctuation">}</span>                                      <span class="token comment"># Remote server port - REQUIRED false - DEFAULT 22</span>
          <span class="token key atrule">user</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span>secrets.USER<span class="token punctuation">}</span><span class="token punctuation">}</span>                                      <span class="token comment"># Remote server user - REQUIRED true</span>
          <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span>secrets.PASSWORD<span class="token punctuation">}</span><span class="token punctuation">}</span>                              <span class="token comment"># User password - REQUIRED at least one of &quot;password&quot; or &quot;key&quot; </span>
          <span class="token key atrule">pre_upload</span><span class="token punctuation">:</span> echo &quot;This will be executed before the upload<span class="token tag">!</span>&quot;  <span class="token comment"># Command to run via ssh before scp upload - REQUIRED false</span>
          <span class="token key atrule">post_upload</span><span class="token punctuation">:</span> echo &quot;This will be executed after the upload<span class="token tag">!</span>&quot;  <span class="token comment"># Command to run via ssh after scp upload - REQUIRED false</span>
          <span class="token key atrule">ssh_options</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>o StrictHostKeyChecking=no                     <span class="token comment"># A set of ssh_option separated by -o - REQUIRED false - DEFAULT -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null</span>
          <span class="token key atrule">scp_options</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>v                                              <span class="token comment"># Flags to use during scp - REQUIRED false - DEFAULT &#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这样进行最终部署，那么仅需要上传 <code>[dir]\\src</code> 即可完成文档的自动生成和部署，此时 <code>master</code> (或 <code>main</code>) 分支只含有编写的博客文档数据。</p>`,4);function h(y,_){const e=u("ExternalLinkIcon");return p(),l("div",null,[r,o(" more "),d,s("p",null,[n("其中的 "),k,n(" 为初始化所用的目录名称，如 "),v,n(" 等。随后参照"),s("a",m,[n("主题文档"),c(e)]),n("进行样式、信息和组件的配置即可。")]),b])}const E=t(i,[["render",h],["__file","Migration to vuepress.html.vue"]]);export{E as default};
