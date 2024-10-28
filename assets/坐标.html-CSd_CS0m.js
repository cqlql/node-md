import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a as s,e as a,o as l}from"./app-CFwNXmjV.js";const n={};function t(r,e){return l(),s("div",null,e[0]||(e[0]=[a(`<ul><li><a href="#%E5%85%89%E6%A0%87%E8%A7%A6%E6%91%B8%E7%82%B9%E5%9D%90%E6%A0%87">光标、触摸点坐标</a><ul><li><a href="#%E6%89%80%E5%9C%A8%E5%85%83%E7%B4%A0-offsetx--offsety">所在元素: offsetX | offsetY</a></li><li><a href="#%E5%AE%9A%E4%BD%8D%E5%85%83%E7%B4%A0layerx--layery">定位元素：layerX \\ layerY</a></li><li><a href="#%E5%86%85%E5%AE%B9pagex--pagey">内容：pageX | pageY</a></li><li><a href="#%E6%98%BE%E7%A4%BAclientx-clienty">显示：clientX\\ clientY</a></li><li><a href="#%E6%98%BE%E7%A4%BA--%E5%86%85%E5%AE%B9--%E5%85%83%E7%B4%A0x--y">显示 | 内容 | 元素：x | y</a></li><li><a href="#%E5%B1%8F%E5%B9%95screenx--screeny">屏幕：screenX | screenY</a></li></ul></li><li><a href="#%E5%85%83%E7%B4%A0%E5%9D%90%E6%A0%87">元素坐标</a><ul><li><a href="#%E7%9B%B8%E5%AF%B9%E5%AE%9A%E4%BD%8D%E5%85%83%E7%B4%A0">相对定位元素</a></li><li><a href="#%E5%BA%94%E7%94%A8%E7%9B%B8%E5%AF%B9%E5%86%85%E5%AE%B9%E7%AA%97%E5%8F%A3">[应用]相对内容窗口</a></li><li><a href="#%E6%9D%BE%E5%BC%80%E4%BA%8B%E4%BB%B6%E5%9D%90%E6%A0%87%E6%9C%89%E6%B2%A1%E6%9C%89%E5%81%8F%E7%A7%BB">[松开事件]坐标有没有偏移</a></li><li><a href="#%E5%8F%96%E5%85%83%E7%B4%A0%E5%8C%BA%E5%9D%97%E5%9D%90%E6%A0%87%E5%B0%BA%E5%AF%B8">取元素区块坐标尺寸</a></li></ul></li><li><a href="#%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87">屏幕坐标</a><ul><li><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%AF%B9%E4%BA%8E-%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87">浏览器相对于 屏幕坐标</a></li><li><a href="#%E6%98%BE%E7%A4%BA%E7%AA%97%E5%8F%A3-%E7%9B%B8%E5%AF%B9%E4%BA%8E%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87">显示窗口 相对于屏幕坐标</a></li></ul></li></ul><h2 id="光标、触摸点坐标" tabindex="-1"><a class="header-anchor" href="#光标、触摸点坐标"><span>光标、触摸点坐标</span></a></h2><h3 id="所在元素-offsetx-offsety" tabindex="-1"><a class="header-anchor" href="#所在元素-offsetx-offsety"><span>所在元素: offsetX | offsetY</span></a></h3><p><strong>说明：</strong><br> 光标或者触摸点位于当前所在元素坐标获取<br> 强调：<br> 这个所在元素包括任意任何，定位的，无定位的元素。ie67 只包括定位元素</p><p><strong>兼容性：</strong><br> ie 全系列：边框内边 起始<br> Chrome\\Safari：边框外边 起始<br> Opera：外补丁内边<br> Firefox：不支持(新版火狐，39 版本支持)<br> ie7 的另外问题：元素有滚动条情况，将获取 边框内边起始距离 + 滚动条隐藏距离</p><h3 id="定位元素-layerx-layery" tabindex="-1"><a class="header-anchor" href="#定位元素-layerx-layery"><span>定位元素：layerX \\ layerY</span></a></h3><p><strong>说明：</strong><br> 相对于 当前所在元素往上最近的定位元素(包括当前所在元素)<br> 定位元素包括：absolute\\relative\\fixed,也包括 overflow 非 visible 值的元素<br> 往上都没有定位元素情况：浏览器内容窗口 起始</p><p>absolute\\relative 与 fixed 区别：起始位置<br> absolute\\relative ：边框外边起始<br> fixed：元素初始位置(滚动条在初始位置情况) 的边框外边起始<br> 总结：本质上 absolute\\relative 定位的元素一直都在初始位置上，某种意义上没有区别</p><p><strong>兼容性：</strong><br> ie6\\ie7\\ie8\\Opera：不支持</p><h3 id="内容-pagex-pagey" tabindex="-1"><a class="header-anchor" href="#内容-pagex-pagey"><span>内容：pageX | pageY</span></a></h3><p><strong>说明：</strong><br> 光标相对于内容区域坐标</p><p><strong>兼容性：</strong><br> ie6\\7\\8：不支持</p><p><strong>ie6\\7\\8 偏门 实现：</strong></p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">documentElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">scrollLeft</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">clientX</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">documentElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">scrollTop</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">clientY</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>应用：</strong></p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">onmousemove</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  e</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> e</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">event</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> pageX</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">pageX</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> undefined</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">documentElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">scrollLeft</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">clientX</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">pageX</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示-clientx-clienty" tabindex="-1"><a class="header-anchor" href="#显示-clientx-clienty"><span>显示：clientX\\ clientY</span></a></h3><p><strong>说明：</strong><br> 光标相对于显示区域坐标</p><p><strong>兼容性：</strong><br> 所有浏览器都支持<br> ie6\\7 有点问题：考虑黑边 的 2px。ie6 消掉黑边即可</p><h3 id="显示-内容-元素-x-y" tabindex="-1"><a class="header-anchor" href="#显示-内容-元素-x-y"><span>显示 | 内容 | 元素：x | y</span></a></h3><p>ie6\\ie7\\Safari\\Chrome\\Opera，固定是显示。另外 ie6\\7 考虑黑边<br> ie8，固定是内容<br> ie9，光标所在元素定位属性决定。absolute--内容，static\\fixed—显示，relative—所在元素<br> Firefox，不支持</p><h3 id="屏幕-screenx-screeny" tabindex="-1"><a class="header-anchor" href="#屏幕-screenx-screeny"><span>屏幕：screenX | screenY</span></a></h3><p>兼容性：所有浏览器</p><h2 id="元素坐标" tabindex="-1"><a class="header-anchor" href="#元素坐标"><span>元素坐标</span></a></h2><h3 id="相对定位元素" tabindex="-1"><a class="header-anchor" href="#相对定位元素"><span>相对定位元素</span></a></h3><p>offsetLeft offsetTop</p><p>取 相对于 定位父元素</p><p>td tr 等特殊元素 可能会是参照物</p><p>距离范围：自身边框外边——&gt;定位参照物边框内边<br> ie8\\Opera 在有参照元素的情况下，距离范围 不同：从边框外边起始——&gt;定位参照物 边框外边</p><p>一些固定取值为 0 的情况：</p><ol><li>样式 display 属性值 为 none</li><li>对象 被动态 创建后 并没有插入 html 中</li><li>操作的是内联元素</li></ol><p>body、html 的 offsetLeft offsetTop 不同浏览器会有差异，而且一般不会这么用，不讨论了</p><p><strong>transform 是否可通过 offsetLeft 获取？</strong><br> offsetLeft 只能获取 relative 或者 absolute 的 left top transform 可通过 getBoundingClientRect | getComputedStyle 获取</p><h3 id="应用-相对内容窗口" tabindex="-1"><a class="header-anchor" href="#应用-相对内容窗口"><span>[应用]相对内容窗口</span></a></h3><p>通过 offsetParent 实现<br> 可取 offsetLeft,offsetTop 值的 参照元素对象，循环便可得到 相对内容坐标了<br> 兼容性：包括 ie6 的所有</p><p><strong>fixed 的特殊性：</strong><br> offsetParent 固定返回 null</p><p>offsetTop 直接就能获取相对于视窗坐标，但只能是视窗，不考虑滚动条。</p><p>如果要获取相对于内容窗口坐标，需加上滚动条：<br> fixedElem.offsetTop + window.pageYOffset</p><h3 id="松开事件-坐标有没有偏移" tabindex="-1"><a class="header-anchor" href="#松开事件-坐标有没有偏移"><span>[松开事件]坐标有没有偏移</span></a></h3><p><strong>疑问：</strong><br> 惯性拖 松开后，是否与最后的移动值不同。<br><strong>结论：</strong><br> 点下是多少，松开时就是多少。<br> 由于 ie678 的实现方式不同，所以得的值不一样，但还是与最后的移动事件的值一致的(触摸也如此)。<br><strong>[速率计算] 总结：</strong><br> 速率计算，应考虑松开时的时间，以及最后移动的位置。不应考虑松开时的位置(因为没有意义)</p><p><strong>[移动松开]总结：</strong>(包括触摸)<br> 松开时光标坐标值并没有发生偏移。如果偏移了，那都得先触发移动事件</p><p><strong>最终总结：</strong><br> 松开事件没有发生坐标偏移。在发生偏移后，松开事件的坐标等于移动事件里面最后的坐标<br> 这里说的松开事件包括触摸松开</p><h3 id="取元素区块坐标尺寸" tabindex="-1"><a class="header-anchor" href="#取元素区块坐标尺寸"><span>取元素区块坐标尺寸</span></a></h3><p>这将获取精确的坐标，且支持 transform</p><p><strong>区块坐标尺寸说明</strong></p><p>xy 坐标： 相对于浏览器窗口坐标。 强调，此坐标不包含窗口滚动条卷去高度，也就是相当于： 相对内容窗口 Y 坐标-窗口滚动条卷去高度(window.pageYOffset)</p><p>尺寸： 元素所占面积，包括边框，不包括外补白</p><p>getBoundingClientRect：取当前元素所占区块对象，包括了尺寸和坐标。是整个元素所占的一个区块，只有一个</p><p>getClientRects：取当前元素所占的多个区块此情况一个元素会出现多个区块：某元素因文本过多而换行，一行一个区块</p><p><strong>兼容性：</strong> ie678 只有坐标，没有尺寸</p><h2 id="屏幕坐标" tabindex="-1"><a class="header-anchor" href="#屏幕坐标"><span>屏幕坐标</span></a></h2><h3 id="浏览器相对于-屏幕坐标" tabindex="-1"><a class="header-anchor" href="#浏览器相对于-屏幕坐标"><span>浏览器相对于 屏幕坐标</span></a></h3><p>Chrome 支持的写法<br> window.screenTop</p><p>ie9\\opera\\Chrome\\fox 支持的写法<br> window.screenY</p><h3 id="显示窗口-相对于屏幕坐标" tabindex="-1"><a class="header-anchor" href="#显示窗口-相对于屏幕坐标"><span>显示窗口 相对于屏幕坐标</span></a></h3><p>ie6789\\opera<br> window.screenTop</p>`,56)]))}const E=i(n,[["render",t],["__file","坐标.html.vue"]]),o=JSON.parse('{"path":"/old__/01_js-dom-webapis/%E5%9D%90%E6%A0%87.html","title":"","lang":"zh-CN","frontmatter":{"description":"光标、触摸点坐标 所在元素: offsetX | offsetY 定位元素：layerX \\\\ layerY 内容：pageX | pageY 显示：clientX\\\\ clientY 显示 | 内容 | 元素：x | y 屏幕：screenX | screenY 元素坐标 相对定位元素 [应用]相对内容窗口 [松开事件]坐标有没有偏移 取元素区块坐标尺寸...","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/old__/01_js-dom-webapis/%E5%9D%90%E6%A0%87.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"光标、触摸点坐标 所在元素: offsetX | offsetY 定位元素：layerX \\\\ layerY 内容：pageX | pageY 显示：clientX\\\\ clientY 显示 | 内容 | 元素：x | y 屏幕：screenX | screenY 元素坐标 相对定位元素 [应用]相对内容窗口 [松开事件]坐标有没有偏移 取元素区块坐标尺寸..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T02:50:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T02:50:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T02:50:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"光标、触摸点坐标","slug":"光标、触摸点坐标","link":"#光标、触摸点坐标","children":[{"level":3,"title":"所在元素: offsetX | offsetY","slug":"所在元素-offsetx-offsety","link":"#所在元素-offsetx-offsety","children":[]},{"level":3,"title":"定位元素：layerX \\\\ layerY","slug":"定位元素-layerx-layery","link":"#定位元素-layerx-layery","children":[]},{"level":3,"title":"内容：pageX | pageY","slug":"内容-pagex-pagey","link":"#内容-pagex-pagey","children":[]},{"level":3,"title":"显示：clientX\\\\ clientY","slug":"显示-clientx-clienty","link":"#显示-clientx-clienty","children":[]},{"level":3,"title":"显示 | 内容 | 元素：x | y","slug":"显示-内容-元素-x-y","link":"#显示-内容-元素-x-y","children":[]},{"level":3,"title":"屏幕：screenX | screenY","slug":"屏幕-screenx-screeny","link":"#屏幕-screenx-screeny","children":[]}]},{"level":2,"title":"元素坐标","slug":"元素坐标","link":"#元素坐标","children":[{"level":3,"title":"相对定位元素","slug":"相对定位元素","link":"#相对定位元素","children":[]},{"level":3,"title":"[应用]相对内容窗口","slug":"应用-相对内容窗口","link":"#应用-相对内容窗口","children":[]},{"level":3,"title":"[松开事件]坐标有没有偏移","slug":"松开事件-坐标有没有偏移","link":"#松开事件-坐标有没有偏移","children":[]},{"level":3,"title":"取元素区块坐标尺寸","slug":"取元素区块坐标尺寸","link":"#取元素区块坐标尺寸","children":[]}]},{"level":2,"title":"屏幕坐标","slug":"屏幕坐标","link":"#屏幕坐标","children":[{"level":3,"title":"浏览器相对于 屏幕坐标","slug":"浏览器相对于-屏幕坐标","link":"#浏览器相对于-屏幕坐标","children":[]},{"level":3,"title":"显示窗口 相对于屏幕坐标","slug":"显示窗口-相对于屏幕坐标","link":"#显示窗口-相对于屏幕坐标","children":[]}]}],"git":{"createdTime":1652927496000,"updatedTime":1730083825000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":4.77,"words":1430},"filePathRelative":"__old__/01_js-dom-webapis/坐标.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<ul>\\n<li><a href=\\"#%E5%85%89%E6%A0%87%E8%A7%A6%E6%91%B8%E7%82%B9%E5%9D%90%E6%A0%87\\">光标、触摸点坐标</a>\\n<ul>\\n<li><a href=\\"#%E6%89%80%E5%9C%A8%E5%85%83%E7%B4%A0-offsetx--offsety\\">所在元素: offsetX | offsetY</a></li>\\n<li><a href=\\"#%E5%AE%9A%E4%BD%8D%E5%85%83%E7%B4%A0layerx--layery\\">定位元素：layerX \\\\ layerY</a></li>\\n<li><a href=\\"#%E5%86%85%E5%AE%B9pagex--pagey\\">内容：pageX | pageY</a></li>\\n<li><a href=\\"#%E6%98%BE%E7%A4%BAclientx-clienty\\">显示：clientX\\\\ clientY</a></li>\\n<li><a href=\\"#%E6%98%BE%E7%A4%BA--%E5%86%85%E5%AE%B9--%E5%85%83%E7%B4%A0x--y\\">显示 | 内容 | 元素：x | y</a></li>\\n<li><a href=\\"#%E5%B1%8F%E5%B9%95screenx--screeny\\">屏幕：screenX | screenY</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E5%85%83%E7%B4%A0%E5%9D%90%E6%A0%87\\">元素坐标</a>\\n<ul>\\n<li><a href=\\"#%E7%9B%B8%E5%AF%B9%E5%AE%9A%E4%BD%8D%E5%85%83%E7%B4%A0\\">相对定位元素</a></li>\\n<li><a href=\\"#%E5%BA%94%E7%94%A8%E7%9B%B8%E5%AF%B9%E5%86%85%E5%AE%B9%E7%AA%97%E5%8F%A3\\">[应用]相对内容窗口</a></li>\\n<li><a href=\\"#%E6%9D%BE%E5%BC%80%E4%BA%8B%E4%BB%B6%E5%9D%90%E6%A0%87%E6%9C%89%E6%B2%A1%E6%9C%89%E5%81%8F%E7%A7%BB\\">[松开事件]坐标有没有偏移</a></li>\\n<li><a href=\\"#%E5%8F%96%E5%85%83%E7%B4%A0%E5%8C%BA%E5%9D%97%E5%9D%90%E6%A0%87%E5%B0%BA%E5%AF%B8\\">取元素区块坐标尺寸</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87\\">屏幕坐标</a>\\n<ul>\\n<li><a href=\\"#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%AF%B9%E4%BA%8E-%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87\\">浏览器相对于 屏幕坐标</a></li>\\n<li><a href=\\"#%E6%98%BE%E7%A4%BA%E7%AA%97%E5%8F%A3-%E7%9B%B8%E5%AF%B9%E4%BA%8E%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87\\">显示窗口 相对于屏幕坐标</a></li>\\n</ul>\\n</li>\\n</ul>"}');export{E as comp,o as data};
