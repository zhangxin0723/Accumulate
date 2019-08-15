/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:46:30
 * @LastEditTime: 2019-08-13 16:51:13
 * @LastEditors: Please set LastEditors
 */
import { observable, action } from "mobx";
import { getHome, commodityDetails , getCanvas } from "../../server";

import regeneratorRuntime from "../../utils/runtime";
console.log(regeneratorRuntime, "regeneratorRuntime");
export default class Home {
  //@observable 修饰符
  @observable homeList = null;
  @observable mydetailCanvas = []
  //@action 修饰方法
  
  @action getHome = params => {
    const data = getHome(params);
    console.log(data);
  };
  //商品详情
  @action commodityDetails = () => {
    const data = commodityDetails();
    console.log(data, "1111");
  };
  //@action 修饰方法
  @action getList = async params => {
    const data = await getList(params);
    console.log(data, "data");
  };
  @action getHome = params => {
    const data = getHome(params);
    // console.log(data)
  };
  //分享
  @action getCanvas = async (params) => {
    const data = await getCanvas(params)
    console.log(data)
  }
}
