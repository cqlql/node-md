import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a,e,o as n}from"./app-CFwNXmjV.js";const t={};function l(h,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h2 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp"><span>jsonp</span></a></h2><p>原理：通过 scrpt 标签执行js</p><h2 id="domain" tabindex="-1"><a class="header-anchor" href="#domain"><span>domain</span></a></h2><p>仅限于同一主域名情况</p><p>比如<br><a href="http://one.web.com" target="_blank" rel="noopener noreferrer">one.web.com</a>、<a href="http://two.web.com" target="_blank" rel="noopener noreferrer">two.web.com</a>，互相交互的页面设置为：<code>document.domain = &#39;web.com&#39;。</code><br> 便能跨域通讯，包括 ajax、iframe之间</p><h2 id="h5-ajax-跨域-白名单机制" tabindex="-1"><a class="header-anchor" href="#h5-ajax-跨域-白名单机制"><span>h5 ajax 跨域，白名单机制</span></a></h2><h3 id="服务端设置例子" tabindex="-1"><a class="header-anchor" href="#服务端设置例子"><span>服务端设置例子</span></a></h3><p>PHP</p><div class="language-php line-numbers-mode" data-highlighter="shiki" data-ext="php" data-title="php" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">php</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> header</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Access-Control-Allow-Origin:*&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 所有</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">php</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> header</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Access-Control-Allow-Origin:https://www.google.com&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 单个</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个域名需特殊处理" tabindex="-1"><a class="header-anchor" href="#多个域名需特殊处理"><span>多个域名需特殊处理</span></a></h3><p>语法不支持多个，所以需特殊处理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>app.all(&#39;*&#39;, function(req, res, next) {</span></span>
<span class="line"><span>    if( req.headers.origin == &#39;https://www.google.com&#39; || req.headers.origin == &#39;https://www.baidu.com&#39; ){</span></span>
<span class="line"><span>        res.header(&quot;Access-Control-Allow-Origin&quot;, req.headers.origin);</span></span>
<span class="line"><span>        res.header(&#39;Access-Control-Allow-Methods&#39;, &#39;POST, GET&#39;);</span></span>
<span class="line"><span>        res.header(&#39;Access-Control-Allow-Headers&#39;, &#39;X-Requested-With&#39;);</span></span>
<span class="line"><span>        res.header(&#39;Access-Control-Allow-Headers&#39;, &#39;Content-Type&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    next();</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="net" tabindex="-1"><a class="header-anchor" href="#net"><span>.net</span></a></h3><p>1、直接在iis中的HTTP响应标头中增加</p><p>2、或者web.config中，见下</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">system.webServer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">httpProtocol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">customHeaders</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Access-Control-Allow-Origin&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;*&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">customHeaders</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">httpProtocol</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">system.webServer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3 、</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HttpContext.Current.Response.AddHeader(&quot;Access-Control-Allow-Origin&quot;, &quot;*&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="postmessage" tabindex="-1"><a class="header-anchor" href="#postmessage"><span>postMessage</span></a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage</a></p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 监听</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addEventListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;message&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;MessageTypeName&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 触发（此处为页面中的 iframe 中触发）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">postMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;MessageTypeName&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;*&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>兼容性：</p><p>ie8+ 支持<br> ie67 使用Flash LocalConnection<br> ie8、ie9 需使用 XDomainRequest 创建ajax对象才能使用 postMessage</p>`,23)]))}const d=i(t,[["render",l],["__file","浏览器跨域解决.html.vue"]]),k=JSON.parse(`{"path":"/old__/%E5%85%B6%E4%BB%96/%E6%B5%8F%E8%A7%88%E5%99%A8%E8%B7%A8%E5%9F%9F%E8%A7%A3%E5%86%B3.html","title":"","lang":"zh-CN","frontmatter":{"description":"jsonp 原理：通过 scrpt 标签执行js domain 仅限于同一主域名情况 比如 one.web.com、two.web.com，互相交互的页面设置为：document.domain = 'web.com'。 便能跨域通讯，包括 ajax、iframe之间 h5 ajax 跨域，白名单机制 服务端设置例子 PHP 多个域名需特殊处理 语法不支...","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/old__/%E5%85%B6%E4%BB%96/%E6%B5%8F%E8%A7%88%E5%99%A8%E8%B7%A8%E5%9F%9F%E8%A7%A3%E5%86%B3.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"jsonp 原理：通过 scrpt 标签执行js domain 仅限于同一主域名情况 比如 one.web.com、two.web.com，互相交互的页面设置为：document.domain = 'web.com'。 便能跨域通讯，包括 ajax、iframe之间 h5 ajax 跨域，白名单机制 服务端设置例子 PHP 多个域名需特殊处理 语法不支..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T02:50:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T02:50:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T02:50:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"jsonp","slug":"jsonp","link":"#jsonp","children":[]},{"level":2,"title":"domain","slug":"domain","link":"#domain","children":[]},{"level":2,"title":"h5 ajax 跨域，白名单机制","slug":"h5-ajax-跨域-白名单机制","link":"#h5-ajax-跨域-白名单机制","children":[{"level":3,"title":"服务端设置例子","slug":"服务端设置例子","link":"#服务端设置例子","children":[]},{"level":3,"title":"多个域名需特殊处理","slug":"多个域名需特殊处理","link":"#多个域名需特殊处理","children":[]},{"level":3,"title":".net","slug":"net","link":"#net","children":[]}]},{"level":2,"title":"postMessage","slug":"postmessage","link":"#postmessage","children":[]}],"git":{"createdTime":1652927496000,"updatedTime":1730083825000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":0.85,"words":254},"filePathRelative":"__old__/其他/浏览器跨域解决.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<h2>jsonp</h2>\\n<p>原理：通过 scrpt 标签执行js</p>\\n<h2>domain</h2>\\n<p>仅限于同一主域名情况</p>\\n<p>比如<br>\\n<a href=\\"http://one.web.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">one.web.com</a>、<a href=\\"http://two.web.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">two.web.com</a>，互相交互的页面设置为：<code>document.domain = 'web.com'。</code><br>\\n便能跨域通讯，包括 ajax、iframe之间</p>"}`);export{d as comp,k as data};
