import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as c,o,c as i,b as s,h as e,F as r,i as u,f as t}from"./app.820f11a3.js";const p={},l=u(`<p>\u6E90\u4F4D\u7F6E\uFF1A<code>/etc/apt/sources.list</code>, \u66F4\u6362\u524D\u5907\u4EFD\u3002\u5907\u4EFD\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> /etc/apt/sources.list /etc/apt/sources.list.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u56FD\u5185\u6E90\u955C\u50CF\u6E90\u5730\u5740</strong></p><p>\u963F\u91CC\u4E91\uFF1A https://mirrors.aliyun.com</p><p>\u7F51\u6613\u6E90\uFF1A http://mirrors.163.com</p><p>\u6E05\u534E\uFF1A https://mirrors.tuna.tsinghua.edu.cn</p><p>\u4E2D\u79D1\u5927\uFF1A(\u8FD9\u91CC\u6211\u4F7F\u7528) http://mirrors.ustc.edu.cn</p><p>ping \u4EE5\u4E0A\u670D\u52A1\u5668\uFF0C\u9009\u62E9\u5EF6\u65F6\u6700\u4F4E\u7684\u3002(ping \u7684\u65F6\u5019\u53BB\u6389 <code>http://</code> )</p><p><strong>\u68C0\u67E5\u6E90</strong></p><p>\u68C0\u67E5\u4EE5\u4E0A\u6E90\u5730\u5740\uFF0C\u5BF9\u6BD4\u539F\u59CB <code>/etc/apt/sources.list</code> \uFF0C\u770B\u6709\u6CA1\u6709\u5BF9\u5E94\u7684\u76EE\u5F55\u3002\u6BD4\u5982 <code>sources.list</code> \u4E2D\u7684 <code>deb http://cn.archive.ubuntu.com/ubuntu/ focal-updates main restricted</code> \u884C\uFF0C\u5BF9\u5E94\u7684\u6E05\u534E\u6E90\u5730\u5740\u662F <code>https://mirrors.tuna.tsinghua.edu.cn/ubuntu/dists/focal-updates</code>\u3002\u4E00\u822C\u53EA\u8981\u68C0\u67E5 dists \u4E2D\u6709\u6CA1\u5BF9\u5E94\u7684 focal \u5373\u53EF(\u6211\u8FD9\u91CC\u7684 ubuntu \u662F focal)</p><p><strong>\u6362\u6E90</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## \u66F4\u6362\u4E3A\u4E2D\u79D1\u5927\u955C\u50CF\u6E90 #####</span>
<span class="token comment"># \u8FD9\u91CC\u6211\u4F7F\u7528\u4E2D\u79D1\u5927\uFF0C\u6211\u8FD9\u8FB9\u5EF6\u65F6\u8F83\u4F4E\uFF0C\u800C\u4E14\u5F88\u7A33\u5B9A</span>
<span class="token comment"># \u66FF\u6362 cn.archive.ubuntu.com</span>
<span class="token function">sudo</span> <span class="token function">sed</span> -i <span class="token string">&#39;s/archive.ubuntu.com/mirrors.ustc.edu.cn/g&#39;</span> sources.list
<span class="token comment"># \u66FF\u6362 security.ubuntu.com</span>
<span class="token function">sudo</span> <span class="token function">sed</span> -i <span class="token string">&#39;s/security.ubuntu.com/mirrors.ustc.edu.cn/g&#39;</span> sources.list

<span class="token comment">## \u6216\u8005\u66F4\u6362\u4E3A\u6E05\u534E\u6E90 #####</span>
<span class="token function">sudo</span> <span class="token function">sed</span> -i <span class="token string">&#39;s/http:\\/\\/archive.ubuntu.com/https:\\/\\/mirrors.tuna.tsinghua.edu.cn/g&#39;</span> sources.list
<span class="token function">sudo</span> <span class="token function">sed</span> -i <span class="token string">&#39;s/http:\\/\\/security.ubuntu.com/https:\\/\\/mirrors.tuna.tsinghua.edu.cn/g&#39;</span> sources.list

<span class="token comment">## \uFF01\u6700\u540E\u6267\u884C\u547D\u4EE4</span>
<span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>`,13),d={href:"https://www.jianshu.com/p/5400722c369c",target:"_blank",rel:"noopener noreferrer"},m=t("Ubuntu | \u5BF9 sources.list \u7684\u603B\u7ED3"),h={href:"https://blog.csdn.net/u012308586/article/details/102953882",target:"_blank",rel:"noopener noreferrer"},v=t("ubuntu16.04 \u548C 18.04 \u66F4\u6362\u56FD\u5185\u6E90");function b(g,_){const n=c("ExternalLinkIcon");return o(),i(r,null,[l,s("p",null,[s("a",d,[m,e(n)])]),s("p",null,[s("a",h,[v,e(n)])])],64)}var x=a(p,[["render",b],["__file","\u66F4\u6362apt\u6E90.html.vue"]]);export{x as default};
