/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:24:49
 * @LastEditTime: 2019-08-16 07:50:38
 * @LastEditors: Please set LastEditors
 */
var Fly = require("flyio/dist/npm/wx");
const fly = new Fly();

//定义公共headers
fly.config.headers = {
  "content-type": "application/x-www-form-urlencoded"
};
//设置超时
fly.config.timeout = 10000;
//设置请求基地址
fly.config.baseURL = "https://upapi.jinaup.com";

//添加请求拦截器
fly.interceptors.request.use(request => {
  // let openid = wx.getStorageSync('openid');
  // console.log(openid,"openid1111111111111111")
  let value =
    "F649B34989975F268EA5BC4927E7C2365DBB8293767D955992FF410009F6B2DE301BCDFBE166230EBF083C72B5B6A948277C0041980DAC5E46FA1EF475B12D4773F05A5E984CF1D814817C9546DF831BF9D9BD6C1F2231AFA450731B6837E7084E77DC9918A436BC";
  // F649B34989975F2672F778DFE1F6CC7C0A012572F93A8D44E9E2E6A43B0D64EF5B753BD95E281A12FB6E2657CA3C322C8EDD48AD88C1D895AA882EE69AF51E209A101AD4A318BF41E54B13C189A368B3080D4CB37654208721AA2141D76141878B4F2F23C363A567319335B0AF520D12
  // if (openid){
  //   request.headers['openid'] = openid;
  // }
  //给所有请求添加自定义header
  request.headers["trackId"] = value;
  // //打印出请求体
  // console.log(request.body)
  // //终止请求
  // var err=new Error("xxx")
  // err.request=request;
  // return Promise.reject(new Error(""))

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
});

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  response => {
    //只将请求结果的data字段返回
    return response.data;
  },
  err => {
    //发生网络错误后会走到这里
    //return Promise.resolve("ssss")
  }
);

export default fly;
