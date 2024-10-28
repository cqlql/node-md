import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a,e,o as t}from"./app-CFwNXmjV.js";const n={};function h(l,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h2 id="form-item-写法" tabindex="-1"><a class="header-anchor" href="#form-item-写法"><span>Form.Item 写法</span></a></h2><p><a href="https://link.segmentfault.com/?enc=gMAoRXE4SL2UcQuL0urc3w%3D%3D.w1UDu4zg9SSt7Z64MqMrkcGmNIcBEIexSu3e5fvqJ3MtIB9FgEUQqsFwnFIhbOd31ro9RXC7G9DhfADuurgACg%3D%3D" target="_blank" rel="noopener noreferrer">http://facebook.github.io/react/docs/jsx-in-depth.html</a></p><div class="language-jsx line-numbers-mode" data-highlighter="shiki" data-ext="jsx" data-title="jsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Form</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Checkbox</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;antd&#39;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Demo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Form.Item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Form.Item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  )</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="改变数组中某成员对象属性时-如何触发更新" tabindex="-1"><a class="header-anchor" href="#改变数组中某成员对象属性时-如何触发更新"><span>改变数组中某成员对象属性时，如何触发更新</span></a></h2><h2 id="hook-希望能够初始化一部分变量-而不是每次数据更新都重新初始化" tabindex="-1"><a class="header-anchor" href="#hook-希望能够初始化一部分变量-而不是每次数据更新都重新初始化"><span>hook 希望能够初始化一部分变量，而不是每次数据更新都重新初始化</span></a></h2><h2 id="属于-hook-自己的-data-在哪里" tabindex="-1"><a class="header-anchor" href="#属于-hook-自己的-data-在哪里"><span>属于 hook 自己的 data 在哪里？</span></a></h2><p>状态改变，hook 函数执行，useState 重新调用？？那状态被保存在哪里了？？</p><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h2><h2 id="只属于组件的属性方法" tabindex="-1"><a class="header-anchor" href="#只属于组件的属性方法"><span>只属于组件的属性方法</span></a></h2>`,9)]))}const r=i(n,[["render",h],["__file","问题.html.vue"]]),d=JSON.parse(`{"path":"/old__/reactjs/%E9%97%AE%E9%A2%98.html","title":"","lang":"zh-CN","frontmatter":{"description":"Form.Item 写法 http://facebook.github.io/react/docs/jsx-in-depth.html 改变数组中某成员对象属性时，如何触发更新 hook 希望能够初始化一部分变量，而不是每次数据更新都重新初始化 属于 hook 自己的 data 在哪里？ 状态改变，hook 函数执行，useState 重新调用？？那状...","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/old__/reactjs/%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"Form.Item 写法 http://facebook.github.io/react/docs/jsx-in-depth.html 改变数组中某成员对象属性时，如何触发更新 hook 希望能够初始化一部分变量，而不是每次数据更新都重新初始化 属于 hook 自己的 data 在哪里？ 状态改变，hook 函数执行，useState 重新调用？？那状..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T02:50:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T02:50:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T02:50:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"Form.Item 写法","slug":"form-item-写法","link":"#form-item-写法","children":[]},{"level":2,"title":"改变数组中某成员对象属性时，如何触发更新","slug":"改变数组中某成员对象属性时-如何触发更新","link":"#改变数组中某成员对象属性时-如何触发更新","children":[]},{"level":2,"title":"hook 希望能够初始化一部分变量，而不是每次数据更新都重新初始化","slug":"hook-希望能够初始化一部分变量-而不是每次数据更新都重新初始化","link":"#hook-希望能够初始化一部分变量-而不是每次数据更新都重新初始化","children":[]},{"level":2,"title":"属于 hook 自己的 data 在哪里？","slug":"属于-hook-自己的-data-在哪里","link":"#属于-hook-自己的-data-在哪里","children":[]},{"level":2,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[]},{"level":2,"title":"只属于组件的属性方法","slug":"只属于组件的属性方法","link":"#只属于组件的属性方法","children":[]}],"git":{"createdTime":1652927496000,"updatedTime":1730083825000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":0.42,"words":125},"filePathRelative":"__old__/reactjs/问题.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<h2>Form.Item 写法</h2>\\n<p><a href=\\"https://link.segmentfault.com/?enc=gMAoRXE4SL2UcQuL0urc3w%3D%3D.w1UDu4zg9SSt7Z64MqMrkcGmNIcBEIexSu3e5fvqJ3MtIB9FgEUQqsFwnFIhbOd31ro9RXC7G9DhfADuurgACg%3D%3D\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://facebook.github.io/react/docs/jsx-in-depth.html</a></p>\\n<div class=\\"language-jsx line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"jsx\\" data-title=\\"jsx\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> { </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">Form</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">Input</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">Button</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">Checkbox</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> } </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">from</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 'antd'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> Demo</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> () </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">=&gt;</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">  return</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> (</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Form.Item</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">      &lt;</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Input</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> /&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    &lt;/</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Form.Item</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  )</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{r as comp,d as data};
