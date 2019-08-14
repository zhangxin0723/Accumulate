import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import others from "../../img/others.svg";
import payment from "../../img/payment.svg";
import received from "../../img/received.svg";
import refund from "../../img/refund.svg";
import logBg from "../../images/logBg.png";
import Group from "../../images/member.png";
import members from "../../images/members.png";
import yhj from "../../images/yhj.png";
import kf from "../../images/kf.png";
import jt from "../../images/jt.png";
import shouye from "../../images/shouye.png";
import shop from "../../images/shop.png";
import active from "../../images/my_active.png";
import dz from "../../images/dz.png";
import sm from '../../images/sm.png'
import "./index.scss";
var data = [
  {
    name: "待付款",
    orderStatus: 1,
    Image: payment
  },
  {
    name: "待发货",
    orderStatus: 2,
    Image: others
  },
  {
    name: "待收货的",
    orderStatus: 3,
    Image: received
  },
  {
    name: "全部",
    orderStatus: 0,
  }
];
var coupon=[{
   name:"我的优惠券",
   Image: yhj,
   state:0,
   id:1,
   emil:'/pages/rate/index'
},{
  name:"收获地址",
  Image: dz,
  code:0,
  id:2,
  emil:'/pages/delivery/index'
},{
  name:"联系客服",
  Image: kf,
  id:3,
  emil:'/pages/service/index'
},{
  name:"实名认证",
  Image: sm,
  id:4,
  emil:'/pages/tication/index'
}]
class My extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {
    var that = this;

    that.setState({
      newDtata: data,
      couponData:coupon
    });
  }

  componentDidHide() {}

  state = {
    newDtata: [],
    couponData:[]
  };
  render() {
    const { newDtata,couponData } = this.state;
    return (
      <View className="wrap">
        <View className="header">
          <Image src={logBg} />
          <View className="header_name">
            <ul>
              <li>
                <Image src={members} />
              </li>
              <li>
                <span>
                  <i>默默许愿</i>
                  <em>
                    <Image src={Group} />
                  </em>
                </span>
                <span>
                  邀请码: C5JQ70<i>复制</i>
                </span>
              </li>
            </ul>
          </View>
        </View>
        <View className="center">
          <View className="center_colse">
            <View className="center_my">
              <span>我的订单</span>
              <span>查看全部订单</span>
            </View>
            <View className="center_payment">
              <ul>
                {newDtata &&
                  newDtata.map((item, index) => {
                    return (
                      item.Image&&<View
                        onClick={() => {
                          Taro.navigateTo({
                            url: `/pages/payment/index?orderStatus=${
                              item.orderStatus
                            }&name=${item.name}`
                          });
                        }}
                      > 
                        <li key={item.orderStatus}>
                          <span>
                            <Image src={item.Image} />
                          </span>
                          <span>{item.name}</span>
                        </li>
                      </View>
                    );
                  })}
              </ul>
            </View>
            <View className="discount">
              <ol>
                {
                  couponData&&couponData.map((item,index)=>{
                   return <View onClick={()=>{
                     this.coupon(item.id,item.name,item.state,item.code,Taro,item.emil,couponData)
                   }}>
                        <li>
                            <Image src={item.Image} />
                            <span>
                              <em>{item.name}</em>
                              <i>
                                <Image src={jt} />
                              </i>
                            </span>
                        </li>
                   </View>
                  })
                }
               
                
              </ol>
            </View>
            <p>您的邀请人:Michael先生</p>
          </View>
        </View>
        <View className="footer">
          <ol>
            <li>
              <span>
                <Image src={shouye} />
              </span>
              <span>首页</span>
            </li>
            <li>
              <span>
                <Image src={shop} />
              </span>
              <span>购物车</span>
            </li>
            <li>
              <span>
                <Image src={active} />
              </span>
              <span>我的</span>
            </li>
          </ol>
        </View>
        {/* <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text> */}
      </View>
    );
  }
  //跳路由
  coupon(id,name,state,code,Taro,emil,couponData){
    // console.log(id,name,state,code,Taro,emil,couponData,'09')
    couponData.map((item,index)=>{
        if(item.name===name){
          if(state||code==undefined){
            Taro.navigateTo({
              url: `${emil}?state=${state}`
            });
          }else if(code||state==undefined){
            Taro.navigateTo({
              url: `${emil}?code=${code}`
            });
          }else{
            Taro.navigateTo({
              url: `${emil}`
            });
          }
        }
    })
  }
}

export default My;
