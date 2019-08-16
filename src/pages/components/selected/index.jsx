import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'

import more from "../../../img/more.svg"

@inject('home')
@observer

class Selected extends Component {

  componentWillMount() { }

  componentWillReact() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    console.log(this.props.home.selectedList, "selected...")
    return (
      <View>
        {
          this.props.home && this.props.home.selectedList.map((item, index) => {
            return (<View className='select' key={index}>
              <View className='select_top'>
                <View className='top_img'>
                   <Image src={item.img.pictUrl} />
                </View>
              </View>
              <View className='select_tit'>
                <View className='tit_cont'><Text>精选好物</Text><Text className='line'></Text><Text className='wait'>等你来抢</Text></View><View className='tit_more'><Image src={more} /></View>
              </View>
              <View className='select_cont'>
                {
                  item.cont.items.map((key,ind)=>{
                    return (<View className='cont_item' key={ind}>
                    <View className='item_img'>
                      <Image src={key.imgUrl} />
                    </View>
                    <View className='item_cont'>{key.title}</View>
                    <View className='item_price'>￥{key.salesPrice}</View>
                  </View>)
                  })
                }
              </View>
            </View>)
          })
        }
      </View>
    )
  }
}

export default Selected 
