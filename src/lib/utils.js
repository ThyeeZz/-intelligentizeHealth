import {
  Message,
  MessageBox
} from 'element-ui';
export const getMinuteBeginTimestamp = (timestamp) => { //获取时间戳(秒)分钟开始
  var dateTime = new Date();
  if (timestamp < 10000000000) {
    dateTime.setTime(timestamp * 1000);
  }

  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1;
  var date = dateTime.getDate();
  var houre = dateTime.getHours() < 10 ? '0' + dateTime.getHours() : dateTime.getHours();
  var minute = dateTime.getMinutes() < 10 ? '0' + dateTime.getMinutes() : dateTime.getMinutes();
  var second = dateTime.getSeconds() < 10 ? '0' + dateTime.getSeconds() : dateTime.getSeconds();
  var dt = year + '-' + month + '-' + date + " " + houre + ':' + minute + ':' + second;
  return dt;
}
export const getTime = (timestamp) => { //格局时间戳获取时间
  var dateTime = new Date();
  dateTime.setTime(timestamp * 1000);
  var houre = dateTime.getHours();
  var minute = dateTime.getMinutes() < 10 ? '0' + dateTime.getMinutes() : dateTime.getMinutes();
  var dt = houre + ':' + minute
  return dt;
}
export const timeStamp = () => {
  let timeStamp = Date.parse(new Date()) / 1000;
  return timeStamp
}
export const formatH_M_S = (timeSatmp) => {
  //毫秒
  let date = new Date(timeSatmp);
  let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  let minute =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  let second =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${hour}:${minute}:${second}`;
}
export const getTodayTimestamp = (h, m) => {
  let date = new Date();
  date.setHours(h);
  date.setMinutes(m);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return Math.floor(date.getTime() / 1000);
}
export const countedObj = (arrObj, prop) => {
  return arrObj.reduce((obj, item) => {
    if (item[prop] in obj) {
      obj[item[prop]]++
    } else {
      obj[item[prop]] = 1
    }
    return obj;
  }, {})
}

export const sortTrail = (trail, prop) => {
  if (trail.length) {
    var indexItem = trail[0];

    var arr = [indexItem];

    for (var i = 1; i < trail.length; i++) {
      if (indexItem[prop] === trail[i][prop]) {
        indexItem = trail[i];
      } else {
        indexItem = trail[i];
        arr.push(trail[i])
      }
    }
    return arr
  } else {
    return 0;
  }
}

export const succeed = (message) => {
  Message({
    showClose: true,
    message: message,
    type: 'success',
    duration: 3000,
    center: true
  });
}
export const failed = (message) => {
  Message({
    showClose: true,
    message: message,
    type: 'error',
    duration: 3000,
    center: true
  });
}
export const myConfirm = (message, func, info) => {
  MessageBox.confirm(message, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(func).catch(() => {
    Message({
      type: 'info',
      message: info,
      duration: 3000,
      center: true
    });
  })
}
export const getDeviceType = (deviceId) => { //判定用户的device型号 公用函数
  if (deviceId) {
    // let deviceId = deviceId.toUpperCase();
    if (deviceId.indexOf("HICB") !== -1) {
      return "Band";
    }
    if (deviceId.indexOf("HICV") !== -1) {
      return "VOC";
    }
    if (deviceId.indexOf("HICA") !== -1) {
      return "Aura";
    }
    if (deviceId.indexOf("HICL") !== -1) {
      return "Leap";
    }
    if (deviceId.indexOf("HICTMO") !== -1) {
      return "Thermo";
    }
  } else {
    return "Unknown Device";
  }
}
