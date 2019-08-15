import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'

// @inject('counterStore')
// @observer
class Index extends Component {
  
  config = {
    navigationBarTitleText: '联系客服'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { } 
 
  render () {
    return (
      <View className='wrap'>
          <p>客服服务电话：周一至周日（24小时）</p>
          <p>客服电话：4008 0000 53</p>
      </View>
    )
  }
}

export default Index 
