import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Payment from './pages/payment'//我的订单
import My from './pages/my'//我的页面
import Rate from './pages/rate'//我优惠券
import Tication from './pages/tication'//实名认证

import counterStore from './store/counter'
import './app.scss'
import store from './store/'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }



class App extends Component {

  config = {
    pages: [
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
        <My/>
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
