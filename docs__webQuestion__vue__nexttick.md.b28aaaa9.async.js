(self["webpackChunkblog"]=self["webpackChunkblog"]||[]).push([[3505],{40767:function(e,n,t){"use strict";t.r(n);var l=t(67294),c=t(96089),a=t(65659),r=l.memo((e=>{e.demos;return l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"vue\u4e2d\u7684nexttick\u6709\u4ec0\u4e48\u4f5c\u7528"},l.createElement(c.AnchorLink,{to:"#vue\u4e2d\u7684nexttick\u6709\u4ec0\u4e48\u4f5c\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Vue\u4e2d\u7684$nextTick\u6709\u4ec0\u4e48\u4f5c\u7528\uff1f"),l.createElement("p",null,l.createElement("img",{src:"https://static.vue-js.com/76484d30-3aba-11eb-85f6-6fac77c0c9b3.png",alt:""})),l.createElement("h2",{id:"\u4e00nexttick\u662f\u4ec0\u4e48"},l.createElement(c.AnchorLink,{to:"#\u4e00nexttick\u662f\u4ec0\u4e48","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e00\u3001NextTick\u662f\u4ec0\u4e48"),l.createElement("p",null,"\u5b98\u65b9\u5bf9\u5176\u7684\u5b9a\u4e49"),l.createElement("blockquote",null,l.createElement("p",null,"\u5728\u4e0b\u6b21 DOM \u66f4\u65b0\u5faa\u73af\u7ed3\u675f\u4e4b\u540e\u6267\u884c\u5ef6\u8fdf\u56de\u8c03\u3002\u5728\u4fee\u6539\u6570\u636e\u4e4b\u540e\u7acb\u5373\u4f7f\u7528\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u83b7\u53d6\u66f4\u65b0\u540e\u7684 DOM")),l.createElement("p",null,"\u4ec0\u4e48\u610f\u601d\u5462\uff1f"),l.createElement("p",null,"\u6211\u4eec\u53ef\u4ee5\u7406\u89e3\u6210\uff0c",l.createElement("code",null,"Vue")," \u5728\u66f4\u65b0 ",l.createElement("code",null,"DOM")," \u65f6\u662f\u5f02\u6b65\u6267\u884c\u7684\u3002\u5f53\u6570\u636e\u53d1\u751f\u53d8\u5316\uff0c",l.createElement("code",null,"Vue"),"\u5c06\u5f00\u542f\u4e00\u4e2a\u5f02\u6b65\u66f4\u65b0\u961f\u5217\uff0c\u89c6\u56fe\u9700\u8981\u7b49\u961f\u5217\u4e2d\u6240\u6709\u6570\u636e\u53d8\u5316\u5b8c\u6210\u4e4b\u540e\uff0c\u518d\u7edf\u4e00\u8fdb\u884c\u66f4\u65b0"),l.createElement("p",null,"\u4e3e\u4f8b\u4e00\u4e0b"),l.createElement("p",null,l.createElement("code",null,"Html"),"\u7ed3\u6784"),l.createElement(a.Z,{code:'<div id="app"> {{ message }} </div>',lang:"html"}),l.createElement("p",null,"\u6784\u5efa\u4e00\u4e2a",l.createElement("code",null,"vue"),"\u5b9e\u4f8b"),l.createElement(a.Z,{code:"const vm = new Vue({\n  el: '#app',\n  data: {\n    message: '\u539f\u59cb\u503c'\n  }\n})",lang:"js"}),l.createElement("p",null,"\u4fee\u6539",l.createElement("code",null,"message")),l.createElement(a.Z,{code:"this.message = '\u4fee\u6539\u540e\u7684\u503c1'\nthis.message = '\u4fee\u6539\u540e\u7684\u503c2'\nthis.message = '\u4fee\u6539\u540e\u7684\u503c3'",lang:"js"}),l.createElement("p",null,"\u8fd9\u65f6\u5019\u60f3\u83b7\u53d6\u9875\u9762\u6700\u65b0\u7684",l.createElement("code",null,"DOM"),"\u8282\u70b9\uff0c\u5374\u53d1\u73b0\u83b7\u53d6\u5230\u7684\u662f\u65e7\u503c"),l.createElement(a.Z,{code:"console.log(vm.$el.textContent) // \u539f\u59cb\u503c",lang:"js"}),l.createElement("p",null,"\u8fd9\u662f\u56e0\u4e3a",l.createElement("code",null,"message"),"\u6570\u636e\u5728\u53d1\u73b0\u53d8\u5316\u7684\u65f6\u5019\uff0c",l.createElement("code",null,"vue"),"\u5e76\u4e0d\u4f1a\u7acb\u523b\u53bb\u66f4\u65b0",l.createElement("code",null,"Dom"),"\uff0c\u800c\u662f\u5c06\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u653e\u5728\u4e86\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\u961f\u5217\u4e2d"),l.createElement("p",null,"\u5982\u679c\u6211\u4eec\u4e00\u76f4\u4fee\u6539\u76f8\u540c\u6570\u636e\uff0c\u5f02\u6b65\u64cd\u4f5c\u961f\u5217\u8fd8\u4f1a\u8fdb\u884c\u53bb\u91cd"),l.createElement("p",null,"\u7b49\u5f85\u540c\u4e00\u4e8b\u4ef6\u5faa\u73af\u4e2d\u7684\u6240\u6709\u6570\u636e\u53d8\u5316\u5b8c\u6210\u4e4b\u540e\uff0c\u4f1a\u5c06\u961f\u5217\u4e2d\u7684\u4e8b\u4ef6\u62ff\u6765\u8fdb\u884c\u5904\u7406\uff0c\u8fdb\u884c",l.createElement("code",null,"DOM"),"\u7684\u66f4\u65b0"),l.createElement("h4",{id:"\u4e3a\u4ec0\u4e48\u8981\u6709nexttick"},l.createElement(c.AnchorLink,{to:"#\u4e3a\u4ec0\u4e48\u8981\u6709nexttick","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e3a\u4ec0\u4e48\u8981\u6709nexttick"),l.createElement("p",null,"\u4e3e\u4e2a\u4f8b\u5b50"),l.createElement(a.Z,{code:"{{num}}\nfor(let i=0; i<100000; i++){\n    num = i\n}",lang:"js"}),l.createElement("p",null,"\u5982\u679c\u6ca1\u6709 ",l.createElement("code",null,"nextTick")," \u66f4\u65b0\u673a\u5236\uff0c\u90a3\u4e48 ",l.createElement("code",null,"num")," \u6bcf\u6b21\u66f4\u65b0\u503c\u90fd\u4f1a\u89e6\u53d1\u89c6\u56fe\u66f4\u65b0(\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\u4e5f\u5c31\u662f\u4f1a\u66f4\u65b010\u4e07\u6b21\u89c6\u56fe)\uff0c\u6709\u4e86",l.createElement("code",null,"nextTick"),"\u673a\u5236\uff0c\u53ea\u9700\u8981\u66f4\u65b0\u4e00\u6b21\uff0c\u6240\u4ee5",l.createElement("code",null,"nextTick"),"\u672c\u8d28\u662f\u4e00\u79cd\u4f18\u5316\u7b56\u7565"),l.createElement("h2",{id:"\u4e8c\u4f7f\u7528\u573a\u666f"},l.createElement(c.AnchorLink,{to:"#\u4e8c\u4f7f\u7528\u573a\u666f","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e8c\u3001\u4f7f\u7528\u573a\u666f"),l.createElement("p",null,"\u5982\u679c\u60f3\u8981\u5728\u4fee\u6539\u6570\u636e\u540e\u7acb\u523b\u5f97\u5230\u66f4\u65b0\u540e\u7684",l.createElement("code",null,"DOM"),"\u7ed3\u6784\uff0c\u53ef\u4ee5\u4f7f\u7528",l.createElement("code",null,"Vue.nextTick()")),l.createElement("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\uff1a\u56de\u8c03\u51fd\u6570\uff08\u53ef\u4ee5\u83b7\u53d6\u6700\u8fd1\u7684",l.createElement("code",null,"DOM"),"\u7ed3\u6784\uff09"),l.createElement("p",null,"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\uff1a\u6267\u884c\u51fd\u6570\u4e0a\u4e0b\u6587"),l.createElement(a.Z,{code:"// \u4fee\u6539\u6570\u636e\nvm.message = '\u4fee\u6539\u540e\u7684\u503c'\n// DOM \u8fd8\u6ca1\u6709\u66f4\u65b0\nconsole.log(vm.$el.textContent) // \u539f\u59cb\u7684\u503c\nVue.nextTick(function () {\n  // DOM \u66f4\u65b0\u4e86\n  console.log(vm.$el.textContent) // \u4fee\u6539\u540e\u7684\u503c\n})",lang:"js"}),l.createElement("p",null,"\u7ec4\u4ef6\u5185\u4f7f\u7528 ",l.createElement("code",null,"vm.$nextTick()")," \u5b9e\u4f8b\u65b9\u6cd5\u53ea\u9700\u8981\u901a\u8fc7",l.createElement("code",null,"this.$nextTick()"),"\uff0c\u5e76\u4e14\u56de\u8c03\u51fd\u6570\u4e2d\u7684 ",l.createElement("code",null,"this")," \u5c06\u81ea\u52a8\u7ed1\u5b9a\u5230\u5f53\u524d\u7684 ",l.createElement("code",null,"Vue")," \u5b9e\u4f8b\u4e0a"),l.createElement(a.Z,{code:"this.message = '\u4fee\u6539\u540e\u7684\u503c'\nconsole.log(this.$el.textContent) // => '\u539f\u59cb\u7684\u503c'\nthis.$nextTick(function () {\n    console.log(this.$el.textContent) // => '\u4fee\u6539\u540e\u7684\u503c'\n})",lang:"js"}),l.createElement("p",null,l.createElement("code",null,"$nextTick()")," \u4f1a\u8fd4\u56de\u4e00\u4e2a ",l.createElement("code",null,"Promise")," \u5bf9\u8c61\uff0c\u53ef\u4ee5\u662f\u7528",l.createElement("code",null,"async/await"),"\u5b8c\u6210\u76f8\u540c\u4f5c\u7528\u7684\u4e8b\u60c5"),l.createElement(a.Z,{code:"this.message = '\u4fee\u6539\u540e\u7684\u503c'\nconsole.log(this.$el.textContent) // => '\u539f\u59cb\u7684\u503c'\nawait this.$nextTick()\nconsole.log(this.$el.textContent) // => '\u4fee\u6539\u540e\u7684\u503c'",lang:"js"}),l.createElement("h2",{id:"\u4e09\u5b9e\u73b0\u539f\u7406"},l.createElement(c.AnchorLink,{to:"#\u4e09\u5b9e\u73b0\u539f\u7406","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e09\u3001\u5b9e\u73b0\u539f\u7406"),l.createElement("p",null,"\u6e90\u7801\u4f4d\u7f6e\uff1a",l.createElement("code",null,"/src/core/util/next-tick.js")),l.createElement("p",null,l.createElement("code",null,"callbacks"),"\u4e5f\u5c31\u662f\u5f02\u6b65\u64cd\u4f5c\u961f\u5217"),l.createElement("p",null,l.createElement("code",null,"callbacks"),"\u65b0\u589e\u56de\u8c03\u51fd\u6570\u540e\u53c8\u6267\u884c\u4e86",l.createElement("code",null,"timerFunc"),"\u51fd\u6570\uff0c",l.createElement("code",null,"pending"),"\u662f\u7528\u6765\u6807\u8bc6\u540c\u4e00\u4e2a\u65f6\u95f4\u53ea\u80fd\u6267\u884c\u4e00\u6b21"),l.createElement(a.Z,{code:"export function nextTick(cb?: Function, ctx?: Object) {\n  let _resolve;\n\n  // cb \u56de\u8c03\u51fd\u6570\u4f1a\u7ecf\u7edf\u4e00\u5904\u7406\u538b\u5165 callbacks \u6570\u7ec4\n  callbacks.push(() => {\n    if (cb) {\n      // \u7ed9 cb \u56de\u8c03\u51fd\u6570\u6267\u884c\u52a0\u4e0a\u4e86 try-catch \u9519\u8bef\u5904\u7406\n      try {\n        cb.call(ctx);\n      } catch (e) {\n        handleError(e, ctx, 'nextTick');\n      }\n    } else if (_resolve) {\n      _resolve(ctx);\n    }\n  });\n\n  // \u6267\u884c\u5f02\u6b65\u5ef6\u8fdf\u51fd\u6570 timerFunc\n  if (!pending) {\n    pending = true;\n    timerFunc();\n  }\n\n  // \u5f53 nextTick \u6ca1\u6709\u4f20\u5165\u51fd\u6570\u53c2\u6570\u7684\u65f6\u5019\uff0c\u8fd4\u56de\u4e00\u4e2a Promise \u5316\u7684\u8c03\u7528\n  if (!cb && typeof Promise !== 'undefined') {\n    return new Promise(resolve => {\n      _resolve = resolve;\n    });\n  }\n}",lang:"js"}),l.createElement("p",null,l.createElement("code",null,"timerFunc"),"\u51fd\u6570\u5b9a\u4e49\uff0c\u8fd9\u91cc\u662f\u6839\u636e\u5f53\u524d\u73af\u5883\u652f\u6301\u4ec0\u4e48\u65b9\u6cd5\u5219\u786e\u5b9a\u8c03\u7528\u54ea\u4e2a\uff0c\u5206\u522b\u6709\uff1a"),l.createElement("p",null,l.createElement("code",null,"Promise.then"),"\u3001",l.createElement("code",null,"MutationObserver"),"\u3001",l.createElement("code",null,"setImmediate"),"\u3001",l.createElement("code",null,"setTimeout")),l.createElement("p",null,"\u901a\u8fc7\u4e0a\u9762\u4efb\u610f\u4e00\u79cd\u65b9\u6cd5\uff0c\u8fdb\u884c\u964d\u7ea7\u64cd\u4f5c"),l.createElement(a.Z,{code:"export let isUsingMicroTask = false\nif (typeof Promise !== 'undefined' && isNative(Promise)) {\n  //\u5224\u65ad1\uff1a\u662f\u5426\u539f\u751f\u652f\u6301Promise\n  const p = Promise.resolve()\n  timerFunc = () => {\n    p.then(flushCallbacks)\n    if (isIOS) setTimeout(noop)\n  }\n  isUsingMicroTask = true\n} else if (!isIE && typeof MutationObserver !== 'undefined' && (\n  isNative(MutationObserver) ||\n  MutationObserver.toString() === '[object MutationObserverConstructor]'\n)) {\n  //\u5224\u65ad2\uff1a\u662f\u5426\u539f\u751f\u652f\u6301MutationObserver\n  let counter = 1\n  const observer = new MutationObserver(flushCallbacks)\n  const textNode = document.createTextNode(String(counter))\n  observer.observe(textNode, {\n    characterData: true\n  })\n  timerFunc = () => {\n    counter = (counter + 1) % 2\n    textNode.data = String(counter)\n  }\n  isUsingMicroTask = true\n} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {\n  //\u5224\u65ad3\uff1a\u662f\u5426\u539f\u751f\u652f\u6301setImmediate\n  timerFunc = () => {\n    setImmediate(flushCallbacks)\n  }\n} else {\n  //\u5224\u65ad4\uff1a\u4e0a\u9762\u90fd\u4e0d\u884c\uff0c\u76f4\u63a5\u7528setTimeout\n  timerFunc = () => {\n    setTimeout(flushCallbacks, 0)\n  }\n}",lang:"js"}),l.createElement("p",null,"\u65e0\u8bba\u662f\u5fae\u4efb\u52a1\u8fd8\u662f\u5b8f\u4efb\u52a1\uff0c\u90fd\u4f1a\u653e\u5230",l.createElement("code",null,"flushCallbacks"),"\u4f7f\u7528"),l.createElement("p",null,"\u8fd9\u91cc\u5c06",l.createElement("code",null,"callbacks"),"\u91cc\u9762\u7684\u51fd\u6570\u590d\u5236\u4e00\u4efd\uff0c\u540c\u65f6",l.createElement("code",null,"callbacks"),"\u7f6e\u7a7a"),l.createElement("p",null,"\u4f9d\u6b21\u6267\u884c",l.createElement("code",null,"callbacks"),"\u91cc\u9762\u7684\u51fd\u6570"),l.createElement(a.Z,{code:"function flushCallbacks () {\n  pending = false\n  const copies = callbacks.slice(0)\n  callbacks.length = 0\n  for (let i = 0; i < copies.length; i++) {\n    copies[i]()\n  }\n}",lang:"js"}),l.createElement("p",null,l.createElement("strong",null,"\u5c0f\u7ed3\uff1a")),l.createElement("ol",null,l.createElement("li",null,"\u628a\u56de\u8c03\u51fd\u6570\u653e\u5165callbacks\u7b49\u5f85\u6267\u884c"),l.createElement("li",null,"\u5c06\u6267\u884c\u51fd\u6570\u653e\u5230\u5fae\u4efb\u52a1\u6216\u8005\u5b8f\u4efb\u52a1\u4e2d"),l.createElement("li",null,"\u4e8b\u4ef6\u5faa\u73af\u5230\u4e86\u5fae\u4efb\u52a1\u6216\u8005\u5b8f\u4efb\u52a1\uff0c\u6267\u884c\u51fd\u6570\u4f9d\u6b21\u6267\u884ccallbacks\u4e2d\u7684\u56de\u8c03")),l.createElement("h2",{id:"\u53c2\u8003\u6587\u732e"},l.createElement(c.AnchorLink,{to:"#\u53c2\u8003\u6587\u732e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003\u6587\u732e"),l.createElement("ul",null,l.createElement("li",null,l.createElement(c.Link,{to:"https://juejin.cn/post/6844904147804749832"},"https://juejin.cn/post/6844904147804749832")))))}));n["default"]=e=>{var n=l.useContext(c.context),t=n.demos;return l.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(r,{demos:t})}}}]);