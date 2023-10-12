(self["webpackChunkblog"]=self["webpackChunkblog"]||[]).push([[561],{51571:function(e,t,n){"use strict";n.r(t);var l=n(67294),a=n(96089),c=n(65659),r=l.memo((e=>{e.demos;return l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"\u8bf4\u8bf4\u5bf9-node-\u4e2d\u7684-stream-\u7684\u7406\u89e3\u5e94\u7528\u573a\u666f"},l.createElement(a.AnchorLink,{to:"#\u8bf4\u8bf4\u5bf9-node-\u4e2d\u7684-stream-\u7684\u7406\u89e3\u5e94\u7528\u573a\u666f","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8bf4\u8bf4\u5bf9 Node \u4e2d\u7684 Stream \u7684\u7406\u89e3\uff1f\u5e94\u7528\u573a\u666f\uff1f"),l.createElement("p",null,l.createElement("img",{src:"https://static.vue-js.com/a5df3c60-c76f-11eb-ab90-d9ae814b240d.png",alt:""})),l.createElement("h2",{id:"\u4e00\u662f\u4ec0\u4e48"},l.createElement(a.AnchorLink,{to:"#\u4e00\u662f\u4ec0\u4e48","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e00\u3001\u662f\u4ec0\u4e48"),l.createElement("p",null,"\u6d41\uff08Stream\uff09\uff0c\u662f\u4e00\u4e2a\u6570\u636e\u4f20\u8f93\u624b\u6bb5\uff0c\u662f\u7aef\u5230\u7aef\u4fe1\u606f\u4ea4\u6362\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u800c\u4e14\u662f\u6709\u987a\u5e8f\u7684,\u662f\u9010\u5757\u8bfb\u53d6\u6570\u636e\u3001\u5904\u7406\u5185\u5bb9\uff0c\u7528\u4e8e\u987a\u5e8f\u8bfb\u53d6\u8f93\u5165\u6216\u5199\u5165\u8f93\u51fa"),l.createElement("p",null,l.createElement("code",null,"Node.js"),"\u4e2d\u5f88\u591a\u5bf9\u8c61\u90fd\u5b9e\u73b0\u4e86\u6d41\uff0c\u603b\u4e4b\u5b83\u662f\u4f1a\u5192\u6570\u636e\uff08\u4ee5 ",l.createElement("code",null,"Buffer")," \u4e3a\u5355\u4f4d\uff09"),l.createElement("p",null,"\u5b83\u7684\u72ec\u7279\u4e4b\u5904\u5728\u4e8e\uff0c\u5b83\u4e0d\u50cf\u4f20\u7edf\u7684\u7a0b\u5e8f\u90a3\u6837\u4e00\u6b21\u5c06\u4e00\u4e2a\u6587\u4ef6\u8bfb\u5165\u5185\u5b58\uff0c\u800c\u662f\u9010\u5757\u8bfb\u53d6\u6570\u636e\u3001\u5904\u7406\u5176\u5185\u5bb9\uff0c\u800c\u4e0d\u662f\u5c06\u5176\u5168\u90e8\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d"),l.createElement("p",null,"\u6d41\u53ef\u4ee5\u5206\u6210\u4e09\u90e8\u5206\uff1a",l.createElement("code",null,"source"),"\u3001",l.createElement("code",null,"dest"),"\u3001",l.createElement("code",null,"pipe")),l.createElement("p",null,"\u5728",l.createElement("code",null,"source"),"\u548c",l.createElement("code",null,"dest"),"\u4e4b\u95f4\u6709\u4e00\u4e2a\u8fde\u63a5\u7684\u7ba1\u9053",l.createElement("code",null,"pipe"),",\u5b83\u7684\u57fa\u672c\u8bed\u6cd5\u662f",l.createElement("code",null,"source.pipe(dest)"),"\uff0c",l.createElement("code",null,"source"),"\u548c",l.createElement("code",null,"dest"),"\u5c31\u662f\u901a\u8fc7pipe\u8fde\u63a5\uff0c\u8ba9\u6570\u636e\u4ece",l.createElement("code",null,"source"),"\u6d41\u5411\u4e86",l.createElement("code",null,"dest"),"\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),l.createElement("p",null,l.createElement("img",{src:"https://static.vue-js.com/aec05670-c76f-11eb-ab90-d9ae814b240d.png",alt:""})),l.createElement("h2",{id:"\u4e8c\u79cd\u7c7b"},l.createElement(a.AnchorLink,{to:"#\u4e8c\u79cd\u7c7b","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e8c\u3001\u79cd\u7c7b"),l.createElement("p",null,"\u5728",l.createElement("code",null,"NodeJS"),"\uff0c\u51e0\u4e4e\u6240\u6709\u7684\u5730\u65b9\u90fd\u4f7f\u7528\u5230\u4e86\u6d41\u7684\u6982\u5ff5\uff0c\u5206\u6210\u56db\u4e2a\u79cd\u7c7b\uff1a"),l.createElement("ul",null,l.createElement("li",null,l.createElement("p",null,"\u53ef\u5199\u6d41\uff1a\u53ef\u5199\u5165\u6570\u636e\u7684\u6d41\u3002\u4f8b\u5982 fs.createWriteStream()  \u53ef\u4ee5\u4f7f\u7528\u6d41\u5c06\u6570\u636e\u5199\u5165\u6587\u4ef6")),l.createElement("li",null,l.createElement("p",null,"\u53ef\u8bfb\u6d41\uff1a \u53ef\u8bfb\u53d6\u6570\u636e\u7684\u6d41\u3002\u4f8b\u5982fs.createReadStream() \u53ef\u4ee5\u4ece\u6587\u4ef6\u8bfb\u53d6\u5185\u5bb9")),l.createElement("li",null,l.createElement("p",null,"\u53cc\u5de5\u6d41\uff1a \u65e2\u53ef\u8bfb\u53c8\u53ef\u5199\u7684\u6d41\u3002\u4f8b\u5982 net.Socket")),l.createElement("li",null,l.createElement("p",null,"\u8f6c\u6362\u6d41\uff1a \u53ef\u4ee5\u5728\u6570\u636e\u5199\u5165\u548c\u8bfb\u53d6\u65f6\u4fee\u6539\u6216\u8f6c\u6362\u6570\u636e\u7684\u6d41\u3002\u4f8b\u5982\uff0c\u5728\u6587\u4ef6\u538b\u7f29\u64cd\u4f5c\u4e2d\uff0c\u53ef\u4ee5\u5411\u6587\u4ef6\u5199\u5165\u538b\u7f29\u6570\u636e\uff0c\u5e76\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u89e3\u538b\u6570\u636e"))),l.createElement("p",null,"\u5728",l.createElement("code",null,"NodeJS"),"\u4e2d",l.createElement("code",null,"HTTP"),"\u670d\u52a1\u5668\u6a21\u5757\u4e2d\uff0c",l.createElement("code",null,"request")," \u662f\u53ef\u8bfb\u6d41\uff0c",l.createElement("code",null,"response")," \u662f\u53ef\u5199\u6d41\u3002\u8fd8\u6709",l.createElement("code",null,"fs")," \u6a21\u5757\uff0c\u80fd\u540c\u65f6\u5904\u7406\u53ef\u8bfb\u548c\u53ef\u5199\u6587\u4ef6\u6d41"),l.createElement("p",null,"\u53ef\u8bfb\u6d41\u548c\u53ef\u5199\u6d41\u90fd\u662f\u5355\u5411\u7684\uff0c\u6bd4\u8f83\u5bb9\u6613\u7406\u89e3\uff0c\u800c\u53e6\u5916\u4e24\u4e2a\u662f\u53cc\u5411\u7684"),l.createElement("h3",{id:"\u53cc\u5de5\u6d41"},l.createElement(a.AnchorLink,{to:"#\u53cc\u5de5\u6d41","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53cc\u5de5\u6d41"),l.createElement("p",null,"\u4e4b\u524d\u4e86\u89e3\u8fc7",l.createElement("code",null,"websocket"),"\u901a\u4fe1\uff0c\u662f\u4e00\u4e2a\u5168\u53cc\u5de5\u901a\u4fe1\uff0c\u53d1\u9001\u65b9\u548c\u63a5\u53d7\u65b9\u90fd\u662f\u5404\u81ea\u72ec\u7acb\u7684\u65b9\u6cd5\uff0c\u53d1\u9001\u548c\u63a5\u6536\u90fd\u6ca1\u6709\u4efb\u4f55\u5173\u7cfb"),l.createElement("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),l.createElement("p",null,l.createElement("img",{src:"https://static.vue-js.com/b7ac6d00-c76f-11eb-ab90-d9ae814b240d.png",alt:""})),l.createElement("p",null,"\u57fa\u672c\u4ee3\u7801\u5982\u4e0b\uff1a"),l.createElement(c.Z,{code:"const { Duplex } = require('stream');\n\nconst myDuplex = new Duplex({\n  read(size) {\n    // ...\n  },\n  write(chunk, encoding, callback) {\n    // ...\n  }\n});",lang:"js"}),l.createElement("h3",{id:"\u53cc\u5de5\u6d41-1"},l.createElement(a.AnchorLink,{to:"#\u53cc\u5de5\u6d41-1","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53cc\u5de5\u6d41"),l.createElement("p",null,"\u53cc\u5de5\u6d41\u7684\u6f14\u793a\u56fe\u5982\u4e0b\u6240\u793a\uff1a"),l.createElement("p",null,l.createElement("img",{src:"https://static.vue-js.com/c02883b0-c76f-11eb-ab90-d9ae814b240d.png",alt:""})),l.createElement("p",null,"\u9664\u4e86\u4e0a\u8ff0\u538b\u7f29\u5305\u7684\u4f8b\u5b50\uff0c\u8fd8\u6bd4\u5982\u4e00\u4e2a ",l.createElement("code",null,"babel"),"\uff0c\u628a",l.createElement("code",null,"es6"),"\u8f6c\u6362\u4e3a\uff0c\u6211\u4eec\u5728\u5de6\u8fb9\u5199\u5165 ",l.createElement("code",null,"es6"),"\uff0c\u4ece\u53f3\u8fb9\u8bfb\u53d6 ",l.createElement("code",null,"es5")),l.createElement("p",null,"\u57fa\u672c\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),l.createElement(c.Z,{code:"const { Transform } = require('stream');\n\nconst myTransform = new Transform({\n  transform(chunk, encoding, callback) {\n    // ...\n  }\n});",lang:"js"}),l.createElement("h2",{id:"\u4e09\u5e94\u7528\u573a\u666f"},l.createElement(a.AnchorLink,{to:"#\u4e09\u5e94\u7528\u573a\u666f","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e09\u3001\u5e94\u7528\u573a\u666f"),l.createElement("p",null,l.createElement("code",null,"stream"),"\u7684\u5e94\u7528\u573a\u666f\u4e3b\u8981\u5c31\u662f\u5904\u7406",l.createElement("code",null,"IO"),"\u64cd\u4f5c\uff0c\u800c",l.createElement("code",null,"http"),"\u8bf7\u6c42\u548c\u6587\u4ef6\u64cd\u4f5c\u90fd\u5c5e\u4e8e",l.createElement("code",null,"IO"),"\u64cd\u4f5c"),l.createElement("p",null,"\u8bd5\u60f3\u4e00\u4e0b\uff0c\u5982\u679c\u4e00\u6b21",l.createElement("code",null,"IO"),"\u64cd\u4f5c\u8fc7\u5927\uff0c\u786c\u4ef6\u7684\u5f00\u9500\u5c31\u8fc7\u5927\uff0c\u800c\u5c06\u6b64\u6b21\u5927\u7684",l.createElement("code",null,"IO"),"\u64cd\u4f5c\u8fdb\u884c\u5206\u6bb5\u64cd\u4f5c\uff0c\u8ba9\u6570\u636e\u50cf\u6c34\u7ba1\u4e00\u6837\u6d41\u52a8\uff0c\u76f4\u5230\u6d41\u52a8\u5b8c\u6210"),l.createElement("p",null,"\u5e38\u89c1\u7684\u573a\u666f\u6709\uff1a"),l.createElement("ul",null,l.createElement("li",null,"get\u8bf7\u6c42\u8fd4\u56de\u6587\u4ef6\u7ed9\u5ba2\u6237\u7aef"),l.createElement("li",null,"\u6587\u4ef6\u64cd\u4f5c"),l.createElement("li",null,"\u4e00\u4e9b\u6253\u5305\u5de5\u5177\u7684\u5e95\u5c42\u64cd\u4f5c")),l.createElement("h3",{id:"get\u8bf7\u6c42\u8fd4\u56de\u6587\u4ef6\u7ed9\u5ba2\u6237\u7aef"},l.createElement(a.AnchorLink,{to:"#get\u8bf7\u6c42\u8fd4\u56de\u6587\u4ef6\u7ed9\u5ba2\u6237\u7aef","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"get\u8bf7\u6c42\u8fd4\u56de\u6587\u4ef6\u7ed9\u5ba2\u6237\u7aef"),l.createElement("p",null,"\u4f7f\u7528",l.createElement("code",null,"stream"),"\u6d41\u8fd4\u56de\u6587\u4ef6\uff0c",l.createElement("code",null,"res"),"\u4e5f\u662f\u4e00\u4e2a",l.createElement("code",null,"stream"),"\u5bf9\u8c61\uff0c\u901a\u8fc7",l.createElement("code",null,"pipe"),"\u7ba1\u9053\u5c06\u6587\u4ef6\u6570\u636e\u8fd4\u56de"),l.createElement(c.Z,{code:"const server = http.createServer(function (req, res) {\n    const method = req.method; // \u83b7\u53d6\u8bf7\u6c42\u65b9\u6cd5\n    if (method === 'GET') { // get \u8bf7\u6c42\n        const fileName = path.resolve(__dirname, 'data.txt');\n        let stream = fs.createReadStream(fileName);\n        stream.pipe(res); // \u5c06 res \u4f5c\u4e3a stream \u7684 dest\n    }\n});\nserver.listen(8000);",lang:"js"}),l.createElement("h3",{id:"\u6587\u4ef6\u64cd\u4f5c"},l.createElement(a.AnchorLink,{to:"#\u6587\u4ef6\u64cd\u4f5c","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u6587\u4ef6\u64cd\u4f5c"),l.createElement("p",null,"\u521b\u5efa\u4e00\u4e2a\u53ef\u8bfb\u6570\u636e\u6d41",l.createElement("code",null,"readStream"),"\uff0c\u4e00\u4e2a\u53ef\u5199\u6570\u636e\u6d41",l.createElement("code",null,"writeStream"),"\uff0c\u901a\u8fc7",l.createElement("code",null,"pipe"),"\u7ba1\u9053\u628a\u6570\u636e\u6d41\u8f6c\u8fc7\u53bb"),l.createElement(c.Z,{code:"const fs = require('fs')\nconst path = require('path')\n\n// \u4e24\u4e2a\u6587\u4ef6\u540d\nconst fileName1 = path.resolve(__dirname, 'data.txt')\nconst fileName2 = path.resolve(__dirname, 'data-bak.txt')\n// \u8bfb\u53d6\u6587\u4ef6\u7684 stream \u5bf9\u8c61\nconst readStream = fs.createReadStream(fileName1)\n// \u5199\u5165\u6587\u4ef6\u7684 stream \u5bf9\u8c61\nconst writeStream = fs.createWriteStream(fileName2)\n// \u901a\u8fc7 pipe\u6267\u884c\u62f7\u8d1d\uff0c\u6570\u636e\u6d41\u8f6c\nreadStream.pipe(writeStream)\n// \u6570\u636e\u8bfb\u53d6\u5b8c\u6210\u76d1\u542c\uff0c\u5373\u62f7\u8d1d\u5b8c\u6210\nreadStream.on('end', function () {\n    console.log('\u62f7\u8d1d\u5b8c\u6210')\n})",lang:"js"}),l.createElement("h3",{id:"\u4e00\u4e9b\u6253\u5305\u5de5\u5177\u7684\u5e95\u5c42\u64cd\u4f5c"},l.createElement(a.AnchorLink,{to:"#\u4e00\u4e9b\u6253\u5305\u5de5\u5177\u7684\u5e95\u5c42\u64cd\u4f5c","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e00\u4e9b\u6253\u5305\u5de5\u5177\u7684\u5e95\u5c42\u64cd\u4f5c"),l.createElement("p",null,"\u76ee\u524d\u4e00\u4e9b\u6bd4\u8f83\u706b\u7684\u524d\u7aef\u6253\u5305\u6784\u5efa\u5de5\u5177\uff0c\u90fd\u662f\u901a\u8fc7",l.createElement("code",null,"node.js"),"\u7f16\u5199\u7684\uff0c\u6253\u5305\u548c\u6784\u5efa\u7684\u8fc7\u7a0b\u80af\u5b9a\u662f\u6587\u4ef6\u9891\u7e41\u64cd\u4f5c\u7684\u8fc7\u7a0b\uff0c\u79bb\u4e0d\u6765",l.createElement("code",null,"stream"),"\uff0c\u5982",l.createElement("code",null,"gulp")),l.createElement("h2",{id:"\u53c2\u8003\u6587\u732e"},l.createElement(a.AnchorLink,{to:"#\u53c2\u8003\u6587\u732e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003\u6587\u732e"),l.createElement("ul",null,l.createElement("li",null,l.createElement(a.Link,{to:"https://xie.infoq.cn/article/1a9695020828460eb3c4ff1fa"},"https://xie.infoq.cn/article/1a9695020828460eb3c4ff1fa")),l.createElement("li",null,l.createElement(a.Link,{to:"https://juejin.cn/post/6844903891083984910"},"https://juejin.cn/post/6844903891083984910")))))}));t["default"]=e=>{var t=l.useContext(a.context),n=t.demos;return l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(r,{demos:n})}}}]);