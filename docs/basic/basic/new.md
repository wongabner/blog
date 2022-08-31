---
title: '手动实现new'
---

new运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。 new关键字会进行如下操作：

```js
  function _new(fun, ...arg) {
    // 1.创建一个空的js对象
    var obj = {}

    // 2.链接该对象（即设置该对象的构造函数）到另一个对象上 （通俗理解就是新对象隐式原型__proto__链接到构造函数显式原型prototype上）
    obj.__proto__ = fun.prototype

    // 3.将步骤1新创建的对象作为this的上下文 （实际是执行了构造函数 并将构造函数作用域指向新对象）
    var res = fun.apply(obj, arg)

    // 4.如果该函数没有返回对象，则返回this （实际是返回一个空对象，new Object（）就是返回一个空对象{} ）
    return Object.prototype.toString.call(res) === '[object Object]' ? res : obj
  }

  const Fun = function (name) {
    this.name = name
  }

  console.log(_new(Fun, '小明'))

  // Fun {name: "小明"}
```


<details>
  <summary>展开查看</summary>
  
  ![图 43](https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/2021-03-23-20-06-47.png)
</details>
