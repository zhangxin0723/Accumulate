import { observable, action } from "mobx";
import { getHome, commodityDetails } from "../../server";

import regeneratorRuntime from "../../utils/runtime";
console.log(regeneratorRuntime, "regeneratorRuntime");
export default class Home {
  //@observable 修饰符
  @observable homeList = null;
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
}
