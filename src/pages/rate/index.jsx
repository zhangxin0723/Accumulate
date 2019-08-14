import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import withWeapp from '@tarojs/with-weapp'
import Overdue from '../../component/overdue/overdue'
import './index.scss'
var data = [
  {
    name: "未使用",
  },
  {
    name: "已使用",
  },
  {
    name: "已过期",
  },

];
// @inject('counterStore')
// @observer

class Payment extends Component {

  config = {
    navigationBarTitleText: '我的优惠券'
  }

  componentWillMount () { 
    this.setState({
      newName:this.$router.params
    })
  }
 
  componentWillReact () {
    console.log('componentWillReact')
  }
  
  componentDidMount () { 
    
  }

  componentWillUnmount () {
   }

  componentDidShow () { 
    var that = this;
        that.setState({
          newDtata: data
        });
  }

  componentDidHide () { }

 




  state={
    newName:"",
    newDtata:[],
    newIndex:0
  }
  render () {
    
    let {newName,newDtata,newIndex}=this.state
    return (
      <View className='wrap'>
        <View className="made">
          <ul>
            
            {
              newDtata.map((item,index)=>{
                return <View style={{
                     borderBottom:index===newIndex?'3rpx solid #33d6c5':null
                }} onClick={()=>{
                    this.setState({
                      newIndex:index
                    })
                }}><li>{item.name}</li></View>
              })
            }
           
          </ul>
          <View className="footer">
             <View className="footer_type">
                <span>向上加载</span>
                <View className="footer_cont">
                   <Overdue/>
                </View>
                <span>向下加载</span>
             </View>
          </View>
        </View>
        {/* <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text> */}
      </View>
    )
  }
}

export default Payment 
