window.$docsify.plugins.push(function (hook, vm) {
  hook.afterEach(function (html, next) {
    next(
      parseBSAlert(parseFA(html.replace("{btmbtn}",
      `<button type='button' class="btn btn-info" style="width:100%;transition:500ms;" onclick="this.className='btn btn-success';this.innerHTML=this.innerHTML.replace('question','check').replace('你完成了吗？','恭喜！')">&i question 你完成了吗？</button>`
    ))));
  });
});
function parseFA(html) {
  var hb = html;
  console.log(hb);
  var FARegex = /&amp;i [a-z0-9\-]*/g;
  var all = html.match(FARegex);
  console.log(all);
  if (all) {
    for (var i = 0; i < all.length; i++) {
      var iconRegex = /(?<=&amp;i )[a-z0-9-]*/g;
      var icon = all[i].match(iconRegex) || [];
      var res = `<i class="fa fa-${icon}"></i>`;
      hb = hb.replace(all[i], res);
    }
  }
  return hb;
}
function parseBSAlert(html) {
  var hb = html;
  var BSAlertRegex = /{bsa (success|info|warning|danger|primary|secondary|dark|light)+ [^}]*}/g;
  var all = html.match(BSAlertRegex);
  if (all) {
    for (var i = 0; i < all.length; i++) {
      var typeRegex = /(?<=\{bsa )(success|info|warning|danger|primary|secondary|dark|light)/g;
      var textRegex = /(?<=\{bsa (success|info|warning|danger|primary|secondary|dark|light) )[^\}]*(?=\})/g;
      var type = all[i].match(typeRegex) || [];
      var text = all[i].match(textRegex) || [];
      var res = `<div class="alert alert-${type[0] || ""}">${
        text[0] || ""
      }</div>`;
      hb = hb.replace(all[i], res);
    }
  }
  return hb;
}
