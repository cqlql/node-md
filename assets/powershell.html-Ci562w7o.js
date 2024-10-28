import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a as e,e as a,o as l}from"./app-BVuN8Jn5.js";const n={};function t(h,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h2><p><a href="https://www.yiibai.com/powershell/powershell-start-process.html" target="_blank" rel="noopener noreferrer">https://www.yiibai.com/powershell/powershell-start-process.html</a></p><h2 id="后台运行" tabindex="-1"><a class="header-anchor" href="#后台运行"><span>后台运行</span></a></h2><h3 id="方式-1-关掉-pwsh-会终止" tabindex="-1"><a class="header-anchor" href="#方式-1-关掉-pwsh-会终止"><span>方式 1：关掉 pwsh 会终止</span></a></h3><p>有管理</p><p>但是关掉 PowerShell 窗口还是会终止运行</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Start-Job</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ScriptBlock</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./app.js</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> }</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node-server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Get-Job</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Stop-Job</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Remove-Job</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式-2-成功" tabindex="-1"><a class="header-anchor" href="#方式-2-成功"><span>方式 2：成功</span></a></h3><p>完全没有界面的运行</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Start-Process</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -WindowStyle</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Hidden</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -FilePath</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./app.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 返回进程Id，方便关闭</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进程对象详细输出到 process.log 文件下</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> D:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\_</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">work</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\l</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mm-admin-ui</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">rojects</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pidocs</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ever</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&amp;&amp;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pwsh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Start-Process -WindowStyle Hidden -FilePath node ./app.js -PassThru -Wait -RedirectStandardOutput out.log|out-file -filepath ./process.log&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不自动退出" tabindex="-1"><a class="header-anchor" href="#不自动退出"><span>不自动退出</span></a></h2><p>用 cmd(或者其他命令行程序)运行 pwsh 时，运行完不自动退出</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pwsh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -noexit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,13)]))}const d=i(n,[["render",t],["__file","powershell.html.vue"]]),k=JSON.parse('{"path":"/old__/powershell.html","title":"","lang":"zh-CN","frontmatter":{"description":"相关文档 https://www.yiibai.com/powershell/powershell-start-process.html 后台运行 方式 1：关掉 pwsh 会终止 有管理 但是关掉 PowerShell 窗口还是会终止运行 方式 2：成功 完全没有界面的运行 不自动退出 用 cmd(或者其他命令行程序)运行 pwsh 时，运行完不自动退出","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/old__/powershell.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"相关文档 https://www.yiibai.com/powershell/powershell-start-process.html 后台运行 方式 1：关掉 pwsh 会终止 有管理 但是关掉 PowerShell 窗口还是会终止运行 方式 2：成功 完全没有界面的运行 不自动退出 用 cmd(或者其他命令行程序)运行 pwsh 时，运行完不自动退出"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T02:50:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T02:50:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T02:50:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"相关文档","slug":"相关文档","link":"#相关文档","children":[]},{"level":2,"title":"后台运行","slug":"后台运行","link":"#后台运行","children":[{"level":3,"title":"方式 1：关掉 pwsh 会终止","slug":"方式-1-关掉-pwsh-会终止","link":"#方式-1-关掉-pwsh-会终止","children":[]},{"level":3,"title":"方式 2：成功","slug":"方式-2-成功","link":"#方式-2-成功","children":[]}]},{"level":2,"title":"不自动退出","slug":"不自动退出","link":"#不自动退出","children":[]}],"git":{"createdTime":1652927496000,"updatedTime":1730083825000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":0.53,"words":160},"filePathRelative":"__old__/powershell.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<h2>相关文档</h2>\\n<p><a href=\\"https://www.yiibai.com/powershell/powershell-start-process.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.yiibai.com/powershell/powershell-start-process.html</a></p>\\n<h2>后台运行</h2>\\n<h3>方式 1：关掉 pwsh 会终止</h3>\\n<p>有管理</p>\\n<p>但是关掉 PowerShell 窗口还是会终止运行</p>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Start-Job</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -ScriptBlock</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> {</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> node</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> ./app.js</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> }</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -Name</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> node-server</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Get-Job</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Stop-Job</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -id</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 1</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Remove-Job</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -id</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 1</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{d as comp,k as data};