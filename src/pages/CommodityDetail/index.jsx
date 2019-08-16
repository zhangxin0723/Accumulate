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
      isOpened: false,
      color: ["灰色", "灰色", "灰色", "灰色灰色", "灰色", "灰色"],
      size: ["L(170/92A)", "XL(180/98A)", "L(170/92A)", "L(170/92A)"],
      ind: 0,
      ind1: 0
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
    this.props.home.commodityDetails({ pid: 70219 });
    this.props.home.getDetailImg({ pid: 70219 });
  }
  colorTab(ind) {
    this.setState({
      ind
    });
  }
  sizeTab(ind1) {
    this.setState({
      ind1
    });
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
    // console.log(this.props.home.getDetailImg, "666666");
    let { isOpened, color, ind, size } = this.state;
    return (
      <View className="detailWrap">
        <Swiper
          className="test-h"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots={Number}
          autoplay
        >
          {this.props.home.detailList.supplierProductPictureVoList &&
            this.props.home.detailList.supplierProductPictureVoList.map(
              (item, index) => {
                return (
                  <SwiperItem className="SwiperItem" key={index}>
                    <View className="demo-text-1 SwiperBanner">
                      <Image src={item.imgUrl} />
                    </View>
                  </SwiperItem>
                );
              }
            )}
        </Swiper>
        <View className="detailWrapTit">
          <View className="detailWrapTitLeft">
            <View className="detailWrapTitMoney">
              <View className="detailWrapTitMoneyOne">￥</View>
              <View>{this.props.home.detailList.salesPrice}</View>
            </View>
            <Text>{this.props.home.detailList.vipPrice}</Text>
            <Image src={blackCard} />
          </View>
          <View className="detailWrapTitShare">
            分享赚{this.props.home.detailList.memberDiscountPrice}
          </View>
        </View>
        <View className="detailWrapName">
          <View className="detailWrapTop">
            {this.props.home.detailList.title}
          </View>
          <View className="detailWrapBottom">快递包邮</View>
        </View>
        <View className="detailWrapChoice">
          <View>选择 默认</View>
          <Text className="detailWrapChoiceGt">&gt;</Text>
        </View>
        <View className="detailWrapChoice">
          <View>
            说明
            <View className="detailWrapChoicePink">
              {this.props.home.detailList.description}
            </View>
          </View>
        </View>
        {/* <View className="detailWrapChoice">
          <View>
            提示
            <View className="detailWrapChoicePink">
              西藏自治区，新疆维吾尔自治区不包邮，运费加20.00元
            </View>
          </View>
        </View> */}
        <View className="detailWrapList">
          <View className="detailWrapListImg"> 
            {/* {this.props.home.getDetailImg &&
              this.props.home.getDetailImg.map((item, index) => {
                return <Image key={index} src={item.imgUrl} />;
              })} */}
          </View>
        </View>
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
              {color.map((item, index) => (
                <Text
                  key={index}
                  onClick={() => this.colorTab(index)}
                  className={ind === index ? "active" : null}
                >
                  {item}
                </Text>
              ))}
            </View>
          </View>
          <View className="detailWrapMaskColor">
            <View className="detailWrapMaskColors">尺码</View>
            <View className="detailWrapMaskColorSize">
              {size.map((item, index) => (
                <Text
                  key={index}
                  onClick={() => this.sizeTab(index)}
                  className={ind1 === index ? "active" : null}
                >
                  {item}
                </Text>
              ))}
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
