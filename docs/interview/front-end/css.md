# CSS
- 动画
- 动画如何做加速？
- CSS 硬件加速
- CSS Sprites
- 浮动、清除浮动
::: details 显示代码
```css
.clearfix:before,
.clearfix:after {
	content: " ";
	display: table;
}

.clearfix:after {
	clear: both;
}

/**
 * For IE 6/7 only
 */
.clearfix {
	*zoom: 1;
}
```
:::
- 盒子模型：标准盒子模型、IE 盒子模型
- 媒体查询
- flex 布局
- flex: 1 有什么作用？
- grid
- 阴影
- position 属性

`static, relative, absolute, fixed, inherit, sticky`

- display

- 透明度opacity

- 单位: px，%，rem，em，vw，vh，rpx

- 定位的几种方式：常规流、浮动、绝对定位

- 多行元素的文本省略号

- 常见颜色：#fff, #000, #f00, #0f0, #00f

- BFC、IFC

- margin 重叠问题

- 层叠上下文

- css 选择器，选择器权重/优先级

- css 选择器查找元素的方向(从右往左)

- 左边定宽，右边自适应布局；中间定宽，两边自适应布局；左右固定宽度，中间自适应

- 水平垂直居中

- nth-of-child 和 nth-of-type 的区别

- 画一条 0.5px 的线

- visibility=hidden, opacity=0, display: none

- 倒三角形
  ::: details 点击查看代码
  ``` css
  /* code goes here */
  ```
  :::
  
- 画三角形
  ::: details 点击查看代码
  
  ``` css
  .triangle {
      width: 0;
      height: 0;
      border-width: 50px;
      border-style: solid;
      border-color: pink transparent transparent transparent;
  }
  ```
  :::
  
- 画圆
  ::: details 点击查看代码
  ```css
  .circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid #000;
  }
  ```
  :::

- 画半圆
  
- 扇形。实现一个 1/4 圆、任意弧度的扇形
  
- 画奥运五环

- 画平行四边形 （提示：translate）

- border-box 的作用

- box-sizing

- z-index

- 文字溢出

- overflow

- calc 函数介绍及书写时候的注意事项

- 用 css 实现一个硬币旋转的效果
::: details 点击查看代码
``` css
#euro {
  width: 150px;
  height: 150px;
  margin-left: -75px;
  margin-top: -75px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-style: preserve-3d;
  animation: spin 2.5s linear infinite;
}

.back {
  background-image: url("/uploads/160101/backeuro.png");
  width: 150px;
  height: 150px;
}

.middle {
  background-image: url("/uploads/160101/faceeuro.png");
  width: 150px;
  height: 150px;
  transform: translateZ(1px);
  position: absolute;
  top: 0;
}

.front {
  background-image: url("/uploads/160101/faceeuro.png");
  height: 150px;
  position: absolute;
  top: 0;
  transform: translateZ(10px);
  width: 150px;
}

@keyframes spin {
  0% {
  	transform: rotateY(0deg);
  }
  100% {
  	transform: rotateY(360deg);
  }
}
```
:::
- 经典三栏布局怎么实现
- 常见布局：流体布局，圣杯布局，双飞翼布局，网格布局
- 两栏布局。要求：垂直两栏，左边固定右边自适应，或者左边自适应右边定宽
- 三栏布局。要求：垂直三栏布局，左右两栏宽度固定，中间自适应
- 圣杯布局 和 双飞翼布局。和三栏布局要求相同，不过中间列要写在前面保证优先渲染。
- 居中可以使用哪几个属性？不定宽度与定宽度如何居中？
- 项目用过 rem 布局吗？rem 如何做自适应的？
- rem 布局的优缺点
- 响应式布局
- css 预处理器：SASS / LESS / Stylus
- css3 新特性：transition，transform，animation，gradient，shadow，border-radius
- 相邻的两个 inline-block 节点为什么会出现间隔，如何解决
- 移动端适配有哪些？（viewport, media query, rem, flex）
- 移动端有哪些单位？（rem，px）
- css 实现宽度自适应 100%，宽高 16:9 的矩形
- 给 DOM 加遮罩层
- 实现一个百度搜索框
- opacity: 0、visibility: hidden、display: none 
- 变换 transform
- translate
- transition, animation，以及两者的区别
- H5 自适应方案
- 高度塌陷及解决方案
- CSS 禁止用户选择文字
```css
body {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
```

* FOUC(Flash Of Unstyled Content)，什么是FOUC，表现出的现象，出现的原因及解决方案
* 重绘、重排，怎么触发？如何规避？
* 伪类和伪元素的区别
* 如果需要手写动画，你认为最小时间间隔是多久，为什么？多数显示器默认的频率是60HZ，所以：1 / 60 * 1000 = 16.7ms
* 纯css实现幻灯片效果
* 透明效果：rgba(), opacity()
* 如何实现小于12px的文字效果。图片或transform: scale(0.7);
* link 和 @import 的区别
* 尝试实现：弹出框、导航栏、loading动画
* 正方形。使用 css 实现一个宽高自适应的正方形
* 已知如下代码，<img src="1.jpg" style="width:480px!important;”>，如何修改才能使图片的宽度为300px，原代码不可修改。max-width: 300px、transform: scale(0.625,0.625)、box-sizing: border-box; padding: 0 90px;、zoom: 0.625;
* reset.css，通常会重置哪些样式，说说你对它的理解
* normalize.css
* CSS 渲染树