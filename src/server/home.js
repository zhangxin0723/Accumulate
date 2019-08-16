/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:57:12
 * @LastEditTime: 2019-08-14 21:29:53
 * @LastEditors: Please set LastEditors
 */
import fly from "../utils/request";
import { func } from "prop-types";

export function getHome(params) {
  return fly.post("/api/open/page/home/products/1.0.0");
}
//商品详情
export function commodityDetails(pid) {
  console.log(pid,'222222')
  return fly.post("/api/open/product/info/1.0.0",pid);
}
//图片
export function getDetailImg(payload) {
  return fly.post("/api/open/product/detailPicture/1.0.0",payload);
}

export function getList(params) {
  return fly.post("/api/open/product/category/query/1.0.0");
}
