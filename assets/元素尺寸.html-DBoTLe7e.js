import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a as t,e as l,o as n}from"./app-CFwNXmjV.js";const s={};function a(h,e){return n(),t("div",null,e[0]||(e[0]=[l(`<ul><li><a href="#%E9%AB%98%E5%AE%BD---%E7%B2%BE%E7%A1%AE">高宽 - 精确</a></li><li><a href="#%E9%AB%98%E5%AE%BD---%E6%97%A0%E6%B3%95%E7%B2%BE%E7%A1%AE%E5%88%B0%E5%B0%8F%E6%95%B0">高宽 - 无法精确到小数</a><ul><li><a href="#%E6%B1%87%E6%80%BB">汇总</a></li><li><a href="#clientheightclientwidth-%E5%B1%9E%E6%80%A7%E4%B8%8D%E5%8C%85%E6%8B%AC%E8%BE%B9%E6%A1%86-%E5%92%8C-%E6%BB%9A%E5%8A%A8%E6%9D%A1">clientHeight、clientWidth 属性——不包括边框 和 滚动条</a><ul><li><a href="#inline-%E5%85%83%E7%B4%A0%E4%B9%9F%E5%B0%86%E5%BE%97%E5%88%B0-0">inline 元素也将得到 0</a></li><li><a href="#%E6%8F%8F%E8%BF%B0">描述</a></li><li><a href="#%E8%BF%94%E5%9B%9E%E5%80%BCnumber-%E7%B1%BB%E5%9E%8B">返回值：Number 类型</a></li><li><a href="#%E5%85%BC%E5%AE%B9%E6%80%A7">兼容性：</a></li></ul></li><li><a href="#offsetheightoffsetwidth-%E5%B1%9E%E6%80%A7%E5%8C%85%E6%8B%AC%E8%BE%B9%E6%A1%86">offsetHeight、offsetWidth 属性——包括边框</a></li><li><a href="#scrollheightscrollwidth-%E5%B1%9E%E6%80%A7%E5%86%85%E5%AE%B9%E9%AB%98%E5%AE%BD%E4%B8%8D%E5%8C%85%E6%8B%AC%E8%BE%B9%E6%A1%86">scrollHeight、scrollWidth 属性——内容高宽，不包括边框</a></li></ul></li><li><a href="#%E8%BE%B9%E6%A1%86%E5%AE%BD%E5%BA%A6">边框宽度</a></li></ul><h2 id="高宽-精确" tabindex="-1"><a class="header-anchor" href="#高宽-精确"><span>高宽 - 精确</span></a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect" target="_blank" rel="noopener noreferrer">let rectObject = Element.<strong>getBoundingClientRect</strong>()</a> - 元素尺寸坐标</p><p>--- 或者 ---</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle" target="_blank" rel="noopener noreferrer">let style = window.<strong>getComputedStyle</strong>(element, [pseudoElt]);</a> - 计算元素 css 值</p><blockquote><p>getComputedStyle 还能获取动画(transition、animation)过程中的 css 值(animation 未实际测试，待测)</p></blockquote><h2 id="高宽-无法精确到小数" tabindex="-1"><a class="header-anchor" href="#高宽-无法精确到小数"><span>高宽 - 无法精确到小数</span></a></h2><p>获取的是四舍五入的整数</p><h3 id="汇总" tabindex="-1"><a class="header-anchor" href="#汇总"><span>汇总</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1、元素窗口高宽：一般能对应 css(非auto情况) height、width 值</span></span>
<span class="line"><span>不包括边框 和 滚动条</span></span>
<span class="line"><span>clientHeight</span></span>
<span class="line"><span>clientWidth</span></span>
<span class="line"><span>包括边框</span></span>
<span class="line"><span>offsetHeight</span></span>
<span class="line"><span>offsetWidth</span></span>
<span class="line"><span>2、内容高宽：不包括边框 和 滚动条</span></span>
<span class="line"><span>scrollHeight</span></span>
<span class="line"><span>scrollWidth</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>都是只读属性</strong></p><p><strong>有几种情况将取不到值(即值为 0)：</strong></p><ol><li>样式 display 属性值 为 none</li><li>对象 被动态 创建后 并没有插入 html 中</li><li>操作的是内联元素</li></ol><h3 id="clientheight、clientwidth-属性——不包括边框-和-滚动条" tabindex="-1"><a class="header-anchor" href="#clientheight、clientwidth-属性——不包括边框-和-滚动条"><span>clientHeight、clientWidth 属性——不包括边框 和 滚动条</span></a></h3><p>以下 clientWH 简写指 clientHeight、clientWidth</p><h4 id="inline-元素也将得到-0" tabindex="-1"><a class="header-anchor" href="#inline-元素也将得到-0"><span>inline 元素也将得到 0</span></a></h4><p>使用 inline-block 解决</p><p>offsetWidth、offsetHeight 没有这个问题</p><p>兼容情况待测</p><h4 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h4><p>不包括边框、滚动条包括 padding ，也就是从 padding 开始</p><h4 id="返回值-number-类型" tabindex="-1"><a class="header-anchor" href="#返回值-number-类型"><span>返回值：Number 类型</span></a></h4><h4 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性"><span>兼容性：</span></a></h4><p>**ie6\\7 有问题：**ie6\\7 中，如果元素的 css 高宽为 auto 时，获取到的是 0。html、body 元素没问题</p><p><strong>ie6\\7 问题解决办法：</strong><br> 需要获取元素高宽时，都是为了获取 与 css 高宽等价的值。可以通过下面的 offset 属性获取。<br> 如，offsetWidth(元素实质宽)-clientLeft*2(边框一般有左右宽，所以乘 2) 即可获取 css 宽度，且兼容所有浏览器</p><p><strong>与 css width 关系</strong><br> 一般情况下等同 css 的 width，以下列出两种例外</p><ol><li>设置了 box-sizing: border-box 后，此种情况下，css width 包括了 边框，js clientWH 依然不包括边框</li><li>display: none 情况，js clientWH 将固定取都 0</li></ol><h3 id="offsetheight、offsetwidth-属性——包括边框" tabindex="-1"><a class="header-anchor" href="#offsetheight、offsetwidth-属性——包括边框"><span>offsetHeight、offsetWidth 属性——包括边框</span></a></h3><p>不包括 margin，也就是从边框外边起始</p><p>返回值：Number 类型</p><p>兼容性：所有浏览器。强调，ie6\\7 没有上述 client 属性的问题</p><h3 id="scrollheight、scrollwidth-属性——内容高宽-不包括边框" tabindex="-1"><a class="header-anchor" href="#scrollheight、scrollwidth-属性——内容高宽-不包括边框"><span>scrollHeight、scrollWidth 属性——内容高宽，不包括边框</span></a></h3><p>包括 padding，即从边框内边起始</p><p>元素内容高度：元素显示高度+元素最大滚动高度(即被隐藏的高度)</p><p>overflow: hidden/auto 情况下用来获取元素内容高宽这种情况 client、offset 都只能取到显示高宽</p><p>ie6 不建议使用：<br> ie6 虽然支持，但是很怪异，似乎跟字体大小行高都有关系。而且如果直接在 body 下面执行 scrollHeight，即同步文档执行，取到的值几乎等同容器高度。异步延后执行又对了，估计同步情况页面都没渲染出来吧，所以取不到</p><h2 id="边框宽度" tabindex="-1"><a class="header-anchor" href="#边框宽度"><span>边框宽度</span></a></h2><p>或者说是从 padding 到 margin 的距离。。。<br><strong>只能获取 左上 两边边框宽度</strong><br> clientLeft 左、clientTop 上</p><p><strong>只读属性</strong></p><p>有几种情况将取不到值(即值为 0)：</p><ol><li>样式 display 属性值 为 none</li><li>对象 被动态 创建后 并没有插入 html 中</li><li>操作的是内联元素</li></ol><p><strong>兼容性：</strong> 包括 ie6 的所有</p><p><strong>ie6\\7 特殊情况：</strong><br> 目标元素 css 高宽造成 获取的 clientLeft、clientTop 值有误当目标元素的 css 高宽值 都为 auto 时，获取到的是 0。解决办法，在 ie6\\7 中，最好给元素的高宽设置具体值</p>`,43)]))}const d=i(s,[["render",a],["__file","元素尺寸.html.vue"]]),c=JSON.parse('{"path":"/old__/01_js-dom-webapis/%E5%85%83%E7%B4%A0%E5%B0%BA%E5%AF%B8.html","title":"","lang":"zh-CN","frontmatter":{"description":"高宽 - 精确 高宽 - 无法精确到小数 汇总 clientHeight、clientWidth 属性——不包括边框 和 滚动条 inline 元素也将得到 0 描述 返回值：Number 类型 兼容性： offsetHeight、offsetWidth 属性——包括边框 scrollHeight、scrollWidth 属性——内容高宽，不包括边框 ...","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/old__/01_js-dom-webapis/%E5%85%83%E7%B4%A0%E5%B0%BA%E5%AF%B8.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"高宽 - 精确 高宽 - 无法精确到小数 汇总 clientHeight、clientWidth 属性——不包括边框 和 滚动条 inline 元素也将得到 0 描述 返回值：Number 类型 兼容性： offsetHeight、offsetWidth 属性——包括边框 scrollHeight、scrollWidth 属性——内容高宽，不包括边框 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T02:50:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T02:50:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T02:50:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"高宽 - 精确","slug":"高宽-精确","link":"#高宽-精确","children":[]},{"level":2,"title":"高宽 - 无法精确到小数","slug":"高宽-无法精确到小数","link":"#高宽-无法精确到小数","children":[{"level":3,"title":"汇总","slug":"汇总","link":"#汇总","children":[]},{"level":3,"title":"clientHeight、clientWidth 属性——不包括边框 和 滚动条","slug":"clientheight、clientwidth-属性——不包括边框-和-滚动条","link":"#clientheight、clientwidth-属性——不包括边框-和-滚动条","children":[]},{"level":3,"title":"offsetHeight、offsetWidth 属性——包括边框","slug":"offsetheight、offsetwidth-属性——包括边框","link":"#offsetheight、offsetwidth-属性——包括边框","children":[]},{"level":3,"title":"scrollHeight、scrollWidth 属性——内容高宽，不包括边框","slug":"scrollheight、scrollwidth-属性——内容高宽-不包括边框","link":"#scrollheight、scrollwidth-属性——内容高宽-不包括边框","children":[]}]},{"level":2,"title":"边框宽度","slug":"边框宽度","link":"#边框宽度","children":[]}],"git":{"createdTime":1652927496000,"updatedTime":1730083825000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":3.2,"words":959},"filePathRelative":"__old__/01_js-dom-webapis/元素尺寸.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<ul>\\n<li><a href=\\"#%E9%AB%98%E5%AE%BD---%E7%B2%BE%E7%A1%AE\\">高宽 - 精确</a></li>\\n<li><a href=\\"#%E9%AB%98%E5%AE%BD---%E6%97%A0%E6%B3%95%E7%B2%BE%E7%A1%AE%E5%88%B0%E5%B0%8F%E6%95%B0\\">高宽 - 无法精确到小数</a>\\n<ul>\\n<li><a href=\\"#%E6%B1%87%E6%80%BB\\">汇总</a></li>\\n<li><a href=\\"#clientheightclientwidth-%E5%B1%9E%E6%80%A7%E4%B8%8D%E5%8C%85%E6%8B%AC%E8%BE%B9%E6%A1%86-%E5%92%8C-%E6%BB%9A%E5%8A%A8%E6%9D%A1\\">clientHeight、clientWidth 属性——不包括边框 和 滚动条</a>\\n<ul>\\n<li><a href=\\"#inline-%E5%85%83%E7%B4%A0%E4%B9%9F%E5%B0%86%E5%BE%97%E5%88%B0-0\\">inline 元素也将得到 0</a></li>\\n<li><a href=\\"#%E6%8F%8F%E8%BF%B0\\">描述</a></li>\\n<li><a href=\\"#%E8%BF%94%E5%9B%9E%E5%80%BCnumber-%E7%B1%BB%E5%9E%8B\\">返回值：Number 类型</a></li>\\n<li><a href=\\"#%E5%85%BC%E5%AE%B9%E6%80%A7\\">兼容性：</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#offsetheightoffsetwidth-%E5%B1%9E%E6%80%A7%E5%8C%85%E6%8B%AC%E8%BE%B9%E6%A1%86\\">offsetHeight、offsetWidth 属性——包括边框</a></li>\\n<li><a href=\\"#scrollheightscrollwidth-%E5%B1%9E%E6%80%A7%E5%86%85%E5%AE%B9%E9%AB%98%E5%AE%BD%E4%B8%8D%E5%8C%85%E6%8B%AC%E8%BE%B9%E6%A1%86\\">scrollHeight、scrollWidth 属性——内容高宽，不包括边框</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E8%BE%B9%E6%A1%86%E5%AE%BD%E5%BA%A6\\">边框宽度</a></li>\\n</ul>"}');export{d as comp,c as data};
