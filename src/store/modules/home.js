/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:46:30
 * @LastEditTime: 2019-08-14 14:37:15
 * @LastEditors: Please set LastEditors
 */
import { observable, action } from 'mobx'
import { getList } from '../../server/home'

import regeneratorRuntime from '../../utils/runtime'
console.log(regeneratorRuntime,"regeneratorRuntime")

export default class Home {
  //@observable 修饰符
  @observable homeList = null;
   
  //@action 修饰方法
  @action getList = async (params) => {
      const data = await getList(params)
      console.log(data,"data")
  }
     
} 