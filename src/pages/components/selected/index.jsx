import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'
 
import more from "../../../img/more.svg"

@inject('counterStore')
@observer

class Selected extends Component {

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { } 

  render() {
    const { counterStore: { counter } } = this.props
    return (
      <View className='select'>
        <View className='select_top'>
          <View className='top_img'>
            {/* // <Image src={} /> */}
          </View>
        </View>
        <View className='select_tit'>
          <View className='tit_cont'><Text>精选好物</Text><Text className='line'></Text><Text className='wait'>等你来抢</Text></View><View className='tit_more'><Image src={more} /></View>
        </View>
        <View className='select_cont'>
            <View>
                <View className='cont_item'>
                  <View></View>
                  <View></View>
                  <View className='item_price'></View>
                </View>
            </View>
        </View>
      </View>
    )
  }
}

export default Selected 
