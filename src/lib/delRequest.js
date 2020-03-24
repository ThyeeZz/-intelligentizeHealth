import axios from 'axios'
import {
  MessageBox,
  Message
} from 'element-ui'
// import store from '@/store'
import tokenRequest from './tokenRequest'
import md5 from 'md5'
import store from "@/store"

// create an axios instance
const service = axios.create({
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout

})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (sessionStorage.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['token'] = sessionStorage.getItem('token')
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

const getSignature = (u, t, d, s) => {
  let obj = d ? d : null;
  let objStr = '';
  if (d) {
    for (let i in obj) {
      objStr += `&${i}=${obj[i]}`
    }
    objStr = objStr.substr(1)
  } else {
    objStr = null;
  }
  let str = `FROM:${u}-(T:${t}-DATA:${objStr}|SECRET:${s})=DELETE`;
  let signature = md5(str).toUpperCase();
  return signature
}

// response interceptor
service.interceptors.response.use(
  /**
   */
  response => {
    const res = response

    // 判断请求错误
    if (res.data.status_code !== 200 && res.data.status_code !== 3002) {
      if (res.data.status_code === 4000) {
        // to re-login
        tokenRequest('api/auth/token', {
          refresh_token: window.sessionStorage.refresh_token,
          id: window.sessionStorage.id
        }).then(res => {
          let resualt = res.data.data;
          if (resualt.access_token && resualt.refresh_token) {
            window.sessionStorage.setItem("access_token", resualt.access_token);
            window.sessionStorage.setItem("refresh_token", resualt.refresh_token);
          } else {
            MessageBox.confirm('您已被登出，可以继续留在该页面，或者重新登录',
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
          }
        })
      } else if (res.data.status_code === 4011) {
        Message({
          message: '密码错误',
          type: 'error',
          duration: 3 * 1000
        })
      } else if (res.data.status_code === 4012) {
        Message({
          message: '用户名和密码错误',
          type: 'error',
          duration: 3 * 1000
        })
      } else if (res.data.status_code === 4018) {
        Message({
          message: 'Cling 用户ID已经存在',
          type: 'error',
          duration: 3 * 1000
        })
      } else if (res.data.status_code === 503) {
        Message({
          message: '更新错误，请联系后台',
          type: 'error',
          duration: 3 * 1000
        })
      } else {
        Message({
          message: '请求有误，请联系后台',
          type: 'error',
          duration: 3 * 1000
        })
      }
      return Promise.reject(res.message || 'error')
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    // return Promise.reject(error)
  }
)

const delRequest = function (url, data) {
  const encryptKey = '13CD7F1AAFD0D45E5CFE080BF8CED693';
  const udid = '60.186.186.233'; //客户端ip
  let time = new Date().getTime();
  let AccessToken = store.state.userInfo.access_token?store.state.userInfo.access_token: 0;
  let Id = store.state.userInfo.id?store.state.userInfo.id:0;
  return service({
    url: url,
    method: 'DELETE',
    params: data,
    headers: {
      'UDID': `${udid}`,
      'TIME': time,
      'SYSAUTH': `${getSignature(udid,time,data,encryptKey)}`,
      "AccessToken": AccessToken,
      'UID': Id,
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
export default delRequest
