const a=JSON.parse(`{"key":"v-15e5abf9","path":"/%E6%96%87%E7%AB%A0/Boltzmann%20Generator.html","title":"Boltzmann Generator","lang":"zh-CN","frontmatter":{"title":"Boltzmann Generator","date":"2023-01-06T10:47:00.000Z","tag":["Machine Learning","Enhanced Sampling"],"category":["Machine Learning","Sampling"],"isOriginal":true,"description":"背景 Boltzmann 形式的分布 在广泛的条件下，统计力学所关心的微观状态 x\\\\mathbf{x}x 的平衡概率符合如下分布 x∼Cexp⁡(−u(x))(1) \\\\mathbf{x}\\\\sim C \\\\exp (-u(\\\\mathbf{x}))\\\\tag{{1}} x∼Cexp(−u(x))(1) 最为著名的例子就是 Boltzmann 分布。(1) 中的标量能量项 u(x)u(\\\\mathbf{x})u(x) 包含系统的势能、温度和可选的其他热力学量。","head":[["meta",{"property":"og:url","content":"https://blog.youmans.top/%E6%96%87%E7%AB%A0/Boltzmann%20Generator.html"}],["meta",{"property":"og:site_name","content":"Youmans' Blog"}],["meta",{"property":"og:title","content":"Boltzmann Generator"}],["meta",{"property":"og:description","content":"背景 Boltzmann 形式的分布 在广泛的条件下，统计力学所关心的微观状态 x\\\\mathbf{x}x 的平衡概率符合如下分布 x∼Cexp⁡(−u(x))(1) \\\\mathbf{x}\\\\sim C \\\\exp (-u(\\\\mathbf{x}))\\\\tag{{1}} x∼Cexp(−u(x))(1) 最为著名的例子就是 Boltzmann 分布。(1) 中的标量能量项 u(x)u(\\\\mathbf{x})u(x) 包含系统的势能、温度和可选的其他热力学量。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-21T16:08:35.000Z"}],["meta",{"property":"article:author","content":"Youmans Yu"}],["meta",{"property":"article:tag","content":"Machine Learning"}],["meta",{"property":"article:tag","content":"Enhanced Sampling"}],["meta",{"property":"article:published_time","content":"2023-01-06T10:47:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-21T16:08:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Boltzmann Generator\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-06T10:47:00.000Z\\",\\"dateModified\\":\\"2023-06-21T16:08:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Youmans Yu\\",\\"url\\":\\"https://blog.youmans.top\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[{"level":3,"title":"Boltzmann 形式的分布","slug":"boltzmann-形式的分布","link":"#boltzmann-形式的分布","children":[]},{"level":3,"title":"基于轨迹的方法: MCMC/MD","slug":"基于轨迹的方法-mcmc-md","link":"#基于轨迹的方法-mcmc-md","children":[]},{"level":3,"title":"基于 CV 的增强抽样","slug":"基于-cv-的增强抽样","link":"#基于-cv-的增强抽样","children":[]}]},{"level":2,"title":"Boltzmann Generator","slug":"boltzmann-generator","link":"#boltzmann-generator","children":[{"level":3,"title":"概览","slug":"概览","link":"#概览","children":[]},{"level":3,"title":"分布的变换","slug":"分布的变换","link":"#分布的变换","children":[]},{"level":3,"title":"模型的训练","slug":"模型的训练","link":"#模型的训练","children":[]}]},{"level":2,"title":"重要细节","slug":"重要细节","link":"#重要细节","children":[{"level":3,"title":"可逆的可训练层: RealNVP","slug":"可逆的可训练层-realnvp","link":"#可逆的可训练层-realnvp","children":[]},{"level":3,"title":"KL 散度的推导","slug":"kl-散度的推导","link":"#kl-散度的推导","children":[]}]}],"git":{"createdTime":1687363715000,"updatedTime":1687363715000,"contributors":[{"name":"Youmans Yu","email":"xiaoxuan_yu@pku.edu.cn","commits":1}]},"readingTime":{"minutes":8.18,"words":2455},"filePathRelative":"文章/Boltzmann Generator.md","localizedDate":"2023年1月6日","excerpt":"<h2> 背景</h2>\\n<h3> Boltzmann 形式的分布</h3>\\n<p>在广泛的条件下，统计力学所关心的微观状态 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi mathvariant=\\"bold\\">x</mi></mrow><annotation encoding=\\"application/x-tex\\">\\\\mathbf{x}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4444em;\\"></span><span class=\\"mord mathbf\\">x</span></span></span></span> 的平衡概率符合如下分布</p>\\n<p class=\\"katex-block\\"><span class=\\"katex-display\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\" display=\\"block\\"><semantics><mtable width=\\"100%\\"><mtr><mtd width=\\"50%\\"></mtd><mtd><mrow><mi mathvariant=\\"bold\\">x</mi><mo>∼</mo><mi>C</mi><mi>exp</mi><mo>⁡</mo><mo stretchy=\\"false\\">(</mo><mo>−</mo><mi>u</mi><mo stretchy=\\"false\\">(</mo><mi mathvariant=\\"bold\\">x</mi><mo stretchy=\\"false\\">)</mo><mo stretchy=\\"false\\">)</mo></mrow></mtd><mtd width=\\"50%\\"></mtd><mtd><mtext>(1)</mtext></mtd></mtr></mtable><annotation encoding=\\"application/x-tex\\">\\n\\\\mathbf{x}\\\\sim C \\\\exp (-u(\\\\mathbf{x}))\\\\tag{{1}}\\n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.4444em;\\"></span><span class=\\"mord mathbf\\">x</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">∼</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07153em;\\">C</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mop\\">exp</span><span class=\\"mopen\\">(</span><span class=\\"mord\\">−</span><span class=\\"mord mathnormal\\">u</span><span class=\\"mopen\\">(</span><span class=\\"mord mathbf\\">x</span><span class=\\"mclose\\">))</span></span><span class=\\"tag\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord text\\"><span class=\\"mord\\">(</span><span class=\\"mord\\"><span class=\\"mord\\"><span class=\\"mord\\">1</span></span></span><span class=\\"mord\\">)</span></span></span></span></span></span></p>\\n<p>最为著名的例子就是 Boltzmann 分布。(1) 中的标量能量项 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>u</mi><mo stretchy=\\"false\\">(</mo><mi mathvariant=\\"bold\\">x</mi><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">u(\\\\mathbf{x})</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\">u</span><span class=\\"mopen\\">(</span><span class=\\"mord mathbf\\">x</span><span class=\\"mclose\\">)</span></span></span></span> 包含系统的势能、温度和可选的其他热力学量。</p>\\n","autoDesc":true}`);export{a as data};