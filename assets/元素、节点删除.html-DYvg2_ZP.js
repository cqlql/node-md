import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a as s,e as a,o as t}from"./app-BVuN8Jn5.js";const l={};function h(n,i){return t(),s("div",null,i[0]||(i[0]=[a(`<h2 id="remove" tabindex="-1"><a class="header-anchor" href="#remove"><span>remove</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getElementsByTagName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;input&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">remove</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>包括ie11的所有ie、Safari 不支持。<br> chrome、firefox支持<br> 低版本安卓 4.3以下webview不支持。</p><h2 id="removechild" tabindex="-1"><a class="header-anchor" href="#removechild"><span>removeChild</span></a></h2><p>完美兼容方式。兼容ie6</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> elem</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getElementsByTagName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;input&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">elem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">parentNode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">removeChild</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">elem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上两种都是Node的方法。也可用于Element</p>`,7)]))}const d=e(l,[["render",h],["__file","元素、节点删除.html.vue"]]),k=JSON.parse(`{"path":"/old__/01_js-dom-webapis/%E5%85%83%E7%B4%A0%E3%80%81%E8%8A%82%E7%82%B9%E5%88%A0%E9%99%A4.html","title":"","lang":"zh-CN","frontmatter":{"description":"remove 包括ie11的所有ie、Safari 不支持。 chrome、firefox支持 低版本安卓 4.3以下webview不支持。 removeChild 完美兼容方式。兼容ie6 以上两种都是Node的方法。也可用于Element","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/old__/01_js-dom-webapis/%E5%85%83%E7%B4%A0%E3%80%81%E8%8A%82%E7%82%B9%E5%88%A0%E9%99%A4.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"remove 包括ie11的所有ie、Safari 不支持。 chrome、firefox支持 低版本安卓 4.3以下webview不支持。 removeChild 完美兼容方式。兼容ie6 以上两种都是Node的方法。也可用于Element"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T02:50:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T02:50:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T02:50:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"remove","slug":"remove","link":"#remove","children":[]},{"level":2,"title":"removeChild","slug":"removechild","link":"#removechild","children":[]}],"git":{"createdTime":1652927496000,"updatedTime":1730083825000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":0.22,"words":66},"filePathRelative":"__old__/01_js-dom-webapis/元素、节点删除.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<h2>remove</h2>\\n<div class=\\"language-js line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" data-title=\\"js\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">document</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">getElementsByTagName</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'input'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)[</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">0</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">].</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">remove</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}`);export{d as comp,k as data};
