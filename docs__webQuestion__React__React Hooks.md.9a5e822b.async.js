(self["webpackChunkblog"]=self["webpackChunkblog"]||[]).push([[3626],{42235:function(e,t,n){"use strict";n.r(t);var l=n(67294),c=n(96089),a=n(65659),o=l.memo((e=>{e.demos;return l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"\u8bf4\u8bf4\u5bf9react-hooks\u7684\u7406\u89e3\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898"},l.createElement(c.AnchorLink,{to:"#\u8bf4\u8bf4\u5bf9react-hooks\u7684\u7406\u89e3\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8bf4\u8bf4\u5bf9React Hooks\u7684\u7406\u89e3\uff1f\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898\uff1f"),l.createElement("p",null,l.createElement("img",{src:"https://static.vue-js.com/8d357c50-e12e-11eb-85f6-6fac77c0c9b3.png",alt:""})),l.createElement("h2",{id:"\u4e00\u662f\u4ec0\u4e48"},l.createElement(c.AnchorLink,{to:"#\u4e00\u662f\u4ec0\u4e48","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e00\u3001\u662f\u4ec0\u4e48"),l.createElement("p",null,l.createElement("code",null,"Hook")," \u662f React 16.8 \u7684\u65b0\u589e\u7279\u6027\u3002\u5b83\u53ef\u4ee5\u8ba9\u4f60\u5728\u4e0d\u7f16\u5199 ",l.createElement("code",null,"class")," \u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 ",l.createElement("code",null,"state")," \u4ee5\u53ca\u5176\u4ed6\u7684 ",l.createElement("code",null,"React")," \u7279\u6027"),l.createElement("p",null,"\u81f3\u4e8e\u4e3a\u4ec0\u4e48\u5f15\u5165",l.createElement("code",null,"hook"),"\uff0c\u5b98\u65b9\u7ed9\u51fa\u7684\u52a8\u673a\u662f\u89e3\u51b3\u957f\u65f6\u95f4\u4f7f\u7528\u548c\u7ef4\u62a4",l.createElement("code",null,"react"),"\u8fc7\u7a0b\u4e2d\u5e38\u9047\u5230\u7684\u95ee\u9898\uff0c\u4f8b\u5982\uff1a"),l.createElement("ul",null,l.createElement("li",null,"\u96be\u4ee5\u91cd\u7528\u548c\u5171\u4eab\u7ec4\u4ef6\u4e2d\u7684\u4e0e\u72b6\u6001\u76f8\u5173\u7684\u903b\u8f91"),l.createElement("li",null,"\u903b\u8f91\u590d\u6742\u7684\u7ec4\u4ef6\u96be\u4ee5\u5f00\u53d1\u4e0e\u7ef4\u62a4\uff0c\u5f53\u6211\u4eec\u7684\u7ec4\u4ef6\u9700\u8981\u5904\u7406\u591a\u4e2a\u4e92\u4e0d\u76f8\u5173\u7684 local state \u65f6\uff0c\u6bcf\u4e2a\u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\u53ef\u80fd\u4f1a\u5305\u542b\u7740\u5404\u79cd\u4e92\u4e0d\u76f8\u5173\u7684\u903b\u8f91\u5728\u91cc\u9762"),l.createElement("li",null,"\u7c7b\u7ec4\u4ef6\u4e2d\u7684this\u589e\u52a0\u5b66\u4e60\u6210\u672c\uff0c\u7c7b\u7ec4\u4ef6\u5728\u57fa\u4e8e\u73b0\u6709\u5de5\u5177\u7684\u4f18\u5316\u4e0a\u5b58\u5728\u4e9b\u8bb8\u95ee\u9898"),l.createElement("li",null,"\u7531\u4e8e\u4e1a\u52a1\u53d8\u52a8\uff0c\u51fd\u6570\u7ec4\u4ef6\u4e0d\u5f97\u4e0d\u6539\u4e3a\u7c7b\u7ec4\u4ef6\u7b49\u7b49")),l.createElement("p",null,"\u5728\u4ee5\u524d\uff0c\u51fd\u6570\u7ec4\u4ef6\u4e5f\u88ab\u79f0\u4e3a\u65e0\u72b6\u6001\u7684\u7ec4\u4ef6\uff0c\u53ea\u8d1f\u8d23\u6e32\u67d3\u7684\u4e00\u4e9b\u5de5\u4f5c"),l.createElement("p",null,"\u56e0\u6b64\uff0c\u73b0\u5728\u7684\u51fd\u6570\u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u662f\u6709\u72b6\u6001\u7684\u7ec4\u4ef6\uff0c\u5185\u90e8\u4e5f\u53ef\u4ee5\u7ef4\u62a4\u81ea\u8eab\u7684\u72b6\u6001\u4ee5\u53ca\u505a\u4e00\u4e9b\u903b\u8f91\u65b9\u9762\u7684\u5904\u7406"),l.createElement("h2",{id:"\u4e8c\u6709\u54ea\u4e9b"},l.createElement(c.AnchorLink,{to:"#\u4e8c\u6709\u54ea\u4e9b","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e8c\u3001\u6709\u54ea\u4e9b"),l.createElement("p",null,"\u4e0a\u9762\u8bb2\u5230\uff0c",l.createElement("code",null,"Hooks"),"\u8ba9\u6211\u4eec\u7684\u51fd\u6570\u7ec4\u4ef6\u62e5\u6709\u4e86\u7c7b\u7ec4\u4ef6\u7684\u7279\u6027\uff0c\u4f8b\u5982\u7ec4\u4ef6\u5185\u7684\u72b6\u6001\u3001\u751f\u547d\u5468\u671f"),l.createElement("p",null,"\u6700\u5e38\u89c1\u7684",l.createElement("code",null,"hooks"),"\u6709\u5982\u4e0b\uff1a"),l.createElement("ul",null,l.createElement("li",null,"useState"),l.createElement("li",null,"useEffect"),l.createElement("li",null,"\u5176\u4ed6")),l.createElement("h3",{id:"usestate"},l.createElement(c.AnchorLink,{to:"#usestate","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useState"),l.createElement("p",null,"\u9996\u5148\u7ed9\u51fa\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5982\u4e0b\uff1a"),l.createElement(a.Z,{code:"import React, { useState } from 'react';\n\nfunction Example() {\n  // \u58f0\u660e\u4e00\u4e2a\u53eb \"count\" \u7684 state \u53d8\u91cf\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p >\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}",lang:"js"}),l.createElement("p",null,"\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u901a\u8fc7",l.createElement("code",null,"useState"),"\u5b9e\u73b0\u51fd\u6570\u5185\u90e8\u7ef4\u62a4",l.createElement("code",null,"state"),"\uff0c\u53c2\u6570\u4e3a",l.createElement("code",null,"state"),"\u9ed8\u8ba4\u7684\u503c\uff0c\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u7b2c\u4e00\u4e2a\u503c\u4e3a\u5f53\u524d\u7684",l.createElement("code",null,"state"),"\uff0c\u7b2c\u4e8c\u4e2a\u503c\u4e3a\u66f4\u65b0",l.createElement("code",null,"state"),"\u7684\u51fd\u6570"),l.createElement("p",null,"\u8be5\u51fd\u6570\u7ec4\u4ef6\u7b49\u4ef7\u4e8e\u7684\u7c7b\u7ec4\u4ef6\u5982\u4e0b\uff1a"),l.createElement(a.Z,{code:"class Example extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      count: 0\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <p>You clicked {this.state.count} times</p >\n        <button onClick={() => this.setState({ count: this.state.count + 1 })}>\n          Click me\n        </button>\n      </div>\n    );\n  }\n}",lang:"js"}),l.createElement("p",null,"\u4ece\u4e0a\u8ff0\u4e24\u79cd\u4ee3\u7801\u5206\u6790\uff0c\u53ef\u4ee5\u770b\u51fa\u4e24\u8005\u533a\u522b\uff1a"),l.createElement("ul",null,l.createElement("li",null,l.createElement("p",null,"state\u58f0\u660e\u65b9\u5f0f\uff1a\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u901a\u8fc7 useState \u76f4\u63a5\u83b7\u53d6\uff0c\u7c7b\u7ec4\u4ef6\u901a\u8fc7constructor \u6784\u9020\u51fd\u6570\u4e2d\u8bbe\u7f6e")),l.createElement("li",null,l.createElement("p",null,"state\u8bfb\u53d6\u65b9\u5f0f\uff1a\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u76f4\u63a5\u4f7f\u7528\u53d8\u91cf\uff0c\u7c7b\u7ec4\u4ef6\u901a\u8fc7",l.createElement("code",null,"this.state.count"),"\u7684\u65b9\u5f0f\u83b7\u53d6")),l.createElement("li",null,l.createElement("p",null,"state\u66f4\u65b0\u65b9\u5f0f\uff1a\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u901a\u8fc7 setCount \u66f4\u65b0\uff0c\u7c7b\u7ec4\u4ef6\u901a\u8fc7this.setState()"))),l.createElement("p",null,"\u603b\u7684\u6765\u8bb2\uff0cuseState \u4f7f\u7528\u8d77\u6765\u66f4\u4e3a\u7b80\u6d01\uff0c\u51cf\u5c11\u4e86",l.createElement("code",null,"this"),"\u6307\u5411\u4e0d\u660e\u786e\u7684\u60c5\u51b5"),l.createElement("h3",{id:"useeffect"},l.createElement(c.AnchorLink,{to:"#useeffect","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useEffect"),l.createElement("p",null,l.createElement("code",null,"useEffect"),"\u53ef\u4ee5\u8ba9\u6211\u4eec\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u8fdb\u884c\u4e00\u4e9b\u5e26\u6709\u526f\u4f5c\u7528\u7684\u64cd\u4f5c"),l.createElement("p",null,"\u540c\u6837\u7ed9\u51fa\u4e00\u4e2a\u8ba1\u65f6\u5668\u793a\u4f8b\uff1a"),l.createElement(a.Z,{code:"class Example extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      count: 0\n    };\n  }\n\n  componentDidMount() {\n    document.title = `You clicked ${this.state.count} times`;\n  }\n  componentDidUpdate() {\n    document.title = `You clicked ${this.state.count} times`;\n  }\n\n  render() {\n    return (\n      <div>\n        <p>You clicked {this.state.count} times</p >\n        <button onClick={() => this.setState({ count: this.state.count + 1 })}>\n          Click me\n        </button>\n      </div>\n    );\n  }\n}",lang:"js"}),l.createElement("p",null,"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u89c1\uff0c\u7ec4\u4ef6\u5728\u52a0\u8f7d\u548c\u66f4\u65b0\u9636\u6bb5\u90fd\u6267\u884c\u540c\u6837\u64cd\u4f5c"),l.createElement("p",null,"\u800c\u5982\u679c\u4f7f\u7528",l.createElement("code",null,"useEffect"),"\u540e\uff0c\u5219\u80fd\u591f\u5c06\u76f8\u540c\u7684\u903b\u8f91\u62bd\u79bb\u51fa\u6765\uff0c\u8fd9\u662f\u7c7b\u7ec4\u4ef6\u4e0d\u5177\u5907\u7684\u65b9\u6cd5"),l.createElement("p",null,"\u5bf9\u5e94\u7684",l.createElement("code",null,"useEffect"),"\u793a\u4f8b\u5982\u4e0b\uff1a"),l.createElement(a.Z,{code:"import React, { useState, useEffect } from 'react';\nfunction Example() {\n  const [count, setCount] = useState(0);\n \n  useEffect(() => {    document.title = `You clicked ${count} times`;  });\n  return (\n    <div>\n      <p>You clicked {count} times</p >\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}",lang:"js"}),l.createElement("p",null,l.createElement("code",null,"useEffect"),"\u7b2c\u4e00\u4e2a\u53c2\u6570\u63a5\u53d7\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",l.createElement("code",null,"useEffect"),"\u4f1a\u5728\u7b2c\u4e00\u6b21\u6e32\u67d3\u548c\u66f4\u65b0\u4e4b\u540e\u90fd\u4f1a\u6267\u884c\uff0c\u76f8\u5f53\u4e8e\u5728",l.createElement("code",null,"componentDidMount"),"\u548c",l.createElement("code",null,"componentDidUpdate"),"\u4e24\u4e2a\u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\u6267\u884c\u56de\u8c03"),l.createElement("p",null,"\u5982\u679c\u67d0\u4e9b\u7279\u5b9a\u503c\u5728\u4e24\u6b21\u91cd\u6e32\u67d3\u4e4b\u95f4\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u4f60\u53ef\u4ee5\u8df3\u8fc7\u5bf9 effect \u7684\u8c03\u7528\uff0c\u8fd9\u65f6\u5019\u53ea\u9700\u8981\u4f20\u5165\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u5982\u4e0b\uff1a"),l.createElement(a.Z,{code:"useEffect(() => {\n  document.title = `You clicked ${count} times`;\n}, [count]); // \u4ec5\u5728 count \u66f4\u6539\u65f6\u66f4\u65b0",lang:"js"}),l.createElement("p",null,"\u4e0a\u8ff0\u4f20\u5165\u7b2c\u4e8c\u4e2a\u53c2\u6570\u540e\uff0c\u5982\u679c ",l.createElement("code",null,"count")," \u7684\u503c\u662f ",l.createElement("code",null,"5"),"\uff0c\u800c\u4e14\u6211\u4eec\u7684\u7ec4\u4ef6\u91cd\u6e32\u67d3\u7684\u65f6\u5019 ",l.createElement("code",null,"count")," \u8fd8\u662f\u7b49\u4e8e ",l.createElement("code",null,"5"),"\uff0cReact \u5c06\u5bf9\u524d\u4e00\u6b21\u6e32\u67d3\u7684 ",l.createElement("code",null,"[5]")," \u548c\u540e\u4e00\u6b21\u6e32\u67d3\u7684 ",l.createElement("code",null,"[5]")," \u8fdb\u884c\u6bd4\u8f83\uff0c\u5982\u679c\u662f\u76f8\u7b49\u5219\u8df3\u8fc7",l.createElement("code",null,"effects"),"\u6267\u884c"),l.createElement("p",null,"\u56de\u8c03\u51fd\u6570\u4e2d\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u6e05\u9664\u51fd\u6570\uff0c\u8fd9\u662f",l.createElement("code",null,"effect"),"\u53ef\u9009\u7684\u6e05\u9664\u673a\u5236\uff0c\u76f8\u5f53\u4e8e\u7c7b\u7ec4\u4ef6\u4e2d",l.createElement("code",null,"componentwillUnmount"),"\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u53ef\u505a\u4e00\u4e9b\u6e05\u9664\u526f\u4f5c\u7528\u7684\u64cd\u4f5c\uff0c\u5982\u4e0b\uff1a"),l.createElement(a.Z,{code:"useEffect(() => {\n    function handleStatusChange(status) {\n        setIsOnline(status.isOnline);\n    }\n\n    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);\n    return () => {\n        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);\n    };\n});",lang:"js"}),l.createElement("p",null,"\u6240\u4ee5\uff0c ",l.createElement("code",null,"useEffect"),"\u76f8\u5f53\u4e8e",l.createElement("code",null,"componentDidMount"),"\uff0c",l.createElement("code",null,"componentDidUpdate")," \u548c ",l.createElement("code",null,"componentWillUnmount")," \u8fd9\u4e09\u4e2a\u751f\u547d\u5468\u671f\u51fd\u6570\u7684\u7ec4\u5408"),l.createElement("h3",{id:"\u5176\u5b83-hooks"},l.createElement(c.AnchorLink,{to:"#\u5176\u5b83-hooks","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u5176\u5b83 hooks"),l.createElement("p",null,"\u5728\u7ec4\u4ef6\u901a\u4fe1\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u4f7f\u7528",l.createElement("code",null,"useContext"),"\uff0c",l.createElement("code",null,"refs"),"\u5b66\u4e60\u4e2d\u6211\u4eec\u4e5f\u7528\u5230\u4e86",l.createElement("code",null,"useRef"),"\u83b7\u53d6",l.createElement("code",null,"DOM"),"\u7ed3\u6784......"),l.createElement("p",null,"\u8fd8\u6709\u5f88\u591a\u989d\u5916\u7684",l.createElement("code",null,"hooks"),"\uff0c\u5982\uff1a"),l.createElement("ul",null,l.createElement("li",null,"useReducer"),l.createElement("li",null,"useCallback"),l.createElement("li",null,"useMemo"),l.createElement("li",null,"useRef")),l.createElement("h2",{id:"\u4e09\u89e3\u51b3\u4ec0\u4e48"},l.createElement(c.AnchorLink,{to:"#\u4e09\u89e3\u51b3\u4ec0\u4e48","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e09\u3001\u89e3\u51b3\u4ec0\u4e48"),l.createElement("p",null,"\u901a\u8fc7\u5bf9\u4e0a\u9762\u7684\u521d\u6b65\u8ba4\u8bc6\uff0c\u53ef\u4ee5\u770b\u5230",l.createElement("code",null,"hooks"),"\u80fd\u591f\u66f4\u5bb9\u6613\u89e3\u51b3\u72b6\u6001\u76f8\u5173\u7684\u91cd\u7528\u7684\u95ee\u9898\uff1a"),l.createElement("ul",null,l.createElement("li",null,l.createElement("p",null,"\u6bcf\u8c03\u7528useHook\u4e00\u6b21\u90fd\u4f1a\u751f\u6210\u4e00\u4efd\u72ec\u7acb\u7684\u72b6\u6001")),l.createElement("li",null,l.createElement("p",null,"\u901a\u8fc7\u81ea\u5b9a\u4e49hook\u80fd\u591f\u66f4\u597d\u7684\u5c01\u88c5\u6211\u4eec\u7684\u529f\u80fd"))),l.createElement("p",null,"\u7f16\u5199",l.createElement("code",null,"hooks"),"\u4e3a\u51fd\u6570\u5f0f\u7f16\u7a0b\uff0c\u6bcf\u4e2a\u529f\u80fd\u90fd\u5305\u88f9\u5728\u51fd\u6570\u4e2d\uff0c\u6574\u4f53\u98ce\u683c\u66f4\u6e05\u723d\uff0c\u66f4\u4f18\u96c5"),l.createElement("p",null,l.createElement("code",null,"hooks"),"\u7684\u51fa\u73b0\uff0c\u4f7f\u51fd\u6570\u7ec4\u4ef6\u7684\u529f\u80fd\u5f97\u5230\u4e86\u6269\u5145\uff0c\u62e5\u6709\u4e86\u7c7b\u7ec4\u4ef6\u76f8\u4f3c\u7684\u529f\u80fd\uff0c\u5728\u6211\u4eec\u65e5\u5e38\u4f7f\u7528\u4e2d\uff0c\u4f7f\u7528",l.createElement("code",null,"hooks"),"\u80fd\u591f\u89e3\u51b3\u5927\u591a\u6570\u95ee\u9898\uff0c\u5e76\u4e14\u8fd8\u62e5\u6709\u4ee3\u7801\u590d\u7528\u673a\u5236\uff0c\u56e0\u6b64\u4f18\u5148\u8003\u8651",l.createElement("code",null,"hooks")),l.createElement("h2",{id:"\u53c2\u8003\u6587\u732e"},l.createElement(c.AnchorLink,{to:"#\u53c2\u8003\u6587\u732e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003\u6587\u732e"),l.createElement("ul",null,l.createElement("li",null,l.createElement(c.Link,{to:"https://zh-hans.reactjs.org/docs/hooks-state.html"},"https://zh-hans.reactjs.org/docs/hooks-state.html")),l.createElement("li",null,l.createElement(c.Link,{to:"https://zh-hans.reactjs.org/docs/hooks-effect.html"},"https://zh-hans.reactjs.org/docs/hooks-effect.html")),l.createElement("li",null,l.createElement(c.Link,{to:"https://www.cnblogs.com/lalalagq/p/9898531.html"},"https://www.cnblogs.com/lalalagq/p/9898531.html")))))}));t["default"]=e=>{var t=l.useContext(c.context),n=t.demos;return l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(o,{demos:n})}}}]);