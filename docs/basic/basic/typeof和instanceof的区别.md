---
title: 'typeof和instanceof的区别'
---

### instanceof

`instanceof` 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。

语法

```js
object instanceof constructor
```

描述

instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。

![图 45](https://gitee.com/wongabner/picgo/raw/master/2021-03-23-20-48-49.png)  

需要注意的是，如果表达式 obj instanceof Foo 返回true，则并不意味着该表达式会永远返回true，因为Foo.prototype属性的值有可能会改变，改变之后的值很有可能不存在于obj的原型链上，这时原表达式的值就会成为false。另外一种情况下，原表达式的值也会改变，就是改变对象obj的原型链的情况，虽然在目前的ES规范中，我们只能读取对象的原型而不能改变它，但借助于非标准的__proto__魔法属性，是可以实现的。比如执行obj.__proto__ = {}之后，obj instanceof Foo就会返回false了。

### String和Date对象同时也属于Object类型

![图 46](https://gitee.com/wongabner/picgo/raw/master/2021-03-23-20-49-36.png)  

### typeof

typeof操作符返回一个字符串,指示未经计算的操作数的类型。

下表总结了 typeof 可能的返回值。有关类型和原语的更多信息，可查看 [JavaScript数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures) 页面。

![图 47](https://gitee.com/wongabner/picgo/raw/master/2021-03-23-20-51-56.png)  

### typeof和instanceof的区别

typeof和instanceof都可以用来判断变量，它们的用法有很大区别

typeof会返回一个变量的基本类型,instanceof返回的是一个布尔值

如果我们想要判断一个变量是否存在，可以使用typeof：(不能使用if(a) 若a未声明，则报错)

```js
if(typeof a != 'undefined'){
    //变量存在
}
```

需要注意的是，instanceof只能用来判断对象和函数，不能用来判断字符串和数字等

typeof不能用于判断是否为数组，因为都会返回object，判断是否为数组可以用一下几个方法：

1、constructor属性

这个属性在我们使用js系统或者自己创建的对象的时候，会默认的加上，例如：

```js
var arr = [1,2,3];  //创建一个数组对象
arr.prototype.constructor = Array;  //这一句是系统默认加上的
```

所以我们就可以这样来判断：

```js
var arr = [1,2,3,1]; 
arr.constructor === Array;   // true
```

2、instanceof

instanceof是检测对象的原型链是否指向构造函数的prototype对象的，所以我们也可以用它来判断：

```js
arr instanceof Array; // true
```

3、Array.isArray()

```js
Array.isArray(arr) // true
```

4、Object.prototype.toString.call()

instanceof是检测对象的原型链是否指向构造函数的prototype对象的，所以我们也可以用它来判断：

```js
Object.prototype.toString.call(arr) // "[object Array]"
```

判断数组终极解决方案:

```js
var arr = [1,2,3]; 
function isArrayFn(obj){  //封装一个函数
if (typeof Array.isArray === "function") { 
return Array.isArray(obj); //浏览器支持则使用isArray()方法
}else{                     
//否则使用toString方法
return Object.prototype.toString.call(obj) === "[object Array]"; 
} 
} 
alert(isArrayFn(arr));// true
```

instanceof和多全局对象(多个frame或多个window之间的交互)

在浏览器中，我们的脚本可能需要在多个窗口之间进行交互。多个窗口意味着多个全局环境，不同的全局环境拥有不同的全局对象，从而拥有不同的内置类型构造函数。这可能会引发一些问题。比如，表达式 [] instanceof window.frames[0].Array 会返回false，因为 Array.prototype !== window.frames[0].Array.prototype，因此你必须使用 Array.isArray(myObj) 或者 Object.prototype.toString.call(myObj) === "[object Array]"来判断myObj是否是数组。
