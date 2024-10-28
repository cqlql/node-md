import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a,e,o as l}from"./app-BVuN8Jn5.js";const n={};function h(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h2 id="登录并进入-mysql-以进行-sql-操作" tabindex="-1"><a class="header-anchor" href="#登录并进入-mysql-以进行-sql-操作"><span>登录并进入 mysql，以进行 sql 操作</span></a></h2><p>语法：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u(username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -p[密码]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例子：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 稍后输入密码，密码不会明文显示，推荐方式</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -uroot</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 直接带明文密码，不安全</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -uroot</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p123123</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改用户-host" tabindex="-1"><a class="header-anchor" href="#修改用户-host"><span>修改用户 host</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">use</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mysql;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> user </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> host </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;%&#39;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> user </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;root&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看所有用户" tabindex="-1"><a class="header-anchor" href="#查看所有用户"><span>查看所有用户</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> user,host </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="新建用户" tabindex="-1"><a class="header-anchor" href="#新建用户"><span>新建用户</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">create</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &#39;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">joly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;%&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> identified </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;新密码&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- \`identified by\` 不带则不给密码</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- \`%\` 表示所有 host 都能访问，可以指定为 \`localhost\` 只能本地访问</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户"><span>删除用户</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>DROP USER &#39;jack&#39;@&#39;localhost&#39;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="修改密码" tabindex="-1"><a class="header-anchor" href="#修改密码"><span>修改密码</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> user </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> authentication_string</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;新密码&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> user</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;root&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">flush privileges; # 更新改变。否则可能要重启mysql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># 上面修改失败时，则使用下面方法</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">use</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mysql；</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">alter</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;root&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;localhost&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> identified </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mysql_native_password </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;新密码&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">flush privileges;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限"><span>权限</span></a></h2><h3 id="查看用户权限" tabindex="-1"><a class="header-anchor" href="#查看用户权限"><span>查看用户权限</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">SHOW GRANTS </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FOR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;joly&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;%&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="分配权限" tabindex="-1"><a class="header-anchor" href="#分配权限"><span>分配权限</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 给 joly 分配所有权限</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">grant</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> all </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> *.* </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;joly&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;%&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 给 joly 分配 db_user 数据库的所有权限</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">grant</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> all </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> db_user.* </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;joly&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;%&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回收权限" tabindex="-1"><a class="header-anchor" href="#回收权限"><span>回收权限</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">revoke</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> all</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> on</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;%&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> user </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">grant</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> all </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> temp.* </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;%&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><p><a href="http://c.biancheng.net/mysql/100" target="_blank" rel="noopener noreferrer">MySQL 用户管理</a></p><p><a href="https://www.php.cn/mysql-tutorials-460350.html" target="_blank" rel="noopener noreferrer">mysql 怎么给用户加权限-mysql 教程-PHP 中文网</a></p><p><a href="https://www.jb51.net/article/203517.htm" target="_blank" rel="noopener noreferrer">忘记密码，修改 root 密码</a></p><p><a href="https://www.cnblogs.com/liuhaidon/archive/2019/10/31/11772879.html" target="_blank" rel="noopener noreferrer">Mysql—修改用户密码（重置密码）</a></p>`,29)]))}const d=i(n,[["render",h],["__file","00_用户管理.html.vue"]]),p=JSON.parse('{"path":"/MySql/sql%20%E6%93%8D%E4%BD%9C/00_%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86.html","title":"用户管理","lang":"zh-CN","frontmatter":{"title":"用户管理","description":"登录并进入 mysql，以进行 sql 操作 语法： 例子： 修改用户 host 查看所有用户 新建用户 删除用户 修改密码 权限 查看用户权限 分配权限 回收权限 常用命令 参考文档 MySQL 用户管理 mysql 怎么给用户加权限-mysql 教程-PHP 中文网 忘记密码，修改 root 密码 Mysql—修改用户密码（重置密码）","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/MySql/sql%20%E6%93%8D%E4%BD%9C/00_%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:title","content":"用户管理"}],["meta",{"property":"og:description","content":"登录并进入 mysql，以进行 sql 操作 语法： 例子： 修改用户 host 查看所有用户 新建用户 删除用户 修改密码 权限 查看用户权限 分配权限 回收权限 常用命令 参考文档 MySQL 用户管理 mysql 怎么给用户加权限-mysql 教程-PHP 中文网 忘记密码，修改 root 密码 Mysql—修改用户密码（重置密码）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-13T03:58:22.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-13T03:58:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用户管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-13T03:58:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"登录并进入 mysql，以进行 sql 操作","slug":"登录并进入-mysql-以进行-sql-操作","link":"#登录并进入-mysql-以进行-sql-操作","children":[]},{"level":2,"title":"修改用户 host","slug":"修改用户-host","link":"#修改用户-host","children":[]},{"level":2,"title":"查看所有用户","slug":"查看所有用户","link":"#查看所有用户","children":[]},{"level":2,"title":"新建用户","slug":"新建用户","link":"#新建用户","children":[]},{"level":2,"title":"删除用户","slug":"删除用户","link":"#删除用户","children":[]},{"level":2,"title":"修改密码","slug":"修改密码","link":"#修改密码","children":[]},{"level":2,"title":"权限","slug":"权限","link":"#权限","children":[{"level":3,"title":"查看用户权限","slug":"查看用户权限","link":"#查看用户权限","children":[]},{"level":3,"title":"分配权限","slug":"分配权限","link":"#分配权限","children":[]},{"level":3,"title":"回收权限","slug":"回收权限","link":"#回收权限","children":[]}]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1652927496000,"updatedTime":1670903902000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":2}]},"readingTime":{"minutes":1.13,"words":340},"filePathRelative":"MySql/sql 操作/00_用户管理.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<h2>登录并进入 mysql，以进行 sql 操作</h2>\\n<p>语法：</p>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">mysql</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -u(username</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">) -p[密码]</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{d as comp,p as data};
