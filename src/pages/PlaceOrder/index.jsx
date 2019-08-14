import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";
import address from "../../images/地址icon(1).svg";
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
          <View>
            <Text>李易峰</Text>
            <Text>15034027869</Text>
          </View>
          <View>{/* <Image src={address}/> */}</View>
          <View>北京市朝阳区奥中A座902室</View>
        </View>
        <View>
          <View />
        </View>
      </View>
    );
  }
}
export default PlaceOrder;
