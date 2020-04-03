### Find HTML Elements

#### Method

- document.getElementById(id)
- document.getElementsByTagName(tagName)
- document.getElementByClassName(className) 
- document.getElementsByName(name)

- querySelector()
- querySelectorAll()

### Adding and Deleting Elements

| Method                                             | Description                       |
| -------------------------------------------------- | --------------------------------- |
| document.createElement(element)                    | Create an HTML element            |
| parentElement.removeChild(element)                 | Remove an HTML element            |
| parentElement.appendChild(newElement)              | Add an HTML element               |
| parentElement.replaceChild(newElement, oldElement) | Replace an HTML element           |
| document.write(text)                               | Write into the HTML output stream |
| createTextNode()                                   |                                   |
| element.remove()                                   |                                   |



> The `remove()` method does not work in older browsers.

### 插入节点

* parentElement.insertBefore(newElement, referenceElement)



### 属性

* innerHTML 
* innerText / textContent(IE9 以下不支持)
* element.attribute = new value
* element.style.property = new value
* style
* attributes
* parentNode
* children 注：IE6 到 IE8 完全支持 children 属性，但是返回元素节点和注释节点，IE9 以上版本只返回元素节点。
* childNodes[nodeNumber]
* firstChild
* lastChild
* nextSibling
* previousSibling
* element.setAttribute(attribute, value)
* element.getAttribute(attribute)
* nodeName
* nodeValue
* nodeType



document.createAttribute() 创建一个属性节点

document.createComment() 创建注释节点

document.createDocumentFragment()



> **Note:** `nodeName` always contains the uppercase tag name of an HTML element.



The most important nodeType properties are:

| Node               | Type | Example                                           |
| :----------------- | :--- | :------------------------------------------------ |
| ELEMENT_NODE       | 1    | `<h1 class="heading">W3Schools</h1>`              |
| ATTRIBUTE_NODE     | 2    | class = "heading" (deprecated)                    |
| TEXT_NODE          | 3    | W3Schools                                         |
| COMMENT_NODE       | 8    | `<!-- This is a comment -->`                      |
| DOCUMENT_NODE      | 9    | `The HTML document itself (the parent of <html>)` |
| DOCUMENT_TYPE_NODE | 10   | `<!DOCTYPE html>`                                 |

> Type 2 is deprecated in the HTML DOM (but works). It is not deprecated in the XML DOM.



### Adding Events Handlers

| Method                                                    | Description                                                 |
| --------------------------------------------------------- | ----------------------------------------------------------- |
| eventTarget.onclick = function(){*code*}                  | Adding event handler code to an onclick event。DOM 元素属性 |
| eventTarget.addEventListener(event, handler, useCapture); |                                                             |
| `<button onclick="alert('Hello world!')">`                | HTML 属性                                                   |

### Remove Events Handlers

| Method                                       | Description |
| -------------------------------------------- | ----------- |
| element.removeEventListener(event, handler); |             |



**NOTE:** The `addEventListener()` and `removeEventListener()` methods are not supported in IE 8 and earlier versions. However, for these specific browser versions, you can use the `attachEvent()` method to attach an event handlers to the element, and the `detachEvent()` method to remove it:

```javascript
element.attachEvent(event, function);
element.detachEvent(event, function);
```



