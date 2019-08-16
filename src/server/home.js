/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:57:12
 * @LastEditTime: 2019-08-16 08:46:20
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
//合成图片
export function getCanvas(params) {
  return fly.post('/api/open/product/info/1.0.0',params)
}
export function getHome(params) {
  return fly.post("/api/open/page/home/products/1.0.0");
}
//商品详情
export function commodityDetails() {
  return fly.post("/api/open/product/micro/productInfo/query/details/1.0.0");
}
// export function getList(params){
//   return fly.post('/api/open/product/category/query/1.0.0')
// }
