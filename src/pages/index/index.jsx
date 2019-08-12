import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import others from '../../img/others.svg'
import received from '../../img/received.svg'
import refund from '../../img/refund.svg'
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
                  <span><Image src={others}/></span>
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
        </View>
      </View>
      <View className="footer"></View>
        {/* <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text> */}
      </View>
    )
  }
}

export default My 
