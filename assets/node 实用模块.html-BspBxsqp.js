import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a,e,o as n}from"./app-CFwNXmjV.js";const l={};function h(t,i){return n(),a("div",null,i[0]||(i[0]=[e(`<ul><li><a href="#node-portfinder-%E8%87%AA%E5%8A%A8%E8%8E%B7%E5%8F%96%E5%8F%AF%E7%94%A8%E7%AB%AF%E5%8F%A3">node-portfinder 自动获取可用端口</a></li><li><a href="#%E8%8E%B7%E5%8F%96%E6%9C%AC%E6%9C%BA-ip-%E5%9C%B0%E5%9D%80">获取本机 ip 地址</a><ul><li><a href="#1-node-ip">1. node-ip</a></li><li><a href="#2-address">2. address</a></li><li><a href="#3-%E8%87%AA%E5%B7%B1%E5%AE%9E%E7%8E%B0">3. 自己实现</a></li></ul></li><li><a href="#cli-%E5%8F%82%E6%95%B0%E8%8E%B7%E5%8F%96">cli 参数获取</a></li><li><a href="#%E7%BB%88%E7%AB%AF%E7%9B%B8%E5%85%B3">终端相关</a><ul><li><a href="#%E5%8A%A0%E8%BD%BD%E6%8C%87%E7%A4%BA%E5%9B%BE%E6%A0%87%E5%8A%A8%E7%94%BB">加载指示图标动画</a></li><li><a href="#%E8%BE%93%E5%87%BA%E6%96%87%E6%9C%AC%E6%A0%B7%E5%BC%8F%E9%A2%9C%E8%89%B2%E6%8E%A7%E5%88%B6">输出文本样式颜色控制</a></li></ul></li><li><a href="#node-notifier">node-notifier</a></li><li><a href="#opn-%E6%89%93%E5%BC%80%E5%85%B6%E4%BB%96%E7%A8%8B%E5%BA%8F">opn 打开其他程序</a></li><li><a href="#chokidar">chokidar</a></li><li><a href="#nodemon">nodemon</a></li><li><a href="#%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95">日志记录</a></li><li><a href="#nvm">nvm</a></li></ul><h2 id="node-portfinder-自动获取可用端口" tabindex="-1"><a class="header-anchor" href="#node-portfinder-自动获取可用端口"><span>node-portfinder 自动获取可用端口</span></a></h2><p><a href="https://github.com/indexzero/node-portfinder" target="_blank" rel="noopener noreferrer">node-portfinder</a></p><h2 id="获取本机-ip-地址" tabindex="-1"><a class="header-anchor" href="#获取本机-ip-地址"><span>获取本机 ip 地址</span></a></h2><p>找到两个模块</p><h3 id="_1-node-ip" tabindex="-1"><a class="header-anchor" href="#_1-node-ip"><span>1. node-ip</span></a></h3><p>webpack-dev-server 在用</p><p><a href="https://github.com/indutny/node-ip" target="_blank" rel="noopener noreferrer">https://github.com/indutny/node-ip</a></p><p>安装</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm install ip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;ip&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 可局域网访问的本机ip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-address" tabindex="-1"><a class="header-anchor" href="#_2-address"><span>2. address</span></a></h3><p>vue cli 环境在用</p><p><a href="https://github.com/node-modules/address" target="_blank" rel="noopener noreferrer">https://github.com/node-modules/address</a></p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> address</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;address&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">())</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-自己实现" tabindex="-1"><a class="header-anchor" href="#_3-自己实现"><span>3. 自己实现</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getIPAdress</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> interfaces</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;os&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">networkInterfaces</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> devName</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> interfaces</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> iface</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> interfaces</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">devName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> iface</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> alias</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> iface</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">alias</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">family</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;IPv4&#39;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> alias</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">address</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> !==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;127.0.0.1&#39;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> !</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">alias</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">internal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> alias</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">address</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cli-参数获取" tabindex="-1"><a class="header-anchor" href="#cli-参数获取"><span>cli 参数获取</span></a></h2><p><a href="https://github.com/yargs/yargs" target="_blank" rel="noopener noreferrer">yargs 文档</a></p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> argv</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;yargs&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">argv</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> isTest</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> argv</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;test&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">===</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="终端相关" tabindex="-1"><a class="header-anchor" href="#终端相关"><span>终端相关</span></a></h2><h3 id="加载指示图标动画" tabindex="-1"><a class="header-anchor" href="#加载指示图标动画"><span>加载指示图标动画</span></a></h3><p><a href="https://github.com/sindresorhus/ora" target="_blank" rel="noopener noreferrer">https://github.com/sindresorhus/ora</a></p><h3 id="输出文本样式颜色控制" tabindex="-1"><a class="header-anchor" href="#输出文本样式颜色控制"><span>输出文本样式颜色控制</span></a></h3><p><a href="https://github.com/chalk/chalk" target="_blank" rel="noopener noreferrer">https://github.com/chalk/chalk</a></p><h2 id="node-notifier" tabindex="-1"><a class="header-anchor" href="#node-notifier"><span>node-notifier</span></a></h2><p>似乎可以控制 vscode 弹消息框</p><h2 id="opn-打开其他程序" tabindex="-1"><a class="header-anchor" href="#opn-打开其他程序"><span>opn 打开其他程序</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> opn</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;opn&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">opn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`http://</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">host</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">port</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">app</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;chrome&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chokidar" tabindex="-1"><a class="header-anchor" href="#chokidar"><span>chokidar</span></a></h2><p><a href="https://github.com/paulmillr/chokidar" target="_blank" rel="noopener noreferrer">https://github.com/paulmillr/chokidar</a></p><p>基于 node.JS 的监听文件夹改变模块</p><p>一般前端环境框架直接有依赖安装</p><h2 id="nodemon" tabindex="-1"><a class="header-anchor" href="#nodemon"><span>nodemon</span></a></h2><p>实现监听文件改变，并自动重启 nodejs 服务</p><p>全局安装</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nodemon</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nodemon</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./server.js</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 8080</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><a href="https://nodemon.io" target="_blank" rel="noopener noreferrer">nodemon 官网</a></p><p><a href="https://github.com/remy/nodemon" target="_blank" rel="noopener noreferrer">nodemon github</a></p><h2 id="日志记录" tabindex="-1"><a class="header-anchor" href="#日志记录"><span>日志记录</span></a></h2><p><a href="https://github.com/log4js-node/log4js-node" target="_blank" rel="noopener noreferrer">log4js</a></p><h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm"><span>nvm</span></a></h2><p>实现多个 node 版本共存，解决旧项目因为node版本太高无法运行情况（可以让项目运行在指定的 node 版本上）。</p><p><a href="https://blog.csdn.net/qq_30376375/article/details/115877446" target="_blank" rel="noopener noreferrer">nvm介绍、nvm下载安装及使用</a></p>`,47)]))}const k=s(l,[["render",h],["__file","node 实用模块.html.vue"]]),d=JSON.parse('{"path":"/Nodejs/node%20%E5%AE%9E%E7%94%A8%E6%A8%A1%E5%9D%97.html","title":"","lang":"zh-CN","frontmatter":{"description":"node-portfinder 自动获取可用端口 获取本机 ip 地址 1. node-ip 2. address 3. 自己实现 cli 参数获取 终端相关 加载指示图标动画 输出文本样式颜色控制 node-notifier opn 打开其他程序 chokidar nodemon 日志记录 nvm node-portfinder 自动获取可用端口 n...","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/Nodejs/node%20%E5%AE%9E%E7%94%A8%E6%A8%A1%E5%9D%97.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"node-portfinder 自动获取可用端口 获取本机 ip 地址 1. node-ip 2. address 3. 自己实现 cli 参数获取 终端相关 加载指示图标动画 输出文本样式颜色控制 node-notifier opn 打开其他程序 chokidar nodemon 日志记录 nvm node-portfinder 自动获取可用端口 n..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T13:20:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T13:20:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T13:20:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"node-portfinder 自动获取可用端口","slug":"node-portfinder-自动获取可用端口","link":"#node-portfinder-自动获取可用端口","children":[]},{"level":2,"title":"获取本机 ip 地址","slug":"获取本机-ip-地址","link":"#获取本机-ip-地址","children":[{"level":3,"title":"1. node-ip","slug":"_1-node-ip","link":"#_1-node-ip","children":[]},{"level":3,"title":"2. address","slug":"_2-address","link":"#_2-address","children":[]},{"level":3,"title":"3. 自己实现","slug":"_3-自己实现","link":"#_3-自己实现","children":[]}]},{"level":2,"title":"cli 参数获取","slug":"cli-参数获取","link":"#cli-参数获取","children":[]},{"level":2,"title":"终端相关","slug":"终端相关","link":"#终端相关","children":[{"level":3,"title":"加载指示图标动画","slug":"加载指示图标动画","link":"#加载指示图标动画","children":[]},{"level":3,"title":"输出文本样式颜色控制","slug":"输出文本样式颜色控制","link":"#输出文本样式颜色控制","children":[]}]},{"level":2,"title":"node-notifier","slug":"node-notifier","link":"#node-notifier","children":[]},{"level":2,"title":"opn 打开其他程序","slug":"opn-打开其他程序","link":"#opn-打开其他程序","children":[]},{"level":2,"title":"chokidar","slug":"chokidar","link":"#chokidar","children":[]},{"level":2,"title":"nodemon","slug":"nodemon","link":"#nodemon","children":[]},{"level":2,"title":"日志记录","slug":"日志记录","link":"#日志记录","children":[]},{"level":2,"title":"nvm","slug":"nvm","link":"#nvm","children":[]}],"git":{"createdTime":1652927496000,"updatedTime":1730121603000,"contributors":[{"name":"cqlql","email":"cql.ql@qq.com","commits":1},{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":1.59,"words":476},"filePathRelative":"Nodejs/node 实用模块.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<ul>\\n<li><a href=\\"#node-portfinder-%E8%87%AA%E5%8A%A8%E8%8E%B7%E5%8F%96%E5%8F%AF%E7%94%A8%E7%AB%AF%E5%8F%A3\\">node-portfinder 自动获取可用端口</a></li>\\n<li><a href=\\"#%E8%8E%B7%E5%8F%96%E6%9C%AC%E6%9C%BA-ip-%E5%9C%B0%E5%9D%80\\">获取本机 ip 地址</a>\\n<ul>\\n<li><a href=\\"#1-node-ip\\">1. node-ip</a></li>\\n<li><a href=\\"#2-address\\">2. address</a></li>\\n<li><a href=\\"#3-%E8%87%AA%E5%B7%B1%E5%AE%9E%E7%8E%B0\\">3. 自己实现</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#cli-%E5%8F%82%E6%95%B0%E8%8E%B7%E5%8F%96\\">cli 参数获取</a></li>\\n<li><a href=\\"#%E7%BB%88%E7%AB%AF%E7%9B%B8%E5%85%B3\\">终端相关</a>\\n<ul>\\n<li><a href=\\"#%E5%8A%A0%E8%BD%BD%E6%8C%87%E7%A4%BA%E5%9B%BE%E6%A0%87%E5%8A%A8%E7%94%BB\\">加载指示图标动画</a></li>\\n<li><a href=\\"#%E8%BE%93%E5%87%BA%E6%96%87%E6%9C%AC%E6%A0%B7%E5%BC%8F%E9%A2%9C%E8%89%B2%E6%8E%A7%E5%88%B6\\">输出文本样式颜色控制</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#node-notifier\\">node-notifier</a></li>\\n<li><a href=\\"#opn-%E6%89%93%E5%BC%80%E5%85%B6%E4%BB%96%E7%A8%8B%E5%BA%8F\\">opn 打开其他程序</a></li>\\n<li><a href=\\"#chokidar\\">chokidar</a></li>\\n<li><a href=\\"#nodemon\\">nodemon</a></li>\\n<li><a href=\\"#%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95\\">日志记录</a></li>\\n<li><a href=\\"#nvm\\">nvm</a></li>\\n</ul>"}');export{k as comp,d as data};
