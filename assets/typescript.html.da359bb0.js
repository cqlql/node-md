import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,a,b as t}from"./app.9416efb6.js";const p={},e=t(`<ul><li><a href="#script-setup-%E4%BD%BF%E7%94%A8-reactive">script setup \u4F7F\u7528 reactive</a></li><li><a href="#defineprops-%E8%AE%BE%E7%BD%AE%E9%BB%98%E8%AE%A4%E5%80%BC">defineProps \u8BBE\u7F6E\u9ED8\u8BA4\u503C</a></li><li><a href="#defineemits-%E4%BA%8B%E4%BB%B6">defineEmits \u4E8B\u4EF6</a></li><li><a href="#vue-%E4%B8%BA%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6%E5%A3%B0%E6%98%8E%E7%B1%BB%E5%9E%8B">vue \u4E3A\u5168\u5C40\u7EC4\u4EF6\u58F0\u660E\u7C7B\u578B</a><ul><li><a href="#%E6%96%B9%E5%BC%8F-1-%E7%BB%84%E4%BB%B6%E6%96%B9%E5%BC%8F">\u65B9\u5F0F 1 \u7EC4\u4EF6\u65B9\u5F0F</a></li><li><a href="#%E6%96%B9%E5%BC%8F-2-%E5%8E%9F%E5%A7%8B%E6%96%B9%E5%BC%8F">\u65B9\u5F0F 2 \u539F\u59CB\u65B9\u5F0F</a></li></ul></li><li><a href="#%E9%97%AE%E9%A2%98">\u95EE\u9898</a><ul><li><a href="#vue-typescript-%E5%BC%95%E5%85%A5-svg-%E7%9A%84%E9%97%AE%E9%A2%98">Vue typescript \u5F15\u5165 svg \u7684\u95EE\u9898</a></li></ul></li><li><a href="#watch-%E7%9B%91%E5%90%AC-props">watch \u76D1\u542C props</a></li></ul><h2 id="script-setup-\u4F7F\u7528-reactive" tabindex="-1"><a class="header-anchor" href="#script-setup-\u4F7F\u7528-reactive" aria-hidden="true">#</a> script setup \u4F7F\u7528 reactive</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    {{ msg }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> msg <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defineprops-\u8BBE\u7F6E\u9ED8\u8BA4\u503C" tabindex="-1"><a class="header-anchor" href="#defineprops-\u8BBE\u7F6E\u9ED8\u8BA4\u503C" aria-hidden="true">#</a> defineProps \u8BBE\u7F6E\u9ED8\u8BA4\u503C</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span>
  defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
    msg<span class="token operator">?</span><span class="token operator">:</span> string
    labels<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">labels</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defineemits-\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#defineemits-\u4E8B\u4EF6" aria-hidden="true">#</a> defineEmits \u4E8B\u4EF6</h2><p>script setup \u4E2D\u8C03\u7528\u4E8B\u4EF6</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- dialog.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5173\u95ED<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> emit <span class="token operator">=</span> defineEmits<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">&#39;update:visible&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">visible</span><span class="token operator">:</span> boolean<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:visible&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- index.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dialog</span> <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dialog</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-\u4E3A\u5168\u5C40\u7EC4\u4EF6\u58F0\u660E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#vue-\u4E3A\u5168\u5C40\u7EC4\u4EF6\u58F0\u660E\u7C7B\u578B" aria-hidden="true">#</a> vue \u4E3A\u5168\u5C40\u7EC4\u4EF6\u58F0\u660E\u7C7B\u578B</h2><h3 id="\u65B9\u5F0F-1-\u7EC4\u4EF6\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F-1-\u7EC4\u4EF6\u65B9\u5F0F" aria-hidden="true">#</a> \u65B9\u5F0F 1 \u7EC4\u4EF6\u65B9\u5F0F</h3><p>picker.vue</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- \u5982\u679C\u662F\u7B2C\u4E09\u65B9\u7EC4\u4EF6\uFF0C\u6B64\u7EC4\u4EF6\u53EA\u7528\u4F5C\u58F0\u660E\u7C7B\u578B --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;multiSelector&#39;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
defineEmits<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">detail</span><span class="token operator">:</span> any <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>components.d.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token class-name">picker</span> <span class="token keyword">from</span> <span class="token string">&#39;./picker.vue&#39;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@vue/runtime-core&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">GlobalComponents</span> <span class="token punctuation">{</span>
    picker<span class="token operator">:</span> <span class="token keyword">typeof</span> picker
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B9\u5F0F-2-\u539F\u59CB\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F-2-\u539F\u59CB\u65B9\u5F0F" aria-hidden="true">#</a> \u65B9\u5F0F 2 \u539F\u59CB\u65B9\u5F0F</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> DefineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@vue/runtime-core&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">GlobalComponents</span> <span class="token punctuation">{</span>
    JButton<span class="token operator">:</span> DefineComponent<span class="token operator">&lt;</span>
      <span class="token punctuation">{</span>
        <span class="token comment">/**
         * \u6309\u94AE\u7C7B\u578B
         */</span>
        type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;green&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;info&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">/**\u4E8B\u4EF6\u6CA1\u529E\u6CD5\u663E\u793A\u6CE8\u91CA */</span>
      <span class="token punctuation">{</span>
        <span class="token function-variable function">click</span><span class="token operator">:</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> Event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
        <span class="token function-variable function">test</span><span class="token operator">:</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> Event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h2><h3 id="vue-typescript-\u5F15\u5165-svg-\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#vue-typescript-\u5F15\u5165-svg-\u7684\u95EE\u9898" aria-hidden="true">#</a> Vue typescript \u5F15\u5165 svg \u7684\u95EE\u9898</h3><p>https://zhuanlan.zhihu.com/p/182893764</p><h2 id="watch-\u76D1\u542C-props" tabindex="-1"><a class="header-anchor" href="#watch-\u76D1\u542C-props" aria-hidden="true">#</a> watch \u76D1\u542C props</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>orderInfo<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">orderInfoVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;watch props.orderInfo&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","typescript.html.vue"]]);export{k as default};
