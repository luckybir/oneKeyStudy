console.show();
console.clear();
console.hide();
auto.waitFor();

let height = device.height;
let width = device.width;

var vCount = 7;//小视频默认学习个数
var vTime = 60;//每个小视频学习60秒

auto.waitFor();//等待获取无障碍辅助权限

launchApp("学习强国");
// videoStudy_bailing(7);//看bailing视频

// log(text("积分明细").exists())
// let v = text("积分规则").findOnce().parent();
// for(i=0;i<3;i++){
//   log(v.child(i));
//   log()
// }

// let list = className("android.widget.ListView").findOnce();
// log(list.child(1).childCount());
// for(i=0;i<4;i++){
//   log(list.child(1).child(i));
// }


className("android.widget.ListView")
.findOnce()
.children()
.forEach((item) => {
  // let name = item.child(0).child(0).text();
  let name = item.child(0).text();
  let str = item.child(2).text().split("/");
  let score = str[0].match(/[0-9][0-9]*/g);
  log(name+score);
});

exit();
