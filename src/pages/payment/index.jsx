import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import withWeapp from '@tarojs/with-weapp'
import FooterCont from '../../component/footerCont'
import './index.scss'
var data = [
  {
    name: "全部",
    orderStatus: 0,
  },
  {
    name: "待付款",
    orderStatus: 1,
  },
  {
    name: "待发货",
    orderStatus: 2,
  },
  {
    name: "待收货",
    orderStatus: 3,
  },

];
@inject('my')
@observer

class Rate extends Component {

  config = {
    navigationBarTitleText: '我的订单'
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
    this.props.my.getMy({orderStatus:this.$router.params.orderStatus})
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
    newIndex:''
  }
  render () {
    
    let {newName,newDtata,newIndex}=this.state
    return (
      <View className='wrap'>
        <View className="made">
          <ul>
              {/*返回数据*/}
            
            {
              console.log(this.props.my.data,'003')
            }
            {
              newDtata.map((item,index)=>{s
                return <View style={{
                   borderBottom:item.orderStatus==newIndex?'3rpx solid #33d6c5':null
                }} onClick={()=>{
                    this.setState({
                      newIndex:item.orderStatus
                    })
                }}><li>{item.name}</li></View>
              })
            }
           
          </ul>
          <View className="footer">
             <View className="footer_type">
                <span>向上加载</span>
                <View className="footer_cont">
                   <FooterCont/>
                </View>
                <span>向下加载</span>
             </View>
          </View>
        </View>
        
      </View>
    )
  }
}

export default Rate 
