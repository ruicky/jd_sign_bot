const request = require('request');
//爱奇艺 积分签到 
//pc 端
const iqiyi_cookie_pc = process.env.IQIYI_COOKIE_PC
async function iqiyi_pc() {
  const options = {
    url: 'https://community.iqiyi.com/openApi/score/add?authCookie=e4Fm2VoV7BSvCSrLnNB9ouFRwVJZzIgAyWEI3Onezb4bRlFUq4ZgThzIMZQZRq485tI48&userId=2193693209&channelCode=sign_pcw&agenttype=1&agentversion=0&appKey=basic_pca&appver=0&srcplatform=1&typeCode=point&verticalCode=iQIYI&scoreType=1&user_agent=Mozilla/5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_6)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/85.0.4183.121%20Safari/537.36&dfp=a009f4decfcda840cbb2602665aa37555e74baaffd938449661fecefe1e90b5704&sign=fe6220836d17f36260176b8f7ec14c47',
    headers: {
      Cookie: iqiyi_cookie_pc,
      Host: "community.iqiyi.com",
      Origin: "https://www.iqiyi.com",
      Pragma: "no-cache",
      Referer: "https://www.iqiyi.com/",
      "Sec-Fetch-Dest": 'empty',
      "Sec-Fetch-Mode": 'cors',
      "Sec-Fetch-Site": "same-site",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"
    }
  };
  request(options, (err, res, body) => {
    try {
        if (err) {
            console.log(err)
          } else {
            const title = '爱奇艺 积分签到 pc'
            if (res.statusCode == 200) {
              // console.log(JSON.parse(body).data[0])
              let result = JSON.parse(body).data[0]
              if (result.code == 'A0000') {
                // 签到
                console.log(`${title} : ${result.score}`)
              } else if (result.code == 'A0002') {
                // 已经签到过
                console.log(`${title} : ${result.message}`)
              } else {
                // 其他
                console.log(`${title} : ${body}`)
              }
            } else {
              console.log(`${title} : 失败`)
            }
          }
    } catch (error) {
        console.log('catch',error)
    }
  })
}

//移动 端
const iqiyi_cookie_mo = process.env.IQIYI_COOKIE_MO;
async function iqiyi_mo() {
  const options = {
    url: 'http://iface2.iqiyi.com/fusion/3.0/switch/ext?content=m_qiyi_bio_baseline&platform_id=12',
    headers: {
      Cookie: iqiyi_cookie_mo,
      Host: "iface2.iqiyi.com",
      "Accept-Language": 'zh-cn',
      "Accept-Encoding": "gzip, deflate",
      "Connection": "keep-alive",
      "User-Agent": "iQiYiPhoneVideo/20200930121200 CFNetwork/1197 Darwin/20.0.0"
    }
  };
  request(options, (err, res, body) => {
    try {
        if (err) {
            console.log(err)
          } else {
            const title = '爱奇艺 积分签到 移动端'
            if (res.statusCode == 200) {
              console.log(JSON.parse(body))
              let result = JSON.parse(JSON.parse(body).content.m_qiyi_bio_baseline);
              console.log(`${title} : 今日获取积分:${result.s_s_r},连续签到${result.s_all}`)
              console.log(`爱奇艺总积分:${result.d_c_li}`)
            } else {
              console.log(`${title} : 失败`)
            }
          }
    } catch (error) {
        console.log('catch',error)
    }
  })
}

async function start(){
  if (!iqiyi_cookie_mo) {
    console.log('请填写爱奇艺移动端cookie')
    return
  }
  if(!iqiyi_cookie_pc){
    console.log('请填写爱奇艺pc端cookie')
    return
  }
  await iqiyi_pc()
  await iqiyi_mo()
}

start()



