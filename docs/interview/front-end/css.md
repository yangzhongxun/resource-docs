# CSS
- 动画
- 动画如何做加速？
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
- flex
- grid
- 阴影
- position 属性
- display
- 单位: px，rem，em
- 多行元素的文本省略号
- 常见颜色：#fff, #000, #f00, #0f0, #00f
- BFC、IFC
- margin 重叠问题
- 层叠上下文
- css 选择器，选择器权重
- css 选择器查找元素的方向(从右往左)，选择器优先级
- 左边定宽，右边自适应布局；中间定宽，两边自适应布局
- 水平、垂直居中
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
- 画奥运五环
- border-box 的作用
- box-sizing
- z-index
- calc() 函数
- 用 css 实现一个硬币旋转的效果
::: details 显示代码
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
- 双飞翼布局，圣杯布局
- 三栏布局，左右定宽，中间自适应
- 居中可以使用哪几个属性？不定宽度与定宽度如何居中？
- 项目用 rem 布局吧？rem 如何做自适应的？
- rem 布局的优缺点
- 响应式布局
- css 预处理器
- css3 新特性
- 相邻的两个 inline-block 节点为什么会出现间隔，如何解决
- meta viewport 移动端适配
- css 实现宽度自适应 100%，宽高 16:9 的矩形
- 给 DOM 加遮罩层
- 实现一个百度搜索框
