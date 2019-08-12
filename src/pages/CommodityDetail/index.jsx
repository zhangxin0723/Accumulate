import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Swiper, SwiperItem } from "@tarojs/components";
import namedPng from "../../images/1.jpg";
import namePng1 from "../../images/2.jpg";
import blackCard from "../../images/黑卡(2).svg";
// import { observer, inject } from '@tarojs/mobx'
import "./index.scss";

// @inject('counterStore')
// @observer
class CommodityDetail extends Component {
  config = {
    navigationBarTitleText: "首页详情"
  };

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {};

  decrement = () => {};

  incrementAsync = () => {};

  render() {
    return (
      <View className="detailWrap">
        <Swiper
          className="test-h"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem className="SwiperItem">
            <View className="demo-text-1 SwiperBanner">
              <Image src={namedPng} />
            </View>
          </SwiperItem>
          <SwiperItem className="SwiperItem">
            <View className="demo-text-2 SwiperBanner">
              <Image src={namePng1} />
            </View>
          </SwiperItem>
          <SwiperItem className="SwiperItem">
            <View className="demo-text-3 SwiperBanner">
              <Image src={namedPng} />
            </View>
          </SwiperItem>
        </Swiper>
        <View className='detailWrapTit'>
          <View className='detailWrapTitLeft'>
            <Text className='detailWrapTitMoney'>￥75</Text>
            <Text>73.02</Text>
            <Image src={blackCard} />
          </View>
          <View>分享</View>
        </View>
        <View className="detailLower">
          <View className="detailLowerLeft">分享赚</View>
          <View className="detailLowerRight">立即购买</View>
        </View>
      </View>
    );
  }
}

export default CommodityDetail;
