/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:46:30
 * @LastEditTime: 2019-08-13 16:51:13
 * @LastEditors: Please set LastEditors
 */
import { observable, action } from 'mobx'
import { getMy,getAuth } from '../../server/my'

export default class My {
  //@observable 修饰符
  // @observable homeData = null;
  @observable data=[]
  @observable auth=[]
  

  //@action 修饰方法
  @action getMy = (params) => {
      this.data = getMy(params)
  }
  //实名制
  @action getAuth = () => {
     this.auth = getAuth()
 }
 
}