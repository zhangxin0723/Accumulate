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
    // this.props.home.getList()
    Taro.request({
      url: 'https://upapi.jinaup.com/api/open/page/home/products/1.0.0',
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

    // Taro.request({
    //   url: 'https://upapi.jinaup.com/api/open/page/home/list/1.0.0',
    //   header: {
    //     'content-type': 'application/json',
    //     'trackId': 'F649B34989975F2672F778DFE1F6CC7C0A012572F93A8D44E9E2E6A43B0D64EF5B753BD95E281A12FB6E2657CA3C322C8EDD48AD88C1D895AA882EE69AF51E209A101AD4A318BF41E54B13C189A368B3080D4CB37654208721AA2141D76141878B4F2F23C363A567319335B0AF520D12'

    //   },
    //   method: 'POST',
    //   success: (res) => {
    //     console.log(res)
    //     // this.setState({
    //     //   sectionList: res.data.result
    //     // })
    //   }
    // })


  }

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