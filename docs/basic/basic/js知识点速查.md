---
nav:
  title: 基础
  order: 20
title: 'js知识点速查'
---

## js基础

> Javascript是一门**面向对象**的，**跨平台**的**脚本**语言 

### 变量

#### 声明

> 变量命名见名知义，驼峰命名，不要跟关键字冲突

```javascript
var str = 'hello'
var userName = 'zhangsan'
```

#### 类型

> js本身是弱类型，但是计算机内部还是会区分每一种数据类型

五（六）种基本数据类型：number、string、boolean、undefined、null、（symbol）  

两种引用类型：object、function

 一个关键字 typeof       typeof返回有六种值： number、string、boolean、undefined、object、function

#### 类型转换

##### 隐式转换（+、-、*、/、%）

##### 显式转换（parseInt()、parseFloat()、Number()、toString()、String()、toFixed()）

> NaN : Not a Number 
>
> isNaN(num)函数，该函数判断num变量的值是否是NaN，是NaN返回true，数字返回false

### 运算符

#### 算数运算符

加、减、乘、除、求余/取模（+ 、- 、* 、/ 、%）

 +=、-=、*=、/=

++、-- 以及自增自减的前置（先算后用）后置（先用后算）

#### 关系运算符
 ==（相等）、===（全等） 、!=（不等于）、<（小于） 、>（大于） 、<=（小于或者等于） 、>=（大于或者等于）

#### 逻辑运算符

&&（与）、||（或）、！（非）

##### 逻辑短路

当第一个表达式已经能够决定整个表达式的结果了，第二个就不参与了

#### 进制（了解）



## 分支

> 根据不同的条件判断来决定程序执行走向的结构（也叫选择结构）

### if

```javascript
if(true){
    //会执行的语句
}

if(false){
    //会跳过不执行的语句
}

if(判断条件){ //当if括号中结果为true时执行语句1，否则执行语句2
    //语句1
}else{
    //语句2
}

if(判断条件1){ //当条件1结果为true时执行语句1
    //语句1
}else if(判断条件2){ //当条件1结果为false而且条件2结果为true时执行语句2
    //语句2
}else{ //当条件1条件2结果都为false时执行语句3
    //语句3
}
```

**注意：0、-0、null、""、false、undefined 或者 NaN在if条件里结果为false**

#### switch case 多分支语句

```javascript
switch(语句){  //语句的结果与每一条case内容进行匹配
    case 1:
       alert(1);
	break;
	case 2:
		alert(2);
	break;
	case 3:
		alert(3);
	break;
	default:
		alert(0);
}
```

**注意switch的应用场景（有多个确定值需要判断的时候）；**

**case是全等匹配；**

**注意case穿透，要加break语句（如果程序没有发现break语句，那么解析器会继续向下解析）;**



## 循环

> 需要重复执行同一操作的程序结构称为循环结构。

### while

```javascript
while(条件){
    //条件成立就会反复执行这里的代码
}
```

### do...while循环

```javascript
do {
    //先执行一遍代码  //while条件成立再继续反复执行
} while (条件)
```

### for

```javascript
for (var i = 0; i < 10; i++) {
    console.log(i);
}
```

### 三种循环的联系和区别

1. 都是会反复执行的代码块
2. 大部分情况下可以互相替换
3. do...while至少执行一次，while和for有可能0次，while不太能确定执行次数，for绝大部分情况下都可以确定



## 函数

> 一个工具，被封装好可重复执行的一段代码块

```javascript
function test () {
    
}
var test1 = function () {
    
}
test()
test1()
```

### 参数

形参：形式参数，声明函数的时候写在小括号里面的参数，无需var

实参：实际参数，在函数调用的时候需要传递实际有值得参数     实参个数大于形参，多余实参自动舍弃  形参个数大于实参，多余形参默认为undefined

  实参副本arguments：可以在函数内部使用arguments接收所传递过来的参数，是一个类数组对象

### 作用域：变量的作用范围

#### 全局变量  

作用范围为整个程序的执行范围  在函数体外部定义的变量就是全局变量  在函数体内部不使用var定义的也是全局变量

#### 局部变量

作用范围是某个函数体内部  在函数体内部通过var关键字定义的变量或者形参，都是局部变量  当局部变量与全局变量重名时，在函数体内部局部变量优先于全局变量

### return关键字

1. 结束函数的执行
2. 交回函数执行权
3. 返回一个结果函数调用位置（如果不写返回值默认返回值是undefined）

#### 数据结构

* 栈：先进后出（FILO），在栈顶做插入（压栈）和删除操作（出栈）
* 队列：先进先出（FIFO），在队头做删除操作,在队尾做插入操作
* 堆和它们不同，代码执行时系统动态分配，不存在是先进后出还是先进先出

##### 执行环境栈

##### 变量生命周期

##### 作用域链

### 递归

> 程序调用自身的编程技巧称为递归（ recursion）。
>
> 递归就是在运行的过程中调用自己，本质就是循环。

构成递归需具备的条件

1. 子问题须与原始问题为同样的事，且更为简单
2. 不能无限制地调用本身，须有个出口，化简为非递归状况处理。

> 由于递归是函数本身一层一层压栈，导致先入栈的不能出栈，空间占满以后就会造成堆栈溢出

#### 匿名函数：没有名字的函数

#### 自调用函数（IIFE）

> Immediately Invoked Function Expression （ 立即调用函数表达式）

#### JS运行和编译

1. 语法分析

   查找基本语法有没有错误预解析

2. 执行之前进行预解析（变量提升）

   var、function关键字提前到当前作用域的顶部，变量默认值为undefined，函数默认值为函数体代码块，当函数与变量重名时，保留函数。

3. 解释执行



## 对象

**类是对象的抽象，对象是类的实例**

**js中对象的本质：属性和方法的集合**

**对象遍历：for...in循环（隐式迭代）**

```javascript
var obj= new Object();
obj.name = "zhangsan";
obj.age = 18;
obj["gender"] = "male";
for(var key in obj){
    console.log(key);
    console.log(obj[key]);
}
```



## 数组

> 数组：一组数据（一个变量来承载）

数组的长度  arr.length

数组的索引（下标）  arr[0] ~ arr[arr.length-1]

### 数组遍历 

1. for循环：使用最多的一种循环
2. for...in（ES5） 遍历稀疏数组的时候不会遍历到undefined
3. for...of（ES6）遍历直接得到值，得不到下标

### 引用类型

基本数据类型：number、string、boolean、undefined、null

引用数据类型：object（array也属于object）、function

函数的值传递和引用传递

基本类型作为参数传递的是值，而引用类型作为参数传递的是引用，即地址

### 数组API

| 方法       | 描述                             |
| -------- | ------------------------------ |
| concat   | 连接两个或更多的数组，并返回结果               |
| join     | 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔 |
| pop      | 删除并返回数组的最后一个元素                 |
| push     | 向数组的末尾添加一个或更多元素，并返回新的长度        |
| shift    | 删除并返回数组的第一个元素                  |
| unshift  | 向数组的开头添加一个或更多元素，并返回新的长度        |
| reverse  | 颠倒数组中元素的顺序                     |
| slice    | 从某个已有的数组返回选定的元素                |
| splice   | 删除元素，并向数组添加新元素                 |
| toString | 把数组转换为字符串，并返回结果                |
| sort     | 对数组的元素进行排序                     |

sort是按ASCII码来排序的，如果想按数字大小排，可以使用

```javascript
arr.sort(function (a, b) {
    // 指定规则
    // a和b是sort方法会依次去取数组里的元素
    // 如果这里的返回值大于0，那么a和b就会交换顺序，不大于0就不交换
    // return a - b // 升序
    return b - a // 降序
})
```

ES5新增数组常见方法

* 2个索引方法：indexOf() 和 lastIndexOf()
* 5个迭代方法：forEach()、map()、filter()、some()、every()
* 2个归并方法：reduce()、reduceRight()

> 各种API案例在这里补充：

### 排序

#### 冒泡排序

```javascript
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j+1]) {
            var temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
```

#### 选择排序

```javascript
for (var i = 0; i < arr.length - 1; i++) {
    var min = i
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[min] > arr[j]) {
            min = j
        }
    }
    if (i != min) {
        var temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
}
```

> 另：插入排序、快速排序（了解思路）

### 去重

1. 双重for循环，只留下不重复的
2. 利用对象属性名不冲突
3. ES6（Set是一种新的数据类型，加强版数组，默认不允许重复）



## 字符串

### ASCII码

> 计算机最通用的编码标准，使用 7 位二进制数来表示所有的大写和小写字母，数字 0 到 9、标点符号， 以及在美式英语中使用的特殊控制字符。

### 字符串API

| 方法           | 描述                        |
| ------------ | ------------------------- |
| charAt       | 返回在指定位置的字符                |
| indexOf      | 检索字符串，返回下标                |
| lastIndexOf  | 从后向前搜索字符串                 |
| charCodeAt   | 返回在指定的位置的字符的编码            |
| fromCharCode | 从字符编码创建一个字符串              |
| concat       | 连接字符串                     |
| slice        | 提取字符串的片断，并在新的字符串中返回被提取的部分 |
| split        | 把字符串分割为字符串数组              |
| toLowerCase  | 把字符串转换为小写                 |
| toUpperCase  | 把字符串转换为大写                 |
| trim         | 去掉字符串前后空格（ES5）            |
| replace      | 替换与正则表达式匹配的子串             |
| match        | 找到一个或多个（正则表达式的）匹配         |
| search       | 检索与正则表达式相匹配的值             |
| substr       | 从起始索引号提取字符串中指定数目的字符（不推荐）  |
| substring    | 提取字符串中两个指定的索引号之间的字符（不推荐）  |
| startsWith   | 字符串是否以某个字符开头（ES6）         |
| endsWith     | 字符串是否以某个字符结尾（ES6）         |
| includes     | 字符串是否包含某个字符（ES6）          |
| repeat       | 重复某个字符串几次（ES6）            |



## 内置对象

> js内置的可以直接使用的对象

1. Number
2. String
3. Boolean
4. Array
5. Object
6. Function
7. RegExp
8. Error
9. Math
10. Date



## Math

> 数学对象，关于数学运算的属性和方法

Math.PI

Math.floor()

Math.ceil()

Math.round()

Math.pow()

Math.sqrt()

Math.abs()

**Math.random()**

生成一个min~max的随机数

```javascript
Math.random() * (max - min) + min
```



## Date

> 获取系统时间以及对日期做一些操作

获取当前日期 new Date()

*时间戳：从1970年到当前日期对象总的毫秒数*

### 获取系列API

getFullYear()

getMonth()  0~11

getDate()

getDay()   0~6星期

getHours()

getMinutes()

getSeconds()

getTime()  获取时间戳

### 设置系列API

**获取用get系列，设置换成set即可，但是day星期几不能设置**

**如果设置传了超过正常日期的参数，会自动计算**

### 转换字符串

toLocaleString()  转换为当地字符串

toUTCString()  转换为标准时区字符串



## BOM

> Browser Object Model 浏览器对象模型，js封装好的用来操作浏览器的一个对象模型，BOM的顶级对象是window。

#### window是全局浏览器内置顶级对象

##### 全局变量和全局函数默认是挂在window下的

##### window上的各种属性，比如：name、length、top，一般不要用作全局变量

window.innerWidth 获取浏览器内容宽度

window.innerHeight  获取浏览器内容高度

##### window下的子对象

1. location：地址栏

   location对象里有很多属性，这些属性想要明白意思就直接在控制台打印就行

   location.reload() 刷新，参数传true是强制刷新（清除缓存）

   location.replace()  replace是替换的意思，页面跳转

2. navigator 这个对象里可以获取浏览器相关的信息，但是以前的各种属性已经在逐渐被抛弃了

   navigator.userAgent  返回浏览器信息（可用此属性判断当前浏览器）

   判断当前浏览器类型的代码：这段代码拿去用就行

   ```javascript
   function isBrowser() {
       var userAgent = navigator.userAgent;
       //微信内置浏览器
       if(userAgent.match(/MicroMessenger/i) == 'MicroMessenger') {
           return "MicroMessenger";
       }
       //QQ内置浏览器
       else if(userAgent.match(/QQ/i) == 'QQ') {
           return "QQ";
       }
       //Chrome
       else if(userAgent.match(/Chrome/i) == 'Chrome') {
           return "Chrome";
       }
       //Opera
       else if(userAgent.match(/Opera/i) == 'Opera') {
           return "Opera";
       }
       //Firefox
       else if(userAgent.match(/Firefox/i) == 'Firefox') {
           return "Firefox";
       }
       //Safari
       else if(userAgent.match(/Safari/i) == 'Safari') {
           return "Safari";
       }
       //IE
       else if(!!window.ActiveXObject || "ActiveXObject" in window) {
           return "IE";
       }
       else {
           return "未定义:"+userAgent;
       }
   }
   ```


3. history（页面必须有历史纪录才能使用这些方法）
   * history.go(1)  参数可写任意整数，正数前进，负数后退
   * history.back()  后退一步
   * history.forward() 前进一步

4. screen: 屏幕，用的很少
   * window.screen.width 返回当前屏幕宽度(分辨率值)
   * window.screen.height 返回当前屏幕高度(分辨率值)

##### window下的弹框方法

* alert() 警告框
* prompt() 输入框
* confirm() 确认框

##### 定时器

* 超时定时器

  setTimeout 打开定时器

  clearTimeout  清除定时器

* 间隔定时器   

  setInterval 打开定时器

  clearInterval 清除定时器

不管是哪种定时器都可以用一个变量接收定时器的id，清除的时候用id来清除

##### window的各种事件

* window.onload 页面加载完成

* window.onscroll 页面滚动

  var scrolltop=document.documentElement.scrollTop||document.body.scrollTop; //兼容

* window.onresize 窗口大小改变



## DOM

> Document Object Model 文档对象模型，定义了表示和修改文档所需的对象、行为和属性，以及这些对象之间的关系
>
> DOM是ECMAScript来操作页面元素的一种工具
>
> DOM的核心对象是document

### DOM树

页面的所有元素可以看作是一颗倒挂的树，标签、文字、属性甚至包括注释都在这棵树上

### 获取元素

##### 从文档上直接获取

1. document.getElementById  通过id获取到元素对象

2. document.getElementsByClassName  通过class获取元素集合，得到的是一个类数组对象，有length属性，可以通过索引取到某一个对象

3. document.getElementsByTagName 通过标签名获取元素集合，得到的是一个类数组对象，有length属性，可以通过索引取到某一个对象

   > 但是现在因为对浏览器的兼容需求变小了（IE基本不用管了），所以前三种用的很少，用后面两种

4. document.querySelector 这个方法参数传选择器，取到的是第0个满足选择器的对象，就算有多个，仍然只取第0个对象
5. document.querySelectorAll 这个方法参数传选择器，取到所有满足选择器的元素，得到一个类数组对象，有length属性，可以通过索引取到某一个对象

##### 从某个元素出发在DOM树上获取

children  获取所有子元素（用的最多）

parentNode 获取父级元素（用的最多）

firstElementChild  获取当前元素节点的第一个子元素

lastElementChild  获取当前元素节点的最后一个子元素

previousElementSibling 获取上一个兄弟元素

nextElementSibling 获取下一个兄弟元素

### 属性获取和操作

#### 元素自带的属性

比如：img的src，a标签的href。。。这些属性可以直接用 . 来获取也可以赋值修改

#### 自定义属性

getAttribute( ) 获取

setAttribute( ) 设置，两个参数，属性名和属性值，注意：设置的任意类型的属性值最终都会变成字符串

removeAttribute( ) 移除

#### class获取和设置

1. className 这个获取或者设置的是整个class的字符串

2. classList （新增属性，低版本浏览器用不了）

   获取到的是一个伪数组，帮我们把元素的多个class切开

   add() 可以添加class

   remove() 可以移除某个class

### 操作DOM元素

##### 增：

var oDiv = document.createElement("div")  创建一个div

document.body.appendChild(oDiv)   把div插入到body最后

parentNode.insertBefore(newNode, targetNode); //将newNode插入targetNode之前

##### 改：

替换

parentNode.replaceChild(newNode, targetNode);  //使用newNode替换targetNode

克隆（复制）

clonedNode = Node.cloneNode(boolean) // 只有一个参数，传入一个布尔值，true表示深客隆，复制该节点下的所有子节点；false表示浅克隆，只复制该节点，不会复制里面的内容

##### 删：

parentNode.removeChild(childNode); // 移除目标节点

node.parentNode.removeChild(node);  //在不清楚父节点的情况下使用

childNode.remove()  // IE8-不支持

### 补充

##### 节点和元素

> DOM树上的所有东西都是节点，包括换行，注释，属性。。。
>
> 元素也是节点中的一种，称之为元素节点，也叫DOM元素，也叫DOM对象

Node.nodeName 获取节点的名称，#text文本节点，#comment注释节点，元素可以得到大写的标签名

如果你已经确定这是一个元素节点了，可以使用tagName属性获取大写标签名

##### body

因为body在页面上是唯一的，所以DOM提供了一种特殊获取方式，document.body

像这样的还有 document.title

而不用自己取查找一遍

当然，你也可以使用 document.querySelector('body') 来获取，但是没有必要

### DOM尺寸和坐标

#### 尺寸

* box.style.width、box.style.height可以获取和设置内联样式

* getStyle(box,"width") 可以获取最终生效得样式值（无论是行内内部还是外部）

  ```javascript
  function getStyle(obj,attr){    //获取非行间样式，obj是对象，attr是值
        if(obj.currentStyle){   //针对ie获取非行间样式
              return obj.currentStyle[attr];
        }else{
              return getComputedStyle(obj,false)[attr];   //针对非ie
        };
  };
  ```

* box.offsetWidth、box.offsetHeight 获取占位尺寸，包含 width、padding以及border
* box.clientWidth、box.clientHeight 获取内部大小，包含width和padding

* box.scrollWidth、box.scrollHeight 获取滚动内容宽高，如果box没有滚动条，跟clientHeight是一样的，有的话就是整个所有内容得高度，宽度也一样

> 后三种都是只读的，可以实时获取尺寸，但是不能设置

#### 位置坐标

* box.offsetLeft、box.offsetTop  获取元素当前相对于offsetParent父元素的位置

  offsetParent指的是box向上查找最近的有定位属性祖先元素，如果没有，则得到body

* box.clientLeft、box.clientTop 获取左边框和上边框的宽度，获取的是元素加边框前后的偏移量，也就是左边框和上边框的宽度
* box.scrollLeft、box.scrollTop 获取滚动内容上方的位置(就是隐藏的内容的高度)获取滚动内容左方的位置，一般配合onscroll事件来使用

> 另：box.scrollTop = box.scrollHeight - box.clientHeight 
>
> 让滚动条在最底部的公式



## 事件

> 事件是给浏览器定义一个预处理函数，当事件触发的时候，执行函数，这就是事件。

### 添加事件的方式

#### 事件绑定

这是一种赋值的方式，一个元素的同类型事件只能绑定一个，而且事件触发都是冒泡阶段处理的。

```javascript
document.onclick = function () {
    console.log('clicked')
}
```

**取消绑定：赋值为null把函数覆盖即可**

```javascript
document.onclick = null
```

#### 事件监听

给元素添加事件监听器，一个元素同类型事件可以同时监听多个，先监听先触发

而且在非IE的浏览器里可以指定处理阶段，在addEventListener的第三个参数去传（冒泡或者捕获）

写法有兼容

```javascript
// 非IE
document.addEventListener('click', function () {
    console.log('clicked')
}, false)

// IE
document.attachEvent('onclick', function () {
    console.log('clicked')
})
```

**移除监听**

removeEventListener

detachEvent

> 或者直接使用我们utils.js里封装好的on和off方法

### 事件对象

> 当事件被触发的时候可以从事件函数的参数里得到一个关于当前事件得一些信息，这个对象里包含了各种当前事件的方法和属性

#### 事件对象获取（兼容）

```javascript
document.onclick = function (e) {
    e = e || window.event
    console.log(e)
}
```

#### 事件对象的常见属性

##### 鼠标事件里的坐标

| 属性名                 | 含义                  |
| ------------------- | ------------------- |
| e.offsetX / offsetY | 获取事件触发最近的盒子（事件源）的坐标 |
| e.clientX / clientY | 获取可视区的坐标（根据浏览器的定位）  |
| e.screenX / screenY | 获取整个屏幕的坐标           |
| e.pageX / e.pageY   | 获取文档的坐标（包含滚动条）      |

##### 键盘事件里的键码

> 可以在键盘事件里获取当前按下的键码

```javascript
document.onkeydown = function (e) {
    e = e || window.event
    var code = e.keyCode || e.which
    console.log(code)
}
```

*功能键的特殊键码*

e.altKey
e.ctrlKey
e.shiftKey
返回值是布尔值；
可以用来判断组合键

```javascript
 if (e.keyCode === 13 && e.altKey) {
     alert('同时按下了enter和alt')
 }
```

### 默认行为

> 有一些html元素默认的行为，比如说a标签，点击后有跳转动作；form表单中的submit类型的input有一个默认提交跳转事件；reset类型的input有重置表单行为。（不写任何js代码也会触发的行为）

但是，有些时候我们是不需要默认事件的，所以就需要阻止默认事件

```javascript
if(e.preventDefault) {
   e.preventDefault()
}else {
    window.event.returnValue = false 
    //return false
}
```

### 事件流

> 一个完整事件包含 捕获阶段 ---> 目标阶段 --->冒泡阶段

但是一般都在冒泡阶段处理，在非IE监听事件addEventListener的时候可以决定在冒泡或者捕获的时候处理事件

但是IE浏览器不支持捕获阶段处理

#### 事件冒泡

> 子元素的事件或通过冒泡传播到父级以及祖先

但是冒泡有些时候并不需要，可以阻止

```javascript
if (e.stopPropagation) {
    e.stopPropagation()
} else {
    e.cancelBubble = true
}
```

#### 事件委托

> 利用事件冒泡，只指定一个事件处理程序，就可以处理某一类型的所有事件。使用场景主要用于事件源不确定的情况，可以把子元素的事件事件委托给父级

**事件委托的原理就是事件冒泡**

*获取事件源*

```javascript
var target = e.target || e.srcElement
```

*一般也会在获取到了事件源以后对他做一些判断，比如通过 tagName、className、id或者其他属性来判断事件源是谁，来进行对应操作*

优点：

1. 简单，方便
2. 可以为不确定的元素绑事件

**案例：表格编辑**

## ES5/ES6

> ECMA组织定义js核心语法的标准，这个标准几乎每一年都会更新，我们会简称为ES版本，ES6就是ES2015，但是其实现在提到ES6不止是2015年的标准，而是新一代的ES，也叫ES Next

### ES5

#### 严格模式（不常用，但是要知道）

> js的一种更加严格的运行模式，严格模式在开发中一般不会特意去使用，但是我们可以用严格模式来要求自己的代码
>
> 进入严格模式使用一个字符串 'use strict'，只要在某歌js文件开头写了这个字符串那么后面的代码全都是严格模式
>
> 如果在一个函数开头 ‘use strict’那就是这个函数在运行的时候以严格模式来运行

**严格模式下的一些变更**

1. 声明变量必须用关键字来声明（var\let\const）
2. 全局函数的this无法指向全局对象window，而是undefined
3. 函数参数不允许重名（非严格模式下重名后面的覆盖前面的）
4. 函数的arguments不能被动态改变
5. 新增保留字； implements, interface, let, package, private, protected, public, static, yield（但是目前浏览器大多已经支持ES6了，所以这些保留字很多已经是关键字了）

### ES5新增常见方法

#### Array API

2个索引方法：indexOf() 和 lastIndexOf()

5个迭代方法：forEach()、map()、filter()、some()、every()

2个归并方法：reduce()、reduceRight()

#### String API

 trim();// 去掉字符串前后空格  

trimLeft() 

trimRight()

#### 新增的对象方法（前三个很重要）

JSON.parse(str); //json序列化，将符合json格式的字符串转换为json

JSON.stringify(); //json转换为字符串

Date.now(); //日期对象得到当前日期的毫秒数



#### Object API

Object.keys(obj); //获取obj的所有属性名称，返回数组

Object.values(obj); // 获取obj的所有属性值，返回数组



Object.defineProperty(obj, prop, option); //给obj设置属性

```javascript
var obj = new Object();

Object.defineProperty(obj, 'name', {
	configurable: false, // 表示能否通过delete删除此属性
	writable: true, // 能否修改属性的值
	enumerable: true, // 表示该属性是否可枚举，即是否通过for-in循环或Object.keys()返回属性
	value: '张三'
})

console.log(obj.name)
```

Object.defineProperties(obj, props); // 一口气定义多个属性，原理和defineProperty一样

Object.assign 合并对象

> 一般第一个参数写{}，这样就不会影响本来的对象而是返回一个新的

```javascript
var obj1 = {name: 'lisi'}
var obj2 = {age: 19}
var obj3 = {gender: 'male'}
var obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4)
```

### ES6

### let

> 块级作用域，只在当前块级里有效，所谓的块级简单理解就是 {}

- let没有变量提升

- 暂时性死区

  > 案例：点击li弹出下标

### const

> 声明常量，不能被重新赋值的量

注意：引用类型（数组，对象，函数）可以使用他的API去修改内部结构，但是不能赋值（不能修改地址）

### 扩展运算符 ...

> 可以把数组或者对象展开成一系列逗号隔开的值

- 数组展开以后可以作为函数参数去传递或者用另外一个数组来接收
- 对象展开以后只能用另外一个对象来接收
- 可以用来复制数组或者对象

### rest运算符 ...

> 跟扩展运算符写法一样，用来把一系列逗号隔开的值合并成一个数组

可以用来把函数的实参合并到一个形参里

### String API

repeat

includes（使用最多的）

startsWith

endsWith

### 字符串模板

> 使用``来写字符串，这样可以直接换行，也可以通过${}里面写表达式会直接解析

一般用来拼接HTML字符串非常实用

### =>箭头函数

var test = () => { ... }

- 如果形参只有一个，小括号可以省略

- 如果函数只有一句话而且这句话就是返回值，那么{}和return关键字都可以省略

  但是要注意：如果返回的是对象，则要再加一层()

**箭头函数没有自己的this**

1. 如果你希望this指当前对象，那么就用普通函数
2. 如果你希望this指向外层对象，用箭头函数
3. 如果内层外层都要，用普通函数，this指内层，在外层声明一个变量把外层this存下来，比如 const \_this = this，\_this指外层

### 解构赋值

> 解构数组或者对象

数组是按顺序解构

对象按属性名解构

**另外一种用法**

```java
var age = 20
var username = 'lisi'
var gender = 'male'
var obj = { age, username, gender }
```

### class



## 面向对象

### 构造函数

> 构造一个对象的函数，一般首字母大写
>
> 因为在js里没有类，所以构造函数相当于是一个抽象类

### 原型

> prototype属性，函数的伴生体，构造函数的原型是给所有实例共享属性和方法的地方

**实例的\_\_proto\_\_ 指向构造函数的prototype**

**原型一层一层往上查找的过程称之为原型链**

**Object.prototype.\_\_proto\_\_  === null，这是原型链的终点**

**js一切皆为对象：因为所有数据都会沿着原型链找到Object.prototype**



instanceof  运算符，判断当前对象是否是另一个对象的实例，用它可以判断一个数据是否是数组

constructor    prototype里面的constructor指向当前对象的构造函数



### this

> this指的是当前上下文对象，意思就是当前正在执行的是哪个函数，this就指向当前函数的调用对象（箭头函数除外）

**箭头函数没有自己的this**

bind  封装函数的时候改变this

call      调用函数的时候改变this（传参就依次往后传递即可）

apply  调用函数的时候改变this（传参需要放到数组里传）



## 兼容问题

| 说明             | 写法                                                         |
| ---------------- | ------------------------------------------------------------ |
| 滚动条滚轮高度   | document.documentElement.scrollTop \|\| document.body.scrollTop |
| 事件对象         | e = e \|\| window.event                                      |
| 阻止默认行为     | e.preventDefault()      return false                         |
| 阻止冒泡         | e.stopPropagation()    e.cancelBubble = true                 |
| 键盘键码         | e.keyCode \|\| e.which                                       |
| 事件源           | e.target \|\| e.srcElement                                   |
| 添加事件监听     | addEventListener          attachEvent                        |
| 移除事件监听     | removeEventListener   detachEvent                            |
| 获取元素最终样式 | getComputedStyle  currentStyle                               |
| 获取浏览器宽度   | document.documentElement.clientWidth \|\| document.body.clientWidth |

