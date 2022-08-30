(self["webpackChunkblog"]=self["webpackChunkblog"]||[]).push([[3851],{55820:function(e,n,t){"use strict";t.r(n);var l=t(67294),o=t(96089),c=t(65659),a=l.memo((e=>{e.demos;return l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"js---promise\u4f7f\u7528\u8be6\u89e31\u57fa\u672c\u6982\u5ff5\u4f7f\u7528\u4f18\u70b9"},l.createElement(o.AnchorLink,{to:"#js---promise\u4f7f\u7528\u8be6\u89e31\u57fa\u672c\u6982\u5ff5\u4f7f\u7528\u4f18\u70b9","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"JS - Promise\u4f7f\u7528\u8be6\u89e31\uff08\u57fa\u672c\u6982\u5ff5\u3001\u4f7f\u7528\u4f18\u70b9\uff09"),l.createElement("h2",{id:"\u4e00promises\u76f8\u5173\u6982\u5ff5"},l.createElement(o.AnchorLink,{to:"#\u4e00promises\u76f8\u5173\u6982\u5ff5","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e00\u3001promises\u76f8\u5173\u6982\u5ff5"),l.createElement("p",null,"promises \u7684\u6982\u5ff5\u662f\u7531 CommonJS \u5c0f\u7ec4\u7684\u6210\u5458\u5728 Promises/A \u89c4\u8303\u4e2d\u63d0\u51fa\u6765\u7684\u3002"),l.createElement("h3",{id:"1then\u65b9\u6cd5\u4ecb\u7ecd"},l.createElement(o.AnchorLink,{to:"#1then\u65b9\u6cd5\u4ecb\u7ecd","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"1.then()\u65b9\u6cd5\u4ecb\u7ecd"),l.createElement("p",null,"\u6839\u636e Promise/A \u89c4\u8303\uff0cpromise \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u53ea\u9700\u8981 then \u8fd9\u4e00\u4e2a\u65b9\u6cd5\u3002then \u65b9\u6cd5\u5e26\u6709\u5982\u4e0b\u4e09\u4e2a\u53c2\u6570\uff1a"),l.createElement("ul",null,l.createElement("li",null,"\u6210\u529f\u56de\u8c03"),l.createElement("li",null,"\u5931\u8d25\u56de\u8c03"),l.createElement("li",null,"\u524d\u8fdb\u56de\u8c03\uff08\u89c4\u8303\u6ca1\u6709\u8981\u6c42\u5305\u62ec\u524d\u8fdb\u56de\u8c03\u7684\u5b9e\u73b0\uff0c\u4f46\u662f\u5f88\u591a\u90fd\u5b9e\u73b0\u4e86\uff09\u3002")),l.createElement("p",null,"\u4e00\u4e2a\u5168\u65b0\u7684 promise \u5bf9\u8c61\u4ece\u6bcf\u4e2a then \u7684\u8c03\u7528\u4e2d\u8fd4\u56de\u3002"),l.createElement("h3",{id:"2promise\u5bf9\u8c61\u72b6\u6001"},l.createElement(o.AnchorLink,{to:"#2promise\u5bf9\u8c61\u72b6\u6001","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"2.Promise\u5bf9\u8c61\u72b6\u6001"),l.createElement("p",null,"Promise \u5bf9\u8c61\u4ee3\u8868\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\uff0c\u5176\u4e0d\u53d7\u5916\u754c\u5f71\u54cd\uff0c\u6709\u4e09\u79cd\u72b6\u6001\uff1a"),l.createElement("ul",null,l.createElement("li",null,"Pending\uff08\u8fdb\u884c\u4e2d\u3001\u672a\u5b8c\u6210\u7684\uff09"),l.createElement("li",null,"Resolved\uff08\u5df2\u5b8c\u6210\uff0c\u53c8\u79f0 Fulfilled\uff09"),l.createElement("li",null,"Rejected\uff08\u5df2\u5931\u8d25\uff09\u3002")),l.createElement("ol",null,l.createElement("li",null,"promise \u4ece\u672a\u5b8c\u6210\u7684\u72b6\u6001\u5f00\u59cb\uff0c\u5982\u679c\u6210\u529f\u5b83\u5c06\u4f1a\u662f\u5b8c\u6210\u6001\uff0c\u5982\u679c\u5931\u8d25\u5c06\u4f1a\u662f\u5931\u8d25\u6001\u3002"),l.createElement("li",null,"\u5f53\u4e00\u4e2a promise \u79fb\u52a8\u5230\u5b8c\u6210\u6001\uff0c\u6240\u6709\u6ce8\u518c\u5230\u5b83\u7684\u6210\u529f\u56de\u8c03\u5c06\u88ab\u8c03\u7528\uff0c\u800c\u4e14\u4f1a\u5c06\u6210\u529f\u7684\u7ed3\u679c\u503c\u4f20\u7ed9\u5b83\u3002\u53e6\u5916\uff0c\u4efb\u4f55\u6ce8\u518c\u5230 promise \u7684\u6210\u529f\u56de\u8c03\uff0c\u5c06\u4f1a\u5728\u5b83\u5df2\u7ecf\u5b8c\u6210\u4ee5\u540e\u7acb\u5373\u88ab\u8c03\u7528\u3002"),l.createElement("li",null,"\u540c\u6837\u7684\uff0c\u5f53\u4e00\u4e2a promise \u79fb\u52a8\u5230\u5931\u8d25\u6001\u7684\u65f6\u5019\uff0c\u5b83\u8c03\u7528\u7684\u662f\u5931\u8d25\u56de\u8c03\u800c\u4e0d\u662f\u6210\u529f\u56de\u8c03\u3002"),l.createElement("li",null,"\u5bf9\u5305\u542b\u524d\u8fdb\u7279\u6027\u7684\u5b9e\u73b0\u6765\u8bf4\uff0cpromise \u5728\u5b83\u79bb\u5f00\u672a\u5b8c\u6210\u72b6\u6001\u4ee5\u524d\u7684\u4efb\u4f55\u65f6\u523b\uff0c\u90fd\u53ef\u4ee5\u66f4\u65b0\u5b83\u7684 progress\u3002\u5f53 progress \u88ab\u66f4\u65b0\uff0c\u6240\u6709\u7684\u524d\u8fdb\u56de\u8c03(progress callbacks)\u4f1a\u88ab\u4f20\u9012\u4ee5 progress \u7684\u503c\uff0c\u5e76\u88ab\u7acb\u5373\u8c03\u7528\u3002\u524d\u8fdb\u56de\u8c03\u88ab\u4ee5\u4e0d\u540c\u4e8e\u6210\u529f\u548c\u5931\u8d25\u56de\u8c03\u7684\u65b9\u5f0f\u5904\u7406\uff1b\u5982\u679c\u4f60\u5728\u4e00\u4e2a progress \u66f4\u65b0\u5df2\u7ecf\u53d1\u751f\u4ee5\u540e\u6ce8\u518c\u4e86\u4e00\u4e2a\u524d\u8fdb\u56de\u8c03\uff0c\u65b0\u7684\u524d\u8fdb\u56de\u8c03\u53ea\u4f1a\u5728\u5b83\u88ab\u6ce8\u518c\u4ee5\u540e\u88ab\u5df2\u66f4\u65b0\u7684 progress \u8c03\u7528\u3002"),l.createElement("li",null,"\u6ce8\u610f\uff1a\u53ea\u6709\u5f02\u6b65\u64cd\u4f5c\u7684\u7ed3\u679c\uff0c\u53ef\u4ee5\u51b3\u5b9a\u5f53\u524d\u662f\u54ea\u4e00\u79cd\u72b6\u6001\uff0c\u4efb\u4f55\u5176\u4ed6\u64cd\u4f5c\u90fd\u65e0\u6cd5\u6539\u53d8\u8fd9\u4e2a\u72b6\u6001\u3002")),l.createElement("h3",{id:"3promisea\u89c4\u8303\u56fe\u89e3"},l.createElement(o.AnchorLink,{to:"#3promisea\u89c4\u8303\u56fe\u89e3","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"3.Promise/A\u89c4\u8303\u56fe\u89e3"),l.createElement("p",null,l.createElement("img",{src:"https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/2022-03-08-17-50-18.png",alt:"\u56fe 1"})),l.createElement("h3",{id:"4\u76ee\u524d\u652f\u6301promisesa\u89c4\u8303\u7684\u5e93"},l.createElement(o.AnchorLink,{to:"#4\u76ee\u524d\u652f\u6301promisesa\u89c4\u8303\u7684\u5e93","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"4.\u76ee\u524d\u652f\u6301Promises/A\u89c4\u8303\u7684\u5e93"),l.createElement("ul",null,l.createElement("li",null,"Q\uff1a\u53ef\u4ee5\u5728NodeJS \u4ee5\u53ca\u6d4f\u89c8\u5668\u4e0a\u5de5\u4f5c\uff0c\u4e0ejQuery\u517c\u5bb9\uff0c\u53ef\u4ee5\u901a\u8fc7\u6d88\u606f\u4f20\u9012\u8fdc\u7a0b\u5bf9\u8c61\u3002"),l.createElement("li",null,"RSVP.js\uff1a\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u5e93\uff0c\u5b83\u63d0\u4f9b\u4e86\u7ec4\u7ec7\u5f02\u6b65\u4ee3\u7801\u7684\u5de5\u5177\u3002"),l.createElement("li",null,"when.js\uff1a\u4f53\u79ef\u5c0f\u5de7\uff0c\u4f7f\u7528\u65b9\u4fbf\u3002"),l.createElement("li",null,"NodeJS\u7684Promise"),l.createElement("li",null,"jQuery 1.5\uff1a\u636e\u8bf4\u662f\u57fa\u4e8e\u201cCommonJS Promises/A\u201d\u89c4\u8303"),l.createElement("li",null,"WinJS / Windows 8 / Metro")),l.createElement("h2",{id:"\u4e8c\u4f7f\u7528promises\u7684\u4f18\u52bf"},l.createElement(o.AnchorLink,{to:"#\u4e8c\u4f7f\u7528promises\u7684\u4f18\u52bf","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e8c\u3001\u4f7f\u7528promises\u7684\u4f18\u52bf"),l.createElement("h3",{id:"1\u89e3\u51b3\u56de\u8c03\u5730\u72f1callback-hell\u95ee\u9898"},l.createElement(o.AnchorLink,{to:"#1\u89e3\u51b3\u56de\u8c03\u5730\u72f1callback-hell\u95ee\u9898","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"1.\u89e3\u51b3\u56de\u8c03\u5730\u72f1\uff08Callback Hell\uff09\u95ee\u9898"),l.createElement("ol",null,l.createElement("li",null,"\u6709\u65f6\u6211\u4eec\u8981\u8fdb\u884c\u4e00\u4e9b\u76f8\u4e92\u95f4\u6709\u4f9d\u8d56\u5173\u7cfb\u7684\u5f02\u6b65\u64cd\u4f5c\uff0c\u6bd4\u5982\u6709\u591a\u4e2a\u8bf7\u6c42\uff0c\u540e\u4e00\u4e2a\u7684\u8bf7\u6c42\u9700\u8981\u4e0a\u4e00\u6b21\u8bf7\u6c42\u7684\u8fd4\u56de\u7ed3\u679c\u3002\u8fc7\u53bb\u5e38\u89c4\u505a\u6cd5\u53ea\u80fd callback \u5c42\u5c42\u5d4c\u5957\uff0c\u4f46\u5d4c\u5957\u5c42\u6570\u8fc7\u591a\u7684\u8bdd\u5c31\u4f1a\u6709 callback hell \u95ee\u9898\u3002\u6bd4\u5982\u4e0b\u9762\u4ee3\u7801\uff0c\u53ef\u8bfb\u6027\u548c\u7ef4\u62a4\u6027\u90fd\u5f88\u5dee\u7684\u3002")),l.createElement(c.Z,{code:"firstAsync(function(data){\n    //\u5904\u7406\u5f97\u5230\u7684 data \u6570\u636e\n    //....\n    secondAsync(function(data2){\n        //\u5904\u7406\u5f97\u5230\u7684 data2 \u6570\u636e\n        //....\n        thirdAsync(function(data3){\n              //\u5904\u7406\u5f97\u5230\u7684 data3 \u6570\u636e\n              //....\n        });\n    });\n});",lang:"js"}),l.createElement("ol",{start:2},l.createElement("li",null,"\u5982\u679c\u4f7f\u7528 promises \u7684\u8bdd\uff0c\u4ee3\u7801\u5c31\u4f1a\u53d8\u5f97\u6241\u5e73\u4e14\u66f4\u53ef\u8bfb\u4e86\u3002\u524d\u9762\u63d0\u5230 then \u8fd4\u56de\u4e86\u4e00\u4e2a promise\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5c06 then \u7684\u8c03\u7528\u4e0d\u505c\u5730\u4e32\u8fde\u8d77\u6765\u3002\u5176\u4e2d then \u8fd4\u56de\u7684 promise \u88c5\u8f7d\u4e86\u7531\u8c03\u7528\u8fd4\u56de\u7684\u503c\u3002")),l.createElement(c.Z,{code:"firstAsync()\n.then(function(data){\n    //\u5904\u7406\u5f97\u5230\u7684 data \u6570\u636e\n    //....\n    return secondAsync();\n})\n.then(function(data2){\n    //\u5904\u7406\u5f97\u5230\u7684 data2 \u6570\u636e\n    //....\n    return thirdAsync();\n})\n.then(function(data3){\n    //\u5904\u7406\u5f97\u5230\u7684 data3 \u6570\u636e\n    //....\n});",lang:"js"}),l.createElement("h3",{id:"2\u66f4\u597d\u5730\u8fdb\u884c\u9519\u8bef\u6355\u83b7"},l.createElement(o.AnchorLink,{to:"#2\u66f4\u597d\u5730\u8fdb\u884c\u9519\u8bef\u6355\u83b7","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"2.\u66f4\u597d\u5730\u8fdb\u884c\u9519\u8bef\u6355\u83b7"),l.createElement("p",null,"\u591a\u91cd\u5d4c\u5957 callback \u9664\u4e86\u4f1a\u9020\u6210\u4e0a\u9762\u8bb2\u7684\u4ee3\u7801\u7f29\u8fdb\u95ee\u9898\uff0c\u66f4\u53ef\u6015\u7684\u662f\u53ef\u80fd\u4f1a\u9020\u6210\u65e0\u6cd5\u6355\u83b7\u5f02\u5e38\u6216\u5f02\u5e38\u6355\u83b7\u4e0d\u53ef\u63a7\u3002"),l.createElement("ol",null,l.createElement("li",null,"\u6bd4\u5982\u4e0b\u9762\u4ee3\u7801\u6211\u4eec\u4f7f\u7528 setTimeout \u6a21\u62df\u5f02\u6b65\u64cd\u4f5c\uff0c\u5728\u5176\u4e2d\u629b\u51fa\u4e86\u4e2a\u5f02\u5e38\u3002\u4f46\u7531\u4e8e\u5f02\u6b65\u56de\u8c03\u4e2d\uff0c\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u6808\u4e0e\u539f\u51fd\u6570\u5206\u79bb\u5f00\uff0c\u5bfc\u81f4\u5916\u90e8\u65e0\u6cd5\u6293\u4f4f\u5f02\u5e38\u3002")),l.createElement(c.Z,{code:"function fetch(callback) {\n    setTimeout(() => {\n        throw Error('\u8bf7\u6c42\u5931\u8d25')\n    }, 2000)\n}\n \ntry {\n    fetch(() => {\n        console.log('\u8bf7\u6c42\u5904\u7406') // \u6c38\u8fdc\u4e0d\u4f1a\u6267\u884c\n    })\n} catch (error) {\n    console.log('\u89e6\u53d1\u5f02\u5e38', error) // \u6c38\u8fdc\u4e0d\u4f1a\u6267\u884c\n}\n \n// \u7a0b\u5e8f\u5d29\u6e83\n// Uncaught Error: \u8bf7\u6c42\u5931\u8d25",lang:"js"}),l.createElement("ol",{start:2},l.createElement("li",null,"\u5982\u679c\u4f7f\u7528 promises \u7684\u8bdd\uff0c\u901a\u8fc7 reject \u65b9\u6cd5\u628a Promise \u7684\u72b6\u6001\u7f6e\u4e3a rejected\uff0c\u8fd9\u6837\u6211\u4eec\u5728 then \u4e2d\u5c31\u80fd\u6355\u6349\u5230\uff0c\u7136\u540e\u6267\u884c\u201c\u5931\u8d25\u201d\u60c5\u51b5\u7684\u56de\u8c03\u3002")),l.createElement(c.Z,{code:"function fetch(callback) {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n             reject('\u8bf7\u6c42\u5931\u8d25');\n        }, 2000)\n    })\n}\n \n \nfetch()\n.then(\n    function(data){\n        console.log('\u8bf7\u6c42\u5904\u7406');\n        console.log(data);\n    },\n    function(reason, data){\n        console.log('\u89e6\u53d1\u5f02\u5e38');\n        console.log(reason);\n    }\n);",lang:"js"}),l.createElement("p",null,"\u5f53\u7136\u6211\u4eec\u5728 catch \u65b9\u6cd5\u4e2d\u5904\u7406 reject \u56de\u8c03\u4e5f\u662f\u53ef\u4ee5\u7684\u3002"),l.createElement(c.Z,{code:"function fetch(callback) {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n             reject('\u8bf7\u6c42\u5931\u8d25');\n        }, 2000)\n    })\n}\n \n \nfetch()\n.then(\n    function(data){\n        console.log('\u8bf7\u6c42\u5904\u7406');\n        console.log(data);\n    }\n)\n.catch(function(reason){\n    console.log('\u89e6\u53d1\u5f02\u5e38');\n    console.log(reason);\n});",lang:"js"}),l.createElement("p",null,"\u7b2c\u4e8c\u90e8\u5206\uff1a"),l.createElement("h1",{id:"js---promise\u4f7f\u7528\u8be6\u89e32es6\u4e2d\u7684promise"},l.createElement(o.AnchorLink,{to:"#js---promise\u4f7f\u7528\u8be6\u89e32es6\u4e2d\u7684promise","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"JS - Promise\u4f7f\u7528\u8be6\u89e32\uff08ES6\u4e2d\u7684Promise\uff09"),l.createElement("p",null,"2015\u5e746\u6708\uff0c ES2015\uff08\u5373 ECMAScript 6\u3001ES6\uff09 \u6b63\u5f0f\u53d1\u5e03\u3002\u5176\u4e2d Promise \u88ab\u5217\u4e3a\u6b63\u5f0f\u89c4\u8303\uff0c\u6210\u4e3a ES6 \u4e2d\u6700\u91cd\u8981\u7684\u7279\u6027\u4e4b\u4e00\u3002"),l.createElement("h3",{id:"1then\u65b9\u6cd5"},l.createElement(o.AnchorLink,{to:"#1then\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"1.then()\u65b9\u6cd5"),l.createElement("p",null,"\u7b80\u5355\u6765\u8bb2\uff0cthen \u65b9\u6cd5\u5c31\u662f\u628a\u539f\u6765\u7684\u56de\u8c03\u5199\u6cd5\u5206\u79bb\u51fa\u6765\uff0c\u5728\u5f02\u6b65\u64cd\u4f5c\u6267\u884c\u5b8c\u540e\uff0c\u7528\u94fe\u5f0f\u8c03\u7528\u7684\u65b9\u5f0f\u6267\u884c\u56de\u8c03\u51fd\u6570\u3002"),l.createElement("p",null,"\u800c Promise \u7684\u4f18\u52bf\u5c31\u5728\u4e8e\u8fd9\u4e2a\u94fe\u5f0f\u8c03\u7528\u3002\u6211\u4eec\u53ef\u4ee5\u5728 then \u65b9\u6cd5\u4e2d\u7ee7\u7eed\u5199 Promise \u5bf9\u8c61\u5e76\u8fd4\u56de\uff0c\u7136\u540e\u7ee7\u7eed\u8c03\u7528 then \u6765\u8fdb\u884c\u56de\u8c03\u64cd\u4f5c\u3002"),l.createElement("ol",null,l.createElement("li",null,"\u4e0b\u9762\u901a\u8fc7\u6837\u4f8b\u4f5c\u4e3a\u6f14\u793a\uff0c\u6211\u4eec\u5b9a\u4e49\u505a\u996d\u3001\u5403\u996d\u3001\u6d17\u7897\uff08cook\u3001eat\u3001wash\uff09\u8fd9\u4e09\u4e2a\u65b9\u6cd5\uff0c\u5b83\u4eec\u662f\u5c42\u5c42\u4f9d\u8d56\u7684\u5173\u7cfb\uff0c\u4e0b\u4e00\u6b65\u7684\u7684\u64cd\u4f5c\u9700\u8981\u4f7f\u7528\u4e0a\u4e00\u90e8\u64cd\u4f5c\u7684\u7ed3\u679c\u3002\uff08\u8fd9\u91cc\u4f7f\u7528 setTimeout \u6a21\u62df\u5f02\u6b65\u64cd\u4f5c\uff09")),l.createElement(c.Z,{code:"//\u505a\u996d\nfunction cook(){\n    console.log('\u5f00\u59cb\u505a\u996d\u3002');\n    var p = new Promise(function(resolve, reject){        //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n        setTimeout(function(){\n            console.log('\u505a\u996d\u5b8c\u6bd5\uff01');\n            resolve('\u9e21\u86cb\u7092\u996d');\n        }, 1000);\n    });\n    return p;\n}\n \n//\u5403\u996d\nfunction eat(data){\n    console.log('\u5f00\u59cb\u5403\u996d\uff1a' + data);\n    var p = new Promise(function(resolve, reject){        //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n        setTimeout(function(){\n            console.log('\u5403\u996d\u5b8c\u6bd5!');\n            resolve('\u4e00\u5757\u7897\u548c\u4e00\u53cc\u7b77\u5b50');\n        }, 2000);\n    });\n    return p;\n}\n \nfunction wash(data){\n    console.log('\u5f00\u59cb\u6d17\u7897\uff1a' + data);\n    var p = new Promise(function(resolve, reject){        //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n        setTimeout(function(){\n            console.log('\u6d17\u7897\u5b8c\u6bd5!');\n            resolve('\u5e72\u51c0\u7684\u7897\u7b77');\n        }, 2000);\n    });\n    return p;\n}",lang:"js"}),l.createElement("ol",{start:2},l.createElement("li",null,"\u4f7f\u7528 then \u94fe\u5f0f\u8c03\u7528\u8fd9\u4e09\u4e2a\u65b9\u6cd5\uff1a")),l.createElement(c.Z,{code:"cook()\n.then(function(data){\n    return eat(data);\n})\n.then(function(data){\n    return wash(data);\n})\n.then(function(data){\n    console.log(data);\n});",lang:"js"}),l.createElement("p",null,"\u5f53\u7136\u4e0a\u9762\u4ee3\u7801\u8fd8\u53ef\u4ee5\u7b80\u5316\u6210\u5982\u4e0b\uff1a"),l.createElement(c.Z,{code:"cook()\n.then(eat)\n.then(wash)\n.then(function(data){\n    console.log(data);\n});",lang:"js"}),l.createElement("ol",{start:3},l.createElement("li",null,"\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\uff1a")),l.createElement("p",null,l.createElement("img",{src:"https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/2022-03-08-17-56-17.png",alt:"\u56fe 2"})),l.createElement("h3",{id:"2reject\u65b9\u6cd5"},l.createElement(o.AnchorLink,{to:"#2reject\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"2.reject()\u65b9\u6cd5"),l.createElement("p",null,"\u4e0a\u9762\u6837\u4f8b\u6211\u4eec\u901a\u8fc7 resolve \u65b9\u6cd5\u628a Promise \u7684\u72b6\u6001\u7f6e\u4e3a\u5b8c\u6210\u6001\uff08Resolved\uff09\uff0c\u8fd9\u65f6 then \u65b9\u6cd5\u5c31\u80fd\u6355\u6349\u5230\u53d8\u5316\uff0c\u5e76\u6267\u884c\u201c\u6210\u529f\u201d\u60c5\u51b5\u7684\u56de\u8c03\u3002 \u800c reject \u65b9\u6cd5\u5c31\u662f\u628a Promise \u7684\u72b6\u6001\u7f6e\u4e3a\u5df2\u5931\u8d25\uff08Rejected\uff09\uff0c\u8fd9\u65f6 then \u65b9\u6cd5\u6267\u884c\u201c\u5931\u8d25\u201d\u60c5\u51b5\u7684\u56de\u8c03\uff08then \u65b9\u6cd5\u7684\u7b2c\u4e8c\u53c2\u6570\uff09\u3002"),l.createElement("ol",null,l.createElement("li",null,"\u4e0b\u9762\u540c\u6837\u4f7f\u7528\u4e00\u4e2a\u6837\u4f8b\u505a\u6f14\u793a")),l.createElement(c.Z,{code:"//\u505a\u996d\nfunction cook(){\n    console.log('\u5f00\u59cb\u505a\u996d\u3002');\n    var p = new Promise(function(resolve, reject){        //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n        setTimeout(function(){\n            console.log('\u505a\u996d\u5931\u8d25\uff01');\n            reject('\u70e7\u7126\u7684\u7c73\u996d');\n        }, 1000);\n    });\n    return p;\n}\n \n//\u5403\u996d\nfunction eat(data){\n    console.log('\u5f00\u59cb\u5403\u996d\uff1a' + data);\n    var p = new Promise(function(resolve, reject){        //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n        setTimeout(function(){\n            console.log('\u5403\u996d\u5b8c\u6bd5!');\n            resolve('\u4e00\u5757\u7897\u548c\u4e00\u53cc\u7b77\u5b50');\n        }, 2000);\n    });\n    return p;\n}\n \ncook()\n.then(eat, function(data){\n  console.log(data + '\u6ca1\u6cd5\u5403!');\n})\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\uff1a",lang:"js"}),l.createElement("p",null,l.createElement("img",{src:"https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/2022-03-08-17-56-59.png",alt:"\u56fe 3"})),l.createElement("ol",{start:2},l.createElement("li",null,"\u5982\u679c\u6211\u4eec\u53ea\u8981\u5904\u7406\u5931\u8d25\u7684\u60c5\u51b5\u53ef\u4ee5\u4f7f\u7528 then(null, ...)\uff0c\u6216\u662f\u4f7f\u7528\u63a5\u4e0b\u6765\u8981\u8bb2\u7684 catch \u65b9\u6cd5\u3002")),l.createElement(c.Z,{code:"cook()\n.then(null, function(data){\n  console.log(data + '\u6ca1\u6cd5\u5403!');\n})",lang:"js"}),l.createElement("h3",{id:"3catch\u65b9\u6cd5"},l.createElement(o.AnchorLink,{to:"#3catch\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"3.catch()\u65b9\u6cd5"),l.createElement("ol",null,l.createElement("li",null,"\u5b83\u53ef\u4ee5\u548c then \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e00\u6837\uff0c\u7528\u6765\u6307\u5b9a reject \u7684\u56de\u8c03")),l.createElement(c.Z,{code:"cook()\n.then(eat)\n.catch(function(data){\n    console.log(data + '\u6ca1\u6cd5\u5403!');\n});",lang:"js"}),l.createElement("ol",{start:2},l.createElement("li",null,"\u5b83\u7684\u53e6\u4e00\u4e2a\u4f5c\u7528\u662f\uff0c\u5f53\u6267\u884c resolve \u7684\u56de\u8c03\uff08\u4e5f\u5c31\u662f\u4e0a\u9762 then \u4e2d\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff09\u65f6\uff0c\u5982\u679c\u629b\u51fa\u5f02\u5e38\u4e86\uff08\u4ee3\u7801\u51fa\u9519\u4e86\uff09\uff0c\u90a3\u4e48\u4e5f\u4e0d\u4f1a\u62a5\u9519\u5361\u6b7b js\uff0c\u800c\u662f\u4f1a\u8fdb\u5230\u8fd9\u4e2a catch \u65b9\u6cd5\u4e2d\u3002")),l.createElement(c.Z,{code:"//\u505a\u996d\nfunction cook(){\n    console.log('\u5f00\u59cb\u505a\u996d\u3002');\n    var p = new Promise(function(resolve, reject){        //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n        setTimeout(function(){\n            console.log('\u505a\u996d\u5b8c\u6bd5\uff01');\n            resolve('\u9e21\u86cb\u7092\u996d');\n        }, 1000);\n    });\n    return p;\n}\n \n//\u5403\u996d\nfunction eat(data){\n    console.log('\u5f00\u59cb\u5403\u996d\uff1a' + data);\n    var p = new Promise(function(resolve, reject){        //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n        setTimeout(function(){\n            console.log('\u5403\u996d\u5b8c\u6bd5!');\n            resolve('\u4e00\u5757\u7897\u548c\u4e00\u53cc\u7b77\u5b50');\n        }, 2000);\n    });\n    return p;\n}\n \ncook()\n.then(function(data){\n    throw new Error('\u7c73\u996d\u88ab\u6253\u7ffb\u4e86\uff01');\n    eat(data);\n})\n.catch(function(data){\n    console.log(data);\n});\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\uff1a",lang:"js"}),l.createElement("p",null,l.createElement("img",{src:"https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/2022-03-08-17-58-04.png",alt:"\u56fe 4"})),l.createElement("p",null,"\u8fd9\u79cd\u9519\u8bef\u7684\u6355\u83b7\u662f\u975e\u5e38\u6709\u7528\u7684\uff0c\u56e0\u4e3a\u5b83\u80fd\u591f\u5e2e\u52a9\u6211\u4eec\u5728\u5f00\u53d1\u4e2d\u8bc6\u522b\u4ee3\u7801\u9519\u8bef\u3002\u6bd4\u5982\uff0c\u5728\u4e00\u4e2a then() \u65b9\u6cd5\u5185\u90e8\u7684\u4efb\u610f\u5730\u65b9\uff0c\u6211\u4eec\u505a\u4e86\u4e00\u4e2a JSON.parse() \u64cd\u4f5c\uff0c\u5982\u679c JSON \u53c2\u6570\u4e0d\u5408\u6cd5\u90a3\u4e48\u5b83\u5c31\u4f1a\u629b\u51fa\u4e00\u4e2a\u540c\u6b65\u9519\u8bef\u3002\u7528\u56de\u8c03\u7684\u8bdd\u8be5\u9519\u8bef\u5c31\u4f1a\u88ab\u541e\u566c\u6389\uff0c\u4f46\u662f\u7528 promises \u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u7684\u5728 catch() \u65b9\u6cd5\u91cc\u5904\u7406\u6389\u8be5\u9519\u8bef\u3002"),l.createElement("ol",{start:3},l.createElement("li",null,"\u8fd8\u53ef\u4ee5\u6dfb\u52a0\u591a\u4e2a catch\uff0c\u5b9e\u73b0\u66f4\u52a0\u7cbe\u51c6\u7684\u5f02\u5e38\u6355\u83b7\u3002")),l.createElement(c.Z,{code:"somePromise.then(function() {\n return a();\n}).catch(TypeError, function(e) {\n //If a is defined, will end up here because\n //it is a type error to reference property of undefined\n}).catch(ReferenceError, function(e) {\n //Will end up here if a wasn't defined at all\n}).catch(function(e) {\n //Generic catch-the rest, error wasn't TypeError nor\n //ReferenceError\n});",lang:"js"}),l.createElement("h3",{id:"4all\u65b9\u6cd5"},l.createElement(o.AnchorLink,{to:"#4all\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"4.all()\u65b9\u6cd5"),l.createElement("p",null,"Promise \u7684 all \u65b9\u6cd5\u63d0\u4f9b\u4e86\u5e76\u884c\u6267\u884c\u5f02\u6b65\u64cd\u4f5c\u7684\u80fd\u529b\uff0c\u5e76\u4e14\u5728\u6240\u6709\u5f02\u6b65\u64cd\u4f5c\u6267\u884c\u5b8c\u540e\u624d\u6267\u884c\u56de\u8c03\u3002"),l.createElement("ol",null,l.createElement("li",null,"\u6bd4\u5982\u4e0b\u9762\u4ee3\u7801\uff0c\u4e24\u4e2a\u4e2a\u5f02\u6b65\u64cd\u4f5c\u662f\u5e76\u884c\u6267\u884c\u7684\uff0c\u7b49\u5230\u5b83\u4eec\u90fd\u6267\u884c\u5b8c\u540e\u624d\u4f1a\u8fdb\u5230 then \u91cc\u9762\u3002\u540c\u65f6 all \u4f1a\u628a\u6240\u6709\u5f02\u6b65\u64cd\u4f5c\u7684\u7ed3\u679c\u653e\u8fdb\u4e00\u4e2a\u6570\u7ec4\u4e2d\u4f20\u7ed9 then\u3002")),l.createElement(c.Z,{code:"//\u5207\u83dc\nfunction cutUp(){\n    console.log('\u5f00\u59cb\u5207\u83dc\u3002');\n    var p = new Promise(function(resolve, reject){        //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n        setTimeout(function(){\n            console.log('\u5207\u83dc\u5b8c\u6bd5\uff01');\n            resolve('\u5207\u597d\u7684\u83dc');\n        }, 1000);\n    });\n    return p;\n}\n \n//\u70e7\u6c34\nfunction boil(){\n    console.log('\u5f00\u59cb\u70e7\u6c34\u3002');\n    var p = new Promise(function(resolve, reject){        //\u505a\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\n        setTimeout(function(){\n            console.log('\u70e7\u6c34\u5b8c\u6bd5\uff01');\n            resolve('\u70e7\u597d\u7684\u6c34');\n        }, 1000);\n    });\n    return p;\n}\n \nPromise\n.all([cutUp(), boil()])\n.then(function(results){\n    console.log(\"\u51c6\u5907\u5de5\u4f5c\u5b8c\u6bd5\uff1a\");\n    console.log(results);\n});",lang:"js"}),l.createElement("ol",{start:2},l.createElement("li",null,"\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\uff1a")),l.createElement("p",null,l.createElement("img",{src:"https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/2022-03-08-17-58-55.png",alt:"\u56fe 5"})),l.createElement("h3",{id:"5race\u65b9\u6cd5"},l.createElement(o.AnchorLink,{to:"#5race\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"5.race()\u65b9\u6cd5"),l.createElement("p",null,"race \u6309\u5b57\u9762\u89e3\u91ca\uff0c\u5c31\u662f\u8d5b\u8dd1\u7684\u610f\u601d\u3002race \u7684\u7528\u6cd5\u4e0e all \u4e00\u6837\uff0c\u53ea\u4e0d\u8fc7 all \u662f\u7b49\u6240\u6709\u5f02\u6b65\u64cd\u4f5c\u90fd\u6267\u884c\u5b8c\u6bd5\u540e\u624d\u6267\u884c then \u56de\u8c03\u3002\u800c race \u7684\u8bdd\u53ea\u8981\u6709\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\u6267\u884c\u5b8c\u6bd5\uff0c\u5c31\u7acb\u523b\u6267\u884c then \u56de\u8c03\u3002"),l.createElement("p",null,"\u6ce8\u610f\uff1a\u5176\u5b83\u6ca1\u6709\u6267\u884c\u5b8c\u6bd5\u7684\u5f02\u6b65\u64cd\u4f5c\u4ecd\u7136\u4f1a\u7ee7\u7eed\u6267\u884c\uff0c\u800c\u4e0d\u662f\u505c\u6b62\u3002"),l.createElement("ol",null,l.createElement("li",null,"\u8fd9\u91cc\u6211\u4eec\u5c06\u4e0a\u9762\u6837\u4f8b\u7684 all \u6539\u6210 race")),l.createElement(c.Z,{code:'Promise\n.race([cutUp(), boil()])\n.then(function(results){\n    console.log("\u51c6\u5907\u5de5\u4f5c\u5b8c\u6bd5\uff1a");\n    console.log(results);\n});',lang:"js"}),l.createElement("ol",{start:2},l.createElement("li",null,"race \u4f7f\u7528\u573a\u666f\u5f88\u591a\u3002\u6bd4\u5982\u6211\u4eec\u53ef\u4ee5\u7528 race \u7ed9\u67d0\u4e2a\u5f02\u6b65\u8bf7\u6c42\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\uff0c\u5e76\u4e14\u5728\u8d85\u65f6\u540e\u6267\u884c\u76f8\u5e94\u7684\u64cd\u4f5c\u3002")),l.createElement(c.Z,{code:"//\u8bf7\u6c42\u67d0\u4e2a\u56fe\u7247\u8d44\u6e90\nfunction requestImg(){\n    var p = new Promise(function(resolve, reject){\n    var img = new Image();\n    img.onload = function(){\n       resolve(img);\n    }\n    img.src = 'xxxxxx';\n    });\n    return p;\n}\n \n//\u5ef6\u65f6\u51fd\u6570\uff0c\u7528\u4e8e\u7ed9\u8bf7\u6c42\u8ba1\u65f6\nfunction timeout(){\n    var p = new Promise(function(resolve, reject){\n        setTimeout(function(){\n            reject('\u56fe\u7247\u8bf7\u6c42\u8d85\u65f6');\n        }, 5000);\n    });\n    return p;\n}\n \nPromise\n.race([requestImg(), timeout()])\n.then(function(results){\n    console.log(results);\n})\n.catch(function(reason){\n    console.log(reason);\n});\u4e0a\u9762\u4ee3\u7801 requestImg \u51fd\u6570\u5f02\u6b65\u8bf7\u6c42\u4e00\u5f20\u56fe\u7247\uff0ctimeout \u51fd\u6570\u662f\u4e00\u4e2a\u5ef6\u65f6 5 \u79d2\u7684\u5f02\u6b65\u64cd\u4f5c\u3002\u6211\u4eec\u5c06\u5b83\u4eec\u4e00\u8d77\u653e\u5728 race \u4e2d\u8d5b\u8dd1\u3002",lang:"js"}),l.createElement("ul",null,l.createElement("li",null,"\u5982\u679c 5 \u79d2\u5185\u56fe\u7247\u8bf7\u6c42\u6210\u529f\u90a3\u4e48\u4fbf\u8fdb\u5165 then \u65b9\u6cd5\uff0c\u6267\u884c\u6b63\u5e38\u7684\u6d41\u7a0b\u3002"),l.createElement("li",null,"\u5982\u679c 5 \u79d2\u949f\u56fe\u7247\u8fd8\u672a\u6210\u529f\u8fd4\u56de\uff0c\u90a3\u4e48\u5219\u8fdb\u5165 catch\uff0c\u62a5\u201c\u56fe\u7247\u8bf7\u6c42\u8d85\u65f6\u201d\u7684\u4fe1\u606f\u3002")),l.createElement("p",null,l.createElement("img",{src:"https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/2022-03-08-17-59-52.png",alt:"\u56fe 6"}))))}));n["default"]=e=>{var n=l.useContext(o.context),t=n.demos;return l.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(a,{demos:t})}}}]);