import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '分享页'
  }

  componentWillMount () {
    const info = {
      "pid": 37253,
      "basePid": 37085,
      "cid": 270,
      "cName": null,
      "bid": 15121,
      "bName": null,
      "title": "【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶",
      "shortTitle": "BY-HEALTH 汤臣倍健 牛乳钙片压片糖果 60片/瓶",
      "description": null,
      "importType": 3,
      "origin": "",
      "unitMeasure": null,
      "unitMeasureValue": null,
      "weight": 0,
      "barCode": "",
      "country": "中国",
      "isFreeShipping": 0,
      "isPresell": 0,
      "isFreeTax": 1,
      mainImgUrl: "http://haitao.nos.netease.com/e7e0936a25764af6b31fba26f311c4c11525954376593jh0hu4ig13297.jpg",
      "mainImgWidth": null,
      "mainImgHeight": null,
      "isSelf": 1,
      "isNew": 1,
      "isHot": 0,
      "isRecommend": 0,
      "deliveryCode": 0,
      "productType": 0,
      "marketPrice": 98.00,
      "supplyPrice": 44.00,
      "wholesalePrice": 0.00,
      "salesPrice": 59.00,
      "storePrice": 98.00,
      "commissionAmount": 0.00,
      "isSowing": 0,
      "sowingPrice": 0.00,
      "originalPid": 0,
      "productAscription": 1,
      "sstid": null,
      "limitedNumber": -1,
      "state": 1,
      "authState": 1,
      "userIdentity": 2,
      "uid": 51,
      "uName": null,
      "usiid": 0,
      "swid": 51,
      "settlementMethod": 1,
      "deductionPoints": 0,
      "productionDateStr": null,
      "productionDate": null,
      "sortId": 1000,
      "totalSales": 0,
      "customerService": "kefuchannelimid_719280",
      "createTime": 1555563891000,
      "updateTime": 1561459552000,
      "productStatisticsVo": null,
      "productPictureVoList": null,
      "supplierProductPictureVoList": [{
        "ppid": 686204,
        "pid": 37253,
        "imgType": 1,
        "imgUrl": "http://haitao.nos.netease.com/e7e0936a25764af6b31fba26f311c4c11525954376593jh0hu4ig13297.jpg",
        "imgWidth": null,
        "imgHeight": null,
        "sortId": 1,
        "state": 1,
        "createTime": 1555563892000,
        "updateTime": 1555583277000
      }, {
        "ppid": 686205,
        "pid": 37253,
        "imgType": 1,
        "imgUrl": "http://haitao.nos.netease.com/1a2258a19de84c938a95cde3ea88e5331525954377012jh0hu4u413298.jpg",
        "imgWidth": null,
        "imgHeight": null,
        "sortId": 2,
        "state": 1,
        "createTime": 1555563892000,
        "updateTime": 1555583277000
      }, {
        "ppid": 686206,
        "pid": 37253,
        "imgType": 1,
        "imgUrl": "http://haitao.nos.netease.com/76bd5456369c43438655b43e88b6a20e1525954377917jh0hu5ja13299.jpg",
        "imgWidth": null,
        "imgHeight": null,
        "sortId": 3,
        "state": 1,
        "createTime": 1555563892000,
        "updateTime": 1555583277000
      }],
      "estimatedTax": 0,
      "warehouseVo": null,
      "shippingTemplatesVo": null,
      "supplierProductSkuVoList": [{
        "skuKey": "3fc66ce52418393b2b1ba2d81d1ecb56",
        "pid": 37253,
        "uid": 51,
        "supplierSkuId": "20011732490",
        "skuName": "默认",
        "store": 4,
        "marketPrice": 98.00,
        "supplyPrice": 44.00,
        "wholesalePrice": 0.00,
        "salesPrice": 59.00,
        "storePrice": 98.00,
        "commissionAmount": 0.00,
        "attributeValueJson": "[{\"aid\":1,\"aname\":\"规格\",\"pid\":37253,\"valueVo\":{\"aid\":1,\"pid\":37253,\"vid\":1,\"vname\":\"默认\"}}]",
        "swid": 11133,
        "state": 1,
        "barCode": "",
        "createTime": 1555924728000,
        "updateTime": 1562119774000,
        "pids": null,
        "object": null,
        "splitOrder": null,
        "taxRate": 0.0000
      }],
      "productSeckillInfoVoList": null,
      "seckillProductInfoVoList": null,
      "productGroupInfoVoList": null,
      "attributeNameVoList": null,
      "buyNum": null,
      "discountAmount": null,
      "memberDiscountPrice": 7.45,
      "vipPrice": 51.55,
      "earnMoney": 7.45,
      "seckillEarnMoney": null,
      "skuKey": null,
      "seckillStartTime": null,
      "seckillEndTime": null,
      "productSkuVo": null,
      "shareUrl": "https://h5.jinaup.com/pc/productInfoDetail.html?pid=37253&fromInviteCode=2TWHAR5",
      "xcxShareUrl": "/pages/go2detail/main?id=37253&fromInviteCode=2TWHAR5",
      "xcxFriendShareUrl": "https://h5.jinaup.com/pc/productInfoDetail.html?pid=37253&fromInviteCode=2TWHAR5",
      "cooperationType": 1,
      "totalStock": 4,
      "seckillPrice": null,
      "originalPrice": null,
      "periodValue": null,
      "purchaserName": null
    }

    const userInfo = {
      avtar: 'http://haitao.nos.netease.com/1a2258a19de84c938a95cde3ea88e5331525954377012jh0hu4u413298.jpg',
      codea:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565880380181&di=49e15aad07473675700a6edb4742ca15&imgtype=0&src=http%3A%2F%2Fpic22.nipic.com%2F20120725%2F2034846_182639007392_2.jpg',
      nickName: '默默许愿...',
      lipstick:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566475168&di=f9eda45939b2715868575d048743998c&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.11665.com%2Fimg04_p%2Fi4%2FTB16JSfFFXXXXXIbpXXXXXXXXXX_%21%210-item_pic.jpg',
      image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565880578795&di=611a01dc938acc7b96a674a8b6658e19&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F13%2F20180513224039_tgfwu.png',
      code: 'C5JSKWUU2888',
      title: "【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶【天然乳钙 易吸收】汤臣倍健 牛乳钙片压片糖果 60片/瓶",
      vipPrice: '￥51.55',
      skuName: "长按识别图中二维码",
      
    }

    // 开始绘制分享图片
    // 1.获取实例
    var contex = wx.createCanvasContext('share')
    var avatarurl_width = 50;    //绘制的头像宽度
    var avatarurl_heigth = 50;   //绘制的头像高度
    var avatarurl_x = 10;   //绘制的头像在画布上的位置
    var avatarurl_y = 30;   //绘制的头像在画布上的位置

 contex.beginPath(); //开始绘制
    //先画个圆   前两个参数确定了圆心 （x,y） 坐标  第三个参数是圆的半径  四参数是绘图方向  默认是false，即顺时针
    // contex.arc(avatarurl_width / 2 + avatarurl_x, avatarurl_heigth / 2 + avatarurl_y, avatarurl_width / 2, 0, Math.PI * 2, false);

    // contex.clip();//画好了圆 剪切  原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内 这也是我们要save上下文的原因
    
    contex.drawImage(userInfo.image, avatarurl_x, avatarurl_y, avatarurl_width, avatarurl_heigth); // 推进去图片，必须是https图片   
    //文字
    contex.setFillStyle('#5D9AFC');
    contex.setFontSize(14);
    contex.fillText(userInfo.nickName, 72, 43);//默默许愿

    contex.setFillStyle('#000');
    contex.fillText('分享给你一个商品', 72+contex.measureText(userInfo.nickName).width, 43)//分享给你一个商品
   
    contex.fillText(`邀请码: ${userInfo.code}`, 72, 66);//邀请码

    contex.drawImage(userInfo.lipstick, 0, 90,300, 300); // 详情图
    //详情页
    contex.setFillStyle('#000');
    contex.setFontSize(14);
    contex.fillText(userInfo.title,10,420)
    //价格
    contex.setFillStyle('red');
    contex.setFontSize(30);
    contex.fillText(userInfo.vipPrice,10,490)
    //识别图中二维码(文字)
    contex.setFillStyle('#999da2');
    contex.setFontSize(13);
    contex.fillText(userInfo.skuName,10,520)
    //二维码
    contex.drawImage(userInfo.codea, 220, 440,90, 90);
    contex.restore(); //恢复之前保存的绘图上下文 恢复之前保存的绘图上下午即状态 还可以继续绘制
    contex.draw(); //可将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中
   
   
  }

  render () {
     return <div>
       <canvas canvas-id="share" style="width: 414px; height: 736px;"></canvas>
     </div>
  }
}

export default Index