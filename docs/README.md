## 1、页面导入样式时，使用`link`和`@import`有什么区别

* `link`属于XHTML标签，除了加载CSS外，还可以定义`rel`连接属性等；`@import`是CSS提供的，只能加载CSS。
* `link`引用CSS时，在页面载入时同事加载；`@import`需要页面完全载入以后加载。
* `link`是XHTML标签无兼容问题；`@import`只有IE5以上才能被识别。
* `link`支持使用Javascript操作DOM的而方式去改变样式；`@import`不可以

## 2、圣杯布局和双飞翼布局的理解和区别

* 圣杯布局和双飞翼布局都是用于解决两边定宽，中间自适应的三栏布局，中间栏要放在文档流前面以优先渲染

* 圣杯布局：为了中间`div`不被遮挡，将中间`div`设置了左右`padding`后，将左右两个`div`用相对布局并分别配合`right`和`left`属性，以便左右两栏div移动后不遮挡中间`div`；双飞翼布局：为了中间`div`内容不被遮挡，直接在中间`div`内部创建子`div`，在子`div`里用`margin-left`和`margin-right`为左右两栏`div`留出位置

* 圣杯布局

  ```html
  <style>
    #hd {
      height: 50px;
      background: #666;
      text-align: center;
    }
    #bd {
      padding: 0px 200px 0px 180px;
      height: 100px;
    }
    #middle {
      float: left;
      width: 100%;
      height: 100%;
      background: blue;
    }
    #left {
      float: left;
      width: 180px;
      height: 100px;
      margin-left: -100%;
      background: #0C9;
      position: relative;
      left: -180px;
    }
    #right {
      float: left;
      width: 200px;
      height: 100px;
      margin-left: -200px;
      background: #0C9;
      position: relative;
      right: -200px;
    }
    #footer {
      clear: both;
      height: 50px;
      text-align: center;
      background: #666;
    }
  </style>
  <body>
    <div id="hd">Header</div>
    <div id="bd">
      <div id="middle">Middle</div>
      <div id="left">Left</div>
      <div id="right">Right</div>
    </div>
    <div id="footer">Footer</div>
  </body>
  ```

* 双飞翼布局

  ```html
  <style>
  	#hd {
      height: 50px;
      background: #666;
      text-align: center;
    }
    #middle {
      float: left;
      width: 100%;
      height: 100px;
      background: blue;
    }
    #left {
      float: left;
      width: 180px;
      height: 100px;
      margin-left: 100%;
      background: #0C9;
    }
    #right {
      float: left;
      width: 200px;
      height: 100px;
      margin-left: -200px;
      background: #0C9;
    }
    #inside {
      height: 100%;
      margin: 0px 180px 0px 200px;
    }
    #footer {
      clear: both;
      height: 50px;
      text-align: center;
      background: #666;
    }
  </style>
  <body>
    <div id="hd">Header</div>
    <div id="middle">
    	<div id="inside">Middle</div>
    </div>
    <div id="left">Left</div>
    <div id="right">Right</div>
    <div id="footer">Footer</div>
  </body>
  ```

## 3、用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

```js
(function randArr(arr) {
  arr = arr || []
  if (arr.length >= 5) {
    return arr
  }
  let num = 2 + Math.floor(Math.random() * 30)
  if (arr.indexOf(num) === -1) {
    arr.push(num)
  }
  return randArr(arr)
})()
```

## 4、`html`的元素有哪些（包含H5）

* <b>行内元素</b>
  + `a`
  + `b`
  + `span`
  + `strong`
  + `i`
  + `em`
  + `button`
  + `input`
  + `label`
  + `br`
  + `textarea`
  + `select`
* <b>块元素</b>
  + `div
  + `p
  + `h1-h6`
  + `ol`
  + `ul`
  + `li`
  + `table`
  + `tbody`
  + `td`
  + `tr`
  + `thead`
  + `dl`
  + `dt`
  + `dd`
* <b>H5新增元素</b>
  + `section`
  + `article`
  + `audio`
  + `video`
  + `header`
  + `aside`
  + `nav`
  + `footer`
  + `small`
  + `canvas`

## 5、CSS3有哪些新增特性

* 边框圆角 - `border-radius`
* 边框图像 - `border-image`
* 盒子阴影 - `box-shadow`
* 文字阴影 -` text-shadow`
* 背景图片尺寸 - `background-size`
* 背景图片定位 - `background-origin`
* 背景图片绘制区域 - `background-clip`
* 2d、3d变换 - `transform` / `rotate()` / `scale()` / `translate()`
* 过渡动画 - `transtion`
* 动画 - `animation`
* 多媒体查询 - `@mdeia`
* 弹性盒子 - `flex`
* ...

## 6、写一个方法去掉字符串中的空格

```js
function trim(str) {
  // 去掉所有空格
  str.replace(/\s*/g, '')
  // 去掉两头的空格
  str.replace(/^\s* | \s*$/g, '')
  // 去掉左侧开头的空格
  str.replace(/^\s*/, '')
  // 去掉右侧结尾的空格
  str.replace(/(\s*$)/g, '')
}
```

## 7、HTML全局属性有哪些（包含H5）

* `accesskey`: 设置快捷键
* `class`: 为元素设置类标识
* `contenteditable`: 指定元素内容是否可编辑
* `contextmenu`: 自定义鼠标右键弹出上下文菜单内容（仅firefox支持）
* `data-*`: 为元素增加自定义属性
* `dir`: 设置元素文本方向（默认 `ltr`）
* `draggable`: 设置元素是否可拖拽
* `dropzone`: 设置元素拖放类型（`copy` / `move` / `link`, H5新属性，主流均不支持）
* `hidden`: 规定元素仍未或不在相关
* `id`: 元素id，文档内唯一
* `lang`: 元素内容语言
* `spellcheck`: 是否启动拼写和语法检查
* `style`: 行内css样式
* `tabindex`: 设置元素可以获得焦点，通过tab导航
* `title`: 规定元素有关的额外信息
* `translate`: 元素和子孙节点内容是否需要本地化（均不支持）

## 8、在页面上隐藏元素的方法有哪些

* `display: none;`
* `margin-left:  -100%;`
* `filter: opacity(0);`
* `opacity: 0;`
* `visibility: hidden;`
* `height: 0; width: 0; overflow: hidden;`

## 9、去除字符串最后一个指定字符

```js
function deleteLast(str, target) {
  const reg = new RegExp(`${target}(?=([^${target}]*)$)`) // /a(?=([^a]*)$)/
  return str.replace(reg, '')
}
```

## 10、<span id="10">HTML的文件离线存储怎么使用，工作原理是什么</span>

离线存储是在HTML5中创建`cache manifesr`文件来实现Web应用的离线版本，好处：<b>没有网络时可以继续浏览、加载资源的加载速度、减少服务器负载</b>

离线存储的相关配置在`.appcahe`文件中，在服务器上就是一个文本文件`manifest`，有三个配置项：

* `CACHE MANIFEST` - 在此标题下列出的文件将在首次下载后进行缓存
* `NETWORK` - 在此标题下的文件需要与服务器进行连接，且不会被缓存
* `FALLBACK` - 在此标题下的文件规定当页面无法被访问时的回退页面

Javascript也暴露了`applicationCache`API让我们手动进行缓存的刷新

```js
CACHE MANIFEST
CACHE:
/theme.css
/main.js

NETWORK:
login.jsp

FALLBACK:
/ /404
```

## 11、CSS选择器有哪些？哪些属性可以继承？

* <b>选择器：</b>
  + 通配符
  + id
  + class
  + 标签
  + 后代选择器
  + 子选择器
  + 兄弟选择器
  + 属性选择器
  + 伪类选择器
  + 伪元素选择器
* <b>可继承属性</b>
  + font-size
  + font-weight
  + font-style
  + font-family
  + color
  + text-align
  + line-height
  + cursor
  + opacity
  + Visibility

## 12、写一个方法把下划线命名成大驼峰写法

```js
function transform(str) {
  let arr = str.split('_') 
  if (arr.length === 1) return str
  return arr.reduce((acc, val, index) => {
    if (index === 0) {
			acc += val
    } else {
      acc += val.substr(0, 1).toUpperCase() + val.substr(1)
		}
    return acc
  } , '')
}
```

## 13、简述`a`标签`target`属性的取值和作用

* `_self` - 在当前窗口打开页面
* `_blank` - 在新窗口打开页面
* `_parent` - 在`frame`和`iframe`中用的比较多，在父级框架中载入目标文档，当`a`本身在顶层时，与`_self`相同
* `_top` -  在`frame`和`iframe`中用的比较多，直接在顶层的框架中载入目标文档，加载整个窗口

## 14、CSS3新增伪类有哪些并简要描述

| CSS3伪类                                                     | 作用                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `:root`                                                      | 文档根元素，总是返回`html`                                   |
| `:last-child / :only-child / :only-of-type`                  | 文档的最后一个  / 唯一一个 / 指定类型的唯一一个子 元素       |
| `:nth-child(n) / :nth-last-child(n) / :nth-of-type(n) / :nth-last-of-type(n)` | 第n个 / 倒数第n个 / 指定类型的第n个 / 指定类型的倒数第n个 子元素 |
| `:enabled / :disabled`                                       | 启用 / 禁用                                                  |
| ``:checked                                                   | 已勾选                                                       |
| `:default`                                                   | 默认，例如`radio group`中默认选中的`radio`                   |
| `:valid / :invalid / :required / :optional / :in-range / :out-of-range` | 检验有效 / 检验无效 / 必填 / 非必填 / 限定范围内 /  限定范围外的 `input` |
| `:not()`                                                     | 括号内条件取反                                               |
| `:empty`                                                     | 没有子元素的元素                                             |
| `:traget`                                                    | URL片段标识符指向的元素                                      |

## 15、写一个把字符串大小写切换的方法

```js
function caseConvert(str) {
  const arr = str.split('')
  return str = arr.reduce((acc, val) => {
    return acc += /[A-Z]/.test(val) ? val.toLowerCase() : val.toUpperCase()
  }, '')
}
```

## 16、`label`都有哪些作用？举例相应的例子说明

* 利用`label`模拟`button`来解决不同浏览器原生`button`样式不同的问题

  ```html
  <input type="button" id="btn">
  <label for="btn">Button</label>
  
  <style>
    input[type='button'] {
      display: none;
    }
    label {
      display: inline-block;
      padding: 10px 20px;
      backhround: red;
      color: #fff;
      cursor: pointer;
      box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.3);
      boeder-radius: 2px;
    }
  </style>
  ```

* 结合`checkbox`、`radio`表单元素实现纯CSS状态切换

  ```html
  <input type="checkbox" id="controller">
  <label class="icon" for="controller">
  	<div class="play"></div>
    <div class="paus"></div>
  </label>
  <div class="animation"></div>
  
  <style>
  	...
    #controller:checked ~ .animation {
      animation-play-state: paused
    }
  </style>
  ```

* `input`的`focus`事件会触发锚点定位，我们可以利用`label`当触发器实现选项卡切换效果

  ```html
  <div class="box">
    <div class="list">
      <input id="one" readonly>
      1
    </div>
    <div class="list">
      <input id="two" readonly>
      2
    </div>
    <div class="list">
      <input id="three" readonly>
      3
    </div>
    <div class="list">
      <input id="four" readonly>
      4
    </div>
  </div>
  <div class="link">
    <label class="click" for="one">1</label>
    <label class="click" for="two">2</label>
    <label class="click" for="three">3</label>
    <label class="click" for="four">4</label>
  </div>
  
  <style>
    .box {
      width: 20em;
      height: 10em;
      border: 1px solid #ddd;
      overflow: hidden;
    }
    .list {
      height: 100%;
      background: #ddd;
      text-align: center;
      position: relative;
    }
    .list > input {
      position: absolute;
      top: 0px;
      height: 100%;
      width: 1px;
      padding: 0px;
      margin: 0px;
      clip: rect(0 0 0 0);
    }
  </style>
  ```

## 17、用CSS创建一个三角形，并简述原理

创建一个`div`，宽高都设置为0，设置边框，将其中一个边框设置颜色，其他边框设置透明，以下代码可实现一个正三角形

<img src="https://raw.githubusercontent.com/GuiYangGan/image-save/main/img/CSS-border%E7%94%9F%E6%88%90%E4%B8%89%E8%A7%92%E5%BD%A2.png" style="" />

## 18、写一个去处制表符和换行符的方法

```js
function fn(str) {
  return str.replace(/[\t|\n|\v|\r|\f]/g, '')
}
```

## 19、`iframe`框架都有哪些优缺点？

* <b>优点</b>
  + 可以实现异步刷新，单个`iframe`刷新不影响整体窗口的刷新（可以实现无刷新上传，在`FormData`无法使用时）
  + 可以实现跨域，每个`iframe`的源都可以不同（方便引入第三方内容）
  + 多页面应用时，对于共同的`header`、`footer`可以使用`iframe`加载，拆分代码（导航栏的应用）
* <b>缺点</b>
  + 每一个`iframe`都对应一个页面，也就意味着多余的`css`、`js`文件的载入，会增加请求的开销
  + 如果`iframe`内有滚动条，会严重影响用户的体验
  + `window.onload`时间会在所有`iframe`加载完成后才出发，因此造成页面阻塞

## 20、<span id="20">简述你对BFC规范的理解</span>

* <b>BFC全称“块级格式化上下文”，是CSS中的一个渲染机制，BFC就相当于一个盒子，内部元素与外界元素互不干扰</b>
* <b>形成条件（任意一条）</b>
  + `float`的值不是`none`
  + `position`的值不是`static`或者`relative`
  + `display`的值是`inline-block` / `table-cell` / `flex` / `table-caption` / `infine-flex`
  + `overflow`的值不是`visible`
* <b>特性</b>
  + 内部的盒子会在垂直方向上一个接一个的放置
  + 对于同一个BFC的两个相邻的盒子的`margin`会发生重叠，与方向无关
  + 每个元素的左边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
  + BFC区域不会与`float`的元素区域重叠
  + 计算BFC的高度时，浮动子元素也参与计算
  + BFC就是页面上的一个隔离的独立容器，容器里的子元素不会影响到外面的元素，反之亦然

##21、统计某一字符或字符串在另一个字符串中出现的次数

```js
function fn(str, target) {
  let count = 0
  if (!target) return count
  while (str.match(target)) {
    str = str.replace(target, '')
    count++
  }
  return count
}
// 另一种解法
// str.split(target).length - 1
```

## 22、简述下HTML5的离线存储原理，同时说明如何使用

[参考第10条](#10)

## 23、清除浮动的方式有哪些及优缺点

* <b>父元素添加浮动</b>
  可读性查，不易于维护，而且可能需要调整整个页面布局
* <b>在父元素下发元素添加样式`clear: both;`</b>
  可能会引入冗余元素
* <b>设置父元素`overflow: hidden;`</b>
  可能造成溢出元素不可见，影响展示效果
* <b>通过设置父元素`after`伪类`:after { display: block; content: ''; clear: both; }`</b>

## 24、写一个加密字符串的方法

```js
// 仅浏览器端支持
// 浏览器环境自带 btoa / atob 方法
function encode(str) {
  // str = Hello World
  // return SGVsbG8lMjBXb3JsZA==
  return btoa(encodeURIComponent(str))
}

function decode(str) {
  // str = SGVsbG8lMjBXb3JsZA==
  // return Hello World
  return decodeURIComponent(atob(str))
}
```

## 25、浏览器多个标签页之间的通信方式有哪些？

* `websocket`（可跨域）
* `postMessage`（可跨域）
* `Worker`的`sharedWorker`
* `localstorage`
* `cookies`

## 26、简述下你理解的优雅降级和渐进增强

* <b>优雅降级</b>
  先不考虑兼容，有限最新版本浏览器效果，之后再逐渐兼容低版本浏览器
* <b>渐进增强</b>
  考虑兼容，以较低（多）浏览器效果为主，之后再逐渐增加对新版本浏览器的支持，以内容为主或者改善使用体验

##27、写一个判断数据类型的方法

```js
/**
* typeof 只能判断基本数据类型 string、number、boolean、undefined、object
* typeof 不能区分数组和对象
* null 会被 typeof 判断为 object
*/
function getType(obj) {
  return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '')
}

console.log(getType([])) // "Array"
console.log(getType({})) // "Object"
```

## 28、`viewport`常见的设置有哪些？

`viewport`就是时区窗口，也就是浏览器中显示网页的部分。PC端基本等于设备显示区域，但在移动端上`viewport`会超出设备的显示区域（即显示横向滚动条）。
设备默认的`viewport`在 980 - 1024 之间。
`viewport`是在`mate`标签内进行控制

| 设置            | 解释                                                         |
| --------------- | ------------------------------------------------------------ |
| `width`         | 设置`layout viewport`的宽度，为一个整或字符串`"width-device"` |
| `height`        | 设置`layout viewport`的高度，很少使用                        |
| `user-scalable` | 是否允许用户进行缩放，值为`no`或`yes`                        |
| `initial-scale` | 设置页面的初始缩放值，为一个数字，可以带小数                 |
| `minimum-scale` | 允许用户的最小缩放值，为一个数字，可以带小数                 |
| `maximum-scale` | 允许用户的最大缩放值，为一个数字，可以带小数                 |

## 29、对比 `px`、`em`、`rem`有什么不同？

* `px`: 像素，相对长度单位，不会改变
* `em`: 1em = 当前元素的字体大小
* `rem`: 1rem = 当前html元素的字体大小

## 30、简要描述下什么是回调函数并写一个例子出来

回调函数就是在定义的时候先不执行，等满足一定条件的时候再拿出来执行

```js
setTimeout(function () {
  // do something
}, 300)
```

## 31、对标签语义化的理解是什么

* 代码结构清晰，方便阅读，有利于团队开发
* 方便其他设备解析，如移动设备、屏幕阅读器
* 有利于搜索引擎优化（SEO）

## 32、CSS常的布局方式有哪些？

* 流式布局：最基本的布局，就是顺着html像流水一样流下来
* 绝对定位：利用`position: absolute`进行绝对定位
* `float`布局：最初用来解决多栏布局的问题。比如圣杯、双飞燕的布局都可以用`float`来实现
* 栅格布局：bootstrap用的布局，把页面分24份，通过`row`和`col`进行布局
* `flex`布局：CSS3的布局可以非常灵活的进行布局和排版
* `grid`布局：网格布局

## 33、简要描述下JS有哪些内置的对象

* `Date` - 时间对象
* `String` - 字符串对象
* `Math` - 数学对象
* `Number` - 数值对象
* `Array` - 数组对象
* `Function` - 函数对象
* `arguments` - 函数参数集合
* `Boolean` - 布尔对象
* `Error` - 错误对象
* `Object` - 基础对象
* ...

## 34、常见浏览器内核有哪些？并介绍下你对内核的理解

浏览器内核：浏览器核心的部分，即渲染引擎，负责对网页语法的解释并渲染（显示）网页

* `Trident` - IE内核
* `Gecko` - FireFox内核
* `Webkit` - Safari内核，Chrome内核原型
* `Blink`

## 35、说说你对CSS盒子模型的理解

* 盒模型分为：IE盒模型和W3C盒模型
* 盒模型由`content`、`padding`、`border`、`margin`组成
* 区别：
  + IE盒模型的`width = content + padding + border`
  + W3C盒模型的`width = content`
* CSS3的`box-sizing`属性可以指定两种盒模型
  + `border-box`为IE盒模型
  + `content-box`为W3C盒模型（也是默认值）

## 36、写一个获取当前url查询字符串中的参数的方法

```js
function getParams() {
  let search = window.location.search.substr(1)
  const res = {}
  if (!search) return res
  search.split('&').forEach(item => {
    const [key, value] = item.split('=')
    res[key] = decodeURIComponent(value)
  })
  return res
}
```

## 37、网页应用从服务器主动推送到客户端有哪些方式？

`websocket`、`EventSource`（SSE）

## 38、HTML5中的`form`怎么关闭自动完成

`autocomplete="off"`

## 39、`::before`和`:after`中单冒号和双冒号的区别是什么？这两个伪元素有什么作用？

* CSS3是做了修订使用双冒号表示伪元素，来区别伪类
* `::before`在元素前面添加内容，`::after`在元素后面添加类容

## 40、说说你对Javascript的作用于的理解

* 全局作用域，顶层环境中申明的变量都是全局作用域，他们的属性其实都在`window`对象下面
* 函数作用域，在函数内部定义的变量都是函数作用域，只能在函数中反问到，也可以通过闭包来访问
* 局部作用域，ES6中新增的特性，使用`let`或者`const`来声明，解决了以前只能使用匿名及时运行函数来创建局部变量的缺陷
* 作用域链，比如在某个函数内使用了某变量，会先从当前作用域（即函数内部）先查找，如果没有的话，就依次网上查找，这就是作用域链

## 41、Http都有哪些状态码？

| 状态码 | 描述                                                         |
| ------ | ------------------------------------------------------------ |
| 200    | 成功                                                         |
| 301    | 重定向                                                       |
| 304    | （未修改）自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容 |
| 400    | （错误请求）服务器不理解的请求                               |
| 403    | （禁止）服务器拒绝请求                                       |
| 404    | （未找到）服务器找不到请求的网页                             |
| 500    | （服务器内部错误）服务器遇到错误，无法完成                   |
| 501    | （尚未实施）服务器不具备完成请求的功能。例如服务器无法识别请求方法是可能返回次代码 |
| 502    | （错误网关）服务器作为网关或代理，从上游服务器收到无效响应   |
| 503    | （服务不可用）服务器目前无法使用（由于超载或者停机维护）。通常这只是暂时状态 |
| 504    | （网关超时）服务器作为网关或者代理，但是没有及时从上游服务器收到请求 |
| 505    | （HTP版本不受支持）服务器不支持请求中所用的HTTP协议版本      |

## 42、为什么HTML5只需要写`<!DOCTYPE HTML>`就可以？

因为HTML5与HTML4基于的基准不同。HTML4基于SGML因此需要除了`DOCTYPE`外还需要引入DTD来告诉浏览器用什么标准进行渲染。DTD还分为标准模式、严格模式。如果什么都不写，就完全让浏览器自由发挥，最终办成怪异模式。

HTML5不基于SGML，因此后面就不需要跟DTD，但是需要`DOCTYPE`来规范浏览器的渲染行为

SGML是通用标记语言的集合。其中有HTML、XML，因此需要用DTD来指定使用哪种规范

## 43、`position: fixed;`在ios下武侠怎么办？

* 使用第三方库`isScrool.js`解决
* 将需要固定的元素设置`position: fixed; bottom: 0; height: 180px;`，内部需要滚动的元素样式设置`position: fixed; top: 0; left: 0; bottom: 180px; width: 100%; height: auto; overflow-y: auto;`

## 44、什么是闭包？优缺点分别是什么？

* 闭包是可以反问另一个函数作用域的函数，简单点说就是一个函数将另一个函数作为返回值
* 使用闭包可以隐藏变量以及防止变量被篡改和作用域污染，从而实现封装
* 由于保留了作用域链，会增加内存的开销。因此需要注意反之内存泄露的问题

## 45、你最喜欢用哪些编辑器？喜欢它的理由是什么？

VSCode: 打开速度快，多样的主题，插件功能强大，集成git

## 46、`title`与`h1`的区别？`b`与`strong`的区别？`i`与`em`的区别？

* `strong`是语义化的`b`
* `em`是语义化的`i`
* `title`是浏览器标题，权重最高；`h1`是文章内容标题

## 47、`style`标签卸载`body`前和`body`后的区别是什么？

渲染机制的区别，在`body`前是已经把样式浏览一遍，到了对应的标签直接渲染样式，显示快；在`body`后，是浏览器把标签浏览完，但没有样式显示不正确，然后在扫描到样式后才会显示真正的样式，效果差。

## 48、写一个数组去重的方法（支持多维数组）

```js
function flat(arr, target) {
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flat(arr, target)
    } else {
      target.push(item)
    }
  })
}

function flatArr (arr) {
  const result = []
 	flat(arr, result)
  return result
}

function uniqueArr(arr) {
	return [...new Set(flatArr(arr))]
}
// 或者
function uniqueArr(arr) {
  return [...new Set(arr.flat(Infinity))]
}
```

## 49、元素的`alt`和`title`有什么区别？

* `alt`属性用于表示一个图片加载不出来是，对图片的描述
* `title`属性表示一个元素的额外信息，鼠标悬浮在元素上时出现的内容

## 50、请描述`margin`边界得加是什么及解决方案？

`margin`的边界叠加发生在竖直方向上（左右方向上不会叠加）。兄弟DOM节点、父元素中的第一个子节点、以及最后一个为节点都会产生`margin`边界叠加的现象。

`margin`边界叠加只会出现在普通文档流中，所以可以出发BFC来解决，也可以使用`padding`来期待或者增加`border`的值

[BFC](#20)

## 51、返回顶部的方法有哪些？把其中一个方法写出来

```js
/**
* 顶部放置 <a name="top" />
* 需要回到顶部按钮的位置放置 <a href="#top">回到顶部</a>
*/

document.documentElement.scrollTop = 0

// 在 url 后增加 # 不刷新页面且会回到顶部
location.href += '#'

// IE不支持
window.scrollTo(0, 0)

```

##52、你认为`table`的作用和优缺点是什么呢？

* `table`用于表格数据的韩式，符合人们的直观认知
* `table`布局的好处在于样式好控制，特别是居中、对齐
* 缺点在于会多出非常多的DOM节点，导致页面加载变慢、不利于SEO

## 53、解释下CSS sprites的原理和优缺点分别额是什么？

* <b>多张图合并成一张图</b>
* <b>优点</b>
  + `hover`效果，如果是多个图片，网络正常的情况下首次会闪烁一下，如果是断网情况，就没有图片了，sprites很好的解决这个问题了
  + 合并了请求数
  + 制作帧动画方便
* <b>缺点</b>
  + 位置不好控制，有时候容易露底
  + 合成是比较费时
  + 位置计算费时
  + 更新一部分是，需要重新加载整个图片，缓存失效

## 54、