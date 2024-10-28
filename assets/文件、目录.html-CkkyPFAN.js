import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a as e,e as a,o as l}from"./app-BVuN8Jn5.js";const n={};function t(h,i){return l(),e("div",null,i[0]||(i[0]=[a(`<h2 id="文件夹-创建" tabindex="-1"><a class="header-anchor" href="#文件夹-创建"><span>文件夹 - 创建</span></a></h2><p>在当前目录创建一个 test 文件</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="当前所在目录" tabindex="-1"><a class="header-anchor" href="#当前所在目录"><span>当前所在目录</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pwd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="查看所有目录文件" tabindex="-1"><a class="header-anchor" href="#查看所有目录文件"><span>查看所有目录文件</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ls -a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h2><p>支持文件和文件夹</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -rf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/www/nodercms</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -rf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/www/nodercms-old</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -rf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/www/nodercms.tar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-r 就是向下递归，不管有多少级目录，一并删除<br> -f 就是直接强行删除，不作任何提示的意思</p><h2 id="ls-文件列表" tabindex="-1"><a class="header-anchor" href="#ls-文件列表"><span>ls - 文件列表</span></a></h2><p><code>ls</code> 是 list 英文缩写</p><p>命令格式：<code>ls [OPTION]... [FILE]</code></p><p>输入 <code>ls --help</code> 查看更多信息</p><h2 id="cp-复制" tabindex="-1"><a class="header-anchor" href="#cp-复制"><span>cp - 复制</span></a></h2><p>命令 <code>cp</code>，copy 的缩写</p><p>命令格式：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 复制文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [OPTION]... [-T] SOURCE DEST</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 多文件到目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [OPTION]... SOURCE... DIRECTORY</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 多文件到目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [OPTION]... -t DIRECTORY SOURCE...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子，将 <code>/home/jojo</code> 下的 publish 目录及所有子目录和文件复制到当前工作目录：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/jojo/publish</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>更多信息输入 <code>ls --help</code> 查看</p><h2 id="mv-移动-重命名" tabindex="-1"><a class="header-anchor" href="#mv-移动-重命名"><span>mv - 移动&amp;重命名</span></a></h2><p>move 的缩写。移动或重命名包括目录和文件</p><p>例子：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 将当前工作目录的 nginx-1.14.2 命名为 nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx-1.14.2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 移动并重命名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/jo/node-v12.18.0-linux-x64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/nodejs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多信息输入 <code>mv --help</code> 查看</p><h2 id="rm-删除" tabindex="-1"><a class="header-anchor" href="#rm-删除"><span>rm - 删除</span></a></h2><p>remove 的缩写。删除目录或文件</p><p>语法：           rm [-dfirv][--help][--version][文件或目录...]<br> 补充说明：     执行 rm 指令可删除文件或目录，如欲删除目录必须加上参数”-r”，否则预设仅会删除文件。 <br> 参数：<br>                      -d 或–directory  　直接把欲删除的目录的硬连接数据删成 0，删除该目录。 <br>                      -f 或–force  　强制删除文件或目录。 <br>                      -i 或–interactive  　删除既有文件或目录之前先询问用户。 <br>                      -r 或-R 或–recursive  　递归处理，将指定目录下的所有文件及子目录一并处理。 <br>                      -v 或–verbose  　显示指令执行过程。</p><p><strong>例如：</strong></p><p>删除文件夹：</p><p>rm -rf code</p><p>将会删除 code 目录以及其下所有文件、文件夹。（注意一定要加 -r，不然很麻烦）</p><p>删除文件：</p><p>rm -f  001.cpp</p><h2 id="cd-切换工作目录" tabindex="-1"><a class="header-anchor" href="#cd-切换工作目录"><span>cd - 切换工作目录</span></a></h2><p>change directory 的缩写</p>`,38)]))}const p=s(n,[["render",t],["__file","文件、目录.html.vue"]]),c=JSON.parse('{"path":"/old__/linux/%E6%96%87%E4%BB%B6%E3%80%81%E7%9B%AE%E5%BD%95.html","title":"","lang":"zh-CN","frontmatter":{"description":"文件夹 - 创建 在当前目录创建一个 test 文件 当前所在目录 查看所有目录文件 删除 支持文件和文件夹 -r 就是向下递归，不管有多少级目录，一并删除 -f 就是直接强行删除，不作任何提示的意思 ls - 文件列表 ls 是 list 英文缩写 命令格式：ls [OPTION]... [FILE] 输入 ls --help 查看更多信息 cp -...","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/old__/linux/%E6%96%87%E4%BB%B6%E3%80%81%E7%9B%AE%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"文件夹 - 创建 在当前目录创建一个 test 文件 当前所在目录 查看所有目录文件 删除 支持文件和文件夹 -r 就是向下递归，不管有多少级目录，一并删除 -f 就是直接强行删除，不作任何提示的意思 ls - 文件列表 ls 是 list 英文缩写 命令格式：ls [OPTION]... [FILE] 输入 ls --help 查看更多信息 cp -..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T02:50:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T02:50:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T02:50:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"文件夹 - 创建","slug":"文件夹-创建","link":"#文件夹-创建","children":[]},{"level":2,"title":"当前所在目录","slug":"当前所在目录","link":"#当前所在目录","children":[]},{"level":2,"title":"查看所有目录文件","slug":"查看所有目录文件","link":"#查看所有目录文件","children":[]},{"level":2,"title":"删除","slug":"删除","link":"#删除","children":[]},{"level":2,"title":"ls - 文件列表","slug":"ls-文件列表","link":"#ls-文件列表","children":[]},{"level":2,"title":"cp - 复制","slug":"cp-复制","link":"#cp-复制","children":[]},{"level":2,"title":"mv - 移动&重命名","slug":"mv-移动-重命名","link":"#mv-移动-重命名","children":[]},{"level":2,"title":"rm - 删除","slug":"rm-删除","link":"#rm-删除","children":[]},{"level":2,"title":"cd - 切换工作目录","slug":"cd-切换工作目录","link":"#cd-切换工作目录","children":[]}],"git":{"createdTime":1652927496000,"updatedTime":1730083825000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":1.68,"words":505},"filePathRelative":"__old__/linux/文件、目录.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<h2>文件夹 - 创建</h2>\\n<p>在当前目录创建一个 test 文件</p>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">mkdir</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> test</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{p as comp,c as data};
