import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'

// @inject()
// @observer

class NavItem extends Component {

  componentWillMount() { }

  componentWillReact() {

  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
        <View className='nav_item'>
          <View className='item_img'></View>
          <View className='item_tit'>小郭同学你傻不傻啊我感觉你好傻啊</View>
          <View className='item_des'>
            <Text className='des_item'>包邮</Text>
          </View>
          <View className='item_price'>
            <Text className='price_cell'>￥</Text><Text className='price_num'>196</Text>
          </View>
          <View className='item_next'>
            <Text className='next_one'>￥91.03</Text><Text className='next_get'>赚￥4.97</Text>
          </View>
        </View>
    )
  }
}

export default NavItem 
