import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{i as s}from"./app.31cce214.js";const a={},t=s(`<h2 id="\u51FD\u6570\u5F0F\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u5F0F\u7EC4\u4EF6" aria-hidden="true">#</a> \u51FD\u6570\u5F0F\u7EC4\u4EF6</h2><p>\u51FD\u6570\u5F0F\u7EC4\u4EF6\u4E2D\u7684\u94A9\u5B50\u51FD\u6570\uFF0Cref \u72B6\u6001\u5E76\u4E0D\u80FD\u4FDD\u5B58</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">function</span> <span class="token function">useSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6BCF\u6B21\u6267\u884C\u90FD\u662F\u65B0\u7684 a\uFF0C\u72B6\u6001\u5E76\u6CA1\u6709\u4FDD\u5B58</span>
  <span class="token comment">// react \u8FD9\u91CC\u4E5F\u5F0F\u6BCF\u6B21\u90FD\u6267\u884C\uFF0C\u4F46\u72B6\u6001\u6709\u4FDD\u5B58</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;inside&#39;</span><span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6BCF\u6B21\u6E32\u67D3\u8FD9\u91CC\u90FD\u4F1A\u6267\u884C -- useSearch</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>props<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> slots <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> a <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6BCF\u6B21\u6E32\u67D3\u8FD9\u91CC\u90FD\u4F1A\u6267\u884C -- render</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">a \u7684\u503C: </span><span class="token punctuation">{</span>a<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">change</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setup-\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#setup-\u65B9\u5F0F" aria-hidden="true">#</a> setup \u65B9\u5F0F</h2><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u{1F680} \u53EA\u4F1A\u6267\u884C\u4E00\u6B21 -- setup -- props</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> props<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u{1F680} \u6BCF\u6B21\u6E32\u67D3\u8FD9\u91CC\u90FD\u4F1A\u6267\u884C -- props</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> props<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function p(e,o){return t}var i=n(a,[["render",p],["__file","jsx.html.vue"]]);export{i as default};
