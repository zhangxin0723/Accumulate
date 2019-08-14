import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import one from '../images/one.png'
import './footerCont.scss'

// @inject()
// @observer

class Index extends Component {

  config = {
    navigationBarTitleText: '我的订单'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render () {
    // const { counterStore: { counter } } = this.props
    return (
      <View className='cont'>
        <ul>
          <li>2019-11-12 16:44:32</li>
          <li>待付款</li>
        </ul>
        <View className="boby">
          <ol>
            <li><Image src={one}/> </li>
            <li>
              <span>澳洲直邮 b.box婴儿重力球学饮水杯 240ml</span>
              <span>规格:XL</span>
              <span>
                <i>￥52.5</i>
                <i>×1</i>
              </span>
            </li>
          </ol>
          <p>共2件商品 合计:$52.5</p>
        </View>
       
        {/* <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text> */}
      
      </View>
    )
  }
}

export default FooterCont 
