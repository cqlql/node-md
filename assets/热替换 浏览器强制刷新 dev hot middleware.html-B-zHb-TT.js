import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a,e,o as n}from"./app-BVuN8Jn5.js";const l={};function t(p,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h2 id="_1-webpack-dev-middleware-需与-webpack-hot-middleware-配合才会实现监听更改后刷新" tabindex="-1"><a class="header-anchor" href="#_1-webpack-dev-middleware-需与-webpack-hot-middleware-配合才会实现监听更改后刷新"><span>1 <a href="https://github.com/webpack/webpack-dev-middleware" target="_blank" rel="noopener noreferrer">webpack-dev-middleware</a> 需与 <a href="https://github.com/glenjamin/webpack-hot-middleware" target="_blank" rel="noopener noreferrer">webpack-hot-middleware</a> 配合才会实现监听更改后刷新</span></a></h2><h2 id="_2-每个-entry-还需导入-webpack-hot-middleware-client-reload-true-才能刷新" tabindex="-1"><a class="header-anchor" href="#_2-每个-entry-还需导入-webpack-hot-middleware-client-reload-true-才能刷新"><span>2 每个 entry 还需导入 <code>webpack-hot-middleware/client?reload=true</code> 才能刷新</span></a></h2><p><code>reload=true</code> 表示无法热替换则强制刷新浏览器</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    entry</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      page1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;webpack-hot-middleware/client?reload=true&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./src/page1.js&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      page2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;webpack-hot-middleware/client?reload=true&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./src/page2.js&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-热替换实现还需每个js文件加入类似如下代码" tabindex="-1"><a class="header-anchor" href="#_3-热替换实现还需每个js文件加入类似如下代码"><span>3 热替换实现还需每个js文件加入类似如下代码</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// page1.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">  module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">hot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">accept</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-html-文件的更改刷新还需借助-eventsource-polyfill" tabindex="-1"><a class="header-anchor" href="#_4-html-文件的更改刷新还需借助-eventsource-polyfill"><span>4 html 文件的更改刷新还需借助 eventsource-polyfill</span></a></h2><p><code>webpack-hot-middleware/client</code> 中有对 eventsource-polyfill 的调用。<a href="https://www.npmjs.com/package/webpack-hot-middleware#use-on-browsers-without-eventsource" target="_blank" rel="noopener noreferrer">官方也有说明</a></p><p>eventsource-polyfill 实现客户端接受服务端推送的消息</p><p>client 导入，即 entry 中配置，此处包含第2点</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;eventsource-polyfill&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> hotClient</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;webpack-hot-middleware/client?noInfo=true&amp;reload=true&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">hotClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">subscribe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">action</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;reload&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">reload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server：服务端通知客户端刷新</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">compiler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">plugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;compilation&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">compilation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  compilation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">plugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;html-webpack-plugin-after-emit&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">cb</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    hotMiddleware</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">publish</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">action</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;reload&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> })</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    cb</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附上配置代码" tabindex="-1"><a class="header-anchor" href="#附上配置代码"><span>附上配置代码</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// dev-client.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;eventsource-polyfill&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> hotClient</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;webpack-hot-middleware/client?noInfo=true&amp;reload=true&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">hotClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">subscribe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">action</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;reload&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">reload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// dev-server.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var express = require(&#39;express&#39;)</span></span>
<span class="line"><span>var path = require(&#39;path&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var webpack = require(&#39;webpack&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var webpackConfig = require(&#39;./webpack.config&#39;)()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.keys(webpackConfig.entry).forEach(function (name) {</span></span>
<span class="line"><span>  webpackConfig.entry[name] = [&#39;./dev-client&#39;].concat(webpackConfig.entry[name])</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var app = express()</span></span>
<span class="line"><span>var compiler = webpack(webpackConfig)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var devMiddleware = require(&#39;webpack-dev-middleware&#39;)(compiler, {</span></span>
<span class="line"><span>  publicPath: webpackConfig.output.publicPath,</span></span>
<span class="line"><span>  noInfo: true,</span></span>
<span class="line"><span>  stats: {</span></span>
<span class="line"><span>    colors: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var hotMiddleware = require(&#39;webpack-hot-middleware&#39;)(compiler)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>compiler.plugin(&#39;compilation&#39;, function (compilation) {</span></span>
<span class="line"><span>  compilation.plugin(&#39;html-webpack-plugin-after-emit&#39;, function (data, cb) {</span></span>
<span class="line"><span>    hotMiddleware.publish({ action: &#39;reload&#39; })</span></span>
<span class="line"><span>    cb()</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(devMiddleware)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(hotMiddleware)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(express.static(path.join(__dirname, &#39;dist&#39;)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var server = app.listen(8080)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const r=i(l,[["render",t],["__file","热替换 浏览器强制刷新 dev hot middleware.html.vue"]]),k=JSON.parse('{"path":"/old__/%E5%B7%A5%E7%A8%8B-webpack/old/%E7%83%AD%E6%9B%BF%E6%8D%A2%20%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%BA%E5%88%B6%E5%88%B7%E6%96%B0%20dev%20hot%20middleware.html","title":"","lang":"zh-CN","frontmatter":{"description":"1 webpack-dev-middleware 需与 webpack-hot-middleware 配合才会实现监听更改后刷新 2 每个 entry 还需导入 webpack-hot-middleware/client?reload=true 才能刷新 reload=true 表示无法热替换则强制刷新浏览器 3 热替换实现还需每个js文件加入类似如下...","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/old__/%E5%B7%A5%E7%A8%8B-webpack/old/%E7%83%AD%E6%9B%BF%E6%8D%A2%20%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%BA%E5%88%B6%E5%88%B7%E6%96%B0%20dev%20hot%20middleware.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"1 webpack-dev-middleware 需与 webpack-hot-middleware 配合才会实现监听更改后刷新 2 每个 entry 还需导入 webpack-hot-middleware/client?reload=true 才能刷新 reload=true 表示无法热替换则强制刷新浏览器 3 热替换实现还需每个js文件加入类似如下..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T02:50:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T02:50:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T02:50:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"1 webpack-dev-middleware 需与 webpack-hot-middleware 配合才会实现监听更改后刷新","slug":"_1-webpack-dev-middleware-需与-webpack-hot-middleware-配合才会实现监听更改后刷新","link":"#_1-webpack-dev-middleware-需与-webpack-hot-middleware-配合才会实现监听更改后刷新","children":[]},{"level":2,"title":"2 每个 entry 还需导入 webpack-hot-middleware/client?reload=true 才能刷新","slug":"_2-每个-entry-还需导入-webpack-hot-middleware-client-reload-true-才能刷新","link":"#_2-每个-entry-还需导入-webpack-hot-middleware-client-reload-true-才能刷新","children":[]},{"level":2,"title":"3 热替换实现还需每个js文件加入类似如下代码","slug":"_3-热替换实现还需每个js文件加入类似如下代码","link":"#_3-热替换实现还需每个js文件加入类似如下代码","children":[]},{"level":2,"title":"4 html 文件的更改刷新还需借助 eventsource-polyfill","slug":"_4-html-文件的更改刷新还需借助-eventsource-polyfill","link":"#_4-html-文件的更改刷新还需借助-eventsource-polyfill","children":[]},{"level":2,"title":"附上配置代码","slug":"附上配置代码","link":"#附上配置代码","children":[]}],"git":{"createdTime":1652927496000,"updatedTime":1730083825000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":1.16,"words":349},"filePathRelative":"__old__/工程-webpack/old/热替换 浏览器强制刷新 dev hot middleware.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<h2><a class=\\"header-anchor\\" href=\\"#_1-webpack-dev-middleware-需与-webpack-hot-middleware-配合才会实现监听更改后刷新\\"><span>1 </span></a><a href=\\"https://github.com/webpack/webpack-dev-middleware\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">webpack-dev-middleware</a> 需与 <a href=\\"https://github.com/glenjamin/webpack-hot-middleware\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">webpack-hot-middleware</a> 配合才会实现监听更改后刷新</h2>"}');export{r as comp,k as data};
