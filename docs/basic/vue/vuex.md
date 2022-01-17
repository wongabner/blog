---
title: 'vuex'
---

> vuex 是什么？怎么使用？哪种功能场景使用它？

只用来读取的状态集中放在 store 中； 改变状态的方式是提交 mutations，这是个
同步的事物； 异步逻辑应该封装在 action 中。

在 main.js 引入 store，注入。新建了一个目录 store，….. export 。

场景有：单页应用中，组件之间的状态、音乐播放、登录状态、加入购物车

![图 29](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-20-58.png)  

### state

Vuex 使用单一状态树,即每个应用将仅仅包含一个 store 实例，但单一状态树和模
块化并不冲突。存放的数据状态，不可以直接修改里面的数据。

### mutations

mutations 定义的方法动态修改 Vuex 的 store 中的状态或数据。

### getters

类似 vue 的计算属性，主要用来过滤一些数据。

### action

actions 可以理解为通过将 mutations 里面处里数据的方法变成可异步的处理数据的
方法，简单的说就是异步操作数据。view 层通过 store.dispath 来分发 action。

![图 30](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-21-14.png)  

### modules

项目特别复杂的时候，可以让每一个模块拥有自己的 state、mutation、action、
getters,使得结构非常清晰，方便管理。

![图 31](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-21-28.png)  
