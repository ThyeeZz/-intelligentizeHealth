import axios from '@/api/index'

//获取公司信息

export const getCompany = () => axios.request({
  url: 'api/getcompany'
});

// 登陆
export const login = () => axios.request({
  url: 'api/login',
  method: 'post'
});


// 退出
export const signout = () => axios.request({
  url: 'api/admin/signout',
  method: 'post'
});

// 获取用户信息
export const getAdminInfo = () => axios.request({
  url: 'api/admin/info'
});

// 获取用户睡眠休息状态
export const getSleepList = () => axios.request({
  url: 'api/getsleep'
});

// 获取用户实时活动
export const getActivityList = () => axios.request({
  url: 'api/getactivity'
});
