---
title: 'js显式原型、隐式原型与原型链'
---

### 什么是原型链

**原型链是利用原型，让一个引用类型继承另一个 引用类型的属性和方法。**

为了说明白原型链，需要从构造函数、原型与实例的关系讲起。

#### 构造函数、原型与实例的关系：

- 每个构造函数都有一个原型对象，
- 原型对象都包含一个指向构造函数的指针（显式原型），
- 而实例都包含一个指向原型对象的内部指针（隐式原型）。

那么，假如让原型对象等于另一个类型的实例，结果会让此事的原型对象包含一个指向另一个原型的指针，相应地，另一个原型中也包含着指向另一个构造函数的指针。

假如另一个原型又是另一个类型的实例，那么上述关系依然成立。

如此层层递进，就构成了实例与原型的链条。

**这就是原型链的基本概念。**

JavaScript 只是在对象之间创建关联，所以两个对象之间的关系并不是复制而是委托。

所以，相比之下，说**委托**比**继承**更合适。

### 显式原型:

每一个函数在创建之后都会拥有一个名为`prototype`的属性，这个属性指向函数的原型对象。

### 隐式原型:

- JavaScript 中`任意对象`都有一个内置属性`[[prototype]]`
- 在ES5之前没有标准的方法访问这个内置属性，但是大多数浏览器都支持通过`__proto__`来访问。
- ES5 中有了对于这个内置属性标准的`Get`方法`Object.getPrototypeOf()`
- `Object.prototype`这个对象是个例外，它的proto值为null
#图片描述

![20220831154624](https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/20220831154624.png)

### 代码描述

```js
function Person() {}
person = new Person();

console.log(person.__proto__ === Person.prototype);
console.log(Object.getPrototypeOf(person) === Person.prototype);
console.log(person.constructor === Person); // 注①
console.log(Person.prototype.__proto__ === Object.prototype); //注②
console.log(Object.prototype.__proto__ === null);
console.log(Person.prototype.constructor === Person);
console.log(Object.__proto__ === Function.prototype); //注③
console.log(Function.prototype.__proto__ === Object.prototype);
// 输出全是 true
```

注
1. `person.constructor === Person.prototype.constructor`原型链 
2. `Person.prototype`是对象，是`Object`类型的实例
3. Object 是构造函数，于是它是 Function 的实例，其内部有`[[proto]]`指向实例的原型





![图 2](https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/2022-03-22-03-47-35.png)  

![图 3](https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/2022-03-22-03-47-58.png)  

任何对象都有一个原型对象，这个原型对象由对象的内置属性_proto_指向它的构造函数的prototype指向的对象，即任何对象都是由一个构造函数创建的，但是不是每一个对象都有prototype，只有方法才有prototype。
