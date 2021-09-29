<p align="center">
    <img src="https://cdn.jsdelivr.net/gh/ruicky/ruicky.github.io/2020/06/05/jd-sign/0.png">
</p>

<p align="center">
    <img alt="Version" src="https://img.shields.io/badge/release-2.0.0-blue"/>
    <a href="https://github.com/ruicky">
        <img alt="Author" src="https://img.shields.io/badge/author-ruicky-blueviolet"/>
    </a>
</p>

# 京东自动签到
功能：
1. 获取签到最新代码
2. 替换参数值
3. 签到并发送通知

详情参考文章:[京东定时签到-GitHub 实现](https://ruicky.github.io/2020/06/05/jd-sign/)

## V2 简要说明

+ `PUSH_METHOD` 发送方式，必填
  - `ServerChanTurbo` Server酱。官方文档：https://sct.ftqq.com/
  - `CoolPush` 酷推。官方文档：https://cp.xuthus.cc/
  - `Dingtalk` 钉钉机器人。官方文档：https://developers.dingtalk.com/document/app/custom-robot-access
  - `Email` BER分邮件系统。官方文档：http://doc.berfen.com/1239397
  - `WechatRobot` 企业微信群机器人。官方文档：https://work.weixin.qq.com/help?person_id=1&doc_id=13376
  - `WechatApp` 企业微信应用推送，官方文档：https://work.weixin.qq.com/api/doc/90000/90135/90664
  - `PushPlus` pushplus 推送，官方文档：https://www.pushplus.plus/doc/
  - `IGot` iGot 推送，官方文档：https://wahao.github.io/Bark-MP-helper
+ `PUSH_KEY` 推送 key， 必填
+ `PUSH_SECRET` 推送秘钥，非必填

### 示例：
**IGot**
```
PUSH_METHOD='IGot'
PUSH_KEY = 'XXXX',
```

