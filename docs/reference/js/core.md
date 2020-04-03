## 基础

标识符：以字母、$、_开头，其他部分可以是字母、数组、$、_

保留字、关键字

注释: 单行注释 //、多行注释 /**/

循环：for, while

判断：if...else if...else, switch...case

break, continue

数据类型

* 基本数据类型：string, number, boolean, null, undefined
* 引用数据类型：object, array, function





### 操作符



##### 数字操作符

| Operator | Description                                                  |
| :------- | :----------------------------------------------------------- |
| +        | Addition                                                     |
| -        | Subtraction                                                  |
| *        | Multiplication                                               |
| **       | Exponentiation ([ES2016](https://www.w3schools.com/js/js_es6.asp)) |
| /        | Division                                                     |
| %        | Modulus (Division Remainder)                                 |
| ++       | Increment                                                    |
| --       | Decrement                                                    |



##### 赋值操作符

| Operator | Example | Same As    |
| :------- | :------ | :--------- |
| =        | x = y   | x = y      |
| +=       | x += y  | x = x + y  |
| -=       | x -= y  | x = x - y  |
| *=       | x *= y  | x = x * y  |
| /=       | x /= y  | x = x / y  |
| %=       | x %= y  | x = x % y  |
| **=      | x **= y | x = x ** y |



##### 比较操作符

| Operator | Description                       |
| :------- | :-------------------------------- |
| ==       | equal to                          |
| ===      | equal value and equal type        |
| !=       | not equal                         |
| !==      | not equal value or not equal type |
| >        | greater than                      |
| <        | less than                         |
| >=       | greater than or equal to          |
| <=       | less than or equal to             |
| ?        | ternary operator                  |



##### 逻辑操作符

| Operator | Description |
| :------- | :---------- |
| &&       | logical and |
| \|\|     | logical or  |
| !        | logical not |



##### 类型操作符

| Operator   | Description                                                |
| :--------- | :--------------------------------------------------------- |
| typeof     | Returns the type of a variable                             |
| instanceof | Returns true if an object is an instance of an object type |



##### 位操作符

| Operator | Description           | Example | Same as      | Result | Decimal |
| :------- | :-------------------- | :------ | :----------- | :----- | :------ |
| &        | AND                   | 5 & 1   | 0101 & 0001  | 0001   | 1       |
| \|       | OR                    | 5 \| 1  | 0101 \| 0001 | 0101   | 5       |
| ~        | NOT                   | ~ 5     | ~0101        | 1010   | 10      |
| ^        | XOR                   | 5 ^ 1   | 0101 ^ 0001  | 0100   | 4       |
| <<       | Zero fill left shift  | 5 << 1  | 0101 << 1    | 1010   | 10      |
| >>       | Signed right shift    | 5 >> 1  | 0101 >> 1    | 0010   | 2       |
| >>>      | Zero fill right shift | 5 >>> 1 | 0101 >>> 1   | 0010   | 2       |



#### typeof

```javascript
typeof 'JavaScript' 	// Returns 'string'
typeof 2014 					// Returns 'number'
typeof NaN 						// Returns 'number'
typeof true 					// Returns 'boolean'
typeof false 					// Returns 'boolean'
typeof undefined			// Returns 'undefined'
typeof function myFunc() {} // Returns 'function'
typeof [] 						// Returns 'object'
typeof {} 						// Returns 'object'
typeof null						// Returns 'object'
```



#### Output

* innerHTML
* document.write
* window.alert
* console.log
* window.print



#### 变量提升



#### 类型转换 Type Conversion



#### 比较（== vs ===）



#### 作用域



#### this



#### strict mode



## String

#### 属性

* length



#### 方法

* indexOf
* lastIndexOf
* search
* slice(start, end)
* substring(start, end)
* substr(start, length)
* replace()
* toLowerCase()
* toUpperCase()
* concat()
* trim()
* charAt()
* charCodeAt()
* split()



## Array

#### 声明数组

```javascript
var array_name = [item1, item2, ...];
```



#### How to Recognize an Array

##### Solution 1:

```javascript
Array.isArray(array);
```

##### Solution 2:

```javascript
function isArray(arr) {
	return arr.constructor.toString().indexOf("Array") > -1;
}
```

##### Solution 3:

```javascript
array instanceof Array;
```



#### 删除元素

`delete arr[0]`



#### 属性

* length



#### 静态方法

* Array.isArray()



#### 方法

* push
* pop
* unshift
* shift
* reverse
* join
* concat
* slice
* splice
* forEach
* map
* filter
* some
* every
* indexOf
* lastIndexOf
* reduce
* reduceRight
* includes
* toString()
* sort()



## Function

#### 函数声明



#### 函数调用



#### Call & Apply



#### 闭包



#### 高阶函数



## Object

#### 声明对象



#### 访问对象属性

`objectName.propertyName`

or

`objectName['propertyName']`



#### 删除对象属性





## Number

### 属性

* MAX_VALUE
* MIN_VALUE
* POSITIVE_INFINITY
* NEGATIVE_INFINITY
* NaN



### 方法

* toString()
* toExponential()
* toFixed()
* toPrecision()
* valueOf()



### 转换变量为数字

* Number()
* parseInt()
* parseFloat()



## Math

* Math.random()

## Date

#### 属性



#### 原型方法

* getFullYear()
* getMonth()
* getDay()
* getDate()
* getHours()
* getMinutes()
* getSeconds()
* getMillseconds()



#### 静态方法

* Date.now()



## RegExp

* test
* match



## JSON

#### 方法

- JSON.parse()
- JSON.stringify()



