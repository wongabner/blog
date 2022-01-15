---
nav:
  title: 面试
title: 'js中的逻辑运算符'
group:
  title: basic
---

### 1、JS中的||符号：

> 运算方法：
> 只要“||”前面为false,不管“||”后面是true还是false，都返回“||”后面的值。
> 只要“||”前面为true,不管“||”后面是true还是false，都返回“||”前面的值。
>
> 总结：真前假后

### 2、JS中的&&符号：

> 运算方法：
> 
> 只要“&&”前面是false，无论“&&”后面是true还是false，结果都将返“&&”前面的值;
>
> 只要“&&”前面是true，无论“&&”后面是true还是false，结果都将返“&&”后面的值;
>
> 总结：假前真后

弄懂了以上说的还应该知道：

    js的6个蛋蛋：在js逻辑运算中，0、”“、null、false、undefined、NaN都会判为false，其他都为true。

举个栗子：

![图 33](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-22-40.png)  

### 3、位运算符：|

> 运算方法：
> 两个位只要有一个为1，那么结果都为1。否则就为0

继续举栗子

![图 34](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-23-06.png)  

|运算符还能进行取整运算

![图 35](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-23-18.png)  

### 4、位运算符：&

> 运算方法：
> 两个数值的个位分别相与，同时为1才得1，只要一个为0就为0。

还是举栗子：

![图 36](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-23-19-23-29.png)  

