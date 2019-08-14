/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:57:12
 * @LastEditTime: 2019-08-14 14:36:57
 * @LastEditors: Please set LastEditors
 */
import fly from '../utils/request'

export function getList(params){
  return fly.post('/api/open/page/home/list/1.0.0')
}