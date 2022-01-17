---
title: 'keep-alive'
---

keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲
染。

在 vue 2.1.0 版本之后，keep-alive 新加入了两个属性: `include`(包含的组件缓存) 与
`exclude`(排除的组件不缓存，优先级大于 include) 。

使用方法

![图 25](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-19-41.png)  

参数解释

* include - 字符串或正则表达式，只有名称匹配的组件会被缓存

* exclude - 字符串或正则表达式，任何名称匹配的组件都不会被缓存

include 和 exclude 的属性允许组件有条件地缓存。二者都可以用“，”分隔字符串、

正则表达式、数组。当使用正则或者是数组时，要记得使用 `v-bind` 。

使用示例

![图 26](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-19-56.png)  
