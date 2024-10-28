import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a as e,e as a,o as i}from"./app-CFwNXmjV.js";const p={};function l(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h2 id="代理" tabindex="-1"><a class="header-anchor" href="#代理"><span>代理</span></a></h2><p>开发用。实现无需本机部署服务端环境，使用其他服务端接口</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>devServer: {</span></span>
<span class="line"><span>  proxy: {</span></span>
<span class="line"><span>    &quot;/note&quot;: {</span></span>
<span class="line"><span>      // /note 相当于请求 http://192.168.1.222:8800/note</span></span>
<span class="line"><span>      target: &quot;http://192.168.1.222:8800&quot;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 使用 pathRewrite 后： /note 相当于请求 http://192.168.1.222:8800</span></span>
<span class="line"><span>      pathRewrite: {&quot;^/note&quot; : &quot;&quot;},</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置Host头，部分特殊服务器情况使用</span></span>
<span class="line"><span>      onProxyReq: function(proxyReq, req, res){</span></span>
<span class="line"><span>          proxyReq.setHeader(&#39;Host&#39;,&#39;parent.shendupeiban.com&#39;)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="node-api" tabindex="-1"><a class="header-anchor" href="#node-api"><span>Node API</span></a></h2><p>webpack.config.js 必须根目录</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>require(&#39;webpack-dev-server/bin/webpack-dev-server&#39;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,6)]))}const c=s(p,[["render",l],["__file","webpack-dev-server.html.vue"]]),o=JSON.parse(`{"path":"/old__/%E5%B7%A5%E7%A8%8B-webpack/old/webpack-dev-server.html","title":"","lang":"zh-CN","frontmatter":{"description":"代理 开发用。实现无需本机部署服务端环境，使用其他服务端接口 Node API webpack.config.js 必须根目录","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/old__/%E5%B7%A5%E7%A8%8B-webpack/old/webpack-dev-server.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"代理 开发用。实现无需本机部署服务端环境，使用其他服务端接口 Node API webpack.config.js 必须根目录"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T02:50:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T02:50:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T02:50:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"代理","slug":"代理","link":"#代理","children":[]},{"level":2,"title":"Node API","slug":"node-api","link":"#node-api","children":[]}],"git":{"createdTime":1652927496000,"updatedTime":1730083825000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":0.33,"words":98},"filePathRelative":"__old__/工程-webpack/old/webpack-dev-server.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<h2>代理</h2>\\n<p>开发用。实现无需本机部署服务端环境，使用其他服务端接口</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>devServer: {</span></span>\\n<span class=\\"line\\"><span>  proxy: {</span></span>\\n<span class=\\"line\\"><span>    \\"/note\\": {</span></span>\\n<span class=\\"line\\"><span>      // /note 相当于请求 http://192.168.1.222:8800/note</span></span>\\n<span class=\\"line\\"><span>      target: \\"http://192.168.1.222:8800\\"</span></span>\\n<span class=\\"line\\"><span>      </span></span>\\n<span class=\\"line\\"><span>      // 使用 pathRewrite 后： /note 相当于请求 http://192.168.1.222:8800</span></span>\\n<span class=\\"line\\"><span>      pathRewrite: {\\"^/note\\" : \\"\\"},</span></span>\\n<span class=\\"line\\"><span>      </span></span>\\n<span class=\\"line\\"><span>      // 设置Host头，部分特殊服务器情况使用</span></span>\\n<span class=\\"line\\"><span>      onProxyReq: function(proxyReq, req, res){</span></span>\\n<span class=\\"line\\"><span>          proxyReq.setHeader('Host','parent.shendupeiban.com')</span></span>\\n<span class=\\"line\\"><span>      }</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>  }</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{c as comp,o as data};
