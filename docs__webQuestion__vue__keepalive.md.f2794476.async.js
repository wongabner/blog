(self["webpackChunkblog"]=self["webpackChunkblog"]||[]).push([[3786],{39965:function(e,n,t){"use strict";t.r(n);var l=t(67294),c=t(96089),a=t(65659),o=l.memo((e=>{e.demos;return l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"\u8bf4\u8bf4\u4f60\u5bf9keep-alive\u7684\u7406\u89e3\u662f\u4ec0\u4e48"},l.createElement(c.AnchorLink,{to:"#\u8bf4\u8bf4\u4f60\u5bf9keep-alive\u7684\u7406\u89e3\u662f\u4ec0\u4e48","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8bf4\u8bf4\u4f60\u5bf9keep-alive\u7684\u7406\u89e3\u662f\u4ec0\u4e48\uff1f"),l.createElement("p",null,l.createElement("img",{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9nSDMxdUY5VklpYlRaSXdpY3ZmUkR3STRiamRBVGlhVEpFZDNzamRoeTd3MDlVM0k5ZERjNUVVSUNFVk1WSVE2aDFYMjVpY1NRT3lraWFwWEpEUFM0VGJST0l3LzY0MA?x-oss-process=image/format,png",alt:""})),l.createElement("h2",{id:"\u4e00keep-alive-\u662f\u4ec0\u4e48"},l.createElement(c.AnchorLink,{to:"#\u4e00keep-alive-\u662f\u4ec0\u4e48","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e00\u3001Keep-alive \u662f\u4ec0\u4e48"),l.createElement("p",null,l.createElement("code",null,"keep-alive"),"\u662f",l.createElement("code",null,"vue"),"\u4e2d\u7684\u5185\u7f6e\u7ec4\u4ef6\uff0c\u80fd\u5728\u7ec4\u4ef6\u5207\u6362\u8fc7\u7a0b\u4e2d\u5c06\u72b6\u6001\u4fdd\u7559\u5728\u5185\u5b58\u4e2d\uff0c\u9632\u6b62\u91cd\u590d\u6e32\u67d3",l.createElement("code",null,"DOM")),l.createElement("p",null,l.createElement("code",null,"keep-alive")," \u5305\u88f9\u52a8\u6001\u7ec4\u4ef6\u65f6\uff0c\u4f1a\u7f13\u5b58\u4e0d\u6d3b\u52a8\u7684\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u800c\u4e0d\u662f\u9500\u6bc1\u5b83\u4eec"),l.createElement("p",null,l.createElement("code",null,"keep-alive"),"\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b",l.createElement("code",null,"props"),"\u5c5e\u6027\uff1a"),l.createElement("ul",null,l.createElement("li",null,l.createElement("p",null,l.createElement("code",null,"include")," - \u5b57\u7b26\u4e32\u6216\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u53ea\u6709\u540d\u79f0\u5339\u914d\u7684\u7ec4\u4ef6\u4f1a\u88ab\u7f13\u5b58")),l.createElement("li",null,l.createElement("p",null,l.createElement("code",null,"exclude")," - \u5b57\u7b26\u4e32\u6216\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u4efb\u4f55\u540d\u79f0\u5339\u914d\u7684\u7ec4\u4ef6\u90fd\u4e0d\u4f1a\u88ab\u7f13\u5b58")),l.createElement("li",null,l.createElement("p",null,l.createElement("code",null,"max")," - \u6570\u5b57\u3002\u6700\u591a\u53ef\u4ee5\u7f13\u5b58\u591a\u5c11\u7ec4\u4ef6\u5b9e\u4f8b"))),l.createElement("p",null,"\u5173\u4e8e",l.createElement("code",null,"keep-alive"),"\u7684\u57fa\u672c\u7528\u6cd5\uff1a"),l.createElement(a.Z,{code:'<keep-alive>\n  <component :is="view"></component>\n</keep-alive>',lang:"go"}),l.createElement("p",null,"\u4f7f\u7528",l.createElement("code",null,"includes"),"\u548c",l.createElement("code",null,"exclude"),"\uff1a"),l.createElement(a.Z,{code:'<keep-alive include="a,b">\n  <component :is="view"></component>\n</keep-alive>\n\n\x3c!-- \u6b63\u5219\u8868\u8fbe\u5f0f (\u4f7f\u7528 `v-bind`) --\x3e\n<keep-alive :include="/a|b/">\n  <component :is="view"></component>\n</keep-alive>\n\n\x3c!-- \u6570\u7ec4 (\u4f7f\u7528 `v-bind`) --\x3e\n<keep-alive :include="[\'a\', \'b\']">\n  <component :is="view"></component>\n</keep-alive>',lang:"go"}),l.createElement("p",null,"\u5339\u914d\u9996\u5148\u68c0\u67e5\u7ec4\u4ef6\u81ea\u8eab\u7684 ",l.createElement("code",null,"name")," \u9009\u9879\uff0c\u5982\u679c ",l.createElement("code",null,"name")," \u9009\u9879\u4e0d\u53ef\u7528\uff0c\u5219\u5339\u914d\u5b83\u7684\u5c40\u90e8\u6ce8\u518c\u540d\u79f0 (\u7236\u7ec4\u4ef6 ",l.createElement("code",null,"components")," \u9009\u9879\u7684\u952e\u503c)\uff0c\u533f\u540d\u7ec4\u4ef6\u4e0d\u80fd\u88ab\u5339\u914d"),l.createElement("p",null,"\u8bbe\u7f6e\u4e86 keep-alive \u7f13\u5b58\u7684\u7ec4\u4ef6\uff0c\u4f1a\u591a\u51fa\u4e24\u4e2a\u751f\u547d\u5468\u671f\u94a9\u5b50\uff08",l.createElement("code",null,"activated"),"\u4e0e",l.createElement("code",null,"deactivated"),"\uff09\uff1a"),l.createElement("ul",null,l.createElement("li",null,l.createElement("p",null,"\u9996\u6b21\u8fdb\u5165\u7ec4\u4ef6\u65f6\uff1a",l.createElement("code",null,"beforeRouteEnter")," > ",l.createElement("code",null,"beforeCreate")," > ",l.createElement("code",null,"created"),"> ",l.createElement("code",null,"mounted")," > ",l.createElement("code",null,"activated")," > ... ... > ",l.createElement("code",null,"beforeRouteLeave")," > ",l.createElement("code",null,"deactivated"))),l.createElement("li",null,l.createElement("p",null,"\u518d\u6b21\u8fdb\u5165\u7ec4\u4ef6\u65f6\uff1a",l.createElement("code",null,"beforeRouteEnter")," >",l.createElement("code",null,"activated")," > ... ... > ",l.createElement("code",null,"beforeRouteLeave")," > ",l.createElement("code",null,"deactivated")))),l.createElement("h2",{id:"\u4e8c\u4f7f\u7528\u573a\u666f"},l.createElement(c.AnchorLink,{to:"#\u4e8c\u4f7f\u7528\u573a\u666f","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e8c\u3001\u4f7f\u7528\u573a\u666f"),l.createElement("p",null,"\u4f7f\u7528\u539f\u5219\uff1a\u5f53\u6211\u4eec\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u4e0d\u9700\u8981\u8ba9\u9875\u9762\u91cd\u65b0\u52a0\u8f7d\u65f6\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",l.createElement("code",null,"keepalive")),l.createElement("p",null,"\u4e3e\u4e2a\u6817\u5b50:"),l.createElement("p",null,"\u5f53\u6211\u4eec\u4ece",l.createElement("code",null,"\u9996\u9875"),"\u2013>",l.createElement("code",null,"\u5217\u8868\u9875"),"\u2013>",l.createElement("code",null,"\u5546\u8be6\u9875"),"\u2013>",l.createElement("code",null,"\u518d\u8fd4\u56de"),"\uff0c\u8fd9\u65f6\u5019\u5217\u8868\u9875\u5e94\u8be5\u662f\u9700\u8981",l.createElement("code",null,"keep-alive")),l.createElement("p",null,"\u4ece",l.createElement("code",null,"\u9996\u9875"),"\u2013>",l.createElement("code",null,"\u5217\u8868\u9875"),"\u2013>",l.createElement("code",null,"\u5546\u8be6\u9875"),"\u2013>",l.createElement("code",null,"\u8fd4\u56de\u5230\u5217\u8868\u9875(\u9700\u8981\u7f13\u5b58)"),"\u2013>",l.createElement("code",null,"\u8fd4\u56de\u5230\u9996\u9875(\u9700\u8981\u7f13\u5b58)"),"\u2013>",l.createElement("code",null,"\u518d\u6b21\u8fdb\u5165\u5217\u8868\u9875(\u4e0d\u9700\u8981\u7f13\u5b58)"),"\uff0c\u8fd9\u65f6\u5019\u53ef\u4ee5\u6309\u9700\u6765\u63a7\u5236\u9875\u9762\u7684",l.createElement("code",null,"keep-alive")),l.createElement("p",null,"\u5728\u8def\u7531\u4e2d\u8bbe\u7f6e",l.createElement("code",null,"keepAlive"),"\u5c5e\u6027\u5224\u65ad\u662f\u5426\u9700\u8981\u7f13\u5b58"),l.createElement(a.Z,{code:"{\n  path: 'list',\n  name: 'itemList', // \u5217\u8868\u9875\n  component (resolve) {\n    require(['@/pages/item/list'], resolve)\n },\n meta: {\n  keepAlive: true,\n  title: '\u5217\u8868\u9875'\n }\n}",lang:"go"}),l.createElement("p",null,"\u4f7f\u7528",l.createElement("code",null,"<keep-alive>")),l.createElement(a.Z,{code:'<div id="app" class=\'wrapper\'>\n    <keep-alive>\n        \x3c!-- \u9700\u8981\u7f13\u5b58\u7684\u89c6\u56fe\u7ec4\u4ef6 --\x3e \n        <router-view v-if="$route.meta.keepAlive"></router-view>\n     </keep-alive>\n      \x3c!-- \u4e0d\u9700\u8981\u7f13\u5b58\u7684\u89c6\u56fe\u7ec4\u4ef6 --\x3e\n     <router-view v-if="!$route.meta.keepAlive"></router-view>\n</div>',lang:"go"}),l.createElement("h2",{id:"\u4e09\u539f\u7406\u5206\u6790"},l.createElement(c.AnchorLink,{to:"#\u4e09\u539f\u7406\u5206\u6790","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e09\u3001\u539f\u7406\u5206\u6790"),l.createElement("p",null,l.createElement("code",null,"keep-alive"),"\u662f",l.createElement("code",null,"vue"),"\u4e2d\u5185\u7f6e\u7684\u4e00\u4e2a\u7ec4\u4ef6"),l.createElement("p",null,"\u6e90\u7801\u4f4d\u7f6e\uff1asrc/core/components/keep-alive.js"),l.createElement(a.Z,{code:"export default {\n  name: 'keep-alive',\n  abstract: true,\n\n  props: {\n    include: [String, RegExp, Array],\n    exclude: [String, RegExp, Array],\n    max: [String, Number]\n  },\n\n  created () {\n    this.cache = Object.create(null)\n    this.keys = []\n  },\n\n  destroyed () {\n    for (const key in this.cache) {\n      pruneCacheEntry(this.cache, key, this.keys)\n    }\n  },\n\n  mounted () {\n    this.$watch('include', val => {\n      pruneCache(this, name => matches(val, name))\n    })\n    this.$watch('exclude', val => {\n      pruneCache(this, name => !matches(val, name))\n    })\n  },\n\n  render() {\n    /* \u83b7\u53d6\u9ed8\u8ba4\u63d2\u69fd\u4e2d\u7684\u7b2c\u4e00\u4e2a\u7ec4\u4ef6\u8282\u70b9 */\n    const slot = this.$slots.default\n    const vnode = getFirstComponentChild(slot)\n    /* \u83b7\u53d6\u8be5\u7ec4\u4ef6\u8282\u70b9\u7684componentOptions */\n    const componentOptions = vnode && vnode.componentOptions\n\n    if (componentOptions) {\n      /* \u83b7\u53d6\u8be5\u7ec4\u4ef6\u8282\u70b9\u7684\u540d\u79f0\uff0c\u4f18\u5148\u83b7\u53d6\u7ec4\u4ef6\u7684name\u5b57\u6bb5\uff0c\u5982\u679cname\u4e0d\u5b58\u5728\u5219\u83b7\u53d6\u7ec4\u4ef6\u7684tag */\n      const name = getComponentName(componentOptions)\n\n      const { include, exclude } = this\n      /* \u5982\u679cname\u4e0d\u5728inlcude\u4e2d\u6216\u8005\u5b58\u5728\u4e8eexlude\u4e2d\u5219\u8868\u793a\u4e0d\u7f13\u5b58\uff0c\u76f4\u63a5\u8fd4\u56devnode */\n      if (\n        (include && (!name || !matches(include, name))) ||\n        // excluded\n        (exclude && name && matches(exclude, name))\n      ) {\n        return vnode\n      }\n\n      const { cache, keys } = this\n      /* \u83b7\u53d6\u7ec4\u4ef6\u7684key\u503c */\n      const key = vnode.key == null\n        // same constructor may get registered as different local components\n        // so cid alone is not enough (#3269)\n        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')\n        : vnode.key\n     /*  \u62ff\u5230key\u503c\u540e\u53bbthis.cache\u5bf9\u8c61\u4e2d\u53bb\u5bfb\u627e\u662f\u5426\u6709\u8be5\u503c\uff0c\u5982\u679c\u6709\u5219\u8868\u793a\u8be5\u7ec4\u4ef6\u6709\u7f13\u5b58\uff0c\u5373\u547d\u4e2d\u7f13\u5b58 */\n      if (cache[key]) {\n        vnode.componentInstance = cache[key].componentInstance\n        // make current key freshest\n        remove(keys, key)\n        keys.push(key)\n      }\n        /* \u5982\u679c\u6ca1\u6709\u547d\u4e2d\u7f13\u5b58\uff0c\u5219\u5c06\u5176\u8bbe\u7f6e\u8fdb\u7f13\u5b58 */\n        else {\n        cache[key] = vnode\n        keys.push(key)\n        // prune oldest entry\n        /* \u5982\u679c\u914d\u7f6e\u4e86max\u5e76\u4e14\u7f13\u5b58\u7684\u957f\u5ea6\u8d85\u8fc7\u4e86this.max\uff0c\u5219\u4ece\u7f13\u5b58\u4e2d\u5220\u9664\u7b2c\u4e00\u4e2a */\n        if (this.max && keys.length > parseInt(this.max)) {\n          pruneCacheEntry(cache, keys[0], keys, this._vnode)\n        }\n      }\n\n      vnode.data.keepAlive = true\n    }\n    return vnode || (slot && slot[0])\n  }\n}",lang:"go"}),l.createElement("p",null,"\u53ef\u4ee5\u770b\u5230\u8be5\u7ec4\u4ef6\u6ca1\u6709",l.createElement("code",null,"template"),"\uff0c\u800c\u662f\u7528\u4e86",l.createElement("code",null,"render"),"\uff0c\u5728\u7ec4\u4ef6\u6e32\u67d3\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u6267\u884c",l.createElement("code",null,"render"),"\u51fd\u6570"),l.createElement("p",null,l.createElement("code",null,"this.cache"),"\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u6765\u5b58\u50a8\u9700\u8981\u7f13\u5b58\u7684\u7ec4\u4ef6\uff0c\u5b83\u5c06\u4ee5\u5982\u4e0b\u5f62\u5f0f\u5b58\u50a8\uff1a"),l.createElement(a.Z,{code:"this.cache = {\n    'key1':'\u7ec4\u4ef61',\n    'key2':'\u7ec4\u4ef62',\n    // ...\n}",lang:"go"}),l.createElement("p",null,"\u5728\u7ec4\u4ef6\u9500\u6bc1\u7684\u65f6\u5019\u6267\u884c",l.createElement("code",null,"pruneCacheEntry"),"\u51fd\u6570"),l.createElement(a.Z,{code:"function pruneCacheEntry (\n  cache: VNodeCache,\n  key: string,\n  keys: Array<string>,\n  current?: VNode\n) {\n  const cached = cache[key]\n  /* \u5224\u65ad\u5f53\u524d\u6ca1\u6709\u5904\u4e8e\u88ab\u6e32\u67d3\u72b6\u6001\u7684\u7ec4\u4ef6\uff0c\u5c06\u5176\u9500\u6bc1*/\n  if (cached && (!current || cached.tag !== current.tag)) {\n    cached.componentInstance.$destroy()\n  }\n  cache[key] = null\n  remove(keys, key)\n}",lang:"go"}),l.createElement("p",null,"\u5728",l.createElement("code",null,"mounted"),"\u94a9\u5b50\u51fd\u6570\u4e2d\u89c2\u6d4b ",l.createElement("code",null,"include")," \u548c ",l.createElement("code",null,"exclude")," \u7684\u53d8\u5316\uff0c\u5982\u4e0b\uff1a"),l.createElement(a.Z,{code:"mounted () {\n    this.$watch('include', val => {\n        pruneCache(this, name => matches(val, name))\n    })\n    this.$watch('exclude', val => {\n        pruneCache(this, name => !matches(val, name))\n    })\n}",lang:"go"}),l.createElement("p",null,"\u5982\u679c",l.createElement("code",null,"include")," \u6216",l.createElement("code",null,"exclude")," \u53d1\u751f\u4e86\u53d8\u5316\uff0c\u5373\u8868\u793a\u5b9a\u4e49\u9700\u8981\u7f13\u5b58\u7684\u7ec4\u4ef6\u7684\u89c4\u5219\u6216\u8005\u4e0d\u9700\u8981\u7f13\u5b58\u7684\u7ec4\u4ef6\u7684\u89c4\u5219\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u90a3\u4e48\u5c31\u6267\u884c",l.createElement("code",null,"pruneCache"),"\u51fd\u6570\uff0c\u51fd\u6570\u5982\u4e0b\uff1a"),l.createElement(a.Z,{code:"function pruneCache (keepAliveInstance, filter) {\n  const { cache, keys, _vnode } = keepAliveInstance\n  for (const key in cache) {\n    const cachedNode = cache[key]\n    if (cachedNode) {\n      const name = getComponentName(cachedNode.componentOptions)\n      if (name && !filter(name)) {\n        pruneCacheEntry(cache, key, keys, _vnode)\n      }\n    }\n  }\n}",lang:"go"}),l.createElement("p",null,"\u5728\u8be5\u51fd\u6570\u5185\u5bf9",l.createElement("code",null,"this.cache"),"\u5bf9\u8c61\u8fdb\u884c\u904d\u5386\uff0c\u53d6\u51fa\u6bcf\u4e00\u9879\u7684",l.createElement("code",null,"name"),"\u503c\uff0c\u7528\u5176\u4e0e\u65b0\u7684\u7f13\u5b58\u89c4\u5219\u8fdb\u884c\u5339\u914d\uff0c\u5982\u679c\u5339\u914d\u4e0d\u4e0a\uff0c\u5219\u8868\u793a\u5728\u65b0\u7684\u7f13\u5b58\u89c4\u5219\u4e0b\u8be5\u7ec4\u4ef6\u5df2\u7ecf\u4e0d\u9700\u8981\u88ab\u7f13\u5b58\uff0c\u5219\u8c03\u7528",l.createElement("code",null,"pruneCacheEntry"),"\u51fd\u6570\u5c06\u5176\u4ece",l.createElement("code",null,"this.cache"),"\u5bf9\u8c61\u5254\u9664\u5373\u53ef"),l.createElement("p",null,"\u5173\u4e8e",l.createElement("code",null,"keep-alive"),"\u7684\u6700\u5f3a\u5927\u7f13\u5b58\u529f\u80fd\u662f\u5728",l.createElement("code",null,"render"),"\u51fd\u6570\u4e2d\u5b9e\u73b0"),l.createElement("p",null,"\u9996\u5148\u83b7\u53d6\u7ec4\u4ef6\u7684",l.createElement("code",null,"key"),"\u503c\uff1a"),l.createElement(a.Z,{code:"const key = vnode.key == null? \ncomponentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')\n: vnode.key",lang:"go"}),l.createElement("p",null,"\u62ff\u5230",l.createElement("code",null,"key"),"\u503c\u540e\u53bb",l.createElement("code",null,"this.cache"),"\u5bf9\u8c61\u4e2d\u53bb\u5bfb\u627e\u662f\u5426\u6709\u8be5\u503c\uff0c\u5982\u679c\u6709\u5219\u8868\u793a\u8be5\u7ec4\u4ef6\u6709\u7f13\u5b58\uff0c\u5373\u547d\u4e2d\u7f13\u5b58\uff0c\u5982\u4e0b\uff1a"),l.createElement(a.Z,{code:"/* \u5982\u679c\u547d\u4e2d\u7f13\u5b58\uff0c\u5219\u76f4\u63a5\u4ece\u7f13\u5b58\u4e2d\u62ff vnode \u7684\u7ec4\u4ef6\u5b9e\u4f8b */\nif (cache[key]) {\n    vnode.componentInstance = cache[key].componentInstance\n    /* \u8c03\u6574\u8be5\u7ec4\u4ef6key\u7684\u987a\u5e8f\uff0c\u5c06\u5176\u4ece\u539f\u6765\u7684\u5730\u65b9\u5220\u6389\u5e76\u91cd\u65b0\u653e\u5728\u6700\u540e\u4e00\u4e2a */\n    remove(keys, key)\n    keys.push(key)\n}",lang:"go"}),l.createElement("p",null,"\u76f4\u63a5\u4ece\u7f13\u5b58\u4e2d\u62ff ",l.createElement("code",null,"vnode")," \u7684\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u6b64\u65f6\u91cd\u65b0\u8c03\u6574\u8be5\u7ec4\u4ef6",l.createElement("code",null,"key"),"\u7684\u987a\u5e8f\uff0c\u5c06\u5176\u4ece\u539f\u6765\u7684\u5730\u65b9\u5220\u6389\u5e76\u91cd\u65b0\u653e\u5728",l.createElement("code",null,"this.keys"),"\u4e2d\u6700\u540e\u4e00\u4e2a"),l.createElement("p",null,l.createElement("code",null,"this.cache"),"\u5bf9\u8c61\u4e2d\u6ca1\u6709\u8be5",l.createElement("code",null,"key"),"\u503c\u7684\u60c5\u51b5\uff0c\u5982\u4e0b\uff1a"),l.createElement(a.Z,{code:"/* \u5982\u679c\u6ca1\u6709\u547d\u4e2d\u7f13\u5b58\uff0c\u5219\u5c06\u5176\u8bbe\u7f6e\u8fdb\u7f13\u5b58 */\nelse {\n    cache[key] = vnode\n    keys.push(key)\n    /* \u5982\u679c\u914d\u7f6e\u4e86max\u5e76\u4e14\u7f13\u5b58\u7684\u957f\u5ea6\u8d85\u8fc7\u4e86this.max\uff0c\u5219\u4ece\u7f13\u5b58\u4e2d\u5220\u9664\u7b2c\u4e00\u4e2a */\n    if (this.max && keys.length > parseInt(this.max)) {\n        pruneCacheEntry(cache, keys[0], keys, this._vnode)\n    }\n}",lang:"go"}),l.createElement("p",null,"\u8868\u660e\u8be5\u7ec4\u4ef6\u8fd8\u6ca1\u6709\u88ab\u7f13\u5b58\u8fc7\uff0c\u5219\u4ee5\u8be5\u7ec4\u4ef6\u7684",l.createElement("code",null,"key"),"\u4e3a\u952e\uff0c\u7ec4\u4ef6",l.createElement("code",null,"vnode"),"\u4e3a\u503c\uff0c\u5c06\u5176\u5b58\u5165",l.createElement("code",null,"this.cache"),"\u4e2d\uff0c\u5e76\u4e14\u628a",l.createElement("code",null,"key"),"\u5b58\u5165",l.createElement("code",null,"this.keys"),"\u4e2d"),l.createElement("p",null,"\u6b64\u65f6\u518d\u5224\u65ad",l.createElement("code",null,"this.keys"),"\u4e2d\u7f13\u5b58\u7ec4\u4ef6\u7684\u6570\u91cf\u662f\u5426\u8d85\u8fc7\u4e86\u8bbe\u7f6e\u7684\u6700\u5927\u7f13\u5b58\u6570\u91cf\u503c",l.createElement("code",null,"this.max"),"\uff0c\u5982\u679c\u8d85\u8fc7\u4e86\uff0c\u5219\u628a\u7b2c\u4e00\u4e2a\u7f13\u5b58\u7ec4\u4ef6\u5220\u6389"),l.createElement("h2",{id:"\u56db\u601d\u8003\u9898\u7f13\u5b58\u540e\u5982\u4f55\u83b7\u53d6\u6570\u636e"},l.createElement(c.AnchorLink,{to:"#\u56db\u601d\u8003\u9898\u7f13\u5b58\u540e\u5982\u4f55\u83b7\u53d6\u6570\u636e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u56db\u3001\u601d\u8003\u9898\uff1a\u7f13\u5b58\u540e\u5982\u4f55\u83b7\u53d6\u6570\u636e"),l.createElement("p",null,"\u89e3\u51b3\u65b9\u6848\u53ef\u4ee5\u6709\u4ee5\u4e0b\u4e24\u79cd\uff1a"),l.createElement("ul",null,l.createElement("li",null,l.createElement("p",null,"beforeRouteEnter")),l.createElement("li",null,l.createElement("p",null,"actived"))),l.createElement("h3",{id:"beforerouteenter"},l.createElement(c.AnchorLink,{to:"#beforerouteenter","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"beforeRouteEnter"),l.createElement("p",null,"\u6bcf\u6b21\u7ec4\u4ef6\u6e32\u67d3\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u6267\u884c",l.createElement("code",null,"beforeRouteEnter")),l.createElement(a.Z,{code:"beforeRouteEnter(to, from, next){\n    next(vm=>{\n        console.log(vm)\n        // \u6bcf\u6b21\u8fdb\u5165\u8def\u7531\u6267\u884c\n        vm.getData()  // \u83b7\u53d6\u6570\u636e\n    })\n},",lang:"go"}),l.createElement("h3",{id:"actived"},l.createElement(c.AnchorLink,{to:"#actived","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"actived"),l.createElement("p",null,"\u5728",l.createElement("code",null,"keep-alive"),"\u7f13\u5b58\u7684\u7ec4\u4ef6\u88ab\u6fc0\u6d3b\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u6267\u884c",l.createElement("code",null,"actived"),"\u94a9\u5b50"),l.createElement(a.Z,{code:"activated(){\n   this.getData() // \u83b7\u53d6\u6570\u636e\n},",lang:"go"}),l.createElement("p",null,"\u6ce8\u610f\uff1a\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4",l.createElement("code",null,"avtived"),"\u4e0d\u88ab\u8c03\u7528"),l.createElement("h2",{id:"\u53c2\u8003\u6587\u732e"},l.createElement(c.AnchorLink,{to:"#\u53c2\u8003\u6587\u732e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003\u6587\u732e"),l.createElement("ul",null,l.createElement("li",null,l.createElement(c.Link,{to:"https://www.cnblogs.com/dhui/p/13589401.html"},"https://www.cnblogs.com/dhui/p/13589401.html")),l.createElement("li",null,l.createElement(c.Link,{to:"https://www.cnblogs.com/wangjiachen666/p/11497200.html"},"https://www.cnblogs.com/wangjiachen666/p/11497200.html")),l.createElement("li",null,l.createElement(c.Link,{to:"https://vue3js.cn/docs/zh"},"https://vue3js.cn/docs/zh")))))}));n["default"]=e=>{var n=l.useContext(c.context),t=n.demos;return l.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(o,{demos:t})}}}]);