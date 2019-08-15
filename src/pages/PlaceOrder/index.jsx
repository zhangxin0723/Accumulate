import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";
import namedPng from "../../images/1.jpg";
import Wx from "../../images/分享微信.svg";
import NotChecked from "../../images/椭圆形-为勾选(4).svg";
import Checked from "../../images/椭圆形-为勾选.svg";
class PlaceOrder extends Component {
  config = {
    navigationBarTitleText: "提交订单"
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
      <View className="PlaceOrderWrap">
        <View className="PlaceOrderWrapTop">
          + 新增收货地址
          <View />
        </View>
        <View className="PlaceOrderWrapMiddle">
          <View className="PlaceOrderWrapMiddleTime">
            <View>2019-01-01</View>
            <View className="PlaceOrderWrapMiddleTimes">12:54:07</View>
          </View>
          <View className="PlaceOrderWrapMiddleDls">
            <View className="PlaceOrderWrapMiddleDlsBanner">
              <Image src={namedPng} />
            </View>
            <View className="PlaceOrderWrapMiddleDlsRight">
              <View className="PlaceOrderWrapMiddleDlsRightTit">
                帮宝适绿帮纸尿裤大号L164片超薄透气男女通用婴儿尿片尿不湿
              </View>
              <View className="PlaceOrderWrapMiddleDlsRightSpecif">
                规格: XL
              </View>
              <View className="PlaceOrderWrapMiddleDlsRightPrice">
                <Text>￥ 52.50</Text>
                <Text className="PlaceOrderWrapMiddleDlsRightNum">x1</Text>
              </View>
            </View>
          </View>
          <View className="PlaceOrderWrapMiddleMode">
            <View>发货方式</View>
            <View>快递 (包邮) : 0元</View>
          </View>
          <View className="PlaceOrderWrapMiddleMode PlaceOrderWrapMiddleModes">
            <View>订单总价</View>
            <Text>￥83.30</Text>
          </View>
        </View>
        <View className="PlaceOrderWrapMiddlePrefer">
          <View>优惠劵</View>
          <Text>暂无使用的优惠劵 &gt;</Text>
        </View>
        <View className="PlaceOrderWrapMiddleWx">
          <View className="PlaceOrderWrapMiddleWxLeft">
            <View className="PlaceOrderWrapMiddleWxLeftBnner">
              <Image src={Wx} />
            </View>
            <View className="PlaceOrderWrapMiddleWxLeftTit"> 微信支付</View>
          </View>

          <View className="PlaceOrderWrapMiddleWxRight">
            <Image
              className="PlaceOrderWrapMiddleWxLeftBnner"
              src={NotChecked}
            />
            {/* <Image
              className="PlaceOrderWrapMiddleWxLeftBnner"
              src={Checked}
            /> */}
          </View>
        </View>
        <View className="PlaceOrderWrapLand">
          <View className='PlaceOrderWrapLandLeft'>
            <View className='PlaceOrderWrapLandLeftSum'>总计</View>
            <View  className='PlaceOrderWrapLandLeftPrice'>
              ￥<Text>78.30</Text>
            </View>
          </View>
          <View  className='PlaceOrderWrapLandRight'>
           <Text>微信支付</Text> 
            <View className="Payment">去付款</View>
          </View>
        </View>
      </View>
    );
  }
}
export default PlaceOrder;
