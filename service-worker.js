if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>a(e,c),b={module:{uri:c},exports:i,require:r};s[c]=Promise.all(f.map((e=>b[e]||r(e)))).then((e=>(d(...e),i)))}}define(["./workbox-fa99c014"],(function(e){"use strict";e.setCacheNameDetails({prefix:"开发笔记"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.1f2559d2.js",revision:"0d3892651371fd2e20ff190b4c307e0c"},{url:"assets/404.html.0c8252b8.js",revision:"d64b20567ce888f90e08ec9acbdd81f9"},{url:"assets/404.html.31e19ab3.js",revision:"477b84bf37ca7030153fe6b45f196d7f"},{url:"assets/algolia 搜索部署.html.67a9d91e.js",revision:"a51c4580f4babb7d4f25ea2b3e958c15"},{url:"assets/algolia 搜索部署.html.cd17dbea.js",revision:"1bfaeaeb198b31449336f5d5f3e5a1bd"},{url:"assets/app.cd57d3e1.js",revision:"ce8d187646bc75320746b1fd8fe52d1d"},{url:"assets/apt 包管理.html.2780a957.js",revision:"3f75960ee58a12a2c88cf448be960bfa"},{url:"assets/apt 包管理.html.67fdafa7.js",revision:"3c511a0d9d8fc6d417346d0ff94eb06b"},{url:"assets/auto.esm.edfc11f4.js",revision:"3005710dc3beaf11158e79fe70a4c0aa"},{url:"assets/Blog.815dc1dc.js",revision:"a76a9a15c47832de6d4a053588d6fc14"},{url:"assets/build相关.html.43456dd0.js",revision:"575920f923c8fd36a31f9c5dff163f20"},{url:"assets/build相关.html.beaa0919.js",revision:"601341c3fc8c008d140caac49e590f26"},{url:"assets/class 类.html.e2e0f014.js",revision:"3eaa8c44e6b89f63b2f210fe731c3e74"},{url:"assets/class 类.html.ef965422.js",revision:"04075acaaa052306696bd98c08195820"},{url:"assets/CRUD 存储库.html.86b9a103.js",revision:"e5c092f5495b2ea3ca9dd30ffb60fdfd"},{url:"assets/CRUD 存储库.html.ca820984.js",revision:"c804c72aea9a15f74e18e12049025aa3"},{url:"assets/CRUD 手动.html.7f77bc2c.js",revision:"3159cb6dd876c83ab4f15b7965d7a68d"},{url:"assets/CRUD 手动.html.de01c65d.js",revision:"dd43c683eb1fa6e9a5aba15574e1aa02"},{url:"assets/DateTime 日期时间.html.bb6aa078.js",revision:"10563d02c41644806d319aec05deef0e"},{url:"assets/DateTime 日期时间.html.e92027db.js",revision:"603a1843bf3e9d70f788fd70d81efdc1"},{url:"assets/docker 介绍.html.608f8a96.js",revision:"c5d73e693d216c53901cadb80d17cb6f"},{url:"assets/docker 介绍.html.9ff9a057.js",revision:"a069df539d6fed1033002be7c2d8be56"},{url:"assets/Enumerable.html.8567d443.js",revision:"9a430b4e6bac1022fc256aa2c9f11365"},{url:"assets/Enumerable.html.ac5e7536.js",revision:"59ffbe55232da14357c331262151fbc3"},{url:"assets/express.html.b6e13d8f.js",revision:"ef2096fd1b456af1c122aae403ff7dd8"},{url:"assets/express.html.be571cc0.js",revision:"63bf0698c839afc77ed5c8da58fd74df"},{url:"assets/find 查找.html.29c65dff.js",revision:"86604092016259a8e629511e429a32d5"},{url:"assets/find 查找.html.2c67715c.js",revision:"016f2da820643a8251b51d4f0d3c5259"},{url:"assets/highlight.esm.9b852bc5.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/http.html.443bb444.js",revision:"773b30ec057c2a369fa68b664d1d4f10"},{url:"assets/http.html.f9d7d2aa.js",revision:"cdb3dedd0f0f359e8d7f5bb7e3eceed2"},{url:"assets/IEnumerable 类型.html.1d22e848.js",revision:"d227312701e05df8f0f44b53d91c0733"},{url:"assets/IEnumerable 类型.html.52384d46.js",revision:"e252df761a1ddf339ee093c978c82850"},{url:"assets/index.e1c5a3de.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.html.0454e45b.js",revision:"a2a0c39e983f10c52939da7ff428a261"},{url:"assets/index.html.0f983c08.js",revision:"98b4b92b961f93754f6fec33c5ad8f4d"},{url:"assets/index.html.1174fbbd.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.1331f6ca.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.14693c8e.js",revision:"e9264b24328bf5acb3743e5d7ba54a9d"},{url:"assets/index.html.180322cd.js",revision:"435084384acbdc02a919b5b4c971e9ed"},{url:"assets/index.html.1e315145.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.514b72a3.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.87cb881b.js",revision:"9c571f45169ecc3762f4dc4d89689ff2"},{url:"assets/index.html.89591745.js",revision:"e9cd46b34e74a0b30d0194eccfd11662"},{url:"assets/index.html.8d369fca.js",revision:"9f8a4e92215f68a92b35e6c9d949159d"},{url:"assets/index.html.c73d2264.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.cb71fd50.js",revision:"1cd299641156bc90cbff265677db2537"},{url:"assets/index.html.d5cc08ad.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.da6c3a69.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.ec0f90c4.js",revision:"229c548fc19354f18103fdc6fd456f53"},{url:"assets/Layout.6ac29b6f.js",revision:"24a2d372f436307b8b9ce7224f2f047a"},{url:"assets/markdown.esm.77e8db25.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/math.esm.cb9d4be3.js",revision:"cbf844f27edbc061c86ae840d70389f6"},{url:"assets/mermaid.esm.min.35088203.js",revision:"dff54a3d503ff2004c411be3e2992fc9"},{url:"assets/mysql.html.068a6dfd.js",revision:"ecef26aa7ed1ee0b6fc680bc869ae631"},{url:"assets/mysql.html.badd847f.js",revision:"6a7b3e71a00df4b24950adca43be7b11"},{url:"assets/node 实用模块.html.221b3468.js",revision:"8c4889d9388958f1080196729e505703"},{url:"assets/node 实用模块.html.40ebe1c5.js",revision:"bf6cd66cbffb09b724266e1df4852a9b"},{url:"assets/notes.esm.62c5f19d.js",revision:"eda65c99450fe02da90bde90cc614a56"},{url:"assets/path.html.34e0837f.js",revision:"f50f3708743ed192247c31353e33448c"},{url:"assets/path.html.f839d685.js",revision:"c1a9d377a2f6d0168a051f1f9df3d4b0"},{url:"assets/photoswipe.esm.2debdee5.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/Random 随机数.html.c740f18e.js",revision:"68470f64f40750072bf8fd7c64ac661f"},{url:"assets/Random 随机数.html.caffa6b5.js",revision:"ebed9886b025c2dd848e54bc3d2b926d"},{url:"assets/require 模块.html.4d8b95b5.js",revision:"c9604d5925e6da28dca8b8c763570348"},{url:"assets/require 模块.html.5610f723.js",revision:"80b24f54848d0e631c713dff485440dc"},{url:"assets/reveal.esm.41ec5d7f.js",revision:"f78a424fad98faac5d5ca8ebfbebe94b"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm.04894411.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/shell 快捷键.html.81179ddc.js",revision:"3883b6fab1200c007b873d90cc117541"},{url:"assets/shell 快捷键.html.cf961b46.js",revision:"4d7ef413c2e3f83231556584f6031ad8"},{url:"assets/SkipLink.6dce367d.js",revision:"7a30252c177574362c1a6a9ecd60a6c8"},{url:"assets/Slide.a9843762.js",revision:"ba47627dc6e49757cca6dfe0e7adc17c"},{url:"assets/sql.html.7debbe40.js",revision:"4dc7ea3715e95876dc5f0bc289854259"},{url:"assets/sql.html.98abd663.js",revision:"fb3dc9dbaf9dcf023ee22b8d2b3c1a99"},{url:"assets/style.13dc0503.css",revision:"3d804049af9bc9bc093f826f69aac9b5"},{url:"assets/win11 家庭版下安装 Ubuntu.html.d80423dc.js",revision:"c7a50edf4b80c5f8bf0b5f7f5131d7d2"},{url:"assets/win11 家庭版下安装 Ubuntu.html.f5db9e29.js",revision:"a16a343c29eca899bd77a163b424bd77"},{url:"assets/window 后台运行.html.8a6c8979.js",revision:"0c393519eb4f17d1dd2e95096ab0da18"},{url:"assets/window 后台运行.html.d0ffe87f.js",revision:"6e962d9eab755138c456ddf330556b99"},{url:"assets/zoom.esm.78977eba.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"assets/使用 dotnet watch 开发项目.html.0a82f693.js",revision:"1bf6e2444dcfbcea4d63c31fb67b6284"},{url:"assets/使用 dotnet watch 开发项目.html.52fb523c.js",revision:"486e2f5843ee4fb56cb03626a3f11c37"},{url:"assets/创建项目.html.13e108b6.js",revision:"9a54c66807207e801b5f588fbbc7a1c4"},{url:"assets/创建项目.html.1fd25942.js",revision:"8310eb9fad61aa77bdcc0c3ed43844af"},{url:"assets/包管理器 npm.html.3736887c.js",revision:"81d4a5464f844fb6a2d2237d7dd95bfe"},{url:"assets/包管理器 npm.html.ef793596.js",revision:"a5c802dbd8df83ca3fc1dd1e4c19538c"},{url:"assets/包管理器 yarn.html.9a349ae7.js",revision:"c625baeed94263e5602ffc2614610a31"},{url:"assets/包管理器 yarn.html.b564b15d.js",revision:"94de56b3e0b6944cd04bc6cb188fd267"},{url:"assets/安装.html.0d883655.js",revision:"c8476a31cfbe3c0a0b6bf3e4fdc6f414"},{url:"assets/安装.html.7cf60345.js",revision:"313a040b671abf4f552ba061b1cebbb0"},{url:"assets/常用.html.60df2cc1.js",revision:"f921d6db1a0fd17fff13191d80938cc1"},{url:"assets/常用.html.a7e29fe3.js",revision:"d721732700c9ca9d7cc760d8c50a7dd9"},{url:"assets/常用命令汇总.html.70e7ad3f.js",revision:"2fb2cbd2a778a0196f81a17b6a277150"},{url:"assets/常用命令汇总.html.89bbe4e7.js",revision:"57ab17d0653fc6903680386ffaa3c40a"},{url:"assets/开启 browerlink.html.29b0de11.js",revision:"82b341492200fb6e8e689c7d0d390a01"},{url:"assets/开启 browerlink.html.764b844e.js",revision:"784b57d83d5ddb61d137a65e679881df"},{url:"assets/批量导入.html.4396878e.js",revision:"f985e4904b4f4f7740ccb80b2a9647a8"},{url:"assets/批量导入.html.a2ac3b04.js",revision:"82a8b6e0f1f3f003277cd39da22de3a2"},{url:"assets/文件系统 - fs.html.3c7dbe48.js",revision:"84c3eb4532ec169f0aeb8de97264f94a"},{url:"assets/文件系统 - fs.html.c805c66d.js",revision:"4ce539315091d2a48764f5e5370e50e1"},{url:"assets/更换apt源.html.018db8d8.js",revision:"8df3359e3e3ed4ec53ecaaddf781ee03"},{url:"assets/更换apt源.html.a25a9cad.js",revision:"a99878396b80489bf5c32bbef6dabfc2"},{url:"assets/服务端部署.html.1b611813.js",revision:"7e1d567d8b96e2b65012f84932cc6a8b"},{url:"assets/服务端部署.html.8ae7600c.js",revision:"c8886df078d44f302c1c242a095c8c0d"},{url:"assets/用户管理.html.7c6d84d1.js",revision:"43e69bd00ee1110f5144913524bfe95b"},{url:"assets/用户管理.html.d8ae02ba.js",revision:"2cf7f4c5128935762285ba8fc26a210a"},{url:"assets/登录验证.html.72d50108.js",revision:"322bc0d8c95e713763c53a94304705f2"},{url:"assets/登录验证.html.7515c005.js",revision:"396460fbdc66bb28b1d2277775afa619"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"index.html",revision:"af0c25f352e6d1e0fc4bc6ba8fbbd37f"},{url:"404.html",revision:"0ff613b5cae314c514e16a4d3b51daef"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map