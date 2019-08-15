import Taro, { Component } from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import namedPng from "../../images/1.jpg";
import namePng1 from "../../images/2.jpg";
import blackCard from "../../images/黑卡(2).svg";
import "./index.scss";
import { AtFloatLayout } from "taro-ui";

@inject("home")
@observer
class CommodityDetail extends Component {
  config = {
    navigationBarTitleText: "商品详情"
  };
  constructor() {
    this.state = {
      isOpened: false
    };
  }
  handleClickBtn() {
    this.setState(() => {
      return {
        isOpened: !this.state.isOpened
      };
    });
  }
  componentWillMount() {
    console.log(this.props.home.commodityDetails())
  }

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {};

  decrement = () => {};

  incrementAsync = () => {};

  render() {
    let { isOpened } = this.state;
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
        <View className="detailWrapTit">
          <View className="detailWrapTitLeft">
            <View className="detailWrapTitMoney">
              <View className="detailWrapTitMoneyOne">￥</View> <View>75</View>
            </View>
            <Text>73.02</Text>
            <Image src={blackCard} />
          </View>
          <View className="detailWrapTitShare">分享赚1.49</View>
        </View>
        <View className="detailWrapName">
          <View className="detailWrapTop">
            澳洲直邮Swisse钙+维生素D片150粒*2罐洲直邮Swisse钙+维生素D片150粒*2罐
          </View>
          <View className="detailWrapBottom">快递包邮</View>
        </View>
        <View className="detailWrapChoice">
          <View>
            选择 <View>默认</View>
          </View>
          <Text className="detailWrapChoiceGt">&gt;</Text>
        </View>
        <View className="detailWrapChoice">
          <View>
            说明 <View className="detailWrapChoicePink">适合幼儿园玩耍</View>
          </View>
        </View>
        <View className="detailWrapChoice">
          <View>
            提示
            <View className="detailWrapChoicePink">
              西藏自治区，新疆维吾尔自治区不包邮，运费加20.00元
            </View>
          </View>
        </View>
        <View className="detailWrapList">内容</View>
        <View className="detailLower">
          <View className="detailLowerLeft">分享赚</View>
          <View
            onClick={() => this.handleClickBtn()}
            className="detailLowerRight"
          >
            立即购买
          </View>
        </View>
        <AtFloatLayout isOpened={this.state.isOpened} title="颜色、尺码">
          <View className="detailWrapMask">
            <View className="detailWrapMaskBanner">
              <Image src={namePng1} />
            </View>
            <View className="detailWrapMaskPrice">
              <Text className="detailWrapMaskPriceMoney">￥399.50</Text>
              <Text className="detailWrapMaskPriceStock">库存: 4999</Text>
            </View>
          </View>
          <View className="detailWrapMaskColor">
            <View className="detailWrapMaskColors">颜色</View>
            <View className="detailWrapMaskColorSize">
              <Text className="active">灰色</Text>
              <Text>灰色灰色</Text> <Text>灰色</Text>
              <Text>灰色</Text>
              <Text>灰色</Text>
              <Text>灰色</Text>
            </View>
          </View>
          <View className="detailWrapMaskColor">
            <View className="detailWrapMaskColors">尺码</View>
            <View className="detailWrapMaskColorSize">
              <Text className="active">L(170/92A)</Text>
              <Text>L(170/92A)</Text>
              <Text>L(170/92A)</Text>
              <Text>L(170/92A)</Text>
            </View>
          </View>
          <View className="detailWrapNum">
            <View className="detailWrapNumLeft">数量</View>
            <View className="detailWrapNumRight">
              <Text className="detailWrapNumRightReduce">–</Text>
              <Text>1</Text>
              <Text className="detailWrapNumRightAdd">+</Text>
            </View>
          </View>
          <View className="detailWrapNumBtn">确定</View>
        </AtFloatLayout>
      </View>
    );
  }
}

export default CommodityDetail;
