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
  console.log(params,'001')
  return fly.post('/api/open/order/query/1.0.0',params)
}