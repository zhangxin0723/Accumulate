import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'
import vip from '../../../img/vip.png'

@inject('counterStore')
@observer

class Listitem extends Component {

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { counterStore: { counter } } = this.props
    return (
      <View className='list_item'>
        <View className='item_img'>

        </View>
        <View className='item_cont'>
          <View className='item_tit'></View>
          <View className='item_des'>
            <Text className='dec_item'>包邮</Text>
            <Text className='dec_item'>包税</Text>
          </View>
          <View className='item_price'>
            <Text className='price_cell'>￥</Text><Text className='price_num'>149</Text><Text className='price_next'>￥127.13</Text><Image src={vip} /><Text className='price_get'>赚￥21.87</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Listitem 
