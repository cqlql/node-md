import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a as t,e,o as a}from"./app-BVuN8Jn5.js";const n={};function r(l,s){return a(),t("div",null,s[0]||(s[0]=[e(`<p>源位置：<code>/etc/apt/sources.list</code>, 更换前备份。备份命令：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apt/sources.list</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apt/sources.list.bak</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>国内源镜像源地址</strong></p><p>阿里云： <a href="https://mirrors.aliyun.com" target="_blank" rel="noopener noreferrer">https://mirrors.aliyun.com</a></p><p>网易源： <a href="http://mirrors.163.com" target="_blank" rel="noopener noreferrer">http://mirrors.163.com</a></p><p>清华： <a href="https://mirrors.tuna.tsinghua.edu.cn" target="_blank" rel="noopener noreferrer">https://mirrors.tuna.tsinghua.edu.cn</a></p><p>中科大：(这里我使用) <a href="http://mirrors.ustc.edu.cn" target="_blank" rel="noopener noreferrer">http://mirrors.ustc.edu.cn</a></p><p>ping 以上服务器，选择延时最低的。(ping 的时候去掉 <code>http://</code> )</p><p><strong>检查源</strong></p><p>检查以上源地址，对比原始 <code>/etc/apt/sources.list</code> ，看有没有对应的目录。比如 <code>sources.list</code> 中的 <code>deb http://cn.archive.ubuntu.com/ubuntu/ focal-updates main restricted</code> 行，对应的清华源地址是 <code>https://mirrors.tuna.tsinghua.edu.cn/ubuntu/dists/focal-updates</code>。一般只要检查 dists 中有没对应的 focal 即可(我这里的 ubuntu 是 focal)</p><p><strong>换源</strong></p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 更换为中科大镜像源 #####</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 这里我使用中科大，我这边延时较低，而且很稳定</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 替换 cn.archive.ubuntu.com</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;s/archive.ubuntu.com/mirrors.ustc.edu.cn/g&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sources.list</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 替换 security.ubuntu.com</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;s/security.ubuntu.com/mirrors.ustc.edu.cn/g&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sources.list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 或者更换为清华源 #####</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;s/http:\\/\\/archive.ubuntu.com/https:\\/\\/mirrors.tuna.tsinghua.edu.cn/g&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sources.list</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;s/http:\\/\\/security.ubuntu.com/https:\\/\\/mirrors.tuna.tsinghua.edu.cn/g&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sources.list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## ！最后执行命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><p><a href="https://www.jianshu.com/p/5400722c369c" target="_blank" rel="noopener noreferrer">Ubuntu | 对 sources.list 的总结</a></p><p><a href="https://blog.csdn.net/u012308586/article/details/102953882" target="_blank" rel="noopener noreferrer">ubuntu16.04 和 18.04 更换国内源</a></p>`,15)]))}const c=i(n,[["render",r],["__file","更换apt源.html.vue"]]),o=JSON.parse('{"path":"/Linux/%E6%9B%B4%E6%8D%A2apt%E6%BA%90.html","title":"更换apt源","lang":"zh-CN","frontmatter":{"title":"更换apt源","description":"源位置：/etc/apt/sources.list, 更换前备份。备份命令： 国内源镜像源地址 阿里云： https://mirrors.aliyun.com 网易源： http://mirrors.163.com 清华： https://mirrors.tuna.tsinghua.edu.cn 中科大：(这里我使用) http://mirrors.u...","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/Linux/%E6%9B%B4%E6%8D%A2apt%E6%BA%90.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:title","content":"更换apt源"}],["meta",{"property":"og:description","content":"源位置：/etc/apt/sources.list, 更换前备份。备份命令： 国内源镜像源地址 阿里云： https://mirrors.aliyun.com 网易源： http://mirrors.163.com 清华： https://mirrors.tuna.tsinghua.edu.cn 中科大：(这里我使用) http://mirrors.u..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-13T13:34:38.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-13T13:34:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"更换apt源\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-06-13T13:34:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1652927496000,"updatedTime":1655127278000,"contributors":[{"name":"cqlql","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":0.84,"words":251},"filePathRelative":"Linux/更换apt源.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<p>源位置：<code>/etc/apt/sources.list</code>, 更换前备份。备份命令：</p>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">cp</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> /etc/apt/sources.list</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> /etc/apt/sources.list.bak</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{c as comp,o as data};
