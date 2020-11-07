window.$docsify.plugins.push(function (hook, vm) {
  hook.afterEach(function (html, next) {
    next(parseBSAlert(parseFA(html)));
  });
});
function parseFA(html) {
  var hb = html;
  var FARegex = /{i [^}]*}/g;
  var all = html.match(FARegex);
  console.log(all);
  if (all) {
    for (var i = 0; i < all.length; i++) {
      var iconRegex = /(?<=\{i )[^}]*/g;
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