import{_ as a,Z as e,$ as s,a2 as n}from"./framework-d33190a3.js";const r={},i=n(`<h2 id="容器属性" tabindex="-1"><a class="header-anchor" href="#容器属性" aria-hidden="true">#</a> 容器属性</h2><h3 id="gap-项间距" tabindex="-1"><a class="header-anchor" href="#gap-项间距" aria-hidden="true">#</a> gap 项间距</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.TableBtns</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目属性" tabindex="-1"><a class="header-anchor" href="#项目属性" aria-hidden="true">#</a> 项目属性</h2><h3 id="关于-flex-grow-flex-shrink-的总结" tabindex="-1"><a class="header-anchor" href="#关于-flex-grow-flex-shrink-的总结" aria-hidden="true">#</a> 关于 flex-grow flex-shrink 的总结</h3><p>下面的细节太复杂，所以这里总结一下</p><p>当有多的可分配空间时，按 flex-grow 比例分配总的可分配空间，到可放大项。</p><p>如果没有可放大项，则看当前项是否可减少，如果有，则按当前项设置的 flex-grow 比例减少，直到等于内容大小。其他项也按此规则，直到都等于内容大小。</p><p>可放大项的解释：内容大于 flex-basis 的项拥有最小可分配空间（内容 - flex-basis）。即可分配空间小于最小可分配值时，将不再分配。内容小于 flex-basis 的项，最小可分配值为 0。当等于 0 时，就将进行 flex-shrink 缩小。</p><h3 id="flex-grow-增长" tabindex="-1"><a class="header-anchor" href="#flex-grow-增长" aria-hidden="true">#</a> flex-grow 增长</h3><p>按设置的比例填充剩余空间，默认为 0，即如果存在剩余空间，也不放大</p><p><strong>可放大总空间</strong> = 容器尺寸 - 所有项的 flex-basis 或者内容大小（什么时候以内容大小为准：当内容尺寸大于 flex-basis 时）</p><p><strong>每项被放大的距离值</strong> = 可放大空间之和 / 可放大项数量（内容尺寸小于 flex-basis 的项）。 所以，即使 flex-basis 不一样， <strong>所有可放大项的放大距离值是一样的</strong></p><p><strong>什么时候可被放大</strong>：容器尺寸 - 所有项的 flex-basis 或者内容大小 &gt; 0</p><h3 id="flex-shrink-缩小" tabindex="-1"><a class="header-anchor" href="#flex-shrink-缩小" aria-hidden="true">#</a> flex-shrink 缩小</h3><p>设置缩小比例，默认 1，即空间不够，该元素将按 1 的占比缩小可缩放空间。</p><p><strong>设置成不缩放</strong>：设置成 0 即可。此时当容器空间不够时，将按 flex-basis 设置的大小显示。</p><p><strong>（某具体项）可缩放的空间 = flex-basis 设置的值 - 内容大小</strong>。所以当内容大于 flex-basis 值时，是不能被缩放的，而且此时固定放大到内容大小。其他内容小于 flex-basis 也将缩放到内容大小后就不再缩放了。也就是<strong>项的最小尺寸就是内容尺寸</strong></p><p><strong>每项缩放距离值（缩小后的尺寸依然大于内容的项）</strong> = flex-basis * 当前项占比（flex-shrink 值决定）。由此可看出，每项的缩放距离值可能不一样</p><p><strong>什么时候可被缩小</strong>：（具体项的）flex-basis - （具体项的）内容大小 &gt; 0</p><h3 id="flex-basis-基础大小" tabindex="-1"><a class="header-anchor" href="#flex-basis-基础大小" aria-hidden="true">#</a> flex-basis 基础大小</h3><p>设置在分配多余空间前的基础大小</p><p>假如 flex-basis 为 auto，那么将以内容大小作为 flex-basis 的值</p><h3 id="flex-简写" tabindex="-1"><a class="header-anchor" href="#flex-简写" aria-hidden="true">#</a> flex 简写</h3><p>flex-grow flex-shrink flex-basis 的简写</p><p>有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。</p><h3 id="order-项排序" tabindex="-1"><a class="header-anchor" href="#order-项排序" aria-hidden="true">#</a> order 项排序</h3><p>数值越小，排列越靠前，默认为 0</p><h3 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self" aria-hidden="true">#</a> align-self</h3><p>设置不一样的对其方式。可覆盖 align-items 属性。</p><p>默认值 auto，表示继承父容器的 align-items。</p>`,31),l=[i];function t(o,p){return e(),s("div",null,l)}const h=a(r,[["render",t],["__file","flex.html.vue"]]);export{h as default};