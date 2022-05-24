import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as p,c as o,b as n,h as c,F as i,f as s,i as l}from"./app.31cce214.js";const u={},r=n("h2",{id:"\u8BF4\u660E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8BF4\u660E","aria-hidden":"true"},"#"),s(" \u8BF4\u660E")],-1),d=n("p",null,"\u65B9\u4FBF\u7236\u7EC4\u4EF6\u53EF\u4E0E\u6DF1\u5C42\u6B21\u5B50\u7EC4\u4EF6\u5171\u4EAB\u72B6\u6001",-1),k=n("h2",{id:"\u76F8\u5173\u6587\u6863",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u76F8\u5173\u6587\u6863","aria-hidden":"true"},"#"),s(" \u76F8\u5173\u6587\u6863")],-1),v={href:"https://v3.cn.vuejs.org/guide/component-provide-inject.htm",target:"_blank",rel:"noopener noreferrer"},m=s("Provide / Inject \u5B98\u65B9"),b=l(`<h2 id="\u5E38\u89C4\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C4\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u5E38\u89C4\u4F7F\u7528\u793A\u4F8B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;todo-list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Feed a cat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Buy tickets&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">provide</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;John Doe&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;
      {{ todos.length }}
      &lt;!-- \u6A21\u677F\u7684\u5176\u4F59\u90E8\u5206 --&gt;
    &lt;/div&gt;
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;todo-list-statistics&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Injected property: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token comment">// &gt; \u6CE8\u5165\u7684 property: John Doe</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setup-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#setup-\u4F7F\u7528" aria-hidden="true">#</a> setup \u4F7F\u7528</h2><p>\u7236\u7EC4\u4EF6\uFF1A\u63D0\u4F9B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> provide<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;setting&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u975E\u54CD\u5E94\u5F0F</span>
  name<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ref \u54CD\u5E94\u5F0F</span>
  status<span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u518D\u8BBE\u7F6E\u4E00\u4E2A\uFF0C\u5E76\u4E14\u662F\u76F4\u63A5\u8BBE\u7F6E\u4E00\u4E2A\u54CD\u5E94\u5F0F\u53D8\u91CF</span>
<span class="token keyword">const</span> isLeader <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;isLeader&#39;</span><span class="token punctuation">,</span> isLeader<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DF1\u5C42\u6B21\u5B50\u7EC4\u4EF6\uFF1A\u6CE8\u5165\u5E76\u4F7F\u7528</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> setting <span class="token operator">=</span> <span class="token generic-function"><span class="token function">inject</span><span class="token generic class-name"><span class="token operator">&lt;</span>Setting<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;setting&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> isLeader <span class="token operator">=</span> <span class="token generic-function"><span class="token function">inject</span><span class="token generic class-name"><span class="token operator">&lt;</span>Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;isLeader&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u53EF\u5728\u5B50\u7EC4\u4EF6\u4E2D\u4FEE\u6539</span>
isLeader<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function g(h,f){const a=e("ExternalLinkIcon");return p(),o(i,null,[r,d,k,n("p",null,[n("a",v,[m,c(a)])]),b],64)}var j=t(u,[["render",g],["__file","Provide \u548C Inject.html.vue"]]);export{j as default};
