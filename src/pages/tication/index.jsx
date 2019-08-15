import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import withWeapp from '@tarojs/with-weapp'
import creame from '../../images/creame.png'
import './indes.scss';


const data=[{
  name:"正面照",
  Image:creame,
},{
  name:"反面照",
  Image:creame
}]
@inject('my')
@observer
class tication extends Component {
  state={
     newDate:[],
     tempFile:''
  }
  config = {
    navigationBarTitleText: '实名认证'
  }

  componentWillMount () { 
    
  }
 
  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 
     this.props.my.getAuth()
  }

  componentWillUnmount () {
   }

  componentDidShow () { 
    
  }

  componentDidHide () { }

 
 
  render () {
    let {newDate,tempFile}=this.state
   this.setState({
    newDate:data
   })
    return (
      <View className='wrap'>
         <View className="name">
             <ul>
               <li>
                 <span>真实姓名</span>
                 <input type="text"/>
               </li>
               <li>
                 <span>身份证号</span>
                 <input type="text"/>
               </li>
             </ul>
         </View>
         <View className="identity">
            <View className="identity_cont">
               <p>上传身份证片<em>(图片png,jpg格式,大小不超5M)</em></p>
               <ul>
                 
                 {
                   newDate && newDate.map((item,index)=>{
                      return <View  onClick={()=>{
                        var that = this
                        wx.chooseImage({
                         count: 1,
                         sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                         sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                         success: function (res) {
                           var tempFilePaths = res.tempFilePaths[0]
                           that.urlTobase(res.tempFilePaths[0]) 
                          }
                        })
                        
                      }}>
                        <li key={index}>
                            <Image src={item.Image}/>
                            <span>{item.name}</span>
                        </li>
                      </View>
                   })
                 }
                
                 
               </ul>
            </View>
         </View>
         <View className="tication">
         {
           console.log(this.props.my,'props')
         }
            <h2>为什么需要实名认证?</h2>
            <ol>
              <li>
                <b>.</b>
                 根据海关规定,购买跨境商品需要办理清关手续,请您配合进行实名认证,以确保您购买分的商品顺利通过·海关检查。(积纳有品海购承诺所传身份证明只用于办理跨境商品的清关手续,不做他途使用,其他任何人均法查看)   
              </li>
              <li>
                  <b>.</b>
                  实名认证的规则:购买跨境商品需填写积纳账号注册·人的真实姓名、身份证号码及与实名一致的手机号,部分商品下单时需提供收货人的实名信息(含身份证照片)，具体请以下单时的提示为准。 
              </li>
            </ol>
         </View>
         <View className="button">
            <button>保存</button>
         </View>
       </View>
      
    )
  }
  urlTobase(url){
    wx.request({
      url:url,
      responseType: 'arraybuffer', //最关键的参数，设置返回的数据格式为arraybuffer
      success:res=>{
	      //把arraybuffer转成base64
            let base64 = wx.arrayBufferToBase64(res.data); 
            
            //不加上这串字符，在页面无法显示的哦
            base64　= 'data:image/jpeg;base64,' + base64　
            
            //打印出base64字符串，可复制到网页校验一下是否是你选择的原图片呢
            console.log(base64,'0987')　
          }
    })

  }
}

export default tication 
