import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a,e as n,o as t}from"./app-BVuN8Jn5.js";const e={};function l(h,i){return t(),a("div",null,i[0]||(i[0]=[n(`<p><a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/" target="_blank" rel="noopener noreferrer">ubuntu 部署</a></p><p>关于 mongod 商用是否收费：企业版收费，社区版随便用，不收费</p><p><a href="https://docs.mongodb.com/manual/reference/program/mongod/index.html" target="_blank" rel="noopener noreferrer">mongod 命令</a></p><p>mongod 用来启动服务</p><p>mongo 用来输入脚本操作数据库</p><p>1.运行“locate mongo”命令查看系统默认把mongo装到了哪里</p><p><a href="https://www.cnblogs.com/caicaizi/p/6160884.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/caicaizi/p/6160884.html</a></p><p><a href="https://docs.mongodb.com/manual/reference/configuration-options/" target="_blank" rel="noopener noreferrer">配置文件文档</a></p><p><a href="https://docs.mongodb.com/manual/tutorial/create-users/" target="_blank" rel="noopener noreferrer">创建用户</a></p><p><a href="https://docs.mongodb.com/manual/reference/built-in-roles" target="_blank" rel="noopener noreferrer">用户角色</a></p><p><a href="https://www.cnblogs.com/out-of-memory/p/6810411.html" target="_blank" rel="noopener noreferrer">MongoDB用户角色配置</a></p><p>修改mongod.conf文件</p><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>security:</span></span>
<span class="line"><span>  authorization: enabled // 启用授权</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建用户</p><p>超级用户<br> db.createUser({ user: &#39;root&#39;, pwd: &#39;12345678&#39;, roles: [{ role: &#39;root&#39;, db: &#39;admin&#39; }] })</p><p>admin 用户<br> db.createUser(<br> {<br> user: &quot;admin&quot;,<br> pwd: &quot;12345678&quot;,<br> roles: [{role: &quot;userAdminAnyDatabase&quot;, db: &quot;admin&quot;}]<br> }<br> )</p><p>读写用户<br> db.createUser(<br> {<br> user: &quot;test&quot;,<br> pwd: &quot;12345678&quot;,<br> roles: [<br> { role: &quot;readWrite&quot;, db: &quot;test&quot; }<br> ]<br> }<br> )<br> 只读用户<br> db.createUser(<br> {<br> user: &quot;test2&quot;,<br> pwd: &quot;12345678&quot;,<br> roles: [<br> { role: &quot;read&quot;, db: &quot;test&quot; }<br> ]<br> }<br> )</p><p>修改权限<br> db.grantRolesToUser(<br> &quot;admin&quot;,<br> [{role:&quot;readWrite&quot;, db:&quot;test&quot;}]<br> )</p><p>登录：db.auth(&quot;admin&quot;,&quot;12345678&quot;)<br> db.auth(&quot;root&quot;,&quot;12345678&quot;)</p><p>新建数据库<br> use test<br> 新建usr表，并添加一条数据<br> db.usr.insert({&#39;name&#39;:&#39;tompig&#39;});</p><p>删除用户<br> db.dropUser(&#39;nodercms&#39;)</p><p>显示所有用户<br> show users</p><h2 id="可视化管理工具" tabindex="-1"><a class="header-anchor" href="#可视化管理工具"><span>可视化管理工具</span></a></h2><p>目前使用：<a href="https://robomongo.org" target="_blank" rel="noopener noreferrer">Robomongo</a></p><p>其中，Robo 3T 免费, Studio 3T 收费。附上一个<code>studio3t 续天.bat</code></p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">@echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> off</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ECHO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 重置Studio</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 3T的使用日期......</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">FOR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;tokens=1,2,* &quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %%i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> IN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;reg query &quot;HKEY_CURRENT_USER\\Software\\JavaSoft\\Prefs\\3t\\mongochef\\enterprise&quot; ^| find /V &quot;installation&quot; ^| find /V &quot;HKEY&quot;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) DO ECHO yes | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">reg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;HKEY_CURRENT_USER\\Software\\JavaSoft\\Prefs\\3t\\mongochef\\enterprise&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %%i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> REG_SZ</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ECHO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 重置完成,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 按任意键退出......</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pause</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nul</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">exit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户角色配置" tabindex="-1"><a class="header-anchor" href="#用户角色配置"><span>用户角色配置</span></a></h2><p>创建普通用户步骤</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">use</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> admin</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">db</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createUser</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">user</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;admin&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">pwd</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;12345678&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">roles</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [{ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">role</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;admin&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">db</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;admin&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> }] }) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 超级用户</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 注意，必须要先 user，再 createUser，才能使用此用户登录此数据库</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">use</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> test</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">db</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createUser</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">user</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">pwd</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;3nk6U7H9o3Ct&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">roles</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [{ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">role</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;readWrite&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">db</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> }] })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决"><span>问题解决</span></a></h2><h3 id="远程连接被拒绝" tabindex="-1"><a class="header-anchor" href="#远程连接被拒绝"><span>远程连接被拒绝</span></a></h3><p>将 mongodb.conf 中 <code>bind_ip=127.0.0.1</code> 的那一行，修改为 <code>bind_ip=0.0.0.0</code></p><p>如果不需要远程连接，建议改回去，更安全</p><p>mongod.conf 默认位置：<code>/etc/mongod.conf</code></p><p>可通过进程看到</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看 mongo 进程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -aux</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mongo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="node-js-driver" tabindex="-1"><a class="header-anchor" href="#node-js-driver"><span>Node.JS Driver</span></a></h2><p><a href="http://mongodb.github.io/node-mongodb-native/" target="_blank" rel="noopener noreferrer">mongodb</a>，这个是基础，官方维护</p><p><a href="https://mongoosejs.com/" target="_blank" rel="noopener noreferrer">mongoose</a>，基于 mongodb 封装，拥有对象模型，一般用这个</p><h2 id="nodejs-mongoose-使用" tabindex="-1"><a class="header-anchor" href="#nodejs-mongoose-使用"><span>nodejs mongoose 使用</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> mongoose</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;mongoose&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">mongoose</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">connect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;mongodb://localhost:27017/wcard&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">useNewUrlParser</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> db</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> mongoose</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">connection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">db</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;error&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">error</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bind</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;connection error:&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">db</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">once</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;open&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // we&#39;re connected!</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;mongobd 连接成功!&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> kittySchema</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> mongoose</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Schema</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  item</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  qty</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> Number</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// var Kitten = mongoose.model(&#39;Kitten&#39;, kittySchema);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// var silence = new Kitten({ name: &#39;Silence&#39; });</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// console.log(silence.name); // &#39;Silence&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// NOTE: methods must be added to the schema before compiling it with mongoose.model()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// kittySchema.methods.speak = function () {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//   var greeting = this.name</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//     ? &quot;Meow name is &quot; + this.name</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//     : &quot;I don&#39;t have a name&quot;;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//   console.log(greeting);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> Kitten</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> mongoose</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;adoniswinner&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">kittySchema</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;adoniswinner&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> fluffy</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Kitten</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">item</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;fluffy&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> });</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// // fluffy.speak(); // &quot;Meow name is fluffy&quot;  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">fluffy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">save</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">fluffy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">error</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // fluffy.speak();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// var Person = mongoose.model(&#39;Person&#39;, yourSchema);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// find each person with a last name matching &#39;Ghost&#39;, selecting the \`name\` and \`occupation\` fields</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Kitten</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({}, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> handleError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // Prints &quot;Space Ghost is a talk show host&quot;.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;%s %s is a %s.&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">qty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">qty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41)]))}const r=s(e,[["render",l],["__file","MongoDB.html.vue"]]),d=JSON.parse('{"path":"/old__/%E6%95%B0%E6%8D%AE%E5%BA%93/MongoDB.html","title":"","lang":"zh-CN","frontmatter":{"description":"ubuntu 部署 关于 mongod 商用是否收费：企业版收费，社区版随便用，不收费 mongod 命令 mongod 用来启动服务 mongo 用来输入脚本操作数据库 1.运行“locate mongo”命令查看系统默认把mongo装到了哪里 https://www.cnblogs.com/caicaizi/p/6160884.html 配置文件文...","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/old__/%E6%95%B0%E6%8D%AE%E5%BA%93/MongoDB.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"ubuntu 部署 关于 mongod 商用是否收费：企业版收费，社区版随便用，不收费 mongod 命令 mongod 用来启动服务 mongo 用来输入脚本操作数据库 1.运行“locate mongo”命令查看系统默认把mongo装到了哪里 https://www.cnblogs.com/caicaizi/p/6160884.html 配置文件文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T02:50:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T02:50:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T02:50:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"可视化管理工具","slug":"可视化管理工具","link":"#可视化管理工具","children":[]},{"level":2,"title":"用户角色配置","slug":"用户角色配置","link":"#用户角色配置","children":[]},{"level":2,"title":"问题解决","slug":"问题解决","link":"#问题解决","children":[{"level":3,"title":"远程连接被拒绝","slug":"远程连接被拒绝","link":"#远程连接被拒绝","children":[]}]},{"level":2,"title":"Node.JS Driver","slug":"node-js-driver","link":"#node-js-driver","children":[]},{"level":2,"title":"nodejs mongoose 使用","slug":"nodejs-mongoose-使用","link":"#nodejs-mongoose-使用","children":[]}],"git":{"createdTime":1652927496000,"updatedTime":1730083825000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":2.29,"words":688},"filePathRelative":"__old__/数据库/MongoDB.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<p><a href=\\"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ubuntu 部署</a></p>\\n<p>关于 mongod 商用是否收费：企业版收费，社区版随便用，不收费</p>\\n<p><a href=\\"https://docs.mongodb.com/manual/reference/program/mongod/index.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">mongod 命令</a></p>"}');export{r as comp,d as data};
