---
title: '手动实现bind,call,apply'
---

> apply.call.bind 都是为了改变函数运行时上下文(this指向)而存在的。

![图 48](https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/2021-03-23-20-55-36.png)  

### 三兄弟的区别

- 三兄弟接收的第一个参数都是 要绑定的this指向.
- apply的第二个参数是一个参数数组,call和bind的第二个及之后的参数作为函数实参按顺序传入。
- bind不会立即调用,其他两个会立即调用。

![图 49](https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/2021-03-23-20-56-27.png)  

接下来,我们来对三兄弟进行模拟实现

### call的简易模拟实现(es6)

思路

- 函数定义在哪里 ?

> call是可以被所有方法调用的,所以毫无疑问的定义在 Function的原型上!

- 函数接收参数 ?

> 绑定函数被调用时只传入第二个参数及之后的参数

- 如何显式绑定this ?

> 如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的this指向该对象。

![图 50](https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/2021-03-23-21-01-35.png)  

### apply的简易模拟实现(es6)

apply实现的思路与call基本相同,我们只需要对参数进行不同处理即可

![图 51](https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/2021-03-23-21-01-55.png)  

### bind的简易模拟实现(es6)

这里只是做简易实现,不考虑new操作符的情况

思路

- 函数定义在哪里 ?

> bind是可以被所有方法调用的,所以毫无疑问的定义在 Function的原型上!

- 函数接收参数 ?

> bind函数返回一个绑定函数,最终调用需要传入函数实参和绑定函数的实参!!

- 如何显式绑定this ?

> 如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的this指向该对象。

![图 52](https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/2021-03-23-21-02-12.png)  
