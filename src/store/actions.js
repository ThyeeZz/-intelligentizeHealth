import getRequest from '../lib/getRequest'
import postRequest from '../lib/postRequest'
import router from "../router"
import {
  getDeviceType,
  succeed,
  failed
} from "../lib/utils"
const actions = {
  login({dispatch,commit}, loginInfo) {
    postRequest("api/auth/login", loginInfo).then(res => {
      commit("setToken",res.data.data); // 存储token
      succeed("登陆成功！");
      router.push({
        path: "/index/synthesize"
      })
      dispatch('getUsers')
       
    }).catch(err=>{
      console.log(err)
    })
  },
  getUsers({dispatch,commit}) {
    let userList = [];
    getRequest("api/cling/user/all")
      .then(res => {
        if (res.data.data.length != 0) {
          let result = res.data.data;
          for (let item of result) {
            userList.push({
              deviceId: item.deviceId, // Cling 设备的序列号 区分设备
              deviceIdNum: item.deviceId,
              clingId: item.clingId, // Cling的用户ID
              patainId: item.id, // 病人ID
              career: item.career,
              birthdate: item.birthdate,
              deviceId: getDeviceType(item.deviceId), //获取用户的设备型号
              age: 2019 - new Date(item.birthdate).getFullYear(),
              gender: item.gender,
              nickName: item.nickName,
              avatar: item.avatar,
              mac: item.mac,
              name: item.name,
              deepSleep: 0,
              distance: 0,
              endSleep: 0,
              hr: 0,
              hbp: 0,
              lastNightSleep: 0,
              lbp: 0,
              lightSleep: 0,
              midSleep: 0,
              sleepTotal: 0,
              soberTime: 0,
              totalCal: 0,
              sportTime: 0,
              startSleep: 0,
              steps: 0,
              weakTime: 0,
              bp: 0
            });
          }
        }
        commit("setUserList",userList);
        dispatch("getHealthData");
      }).catch(err => {
        console.log(err)
      })
  },
  getHealthData({commit}) {
    let healthList = [];
    getRequest("/api/cling/health/all/today")
      .then(res => {
        if (res.data.data) {
          let result = res.data.data;
          for (let item of result) {
            healthList.push({
              date: item.date,
              deepSleep: item.deepSleep,
              distance: item.distance,
              endSleep: item.endSleep,
              hbp: item.hbp,
              hr: item.hr,
              lastNightSleep: item.lastNightSleep,
              lbp: item.lbp,
              lightSleep: item.lightSleep,
              midSleep: item.midSleep,
              sleepTotal: item.sleepTotal,
              soberTime: item.soberTime,
              totalCal: item.totalCal,
              sportTime: item.sportTime,
              startSleep: item.startSleep,
              steps: item.steps,
              clingId: item.clingId,
              weakTime: item.weakTime,
              maxTemp: item.maxTemp,
              lastTemp: item.lastTemp
            });
          }
        }
        commit("setHealthList",healthList)
      }).catch(err=>{
        console.log(err)
      })
  }
}

export default actions
