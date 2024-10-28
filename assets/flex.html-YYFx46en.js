import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a as i,e as a,o as l}from"./app-BVuN8Jn5.js";const n={};function t(r,s){return l(),i("div",null,s[0]||(s[0]=[a(`<h2 id="容器属性" tabindex="-1"><a class="header-anchor" href="#容器属性"><span>容器属性</span></a></h2><h3 id="gap-项间距" tabindex="-1"><a class="header-anchor" href="#gap-项间距"><span>gap 项间距</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.TableBtns</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">inline-flex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  gap: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">16</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目属性" tabindex="-1"><a class="header-anchor" href="#项目属性"><span>项目属性</span></a></h2><h3 id="关于-flex-grow-flex-shrink-的总结" tabindex="-1"><a class="header-anchor" href="#关于-flex-grow-flex-shrink-的总结"><span>关于 flex-grow flex-shrink 的总结</span></a></h3><p>下面的细节太复杂，所以这里总结一下</p><p>当有多的可分配空间时，按 flex-grow 比例分配总的可分配空间，到可放大项。</p><p>如果没有可放大项，则看当前项是否可减少，如果有，则按当前项设置的 flex-grow 比例减少，直到等于内容大小。其他项也按此规则，直到都等于内容大小。</p><p>可放大项的解释：内容大于 flex-basis 的项拥有最小可分配空间（内容 - flex-basis）。即可分配空间小于最小可分配值时，将不再分配。内容小于 flex-basis 的项，最小可分配值为 0。当等于 0 时，就将进行 flex-shrink 缩小。</p><h3 id="flex-grow-增长" tabindex="-1"><a class="header-anchor" href="#flex-grow-增长"><span>flex-grow 增长</span></a></h3><p>按设置的比例填充剩余空间，默认为 0，即如果存在剩余空间，也不放大</p><p><strong>可放大总空间</strong> = 容器尺寸 - 所有项的 flex-basis 或者内容大小（什么时候以内容大小为准：当内容尺寸大于 flex-basis 时）</p><p><strong>每项被放大的距离值</strong> = 可放大空间之和 / 可放大项数量（内容尺寸小于 flex-basis 的项）。 所以，即使 flex-basis 不一样， <strong>所有可放大项的放大距离值是一样的</strong></p><p><strong>什么时候可被放大</strong>：容器尺寸 - 所有项的 flex-basis 或者内容大小 &gt; 0</p><h3 id="flex-shrink-缩小" tabindex="-1"><a class="header-anchor" href="#flex-shrink-缩小"><span>flex-shrink 缩小</span></a></h3><p>设置缩小比例，默认 1，即空间不够，该元素将按 1 的占比缩小可缩放空间。</p><p><strong>设置成不缩放</strong>：设置成 0 即可。此时当容器空间不够时，将按 flex-basis 设置的大小显示。</p><p><strong>（某具体项）可缩放的空间 = flex-basis 设置的值 - 内容大小</strong>。所以当内容大于 flex-basis 值时，是不能被缩放的，而且此时固定放大到内容大小。其他内容小于 flex-basis 也将缩放到内容大小后就不再缩放了。也就是<strong>项的最小尺寸就是内容尺寸</strong></p><p><strong>每项缩放距离值（缩小后的尺寸依然大于内容的项）</strong> = flex-basis * 当前项占比（flex-shrink 值决定）。由此可看出，每项的缩放距离值可能不一样</p><p><strong>什么时候可被缩小</strong>：（具体项的）flex-basis - （具体项的）内容大小 &gt; 0</p><h3 id="flex-basis-基础大小" tabindex="-1"><a class="header-anchor" href="#flex-basis-基础大小"><span>flex-basis 基础大小</span></a></h3><p>设置在分配多余空间前的基础大小</p><p>假如 flex-basis 为 auto，那么将以内容大小作为 flex-basis 的值</p><h3 id="flex-简写" tabindex="-1"><a class="header-anchor" href="#flex-简写"><span>flex 简写</span></a></h3><p>flex-grow flex-shrink flex-basis 的简写</p><p>有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。</p><h3 id="order-项排序" tabindex="-1"><a class="header-anchor" href="#order-项排序"><span>order 项排序</span></a></h3><p>数值越小，排列越靠前，默认为 0</p><h3 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self"><span>align-self</span></a></h3><p>设置不一样的对其方式。可覆盖 align-items 属性。</p><p>默认值 auto，表示继承父容器的 align-items。</p>`,31)]))}const d=e(n,[["render",t],["__file","flex.html.vue"]]),o=JSON.parse('{"path":"/CSS/layout%20%E5%B8%83%E5%B1%80/flex.html","title":"","lang":"zh-CN","frontmatter":{"description":"容器属性 gap 项间距 项目属性 关于 flex-grow flex-shrink 的总结 下面的细节太复杂，所以这里总结一下 当有多的可分配空间时，按 flex-grow 比例分配总的可分配空间，到可放大项。 如果没有可放大项，则看当前项是否可减少，如果有，则按当前项设置的 flex-grow 比例减少，直到等于内容大小。其他项也按此规则，直到都等...","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/CSS/layout%20%E5%B8%83%E5%B1%80/flex.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"容器属性 gap 项间距 项目属性 关于 flex-grow flex-shrink 的总结 下面的细节太复杂，所以这里总结一下 当有多的可分配空间时，按 flex-grow 比例分配总的可分配空间，到可放大项。 如果没有可放大项，则看当前项是否可减少，如果有，则按当前项设置的 flex-grow 比例减少，直到等于内容大小。其他项也按此规则，直到都等..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-09-18T01:15:05.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-18T01:15:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-09-18T01:15:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"容器属性","slug":"容器属性","link":"#容器属性","children":[{"level":3,"title":"gap 项间距","slug":"gap-项间距","link":"#gap-项间距","children":[]}]},{"level":2,"title":"项目属性","slug":"项目属性","link":"#项目属性","children":[{"level":3,"title":"关于 flex-grow flex-shrink 的总结","slug":"关于-flex-grow-flex-shrink-的总结","link":"#关于-flex-grow-flex-shrink-的总结","children":[]},{"level":3,"title":"flex-grow 增长","slug":"flex-grow-增长","link":"#flex-grow-增长","children":[]},{"level":3,"title":"flex-shrink 缩小","slug":"flex-shrink-缩小","link":"#flex-shrink-缩小","children":[]},{"level":3,"title":"flex-basis 基础大小","slug":"flex-basis-基础大小","link":"#flex-basis-基础大小","children":[]},{"level":3,"title":"flex 简写","slug":"flex-简写","link":"#flex-简写","children":[]},{"level":3,"title":"order 项排序","slug":"order-项排序","link":"#order-项排序","children":[]},{"level":3,"title":"align-self","slug":"align-self","link":"#align-self","children":[]}]}],"git":{"createdTime":1663416175000,"updatedTime":1663463705000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":5},{"name":"cql","email":"cql.ql@qq.com","commits":2}]},"readingTime":{"minutes":2.39,"words":718},"filePathRelative":"CSS/layout 布局/flex.md","localizedDate":"2022年9月17日","autoDesc":true,"excerpt":"<h2>容器属性</h2>\\n<h3>gap 项间距</h3>\\n<div class=\\"language-css line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"css\\" data-title=\\"css\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">.TableBtns</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  display: </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#D19A66\\">inline-flex</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  gap: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">16</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E06C75\\">px</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{d as comp,o as data};