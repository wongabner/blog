---
nav:
  title: 面试
title: 'js'
group:
  title: 前端面试基础
---

### 解释下变量提升?

<details>
<summary>展开查看</summary><br/>

JavaScript引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升(hoisting)。

```js
  console.log(a) // undefined

  var a = 1

  function b() {
    console.log(a)
  }

  b() // 1
```

上面的代码实际执行顺序是这样的:

第一步:引擎将var a = 1 拆解为var a = undefined 和 a = 1 ，并将var a = undefined放到最顶端，a = 1 还在原来的位置

这样一来代码就是这样:

```js
  var a = undefined
  console.log(a) // undefined
  
  a=1
  function b() {
    console.log(a)
  }

  b() // 1
```

第二步就是执行，因此js引擎一行一行从上往下执行就造成了当前的结果，这就叫变量提升。

</details>

### 理解闭包吗?

<details>
<summary>展开查看</summary><br/>

这个问题其实在问:

1. 闭包是什么?
   
2. 闭包有什么作用?

#### 闭包是什么

MDN的解释:闭包是函数和声明该函数的词法环境的组合。

按照我的理解就是:闭包 =『函数』和『函数体内可访问的变量总和』

举个简单的例子:

```js
  (function() {
    var a = 1;
    function add() {
      var b = 2
      var sum = b + a
      console.log(sum); // 3
    }
    add()
  })()
```

add 函数本身，以及其内部可访问的变量，即 `a = 1` ，这两个组合在一起就被称为闭包，仅此而已。

#### 闭包的作用

闭包最大的作用就是隐藏变量，闭包的一大特性就是内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回(寿命终结)了之后

基于此特性，JavaScript可以实现私有变量、特权变量、储存变量等

我们就以私有变量举例，私有变量的实现方法很多，有靠约定的(变量名前加_),有靠Proxy代理的，也有靠Symbol这种新数据类型的。

但是真正广泛流行的其实是使用闭包。

```js
  function Person(){
    var name = 'cxk';
    this.getName = function(){
      return name; 
    }
    this.setName = function(value){
      name = value;
    }
  }
  const cxk = new Person()

  console.log(cxk.getName()) //cxk
  cxk.setName('jntm')
  console.log(cxk.getName()) //jntm
  console.log(name) //name is not defined
```

函数体内的 `var name = 'cxk'` 只有 `getName` 和 `setName` 两个函数可以访问，外部无法访问，相对于将变量私有化。

</details>

### JavaScript的作用域链理解吗?

<details>
<summary>展开查看</summary><br/>

JavaScript属于静态作用域，即声明的作用域是根据程序正文在编译时就确定的，有时也称为词法作用域。

其本质是JavaScript在执行过程中会创造可执行上下文，可执行上下文中的词法环境中含有外部词法环境的引用，我们可以通过这个引用获取外部词法环境的变量、声明等，这些引用串联起来一直指向全局的词法环境，因此形成了作用域链。

</details>

### ES6模块与CommonJS模块有什么区别?

<details>
<summary>展开查看</summary><br/>

ES6 Module和CommonJS模块的区别:

- CommonJS是对模块的浅拷⻉，ES6 Module是对模块的引用,即ES6 Module只存只读，不能改变其值，具体点就是指针指向不能变，类似const

- import的接口是read-only(只读状态)，不能修改其变量值。即不能修改其变量的指针指向，但可以改变变量内部指针指向,可以对commonJS对重新赋值(改变指针指向)，但是对ES6 Module赋值会编译报错。
  
ES6 Module和CommonJS模块的共同点:

- CommonJS和ES6 Module都可以对引入的对象进行赋值，即对对象内部属性的值进行改变。

</details>

### js有哪些类型?

<details>
<summary>展开查看</summary><br/>

JavaScript的类型分为两大类，一类是原始类型，一类是复杂(引用)类型。

原始类型:

- boolean

- null

- undefined

- number

- string

- symbol

复杂类型:

- Object

还有一个没有正式发布但即将被加入标准的原始类型BigInt。

</details>

### 为什么会有BigInt的提案?

<details>
<summary>展开查看</summary><br/>

JavaScript中Number.MAX_SAFE_INTEGER表示最大安全数字,计算结果是9007199254740991，即在这个数范围内不会出现精度丢失(小数除外)。

但是一旦超过这个范围，js就会出现计算不准确的情况，这在大数计算的时候不得不依靠一些第三方库进行解决，因此官方提出了BigInt来解决此问题。

</details>

### null与undefined的区别是什么?

<details>
<summary>展开查看</summary><br/>

null表示为空，代表此处不应该有值的存在，一个对象可以是null，代表是个空对象，而null本身也是对象。

undefined表示『不存在』，JavaScript是一⻔动态类型语言，成员除了表示存在的空值外，还有可能根本就不存在(因为存不存在只在运行期才知道)，这就是undefined的意义所在。

</details>

### 0.1+0.2为什么不等于0.3?

<details>
<summary>展开查看</summary><br/>

![图 4](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-25-05-29-28.png)  

JS 的 Number 类型遵循的是 IEEE 754 标准，使用的是 64 位固定⻓度来表示。

IEEE 754 浮点数由三个域组成，分别为 sign bit (符号位)、exponent bias (指数偏移值) 和 fraction (分数值)。64 位中，sign bit 占 1 位，exponent bias 占 11 位，fraction 占 52 位。

通过公式表示浮点数的值 value = sign x exponent x fraction
**

当一个数为正数，sign bit 为 0，当为负数时，sign bit 为 1.

以 0.1 转换为 IEEE 754 标准表示为例解释一下如何求 exponent bias 和 fraction。转换过程主要经历 3 个过程:

1. 将 0.1 转换为二进制表示
   
2. 将转换后的二进制通过科学计数法表示
   
3. 将通过科学计数法表示的二进制转换为 IEEE 754 标准表示

#### 将 0.1 转换为二进制表示

回顾一下一个数的小数部分如何转换为二进制。一个数的小数部分，乘以 2，然后取整数部分的结果，再用计算后的小 数部分重复计算，直到小数部分为 0 。

因此 0.1 转换为二进制表示的过程如下:

![图 5](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-25-05-31-36.png)  

得到 0.1 的二进制表示为 0.00011...(无限重复 0011)

#### 通过科学计数法表示

0.00011...(无限重复 0011) 通过科学计数法表示则是 1.10011001...(无线重复 1001)*2

#### 转换为 IEEE 754 标准表示

当经过科学计数法表示之后，就可以求得 exponent bias 和 fraction 了。

exponent bias (指数偏移值) 等于 双精度浮点数固定偏移值 (2-1) 加上指数实际值(即 2 中的 -4) 的11 位二进制表示。 为什么是 11 位?因为exponent bias在64 位中占 11 位。

因此 0.1 的 exponent bias 等于 1023 + (-4) = 1019 的11 位二进制表示，即 011 1111 1011。

再来获取 0.1 的 fraction，fraction 就是 1.10011001...(无线重复 1001) 中的小数位，由于 fraction 占 52位所以抽取 52 位小数，1001...(中间有 11 个 1001)...1010 (请注意最后四位，是 1010 而不是 1001，因为四舍五入有进位，这个进位就是造成 0.1 + 0.2 不等于 0.3 的原因)

```
      0       011 1111 1011   1001...( 11 x 1001)...1010
  (sign bit) (exponent bias)      (fraction)
```

</details>

### 类型转换的规则有哪些?

<details>
<summary>展开查看</summary><br/>

在if语句、逻辑语句、数学运算逻辑、==等情况下都可能出现隐士类型转换。

![图 6](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-25-05-34-07.png)  

#### 类型转换的原理是什么?

类型转换指的是将一种类型转换为另一种类型,例如:

```js
  var b = 2;
  var a = String(b);
  console.log(typeof a); //string
```
当然,类型转换分为显式和隐式,但是不管是隐式转换还是显式转换,都会遵循一定的原理,由于JavaScript是一⻔动态类型的语言,可以随时赋予任意值,但是各种运算符或条件判断中是需要特定类型的,因此JavaScript引擎会在运算时为变量设 定类型.

这看起来很美好,JavaScript引擎帮我们搞定了类型的问题,但是引擎毕竟不是ASI(超级人工智能),它的很多动作会跟我们预期相去甚远

```js
 {}+[] //0
```

答案是0

</details>

### 谈谈你对原型链的理解?

<details>
<summary>展开查看</summary><br/>

这个问题关键在于两个点，一个是原型对象是什么，另一个是原型链是如何形成的

#### 原型对象

绝大部分的函数(少数内建函数除外)都有一个 `prototype` 属性,这个属性是原型对象用来创建新对象实例,而所有被创建的对象都会共享原型对象,因此这些对象便可以访问原型对象的属性。

例如 `hasOwnProperty()` 方法存在于Obejct原型对象中,它便可以被任何对象当做自己的方法使用.

> 用法: object.hasOwnProperty( propertyName )
> 
>hasOwnProperty() 函数的返回值为Boolean类型。如果对象object具有名称为propertyName的属性，则返回true，否则返回false。

```js
  var person = {
    name: "Messi",
    age: 29,
    profession: "football player"
  };
  console.log(person.hasOwnProperty("name")); //true
  console.log(person.hasOwnProperty("hasOwnProperty")); //false
  console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); //true
```

由以上代码可知, hasOwnProperty() 并不存在于 person 对象中,但是 person 依然可以拥有此方法.

所以 person 对象是如何找到 Object 对象中的方法的呢?靠的是原型链。

#### 原型链

原因是每个对象都有 `__proto__ `属性，此属性指向该对象的构造函数的原型。

对象可以通过 `__proto__ `与上游的构造函数的原型对象连接起来，而上游的原型对象也有一个 `__proto__ `，这样就形成了原型链。

![图 7](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-25-05-39-44.png)  

</details>

### 如何判断是否是数组?

<details>
<summary>展开查看</summary><br/>

es6中加入了新的判断方法

```js
  if(Array.isArray(value)){
    return true;
  }
```

在考虑兼容性的情况下可以用toString的方法

```js
  if(!Array.isArray){
    Array.isArray = function(arg){
      return Object.prototype.toString.call(arg)==='[object Array]'
    }
  }
```

</details>

### 谈一谈你对this的了解?

<details>
<summary>展开查看</summary><br/>

this的指向不是在编写时确定的,而是在执行时确定的，同时，this不同的指向在于遵循了一定的规则。

首先，在默认情况下，this是指向全局对象的，比如在浏览器就是指向window。

```js
  name = "Bale";
  function sayName () {
    console.log(this.name);
  };
  sayName(); //"Bale"
```

其次，如果函数被调用的位置存在上下文对象时，那么函数是被隐式绑定的。

```js
  function f() {
    console.log( this.name );
  }
  var obj = {
    name: "Messi",
    f: f
  };
  obj.f(); //被调用的位置恰好被对象obj拥有，因此结果是Messi
```

再次，显示改变this指向，常⻅的方法就是call、apply、bind

以bind为例:

```js
  function f() {
    console.log( this.name );
  }

  var obj = {
    name: "Messi",
  };

  var obj1 = {
    name: "Bale"
  };

  f.bind(obj)(); //Messi ,由于bind将obj绑定到f函数上后返回一个新函数,因此需要再在后面加上括号进行执行,这是bind与apply和call的区别
```

最后，也是优先级最高的绑定 new 绑定。

用 new 调用一个构造函数，会创建一个新对象, 在创造这个新对象的过程中,新对象会自动绑定到Person对象的this上，那么 this 自然就指向这个新对象。

```js
  function Person(name) {
    this.name = name; console.log(name);
  }

  var person1 = new Person('Messi'); //Messi
```

> 绑定优先级: new绑定 > 显式绑定 >隐式绑定 >默认绑定

#### 那么箭头函数的this指向哪里?

箭头函数不同于传统JavaScript中的函数,箭头函数并没有属于自己的this,它的所谓的this是捕获其所在上下文的 this值，作为自己的 this 值,并且由于没有属于自己的this,而箭头函数是不会被new调用的，这个所谓的this也不会被改变. 我们可以用Babel理解一下箭头函数:

```js
  // ES6

  const obj = {
    getArrow() {
      return () => {
        console.log(this === obj);
      };
    }
  }
```

转化后

```js
  // ES5，由 Babel 转译
  var obj = {
    getArrow: function getArrow() {
      var _this = this;
      return function () {
        console.log(_this === obj);
      };
    }
  };
```

</details>

### async/await是什么?

<details>
<summary>展开查看</summary><br/>

async 函数，就是 Generator 函数的语法糖，它建立在Promises上，并且与所有现有的基于Promise的API兼容。

1. Async—声明一个异步函数(async function someName(){...})


2. 自动将常规函数转换成Promise，返回值也是一个Promise对象


3. 只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数


4. 异步函数内部可以使用await

   1. Await—暂停异步的功能执行(var result = await someAsyncCall();)


   2. 放置在Promise调用之前，await强制其他代码等待，直到Promise完成并返回结果


   3. 只能与Promise一起使用，不适用与回调

   4. 只能在async函数内部使用

</details>

### async/await相比于Promise的优势?

<details>
<summary>展开查看</summary><br/>

- 代码读起来更加同步，Promise虽然摆脱了回调地狱，但是then的链式调用也会带来额外的阅读负担

- Promise传递中间值非常麻烦，而async/await几乎是同步的写法，非常优雅

- 错误处理友好，async/await可以用成熟的try/catch，Promise的错误捕获非常冗余

- 调试友好，Promise的调试很差，由于没有代码块，你不能在一个返回表达式的箭头函数中设置断点，如果你在一个.then代码块中使用调试器的步进(step-over)功能，调试器并不会进入后续的.then代码块，因为调试器只能跟踪同步代码的『每一步』。

</details>

### JavaScript的参数是按照什么方式传递的?

<details>
<summary>展开查看</summary><br/>

#### 基本类型传递方式

由于js中存在复杂类型和基本类型,对于基本类型而言,是按值传递的.

```js
  var a = 1;

  function test(x) {
    x = 10;
    console.log(x);
  }

  test(a); // 10
  
  console.log(a); // 1
```

虽然在函数 `test` 中 a 被修改,并没有有影响到 外部 a 的值,基本类型是按值传递的.

#### 复杂类型按引用传递?

我们将外部 a 作为一个对象传入 `test` 函数.

```js
  var a = {
    a: 1, b: 2
  };
  function test(x) {
    x.a = 10;
    console.log(x);
  }

  test(a); // { a: 10, b: 2 }
  console.log(a); // { a: 10, b: 2 }
```

可以看到,在函数体内被修改的 a 对象也同时影响到了外部的 a 对象,可⻅复杂类型是按引用传递的.

可是如果再做一个实验:

```js
  var a = {
    a: 1, b: 2
  };
  function test(x) {
    x = 10;
    console.log(x);
  }

  test(a); // 10
  console.log(a); // { a: 1, b: 2 }
```

外部的 a 并没有被修改,如果是按引用传递的话,由于共享同一个堆内存, a 在外部也会表现为 10 才对. 此时的复杂类型 同时表现出了 按值传递 和 按引用传递的特性.

#### 按共享传递

复杂类型之所以会产生这种特性,原因就是在传递过程中,对象 a 先产生了一个 副本a ,这个 副本a 并不是深克隆得到的 副本a , 副本a 地址同样指向对象 a 指向的堆内存.

因此在函数体中修改 x=10 只是修改了 副本a , a 对象没有变化. 但是如果修改了 x.a=10 是修改了两者指向的同一堆内存,此时对象 a 也会受到影响.

有人讲这种特性叫做传递引用,也有一种说法叫做按共享传递.

</details>

### 聊一聊如何在JavaScript中实现不可变对象?

<details>
<summary>展开查看</summary><br/>

实现不可变数据有三种主流的方法

1. 深克隆，但是深克隆的性能非常差，不适合大规模使用

2. Immutable.js，Immutable.js是自成一体的一套数据结构，性能良好，但是需要学习额外的API

3. immer，利用Proxy特性，无需学习额外的api，性能良好

</details>

### JavaScript的基本类型和复杂类型是储存在哪里的?

<details>
<summary>展开查看</summary><br/>

基本类型储存在栈中，但是一旦被闭包引用则成为常住内存，会储存在内存堆中。

复杂类型会储存在内存堆中。

</details>

### 讲讲JavaScript垃圾回收是怎么做的?

<details>
<summary>展开查看</summary><br/>



</details>
