import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a,e as n,o as l}from"./app-BVuN8Jn5.js";const e={};function h(t,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h2 id="示例-获取字段名称" tabindex="-1"><a class="header-anchor" href="#示例-获取字段名称"><span>示例：获取字段名称</span></a></h2><div class="language-cs line-numbers-mode" data-highlighter="shiki" data-ext="cs" data-title="cs" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> APIResult</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">? </span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">Message</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;"> Code</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">? </span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;">Result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">internal</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Program</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> apiResult</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> new </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">APIResult</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">object</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;() { </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Message</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Hello&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Code</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Result</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { } };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> t</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> apiResult</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">GetType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> props</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">GetProperties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Console.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WriteLine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(props[0].Name);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><p><a href="https://docs.microsoft.com/zh-cn/dotnet/framework/reflection-and-codedom/" target="_blank" rel="noopener noreferrer">.NET Framework 中的动态编程</a></p>`,4)]))}const r=i(e,[["render",h],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/DotNet/%E5%8F%8D%E5%B0%84-%E5%8A%A8%E6%80%81%E7%BC%96%E7%A8%8B/","title":"","lang":"zh-CN","frontmatter":{"description":"示例：获取字段名称 参考文档 .NET Framework 中的动态编程","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/DotNet/%E5%8F%8D%E5%B0%84-%E5%8A%A8%E6%80%81%E7%BC%96%E7%A8%8B/"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"示例：获取字段名称 参考文档 .NET Framework 中的动态编程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-09-06T14:53:07.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-06T14:53:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-09-06T14:53:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"示例：获取字段名称","slug":"示例-获取字段名称","link":"#示例-获取字段名称","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1662475987000,"updatedTime":1662475987000,"contributors":[{"name":"cqlql","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":0.23,"words":68},"filePathRelative":"DotNet/反射-动态编程/README.md","localizedDate":"2022年9月6日","autoDesc":true,"excerpt":"<h2>示例：获取字段名称</h2>\\n<div class=\\"language-cs line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"cs\\" data-title=\\"cs\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> class</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> APIResult</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">T</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">  public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> string</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">? </span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#ABB2BF\\">Message</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> { </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">get</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">; </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">set</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">; }</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">  public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> int</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#ABB2BF\\"> Code</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> { </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">get</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">; </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">set</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">; }</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">  public</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> T</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">? </span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#ABB2BF\\">Result</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> { </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">get</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">; </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">set</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">; }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">internal</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> class</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Program</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">    var</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> apiResult</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> new </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">APIResult</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">object</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;() { </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">Message</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"Hello\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">Code</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 200</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">Result</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> { } };</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">    var</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> t</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> apiResult</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">GetType</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">    var</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> props</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> t</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">GetProperties</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    Console.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">WriteLine</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(props[0].Name);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,d as data};