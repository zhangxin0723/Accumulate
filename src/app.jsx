import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/mobx";
import Index from "./pages/index";
import counterStore from "./store/counter";
import "./app.scss";
import "taro-ui/dist/style/index.scss";

const store = {
  counterStore
};

class App extends Component {
  config = {
    pages: [
      //提交订单
      "pages/PlaceOrder/index",
      //商品详情
      "pages/CommodityDetail/index",
      "pages/index/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
