import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{i as a}from"./app.31cce214.js";const s={},t=a(`<h2 id="\u7EC4\u5408\u5F0F-api-\u4E2D\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u5F0F-api-\u4E2D\u7528\u6CD5" aria-hidden="true">#</a> \u7EC4\u5408\u5F0F api \u4E2D\u7528\u6CD5</h2><h3 id="props-\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#props-\u76D1\u542C" aria-hidden="true">#</a> props \u76D1\u542C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>visible<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">visible</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>visible<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-ref-\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#array-ref-\u76D1\u542C" aria-hidden="true">#</a> array ref \u76D1\u542C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> ref<span class="token operator">&lt;</span>ItemType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">list<span class="token punctuation">,</span> preList</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u6CE8\u610F\uFF1A\u76F4\u63A5\u76D1\u542C list \u65E0\u6548</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u76F8\u5173\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u6587\u6863" aria-hidden="true">#</a> \u76F8\u5173\u6587\u6863</h2><p>https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#watch</p>`,7);function e(p,i){return t}var l=n(s,[["render",e],["__file","watch.html.vue"]]);export{l as default};
