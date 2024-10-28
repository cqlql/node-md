import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a,e as n,o as h}from"./app-BVuN8Jn5.js";const k={};function t(l,i){return h(),a("div",null,i[0]||(i[0]=[n(`<h2 id="webpack-相关" tabindex="-1"><a class="header-anchor" href="#webpack-相关"><span>webpack 相关</span></a></h2><h3 id="require-context" tabindex="-1"><a class="header-anchor" href="#require-context"><span>require.context</span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> routes</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RouteRecordRaw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> []</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> importAll</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">r</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#E5C07B;"> __WebpackModuleApi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">RequireContext</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">forEach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> name</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">replace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">*</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\/</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\.</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">\\w</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">+</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">g</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    routes</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> routes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">concat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      path</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;/&#39;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      component</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">importAll</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;@/comp-temp/experiment&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;"> /</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">+</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\.</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">demo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\.</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">vue</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">$</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="record-键值对" tabindex="-1"><a class="header-anchor" href="#record-键值对"><span>Record 键值对</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> FormType</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Record</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,5)]))}const r=s(k,[["render",t],["__file","类型收集.html.vue"]]),d=JSON.parse(`{"path":"/old__/04_typescript/%E7%B1%BB%E5%9E%8B%E6%94%B6%E9%9B%86.html","title":"","lang":"zh-CN","frontmatter":{"description":"webpack 相关 require.context Record 键值对","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/old__/04_typescript/%E7%B1%BB%E5%9E%8B%E6%94%B6%E9%9B%86.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"webpack 相关 require.context Record 键值对"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T02:50:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T02:50:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T02:50:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"webpack 相关","slug":"webpack-相关","link":"#webpack-相关","children":[{"level":3,"title":"require.context","slug":"require-context","link":"#require-context","children":[]}]},{"level":2,"title":"Record 键值对","slug":"record-键值对","link":"#record-键值对","children":[]}],"git":{"createdTime":1652927496000,"updatedTime":1730083825000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":0.18,"words":53},"filePathRelative":"__old__/04_typescript/类型收集.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<h2>webpack 相关</h2>\\n<h3>require.context</h3>\\n<div class=\\"language-ts line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"ts\\" data-title=\\"ts\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">let</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> routes</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> RouteRecordRaw</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[] </span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> []</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">function</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> importAll</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">r</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#E5C07B\\"> __WebpackModuleApi</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">RequireContext</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">  r</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">keys</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">().</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">forEach</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">((</span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">key</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#E5C07B\\"> string</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">) </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">=&gt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    const</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> name</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> key</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">replace</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#E06C75\\">/</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E06C75\\">.</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#D19A66\\">*</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\/</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\">|</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\.</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E06C75\\">\\\\w</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#D19A66\\">+</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#E06C75\\">/</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">g</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">''</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">    routes</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> routes</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">concat</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">({</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">      path</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> '/'</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> +</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> name</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">      name</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">      component</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> r</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">key</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">).</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">default</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    })</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  })</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">importAll</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">require</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">context</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'@/comp-temp/experiment'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">true</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#E06C75\\"> /</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E06C75\\">.</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#D19A66\\">+</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\.</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#E06C75\\">demo</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\.</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#E06C75\\">vue</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">$</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#E06C75\\">/</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">))</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{r as comp,d as data};
