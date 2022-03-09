---
title: '对于 MVVM 的理解'
---

MVVM 是 Model-View-ViewModel 的缩写。

`Model` 代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑。

`View` 代表 UI 组件，它负责将数据模型转化成 UI 展现出来。

`ViewModel` 监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一
个同步 View 和 Model 的对象，连接 Model 和 View。 

在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel
进行交互，Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会
同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。

ViewModel 通过`双向数据绑定`把 View 层和 Model 层连接了起来，而 View 和
Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻
辑，不需要手动操作 DOM, 不需要关注数据状态的同步问题，复杂的数据状态维
护完全由 MVVM 来统一管理。

### 一、MVC

MVC模式的意思是，软件可以分成三个部分。

![图 16](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-16-16.png)  

* 视图（View）：用户界面。
* 控制器（Controller）：业务逻辑
* 模型（Model）：数据保存

各部分之间的通信方式如下:

![图 17](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-16-32.png)  

1. View 传送指令到 Controller
2. Controller 完成业务逻辑后，要求 Model 改变状态
3. Model 将新的数据发送到 View，用户得到反馈

所有通信都是单向的。

### 二、互动模式

接受用户指令时，MVC 可以分成两种方式。一种是通过 View 接受指令，传递给 Controller。

![图 18](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-16-48.png)  

另一种是直接通过controller接受指令。

![图 19](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-17-01.png)  

### 三、实例：Backbone

实际项目往往采用更灵活的方式，以 Backbone.js 为例。

![图 20](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-17-19.png)  

1. 用户可以向 View 发送指令（DOM 事件），再由 View 直接要求 Model 改变状态。

2. 用户也可以直接向 Controller 发送指令（改变 URL 触发 hashChange 事件），再由 Controller 发送给 View。

3. Controller 非常薄，只起到路由的作用，而 View 非常厚，业务逻辑都部署在 View。所以，Backbone 索性取消了 Controller，只保留一个 Router（路由器） 。

### 四、MVP

MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向。

![图 21](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-17-32.png)  

1. 各部分之间的通信，都是双向的。

2. View 与 Model 不发生联系，都通过 Presenter 传递。

3. View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。

### 五、MVVM

MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。

![图 22](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-17-46.png)  

唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。Angular 和 Ember 都采用这种模式。

[阮大神博客](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)
