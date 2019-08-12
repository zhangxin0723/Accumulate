import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'
import baobao from '../../img/baobao.jpg'

@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '购物车'
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
      <View className='wrap'>
          <View className='main'>
              <View className='main_cart'>
                <View className='cart_checked'>
                    <span></span>
                </View>
                <Image src={baobao} alt=""/>
                <View className='cart_cont'>
                    <p>帮宝适绿帮纸尿裤大号L64片超薄透气男女通用婴儿尿片尿不湿</p>
                    <span>规格：XL</span>
                    <View className='cart_box'>
                        <p>¥<span>52.50</span></p>
                        <View>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </View>
                    </View>
                </View>
                {/* <dl>
                    <dt></dt>
                    <dd>帮宝适绿帮纸尿裤大号L64片超薄透气男女通用婴儿尿片尿不湿</dd>
                </dl> */}
              </View>
          </View>
          <View className="footer">123333</View>
      </View>
    )
  }
}

export default Index 
