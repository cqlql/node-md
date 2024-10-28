import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a,e as t,o as e}from"./app-BVuN8Jn5.js";const n={};function h(l,i){return e(),a("div",null,i[0]||(i[0]=[t(`<h2 id="可以直接使用实例的类型" tabindex="-1"><a class="header-anchor" href="#可以直接使用实例的类型"><span>可以直接使用实例的类型</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> createI18n</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ReturnType</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> createI18n</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="还可以创建类型函数" tabindex="-1"><a class="header-anchor" href="#还可以创建类型函数"><span>还可以创建类型函数？</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> * Obtain the return type of a function type</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ReturnType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> infer</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> R</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> R</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> any</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型的所有-key-作为类型" tabindex="-1"><a class="header-anchor" href="#类型的所有-key-作为类型"><span>类型的所有 key 作为类型</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Writable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">  -</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">readonly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">P</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;"> keyof</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">P</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="心得" tabindex="-1"><a class="header-anchor" href="#心得"><span>心得</span></a></h2><p>先写类型约束，再用？</p>`,8)]))}const r=s(n,[["render",h],["__file","待整理学习.html.vue"]]),d=JSON.parse('{"path":"/TypeScript/%E5%BE%85%E6%95%B4%E7%90%86%E5%AD%A6%E4%B9%A0.html","title":"","lang":"zh-CN","frontmatter":{"description":"可以直接使用实例的类型 还可以创建类型函数？ 类型的所有 key 作为类型 心得 先写类型约束，再用？","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/TypeScript/%E5%BE%85%E6%95%B4%E7%90%86%E5%AD%A6%E4%B9%A0.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"可以直接使用实例的类型 还可以创建类型函数？ 类型的所有 key 作为类型 心得 先写类型约束，再用？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-27T09:32:33.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-27T09:32:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-08-27T09:32:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"可以直接使用实例的类型","slug":"可以直接使用实例的类型","link":"#可以直接使用实例的类型","children":[]},{"level":2,"title":"还可以创建类型函数？","slug":"还可以创建类型函数","link":"#还可以创建类型函数","children":[]},{"level":2,"title":"类型的所有 key 作为类型","slug":"类型的所有-key-作为类型","link":"#类型的所有-key-作为类型","children":[]},{"level":2,"title":"心得","slug":"心得","link":"#心得","children":[]}],"git":{"createdTime":1661332859000,"updatedTime":1661592753000,"contributors":[{"name":"cqlql","email":"cql.ql@qq.com","commits":2}]},"readingTime":{"minutes":0.28,"words":84},"filePathRelative":"TypeScript/待整理学习.md","localizedDate":"2022年8月24日","autoDesc":true,"excerpt":"<h2>可以直接使用实例的类型</h2>\\n<div class=\\"language-ts line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"ts\\" data-title=\\"ts\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> createI18n</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">ReturnType</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#C678DD\\">typeof</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> createI18n</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,d as data};
