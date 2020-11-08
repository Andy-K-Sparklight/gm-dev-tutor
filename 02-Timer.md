# 损坏的大钟

<div class='progress' style='height:20px'><div class='progress-bar bg-success' style='width:40%'>普通</div></div>

>K：训练场那个该死的钟又坏掉了！
>
>RarityEG：我早就知道会这样，又偷工减料的，下次让那个用同步循环的家伙去修实验室去！
>
>K：你不来看看吗？
>
>RarityEG：我……我没时间，我要做这件新衣服……
>
>K：你——算了，我自己去修。
>
>RarityEG：嗯……等下，你把这个新人带上，给他看看 JavaScript 的基本用法。
>
>K：伙计，你是新来的吗？说说看，我帅不帅？
>
>RarityEG：行啦，对新人友好点。跟他走吧。
>
>Noob01（你）：我要带什么吗？
>
>K：把你的 VSCode 带上，我受够 TamperMonkey 的编辑器了。

## 获取当前的时间

JavaScript 中有一个 `Date` 对象，使用它就可以获得现在的时间和日期。

新建一个文件夹，名为 `Timer`。在 VSCode 中单击 「Open Folder」，选中这个文件夹并打开。

右键目录树的空白区域，单击「New File」创建新文件，并命名为 `main.js`。

![New File](https://i.loli.net/2020/11/08/tvCsf1JkVdlAzRT.png)

VSCode 会自动帮你打开这个文件，现在你就可以在里面编写代码了。

我们还是先写上元信息：

```javascript
// ==UserScript==
// @name         Timer
// @namespace    Noob01.Timer
// @version      1.0
// @description  A new clock.
// @author       Noob01
// @match        http*://*/*
// @grant        none
// ==/UserScript==
```

再把开始模板也写进去：

```javascript
(function(){
    "use strict"
    
    // Your code here...
})()
```

然后我们来获取当前的时间：

```javascript
// Your code here...
var now = new Date();
```

`var` 关键字表示要定义一个变量了，也就是说，`var` 告诉浏览器：「现在有一个东西叫做 `now` 了，把它设为 `new Date()`（创建的日期），以后见到 `now`，就要看作是这个日期哦~」

所以，把 `now` 换成其它名字，都是可以的（有一些限制），这个名字，就叫做**标识符**，JavaScript 用标识符区分每个变量。

但是，`now` 本身还不是我们需要的时间，如果你照葫芦画瓢地用 `alert(now)` 来输出它，弹窗会显示这样的东西：

```
1970-01-01T00:00:00.000Z
```

我们需要用一个**函数**来把它转换为常见的日期时间：

```javascript
var nowTime = now.toLocaleString();
```

顾名思义，这行代码又创建了一个变量，并把它设置为 `now` 转换过的结果。

好，那么我们再用 `alert` 显示出来：

```javascript
alert("现在的时间是：" + nowTime);
```

`+` 用于将两个字符串无缝拼起来，例如 `"cat" + "dog"` 等价于 `"catdog"`。

完整的代码：

```javascript
// ==UserScript==
// @name         Timer
// @namespace    Noob01.Timer
// @version      1.0
// @description  A new clock.
// @author       Noob01
// @match        http*://*/*
// @grant        none
// ==/UserScript==
(function(){
    "use strict"
    
    // Your code here...
    var now = new Date();
    var nowTime = now.toLocaleString();
    alert("现在的时间是：" + nowTime);
})()
```

按下 <kbd>Ctrl</kbd> + <kbd>S</kbd> 保存。

![Code](https://i.loli.net/2020/11/08/Zn7f9aiDlHzMdw6.png)

现在代码写好了，可是怎么导入 TamperMonkey 呢？

有两个方法：

- 和前面一个项目一样，在 TamperMonkey 中「添加新脚本」，并将里面的内容全部删除掉（清空），换成刚刚写好的代码。
- 第二个方法较为复杂，我们在讲到 Webpack 的时候再说。

替换完之后，在 TamperMonkey 中按 <kbd>Ctrl</kbd> + <kbd>S</kbd> 保存。

随便打开一个页面，就能看到这样的东西：

![Code](https://i.loli.net/2020/11/08/VXHci6a8PBEGuTA.png)

<div class="alert alert-info"><i class="fa fa-info-circle"></i> 粉色是后期涂上去的，不要在意就好。</div>

## 将时间写到页面中

这个钟还不太符合我们的需求，我们希望时钟可以显示在页面的某个地方，而不是暴力地弹出一个窗口。

要将时钟显示出来，我们只需要将 `alert(nowTime);` 换成其它的输出方式就行了。

JS 可以操作 HTML 页面上的元素，只要知道它的 ID。

<div class="alert alert-info"><i class="fa fa-info-circle"></i> 如果你对 HTML 还一无所知，可以参阅 <a class='alert-link' href='https://www.runoob.com/html/html-tutorial.html'>这里</a></div>

每个 HTML 页面实际上就是一个**文档**，所以用 ID 获取元素的方法就是：

```javascript
document.getElementById("元素的 ID");
```

可以将它赋给一个变量以便之后使用：

```javascript
var element = document.getElementById("元素的 ID");
```

修改一个元素的内容，可以使用 `innerHTML` 属性，属性就是一种特殊的变量。

```javascript
element.innerHTML = "新的内容";
```

用人类的语言说就是：「把 `element` 的 `innerHTML` 改成新的内容！」

现在就只剩下两个问题了：

- 到底放在哪里？
- 我怎么知道那个元素的 ID？

考虑到你们的问题，这里有一个实验区：

<div id="timerw" style='background-color:#ffe0f0;color:#150029;width:100%;height:50px;text-align:center;' onclick='regex = /[0-2]?[0-9]:[0-5][0-9]:[0-5][0-9]/g;if (regex.test($("#timer").html())) {var ev = ev || window.event;new Firework(ev.clientX, ev.clientY).init();}$("#hideEle").show();$("#timer").html("<i class=\"fa fa-check\"></i> 恭喜！你完成了任务！");'><p id="timer" style="line-height:50px" onclick='regex = /[0-2]?[0-9]:[0-5][0-9]:[0-5][0-9]/g;if (regex.test($("#timer").html())) {var ev = ev || window.event;new Firework(ev.clientX, ev.clientY).init();}$("#hideEle").show();$("#timer").html("<i class=\"fa fa-check\"></i> 恭喜！你完成了任务！");'


></p></div>

<div id='hideEle' style='display:none;'>

> RarityEG：你做好了？
>
> Noob01：这也太复杂了吧……又是循环，又是变量，又是判断……我要失去信心了！
>
> RarityEG：不要担心，很快你就会熟悉它们的，我们都是这样走过来的~现在把 Timer 删除掉（或者禁用），看看接下来会发生什么吧。

</div>

这个粉扑扑的区域内有一个 ID 为 `timer` 的元素。

我们试着将其中改成时间：

```javascript
var element = document.getElementById("timer");
element.innerHTML = nowTime;
```

但是，光这样做是**不行**的！想想为什么？

> DOM（文档对象模型，页面的骨架）的加载需要时间，而脚本是页面一开始加载就开始执行，如果不等待我们要操作的元素出现就强行操作，会出现错误从而导致没法正常工作。

你可能会想用循环来查询，但是这会影响页面加载速度，所以不行。我们需要使用**异步方法**来查询：

```javascript
function checkElement() {
    var element = document.getElementById("timer");
    if (element) {
      element.innerHTML = "现在的时间是：" + nowTime;
    } else {
      setTimeout(function () {
        checkElement();
      }, 500);
    }
  }
```

`function` 定义一个函数，我们在后面还会讲到它，了解即可。

`setTimeout` 设置异步定时器，这里我们设置为每 500 毫秒查询一次。如果你不懂这一块，也不要紧。

`if` 判断小括号内的值是不是有效值。在这里，如果 `element` 已经加载，那么 `element` 的值应当是有效的，这时候就会跳出循环并设置文本。

将所有这些代码整合到一起：

```javascript
// ==UserScript==
// @name         Timer
// @namespace    Noob01.Timer
// @version      1.0
// @description  A new clock.
// @author       Noob01
// @match        http*://*/*
// @grant        none
// ==/UserScript==
(function () {
  "use strict";
  // Your code here...
  var now = new Date();
  var nowTime = now.toLocaleString();
  checkElement();
  function checkElement() {
    var element = document.getElementById("timer");
    if (element) {
      element.innerHTML = "现在的时间是：" + nowTime;
    } else {
      setTimeout(function () {
        checkElement();
      }, 500);
    }
  }
})();

```

将它们添加到 TamperMonkey 中。

但是我们怎么看到效果呢？答案是，刷新这个页面，找到那个粉扑扑的区域，如果一切正常，其中应该显示着时间，就像这样：

![Timer](https://i.loli.net/2020/11/08/XWcypf82EkPexml.png)

<div class="alert alert-warning"><i class="fa fa-exclamation-triangle"></i> 单击的是<b>浏览器</b>上的「刷新」按钮，不是本站的标题！本站的 AJAX 刷新是没有办法执行脚本的！</div>

这个时钟虽然还不能实时更新，但已经很不错了，剩下的就交给 K 来完成吧！

对了，本节页面底部没有「你完成了吗？」按钮。如果想要完成任务，请：

- 按照上面的方法编写好脚本。
- 在时间显示后，单击一下粉红色的区域。如果成功，系统会提示「你完成了任务！」。

