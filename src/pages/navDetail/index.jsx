import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'

import NavItem from '../components/navItem'

// @inject()
// @observer

class NavDetail extends Component {

  config = {
    navigationBarTitleText: '积纳有品'
  }

  componentWillMount() { }

  componentWillReact() {

  }

  componentDidMount() {
    Taro.request({
      url: 'https://upapi.jinaup.com/api/open/product/category/query/1.0.0',
      header: {
        'content-type': 'application/json',
      },
      method: 'POST',
      success: (res) => {
        console.log(res)
        // this.setState({
        //   navlist: res.data.result
        // })
      }
    })
   }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
        <View className='nav_detail'>
          <View className='nav'>
            <Text className='nav_ctive'>今日推荐</Text>
            <Text>纸尿裤</Text> 
            <Text>母婴专区</Text>
            <Text>服装</Text>
            <Text>家居</Text>
            <Text>小家电</Text>
          </View>
          <View className='good'>
            <View className='good_item'>
              <View className='item_img'></View>
              <View className='item_tit'>妈妈奶粉</View>
            </View>
            <View className='good_item'>
              <View className='item_img'></View>
              <View className='item_tit'>妈妈奶粉</View>
            </View>
            <View className='good_item'>
              <View className='item_img'></View>
              <View className='item_tit'>妈妈奶粉</View>
            </View>
            <View className='good_item'>
              <View className='item_img'></View>
              <View className='item_tit'>妈妈奶粉</View>
            </View>
          </View>
          <View className='choose'>
            <Text className='choose_item'>综合</Text>
            <Text className='choose_item'>最新</Text>
            <Text className='choose_item'>价格</Text>
          </View>
          <View className='nav_cont'>
              <NavItem />
              <NavItem />
              <NavItem />
              <NavItem />
          </View>
        </View>
    )
  }
}

export default NavDetail 
