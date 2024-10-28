import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a,e,o as l}from"./app-BVuN8Jn5.js";const t={};function n(h,i){return l(),a("div",null,i[0]||(i[0]=[e(`<ul><li><a href="#%E6%89%8B%E5%8A%A8%E5%88%B7%E6%96%B0">手动刷新</a></li><li><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%88%A4%E6%96%AD">浏览器判断</a></li><li><a href="#%E4%BA%8B%E4%BB%B6---%E7%AA%97%E5%8F%A3%E9%9A%90%E8%97%8F%E6%98%BE%E7%A4%BA-visibility">事件 - 窗口隐藏显示 visibility</a></li><li><a href="#%E4%BA%8B%E4%BB%B6---%E7%AA%97%E5%8F%A3%E8%8E%B7%E7%84%A6%E5%A4%B1%E7%84%A6-focus">事件 - 窗口获焦失焦 focus</a></li><li><a href="#%E5%B0%BA%E5%AF%B8-%E6%98%BE%E7%A4%BA%E7%AA%97%E5%8F%A3">尺寸-显示窗口</a><ul><li><a href="#%E6%96%B9%E5%BC%8F-1%E7%9B%B4%E6%8E%A5%E9%80%9A%E8%BF%87-window-%E8%8E%B7%E5%8F%96%E8%BF%99%E5%BA%94%E8%AF%A5%E6%98%AF%E8%A2%AB%E8%AE%A4%E5%8F%AF%E7%9A%84%E6%96%B9%E5%BC%8F">方式 1：直接通过 window 获取，这应该是*<strong><em>被认可的方式</em></strong></a></li><li><a href="#%E6%96%B9%E5%BC%8F-2%E9%80%9A%E8%BF%87html%E5%85%83%E7%B4%A0%E7%9A%84-client%E5%85%BC%E5%AE%B9%E6%80%A7%E6%9C%80%E5%A5%BD">方式 2：通过<code>&lt;html&gt;</code>元素的 client，*<strong><em>兼容性最好</em></strong></a></li><li><a href="#%E6%96%B9%E5%BC%8F-3%E9%80%9A%E8%BF%87html%E5%85%83%E7%B4%A0%E7%9A%84-offset%E6%AC%A1%E6%96%B9%E6%A1%88%E4%B8%8D%E5%8F%AF%E5%8F%96">方式 3：通过<code>&lt;html&gt;</code>元素的 offset，次方案不可取</a></li></ul></li><li><a href="#%E7%BB%99%E6%98%BE%E7%A4%BA%E7%AA%97%E5%8F%A3%E8%AE%BE%E7%BD%AE%E8%83%8C%E6%99%AF">给显示窗口设置背景</a></li><li><a href="#ie67-%E9%9C%80%E9%80%9A%E8%BF%87-html-%E6%8E%A7%E5%88%B6">ie67 需通过 <code>&lt;html&gt;</code> 控制</a></li><li><a href="#%E5%B0%BA%E5%AF%B8-%E5%86%85%E5%AE%B9%E7%AA%97%E5%8F%A3-wh">尺寸-内容窗口 WH</a></li></ul><h2 id="手动刷新" tabindex="-1"><a class="header-anchor" href="#手动刷新"><span>手动刷新</span></a></h2><p>之前都是 <code>location.href=&quot;&quot;</code>，其实有直接的方法</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">reload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其它方式</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">history</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">location</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> location</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">assign</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">execCommand</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Refresh&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">navigate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">replace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">URL</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">href</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览器判断" tabindex="-1"><a class="header-anchor" href="#浏览器判断"><span>浏览器判断</span></a></h2><p>判断 ie</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">isie6789</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">documentMode</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">documentMode</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">alert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">!-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 判断是不是 ie678</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">alert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*@cc_on !@*/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//判断是不是ie</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有浏览器支持方式</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">navigator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">userAgent</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">navigator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">appVersion</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Chrome 1+</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> isChrome</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> !!</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">chrome</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> !!</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">chrome</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">webstore</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Firefox 1.0+</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> isFirefox</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;"> typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> InstallTrigger</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> !==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;undefined&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件-窗口隐藏显示-visibility" tabindex="-1"><a class="header-anchor" href="#事件-窗口隐藏显示-visibility"><span>事件 - 窗口隐藏显示 visibility</span></a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilityState" target="_blank" rel="noopener noreferrer">doc</a></p><p>包括 tabs 切换，不包括窗口失焦</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addEventListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;visibilitychange&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">visibilityState</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件-窗口获焦失焦-focus" tabindex="-1"><a class="header-anchor" href="#事件-窗口获焦失焦-focus"><span>事件 - 窗口获焦失焦 focus</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addEventListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;focus&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;focus&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="尺寸-显示窗口" tabindex="-1"><a class="header-anchor" href="#尺寸-显示窗口"><span>尺寸-显示窗口</span></a></h2><h3 id="方式-1-直接通过-window-获取-这应该是-被认可的方式" tabindex="-1"><a class="header-anchor" href="#方式-1-直接通过-window-获取-这应该是-被认可的方式"><span>方式 1：直接通过 window 获取，这应该是*<strong><em>被认可的方式</em></strong></span></a></h3><p>innerHeight 和 innerWidth</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">innerHeight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>兼容：ie9+、其他高级浏览器</p><h3 id="方式-2-通过-html-元素的-client-兼容性最好" tabindex="-1"><a class="header-anchor" href="#方式-2-通过-html-元素的-client-兼容性最好"><span>方式 2：通过<code>&lt;html&gt;</code>元素的 client，*<strong><em>兼容性最好</em></strong></span></a></h3><p>clientHeight、clientWidth</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">documentElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">clientHeight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>兼容：包括 ie6 的所有</p><p>其他疑虑(<strong>此疑虑可忽略</strong>，因为结果是 clientWH 绝对可正确获取 显示窗口高宽的):<br> 首先，clientHeight 取得尺寸值是不包括 padding，border 的，也就是从 padding 内边起始的<br> 假如给 html 设置 padding，border，html 的 clientHeight 值是否会受影响？<br> 答案是，只有 ie6 受 html border 宽度，padding 大小影响。其他浏览器不受影响，依然是完整的显示窗口高宽。但谁又会去设置 html 的 border，padding 呢，而且 ie 似乎已经淡出视野了，所以这个担心可忽略。当然，还是不要去控制 html 的 border padding</p><p>经过细测，上述说的只有 ie6 受影响不完全正确，ie8 也有影响，不过是一种固定的黑边(仔细看浏览器就会发现)，无法通过 css 去除，所以得到的值是真实的显示<code>窗口高宽 - 黑边4px</code>。<br> ie6 也有这种黑边，严格来说，ie6 中 是 得到的值 是 <code>窗口高宽 - (黑边4px + border + padding)</code><br> ie7 居然没有黑边...<br> 然而，定位元素是以这种黑边内边起始的，所以此问题依然忽略...</p><h3 id="方式-3-通过-html-元素的-offset-次方案不可取" tabindex="-1"><a class="header-anchor" href="#方式-3-通过-html-元素的-offset-次方案不可取"><span>方式 3：通过<code>&lt;html&gt;</code>元素的 offset，次方案不可取</span></a></h3><p>offsetHeight、offsetWidth<br> 兼容性：ie6~10 正确，而且 ie6、8 得到的高宽值终于包括了黑边，看似正确，反而造成了问题，因为上面说过，元素定位是以黑边内边起始。。。<br> ie11、其他高级，取得是内容窗口高宽...</p><h2 id="给显示窗口设置背景" tabindex="-1"><a class="header-anchor" href="#给显示窗口设置背景"><span>给显示窗口设置背景</span></a></h2><p>包括背景色，背景图片等等。<br> 通过 body 实现。<br> 兼容包括 ie6 的所有。<br> 此内容属于 css 范畴...<br> 窗口滚动条控制<br> 还是属于 css 范畴，但还是提一下</p><h2 id="ie67-需通过-html-控制" tabindex="-1"><a class="header-anchor" href="#ie67-需通过-html-控制"><span>ie67 需通过 <code>&lt;html&gt;</code> 控制</span></a></h2><p>其他 可同过 <code>&lt;html&gt;</code>，也可通过<code>&lt;body&gt;</code>，截止今天 2016.7，最新版 chrome 也是如此<br> 看来 &lt;html&gt;控制窗口滚动条兼容性最好啊，发现自己以前都是通过 <code>&lt;body&gt;</code>控制的...<br> 那么以后通过 html 控制？？</p><h2 id="尺寸-内容窗口-wh" tabindex="-1"><a class="header-anchor" href="#尺寸-内容窗口-wh"><span>尺寸-内容窗口 WH</span></a></h2><p>通过 body 获取即可，使用元素的获取方式:<strong>一般使用下面的方式 1 即可</strong></p><p>1、元素窗口高宽：一般能对应 css(非 auto 情况) height、width 值<br> 不包括边框 和 滚动条<br> document.body.clientHeight<br> document.body.clientWidth<br> 包括边框<br> document.body.offsetHeight<br> document.body.offsetWidth</p><p>不控制 body 高度情况，可得到准确的内容高度，否则只是 body 元素窗口高度。所以尽量不控制 body 高度，不过一般也不会控制。</p><p>兼容性：所有</p><p>2、元素内容高宽：不包括边框 和 滚动条<br> document.body.scrollHeight<br> document.body.scrollWidth</p><p>这种方式在内容少，即视窗高大于内容高的时候，可以得到视窗高度。<br> 而且在控制 body 高度的情况也能准确获取内容高</p><p>兼容性：ie67 不适用</p>`,43)]))}const r=s(t,[["render",n],["__file","浏览器.html.vue"]]),p=JSON.parse('{"path":"/old__/01_js-dom-webapis/%E6%B5%8F%E8%A7%88%E5%99%A8.html","title":"","lang":"zh-CN","frontmatter":{"description":"手动刷新 浏览器判断 事件 - 窗口隐藏显示 visibility 事件 - 窗口获焦失焦 focus 尺寸-显示窗口 方式 1：直接通过 window 获取，这应该是*被认可的方式 方式 2：通过<html>元素的 client，*兼容性最好 方式 3：通过<html>元素的 offset，次方案不可取 给显示窗口设置背景 ie67 需通过 <htm...","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/old__/01_js-dom-webapis/%E6%B5%8F%E8%A7%88%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"开发笔记"}],["meta",{"property":"og:description","content":"手动刷新 浏览器判断 事件 - 窗口隐藏显示 visibility 事件 - 窗口获焦失焦 focus 尺寸-显示窗口 方式 1：直接通过 window 获取，这应该是*被认可的方式 方式 2：通过<html>元素的 client，*兼容性最好 方式 3：通过<html>元素的 offset，次方案不可取 给显示窗口设置背景 ie67 需通过 <htm..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T03:11:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T03:11:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-28T03:11:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Joly\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"手动刷新","slug":"手动刷新","link":"#手动刷新","children":[]},{"level":2,"title":"浏览器判断","slug":"浏览器判断","link":"#浏览器判断","children":[]},{"level":2,"title":"事件 - 窗口隐藏显示 visibility","slug":"事件-窗口隐藏显示-visibility","link":"#事件-窗口隐藏显示-visibility","children":[]},{"level":2,"title":"事件 - 窗口获焦失焦 focus","slug":"事件-窗口获焦失焦-focus","link":"#事件-窗口获焦失焦-focus","children":[]},{"level":2,"title":"尺寸-显示窗口","slug":"尺寸-显示窗口","link":"#尺寸-显示窗口","children":[{"level":3,"title":"方式 1：直接通过 window 获取，这应该是*被认可的方式","slug":"方式-1-直接通过-window-获取-这应该是-被认可的方式","link":"#方式-1-直接通过-window-获取-这应该是-被认可的方式","children":[]},{"level":3,"title":"方式 2：通过<html>元素的 client，*兼容性最好","slug":"方式-2-通过-html-元素的-client-兼容性最好","link":"#方式-2-通过-html-元素的-client-兼容性最好","children":[]},{"level":3,"title":"方式 3：通过<html>元素的 offset，次方案不可取","slug":"方式-3-通过-html-元素的-offset-次方案不可取","link":"#方式-3-通过-html-元素的-offset-次方案不可取","children":[]}]},{"level":2,"title":"给显示窗口设置背景","slug":"给显示窗口设置背景","link":"#给显示窗口设置背景","children":[]},{"level":2,"title":"ie67 需通过 <html> 控制","slug":"ie67-需通过-html-控制","link":"#ie67-需通过-html-控制","children":[]},{"level":2,"title":"尺寸-内容窗口 WH","slug":"尺寸-内容窗口-wh","link":"#尺寸-内容窗口-wh","children":[]}],"git":{"createdTime":1652927496000,"updatedTime":1730085090000,"contributors":[{"name":"陈桥黎","email":"cql.ql@qq.com","commits":2}]},"readingTime":{"minutes":3.82,"words":1147},"filePathRelative":"__old__/01_js-dom-webapis/浏览器.md","localizedDate":"2022年5月19日","autoDesc":true,"excerpt":"<ul>\\n<li><a href=\\"#%E6%89%8B%E5%8A%A8%E5%88%B7%E6%96%B0\\">手动刷新</a></li>\\n<li><a href=\\"#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%88%A4%E6%96%AD\\">浏览器判断</a></li>\\n<li><a href=\\"#%E4%BA%8B%E4%BB%B6---%E7%AA%97%E5%8F%A3%E9%9A%90%E8%97%8F%E6%98%BE%E7%A4%BA-visibility\\">事件 - 窗口隐藏显示 visibility</a></li>\\n<li><a href=\\"#%E4%BA%8B%E4%BB%B6---%E7%AA%97%E5%8F%A3%E8%8E%B7%E7%84%A6%E5%A4%B1%E7%84%A6-focus\\">事件 - 窗口获焦失焦 focus</a></li>\\n<li><a href=\\"#%E5%B0%BA%E5%AF%B8-%E6%98%BE%E7%A4%BA%E7%AA%97%E5%8F%A3\\">尺寸-显示窗口</a>\\n<ul>\\n<li><a href=\\"#%E6%96%B9%E5%BC%8F-1%E7%9B%B4%E6%8E%A5%E9%80%9A%E8%BF%87-window-%E8%8E%B7%E5%8F%96%E8%BF%99%E5%BA%94%E8%AF%A5%E6%98%AF%E8%A2%AB%E8%AE%A4%E5%8F%AF%E7%9A%84%E6%96%B9%E5%BC%8F\\">方式 1：直接通过 window 获取，这应该是*<strong><em>被认可的方式</em></strong></a></li>\\n<li><a href=\\"#%E6%96%B9%E5%BC%8F-2%E9%80%9A%E8%BF%87html%E5%85%83%E7%B4%A0%E7%9A%84-client%E5%85%BC%E5%AE%B9%E6%80%A7%E6%9C%80%E5%A5%BD\\">方式 2：通过<code>&lt;html&gt;</code>元素的 client，*<strong><em>兼容性最好</em></strong></a></li>\\n<li><a href=\\"#%E6%96%B9%E5%BC%8F-3%E9%80%9A%E8%BF%87html%E5%85%83%E7%B4%A0%E7%9A%84-offset%E6%AC%A1%E6%96%B9%E6%A1%88%E4%B8%8D%E5%8F%AF%E5%8F%96\\">方式 3：通过<code>&lt;html&gt;</code>元素的 offset，次方案不可取</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E7%BB%99%E6%98%BE%E7%A4%BA%E7%AA%97%E5%8F%A3%E8%AE%BE%E7%BD%AE%E8%83%8C%E6%99%AF\\">给显示窗口设置背景</a></li>\\n<li><a href=\\"#ie67-%E9%9C%80%E9%80%9A%E8%BF%87-html-%E6%8E%A7%E5%88%B6\\">ie67 需通过 <code>&lt;html&gt;</code> 控制</a></li>\\n<li><a href=\\"#%E5%B0%BA%E5%AF%B8-%E5%86%85%E5%AE%B9%E7%AA%97%E5%8F%A3-wh\\">尺寸-内容窗口 WH</a></li>\\n</ul>"}');export{r as comp,p as data};
