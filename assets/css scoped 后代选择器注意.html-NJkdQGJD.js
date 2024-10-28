import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a as e,e as a,o as i}from"./app-CFwNXmjV.js";const l={};function p(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>scoped 不会影响到子组件。<br> 所以，如果子组件css写在父组件css中，父组件使用scoped，css就会无效</p><p>这种转换结果看上去总觉得不够好</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.example span{</span></span>
<span class="line"><span>  color: red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;example&quot;&gt;</span></span>
<span class="line"><span>    &lt;span&gt;hi&lt;/span&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>.example span[data-v-f3f3eg9] {</span></span>
<span class="line"><span>  color: red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div data-v-4c878eb4=&quot;&quot; class=&quot;example&quot;&gt;&lt;span data-v-4c878eb4=&quot;&quot;&gt;hi&lt;/span&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=n(l,[["render",p],["__file","css scoped 后代选择器注意.html.vue"]]),o=JSON.parse('{"path":"/old__/06_vue/vue2/css%20scoped%20%E5%90%8E%E4%BB%A3%E9%80%89%E6%8B%A9%E5%99%A8%E6%B3%A8%E6%84%8F.html","title":"","lang":"zh-CN","frontmatter":{"description":"scoped 不会影响到子组件。 所以，如果子组件css写在父组件css中，父组件使用scoped，css就会无效 这种转换结果看上去总觉得不够好 转换结果：","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/old__/06_vue/vue2/css%20scoped%20%E5%90%8E%E4%BB%A3%E9%80%89%E6%8B%A9%E5%99%A8%E6%B3%A8%E6%84%8F.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"scoped 不会影响到子组件。 所以，如果子组件css写在父组件css中，父组件使用scoped，css就会无效 这种转换结果看上去总觉得不够好 转换结果："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T02:50:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T02:50:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T02:50:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[],"git":{"createdTime":1652927496000,"updatedTime":1730083825000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":0.31,"words":94},"filePathRelative":"__old__/06_vue/vue2/css scoped 后代选择器注意.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<p>scoped 不会影响到子组件。<br>\\n所以，如果子组件css写在父组件css中，父组件使用scoped，css就会无效</p>\\n<p>这种转换结果看上去总觉得不够好</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>&lt;style scoped&gt;</span></span>\\n<span class=\\"line\\"><span>.example span{</span></span>\\n<span class=\\"line\\"><span>  color: red;</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span>&lt;/style&gt;</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>&lt;template&gt;</span></span>\\n<span class=\\"line\\"><span>  &lt;div class=\\"example\\"&gt;</span></span>\\n<span class=\\"line\\"><span>    &lt;span&gt;hi&lt;/span&gt;</span></span>\\n<span class=\\"line\\"><span>  &lt;/div&gt;</span></span>\\n<span class=\\"line\\"><span>&lt;/template&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,o as data};
