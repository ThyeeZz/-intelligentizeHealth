/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * 
 */

let baseURL = '';
let routeMode = 'hash';

if(process.env.NODE_ENV == 'development'){
  baseURL = '';

}else{
    baseURL = '';
}

export {
    baseURL,
    routeMode
}