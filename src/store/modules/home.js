/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:46:30
 * @LastEditTime: 2019-08-15 11:48:29
 * @LastEditors: Please set LastEditors
 */
import { observable, action } from 'mobx'
import { getNavList, getList } from '../../server/home'

import regeneratorRuntime from '../../utils/runtime'
console.log(regeneratorRuntime,"regeneratorRuntime")

export default class Home {
  //@observable 修饰符
  @observable navList = null;
  @observable list = null;
  @observable selectedList = null;
   
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
}