import Taro , { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer , inject } from '@tarojs/mobx'

import baobao from '../../../img/baobao.jpg'
import './index.scss'
class Cart extends Component {
    render() {
        return (
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
                        <View className='cart_cart'>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
export default Cart