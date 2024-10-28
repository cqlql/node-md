import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a as e,e as a,o as t}from"./app-BVuN8Jn5.js";const l={};function h(n,i){return t(),e("div",null,i[0]||(i[0]=[a('<h2 id="查看安装状态" tabindex="-1"><a class="header-anchor" href="#查看安装状态"><span>查看安装状态</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="重启" tabindex="-1"><a class="header-anchor" href="#重启"><span>重启</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="进入-mysql" tabindex="-1"><a class="header-anchor" href="#进入-mysql"><span>进入 Mysql</span></a></h2><p>以进行用户管理或者 sql 操作</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="查看端口" tabindex="-1"><a class="header-anchor" href="#查看端口"><span>查看端口</span></a></h2><p>在 SQL 中执行</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">show </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">global</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> variables </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">like</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;port&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="查找-mysql-安装目录" tabindex="-1"><a class="header-anchor" href="#查找-mysql-安装目录"><span>查找 mysql 安装目录</span></a></h2><p>当前环境是 window 子系统，所以排除 /mnt 目录</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -path</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /mnt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -prune,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',13)]))}const k=s(l,[["render",h],["__file","mysql 命令.html.vue"]]),p=JSON.parse('{"path":"/MySql/mysql%20%E5%91%BD%E4%BB%A4.html","title":"","lang":"zh-CN","frontmatter":{"description":"查看安装状态 重启 进入 Mysql 以进行用户管理或者 sql 操作 查看端口 在 SQL 中执行 查找 mysql 安装目录 当前环境是 window 子系统，所以排除 /mnt 目录","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/MySql/mysql%20%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"查看安装状态 重启 进入 Mysql 以进行用户管理或者 sql 操作 查看端口 在 SQL 中执行 查找 mysql 安装目录 当前环境是 window 子系统，所以排除 /mnt 目录"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-09-13T15:52:40.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-13T15:52:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-09-13T15:52:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"查看安装状态","slug":"查看安装状态","link":"#查看安装状态","children":[]},{"level":2,"title":"重启","slug":"重启","link":"#重启","children":[]},{"level":2,"title":"进入 Mysql","slug":"进入-mysql","link":"#进入-mysql","children":[]},{"level":2,"title":"查看端口","slug":"查看端口","link":"#查看端口","children":[]},{"level":2,"title":"查找 mysql 安装目录","slug":"查找-mysql-安装目录","link":"#查找-mysql-安装目录","children":[]}],"git":{"createdTime":1661482898000,"updatedTime":1663084360000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":0.28,"words":83},"filePathRelative":"MySql/mysql 命令.md","localizedDate":"2022年8月26日","autoDesc":true,"excerpt":"<h2>查看安装状态</h2>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> status</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> mysql</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{k as comp,p as data};
