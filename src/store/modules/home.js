/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:46:30
 * @LastEditTime: 2019-08-13 16:51:13
 * @LastEditors: Please set LastEditors
 */
import { observable, action } from 'mobx'
import { getHome } from '../../server/home'

export default class Home {
  //@observable 修饰符
  // @observable homeData = null;

  //@action 修饰方法
  @action getHome = (params) => {
      const data = getHome(params)
      console.log(data)
  }
  
}