(self["webpackChunkblog"]=self["webpackChunkblog"]||[]).push([[4327],{9734:function(e,n,t){"use strict";t.r(n);var l=t(67294),c=t(96089),a=t(65659),o=l.memo((e=>{e.demos;return l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"\u5bf9\u8c61\u65b0\u589e\u4e86\u54ea\u4e9b\u6269\u5c55"},l.createElement(c.AnchorLink,{to:"#\u5bf9\u8c61\u65b0\u589e\u4e86\u54ea\u4e9b\u6269\u5c55","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u5bf9\u8c61\u65b0\u589e\u4e86\u54ea\u4e9b\u6269\u5c55\uff1f"),l.createElement("p",null,l.createElement("img",{src:"https://static.vue-js.com/54a04a10-5569-11eb-85f6-6fac77c0c9b3.png",alt:""})),l.createElement("h2",{id:"\u4e00\u53c2\u6570"},l.createElement(c.AnchorLink,{to:"#\u4e00\u53c2\u6570","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e00\u3001\u53c2\u6570"),l.createElement("p",null,l.createElement("code",null,"ES6"),"\u5141\u8bb8\u4e3a\u51fd\u6570\u7684\u53c2\u6570\u8bbe\u7f6e\u9ed8\u8ba4\u503c"),l.createElement(a.Z,{code:"function log(x, y = 'World') {\n  console.log(x, y);\n}\n\nconsole.log('Hello') // Hello World\nconsole.log('Hello', 'China') // Hello China\nconsole.log('Hello', '') // Hello",lang:"js"}),l.createElement("p",null,"\u51fd\u6570\u7684\u5f62\u53c2\u662f\u9ed8\u8ba4\u58f0\u660e\u7684\uff0c\u4e0d\u80fd\u4f7f\u7528",l.createElement("code",null,"let"),"\u6216",l.createElement("code",null,"const"),"\u518d\u6b21\u58f0\u660e"),l.createElement(a.Z,{code:"function foo(x = 5) {\n    let x = 1; // error\n    const x = 2; // error\n}",lang:"js"}),l.createElement("p",null,"\u53c2\u6570\u9ed8\u8ba4\u503c\u53ef\u4ee5\u4e0e\u89e3\u6784\u8d4b\u503c\u7684\u9ed8\u8ba4\u503c\u7ed3\u5408\u8d77\u6765\u4f7f\u7528"),l.createElement(a.Z,{code:"function foo({x, y = 5}) {\n  console.log(x, y);\n}\n\nfoo({}) // undefined 5\nfoo({x: 1}) // 1 5\nfoo({x: 1, y: 2}) // 1 2\nfoo() // TypeError: Cannot read property 'x' of undefined",lang:"js"}),l.createElement("p",null,"\u4e0a\u9762\u7684",l.createElement("code",null,"foo"),"\u51fd\u6570\uff0c\u5f53\u53c2\u6570\u4e3a\u5bf9\u8c61\u7684\u65f6\u5019\u624d\u80fd\u8fdb\u884c\u89e3\u6784\uff0c\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u53c2\u6570\u7684\u65f6\u5019\uff0c\u53d8\u91cf",l.createElement("code",null,"x"),"\u548c",l.createElement("code",null,"y"),"\u5c31\u4e0d\u4f1a\u751f\u6210\uff0c\u4ece\u800c\u62a5\u9519\uff0c\u8fd9\u91cc\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u907f\u514d"),l.createElement(a.Z,{code:"function foo({x, y = 5} = {}) {\n  console.log(x, y);\n}\n\nfoo() // undefined 5",lang:"js"}),l.createElement("p",null,"\u53c2\u6570\u9ed8\u8ba4\u503c\u5e94\u8be5\u662f\u51fd\u6570\u7684\u5c3e\u53c2\u6570\uff0c\u5982\u679c\u4e0d\u662f\u975e\u5c3e\u90e8\u7684\u53c2\u6570\u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0c\u5b9e\u9645\u4e0a\u8fd9\u4e2a\u53c2\u6570\u662f\u6ca1\u53d1\u7701\u7565\u7684"),l.createElement(a.Z,{code:"function f(x = 1, y) {\n  return [x, y];\n}\n\nf() // [1, undefined]\nf(2) // [2, undefined]\nf(, 1) // \u62a5\u9519\nf(undefined, 1) // [1, 1]",lang:"javascript"}),l.createElement("h2",{id:"\u4e8c\u5c5e\u6027"},l.createElement(c.AnchorLink,{to:"#\u4e8c\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e8c\u3001\u5c5e\u6027"),l.createElement("h3",{id:"\u51fd\u6570\u7684length\u5c5e\u6027"},l.createElement(c.AnchorLink,{to:"#\u51fd\u6570\u7684length\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u51fd\u6570\u7684length\u5c5e\u6027"),l.createElement("p",null,l.createElement("code",null,"length"),"\u5c06\u8fd4\u56de\u6ca1\u6709\u6307\u5b9a\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\u4e2a\u6570"),l.createElement(a.Z,{code:"(function (a) {}).length // 1\n(function (a = 5) {}).length // 0\n(function (a, b, c = 5) {}).length // 2",lang:"js"}),l.createElement("p",null,l.createElement("code",null,"rest")," \u53c2\u6570\u4e5f\u4e0d\u4f1a\u8ba1\u5165",l.createElement("code",null,"length"),"\u5c5e\u6027"),l.createElement(a.Z,{code:"(function(...args) {}).length // 0",lang:"js"}),l.createElement("p",null,"\u5982\u679c\u8bbe\u7f6e\u4e86\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\u4e0d\u662f\u5c3e\u53c2\u6570\uff0c\u90a3\u4e48",l.createElement("code",null,"length"),"\u5c5e\u6027\u4e5f\u4e0d\u518d\u8ba1\u5165\u540e\u9762\u7684\u53c2\u6570\u4e86"),l.createElement(a.Z,{code:"(function (a = 0, b, c) {}).length // 0\n(function (a, b = 1, c) {}).length // 1",lang:"js"}),l.createElement("h3",{id:"name\u5c5e\u6027"},l.createElement(c.AnchorLink,{to:"#name\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"name\u5c5e\u6027"),l.createElement("p",null,"\u8fd4\u56de\u8be5\u51fd\u6570\u7684\u51fd\u6570\u540d"),l.createElement(a.Z,{code:'var f = function () {};\n\n// ES5\nf.name // ""\n\n// ES6\nf.name // "f"',lang:"js"}),l.createElement("p",null,"\u5982\u679c\u5c06\u4e00\u4e2a\u5177\u540d\u51fd\u6570\u8d4b\u503c\u7ed9\u4e00\u4e2a\u53d8\u91cf\uff0c\u5219 ",l.createElement("code",null,"name"),"\u5c5e\u6027\u90fd\u8fd4\u56de\u8fd9\u4e2a\u5177\u540d\u51fd\u6570\u539f\u672c\u7684\u540d\u5b57"),l.createElement(a.Z,{code:'const bar = function baz() {};\nbar.name // "baz"',lang:"js"}),l.createElement("p",null,l.createElement("code",null,"Function"),"\u6784\u9020\u51fd\u6570\u8fd4\u56de\u7684\u51fd\u6570\u5b9e\u4f8b\uff0c",l.createElement("code",null,"name"),"\u5c5e\u6027\u7684\u503c\u4e3a",l.createElement("code",null,"anonymous")),l.createElement(a.Z,{code:'(new Function).name // "anonymous"',lang:"javascript"}),l.createElement("p",null,l.createElement("code",null,"bind"),"\u8fd4\u56de\u7684\u51fd\u6570\uff0c",l.createElement("code",null,"name"),"\u5c5e\u6027\u503c\u4f1a\u52a0\u4e0a",l.createElement("code",null,"bound"),"\u524d\u7f00"),l.createElement(a.Z,{code:'function foo() {};\nfoo.bind({}).name // "bound foo"\n\n(function(){}).bind({}).name // "bound "',lang:"javascript"}),l.createElement("h2",{id:"\u4e09\u4f5c\u7528\u57df"},l.createElement(c.AnchorLink,{to:"#\u4e09\u4f5c\u7528\u57df","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e09\u3001\u4f5c\u7528\u57df"),l.createElement("p",null,"\u4e00\u65e6\u8bbe\u7f6e\u4e86\u53c2\u6570\u7684\u9ed8\u8ba4\u503c\uff0c\u51fd\u6570\u8fdb\u884c\u58f0\u660e\u521d\u59cb\u5316\u65f6\uff0c\u53c2\u6570\u4f1a\u5f62\u6210\u4e00\u4e2a\u5355\u72ec\u7684\u4f5c\u7528\u57df"),l.createElement("p",null,"\u7b49\u5230\u521d\u59cb\u5316\u7ed3\u675f\uff0c\u8fd9\u4e2a\u4f5c\u7528\u57df\u5c31\u4f1a\u6d88\u5931\u3002\u8fd9\u79cd\u8bed\u6cd5\u884c\u4e3a\uff0c\u5728\u4e0d\u8bbe\u7f6e\u53c2\u6570\u9ed8\u8ba4\u503c\u65f6\uff0c\u662f\u4e0d\u4f1a\u51fa\u73b0\u7684"),l.createElement("p",null,"\u4e0b\u9762\u4f8b\u5b50\u4e2d\uff0c",l.createElement("code",null,"y=x"),"\u4f1a\u5f62\u6210\u4e00\u4e2a\u5355\u72ec\u4f5c\u7528\u57df\uff0c",l.createElement("code",null,"x"),"\u6ca1\u6709\u88ab\u5b9a\u4e49\uff0c\u6240\u4ee5\u6307\u5411\u5168\u5c40\u53d8\u91cf",l.createElement("code",null,"x")),l.createElement(a.Z,{code:"let x = 1;\n\nfunction f(y = x) { \n  // \u7b49\u540c\u4e8e let y = x  \n  let x = 2; \n  console.log(y);\n}\n\nf() // 1",lang:"js"}),l.createElement("h2",{id:"\u56db\u4e25\u683c\u6a21\u5f0f"},l.createElement(c.AnchorLink,{to:"#\u56db\u4e25\u683c\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u56db\u3001\u4e25\u683c\u6a21\u5f0f"),l.createElement("p",null,"\u53ea\u8981\u51fd\u6570\u53c2\u6570\u4f7f\u7528\u4e86\u9ed8\u8ba4\u503c\u3001\u89e3\u6784\u8d4b\u503c\u3001\u6216\u8005\u6269\u5c55\u8fd0\u7b97\u7b26\uff0c\u90a3\u4e48\u51fd\u6570\u5185\u90e8\u5c31\u4e0d\u80fd\u663e\u5f0f\u8bbe\u5b9a\u4e3a\u4e25\u683c\u6a21\u5f0f\uff0c\u5426\u5219\u4f1a\u62a5\u9519"),l.createElement(a.Z,{code:"// \u62a5\u9519\nfunction doSomething(a, b = a) {\n  'use strict';\n  // code\n}\n\n// \u62a5\u9519\nconst doSomething = function ({a, b}) {\n  'use strict';\n  // code\n};\n\n// \u62a5\u9519\nconst doSomething = (...a) => {\n  'use strict';\n  // code\n};\n\nconst obj = {\n  // \u62a5\u9519\n  doSomething({a, b}) {\n    'use strict';\n    // code\n  }\n};",lang:"js"}),l.createElement("h2",{id:"\u4e94\u7bad\u5934\u51fd\u6570"},l.createElement(c.AnchorLink,{to:"#\u4e94\u7bad\u5934\u51fd\u6570","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e94\u3001\u7bad\u5934\u51fd\u6570"),l.createElement("p",null,"\u4f7f\u7528\u201c\u7bad\u5934\u201d\uff08",l.createElement("code",null,"=>"),"\uff09\u5b9a\u4e49\u51fd\u6570"),l.createElement(a.Z,{code:"var f = v => v;\n\n// \u7b49\u540c\u4e8e\nvar f = function (v) {\n  return v;\n};",lang:"js"}),l.createElement("p",null,"\u5982\u679c\u7bad\u5934\u51fd\u6570\u4e0d\u9700\u8981\u53c2\u6570\u6216\u9700\u8981\u591a\u4e2a\u53c2\u6570\uff0c\u5c31\u4f7f\u7528\u4e00\u4e2a\u5706\u62ec\u53f7\u4ee3\u8868\u53c2\u6570\u90e8\u5206"),l.createElement(a.Z,{code:"var f = () => 5;\n// \u7b49\u540c\u4e8e\nvar f = function () { return 5 };\n\nvar sum = (num1, num2) => num1 + num2;\n// \u7b49\u540c\u4e8e\nvar sum = function(num1, num2) {\n  return num1 + num2;\n};",lang:"js"}),l.createElement("p",null,"\u5982\u679c\u7bad\u5934\u51fd\u6570\u7684\u4ee3\u7801\u5757\u90e8\u5206\u591a\u4e8e\u4e00\u6761\u8bed\u53e5\uff0c\u5c31\u8981\u4f7f\u7528\u5927\u62ec\u53f7\u5c06\u5b83\u4eec\u62ec\u8d77\u6765\uff0c\u5e76\u4e14\u4f7f\u7528",l.createElement("code",null,"return"),"\u8bed\u53e5\u8fd4\u56de"),l.createElement(a.Z,{code:"var sum = (num1, num2) => { return num1 + num2; }",lang:"js"}),l.createElement("p",null,"\u5982\u679c\u8fd4\u56de\u5bf9\u8c61\uff0c\u9700\u8981\u52a0\u62ec\u53f7\u5c06\u5bf9\u8c61\u5305\u88f9"),l.createElement(a.Z,{code:'let getTempItem = id => ({ id: id, name: "Temp" });',lang:"js"}),l.createElement("p",null,"\u6ce8\u610f\u70b9\uff1a"),l.createElement("ul",null,l.createElement("li",null,"\u51fd\u6570\u4f53\u5185\u7684",l.createElement("code",null,"this"),"\u5bf9\u8c61\uff0c\u5c31\u662f\u5b9a\u4e49\u65f6\u6240\u5728\u7684\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u65f6\u6240\u5728\u7684\u5bf9\u8c61"),l.createElement("li",null,"\u4e0d\u53ef\u4ee5\u5f53\u4f5c\u6784\u9020\u51fd\u6570\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e0d\u53ef\u4ee5\u4f7f\u7528",l.createElement("code",null,"new"),"\u547d\u4ee4\uff0c\u5426\u5219\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef"),l.createElement("li",null,"\u4e0d\u53ef\u4ee5\u4f7f\u7528",l.createElement("code",null,"arguments"),"\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5728\u51fd\u6570\u4f53\u5185\u4e0d\u5b58\u5728\u3002\u5982\u679c\u8981\u7528\uff0c\u53ef\u4ee5\u7528 ",l.createElement("code",null,"rest")," \u53c2\u6570\u4ee3\u66ff"),l.createElement("li",null,"\u4e0d\u53ef\u4ee5\u4f7f\u7528",l.createElement("code",null,"yield"),"\u547d\u4ee4\uff0c\u56e0\u6b64\u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u7528\u4f5c Generator \u51fd\u6570")),l.createElement("h2",{id:"\u53c2\u8003\u6587\u732e"},l.createElement(c.AnchorLink,{to:"#\u53c2\u8003\u6587\u732e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003\u6587\u732e"),l.createElement("ul",null,l.createElement("li",null,l.createElement(c.Link,{to:"https://es6.ruanyifeng.com/#docs/function"},"https://es6.ruanyifeng.com/#docs/function")))))}));n["default"]=e=>{var n=l.useContext(c.context),t=n.demos;return l.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(o,{demos:t})}}}]);