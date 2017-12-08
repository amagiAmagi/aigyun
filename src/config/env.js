/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = "http://10.10.3.32:8080/AigyunWeb";
let routerMode = "history";
let baseImgPath;

// if (process.env.NODE_ENV == 'development') {
// 	//baseUrl = 'http://cangdu.org:8001';
//     baseImgPath = 'http://localhost:8001/img/';
// }else{
// 	baseUrl = 'http://cangdu.org:8001';
//     baseImgPath = 'http://cangdu.org:8001/img/';
// }

export { baseUrl, routerMode, baseImgPath };
