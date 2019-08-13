import others from '../img/others.svg'
import payment from '../img/payment.svg'
import received from '../img/received.svg'
import refund from '../img/refund.svg'
 const data=[{
    "name":"待付款",
    "orderStatus":1,
    Image:{payment}
  },{
    "name":"待发货",
    "orderStatus":2,
    Image:{others}
  },{
    "name":"待收获",
    "orderStatus":3,
    Image:{received}
  }]
  this.setState({
    newData:data
  })
  export default data