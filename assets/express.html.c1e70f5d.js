import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as c,a as i,e as n,c as t,F as l,b as s,f as p}from"./app.4344c86e.js";const u={},r=s('<ul><li><a href="#%E7%AB%99%E7%82%B9">\u7AD9\u70B9</a></li><li><a href="#%E5%AE%89%E8%A3%85">\u5B89\u88C5</a></li><li><a href="#%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90">\u9759\u6001\u8D44\u6E90</a></li><li><a href="#get">get</a></li><li><a href="#post">post</a></li><li><a href="#%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u6587\u4EF6\u4E0A\u4F20</a></li><li><a href="#%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0">\u8DEF\u7531\u53C2\u6570</a></li><li><a href="#get-%E5%8F%82%E6%95%B0%E8%8E%B7%E5%8F%96">get \u53C2\u6570\u83B7\u53D6</a></li><li><a href="#post-%E5%8F%82%E6%95%B0%E8%8E%B7%E5%8F%96">post \u53C2\u6570\u83B7\u53D6</a></li><li><a href="#%E8%BF%90%E8%A1%8C">\u8FD0\u884C</a></li></ul><h2 id="\u7AD9\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7AD9\u70B9" aria-hidden="true">#</a> \u7AD9\u70B9</h2>',2),d={href:"https://github.com/expressjs/expressjs.com",target:"_blank",rel:"noopener noreferrer"},k=p("github \u4ED3\u5E93"),v=s(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install express
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u9759\u6001\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90" aria-hidden="true">#</a> \u9759\u6001\u8D44\u6E90</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/Content&#39;</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u9759\u6001\u8D44\u6E90</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/get&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> post</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6587\u4EF6\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a> \u6587\u4EF6\u4E0A\u4F20</h2>`,9),m={href:"https://www.npmjs.com/package/multer",target:"_blank",rel:"noopener noreferrer"},h=p("multer \u6587\u6863"),b=s(`<p>\u6B64\u5904\u4E3A\u5355\u6587\u4EF6\u4E0A\u4F20\uFF0C\u4E00\u6B21\u6027\u591A\u6B21\u6587\u4EF6\u5F85\u63A2\u7D22</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> multer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;multer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> upload <span class="token operator">=</span> <span class="token function">multer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&#39;e:/uploads/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// upload.single(&#39;avatar&#39;) \u8FD9\u4E2A avatar \u5BF9\u5E94 input \u7684 name \u503C\uFF0C\u5982\uFF1A&lt;input name=&quot;avatar&quot; type=&quot;file&quot;/&gt;\u3002\u5426\u5219\u62A5\u9519</span>
router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/file&#39;</span><span class="token punctuation">,</span> upload<span class="token punctuation">.</span><span class="token function">single</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8DEF\u7531\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u53C2\u6570" aria-hidden="true">#</a> \u8DEF\u7531\u53C2\u6570</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: <span class="token punctuation">{</span> &quot;userId&quot;: &quot;34&quot;, &quot;bookId&quot;: &quot;8989&quot; <span class="token punctuation">}</span>
 */</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/users/:userId/books/:bookId&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-\u53C2\u6570\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#get-\u53C2\u6570\u83B7\u53D6" aria-hidden="true">#</a> get \u53C2\u6570\u83B7\u53D6</h2><h2 id="post-\u53C2\u6570\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#post-\u53C2\u6570\u83B7\u53D6" aria-hidden="true">#</a> post \u53C2\u6570\u83B7\u53D6</h2>`,6),f={href:"http://www.expressjs.com.cn/4x/api.html#req.body",target:"_blank",rel:"noopener noreferrer"},g=p("req.body \u8BF4\u660E - express4 api \u4E2D\u6587\u624B\u518C"),x=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> bodyParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;body-parser&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> multer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;multer&#39;</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// for parsing application/json</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// for parsing application/x-www-form-urlencoded</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">multer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// for parsing multipart/form-data</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6</span>
  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C" aria-hidden="true">#</a> \u8FD0\u884C</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> server <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3003</span><span class="token punctuation">,</span> <span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> host <span class="token operator">=</span> server<span class="token punctuation">.</span><span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>address
  <span class="token keyword">var</span> port <span class="token operator">=</span> server<span class="token punctuation">.</span><span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>port
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Example app listening at http://%s:%s&#39;</span><span class="token punctuation">,</span> host<span class="token punctuation">,</span> port<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function y(_,E){const a=o("ExternalLinkIcon");return c(),i(l,null,[r,n("p",null,[n("a",d,[k,t(a)])]),v,n("p",null,[n("a",m,[h,t(a)])]),b,n("p",null,[n("a",f,[g,t(a)])]),x],64)}var w=e(u,[["render",y],["__file","express.html.vue"]]);export{w as default};