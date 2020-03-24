// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAMap from 'vue-amap';
import VeHistogram from 'v-charts/lib/histogram.common'
import VeLine from 'v-charts/lib/line.common'
import router from '@/router/index'
import store from '@/store'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import postRequest from "@/lib/postRequest"
import getRequest from "@/lib/getRequest"
import delRequest from "@/lib/delRequest"
import {
  succeed,
  failed
} from '@/lib/utils'

import echarts from "echarts"


require('@/mock/mock')
// if(process.env.NODE_ENV === 'development'){
//     require('@/mock/mock')
// }
Vue.use(ElementUI)
Vue.use(VueAMap);

let url = ""
const urlDev = 'xxxx'
const urlQa = 'xxxxx'
process.env.NODE_ENV === 'development' ? url = urlDev : url = urlQa
Vue.prototype.$url = url
// 验证登录
router.beforeEach((to, from, next) => {
  // if (to.path !== '/' && !Boolean(sessionStorage.access_token)) {
  //   router.push({path:'/'})
  // } else {
  //   next(); // 继续执行
  // }
  try {
    next()
  } catch (error) {
    next(()=>{
      console.log(err)
    })
    
  }
});

Vue.prototype.postRequest = postRequest
Vue.prototype.getRequest = getRequest
Vue.prototype.delRequest = delRequest

Vue.prototype.succeed = succeed
Vue.prototype.failed = failed
Vue.prototype.$echarts = echarts

//引入柱状图组件
Vue.component(VeHistogram.name, VeHistogram)
//引入折线图组件
Vue.component(VeLine.name, VeLine)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app')
