import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,a as t,e,f as n,c as a,b as l,r as i}from"./app.3a3639af.js";const o={},d=l(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u4F7F\u7528\u547D\u4EE4\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># latest \u5C06\u5B89\u88C5\u6700\u65B0\u7248\uFF0C\u8FD8\u53EF\u4EE5\u5B89\u88C5\u5176\u4ED6\u7684 tag</span>
<span class="token function">docker</span> pull mysql:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=e("strong",null,"\u67E5\u627E\u5176\u4ED6 tag",-1),m={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},u=l(`<h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u8FDB\u5165 mysql \u5BB9\u5668\u73AF\u5883</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u521B\u5EFA mysql \u5BB9\u5668</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> some-mysql <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123123</span> <span class="token parameter variable">-d</span> mysql:latest

<span class="token comment"># \u5217\u51FA mysql \u5BB9\u5668 id</span>
<span class="token comment"># \u6B64\u547D\u4EE4\u4F1A\u5217\u51FA\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668ID</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># \u8FDB\u5165\u5BB9\u5668\uFF0C\u76F8\u5F53\u4E8E\u662F\u4E00\u4E2Alinux\u7CFB\u7EDF</span>
<span class="token comment"># \u5176\u4E2D 289cc00dc5ed \u4E3A mysql \u5BB9\u5668 id</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 289cc00dc5ed <span class="token function">bash</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>`,4),v={href:"https://hub.docker.com/_/mysql",target:"_blank",rel:"noopener noreferrer"};function h(b,k){const s=i("ExternalLinkIcon");return r(),t("div",null,[d,e("p",null,[p,n("\uFF1A\u53BB "),e("a",m,[n("\u7EBF\u4E0A\u4ED3\u5E93"),a(s)]),n(" \u641C\u7D22 mysql\uFF0C\u67E5\u770B\u53EF\u7528 tag\u3002\u6CE8\u610F OFFICIAL \u6807\u7B7E\u8868\u793A\u8FD9\u662F\u5B98\u65B9\u955C\u50CF\u3002")]),u,e("p",null,[e("a",v,[n("mysql - Official Image"),a(s)])])])}const g=c(o,[["render",h],["__file","02_docker \u73AF\u5883.html.vue"]]);export{g as default};
