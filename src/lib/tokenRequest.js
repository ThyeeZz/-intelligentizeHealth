import axios from 'axios'
import {
  MessageBox,
  Message
} from 'element-ui'
// import store from '@/store'
import router from '@/router/index'
import md5 from 'md5'

// create an axios instance
const service = axios.create({
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})

service.interceptors.response.use(
  response => {
    const res = response
    if (res.data.status_code !== 200) {
      MessageBox.confirm('未检测到登陆信息或者您已被登出，点击取消可以继续留在该页面，或者重新登录',
          '确定登出？', {
            confirmButtonText: '重新登陆',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
          router.push({
            name: "login"
          })
        })
        .catch(() => {
          return null
        })
    } else {
      return res
    }
  }
)



const getSignature = (u, t, d, s, m) => {
  let str = `FROM:${u}-(T:${t}-DATA:${JSON.stringify(d)}|SECRET:${s})=${m}`;
  let signature = md5(str).toUpperCase();
  return signature
}

const tokenRequest = function (url, data) {
  const encryptKey = '13CD7F1AAFD0D45E5CFE080BF8CED693';
  const udid = '60.186.186.233'; //客户端ip
  let time = new Date().getTime();
  return service({
    url: url,
    method: 'POST',
    data: data,
    headers: {
      'UDID': `${udid}`,
      'TIME': time,
      'SYSAUTH': `${getSignature(udid,time,data,encryptKey,'POST')}`,
      "AccessToken": 0,
      'UID': window.sessionStorage.id ? window.sessionStorage.id : 0,
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
export default tokenRequest
