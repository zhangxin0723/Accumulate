/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 09:04:04
 * @LastEditTime: 2019-08-16 07:37:00
 * @LastEditors: Please set LastEditors
 */
var Fly = require("flyio/dist/npm/wx")
const fly = new Fly;

//定义公共headers
fly.config.headers = {
  "content-type": "application/x-www-form-urlencoded"
}
//设置超时
fly.config.timeout = 10000;
//设置请求基地址
fly.config.baseURL = "https://upapi.jinaup.com"

//添加请求拦截器
fly.interceptors.request.use((request) => {
  // //给所有请求添加自定义header
  // if(store.state.user.TrackID){
  //   request.headers["TrackID"] = store.state.user.TrackID;
  // }

  // 不能判断TrackID
  // if (store.state.user.TrackID) {
  //   request.headers["TrackID"] = "F649B34989975F26FF31AF34BE55307CE26DCACB113509ED51EE4B7EEC60F8127D60DB1B01D48B2ABE0B24AE8E465A2ABE8F1FC0C135B8C6FCF613954C5568BB13B57A09D5BD6B40D8C07DFF077E1C407E3888A05860DD5E0A05C5DAD8F82A412383E74516483D5626A56D3868CD4DCFAB7B9C3C75F21D7E39DCF469CD6D0D7EAFA1FB7537D1E7B341FF69CC06D75A113310A4CA11AAF8BB7B389CB1FEA4AA92681A6202CF5C3320";
    request.headers["TrackId"]="F649B34989975F26FF31AF34BE55307CE26DCACB113509ED51EE4B7EEC60F8127D60DB1B01D48B2ABE0B24AE8E465A2ABE8F1FC0C135B8C6FCF613954C5568BB13B57A09D5BD6B40D8C07DFF077E1C407E3888A05860DD5E0A05C5DAD8F82A412383E74516483D5626A56D3868CD4DCFAB7B9C3C75F21D7E39DCF469CD6D0D7EAFA1FB7537D1E7B341FF69CC06D75A113310A4CA11AAF8BB7B389CB1FEA4AA92681A6202CF5C3320";
  // }
  // request.headers["TrackID"]="F649B34989975F26FF31AF34BE55307CE26DCACB113509ED51EE4B7EEC60F8127D60DB1B01D48B2ABE0B24AE8E465A2ABE8F1FC0C135B8C6FCF613954C5568BB13B57A09D5BD6B40D8C07DFF077E1C407E3888A05860DD5E0A05C5DAD8F82A412383E74516483D5626A56D3868CD4DCFAB7B9C3C75F21D7E39DCF469CD6D0D7EAFA1FB7537D1E7B341FF69CC06D75A113310A4CA11AAF8BB7B389CB1FEA4AA92681A6202CF5C3320"
  //打印出请求体
  // console.log(request.body)
  //终止请求
  //var err=new Error("xxx")
  //err.request=request
  //return Promise.reject(new Error(""))

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    //只将请求结果的data字段返回
    return response.data
  },
  (err) => {
    //发生网络错误后会走到这里
    //return Promise.resolve("ssss")
  }
)

export default fly;
