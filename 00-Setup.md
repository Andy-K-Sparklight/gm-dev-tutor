# 准备工作

<div class='progress' style='height:20px'><div class='progress-bar bg-success' style='width:40%'>普通</div></div>

> RarityEG：亲爱的，你是新来的？
>
> Noob01（你）：对，请问这里是 WaterHub 吗？我是来学习油猴脚本的……你不是人类？！
>
> RarityEG：（捋了捋她的秀发）当然，本小马写了这篇教程呢~先不管这些，你带了什么东西？
>
> Noob01（你）：呃……一个 IE 浏览器，记事本。
>
> RarityEG：（用蹄扶额）IE 都是老掉牙的东东了，这样吧，我来给你弄一套装备，是时候订购一个新的浏览器了……

## 安装 Edge 浏览器

Internet Explorer 虽然历史悠久，但它正在逐渐被淘汰——所以不要继续使用它了！Microsoft 早已研发了新产品：（新版）Edge。

新版 Edge 功能强大，运行流畅，我们就用它吧……但是，怎么着我们也是开发人员，该安装**开发人员版本**。

<div class="alert alert-info"><i class="fa fa-info-circle"></i> 如果你习惯了使用 Google Chrome，那就接着用它吧，它和新版 Edge 是同一个内核。</div>

在这里可以获得 Edge 的开发人员版本：https://www.microsoftedgeinsider.com/en-us/download/

我们建议使用 Dev Channel。Beta 更新太慢，Canary 又太不稳定，Dev 在它们两者之间做了个折中。

<div class="alert alert-warning"><i class="fa fa-exclamation-triangle"></i> <b>Edge 不支持 GNU / Linux 平台！</b>如果你在使用 GNU / Linux，请使用自带的 Mozilla Firefox 浏览器。</div>

安装过程非常简单，此处不再赘述。

安装完成后，在 Edge 中重新打开本页面，我们继续……

---

## 安装 VSCode

VSCode 或许是免费软件中最适合用于 JavaScript 开发的工具之一，它击败过 Vim、Sublime Text、Notepad++ 等著名编辑器，甚至碾压过 Atom。可能只有 WebStorm 可以和它媲美——不过，WebStorm 是收费的。所以，让我们接着使用 VSCode 吧~

你可以在这里获得 VSCode：https://code.visualstudio.com

<div class="alert alert-info"><i class="fa fa-plane"></i> 如果网页的打开耗时太久，可以试试 <a class="alert-link" href='https://microsoftedge.microsoft.com/addons/detail/%25E8%25B0%25B7%25E6%25AD%258C%25E4%25B8%258A%25E7%25BD%2591%25E5%258A%25A9%25E6%2589%258B/eoboojokdmamahfilfmamjjkcmkmddgk'>这个扩展</a></div>

<div class="alert alert-info"><i class="fa fa-info-circle"></i> VSCode 支持 GNU / Linux。</div>

启动 VSCode 后即可看到欢迎界面：

![VSCode](https://i.loli.net/2020/11/07/7URwmc3ravy6lYh.png)

<div class="alert alert-info"><i class="fa fa-info-circle"></i> 这是安装了 <i>Girl, Do you like Unicorn?</i> 主题后的效果。（VSCode 本来没有这么粉……）</div>

在左边菜单栏中单击「Extensions」（最下面一个），搜索并安装下列扩展：

- ESLint
- Prettier - Code formatter
- UserScript

<div class="alert alert-info"><i class="fa fa-info-circle"></i> 如果要将你的 VSCode 和我的保持完全一样，可以安装 <i>Girl, Do you like Unicorn?</i> 主题。</div>

---

## 安装 TamperMonkey

虽然我们的实例叫做「GreaseMonkey」，但我们要使用 TamperMonkey。

最早的用户脚本由 GreaseMonkey 管理，但到后来，TamperMonkey 超过了它，成为了目前最受欢迎的脚本管理器之一。TamperMonkey 的大名叫做「篡改猴」，但我们还是以习惯的方法叫它「油猴」（有点像 UNIX CC 和 GCC 的关系）。

TamperMonkey 完全兼容 GreaseMonkey 脚本。

在 Edge 商城很容易找到 TamperMonkey 扩展，它的下载页面在 [这里](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

安装完成后，Edge 的右上角应该多出一个图标：

![TamperMonkey](https://i.loli.net/2020/11/08/Hj5M4AlbFCETJRm.png)

---

<button type='button' class="btn btn-info" style="width:100%;transition:500ms;" onclick="$('#hideEle').show();this.onclick=function(){};this.className='btn btn-success';this.innerHTML=this.innerHTML.replace('question','check').replace('你完成了吗？','恭喜！');var ev = ev || window.event;new Firework(ev.clientX, ev.clientY).init();"><i class="fa fa-question"></i> 你完成了吗？</button>

<div id='hideEle' style='display:none;'>


> RarityEG：这么快！我才梳个头发，你就弄完了？
>
> Noob01（你）：……已经一个多小时了。

</div>