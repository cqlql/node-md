import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a,e as n,o as l}from"./app-CFwNXmjV.js";const h={};function k(t,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h2 id="获取-post-请求参数" tabindex="-1"><a class="header-anchor" href="#获取-post-请求参数"><span>获取 post 请求参数</span></a></h2><p>控制器方法声明的参数就是 post 请求的参数</p><div class="language-cs line-numbers-mode" data-highlighter="shiki" data-ext="cs" data-title="cs" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">namespace</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> AppWebApi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Controllers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ApiController</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Route</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;[controller]&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Produces</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;application/json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> UserController</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ControllerBase</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">HttpPost</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Add&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)]</span></span>
<span class="line highlighted"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> APIResult</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">object</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">AddUser</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    Sql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Execute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;INSERT INTO db_user.user (username,password,nickname) VALUES (@name,@pwd,@nickname);&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">cmd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) =&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">      cmd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Parameters</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">AddWithValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">      cmd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Parameters</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">AddWithValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pwd&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">      cmd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Parameters</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">AddWithValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;nickname&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">nickname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">      cmd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ExecuteNonQuery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> APIResult</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Ok</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const d=i(h,[["render",k],["__file","03_请求参数.html.vue"]]),r=JSON.parse('{"path":"/DotNet/WebApi/03_%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0.html","title":"","lang":"zh-CN","frontmatter":{"description":"获取 post 请求参数 控制器方法声明的参数就是 post 请求的参数","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/DotNet/WebApi/03_%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"获取 post 请求参数 控制器方法声明的参数就是 post 请求的参数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-25T09:22:58.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-25T09:22:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-25T09:22:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"获取 post 请求参数","slug":"获取-post-请求参数","link":"#获取-post-请求参数","children":[]}],"git":{"createdTime":1663230538000,"updatedTime":1671960178000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":0.23,"words":70},"filePathRelative":"DotNet/WebApi/03_请求参数.md","localizedDate":"2022年9月15日","autoDesc":true,"excerpt":"<h2>获取 post 请求参数</h2>\\n<p>控制器方法声明的参数就是 post 请求的参数</p>\\n<div class=\\"language-cs line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"cs\\" data-title=\\"cs\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">namespace</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> AppWebApi</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Controllers</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">ApiController</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Route</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"[controller]\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Produces</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"application/json\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> class</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> UserController</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> : </span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">ControllerBase</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  [</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">HttpPost</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"Add\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)]</span></span>\\n<span class=\\"line highlighted\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">  public</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> APIResult</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">object</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; </span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Add</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">AddUser</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> user</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">    Sql</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Execute</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"INSERT INTO db_user.user (username,password,nickname) VALUES (@name,@pwd,@nickname);\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, (</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">cmd</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">) =&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">      cmd</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">Parameters</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">AddWithValue</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"name\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">user</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">username</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">      cmd</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">Parameters</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">AddWithValue</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"pwd\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">user</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">password</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">      cmd</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">Parameters</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">AddWithValue</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"nickname\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">user</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">nickname</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">      cmd</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">ExecuteNonQuery</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    });</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    return</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> APIResult</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Ok</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{d as comp,r as data};
