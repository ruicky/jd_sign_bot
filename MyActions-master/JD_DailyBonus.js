// version v0.0.1
// create by ruicky
// detail url: https://github.com/ruicky/jd_sign_bot

const exec = require("child_process").execSync;
const fs = require("fs");
const download = require("download");

// 公共变量
const JD_COOKIE = process.env.JD_COOKIE; //cokie,多个用&隔开即可
let SyncUrl = process.env.SYNCURL; //签到地址,方便随时变动
let CookieJDs = [];

async function downFile() {
    if (!SyncUrl) {
        SyncUrl = "https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js";
    }
    await download(SyncUrl, "./");
}

async function executeOneByOne() {
    const content = await fs.readFileSync("./JD_DailyBonus.js", "utf8");
    for (var i = 0; i < CookieJDs.length; i++) {
        console.log(`正在执行第${i + 1}个账号签到任务`);
        changeFiele(content, CookieJDs[i]);
        console.log("替换变量完毕");
        await exec("node JD_DailyBonus.js", { stdio: "inherit" });
        console.log("执行完毕");
    }
}
async function changeFiele(content, cookieKey) {
    let newContent = content.replace(/var Key = ''/, `var Key = '${cookieKey}'`);
    await fs.writeFileSync("./JD_DailyBonus.js", newContent, "utf8");
}

async function start() {
    if (!JD_COOKIE) {
        console.log("请填写 JD_COOKIE 后在继续");
        return;
    }
    CookieJDs = JD_COOKIE.split("&");
    console.log(`当前共${CookieJDs.length}个账号需要签到`);
    // 下载最新代码
    await downFile();
    console.log("下载代码完毕");
    await executeOneByOne();
    console.log("全部执行完毕");
}

start();
