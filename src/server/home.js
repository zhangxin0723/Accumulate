/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:57:12
 * @LastEditTime: 2019-08-13 16:52:54
 * @LastEditors: Please set LastEditors
 */
import fly from '../utils/request'

export function getHome(params){
  return fly.post('/api/open/page/home/products/1.0.0')
}
//合成图片
export function getCanvas(params) {
  return fly.post('/api/open/product/info/1.0.0',params)
}