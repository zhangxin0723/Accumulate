import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'

// @inject()
// @observer

class Index extends Component {

  config = {
    navigationBarTitleText: '分享朋友圈'
  }

  componentWillMount() { }

  componentWillReact() { }

  componentDidMount() {
    const ctx = wx.createCanvasContext('myCanvas')
    // wx.chooseImage({
    //   success: function(res){
    //     console.log(res)
    //     ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
    //     ctx.draw()
    //   }
    // })
   }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View>
        <canvas id='myCanvas' ref='ctxcanvas'></canvas>
      </View>
    )
  }
}

export default Index 
