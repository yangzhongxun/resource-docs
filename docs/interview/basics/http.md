# HTTP
- HTTP 常见状态码及其含义

```
1xx：信息，服务器收到请求，需要请求者继续执行操作

2xx：成功，操作被成功接收并处理
200 请求成功
204 无内容
206 Patial Content。表示客户端进行了范围请求，并且服务器成功执行了这部分的GET请求，
响应报文中包含由Content-Range指定范围的实体内容。

3xx：重定向，需要进一步的操作以完成请求
300 多种选择
301 资源（网页等）被永久转移到其他 URL
302 Found：临时性重定向，表示请求的资源被分配了新的URL，希望本次访问使用新的URL
303 See Other：表示请求的资源被分配了新的URL，应使用GET方法定向获取请求的资源
304 未修改
307 Temporary Redirect：临时重定向

4xx：客户端错误，请求包含语法错误或无法完成请求
400 客户端请求的语法错误，服务器无法理解
401 请求要求用户的身份认证
403 服务器理解请求客户端的请求，但是拒绝执行此请求
404 请求的资源不存在

5xx：服务端错误，服务器在处理请求的过程中发生了错误
500 Internal Server Error。服务器内部错误
502 Bad Gateway。作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
503 Service Unavailable。由于超载或系统维护，服务器暂时无法处理客户端的请求
504 网关超时。服务器作为网关或代理，未及时从上游服务器接收请求。
505 HTTP 版本不受支持。服务器不支持请求中所使用的 HTTP 协议版本
```

- TCP 三次握手和四次挥手过程
- TCP 和 UDP 的区别
- HTTP 1.1，HTTP 2.0，HTTPS
- 说下 http 和 https（概念、区别、工作原理、各自优缺点、建立连接的过程）
- HTTP缓存
- DNS 解析
- CDN
- get / post
- HTTP 请求中的 keep-alive 了解吗？
- HTTP 请求中 常用的 header 有哪些？
- http 请求中的方式，HEAD、OPTIONS
-  为什么http1不能实现多路复用？
-  http2首部压缩是什么原理？
- 讲解一下https的工作原理？
- https的请求可以拦截么，如何做?

- https是如何保证数据传输的安全的？

- 讲解一下https对称加密和非对称加密?

- http请求跨域问题，你都知道哪些解决跨域的方法？

- 常见 content-type

  ```
  application/x-www-form-urlencoded 数据被编码成 key/value 格式，常见的 form 表单提交
  application/json json格式的数据
  multipart/form-data 图片/文件提交
  image/jpeg jpg图片格式
  text/html HTML格式
  text/plain 纯文本格式
  ```

  