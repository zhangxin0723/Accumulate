/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:46:22
 * @LastEditTime: 2019-08-13 17:08:28
 * @LastEditors: Please set LastEditors
 */
//引入模块
import Home from './modules/home'
import City from './modules/city'
//实例化模块
const home = new Home()
const city = new City()
export default {
  home,
  city
}