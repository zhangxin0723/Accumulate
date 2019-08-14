import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import one from '../images/one.png'
import './footerCont.scss'

<<<<<<< HEAD
class FooterCont extends Component {
=======
// @inject()
// @observer

class Index extends Component {
>>>>>>> 37e11c23f786ef45d4d3d8c851eb28412997b79c

  config = {
    navigationBarTitleText: '我的订单'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }
<<<<<<< HEAD

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
=======

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

>>>>>>> 37e11c23f786ef45d4d3d8c851eb28412997b79c

  render () {
 
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
