import axios from '@/api/index'

//获取所有设备当前信息
export const getAlldevice = ({
  GymCode,
  Lang
}) => {
  return axios.request({
    url: '/school/alldevice',
    method: 'post',
    data: {
      GymCode,
      Lang
    }
  })
}

//获得某个设备的轨迹
export const getDevice = ({
  GymCode,
  mac,
  daytime,
  Lang
}) => {
  return axios.request({
    url: '/school/device',
    method: 'post',
    data: {
      GymCode,
      mac,
      daytime,
      Lang
    }
  })
}
