import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/mobx";
import Index from "./pages/home/index.jsx";
import store from "./store";

import NavDetail from './pages/navDetail'

import "./app.scss";

import "taro-ui/dist/style/index.scss";
import "taro-ui/dist/style/components/switch.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }


class App extends Component {

  config = {
    pages: [
      'pages/address/index',
      'pages/delivery/index',
      'pages/cart/index',
      'pages/home/index',
      'pages/index/index',
      'pages/my/index',
      'pages/payment/index',
      'pages/rate/index',
      'pages/tication/index',
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
        <Index/>
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
