/*
 * @Description: 淘宝种树js脚本
 * @Author: Allen
 * @Date: 2020-09-16 15:20:43
 * @LastEditors: Allen
 * @LastEditTime: 2020-10-13 16:21:45
 */

// 种树开始
console.show();


const height = device.height;
const width = device.width;
setScreenMetrics(width, height);

// 当前用户
const userNumber = dialogs.input("请输入用户编号");

log("当前用户编号", userNumber);

// 用户信息
const userList = [
  {
    clip:
      "3覆置本段内容 Http:/T￥6Sbtc4bvOFB￥da開绹..寶【拜托帮我点一下吧～你也可以领免费水果！】",
    helping: [
      "-9fu致本段内容 Http:/T￥hqDxcVuQgVD￥转移至τa0寳【拜托帮我点一下吧～你也可以领免费水果！】",
      "-2.0付致内容 Http:/T￥9n9GcVtP8Dk￥到τa0寳【拜托帮我点一下吧～你也可以领免费水果！】", 
      "0.0fu置文本 Http:/T￥N632chotXFg￥转移至τa0寳【拜托帮我点一下吧～你也可以领免费水果！】",
    ],
  },
  {
    clip: "1fu置文本 Http:/T￥Di3cchoIAWr￥打開氵匋寳【拜托帮我点一下吧～你也可以领免费水果！】",
    helping: [
      "-9fu致本段内容 Http:/T￥hqDxcVuQgVD￥转移至τa0寳【拜托帮我点一下吧～你也可以领免费水果！】",
      "-2.0付致内容 Http:/T￥9n9GcVtP8Dk￥到τa0寳【拜托帮我点一下吧～你也可以领免费水果！】",
      "8.0复制文本 Http:/T￥NKNQc6JbDVh￥转移至τa0寳", // 李小号
    ],
  },
  {
    clip: "-2.0付致内容 Http:/T￥9n9GcVtP8Dk￥到τa0寳【拜托帮我点一下吧～你也可以领免费水果！】",
    helping: [
      "3覆置本段内容 Http:/T￥6Sbtc4bvOFB￥da開绹..寶【拜托帮我点一下吧～你也可以领免费水果！】", 
      "-9fu致本段内容 Http:/T￥hqDxcVuQgVD￥转移至τa0寳【拜托帮我点一下吧～你也可以领免费水果！】"
      "4.0付致文本 Http:/T￥s9WCchl2o2m￥到τa0寳【拜托帮我点一下吧～你也可以领免费水果！】",
    ],
  },
  {
    clip: "-2.0付致内容 Http:/T￥9n9GcVtP8Dk￥到τa0寳【拜托帮我点一下吧～你也可以领免费水果！】",
    helping: [
      "7.0幅治内容 Http:/T￥fOdWcfJQM0E￥da開τao寶【拜托帮我点一下吧～你也可以领免费水果！】",
      "8fu致本段内容 Http:/T￥QflscfJn8Zc￥转移至τa0寳【拜托帮我点一下吧～你也可以领免费水果！】",
      "0.0fu置文本 Http:/T￥N632chotXFg￥转移至τa0寳【拜托帮我点一下吧～你也可以领免费水果！】", 
    ],
  },
];

sleep(1000);

var appRun = currentActivity();
if (appRun != "com.taobao.taobao") {
  launch("com.taobao.taobao");
  log("打开手机淘宝中");
  waitForActivity("com.taobao.tao.TBMainActivity");
  log("进入淘宝");
}

sleep(1000);

// 好友助力任务
helpingHand();

sleep(2000);

// 任务
browseTask();

// 支付宝逛一逛
function handlezfbTask() {
  sleep(1000);
  // 去支付宝逛逛
  if (className("android.widget.Button").text("去逛逛").exists()) {
    className("android.widget.Button").text("去逛逛").click();
    log("进去支付宝");
    className("android.view.View").text("继续赚肥料").waitFor();
    className("android.view.View").text("继续赚肥料").findOne().click();
    sleep(1000);

    log("去签到", exists());
    if (className("android.view.View").text("去签到").exists()) {
      className("android.view.View").text("去签到").click();
    } else {
      log("签到完成!");
    }
    log("领取奖励");
    while (className("android.view.View").text("领取").exists()) {
      className("android.view.View").text("领取").click();
      sleep(2000);
    }
    sleep(1000);
    log("去淘宝逛逛");
    if (className("android.view.View").text("去逛逛").exists()) {
      className("android.view.View").text("去逛逛").findOne().click();
    }
    sleep(5000);
    className("android.view.View").text("继续赚肥料").waitFor();
    className("android.view.View").text("继续赚肥料").findOne().click();
    sleep(1000);
  } else {
    log("支付宝任务已完成");
  }
}

function browseTask() {
  sleep(1000);
  // 点击集肥料
  className("android.widget.Image")
    .depth(16)
    .untilFind()
    .forEach((element) => {
      if (element.indexInParent() == 6 || element.indexInParent() == 5) {
        element.click();
        log("点击集肥料");
      }
    });

  sleep(1000);

  // 点击签到
  if (className("android.widget.Button").text("去签到").exists()) {
    className("android.widget.Button").text("去签到").click();
    log("签到成功");
  } else {
    log("签到已完成");
  }
  sleep(1000);
  // 领肥料
  if (className("android.widget.Button").text("去领取").exists()) {
    className("android.widget.Button").text("去领取").click();
  } else {
    log("领取已完成");
  }

  sleep(1000);

  for (let index = 1; index < 4; index++) {
    task("逛精选商品(" + (index - 1) + "/3)浏览15秒得1000肥料", "去完成");
    sleep(1000);
  }
  sleep(1000);

  task("浏览金币庄园得肥料(0/1)浏览15秒得300肥料");
  sleep(1000);

  task("浏览超惠买频道(0/1)浏览15秒得300肥料");
  sleep(1000);

  // 支付宝任务
  handlezfbTask();

  log("判断是否存在视频浏览任务");
  // 看直播
  while (textContains("去浏览").exists()) {
    textContains("去浏览").findOne().click();
    log("进行视频浏览任务");
    sleep(25000);
  }
  log("任务完成");
}

function task(text) {
  sleep(1000);
  log(text, textContains(text).exists());

  if (textContains(text).exists()) {
    textContains(text).findOne().parent().click();
    swipe15s();
    log(text + "已完成");
    sleep(1500);
  }
}

function swipe15s() {
  for (let index = 1; index < 8; index++) {
    swipe(width / 2, height - 200, width / 2, 0, 500);
    sleep(3000);
  }
  back();
  sleep(1000);
}

// 好友助力任务
function helpingHand() {
  let num = 0;
  log("开始助力任务");
  while (num < userList[userNumber].helping.length) {
    log("进行第" + num + "个助力");
    setClip(userList[userNumber].helping[num]);
    sleep(500);
    home();
    sleep(1000);
    launchApp("手机淘宝");

    while (true) {
      if (desc("查看详情").exists()) {
        const detailsBtn = desc("查看详情").findOne();
        const detailsBtnX = detailsBtn.bounds().centerX();
        const detailsBtnY = detailsBtn.bounds().centerY();
        click(detailsBtnX, detailsBtnY);
        break;
      }

      if (className("android.widget.TextView").text("打开").exists()) {
        className("android.widget.TextView").text("打开").waitFor();
        className("android.widget.TextView").text("打开").findOne().click();
        break;
      }
      sleep(1000);
    }

    className("android.view.View").text("为TA助力").waitFor();
    className("android.view.View").text("为TA助力").findOne().click();
    className("android.view.View").text("去种果树").waitFor();

    if (className("android.view.View").text("今日助力好友次数已满，明天再来").exists()) {
      sleep(500);
      className("android.view.View").text("去种果树").findOne().click();
      log("助力已上限");
      break;
    } else {
      className("android.view.View").text("去种果树").click();
    }
    num = num + 1;
    sleep(1000);
  }

  sleep(1000);
  log("助力任务完成");
}
