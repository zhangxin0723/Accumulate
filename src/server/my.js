/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:57:12
 * @LastEditTime: 2019-08-13 16:52:54
 * @LastEditors: Please set LastEditors
 */
import fly from '../utils/request'
//我的
export function getMy(params){
  return fly.post('/api/open/order/query/1.0.0',params)
}
//实名制
export function getAuth(){
  return fly.post('/api/open/user/auth/select/1.0.0')
}
//提交身份证/姓名/身份证正方面/
export function identity(params){
  return fly.post('/api/open/user/auth/identityBase64/1.0.0',params)
}
