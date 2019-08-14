import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import withWeapp from '@tarojs/with-weapp'
import creame from '../../images/creame.png'
import './indes.scss'

class tication extends Component {

  config = {
    navigationBarTitleText: '实名认证'
  }

  componentWillMount () { 
    
  }
 
  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 
  }

  componentWillUnmount () {
   }

  componentDidShow () { 
    
  }

  componentDidHide () { }

 
 
  render () {
    return (
      <View className='wrap'>
         <View className="name">
             <ul>
               <li>
                 <span>真实姓名</span>
                 <input type="text"/>
               </li>
               <li>
                 <span>身份证号</span>
                 <input type="text"/>
               </li>
             </ul>
         </View>
         <View className="identity">
            <View className="identity_cont">
               <p>上传身份证片<em>(图片png,jpg格式,大小不超5M)</em></p>
               <ul>
                 <li>
                 <input type="file"/>
                   
                    <Image src={creame}/>
                    <span>正面照</span>
                 </li>
                 <li>
                    <Image src={creame}/>
                    <span>反面照</span>
                    <input type="file"/>
                 </li>
               </ul>
            </View>
         </View>
         <View className="tication">
            <h2>为什么需要实名认证?</h2>
            <ol>
              <li>
                <b>.</b>
                 根据海关规定,购买跨境商品需要办理清关手续,请您配合进行实名认证,以确保您购买分的商品顺利通过·海关检查。(积纳有品海购承诺所传身份证明只用于办理跨境商品的清关手续,不做他途使用,其他任何人均法查看)   
              </li>
              <li>
                  <b>.</b>
                  实名认证的规则:购买跨境商品需填写积纳账号注册·人的真实姓名、身份证号码及与实名一致的手机号,部分商品下单时需提供收货人的实名信息(含身份证照片)，具体请以下单时的提示为准。 
              </li>
            </ol>
         </View>
         <View className="button">
            <button>保存</button>
         </View>
       </View>
      
    )
  }
}

export default tication 
