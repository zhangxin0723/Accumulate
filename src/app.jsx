<<<<<<< HEAD
import Taro, { Component } from '@tarojs/taro '
=======
import Taro, { Component } from '@tarojs/taro'
>>>>>>> 5f6d0f979b61992867622aaa304d51e6b7206d93
import { Provider } from '@tarojs/mobx'
import Payment from './pages/payment'//我的订单
import My from './pages/my'//我的页面
import Rate from './pages/rate'//我优惠券
import Tication from './pages/tication'//实名认证
<<<<<<< HEAD
import Index from "./pages/home/index.jsx";
import store from "./store";
import "./app.scss";
import "taro-ui/dist/style/index.scss";
import "taro-ui/dist/style/components/switch.scss";

<<<<<<< HEAD
import Index from "./pages/home/index.jsx";
import store from "./store";

import "./app.scss";

import "taro-ui/dist/style/index.scss";
import "taro-ui/dist/style/components/switch.scss";

=======
>>>>>>> 37e11c23f786ef45d4d3d8c851eb28412997b79c
=======

import counterStore from './store/counter'
import './app.scss'
>>>>>>> 5f6d0f979b61992867622aaa304d51e6b7206d93

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  config = {
    pages: [
      'pages/my/index',
      'pages/payment/index',
      'pages/rate/index',
      'pages/tication/index',
<<<<<<< HEAD
<<<<<<< HEAD
      //提交订单
      "pages/PlaceOrder/index",
      //商品详情
      "pages/CommodityDetail/index",
      // "pages/index/index",
=======
      "pages/PlaceOrder/index",
      "pages/CommodityDetail/index",
      "pages/index/index",
>>>>>>> 37e11c23f786ef45d4d3d8c851eb28412997b79c
      "pages/address/index",
      "pages/delivery/index",
      "pages/cart/index",
      "pages/home/index"
=======
>>>>>>> 5f6d0f979b61992867622aaa304d51e6b7206d93
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <My/>
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
