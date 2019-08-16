/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:46:30
 * @LastEditTime: 2019-08-16 07:53:36
 * @LastEditors: Please set LastEditors
 */
import { observable, action } from "mobx";
import { getHome, commodityDetails, getDetailImg  , getCanvas ,getList} from "../../server";

import regeneratorRuntime from "../../utils/runtime";
console.log(regeneratorRuntime, "regeneratorRuntime");
export default class Home {
  //@observable 修饰符
  @observable navList = null;
  @observable list = null;
  @observable selectedList = null;
  @observable homeList = null;
  @observable detailList = [];
  @observable detailImg = [];

  @observable mydetailCanvas = []
   
  //@action 修饰方法
  @action getNavList = async (params) => {
      const data = await getNavList(params)
      this.navList = data.result;
  }  
  @action getList = async (params) => {
    const res = await getList(params);
    this.list = res.result;
    console.log(res.result)
    let dan = [];
    let shuang = [];
    res.result.slice(2).forEach((item,index)=>{
        if(index%2===0){
          shuang.push(item)
        }else{
          dan.push(item)
        }
    })
     // console.log(dan,shuang)
    let arr = dan.map((key,ind)=>{
      return {img:shuang[ind],cont:dan[ind]}
    })
    console.log(arr,"arr....")
    this.selectedList = arr
    console.log(this.selectedList,"res...")
  }
  //@action 修饰方法
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
  //分享
  @action getCanvas = async (params) => {
    const data = await getCanvas(params)
    console.log(data)
  }
}
  

