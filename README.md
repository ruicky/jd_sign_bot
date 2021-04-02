<p align="center">
    <img src="https://cdn.jsdelivr.net/gh/ruicky/ruicky.github.io/2020/06/05/jd-sign/0.png">
</p>

<p align="center">
    <img alt="Version" src="https://img.shields.io/badge/release-0.0.1-blue"/>
    <a href="https://github.com/ruicky">
        <img alt="Author" src="https://img.shields.io/badge/author-ruicky-blueviolet"/>
    </a>
</p>

# 京东自动签到
功能：
1. 获取签到最新代码
2. 替换参数值
3. 签到并发送通知

详情参考文章:[京东定时签到-GitHub 实现](https://ruicky.me/2020/06/05/jd-sign/) 

# 钉钉群机器人推送方式

参考[钉钉文档](https://developers.dingtalk.com/document/app/custom-robot-access/title-jfe-yo9-jl2) 创建群聊机器人

![44A$W6}%GIVOQ5KB9%YTL.png](https://i.loli.net/2021/04/02/daFCuctbAEjVmh6.png)

打开自己的仓库,在 Settings -> Secrets 添加两个参数

DINGDING_WEBHOOK_URL: 机器人 webhook 地址

DINGDING_KEYWORD: 机器人自定义关键词,如果有设置多个,只需要填一个

# 推送方式优先级
钉钉群机器人 > server 酱推送
