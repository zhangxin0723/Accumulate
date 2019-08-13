import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'
import search from '../../img/search.svg'
import nav from '../../img/nav.svg'
import Selected from '../components/selected/index'
import Listitem from '../components/listItem/index'

@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '积纳有品'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='home'>
        <View className='search'>
          <Image src={search} alt="" />
        </View>
        <View className='nav'>
          <Text className='nav_ctive'>今日推荐</Text>
          <Text>纸尿裤</Text>
          <Text>母婴专区</Text>
          <Text>服装</Text>
          <Text>家居</Text>
          <Text>小家电</Text>
        </View>
        <Swiper className='banner'>

        </Swiper>
        <View className='classify'>
          <View className='classifyItem'>
            <View className='classify_img'>
              <Image src={nav} alt="" />
            </View>
            <View className='classify_tit'>会员专区</View>
          </View>
          <View className='classifyItem'>
            <View className='classify_img'>
              <Image src={nav} alt="" />
            </View>
            <View className='classify_tit'>会员专区</View>
          </View>
          <View className='classifyItem'>
            <View className='classify_img'>
              <Image src={nav} alt="" />
            </View>
            <View className='classify_tit'>会员专区</View>
          </View>
          <View className='classifyItem'>
            <View className='classify_img'>
              <Image src={nav} alt="" />
            </View>
            <View className='classify_tit'>会员专区</View>
          </View>
          <View className='classifyItem'>
            <View className='classify_img'>
              <Image src={nav} alt="" />
            </View>
            <View className='classify_tit'>会员专区</View>
          </View>
        </View>
        <View className='good_thing'>
          <Selected></Selected>
          <Selected></Selected>
          <Selected></Selected>
        </View>
        <View className='home_list'>
          <View className='select_tit'>
            <View className='tit_cont'><Text>为你精选</Text><Text className='line'></Text><Text className='wait'>等你来抢</Text></View>
          </View>
          <View className='list_cont'>
            <Listitem />
          </View>
        </View>
      </View>
    )
  }
}

export default Index 