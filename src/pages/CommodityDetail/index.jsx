import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
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
      <View className="detail">
        <View>
          <img src="" alt="" />
        </View>
      </View>
    );
  }
}

export default CommodityDetail;
