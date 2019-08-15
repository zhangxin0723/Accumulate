/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:57:12
 * @LastEditTime: 2019-08-15 09:46:36
 * @LastEditors: Please set LastEditors
 */
import fly from '../utils/request'
//获取导航数据
export function getNavList(params){
  return fly.post('/api/open/product/category/query/1.0.0')
}
//获取首页
export function getList(params){
  return fly.post('/api/open/page/home/list/1.0.0')
}