// export default Index 
import Taro, { Component } from '@tarojs/taro'
// 引入对应的组件
import { View } from '@tarojs/components'
import './index.scss'
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  /**
  * 初始化信息
  */
  constructor () {
    this.state = {
        
    }
  }
  componentWillMount() {
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
      nickName: 'AL...... ',
      code: 'C5JSKWUU2888',
      Url:'https://upapi.jinaup.com/static/image/QRCode.png'
    }
    // 1.获取实例
    var context = wx.createCanvasContext('share')

    // 2.绘制头像和昵称
    context.drawImage(userInfo.avtar, 0, 0, 800, 800, 20, 33, 37.5, 37.5);
    context.save();

    context.setFillStyle('#5D9AFC');
    context.setFontSize(14);
    context.fillText(userInfo.nickName, 72, 43);

    context.setFillStyle('#000');
    context.fillText('分享给你一个商品', 72+context.measureText(userInfo.nickName).width, 43)

    context.fillText(`邀请码: ${userInfo.code}`, 72, 66);

    // 3.绘制商品详情
    context.restore();

    context.drawImage(info.mainImgUrl,0 , 0 , 800 , 800 , 20 , 90 , 377.5 , 325)
    context.setFillStyle('#000');
    context.setFontSize(20);
    context.fillText(info.title,15,445)

    context.setFillStyle('red');
    context.fillText(`¥ ${info.marketPrice}`,20,510);

    context.setFillStyle('#000');
    // 4.绘制二维码
    context.setFontSize(10);
    context.fillText('长按识别二维码访问',20,550);
    context.drawImage(userInfo.Url, 0 , 0 , 800 , 800 , 300 , 510 , 100 , 100)
    context.draw();
  }

  render () {
    return (
      <View className='index'>
           <canvas
              style="width: 414px; height: 736px;"
              canvas-id="share"
            >
            </canvas>
      </View>
    )
  }
}
export default Index