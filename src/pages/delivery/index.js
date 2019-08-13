import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'
import Delivery from '../components/delivery'

@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '收货地址'
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
    return (
        <View className='wrap'>
            <Delivery></Delivery>
            <Delivery></Delivery>
            <Delivery></Delivery>
            <View className='increased'>
               <View className='cont_increased'>
                 新增收货地址
               </View>
            </View>
        </View>  
    )
  }
}

export default Index 
