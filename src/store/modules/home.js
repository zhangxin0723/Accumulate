/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:46:30
 * @LastEditTime: 2019-08-13 16:51:13
 * @LastEditors: Please set LastEditors
 */
import { observable, action } from 'mobx'
import { getHome , getCanvas } from '../../server/home'
import regeneratorRuntime from '../../utils/runtime'
console.log(regeneratorRuntime,'regeneratorRuntime')
export default class Home {
  //@observable 修饰符
  @observable mydetailCanvas = []
  //@action 修饰方法
  //分享
  @action getCanvas = async (params) => {
    const data = await getCanvas(params)
    console.log(data)
  }
  
}