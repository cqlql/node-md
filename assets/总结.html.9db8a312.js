const e=JSON.parse('{"key":"v-2b1e1a6a","path":"/VUE/vuex/%E6%80%BB%E7%BB%93.html","title":"","lang":"zh-CN","frontmatter":{"summary":"\u8BF4\u660E; Store - Vuex \u7684\u5F00\u59CB; State - \u76F8\u5F53\u4E8E\u7EC4\u4EF6\u7684 data; \u8F85\u52A9\u51FD\u6570 mapState; mapState \u53C2\u6570\u662F\u5BF9\u8C61; mapState \u53C2\u6570\u662F\u6570\u7EC4\u3002\u5C5E\u6027\u540D\u4E0E\u5B50\u8282\u70B9\u540D\u76F8\u540C\u65F6\u4F7F\u7528; \u591A\u4E2A\u8BA1\u7B97\u5C5E\u6027\u60C5\u51B5\uFF0C\u5BF9\u8C61\u5C55\u5F00\u8FD0\u7B97\u7B26; \u9075\u5FAA Vue \u7684\u54CD\u5E94\u89C4\u5219; Getter - \u76F8\u5F53\u4E8E\u8BA1\u7B97\u5C5E\u6027; \u8F85\u52A9\u51FD\u6570 mapGetters; Mutation ","head":[["meta",{"property":"og:url","content":"http://docs.cqlql.top/VUE/vuex/%E6%80%BB%E7%BB%93.html"}],["meta",{"property":"og:site_name","content":"\u5F00\u53D1\u7B14\u8BB0"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-21T10:30:00.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-02-21T10:30:00.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E","link":"#\u8BF4\u660E","children":[]},{"level":2,"title":"Store - Vuex \u7684\u5F00\u59CB","slug":"store-vuex-\u7684\u5F00\u59CB","link":"#store-vuex-\u7684\u5F00\u59CB","children":[]},{"level":2,"title":"State - \u76F8\u5F53\u4E8E\u7EC4\u4EF6\u7684 data","slug":"state-\u76F8\u5F53\u4E8E\u7EC4\u4EF6\u7684-data","link":"#state-\u76F8\u5F53\u4E8E\u7EC4\u4EF6\u7684-data","children":[{"level":3,"title":"\u8F85\u52A9\u51FD\u6570 mapState","slug":"\u8F85\u52A9\u51FD\u6570-mapstate","link":"#\u8F85\u52A9\u51FD\u6570-mapstate","children":[]},{"level":3,"title":"mapState \u53C2\u6570\u662F\u5BF9\u8C61","slug":"mapstate-\u53C2\u6570\u662F\u5BF9\u8C61","link":"#mapstate-\u53C2\u6570\u662F\u5BF9\u8C61","children":[]},{"level":3,"title":"mapState \u53C2\u6570\u662F\u6570\u7EC4\u3002\u5C5E\u6027\u540D\u4E0E\u5B50\u8282\u70B9\u540D\u76F8\u540C\u65F6\u4F7F\u7528","slug":"mapstate-\u53C2\u6570\u662F\u6570\u7EC4\u3002\u5C5E\u6027\u540D\u4E0E\u5B50\u8282\u70B9\u540D\u76F8\u540C\u65F6\u4F7F\u7528","link":"#mapstate-\u53C2\u6570\u662F\u6570\u7EC4\u3002\u5C5E\u6027\u540D\u4E0E\u5B50\u8282\u70B9\u540D\u76F8\u540C\u65F6\u4F7F\u7528","children":[]},{"level":3,"title":"\u591A\u4E2A\u8BA1\u7B97\u5C5E\u6027\u60C5\u51B5\uFF0C\u5BF9\u8C61\u5C55\u5F00\u8FD0\u7B97\u7B26","slug":"\u591A\u4E2A\u8BA1\u7B97\u5C5E\u6027\u60C5\u51B5-\u5BF9\u8C61\u5C55\u5F00\u8FD0\u7B97\u7B26","link":"#\u591A\u4E2A\u8BA1\u7B97\u5C5E\u6027\u60C5\u51B5-\u5BF9\u8C61\u5C55\u5F00\u8FD0\u7B97\u7B26","children":[]},{"level":3,"title":"\u9075\u5FAA Vue \u7684\u54CD\u5E94\u89C4\u5219","slug":"\u9075\u5FAA-vue-\u7684\u54CD\u5E94\u89C4\u5219","link":"#\u9075\u5FAA-vue-\u7684\u54CD\u5E94\u89C4\u5219","children":[]}]},{"level":2,"title":"Getter - \u76F8\u5F53\u4E8E\u8BA1\u7B97\u5C5E\u6027","slug":"getter-\u76F8\u5F53\u4E8E\u8BA1\u7B97\u5C5E\u6027","link":"#getter-\u76F8\u5F53\u4E8E\u8BA1\u7B97\u5C5E\u6027","children":[{"level":3,"title":"\u8F85\u52A9\u51FD\u6570 mapGetters","slug":"\u8F85\u52A9\u51FD\u6570-mapgetters","link":"#\u8F85\u52A9\u51FD\u6570-mapgetters","children":[]}]},{"level":2,"title":"Mutation - \u4FEE\u6539 state\uFF0C\u53EA\u652F\u6301\u540C\u6B65","slug":"mutation-\u4FEE\u6539-state-\u53EA\u652F\u6301\u540C\u6B65","link":"#mutation-\u4FEE\u6539-state-\u53EA\u652F\u6301\u540C\u6B65","children":[{"level":3,"title":"\u7B80\u5355\u4F7F\u7528","slug":"\u7B80\u5355\u4F7F\u7528","link":"#\u7B80\u5355\u4F7F\u7528","children":[]},{"level":3,"title":"\u8F7D\u8377\u63D0\u4EA4\uFF08Payload\uFF09- \u4F20\u53C2","slug":"\u8F7D\u8377\u63D0\u4EA4-payload-\u4F20\u53C2","link":"#\u8F7D\u8377\u63D0\u4EA4-payload-\u4F20\u53C2","children":[]},{"level":3,"title":"\u5BF9\u8C61\u63D0\u4EA4","slug":"\u5BF9\u8C61\u63D0\u4EA4","link":"#\u5BF9\u8C61\u63D0\u4EA4","children":[]},{"level":3,"title":"mapMutations \u8F85\u52A9\u51FD\u6570","slug":"mapmutations-\u8F85\u52A9\u51FD\u6570","link":"#mapmutations-\u8F85\u52A9\u51FD\u6570","children":[]}]},{"level":2,"title":"Action - \u6269\u5C55 Mutation","slug":"action-\u6269\u5C55-mutation","link":"#action-\u6269\u5C55-mutation","children":[{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":3,"title":"\u8F85\u52A9\u51FD\u6570 mapActions","slug":"\u8F85\u52A9\u51FD\u6570-mapactions","link":"#\u8F85\u52A9\u51FD\u6570-mapactions","children":[]},{"level":3,"title":"\u7EC4\u5408 Action\u3001\u76F8\u4E92\u8C03\u7528\u3001\u652F\u6301 Promise","slug":"\u7EC4\u5408-action\u3001\u76F8\u4E92\u8C03\u7528\u3001\u652F\u6301-promise","link":"#\u7EC4\u5408-action\u3001\u76F8\u4E92\u8C03\u7528\u3001\u652F\u6301-promise","children":[]}]},{"level":2,"title":"Module - \u5C06 store \u5206\u5272\u6210\u6A21\u5757","slug":"module-\u5C06-store-\u5206\u5272\u6210\u6A21\u5757","link":"#module-\u5C06-store-\u5206\u5272\u6210\u6A21\u5757","children":[{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528-1","link":"#\u57FA\u672C\u4F7F\u7528-1","children":[]},{"level":3,"title":"getters\u3001mutations \u548C actions \u7684\u6A21\u5757\u65B9\u5F0F\u8C03\u7528\u5F00\u542F\uFF1B\u5D4C\u5957\u6A21\u5757\u793A\u4F8B","slug":"getters\u3001mutations-\u548C-actions-\u7684\u6A21\u5757\u65B9\u5F0F\u8C03\u7528\u5F00\u542F-\u5D4C\u5957\u6A21\u5757\u793A\u4F8B","link":"#getters\u3001mutations-\u548C-actions-\u7684\u6A21\u5757\u65B9\u5F0F\u8C03\u7528\u5F00\u542F-\u5D4C\u5957\u6A21\u5757\u793A\u4F8B","children":[]},{"level":3,"title":"\u53CD\u8FC7\u6765\uFF0C\u547D\u540D\u7A7A\u95F4\u518D\u6CE8\u518C\u5230\u5168\u5C40 action","slug":"\u53CD\u8FC7\u6765-\u547D\u540D\u7A7A\u95F4\u518D\u6CE8\u518C\u5230\u5168\u5C40-action","link":"#\u53CD\u8FC7\u6765-\u547D\u540D\u7A7A\u95F4\u518D\u6CE8\u518C\u5230\u5168\u5C40-action","children":[]},{"level":3,"title":"\u8F85\u52A9\u51FD\u6570\u7684\u6A21\u5757\u65B9\u5F0F\u8C03\u7528\u4EE5\u53CA\u7B80\u5316","slug":"\u8F85\u52A9\u51FD\u6570\u7684\u6A21\u5757\u65B9\u5F0F\u8C03\u7528\u4EE5\u53CA\u7B80\u5316","link":"#\u8F85\u52A9\u51FD\u6570\u7684\u6A21\u5757\u65B9\u5F0F\u8C03\u7528\u4EE5\u53CA\u7B80\u5316","children":[]},{"level":3,"title":"\u52A8\u6001\u6A21\u5757","slug":"\u52A8\u6001\u6A21\u5757","link":"#\u52A8\u6001\u6A21\u5757","children":[]},{"level":3,"title":"\u4E00\u4E2A\u6A21\u5757\u6CE8\u518C\u591A\u6B21\u91CD\u7528\u5904\u7406","slug":"\u4E00\u4E2A\u6A21\u5757\u6CE8\u518C\u591A\u6B21\u91CD\u7528\u5904\u7406","link":"#\u4E00\u4E2A\u6A21\u5757\u6CE8\u518C\u591A\u6B21\u91CD\u7528\u5904\u7406","children":[]}]},{"level":2,"title":"\u8FDB\u9636\u5185\u5BB9","slug":"\u8FDB\u9636\u5185\u5BB9","link":"#\u8FDB\u9636\u5185\u5BB9","children":[{"level":3,"title":"\u63D2\u4EF6","slug":"\u63D2\u4EF6","link":"#\u63D2\u4EF6","children":[]},{"level":3,"title":"\u4E25\u683C\u6A21\u5F0F","slug":"\u4E25\u683C\u6A21\u5F0F","link":"#\u4E25\u683C\u6A21\u5F0F","children":[]},{"level":3,"title":"\u8868\u5355\u5904\u7406 v-model \u95EE\u9898","slug":"\u8868\u5355\u5904\u7406-v-model-\u95EE\u9898","link":"#\u8868\u5355\u5904\u7406-v-model-\u95EE\u9898","children":[]}]}],"git":{"createdTime":1676975400000,"updatedTime":1676975400000,"contributors":[{"name":"\u9648\u6865\u9ECE","email":"cql.ql@qq.com","commits":1}]},"readingTime":{"minutes":7.87,"words":2360},"filePathRelative":"VUE/vuex/\u603B\u7ED3.md","localizedDate":"2023\u5E742\u670821\u65E5"}');export{e as data};
