### JavaScript 语言缺陷

- == 自动转换类型，导致只能多一个 ===，跟其他语言一样==就是严格比较多好
- 自动类型转换，实在没必要这样设计
- typeof null 的结果是 object，让人困惑，null在实编程践中使用率很低
- typeof 设计的不好，无法区分数组，但是能区分函数，但是数组和函数都属于对象。。
- 数据类型这样设计多好啊，基本数据类型：数字、字符串、布尔值、symbol、null，引用数据类型（数组、函数、对象）
- undefined 的存在有必要吗
- evel，with，goto
- 继承的方式让人困惑
- this 比较复杂
- 没有块作用域，只有函数作用域
- arguments为什么要是类数组呢，是数组不好吗
- NaN不等于自己，Not a Number，但是 typeof NaN 的值却又是 'number'，怎么想的？
- 变量提升
- 变量可以先使用后声明
- 支持全局变量
- 自动插入行尾分号
- 闭包
- delete 运算符，存在感低
- 没有模块
- 没有命名空间
- JavaScript这个名字也容易产生混淆
- 回调地狱
- 不支持big decimal
- function 关键字太长
- for...in 支持数组



JS掌握不好的部分：

- instanceof
- contructor
- prototype, __proto__
- es5 创建对象、原型继承
- apply，call，bind
- cookie操作，localstorage操作，indexDB
- 原生ajax，XMLHttpRequest，Fetch API
- DOM 操作
- 拖动相关BOM API，window，document，location，navigator，screen
- 操作符优先级，逗号操作符
- 垃圾回收
- es6：class类式继承, extend, promise, async/await, symbol, Map, WeakMap, Set, WeakSet，迭代器，生成器，Proxy，Reflect
- canvas
- JSONP
- base64
- 模块：AMD，UMD，CommonJS，ES6模块
- webworker
- 位操作符，进制转换
- for...in，for...of