---
title: 'Axios无感知刷新token'
---

### 项目背景

用户需要登录后才能正常访问页面。

当用户登录成功后，后端接口会返给前端一个token，之后的每一次接口调用都需要携带token，服务端验证这个token来判断用户是否已经成功登录。

当然token是由时效性的，当token过期时，我们可以重新登录来获取新的token，但这样做体验会很差，所以要求我们利用旧的token去换取新的token。也就是说我们要调用一个刷新token的接口，将之前的token传给服务端来换取最新的token，有了最新的token之后，我们再次调用之前因为token过期返回状态接口，这样就做到用户无感知刷新token了。

### 方案讨论

利用`axios`中的`axios.interceptors.response.use()`接口请求后拦截，当token过期时，我们通过调用刷新token方法获取最新的token之后，携带最新的token再重新进行一次请求。一般一个页面的展示数据都需要调用多个接口，如果token过期了，每个接口都调用一遍刷新token，这样势必会造成资源浪费，我们希望的是如果token过期了，我们只调用一次刷新token接口。这里我的解决方案是定义一个`let isRefreshing = false;`标签变量，标记当前是否正在刷新token的状态，如果正在刷新则不再调用刷新token的接口。这里还有一个难点需要解决，就是多个接口同时发起请求时，假设第一个接口先进入，接着执行刷新token接口，因为标签变量的原因，其它接口不会执行刷新token，我们需要将剩下的接口放入到一个队列中，当刷新token接口执行完毕之后，再依次执行被放入到队列中的接口，这里我们需要用到`Promise`将所有未执行的`resolve`放入到一个数组中，数组中每一个元素都处于`pending`状态，当刷新请求的接口返回来后，我们再调用resolve，逐个释放。

### 实现

创建了一个`localStorage.js`文件，用于封装js的本地存储，我们要将从服务端获取的token存到浏览器缓存中，代码如下：

```js
  export default {
  //本地存储封装
  get(key){
    let data=localStorage.getItem(key);
    return JSON.parse(data)
  },
  set(key,val){
    let value=JSON.stringify(val);
    localStorage.setItem(key,value);
  }
  }
```

创建了一个`service.js`文件，用于封装`axios`还有刷新token的实现，代码如下：

```js
  import axios from "axios"; //引入axios
  import qs from "qs";//序列化post接口请求参数
  import LocalStorage from "./localStorage.js"; //H5本地存储封装方法
  let SECURITY_URL = "http://192.168.1.17:5505/security-amass/";//刷新token接口的base路径
  axios.defaults.headers.post["Content-Type"] ="application/x-www-form-urlencoded;charset=UTF-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios.defaults.withCredentials = false; // 携带cookie
  // 创建一个axios实例
  const instance = axios.create({
    timeout: 300000,
  });
  // 是否正在请求刷新token接口的标记
  let isRefreshing = false;
  // 请求队列
  let requests = [];
  //刷新token方法
  function refreshToken(params) {
    return instance.get(SECURITY_URL + "oauth/token", params);
  }
  //请求结果拦截器
  instance.interceptors.response.use(
    (response) => {
      // 接下来会在这里进行token过期的逻辑处理
      const config = response.config;
      let code = response.data.code;
      //这里的code值是跟后端约定好的， 40009代表token已经过期
      if (code == "40009") {
        if (!isRefreshing) {
          isRefreshing = true;
          let refresh_token = LocalStorage.get("refresh_token");
          //这里是我的项目中刷新token要传的参数，具体都传那些参数需要与后端开发确认
          let loginData = {
            grant_type: "refresh_token",
            client_id: "impawning",
            client_secret: "impawning",
            refresh_token,
          };
          refreshToken({ params: loginData })
            .then((res) => {
              let access_token = res.data.access_token;
              let refresh_token = res.data.refresh_token;
              LocalStorage.set("access_token", res.data.access_token);
              LocalStorage.set("refresh_token", res.data.refresh_token);
              config.headers["access_token"] = access_token;
              config.headers["refresh_token"] = refresh_token;
              requests.forEach((cb) => cb(access_token, refresh_token));
              requests = [];
              return instance(config);
            })
            .catch((err) => {
              window.location.href = "/";
            })
            .finally(() => {
              isRefreshing = false;
            });
        } else {
          // 正在刷新token，返回一个未执行resolve的promise
          return new Promise((resolve) => {
            // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
            requests.push((access_token, refresh_token) => {
              config.headers["access_token"] = access_token;
              config.headers["refresh_token"] = refresh_token;
              resolve(instance(config));
            });
          });
        }
      } else if (code == "40005" || code == "40003") {//这里代表token失效和token错误
        window.location.href = "/";
      } else {
        return response;
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const api = {
    get(url, data) {
      instance.defaults.headers.common["access_token"] = LocalStorage.get(
        "access_token"
      );
      instance.defaults.headers.common["refresh_token"] = LocalStorage.get(
        "refresh_token"
      );
      return instance.get(url, { params: data });
    },
    post(url, data) {
      instance.defaults.headers.common["access_token"] = LocalStorage.get(
        "access_token"
      );
      instance.defaults.headers.common["refresh_token"] = LocalStorage.get(
        "refresh_token"
      );
      //post接口封装
      return instance.post(url, qs.stringify(data));
    },
  };

  export { api };
```
