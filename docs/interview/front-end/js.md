# JavaScript

## 基础
- 基本数据类型
- 引用数据类型
- 数组常用方法
- DOM 操作的 API 有哪些？
- typeof，instanceof
- call，apply，bind
- 节流、防抖
- ajax的原理，手写ajax
- 深浅克隆
- 尾递归调用，有什么问题，如何优化
- 闭包
- 原型，原型链，原型链继承
- 类的创建和继承

::: details 显示代码

``` js
// 父类
function Animal(name) {
  // 实例属性
  this.name = name;
  // 实例方法
  this.sleep = function () {
    console.log(this.name + '正在睡觉');
  }
}

// 原型方法
Animal.prototype.eat = function (food) {
  console.log(this.name + '正在吃：' + food);
}

// 子类
function Cat() {
  
}
```

:::

- 事件(W3C和IE)

- setTimeout与setInterval

- this

- new关键字的过程，尝试自己实现

- 懒加载和预加载，各自好处，区别，如何实现

- 操作符优先级

- 事件循环机制

- 继承的几种方式

- 构造函数

- [1,2,3].push(4) 的返回值

- 事件委托

- arguments

- 变量提升和函数声明提升

- JS的单线程

- 同步与异步

- 对象遍历 for in / for of / Object.keys()

- JavaScript的基本数据类型，0 == null吗？为什么？

- == 和 === 的区别

- cookie 的基本操作和封装

- cookie除了key与value还有哪些参数

- 绑定事件有哪几种方式？addEventListener有哪些参数？冒泡跟捕获有什么区别？

- 知道Promise是用来干嘛的吗？Promise底层如何实现的？为什么要用setTimeout去模拟。

- setTimeout执行机制（eventLoop）

- 定时器为什么会出现误差

- 如何理解执行上下文

- 如何理解作用域链

- 判断是否是 NaN

- 如何解决异步回调地狱

  ::: details 显示代码
```
promise、generator、async/await
```
​		:::

- js 的各种位置，比如 clientHeight, scrollHeight, offsetHeight 以及 scrollTop, offsetTop, clientTop 的区别？
- 实现一个 EventEmitter(on, off, emit, once)
- get 和 post 有什么区别？
- commonJS 和 ES Module 的区别
- ajax 中的 option 方法了解吗？
- var, const, let 的区别

## 进阶
- 数组去重

::: details 显示代码

```js
// 法一：indexOf循环去重
// 法二：ES6 Set去重；Array.from(new Set(array))
// 法三：Object 键值对去重；把数组的值存成 Object 的 key 值，比如 Object[value1] = true，
// 在判断另一个值的时候，如果 Object[value2]存在的话，就说明该值是重复的。
```

:::

- 数组排序
- 字符串翻转
- 驼峰和下划线互转
- Lazyman
- 打印1-10，并且每隔1s打印一个数字
- 小狗（Dog）叫声“wang”，小猫（Cat）叫声"miao"，他们同属Animal。请用原型和对象的知识写出他们的关系
- 快排
- 解析 url 的查询参数：https://baijiahao.baidu.com/s?id=15836176&wfr=spider&for=pc
- 手写计时和倒计时功能
- 一个列表，假设有100000个数据，这个该怎么办？(分页？)
- 页面搜索功能的实现
- 手写一个函数实现 add(2)(3) 和 add(2, 3)
- 大文件读取
- 大文件断点、分片上传
- 手写，居中红色按钮，点击按钮最上方蒙板弹出。
- 判断数据类型

::: details 显示代码

```js
// typeof
// instanceof
// Object.prototype.toString.call()
```

:::

- 判断是否是数组 Object.prototype.toString.call, Array.isArray(), instanceof

- 什么是 MVVM，MVC，MVP

- SPA，SSR

- 测速时候，你一般用 Date.now 还是使用 Performance?

- 说说内存泄漏和垃圾回收机制

- 说说你项目中实现的Dialog组件？提供了哪些API？如何设计这些API的？

- 实现一个方法，判断两个值是否相等

  ::: details 显示代码

  ``` js
  // Code goes here
  function differ() {
      
  }
  ```

  :::

- AMD是什么？解决什么问题？了解AMD,CMD,UMD吗？AMD与CMD的区别？啥叫依赖前置？

- 用 JS 代码求出页面上一个元素的最终的 background-color（不考虑IE浏览器，不考虑元素float情况）

- event loop（同步有宏任务、nexttick、微任务，异步有6个阶段）

- 大数相加和大数相乘

- 时针和分针在 5:15 和 7:45 的夹角

- 判断是否是回文数列

- 判断一个数是不是 2 的 n 次方（辗转相除、递归、toString、(n & n - 1) === 0，时间复杂度O(1)），拓展：判断数 r 是否是 m 的 n 次幂。

- 怎么拓展 JS 的方法（原型链方法、兼容性、不和原生方法冲突）

- 计算任意时刻时针和分针的夹角

  ::: details 显示代码

  ```typescript
  /**
   * @params hours {Number} 小时
   * @params minutes {Number} 分钟
   */
  function calculateAngle(hours: number, minutes: number) :number {
    const TOTAL_ANGLE: number = 360;
  
    const minutesAngle: number = minutes / 60 * TOTAL_ANGLE;
    const hoursAngle: number = (hours + minutes / 60) / 12 * TOTAL_ANGLE;
  
    return Math.abs(minutesAngle - hoursAngle);
  }
  ```

  :::

- setTimeout 实现 interval(注意和普通的要无差别体验)

- 字符串大小写反转

- 合并数组

- 合并有序数组

- 一堆数字字符串组成最大数是多少[50, 2, 5, 9] => 95502 (贪心)

- js 拖拽功能的实现

- js 监听对象属性的改变

``` js
// 我们假设这里有一个user对象,
// (1)在ES5中可以通过Object.defineProperty来实现已有属性的监听
Object.defineProperty(user, 'name', {
  set: function(key, value){}
});
// 缺点：如果id不在user对象中，则不能监听id的变化

//(2)在ES6中可以通过Proxy来实现
const user = new Proxy({}, {
  set: function(target,key,value,receiver) {}
})
// 这样即使有属性在user中不存在，通过user.id来定义也同样可以这样监听这个属性的变化哦~
```

* 将原生的 ajax 封装成 promise
* 实现一个once函数，传入函数参数只执行一次

```js
function once(func) {
  let available = true;
  
  return function() {
    if(available === true){
      func.apply(null, arguments);
      available = false;
    }
  }
}
```

- 如何实现一个私有变量，用getName方法可以访问，不能直接访问
- == 和 ===、以及 Object.is 的区别
- setTimeout、setInterval和requestAnimationFrame之间的区别
- 如何实现 sleep 的效果
- Function._proto_(getPrototypeOf) 是什么？
- 观察者模式和发布订阅模式的区别
- 消费者模式
- 杨辉三角形
- 顺时针打印矩阵
- instanceof 实现原理，尝试自己实现
- 不用循环生成 1-1000 的数组（Array.from()）
- Object.assign() 和 Object.create()
- Object.defineProperty
- 严格模式
- 新的数组方法：forEach, map, filter
- 如何实现一个事件注册
- 实现一个简单的mvvm
- css与js动画差异
- 如何在页面上实现一个圆形的可点击区域
- base64原理及优缺点
- 如何避免自己的页面被嵌套
- 怎么阻止浏览器右键

## ES6+
- let，const
- symbol 及其应用场景
- for...of
- promise
- fetch
- 迭代器  iterator
- 生成器 generator
- 代理 proxy
- 类 class
- 继承 extends
- 箭头函数
- 模板字符串
- 解构赋值 Destructuring
- 新增的方法
- 代理与反射
- 模块 module
- 拓展的字符串
- rest 拓展运算符
- spread 展开操作符
- map，set
- 不定参数和默认参数
- await，async
- 对象属性简写、对象方法简写
- 装饰器 decorator
- Tail Calling
- Fetch

