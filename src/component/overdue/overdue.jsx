import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import one from '../images/one.png'
import './overdue.scss'

class Overdue extends Component {

  config = {
    navigationBarTitleText: '我的订单'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  

  render () {
    return (
      <View className='cont'>
        <View className="overdue">
           <View className="overdue_type">
            <ol>
                  <li><em>$</em><span>180</span></li>
                  <li>满￥1000使用</li>
              </ol>
              <ul>
                  <li>新人礼满1000满180</li>
                  <li>2018.12.31到期</li>
              </ul>
           </View>
           <em></em>
           <i></i>
           <p>指定仓库/商家部分分类商品使用</p>
           
        </View>
      </View>
       
        
      
    )
  }
}

export default Overdue 
