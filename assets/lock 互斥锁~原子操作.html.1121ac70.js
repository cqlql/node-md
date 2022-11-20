import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,a as o,e as n,f as c,c as p,b as s,r as l}from"./app.da10621e.js";const i={},u=s(`<h2 id="\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#\u7406\u89E3" aria-hidden="true">#</a> \u7406\u89E3</h2><p>\u591A\u7EBF\u7A0B\u540C\u65F6\u8BBF\u95EE\u4E00\u4E2A\u8D44\u6E90\u4F1A\u51FA\u95EE\u9898\u3002\u8FD9\u65F6\u5C31\u9700\u8981 lock \u4E92\u65A5\u9501\u3002</p><p><strong>\u6B7B\u9501</strong>\uFF1A\u7EBF\u7A0BX\u9501\u5B9A\u53D8\u91CFA\uFF0C\u4F46\u4E00\u76F4\u6CA1\u6709\u91CA\u653E\u9501\u5B9A\uFF0C\u5BFC\u81F4\u5176\u4ED6\u7EBF\u7A0B\u9501\u5B9A\u53D8\u91CFA\u65F6\u4E00\u76F4\u963B\u585E\u3002</p><p><strong>\u907F\u514D\u6B7B\u9501</strong>\uFF1A\u4F7F\u7528 Monitor.TryEnter \u65B9\u6CD5\u7ED3\u5408 try-finally \u8BED\u53E5\u4EE3\u66FF lock\uFF0C\u5E76\u63D0\u4F9B\u8D85\u65F6\u3002</p><h2 id="lock-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#lock-\u4F7F\u7528" aria-hidden="true">#</a> lock \u4F7F\u7528</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">Random</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token class-name"><span class="token keyword">string</span></span> Message<span class="token punctuation">;</span> <span class="token comment">// a shared resource</span>
<span class="token keyword">static</span> <span class="token class-name"><span class="token keyword">object</span></span> conch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">object</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// \u5982\u679C conch \u5DF2\u7ECF\u9501\u5B9A\uFF0C\u5219\u6302\u8D77\u5F53\u524D\u7EBF\u7A0B\uFF0C\u76F4\u5230 conch \u89E3\u9501\u518D\u5F80\u4E0B\u6267\u884C</span>
  <span class="token comment">// \u5982\u679C conch \u6CA1\u6709\u9501\u5B9A\uFF0C\u5219\u5F00\u59CB\u9501\u5B9Aconch\uFF0C\u76F4\u5230 lock \u8BED\u53E5\u6267\u884C\u5B8C\u6210\u89E3\u9501</span>
  <span class="token keyword">lock</span> <span class="token punctuation">(</span>conch<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      Thread<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      Message <span class="token operator">+=</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">;</span>
      <span class="token function">Write</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>  
  <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>`,7),r={href:"https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/statements/lock",target:"_blank",rel:"noopener noreferrer"},k=s(`<h2 id="monitor-\u4F7F\u7528-\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#monitor-\u4F7F\u7528-\u63A8\u8350" aria-hidden="true">#</a> Monitor \u4F7F\u7528 -- \u63A8\u8350</h2><p>\u4E3A\u907F\u514D\u6B7B\u9501\uFF0C\u63A8\u8350\u4F7F\u7528 Monitor</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">Random</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token class-name"><span class="token keyword">string</span></span> Message<span class="token punctuation">;</span> <span class="token comment">// a shared resource</span>
<span class="token keyword">static</span> <span class="token class-name"><span class="token keyword">object</span></span> conch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">object</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token class-name"><span class="token keyword">bool</span></span> lockWasTaken <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">try</span>
  <span class="token punctuation">{</span>
    <span class="token comment">/* 
    \u5982\u679C conch \u5DF2\u7ECF\u88AB\u5176\u4ED6\u7EBF\u7A0B\u9501\u5B9A\uFF0C\u5219\u6302\u8D77\u7EBF\u7A0B\uFF0C\u5E76\u63D0\u4F9B\u6700\u591A 15s \u6302\u8D77\u65F6\u95F4\u3002\u8D85\u8FC7\u65F6\u95F4\u6216\u8005 conch \u89E3\u9501\u540E\u518D\u5F80\u4E0B\u6267\u884C\u3002
    \u5982\u679C conch \u6CA1\u6709\u88AB\u9501\u5B9A\uFF0C\u5219\u5F00\u59CB\u9501\u5B9A\u5E76\u5F80\u4E0B\u6267\u884C\uFF0C\u5E76\u4E14\u5C06 lockWasTaken \u8BBE\u4E3A true\u3002

    \u53C2\u65702 \u4E5F\u53EF\u76F4\u63A5\u4F7F\u7528 int \u7C7B\u578B\u7684\u6BEB\u79D2\u65F6\u95F4
     */</span>
    Monitor<span class="token punctuation">.</span><span class="token function">TryEnter</span><span class="token punctuation">(</span>conch<span class="token punctuation">,</span> TimeSpan<span class="token punctuation">.</span><span class="token function">FromSeconds</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">ref</span> lockWasTaken<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      Thread<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      Message <span class="token operator">+=</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">;</span>
      <span class="token function">Write</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">finally</span>
  <span class="token punctuation">{</span>
    <span class="token comment">/* 
    \u89E3\u9501 conch\u3002
    \u53EA\u6709\u662F\u5F53\u524D\u8FDB\u7A0B\u9501\u5B9A\u4E86 conch \u65F6\u624D\u80FD\u8C03\u7528 Monitor.Exit\uFF0C\u5426\u5219\u4F1A\u89E6\u53D1 System.Threading.SynchronizationLockException \u5F02\u5E38\uFF0C\u6240\u4EE5\u8FD9\u91CC\u6700\u597D\u52A0\u4E2A\u5224\u65AD\u3002
     */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lockWasTaken<span class="token punctuation">)</span> Monitor<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span>conch<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function d(v,m){const a=l("ExternalLinkIcon");return t(),o("div",null,[u,n("p",null,[n("a",r,[c("lock \u8BED\u53E5"),p(a)])]),k])}const y=e(i,[["render",d],["__file","lock \u4E92\u65A5\u9501~\u539F\u5B50\u64CD\u4F5C.html.vue"]]);export{y as default};
