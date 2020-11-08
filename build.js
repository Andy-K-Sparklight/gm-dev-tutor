const fs = require("fs");
fs.readdir("./", (e, files) => {
  files.forEach((v) => {
    if (v.endsWith(".md")) {
      fs.writeFile(
        v,
        parseHide(
          parseBSAlert(
            parseFA(parseLevel(parseBtn(fs.readFileSync(v).toString())))
          )
        ),
        (e) => {
          if (e) {
            console.log("Error building " + v);
          } else {
            console.log(`File ${v} emitted.`);
          }
        }
      );
    }
  });
});
function parseBtn(html) {
  return html.replace(
    "&btmbtn",
    "<button type='button' class=\"btn btn-info\" style=\"width:100%;transition:500ms;\" onclick=\"$('#hideEle').show();this.onclick=function(){};this.className='btn btn-success';this.innerHTML=this.innerHTML.replace('question','check').replace('你完成了吗？','恭喜！');var ev = ev || window.event;new Firework(ev.clientX, ev.clientY).init();\"><i class=\"fa fa-question\"></i> 你完成了吗？</button>"
  );
}
function parseHide(html) {
  return html
    .replace("<!-- hideS -->", "<div id='hideEle' style='display:none;'>")
    .replace("<!-- hideE -->", "</div>");
}
function parseLevel(html) {
  var LvRegex = /xhx(简易|普通|较难|危险|骨灰)/g;
  var res = LvRegex.exec(html);
  if (res) {
    switch (res[1]) {
      case "简易":
        return html.replace(
          res[0],
          `<div class='progress' style='height:20px'><div class='progress-bar bg-info' style='width:20%'>简易</div></div>`
        );
      case "普通":
        return html.replace(
          res[0],
          `<div class='progress' style='height:20px'><div class='progress-bar bg-success' style='width:40%'>普通</div></div>`
        );
      case "较难":
        return html.replace(
          res[0],
          `<div class='progress' style='height:20px'><div class='progress-bar bg-warning' style='width:60%'>较难</div></div>`
        );
      case "危险":
        return html.replace(
          res[0],
          `<div class='progress' style='height:20px'><div class='progress-bar bg-danger' style='width:80%'>危险</div></div>`
        );
      case "骨灰":
        return html.replace(
          res[0],
          `<div class='progress' style='height:20px'><div class='progress-bar bg-dark' style='width:100%'>骨灰</div></div>`
        );
    }
  } else {
    return html;
  }
}
function parseFA(html) {
  var hb = html;
  var FARegex = /&i [a-z0-9\-]*/g;
  var all = html.match(FARegex);
  if (all) {
    for (var i = 0; i < all.length; i++) {
      var iconRegex = /(?<=&i )[a-z0-9-]*/g;
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
