import { observable, action } from "mobx";
import { getHome, commodityDetails } from "../../server";

import regeneratorRuntime from "../../utils/runtime";
console.log(regeneratorRuntime, "regeneratorRuntime");
export default class Home {
  @action getHome = params => {
    const data = getHome(params);
    console.log(data);
  };
  //商品详情
  @action commodityDetails = () => {
    const data = commodityDetails();
    console.log(data, "1111");
  };
}
