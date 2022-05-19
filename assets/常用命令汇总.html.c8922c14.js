import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,c as t,b as e,h as r,F as l,f as n,i as d,o as c}from"./app.cf721f96.js";const o={},p=e("h2",{id:"\u8FDB\u7A0B\u3001\u7AEF\u53E3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8FDB\u7A0B\u3001\u7AEF\u53E3","aria-hidden":"true"},"#"),n(" \u8FDB\u7A0B\u3001\u7AEF\u53E3")],-1),u={href:"https://www.cnblogs.com/liuzhengliang/p/4609632.html",target:"_blank",rel:"noopener noreferrer"},v=n("Linux \u67E5\u770B\u7AEF\u53E3\u3001\u8FDB\u7A0B\u60C5\u51B5\u53CA kill \u8FDB\u7A0B"),m=d(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u8FDB\u7A0B\uFF0C\u8FC7\u6EE4 ssserver \u5173\u952E\u5B57</span>
<span class="token function">ps</span> -aux <span class="token operator">|</span> <span class="token function">grep</span> ssserver

<span class="token comment"># \u67E5\u770B\u7AEF\u53E3\uFF0C\u8FC7\u6EE4 27017 \u7684\u7AEF\u53E3</span>
<span class="token function">netstat</span> -lanp <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;27017&quot;</span>

<span class="token comment"># \u7ED3\u675F\u8FDB\u7A0B\u30021001 \u4E3A pid</span>
<span class="token function">kill</span> <span class="token number">1001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D netstat \u547D\u4EE4\u9700\u8981\u5B89\u88C5 <code>net-tools</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="tar-\u89E3\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#tar-\u89E3\u538B\u7F29" aria-hidden="true">#</a> tar \u89E3\u538B\u7F29</h2><p>\u4E0D\u540C\u7684\u6587\u4EF6\u7C7B\u578B\u53C2\u6570\u4E0D\u540C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xz -d node-v10.15.3.tar.xz
tar -xvf node-v10.15.3.tar
tar -xzvf node-v10.15.3.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B-ip" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B-ip" aria-hidden="true">#</a> \u67E5\u770B ip</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ifconfig -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8);function h(b,_){const s=i("ExternalLinkIcon");return c(),t(l,null,[p,e("p",null,[e("a",u,[v,r(s)])]),m],64)}var x=a(o,[["render",h],["__file","\u5E38\u7528\u547D\u4EE4\u6C47\u603B.html.vue"]]);export{x as default};
