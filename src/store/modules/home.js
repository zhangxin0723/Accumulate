import { observable, action } from "mobx";
import { getHome, commodityDetails, getDetailImg } from "../../server";

import regeneratorRuntime from "../../utils/runtime";
console.log(regeneratorRuntime, "regeneratorRuntime");
export default class Home {
  //@observable 修饰符
  @observable homeList = null;
  @observable detailList = [];
  @observable detailImg = [];

  @action getHome = params => {
    const data = getHome(params);
    console.log(data);
  };
  //商品详情
  @action commodityDetails = async pid => {
    const data = await commodityDetails(pid);
    console.log(pid, "pid");
    this.detailList = data.result;
    console.log(this.detailList);
    console.log(data, "1111");
  };

  //详情图片
  @action getDetailImg = async pid => {
    const data = await getDetailImg(pid);
     this.detailList = data.result;
    console.log(data.result, "1234567u");
    console.log(data, "详情图片");
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
