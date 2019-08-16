import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'
import search from '../../img/search.svg'
import nav from '../../img/nav.svg'
import Selected from '../components/selected/index'
import Listitem from '../components/listItem/index'

@inject('home')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '积纳有品'
  }

  componentWillMount() { }

  componentWillReact() {
    
  }

  componentDidMount() { 
    this.props.home.getNavList()
    this.props.home.getList()
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    console.log(this.props.home.navList)
    console.log(this.props.home.list)
    return (
      <View className='home'>
        <View className='search'>
          <Image src={search} alt="" />
        </View>
        <View className='nav'>
          <Text className='nav_ctive'>今日推荐</Text>
          {
            this.props.home && this.props.home.navList.map(item =>{
              return <Text key={item.cid}>{item.cname}</Text>
            })
          }
        </View>
        <Swiper className='banner'>

        </Swiper>
        <View className='classify'>
          {
            this.props.home && this.props.home.list[1].items.map(item => {
              return (
                <View className='classifyItem' key={item.pid}>
                  <View className='classify_img'>
                    <Image src={item.imgUrl} alt="" />
                  </View>
                  <View className='classify_tit'>{item.title}</View>
                </View>)
            })
          }
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