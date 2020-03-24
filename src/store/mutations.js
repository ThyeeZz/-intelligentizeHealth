const mutations = {
  getAllDevice(state, params) {
    state.allDevice = params
  },
  currentBandMac(state, params) {
    state.currentBandMac = params
  },
  currentBeacon(state, params) {
    state.currentBeacon = params
  },
  deviceTrail(state, params) {
    state.deviceTrail = params
  },
  setToken(state, params) {
    state.userInfo.access_token = params.access_token;
    state.userInfo.refresh_token = params.refresh_token;
    state.userInfo.id = params.id;
  },
  setUserList(state,params){
    state.userList = params;
  },
  setHealthList(state,params){
    state.healthList = params;
    if (params.length) {
      for (let i of state.userList) {
        for (let item of state.healthList) {
          if (i.clingId == item.clingId) {
            i.date = item.date;
            i.deepSleep = item.deepSleep;
            i.distance = item.distance;
            i.endSleep = item.endSleep;
            i.lastNightSleep = item.lastNightSleep;
            i.lightSleep = item.lightSleep;
            i.midSleep = item.midSleep;
            i.sleepTotal = item.sleepTotal;
            i.soberTime = item.soberTime;
            i.sportTime = item.sportTime;
            i.startSleep = item.startSleep;
            i.weakTime = item.weakTime;
            i.steps = item.steps;
            i.hr = item.hr;
            i.totalCal = item.totalCal;
            i.lbp = item.lbp;
            i.hbp = item.hbp;
            i.bp = item.lastTemp;
          }
        }
      }
    }
  },
  setBaseInfo(state,that){
    console.log("获取userlist以及socket参数");
    
    that.access_token = state.userInfo.access_token;
    that.id = state.userInfo.id;
    if(that.userList){
      that.userList = state.userList;
    }
  }
}

export default mutations
