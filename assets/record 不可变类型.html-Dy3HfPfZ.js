import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a,e as n,o as l}from"./app-BVuN8Jn5.js";const t={};function h(e,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h2 id="record-不可变类型" tabindex="-1"><a class="header-anchor" href="#record-不可变类型"><span>record 不可变类型</span></a></h2><p>使用 record class 描述不可变类型，是引用类型，class 关键字可以省略。</p><p>使用 record struct 描述不可变类型，是值类型。</p><p>仅仅只是语义而已。需要结合 init 使用，如果使用 set 依然还是可变的。</p><p>以下两个示例效果是一样的：</p><div class="language-cs line-numbers-mode" data-highlighter="shiki" data-ext="cs" data-title="cs" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 简写</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> record</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> FirstName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> LastName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cs line-numbers-mode" data-highlighter="shiki" data-ext="cs" data-title="cs" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 完整写法</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> record</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Person</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;"> FirstName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; } </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;"> LastName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; } </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="with" tabindex="-1"><a class="header-anchor" href="#with"><span>with</span></a></h3><p>复制对象，并且可使用对象初始化器初始化</p><p>只能复制 record 对象或者 struct 对象。</p><div class="language-cs line-numbers-mode" data-highlighter="shiki" data-ext="cs" data-title="cs" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> record</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Person</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">? </span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">FirstName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">? </span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">LastName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">? </span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">Address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">? </span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">City</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">? </span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">Country</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> john</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> new </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Person</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  City</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Hyderabad&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> joly</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> john</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> with { </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">City</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Bangalore&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WriteLine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">john</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Equals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">joly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// False</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WriteLine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">john</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">City</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Hyderabad</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WriteLine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">joly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">City</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Bangalore</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="init-only-不可变属性" tabindex="-1"><a class="header-anchor" href="#init-only-不可变属性"><span>init-only 不可变属性</span></a></h2><p>也可用于 class</p><div class="language-cs line-numbers-mode" data-highlighter="shiki" data-ext="cs" data-title="cs" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> DbMetadata</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;"> DbName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;"> DbType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">DbMetadata</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dbMetadata</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> new </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">DbMetadata</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  DbName</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Test&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  DbType</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Oracle&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 报错，不允许</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">dbMetadata</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">DbType</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;SQL Server&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><p><a href="https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/record" target="_blank" rel="noopener noreferrer">记录 - C# 参考 | Microsoft Learn</a></p>`,16)]))}const r=s(t,[["render",h],["__file","record 不可变类型.html.vue"]]),d=JSON.parse('{"path":"/DotNet-CSharp/%E7%B1%BB%E5%9E%8B/record%20%E4%B8%8D%E5%8F%AF%E5%8F%98%E7%B1%BB%E5%9E%8B.html","title":"","lang":"zh-CN","frontmatter":{"description":"record 不可变类型 使用 record class 描述不可变类型，是引用类型，class 关键字可以省略。 使用 record struct 描述不可变类型，是值类型。 仅仅只是语义而已。需要结合 init 使用，如果使用 set 依然还是可变的。 以下两个示例效果是一样的： with 复制对象，并且可使用对象初始化器初始化 只能复制 reco...","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/DotNet-CSharp/%E7%B1%BB%E5%9E%8B/record%20%E4%B8%8D%E5%8F%AF%E5%8F%98%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"record 不可变类型 使用 record class 描述不可变类型，是引用类型，class 关键字可以省略。 使用 record struct 描述不可变类型，是值类型。 仅仅只是语义而已。需要结合 init 使用，如果使用 set 依然还是可变的。 以下两个示例效果是一样的： with 复制对象，并且可使用对象初始化器初始化 只能复制 reco..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T02:25:15.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T02:25:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T02:25:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"record 不可变类型","slug":"record-不可变类型","link":"#record-不可变类型","children":[{"level":3,"title":"with","slug":"with","link":"#with","children":[]}]},{"level":2,"title":"init-only 不可变属性","slug":"init-only-不可变属性","link":"#init-only-不可变属性","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1669346568000,"updatedTime":1730082315000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":3}]},"readingTime":{"minutes":0.87,"words":260},"filePathRelative":"DotNet-CSharp/类型/record 不可变类型.md","localizedDate":"2022年11月25日","autoDesc":true,"excerpt":"<h2>record 不可变类型</h2>\\n<p>使用 record class 描述不可变类型，是引用类型，class 关键字可以省略。</p>\\n<p>使用 record struct 描述不可变类型，是值类型。</p>\\n<p>仅仅只是语义而已。需要结合 init 使用，如果使用 set 依然还是可变的。</p>\\n<p>以下两个示例效果是一样的：</p>\\n<div class=\\"language-cs line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"cs\\" data-title=\\"cs\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 简写</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> record</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Person</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">string</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> FirstName</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">string</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> LastName</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,d as data};
