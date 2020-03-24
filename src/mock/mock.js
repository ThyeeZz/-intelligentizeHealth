// import Mock from 'mockjs'

// function getAvatar() {
//   return Mock.Random.image('60*60', Mock.Random.hex());
// }
// Mock.mock(/getcompany/, {
//   status: 200,
//   data: {
//     icon: '@image("80*80",@hex())',
//     name: '@ctitle(4,8)',
//     title: '@ctitle(6,10)',
//     des: '@cparagraph(3,5)'
//   }
// })
// Mock.mock(/login/, {
//   status: 200,
//   data: {
//     userid: 51515,
//     access_token: '9e8732e9fa8165c3df24db2595ae447a',
//     access_token_expire: 7200,
//     refresh_token: 'dbfcbdd231bc9e77f28f3293d9a8ca9e',
//     refresh_token_expire: 7776000
//   }
// })
// Mock.mock(/getsleep/, {
//   status: 200,
//   data: {
//     'sleepList|1-12': [{
//       'userid': "@id",
//       'code': "WH056",
//       'age': "@integer(50,90)",
//       'addr': 'A5-404',
//       'name': "@cname",
//       'avatar': "../../static/img-avater.png",
//       'sleepHour': "@time('HH')",
//       'sleepMin': "@time('mm')",
//       'sleepStart': "@time('HH:mm')",
//       'sleepEnd': "@time('HH:mm')",
//       'wake': "@integer(5,25)",
//       'lightSleep': "@integer(5,25)",
//       'middleSleep': "@integer(5,25)",
//       'deepSleep': "@integer(5,25)",
//       'breathLeave|1':["轻度","中度","重度"],
//       'pause': "@integer(20,80)",
//       'pauseAvg': "@integer(15,40)",
//       'pauselongest': "@integer(50,100)"
//     }]
//   }
// })
// Mock.mock(/getactivity/, {
//   status: 200,
//   data: {
//     'activityList|1-24': [{
//       'userid': "@id",
//       'code': "WH056",
//       'name': "@cname",
//       'age': "@integer(50,90)",
//       'addr': 'A5-404',
//       'hr': "@integer(50,200)",
//       'hp': "@integer(100,150)",
//       'lp': "@integer(50,99)",
//       'cal': "@integer(0,2000)",
//       'step': "@integer(0,50000)",
//       'avatar': "../../static/img-avater.png"
//     }]
//   }
// })
