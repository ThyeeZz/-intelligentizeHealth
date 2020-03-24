import axios from 'axios'
import md5 from 'md5'
import {Base64} from 'js-base64'
import {
  reqConfig,
  encryptKey
} from '@/config/request'
import {
  baseURL
} from '@/config/env'
import {
  Loading
} from 'element-ui'

// 请求数据时显示加载loding
let loadingInstance = null;
let needLoadingRequestCount = 0

function startLoading() {
  loadingInstance = Loading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0,0,0,.5)'
  })
}

function endLoading() {
  loadingInstance.close();
}

function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
class HttpRequest{
    constructor(baseUrl = baseURL){
        this.baseUrl = baseUrl
    }
    getInstanceConfig(){
        let config = {
            baseURl:this.baseUrl,
            headers:{}
        }
        return config
    }
    getTimestamp(){
        return Date.parse(new Date()) / 1000
    }
    /**
     * @description: 生成请求的签名
     * @param 
     * u:客户端ip
     * v：版本
     * t：时间戳
     * d：请求body
     */
    getSignature(u, v, t, d) {
      let str = `V${v}|P${encryptKey}|T${t}U${u}|R${JSON.stringify(d)}`;
      //    console.log(`signatureStr----`,str);
      let signature = md5(str);
      return signature
    }
    /**
     * @description: 对请求和返回过程的拦截处理
     * @param instance：axios实例
     */
    interceptors(instance){
        instance.interceptors.request.use(config =>{
            // showFullScreenLoading();
            return config;
        },error =>{
            return Promise.reject(error)
        })
        instance.interceptors.response.use(res =>{
            // tryHideFullScreenLoading();
            const {data} = res;
            return data
        },error =>{
            return Promise.reject(error.response.data)
        })
    }
    /**
     * @description: 
     * @param options:请求参数；reqdata:请求body数据
     * @return: axios请求实例
     */
    request(options){
        const instance = axios.create();
        let timestamp = this.getTimestamp();
        const data = {
            udid:reqConfig.udid,
            version:reqConfig.version,
            timestamp:timestamp,
            signature: this.getSignature(reqConfig.udid, reqConfig.version, timestamp, options.data),
            request_body: Base64.encode(JSON.stringify(options.data))
        }
        options.data = data;
        options = Object.assign(this.getInstanceConfig(),options);
        this.interceptors(instance);
        return instance(options);
    }
}

export default HttpRequest