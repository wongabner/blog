---
title: 'vue路由的钩子函数'
---

### 全局守卫

> beforeEach：参数(to,from,next)

to: route 即将进入的目标路由对象，

from：route 当前导航正要离开的路由

next：function 一定要调用该方法 resolve 这个钩子。执行效果依赖 next 方法的调
用参数。可以控制网页的跳转。

> afterEach：参数(to,from)


### 路由独享的守卫

beforeEnter

### 组件的守卫

beforeRouteEnter

beforeRouteUpdate(2.2新增)

beforeRouteLeave
