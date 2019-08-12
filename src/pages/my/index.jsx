import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import others from '../../img/others.svg'
import payment from '../../img/payment.svg'
import received from '../../img/received.svg'
import refund from '../../img/refund.svg'
import logBg from '../../images/logBg.png'
import Group from '../../images/member.png'
import members from '../../images/members.png'
import yhj from '../../images/yhj.png'
import kf from '../../images/kf.png'
import jt from '../../images/jt.png'
import shouye from '../../images/shouye.png'
import shop from '../../images/shop.png'
import active from '../../images/my_active.png'

import './index.scss'


@inject('counterStore')
@observer
class My extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render () {
    // const { counterStore: { counter } } = this.props
    return (
      <View className='wrap'>
      <View className="header">
         <Image src={logBg}/>
         <View className="header_name">
          <ul>
            <li>
               <Image src={members}/>
            </li>
            <li>
               <span>默默许愿 
                  <em>
                    <Image src={Group}/> 
                  </em>
               </span>
               <span>邀请码: C5JQ70<i>复制</i></span>
            </li>
          </ul>
         </View>
      </View>
      <View className="center">
        <View className="center_colse">
            <View className="center_my">
               <span>我的订单</span>
               <span>查看全部订单</span>
            </View>
            <View className="center_payment">
              <ul>
                <li>
                  <span><Image src={payment}/></span>
                  <span>待付款</span>
                </li>
                <li>
                  <span><Image src={others}/></span>
                  <span>待发货</span>
                </li>
                <li>
                  <span><Image src={received}/></span>
                  <span>待收货</span>
                </li>
                <li>
                  <span><Image src={refund}/></span>
                  <span>退货退款</span>
                </li>
              </ul>
            </View>
            <View className="discount">
              <ol>
                <li>
                   <Image src={yhj}/>
                  <span><em>优惠券</em><i><Image src={jt}/></i></span>
                </li>
                <li>
                <Image src={kf}/>
                  <span><em>关于我们</em><i><Image src={jt}/></i></span>
               </li>
               <li>
                  <Image src={yhj}/>
                  <span><em>我的分享</em><i><Image src={jt}/></i></span>
               </li>
               <li>
               <Image src={kf}/>
                  <span><em>联系客服</em><i><Image src={jt}/></i></span>
               </li>
               <li>
                  <Image src={yhj}/>   
                  <span><em>设置</em><i><Image src={jt}/></i></span>
               </li>
              </ol>
            </View>
            <p>您的邀请人:Michael先生</p>
        </View>
      </View>
      <View className="footer">
         <ol>
           <li>
             <span><Image src={shouye}/></span>
             <span>首页</span>
           </li>
           <li>
           <span><Image src={shop}/></span>
             <span>购物车</span>
           </li>
           <li>
             <span><Image src={active}/></span>
             <span>我的</span>
           </li>
         </ol>
      </View>
        {/* <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text> */}
      </View>
    )
  }
}

export default My 