---
nav:
  title: 面试
title: 'http'
group:
  title: 前端面试基础
---

## HTTP协议

### HTTP有哪些方法?

- HTTP1.0定义了三种请求方法: GET, POST 和 HEAD方法

- HTTP1.1新增了五种请求方法:OPTIONS, PUT, DELETE, TRACE 和 CONNECT

### 这些方法的具体作用是什么?

- GET: 通常用于请求服务器发送某些资源

- HEAD: 请求资源的头部信息, 并且这些头部与 HTTP GET 方法请求时返回的一致. 该请求方法的一个使用场景是在 下载一个大文件前先获取其大小再决定是否要下载, 以此可以节约带宽资源

- OPTIONS: 用于获取目的资源所支持的通信选项

- POST: 发送数据给服务器

- PUT: 用于新增资源或者使用请求中的有效负载替换目标资源的表现形式

- DELETE: 用于删除指定的资源

- PATCH: 用于对资源进行部分修改

- CONNECT: HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器

- TRACE: 回显服务器收到的请求，主要用于测试或诊断

### GET和POST有什么区别?

- 数据传输方式不同:GET请求通过URL传输数据，而POST的数据通过请求体传输。

- 安全性不同:POST的数据因为在请求主体内，所以有一定的安全性保证，而GET的数据在URL中，通过历史记 录，缓存很容易查到数据信息。

- 数据类型不同:GET只允许 ASCII 字符，而POST无限制

- GET无害: 刷新、后退等浏览器操作GET请求是无害的，POST可能重复提交表单

- 特性不同:GET是安全(这里的安全是指只读特性，就是使用这个方法不会引起服务器状态变化)且幂等(幂等的概念是指同一个请求方法执行多次和仅执行一次的效果完全相同)，而POST是非安全非幂等

### PUT和POST都是给服务器发送新增资源，有什么区别?

PUT 和POST方法的区别是,PUT方法是幂等的:连续调用一次或者多次的效果相同(无副作用)，而POST方法是非幂
等的。

除此之外还有一个区别，通常情况下，PUT的URI指向是具体单一资源，而POST可以指向资源集合。

举个例子，我们在开发一个博客系统，当我们要创建一篇文章的时候往往用 POST https://www.jianshu.com/articles ，这个请求的语义是，在articles的资源集合下创建一篇新的文章，如果我们多次提交这个请求会创建多个文章，这是非幂等的。

而 PUT https://www.jianshu.com/articles/820357430 的语义是更新对应文章下的资源(比如修改作者名称等)，这个URI指向的就是单一资源，而且是幂等的，比如你把『刘德华』修改成『蔡徐坤』，提交多少次都是修改成『蔡徐坤』

> ps: 『POST表示创建资源，PUT表示更新资源』这种说法是错误的，两个都能创建资源，根本区别就在于幂等性

### PUT和PATCH都是给服务器发送修改资源，有什么区别?

PUT和PATCH都是更新资源，而PATCH用来对已知资源进行局部更新。

比如我们有一篇文章的地址 https://www.jianshu.com/articles/820357430 ,这篇文章的可以表示为:

```js
  article = {
    author: 'dxy',
    creationDate: '2019-6-12',
    content: '我写文章像蔡徐坤',
    id: 820357430
  }
```

当我们要修改文章的作者时，我们可以直接发送 PUT https://www.jianshu.com/articles/820357430 ，这个时候的数据应 该是:

```js
  {
    author:'蔡徐坤',
    creationDate: '2019-6-12',
    content: '我写文章像蔡徐坤',
    id: 820357430
  }
```

这种直接覆盖资源的修改方式应该用put，但是你觉得每次都带有这么多无用的信息，那么可以发送 PATCH https://www.jianshu.com/articles/820357430 ，这个时候只需要:

```js
  {
    author:'蔡徐坤',
  }
```

### http的请求报文是什么样的?

请求报文有4部分组成:

- 请求行

- 请求头部

- 空行

- 请求体

![图 8](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-25-06-04-25.png)  

- 请求行包括:请求方法字段、URL字段、HTTP协议版本字段。它们用空格分隔。例如，GET /index.html HTTP/1.1。

- 请求头部:请求头部由关键字/值对组成，每行一对，关键字和值用英文冒号“:”分隔

- User-Agent:产生请求的浏览器类型。

- Accept:客户端可识别的内容类型列表。

- Host:请求的主机名，允许多个域名同处一个IP地址，即虚拟主机。

- 请求体: post put等请求携带的数据

![图 9](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-25-06-05-27.png)

### http的响应报文是什么样的?

响应报文有4部分组成:

- 响应行

- 响应头

- 空行

- 响应体

![图 10](https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/2021-03-25-06-06-25.png)  

- 响应行: 由协议版本，状态码和状态码的原因短语组成，例如 HTTP/1.1 200 OK 。

- 响应头:响应部首组成

- 响应体:服务器响应的数据

### 聊一聊HTTP的部首有哪些?

通用首部字段(General Header Fields):请求报文和响应报文两方都会使用的首部

- Cache-Control 控制缓存 

- Connection 连接管理、逐条首部 

- Upgrade 升级为其他协议

- via 代理服务器的相关信息

- Wraning 错误和警告通知

- Transfor-Encoding 报文主体的传输编码格式

- railer 报文末端的首部一览

- Pragma 报文指令

- Date 创建报文的日期

请求首部字段(Reauest Header Fields):客户端向服务器发送请求的报文时使用的首部

- Accept 客户端或者代理能够处理的媒体类型

- Accept-Encoding 优先可处理的编码格式

- Accept-Language 优先可处理的自然语言

- Accept-Charset 优先可以处理的字符集

- If-Match 比较实体标记(ETage)

- If-None-Match 比较实体标记(ETage)与 If-Match相反

- If-Modified-Since 比较资源更新时间(Last-Modified)

- If-Unmodified-Since比较资源更新时间(Last-Modified)，与 If-Modified-Since相反

- If-Rnages 资源未更新时发送实体byte的范围请求

- Range 实体的字节范围请求

- Authorization web的认证信息 

- Proxy-Authorization 代理服务器要求web认证信息 Host 请求资源所在服务器

- From 用户的邮箱地址

- User-Agent 客户端程序信息 

- Max-Forwrads 最大的逐跳次数

- TE 传输编码的优先级

- Referer 请求原始放的url

- Expect 期待服务器的特定行为

响应首部字段(Response Header Fields):从服务器向客户端响应时使用的字段

- Accept-Ranges 能接受的字节范围

- Age 推算资源创建经过时间

- Location 令客户端重定向的URI

- vary 代理服务器的缓存信息

- ETag 能够表示资源唯一资源的字符串

- WWW-Authenticate 服务器要求客户端的验证信息

- Proxy-Authenticate 代理服务器要求客户端的验证信息

- Server 服务器的信息

- Retry-After 和状态码503 一起使用的首部字段，表示下次请求服务器的时间

实体首部字段(Entiy Header Fields):针对请求报文和响应报文的实体部分使用首部

- Allow 资源可支持http请求的方法

- Content-Language 实体的资源语言

- Content-Encoding 实体的编码格式

- Content-Length 实体的大小(字节)

- Content-Type 实体媒体类型

- Content-MD5 实体报文的摘要

- Content-Location 代替资源的yri

- Content-Rnages 实体主体的位置返回

- Last-Modified 资源最后的修改资源 

- Expires 实体主体的过期资源

### 聊一聊HTTP的状态码有哪些?

2XX 成功

- 200 OK，表示从客户端发来的请求在服务器端被正确处理

- 201 Created 请求已经被实现，而且有一个新的资源已经依据请求的需要而建立

- 202 Accepted 请求已接受，但是还没执行，不保证完成请求

- 204 No content，表示请求成功，但响应报文不含实体的主体部分

- 206 Partial Content，进行范围请求

3XX 重定向

- 301 moved permanently，永久性重定向，表示资源已被分配了新的 URL

- 302 found，临时性重定向，表示资源临时被分配了新的 URL

- 303 see other，表示资源存在着另一个 URL，应使用 GET 方法丁香获取资源

- 304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况

- 307 temporary redirect，临时重定向，和302含义相同

4XX 客户端错误

- 400 bad request，请求报文存在语法错误

- 401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息

- 403 forbidden，表示对请求资源的访问被服务器拒绝

- 404 not found，表示在服务器上没有找到请求的资源

- 408 Request timeout, 客户端请求超时

- 409 Confict, 请求的资源可能引起冲突

5XX 服务器错误

- 500 internal sever error，表示服务器端在执行请求时发生了错误 

- 501 Not Implemented 请求超出服务器能力范围，例如服务器不支持当前请求所需要的某个功能，或者请求是服务器不支持的某个方法

- 503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求

- 505 http version not supported 服务器不支持，或者拒绝支持在请求中使用的 HTTP 版本

### 同样是重定向307，303，302的区别?

302是http1.0的协议状态码，在http1.1版本的时候为了细化302状态码又出来了两个303和307。

303明确表示客户端应当采用get方法获取资源，他会把POST请求变为GET请求进行重定向。 307会遵照浏览器标准，不会从post变为get。

### HTTP的keep-alive是干什么的?

在早期的HTTP/1.0中，每次http请求都要创建一个连接，而创建连接的过程需要消耗资源和时间，为了减少资源消耗， 缩短响应时间，就需要重用连接。在后来的HTTP/1.0中以及HTTP/1.1中，引入了重用连接的机制，就是在http请求头中 加入Connection: keep-alive来告诉对方这个请求响应完成后不要关闭，下一次咱们还用这个请求继续交流。协议规定

HTTP/1.0如果想要保持⻓连接，需要在请求头中加上Connection: keep-alive。

keep-alive的优点:

- 较少的CPU和内存的使用(由于同时打开的连接的减少了)

- 允许请求和应答的HTTP管线化

- 降低拥塞控制 (TCP连接减少了)

- 减少了后续请求的延迟(无需再进行握手)

- 报告错误无需关闭TCP连

### 为什么有了HTTP为什么还要HTTPS?

https是安全版的http，因为http协议的数据都是明文进行传输的，所以对于一些敏感信息的传输就很不安全，HTTPS就是为了解决HTTP的不安全而生的。

### TODO: 未完...

