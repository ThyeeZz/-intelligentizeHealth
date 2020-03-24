import _ from "lodash";
const getters = {
  deviceMac(state) {
    const deviceArr = [];
    state.allDevice.forEach(item => {
      deviceArr.push(item.mac)
    })
    return deviceArr
  },
  deviceInBeacon(state) {
    if (state.allDevice.length > 0) {
      return _.groupBy(state.allDevice, 'beacon');
    } else {
      return {
        '02:02:0b:7b:11:77': []
      }
    }
  },
  aveStepwarn(state) {
    let step = 0,
      warn = 0;
    let len = state.allDevice.length;
    if (len > 0) {
      state.allDevice.forEach(item => {
        step += item.st;
        if (item.em === 1) {
          warn++;
        }
      })
      return {
        aveStep: Math.floor(step / len),
        warn: warn
      }
    }else{
      return {
        aveStep:0,
        warn: 0
      }
    }

  },
  
}

export default getters
