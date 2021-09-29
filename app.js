// version v2.0.0
// create by ruicky
// detail url: https://github.com/ruicky/jd_sign_bot

import { execSync as exec } from 'child_process';
import fs from 'fs';
import download from 'download';
import send from './utils/sendNotify.js';

// 公共变量
const { KEY, serverJ, DualKey, PUSH_METHOD, PUSH_KEY, PUSH_SECRET, PUSH_ADDRESS } = process.env;


// 下载文件
async function downFile () {
    // const url = 'https://cdn.jsdelivr.net/gh/NobyDa/Script@master/JD-DailyBonus/JD_DailyBonus.js'
    const url = 'https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js';
    await download(url, './');
}

// 修改文件
async function changeFile () {
   let content = await fs.readFileSync('./JD_DailyBonus.js', 'utf8')
   content = content.replace(/var Key = ''/, `var Key = '${KEY}'`);
   if (DualKey) {
    content = content.replace(/var DualKey = ''/, `var DualKey = '${DualKey}'`);
   }
   await fs.writeFileSync( './JD_DailyBonus.js', content, 'utf8')
}

async function sendNotify () {
  const path = "./result.txt";
  let content = "";
  if (fs.existsSync(path)) {
    content = await fs.readFileSync(path, "utf8");
  }
  let t = content.match(/【签到概览】:((.|\n)*)【签到总计】/);

  let res = t ? t[1].replace(/\n/,'') : '失败'
  let t2 = content.match(/【签到总计】:((.|\n)*)【账号总计】/)
  let res2 = t2 ? t2[1].replace(/\n/,'') : '总计0'

  const title = `${res2}-${res}-${new Date().toLocaleDateString()}`;
  await send({
    title,
    text: content,
    method: PUSH_METHOD,
    key: PUSH_KEY || serverJ,
    secret: PUSH_SECRET,
    address: PUSH_ADDRESS
  });
  await sendNotify("" + ` ${res2} ` + ` ${res} ` + new Date().toLocaleDateString(), content);
}

// 主程序
async function main() {
  if (!KEY) {
    console.log('请填写 key 后在继续')
    return
  }
  // 下载最新代码
  await downFile();
  console.log('下载代码完毕');
  
  // 替换变量
  await changeFile();
  console.log('替换变量完毕');
  
  // 执行
  await exec("node JD_DailyBonus.js >> result.txt");
  console.log('执行完毕');

  // 发送结果
  await sendNotify();
  console.log('发送完毕');
}

main();
