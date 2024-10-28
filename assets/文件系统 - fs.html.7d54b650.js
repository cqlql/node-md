const e={key:"v-97cd0428",path:"/nodejs/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%20-%20fs.html",title:"",lang:"zh-CN",frontmatter:{summary:"\u6587\u4EF6\u5217\u8868(\u5305\u62EC\u6587\u4EF6\u5939) \u539F\u751F readdir\uFF1A\u53EA\u80FD\u5F53\u524D\u76EE\u5F55\uFF0C\u4E0D\u5BFB\u627E\u4E0B\u7EA7 \u8BFB\u53D6\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u652F\u6301\u8FC7\u6EE4 \u4F7F\u7528 recursive-readdir\uFF0C\u4F46\u4E0D\u4F1A\u5217\u51FA\u6587\u4EF6\u5939 \u9700\u5217\u51FA\u6587\u4EF6\u5939\u4F7F\u7528\uFF1Areaddir-enhanced \u5224\u65AD\u662F\u4E0D\u662F[\u6587\u4EF6/\u76EE\u5F55] \u5F53\u7136\uFF0C\u4E5F\u53EF\u7528\u6765\u5224\u65AD\u6587\u4EF6\u76EE\u5F55\u662F\u5426\u5B58\u5728\uFF0C\u4F46\u4E0D\u63A8\u8350\u3002\u5224\u65AD\u662F\u5426\u5B58\u5728\uFF0C\u63A8\u8350\u7528 fs.access fs.stat \u7528\u6765\u83B7\u53D6\u6587",head:[["meta",{property:"og:url",content:"http://docs.cqlql.top/nodejs/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%20-%20fs.html"}],["meta",{property:"og:site_name",content:"\u5F00\u53D1\u7B14\u8BB0"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-05-19T02:31:36.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2022-05-19T02:31:36.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u6587\u4EF6\u5217\u8868(\u5305\u62EC\u6587\u4EF6\u5939)",slug:"\u6587\u4EF6\u5217\u8868-\u5305\u62EC\u6587\u4EF6\u5939",children:[{level:3,title:"\u539F\u751F readdir\uFF1A\u53EA\u80FD\u5F53\u524D\u76EE\u5F55\uFF0C\u4E0D\u5BFB\u627E\u4E0B\u7EA7",slug:"\u539F\u751F-readdir-\u53EA\u80FD\u5F53\u524D\u76EE\u5F55-\u4E0D\u5BFB\u627E\u4E0B\u7EA7",children:[]},{level:3,title:"\u8BFB\u53D6\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u652F\u6301\u8FC7\u6EE4",slug:"\u8BFB\u53D6\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6-\u652F\u6301\u8FC7\u6EE4",children:[]}]},{level:2,title:"\u5224\u65AD\u662F\u4E0D\u662F[\u6587\u4EF6/\u76EE\u5F55]",slug:"\u5224\u65AD\u662F\u4E0D\u662F-\u6587\u4EF6-\u76EE\u5F55",children:[]},{level:2,title:"\u5224\u65AD[\u6587\u4EF6/\u76EE\u5F55]\u662F\u5426\u5B58\u5728 - fs.access(path[, mode], callback)",slug:"\u5224\u65AD-\u6587\u4EF6-\u76EE\u5F55-\u662F\u5426\u5B58\u5728-fs-access-path-mode-callback",children:[]},{level:2,title:"\u5224\u65AD[\u6587\u4EF6/\u76EE\u5F55]\u662F\u5426\u5B58\u5728 - fs.exists(\u5F03\u7528)",slug:"\u5224\u65AD-\u6587\u4EF6-\u76EE\u5F55-\u662F\u5426\u5B58\u5728-fs-exists-\u5F03\u7528",children:[]},{level:2,title:"\u8BFB\u53D6\u6587\u4EF6 fs.readFile",slug:"\u8BFB\u53D6\u6587\u4EF6-fs-readfile",children:[]},{level:2,title:"\u6539\u540D(\u6587\u4EF6\u540D\uFF0C\u76EE\u5F55\u540D)",slug:"\u6539\u540D-\u6587\u4EF6\u540D-\u76EE\u5F55\u540D",children:[]},{level:2,title:"\u5220\u9664",slug:"\u5220\u9664",children:[{level:3,title:"\u6807\u51C6\u5220",slug:"\u6807\u51C6\u5220",children:[]},{level:3,title:"\u9012\u5F52\u5220\uFF1A\u7B2C\u4E09\u65B9\u6269\u5C55",slug:"\u9012\u5F52\u5220-\u7B2C\u4E09\u65B9\u6269\u5C55",children:[]}]},{level:2,title:"\u521B\u5EFA\u76EE\u5F55",slug:"\u521B\u5EFA\u76EE\u5F55",children:[]},{level:2,title:"\u5199/\u521B\u5EFA \u6587\u4EF6",slug:"\u5199-\u521B\u5EFA-\u6587\u4EF6",children:[]},{level:2,title:"copy",slug:"copy",children:[]},{level:2,title:"\u5E94\u7528",slug:"\u5E94\u7528",children:[{level:3,title:"\u521B\u5EFA\u4E00\u4E2A\u7A7A\u767D\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6",slug:"\u521B\u5EFA\u4E00\u4E2A\u7A7A\u767D\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6",children:[]}]}],git:{createdTime:1652927496e3,updatedTime:1652927496e3,contributors:[{name:"cqlql",email:"cql.ql@qq.com",commits:1}]},readingTime:{minutes:4.02,words:1207},filePathRelative:"nodejs/\u6587\u4EF6\u7CFB\u7EDF - fs.md"};export{e as data};
