---
title: 'js排序算法'
---

![图 40](https://gitee.com/wongabner/picgo/raw/master/2021-03-23-19-59-38.png)  

### 冒泡排序（Bubble Sort)

![thum_F561E518FFBC476481D0B39686E67005](https://gitee.com/wongabner/picgo/raw/master/maopao.gif)

> 思路：数组中有 n 个数，比较每相邻两个数，如果前者大于后者，就把两个数交换位置；这样一来，第一轮就可以选出一个最大的数放在最后面；那么经过 n-1（数组的 length - 1） 轮，就完成了所有数的排序。

```js
function bubbleSort(arr) {
  var len = arr.length;
  //比较轮数
  for (var i = 0; i < len-1; i++) {
    //每轮比较次数，次数=长度-1-此时的轮数
    for (var j = 0; j < len - 1 - i; j++) {
      //相邻元素两两对比
      if (arr[j] > arr[j+1]) {
        //元素交换
        var temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
```

### 选择排序（Selection Sort）

![thum_44DBBEA2E9944E749CC2B4BCFC6882F9](https://gitee.com/wongabner/picgo/raw/master/xuanzhe.gif)

> 比如在一个长度为N的无序数组中，在第一趟遍历N个数据，找出其中最小的数值与第一个元素交换，第二趟遍历剩下的N-1个数据，找出其中最小的数值与第二个元素交换……第N-1趟遍历剩下的2个数据，找出其中最小的数值与第N-1个元素交换，至此选择排序完成。

```js
function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) { //寻找最小的数
        minIndex = j;               //将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
```

### 插入排序（Insertion Sort）

![thum_38B9943D96C646D1953BCAA53B9B04A4](https://gitee.com/wongabner/picgo/raw/master/charu.gif)

> 从第一个元素开始，该元素可以认为已经被排序；  
取出下一个元素，在已经排序的元素序列中从后向前扫描；  
如果该元素（已排序）大于新元素，将该元素移到下一位置；  
重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；  
将新元素插入到该位置后；  
重复步骤2~5。

```js
function insertionSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while(preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex+1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex+1] = current;
  }
  return arr;
}
```

### sort排序

```js
let sortArr = [5,4,3,2,12,1]
// sortArr.sort() // 1,12,3,4,5 排序不对，需要通过函数排序比较
sortArr.sort((a,b)=>a-b)
console.log(sortArr)

function f(a, b) {  //排序函数
  var a = a % 2;  //获取参数a的奇偶性
  var b = b % 2;  //获取参数b的奇偶性
  if (a == 0) return 1;  //如果参数a为偶数，则排在左边
  if (b == 0) return -1;  //如果参数b为偶数，则排在右边
}
var a = [3,1,2,4,5,7,6,8,0,9];  //定义数组
a.sort(f);  //根据数字大小由大到小进行排序
console.log(a);  //返回数组[3,1,5,7,9,0,8,6,4,2]
```

### 快速排序（Quick Sort）

![thum_ABFB45F8B2FF42E7BBC613692E8757F3](https://gitee.com/wongabner/picgo/raw/master/kuaisu.gif)

> 定义： 
1．先从数列中取出一个数作为基准数。
2．分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。
3．再对左右区间重复第二步，直到各区间只有一个数。

```js
function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}

function partition(arr, left ,right) {     //分区操作
    var pivot = left,                      //设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }        
    }
    swap(arr, pivot, index - 1);
    return index-1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```

```js
let quickSort = (arr) => {
    // 5.设置判断条件 当arr的长度小于等于1个的时候，没有必要继续左右顶堆，也没有必要去比较
    if(arr.length <= 1>) return arr
    // 1.初始化一个标识符
    let pivot = arr.shift()

    // 2.初始化一个左树和右树
    let left = [],
        right = []
    
    // 3.for循环遍历该数组中剩下的其他元素 进行比较 标识符和其中的每个元素挨个比较
    for (let i = 0; i< arr.length; i++) {
        if(arr[i] < pivot) {
            // 如果该元素小于标识符 放入左树
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }

    // 把左树和标识符和右树的内容直接返回
    return [...quickSort(left), pivot, ...quickSort(right)]
}
```

简化：

```js
    let quickSort = (arr) => {
        if(!arr.length) return []
        // 数组分别赋值给标识符和剩下的其他内容
        let [pivot, ...newArr] = arr,
            left = newArr.filter((e) => e < pivot),
            right = newArr.filter((e) => e > pivot)

        return [...quickSort(left), pivot, ...quickSort(right)]
    }
```

### 希尔排序（Shell Sort）

```js
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/3) {          //动态定义间隔序列
        gap =gap*3+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}
```

### 归并排序（Merge Sort）

![thum_2D5FC7AB865D44C98C34DF3C1A78ED91](https://gitee.com/wongabner/picgo/raw/master/guibin.gif)

```js
function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}
```

### 计数排序（Counting Sort）

![thum_DAD05B722A2B4BE4875772EE31206830](https://gitee.com/wongabner/picgo/raw/master/jishu.gif)

```js
function countingSort(arr, maxValue) {
    var bucket = new Array(maxValue+1),
        sortedIndex = 0;
        arrLen = arr.length,
        bucketLen = maxValue + 1;

    for (var i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    for (var j = 0; j < bucketLen; j++) {
        while(bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }

    return arr;
}
```
