import {
  ServerChanTurbo,
  CoolPush,
  Dingtalk,
  Email,
  WechatRobot,
  WechatApp,
  PushPlus,
  IGot
} from 'push-all-in-one';

/**
 * 发送消息
 * 文档: https://github.com/CaoMeiYouRen/push-all-in-one
 * @param {*} { method='ServerChanTurbo', key, secret, title, address, text }
 */
 export default function send({ method='ServerChanTurbo', key, secret, title, address, text }) {
  try {
    if (!method) {
      throw new Error('没有配置发送方式,无法发送消息');
    }
    switch (method) {
      case 'ServerChanTurbo':
        const serverChanTurbo = new ServerChanTurbo(key)
        serverChanTurbo.send(title, text)
        break;
      case 'CoolPush':
        const coolPush = new CoolPush(key)
        coolPush.send(text, 'send')
        break;
      case 'Dingtalk':
        const dingtalk = new Dingtalk(key, secret)
        dingtalk.send(title, text)
        break;
      case 'Email':
        const email = new Email(key)
        email.send({
            title: title,
            subtitle: title,
            desp: text,
            address: address,
        })
        break;
      case 'WechatRobot' :
        const wechatRobot = new WechatRobot(key)
        wechatRobot.send(text, 'text')
        break;
      case 'WechatApp' :
        const wechatApp = new WechatApp({
          WX_APP_CORPID: key,
          WX_APP_AGENTID: 10001,
          WX_APP_SECRET: secret,
          WX_APP_USERID: '@all',
        })
        wechatApp.send(text)
        break;
      case 'PushPlus':
        const pushplus = new PushPlus(key);
        pushplus.send(title, text);
      case 'IGot':
        const iGot = new IGot(key)
        iGot.send(title, text, '')
        break;
      default:
        break;
    }
  } catch (error) {
    console.log('sendNotify Error -->', error);
  }
}
