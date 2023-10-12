(self["webpackChunkblog"]=self["webpackChunkblog"]||[]).push([[7592],{54519:function(e,t,n){"use strict";n.r(t);var a=n(67294),l=n(96089),r=a.memo((e=>{e.demos;return a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown"},a.createElement("h1",{id:"\u8bf4\u8bf4\u4f60\u4e86\u89e3\u7684js\u6570\u636e\u7ed3\u6784"},a.createElement(l.AnchorLink,{to:"#\u8bf4\u8bf4\u4f60\u4e86\u89e3\u7684js\u6570\u636e\u7ed3\u6784","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u8bf4\u8bf4\u4f60\u4e86\u89e3\u7684js\u6570\u636e\u7ed3\u6784\uff1f"),a.createElement("h2",{id:"\u4ec0\u4e48\u662f\u6570\u636e\u7ed3\u6784"},a.createElement(l.AnchorLink,{to:"#\u4ec0\u4e48\u662f\u6570\u636e\u7ed3\u6784","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4ec0\u4e48\u662f\u6570\u636e\u7ed3\u6784\uff1f"),a.createElement("p",null,"\u6570\u636e\u7ed3\u6784\u662f\u8ba1\u7b97\u673a\u5b58\u50a8\u3001\u7ec4\u7ec7\u6570\u636e\u7684\u65b9\u5f0f\u3002 \u6570\u636e\u7ed3\u6784\u610f\u5473\u7740\u63a5\u53e3\u6216\u5c01\u88c5\uff1a\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\u53ef\u88ab\u89c6\u4e3a\u4e24\u4e2a\u51fd\u6570\u4e4b\u95f4\u7684\u63a5\u53e3\uff0c\u6216\u8005\u662f\u7531\u6570\u636e\u7c7b\u578b\u8054\u5408\u7ec4\u6210\u7684\u5b58\u50a8\u5185\u5bb9\u7684\u8bbf\u95ee\u65b9\u6cd5\u5c01\u88c5\u3002"),a.createElement("p",null,"\u6211\u4eec\u6bcf\u5929\u7684\u7f16\u7801\u4e2d\u90fd\u4f1a\u7528\u5230\u6570\u636e\u7ed3\u6784 \u6570\u7ec4\u662f\u6700\u7b80\u5355\u7684\u5185\u5b58\u6570\u636e\u7ed3\u6784 \u4e0b\u9762\u662f\u5e38\u89c1\u7684\u6570\u636e\u7ed3\u6784\uff1a"),a.createElement("ol",null,a.createElement("li",null,"\u6570\u7ec4\uff08Array\uff09"),a.createElement("li",null,"\u6808\uff08Stack\uff09"),a.createElement("li",null,"\u961f\u5217\uff08Queue\uff09"),a.createElement("li",null,"\u94fe\u8868\uff08Linked List\uff09"),a.createElement("li",null,"\u5b57\u5178"),a.createElement("li",null,"\u6563\u5217\u8868\uff08Hash table\uff09"),a.createElement("li",null,"\u6811\uff08Tree\uff09"),a.createElement("li",null,"\u56fe\uff08Graph\uff09"),a.createElement("li",null,"\u5806\uff08Heap\uff09")),a.createElement("h2",{id:"\u6570\u7ec4array"},a.createElement(l.AnchorLink,{to:"#\u6570\u7ec4array","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u6570\u7ec4\uff08Array\uff09"),a.createElement("p",null,"\u6570\u7ec4\u662f\u6700\u6700\u57fa\u672c\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5f88\u591a\u8bed\u8a00\u90fd\u5185\u7f6e\u652f\u6301\u6570\u7ec4\u3002 \u6570\u7ec4\u662f\u4f7f\u7528\u4e00\u5757\u8fde\u7eed\u7684\u5185\u5b58\u7a7a\u95f4\u4fdd\u5b58\u6570\u636e\uff0c\u4fdd\u5b58\u7684\u6570\u636e\u7684\u4e2a\u6570\u5728\u5206\u914d\u5185\u5b58\u7684\u65f6\u5019\u5c31\u662f\u786e\u5b9a\u7684\u3002"),a.createElement("p",null,"\u5728\u65e5\u5e38\u751f\u6d3b\u4e2d\uff0c\u4eba\u4eec\u7ecf\u5e38\u4f7f\u7528\u5217\u8868\uff1a\u5f85\u529e\u4e8b\u9879\u5217\u8868\u3001\u8d2d\u7269\u6e05\u5355\u7b49\u3002"),a.createElement("p",null,"\u800c\u8ba1\u7b97\u673a\u7a0b\u5e8f\u4e5f\u5728\u4f7f\u7528\u5217\u8868\uff0c\u5728\u4e0b\u9762\u7684\u6761\u4ef6\u4e0b\uff0c\u9009\u62e9\u5217\u8868\u4f5c\u4e3a\u6570\u636e\u7ed3\u6784\u5c31\u663e\u5f97\u5c24\u4e3a\u6709\u7528\uff1a \u6570\u636e\u7ed3\u6784\u8f83\u4e3a\u7b80\u5355 \u4e0d\u9700\u8981\u5728\u4e00\u4e2a\u957f\u5e8f\u5217\u4e2d\u67e5\u627e\u5143\u7d20\uff0c\u6216\u8005\u5bf9\u5176\u8fdb\u884c\u6392\u5e8f \u53cd\u4e4b\uff0c\u5982\u679c\u6570\u636e\u7ed3\u6784\u975e\u5e38\u590d\u6742\uff0c\u5217\u8868\u7684\u4f5c\u7528\u5c31\u6ca1\u6709\u90a3\u4e48\u5927\u4e86\u3002"),a.createElement("h2",{id:"\u6808stack"},a.createElement(l.AnchorLink,{to:"#\u6808stack","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u6808\uff08Stack\uff09"),a.createElement("p",null,"\u6808\u662f\u4e00\u79cd\u9075\u5faa\u540e\u8fdb\u5148\u51fa\uff08LIFO\uff09\u539f\u5219\u7684\u6709\u5e8f\u96c6\u5408 \u5728\u6808\u91cc\uff0c\u65b0\u5143\u7d20\u90fd\u63a5\u8fd1\u6808\u9876\uff0c\u65e7\u5143\u7d20\u90fd\u63a5\u8fd1\u6808\u5e95\u3002 \u6bcf\u6b21\u52a0\u5165\u65b0\u7684\u5143\u7d20\u548c\u62ff\u8d70\u5143\u7d20\u90fd\u5728\u9876\u90e8\u64cd\u4f5c",a.createElement("img",{src:"https://upload-images.jianshu.io/upload_images/13253432-ddcb884374470d2c?imageMogr2/auto-orient/strip%7CimageView2/2/format/webp",alt:""})),a.createElement("h2",{id:"\u961f\u5217queue"},a.createElement(l.AnchorLink,{to:"#\u961f\u5217queue","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u961f\u5217\uff08Queue\uff09"),a.createElement("p",null,"\u961f\u5217\u662f\u9075\u5faa\u5148\u8fdb\u5148\u51fa\uff08FIFO\uff0c\u4e5f\u79f0\u4e3a\u5148\u6765\u5148\u670d\u52a1\uff09\u539f\u5219\u7684\u4e00\u7ec4\u6709\u5e8f\u7684\u9879 \u961f\u5217\u5728\u5c3e\u90e8\u6dfb\u52a0\u65b0\u5143\u7d20\uff0c\u5e76\u4ece\u9876\u90e8\u79fb\u9664\u5143\u7d20 \u6700\u65b0\u6dfb\u52a0\u7684\u5143\u7d20\u5fc5\u987b\u6392\u5728\u961f\u5217\u7684\u672b\u5c3e",a.createElement("img",{src:"https://upload-images.jianshu.io/upload_images/13253432-55ad7c7db40d3796?imageMogr2/auto-orient/strip%7CimageView2/2/format/webp",alt:""})),a.createElement("h2",{id:"\u94fe\u8868linked-list"},a.createElement(l.AnchorLink,{to:"#\u94fe\u8868linked-list","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u94fe\u8868\uff08Linked List\uff09"),a.createElement("p",null,"\u94fe\u8868\u4e5f\u662f\u4e00\u79cd\u5217\u8868\uff0c\u5df2\u7ecf\u8bbe\u8ba1\u4e86\u6570\u7ec4\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981\u94fe\u8868\u5462\uff1f JavaScript\u4e2d\u6570\u7ec4\u7684\u4e3b\u8981\u95ee\u9898\u65f6\uff0c\u5b83\u4eec\u88ab\u5b9e\u73b0\u6210\u4e86\u5bf9\u8c61\uff0c \u4e0e\u5176\u4ed6\u8bed\u8a00\uff08\u6bd4\u5982C++\u548cJava\uff09\u7684\u6570\u7ec4\u76f8\u5bf9\uff0c\u6548\u7387\u5f88\u4f4e\u3002 \u5982\u679c\u4f60\u53d1\u73b0\u6570\u7ec4\u5728\u5b9e\u9645\u4f7f\u7528\u65f6\u5f88\u6162\uff0c\u5c31\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u94fe\u8868\u6765\u4ee3\u66ff\u5b83\u3002"),a.createElement("p",null,"\u4f7f\u7528\u6761\u4ef6\uff1a \u94fe\u8868\u51e0\u4e4e\u53ef\u4ee5\u7528\u5728\u4efb\u4f55\u53ef\u4ee5\u4f7f\u7528\u4e00\u7ef4\u6570\u7ec4\u7684\u60c5\u51b5\u4e2d\u3002 \u5982\u679c\u9700\u8981\u968f\u673a\u8bbf\u95ee\uff0c\u6570\u7ec4\u4ecd\u7136\u662f\u66f4\u597d\u7684\u9009\u62e9\u3002",a.createElement("img",{src:"https://raw.githubusercontent.com/zoro-web/blog/master/img/lian.jpg",alt:""})),a.createElement("h2",{id:"\u5b57\u5178"},a.createElement(l.AnchorLink,{to:"#\u5b57\u5178","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u5b57\u5178"),a.createElement("p",null,"\u5b57\u5178\u662f\u4e00\u79cd\u4ee5\u952e-\u503c\u5bf9\u5b58\u50a8\u6570\u636e\u7684\u6570\u636e\u7ed3\u6784\uff0cjs\u4e2d\u7684Object\u7c7b\u5c31\u662f\u4ee5\u5b57\u5178\u7684\u5f62\u5f0f\u8bbe\u8ba1\u7684\u3002JavaScript\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0\u5b57\u5178\u7c7b\uff0c\u8ba9\u8fd9\u79cd\u5b57\u5178\u7c7b\u578b\u7684\u5bf9\u8c61\u4f7f\u7528\u8d77\u6765\u66f4\u52a0\u7b80\u5355\uff0c\u5b57\u5178\u53ef\u4ee5\u5b9e\u73b0\u5bf9\u8c61\u62e5\u6709\u7684\u5e38\u89c1\u529f\u80fd\uff0c\u5e76\u76f8\u5e94\u62d3\u5c55\u81ea\u5df1\u60f3\u8981\u7684\u529f\u80fd\uff0c\u800c\u5bf9\u8c61\u5728JavaScript\u7f16\u5199\u4e2d\u968f\u5904\u53ef\u89c1\uff0c\u6240\u4ee5\u5b57\u5178\u7684\u4f5c\u7528\u4e5f\u5f02\u5e38\u660e\u663e\u4e86\u3002"),a.createElement("h2",{id:"\u6563\u5217\u8868"},a.createElement(l.AnchorLink,{to:"#\u6563\u5217\u8868","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u6563\u5217\u8868"),a.createElement("p",null,"\u4e5f\u79f0\u4e3a\u54c8\u5e0c\u8868\uff0c\u7279\u70b9\u662f\u5728\u6563\u5217\u8868\u4e0a\u63d2\u5165\u3001\u5220\u9664\u548c\u53d6\u7528\u6570\u636e\u90fd\u975e\u5e38\u5feb\u3002 \u4e3a\u4ec0\u4e48\u8981\u8bbe\u8ba1\u8fd9\u79cd\u6570\u636e\u7ed3\u6784\u5462\uff1f \u7528\u6570\u7ec4\u6216\u94fe\u8868\u5b58\u50a8\u6570\u636e\uff0c\u5982\u679c\u60f3\u8981\u627e\u5230\u5176\u4e2d\u4e00\u4e2a\u6570\u636e\uff0c\u9700\u8981\u4ece\u5934\u8fdb\u884c\u904d\u5386\uff0c\u56e0\u4e3a\u4e0d\u77e5\u9053\u8fd9\u4e2a\u6570\u636e\u5b58\u50a8\u5230\u4e86\u6570\u7ec4\u7684\u54ea\u4e2a\u4f4d\u7f6e\u3002"),a.createElement("p",null,"\u6563\u5217\u8868\u5728JavaScript\u4e2d\u53ef\u4ee5\u57fa\u7840\u6570\u7ec4\u53bb\u8fdb\u884c\u8bbe\u8ba1\u3002 \u6570\u7ec4\u7684\u957f\u5ea6\u662f\u9884\u5148\u8bbe\u5b9a\u7684\uff0c\u6240\u6709\u5143\u7d20\u6839\u636e\u548c\u8be5\u5143\u7d20\u5bf9\u5e94\u7684\u952e\uff0c\u4fdd\u5b58\u5728\u6570\u7ec4\u7684\u7279\u5b9a\u4f4d\u7f6e\uff0c\u8fd9\u91cc\u7684\u952e\u548c\u5bf9\u8c61\u7684\u952e\u662f\u7c7b\u578b\u7684\u6982\u5ff5\u3002 \u4f7f\u7528\u6563\u5217\u8868\u5b58\u50a8\u6570\u7ec4\u65f6\uff0c\u901a\u8fc7\u4e00\u4e2a\u6563\u5217\u51fd\u6570\u5c06\u952e\u6620\u5c04\u4e3a\u4e00\u4e2a\u6570\u5b57\uff0c\u8fd9\u4e2a\u6570\u5b57\u7684\u8303\u56f4\u662f0\u5230\u6563\u5217\u8868\u7684\u957f\u5ea6\u3002"),a.createElement("p",null,"\u5373\u4f7f\u4f7f\u7528\u4e00\u4e2a\u9ad8\u6548\u7684\u6563\u5217\u51fd\u6570\uff0c\u4f9d\u7136\u5b58\u5728\u5c06\u4e24\u4e2a\u952e\u6620\u5c04\u4e3a\u540c\u4e00\u4e2a\u503c\u5f97\u53ef\u80fd\uff0c\u8fd9\u79cd\u73b0\u8c61\u53eb\u505a\u78b0\u649e\u3002\u5e38\u89c1\u78b0\u649e\u7684\u5904\u7406\u65b9\u6cd5\u6709\uff1a\u5f00\u94fe\u6cd5\u548c\u7ebf\u6027\u63a2\u6d4b\u6cd5\uff08\u5177\u4f53\u6982\u5ff5\u6709\u5174\u8da3\u7684\u53ef\u4ee5\u7f51\u4e0a\u81ea\u4fe1\u4e86\u89e3\uff09 \u4f7f\u7528\u6761\u4ef6\uff1a \u53ef\u4ee5\u7528\u4e8e\u6570\u636e\u7684\u63d2\u5165\u3001\u5220\u9664\u548c\u53d6\u7528\uff0c\u4e0d\u9002\u7528\u4e8e\u67e5\u627e\u6570\u636e",a.createElement("img",{src:"https://raw.githubusercontent.com/zoro-web/blog/master/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20170820211406.png",alt:""}))))}));t["default"]=e=>{var t=a.useContext(l.context),n=t.demos;return a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.createElement(r,{demos:n})}}}]);