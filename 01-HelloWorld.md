# 你好，世界

<div class='progress' style='height:20px'><div class='progress-bar bg-info' style='width:20%'>简易</div></div>

> Noob01（你）：现在该干什么呢？
>
> RarityEG：嗯……先带你了解一下油猴脚本的长相吧。

## 元信息

单击 TamperMonkey 图标，在弹出菜单中单击「添加新脚本」，你可以看到 TamperMonkey 已经为你准备好的部分代码：

```javascript
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();
```

在 `==UserScript==` 和 `==/UserScript==` 之间的是元信息，我们来分析一下这部分：

- `@name`：脚本名称。
- `@namespace`：命名空间，如果两个脚本同名，就以它区分。虽然示例给的是 URL，但是使用任何字符串应该都是可以的。
- `@version`：脚本版本号，应该按照 [语义化版本](https://semver.org/lang/zh-CN/) 定义。
- `@description`：描述，这里可以随便写。
- `@author`：作者。
- `@match`：这个脚本在哪些页面上工作，可以使用通配符。
- `@grant`：需要哪些权限。

---

## 主代码

`==/UserScript==` 以下的代码会被隔离执行（就像隔着铁栅栏操控机器），这并不是为了限制你，而是为了保证用户的安全。TamperMonkey 有些威力非常大的 API，不能让页面上的脚本随意调用。

那么我们赶紧来写代码吧！

修改信息为：

```javascript
// ==UserScript==
// @name         Hello World
// @namespace    Noob01.HelloWorld
// @version      1.0
// @description  My first script
// @author       Noob01
// @match        http*://*/*
// @grant        none
// ==/UserScript==
```

然后在 `// Your code here...` 的下一行编写：

```javascipt
alert("Hello World!");
```

最后看起来应该是这样：

```javascript
// ==UserScript==
// @name         Hello World
// @namespace    Noob01.HelloWorld
// @version      1.0
// @description  My first script
// @author       Noob01
// @match        http*://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    alert("Hello World!");
})();
```

实际效果图：

![Code](https://i.loli.net/2020/11/08/OAxchRSQPebC9lG.png)


现在，按下 <kbd>Ctrl</kbd> + <kbd>S</kbd> 组合键，保存脚本。

随便打开一个网页，就会弹出一个提示框：

![HelloWorld](https://i.loli.net/2020/11/08/DcB2lxA5asUEb6G.png)

如果是这样，那你已经完成了你的第一个脚本！

---

<button type='button' class="btn btn-info" style="width:100%;transition:500ms;" onclick="$('#hideEle').show();this.onclick=function(){};this.className='btn btn-success';this.innerHTML=this.innerHTML.replace('question','check').replace('你完成了吗？','恭喜！');var ev = ev || window.event;new Firework(ev.clientX, ev.clientY).init();"><i class="fa fa-question"></i> 你完成了吗？</button>

<div id='hideEle' style='display:none;'>

> RarityEG：干得漂亮！不过，现在先把它删掉吧，不然哪个网站都会弹出来这个东西，有点令马不爽。单击 TamperMonkey 图标，选择「管理面板」，在脚本右侧有一个删除按钮，单击它就可以移除脚本。
>
> Noob01：禁用它不行吗？
>
> RarityEG：……也行。

</div>