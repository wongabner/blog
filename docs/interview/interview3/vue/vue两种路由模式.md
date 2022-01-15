---
nav:
  title: 面试
title: 'vue两种路由模式'
group:
  title: vue
---

## Vue 的路由实现：hash 模式 和 history模式

### hash 模式：

> 在浏览器中符号“#”，#以及#后面的字符称之为 hash，用
window.location.hash 读取；

特点：hash 虽然在 URL 中，但不被包括在 HTTP 请求中；用来指导浏览器动作，对服务端安全无用，hash 不会重加载页面。

hash 模式下，仅 hash 符号之前的内容会被包含在请求中，

如 http://www.xxx.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回404 错误。

### history 模式：

> history 采用 HTML5 的新特性；且提供了两个新方法：pushState（），replaceState（）可以对浏览器历史记录栈进行修改，以及 popState 事件的监听到状态变更。

history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，

如 http://www.xxx.com/items/id。后端如果缺少对 /items/id 的路由处理，将返回
404 错误。

Vue-Router 官网里如此描述：“不过这种模式要玩好，还需要后台配置支持……所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。”
