/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:57:12
 * @LastEditTime: 2019-08-14 21:29:53
 * @LastEditors: Please set LastEditors
 */
import fly from '../utils/request'

export function getList(params){
  return fly.post('/api/open/product/category/query/1.0.0')
}