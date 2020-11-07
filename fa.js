window.$docsify = window.$docsify || {};
window.$docsify.plugins = window.$docsify.plugins || [];
window.$docsify.plugins.push(function (hook, vm) {
  hook.afterEach(function (html, next) {
    next(parseBSAlert(html));
  });
});
function parseBSAlert(html) {
  var hb = html;
  var FARegex = /{i [^}]*}/g;
  var all = html.match(FARegex);
  if (all) {
    for (var i = 0; i < all.length; i++) {
      var iconRegex = /(?<=\{i )[^}]/g;
      var icon = all[i].match(iconRegex) || [];
      var res = `<i class="fa fa-${icon}"></i>`;
      hb = hb.replace(all[i], res);
    }
  }
  return hb;
}
