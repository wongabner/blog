---
title: 'promise'
---

# JS - Promise使用详解1（基本概念、使用优点）

## 一、promises相关概念

promises 的概念是由 CommonJS 小组的成员在 Promises/A 规范中提出来的。
 
### 1.then()方法介绍

根据 Promise/A 规范，promise 是一个对象，只需要 then 这一个方法。then 方法带有如下三个参数：

- 成功回调
- 失败回调
- 前进回调（规范没有要求包括前进回调的实现，但是很多都实现了）。

一个全新的 promise 对象从每个 then 的调用中返回。
 
### 2.Promise对象状态

Promise 对象代表一个异步操作，其不受外界影响，有三种状态：

- Pending（进行中、未完成的）
- Resolved（已完成，又称 Fulfilled）
- Rejected（已失败）。

1. promise 从未完成的状态开始，如果成功它将会是完成态，如果失败将会是失败态。
2. 当一个 promise 移动到完成态，所有注册到它的成功回调将被调用，而且会将成功的结果值传给它。另外，任何注册到 promise 的成功回调，将会在它已经完成以后立即被调用。
3. 同样的，当一个 promise 移动到失败态的时候，它调用的是失败回调而不是成功回调。
4. 对包含前进特性的实现来说，promise 在它离开未完成状态以前的任何时刻，都可以更新它的 progress。当 progress 被更新，所有的前进回调(progress callbacks)会被传递以 progress 的值，并被立即调用。前进回调被以不同于成功和失败回调的方式处理；如果你在一个 progress 更新已经发生以后注册了一个前进回调，新的前进回调只会在它被注册以后被已更新的 progress 调用。
5. 注意：只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
 
### 3.Promise/A规范图解

![图 1](https://gitee.com/wongabner/picgo/raw/master/2022-03-08-17-50-18.png)  

### 4.目前支持Promises/A规范的库

- Q：可以在NodeJS 以及浏览器上工作，与jQuery兼容，可以通过消息传递远程对象。
- RSVP.js：一个轻量级的库，它提供了组织异步代码的工具。
- when.js：体积小巧，使用方便。
- NodeJS的Promise
- jQuery 1.5：据说是基于“CommonJS Promises/A”规范
- WinJS / Windows 8 / Metro
 
## 二、使用promises的优势

### 1.解决回调地狱（Callback Hell）问题

1. 有时我们要进行一些相互间有依赖关系的异步操作，比如有多个请求，后一个的请求需要上一次请求的返回结果。过去常规做法只能 callback 层层嵌套，但嵌套层数过多的话就会有 callback hell 问题。比如下面代码，可读性和维护性都很差的。

```js
firstAsync(function(data){
    //处理得到的 data 数据
    //....
    secondAsync(function(data2){
        //处理得到的 data2 数据
        //....
        thirdAsync(function(data3){
              //处理得到的 data3 数据
              //....
        });
    });
});
```

2. 如果使用 promises 的话，代码就会变得扁平且更可读了。前面提到 then 返回了一个 promise，因此我们可以将 then 的调用不停地串连起来。其中 then 返回的 promise 装载了由调用返回的值。

```js
firstAsync()
.then(function(data){
    //处理得到的 data 数据
    //....
    return secondAsync();
})
.then(function(data2){
    //处理得到的 data2 数据
    //....
    return thirdAsync();
})
.then(function(data3){
    //处理得到的 data3 数据
    //....
}); 
```

### 2.更好地进行错误捕获 

多重嵌套 callback 除了会造成上面讲的代码缩进问题，更可怕的是可能会造成无法捕获异常或异常捕获不可控。

1. 比如下面代码我们使用 setTimeout 模拟异步操作，在其中抛出了个异常。但由于异步回调中，回调函数的执行栈与原函数分离开，导致外部无法抓住异常。

```js
function fetch(callback) {
    setTimeout(() => {
        throw Error('请求失败')
    }, 2000)
}
 
try {
    fetch(() => {
        console.log('请求处理') // 永远不会执行
    })
} catch (error) {
    console.log('触发异常', error) // 永远不会执行
}
 
// 程序崩溃
// Uncaught Error: 请求失败 
```

2. 如果使用 promises 的话，通过 reject 方法把 Promise 的状态置为 rejected，这样我们在 then 中就能捕捉到，然后执行“失败”情况的回调。

```js
function fetch(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             reject('请求失败');
        }, 2000)
    })
}
 
 
fetch()
.then(
    function(data){
        console.log('请求处理');
        console.log(data);
    },
    function(reason, data){
        console.log('触发异常');
        console.log(reason);
    }
);
```

当然我们在 catch 方法中处理 reject 回调也是可以的。

```js
 function fetch(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             reject('请求失败');
        }, 2000)
    })
}
 
 
fetch()
.then(
    function(data){
        console.log('请求处理');
        console.log(data);
    }
)
.catch(function(reason){
    console.log('触发异常');
    console.log(reason);
});
```
 
第二部分：

# JS - Promise使用详解2（ES6中的Promise）

2015年6月， ES2015（即 ECMAScript 6、ES6） 正式发布。其中 Promise 被列为正式规范，成为 ES6 中最重要的特性之一。
 
### 1.then()方法

简单来讲，then 方法就是把原来的回调写法分离出来，在异步操作执行完后，用链式调用的方式执行回调函数。

而 Promise 的优势就在于这个链式调用。我们可以在 then 方法中继续写 Promise 对象并返回，然后继续调用 then 来进行回调操作。
 
1. 下面通过样例作为演示，我们定义做饭、吃饭、洗碗（cook、eat、wash）这三个方法，它们是层层依赖的关系，下一步的的操作需要使用上一部操作的结果。（这里使用 setTimeout 模拟异步操作）

```js
//做饭
function cook(){
    console.log('开始做饭。');
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('做饭完毕！');
            resolve('鸡蛋炒饭');
        }, 1000);
    });
    return p;
}
 
//吃饭
function eat(data){
    console.log('开始吃饭：' + data);
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('吃饭完毕!');
            resolve('一块碗和一双筷子');
        }, 2000);
    });
    return p;
}
 
function wash(data){
    console.log('开始洗碗：' + data);
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('洗碗完毕!');
            resolve('干净的碗筷');
        }, 2000);
    });
    return p;
}
```

2. 使用 then 链式调用这三个方法：

```js
cook()
.then(function(data){
    return eat(data);
})
.then(function(data){
    return wash(data);
})
.then(function(data){
    console.log(data);
});
```

当然上面代码还可以简化成如下：

```js
cook()
.then(eat)
.then(wash)
.then(function(data){
    console.log(data);
});
```

3. 运行结果如下：

![图 2](https://gitee.com/wongabner/picgo/raw/master/2022-03-08-17-56-17.png)  

### 2.reject()方法
上面样例我们通过 resolve 方法把 Promise 的状态置为完成态（Resolved），这时 then 方法就能捕捉到变化，并执行“成功”情况的回调。
而 reject 方法就是把 Promise 的状态置为已失败（Rejected），这时 then 方法执行“失败”情况的回调（then 方法的第二参数）。
 
1. 下面同样使用一个样例做演示

```js
//做饭
function cook(){
    console.log('开始做饭。');
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('做饭失败！');
            reject('烧焦的米饭');
        }, 1000);
    });
    return p;
}
 
//吃饭
function eat(data){
    console.log('开始吃饭：' + data);
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('吃饭完毕!');
            resolve('一块碗和一双筷子');
        }, 2000);
    });
    return p;
}
 
cook()
.then(eat, function(data){
  console.log(data + '没法吃!');
})运行结果如下：
```

![图 3](https://gitee.com/wongabner/picgo/raw/master/2022-03-08-17-56-59.png)  

2. 如果我们只要处理失败的情况可以使用 then(null, ...)，或是使用接下来要讲的 catch 方法。

```js
cook()
.then(null, function(data){
  console.log(data + '没法吃!');
}) 
```

### 3.catch()方法

1. 它可以和 then 的第二个参数一样，用来指定 reject 的回调

```js
cook()
.then(eat)
.catch(function(data){
    console.log(data + '没法吃!');
});
```

2. 它的另一个作用是，当执行 resolve 的回调（也就是上面 then 中的第一个参数）时，如果抛出异常了（代码出错了），那么也不会报错卡死 js，而是会进到这个 catch 方法中。

```js
//做饭
function cook(){
    console.log('开始做饭。');
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('做饭完毕！');
            resolve('鸡蛋炒饭');
        }, 1000);
    });
    return p;
}
 
//吃饭
function eat(data){
    console.log('开始吃饭：' + data);
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('吃饭完毕!');
            resolve('一块碗和一双筷子');
        }, 2000);
    });
    return p;
}
 
cook()
.then(function(data){
    throw new Error('米饭被打翻了！');
    eat(data);
})
.catch(function(data){
    console.log(data);
});运行结果如下：
```

![图 4](https://gitee.com/wongabner/picgo/raw/master/2022-03-08-17-58-04.png)  

这种错误的捕获是非常有用的，因为它能够帮助我们在开发中识别代码错误。比如，在一个 then() 方法内部的任意地方，我们做了一个 JSON.parse() 操作，如果 JSON 参数不合法那么它就会抛出一个同步错误。用回调的话该错误就会被吞噬掉，但是用 promises 我们可以轻松的在 catch() 方法里处理掉该错误。
 
3. 还可以添加多个 catch，实现更加精准的异常捕获。

```js
somePromise.then(function() {
 return a();
}).catch(TypeError, function(e) {
 //If a is defined, will end up here because
 //it is a type error to reference property of undefined
}).catch(ReferenceError, function(e) {
 //Will end up here if a wasn't defined at all
}).catch(function(e) {
 //Generic catch-the rest, error wasn't TypeError nor
 //ReferenceError
}); 
```

### 4.all()方法

Promise 的 all 方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。

1. 比如下面代码，两个个异步操作是并行执行的，等到它们都执行完后才会进到 then 里面。同时 all 会把所有异步操作的结果放进一个数组中传给 then。

```js
//切菜
function cutUp(){
    console.log('开始切菜。');
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('切菜完毕！');
            resolve('切好的菜');
        }, 1000);
    });
    return p;
}
 
//烧水
function boil(){
    console.log('开始烧水。');
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('烧水完毕！');
            resolve('烧好的水');
        }, 1000);
    });
    return p;
}
 
Promise
.all([cutUp(), boil()])
.then(function(results){
    console.log("准备工作完毕：");
    console.log(results);
});
```

2. 运行结果如下：

![图 5](https://gitee.com/wongabner/picgo/raw/master/2022-03-08-17-58-55.png)  

### 5.race()方法

race 按字面解释，就是赛跑的意思。race 的用法与 all 一样，只不过 all 是等所有异步操作都执行完毕后才执行 then 回调。而 race 的话只要有一个异步操作执行完毕，就立刻执行 then 回调。

注意：其它没有执行完毕的异步操作仍然会继续执行，而不是停止。
 
1. 这里我们将上面样例的 all 改成 race

```js
Promise
.race([cutUp(), boil()])
.then(function(results){
    console.log("准备工作完毕：");
    console.log(results);
});
```
 
2. race 使用场景很多。比如我们可以用 race 给某个异步请求设置超时时间，并且在超时后执行相应的操作。

```js
//请求某个图片资源
function requestImg(){
    var p = new Promise(function(resolve, reject){
    var img = new Image();
    img.onload = function(){
       resolve(img);
    }
    img.src = 'xxxxxx';
    });
    return p;
}
 
//延时函数，用于给请求计时
function timeout(){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            reject('图片请求超时');
        }, 5000);
    });
    return p;
}
 
Promise
.race([requestImg(), timeout()])
.then(function(results){
    console.log(results);
})
.catch(function(reason){
    console.log(reason);
});上面代码 requestImg 函数异步请求一张图片，timeout 函数是一个延时 5 秒的异步操作。我们将它们一起放在 race 中赛跑。
```

- 如果 5 秒内图片请求成功那么便进入 then 方法，执行正常的流程。
- 如果 5 秒钟图片还未成功返回，那么则进入 catch，报“图片请求超时”的信息。

![图 6](https://gitee.com/wongabner/picgo/raw/master/2022-03-08-17-59-52.png)
