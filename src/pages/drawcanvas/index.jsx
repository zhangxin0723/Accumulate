// export default Index 
import Taro, { Component } from '@tarojs/taro'
// 引入对应的组件
import { View, Text, Button, Canvas } from '@tarojs/components'
import './index.scss'
import regeneratorRuntime from '../../utils/runtime'
console.log(regeneratorRuntime, 'regeneratorRuntime')
// export default class Index extends Component {

//   config = {
//     navigationBarTitleText: '分享'
//   }

//   /**
//   * 初始化信息
//   */
//   constructor () {
//     this.state = {
//       // 用户信息
//       userInfo: {},
//       // 是否展示canvas
//       isShowCanvas: false
//     }
//   }

//   /**
//    * getUserInfo() 获取用户信息
//    */
//   getUserInfo (e) {
//     if (!e.detail.userInfo) {
//       Taro.showToast({
//         title: '获取用户信息失败，请授权',
//         icon: 'none'
//       })
//       return
//     }
//     this.setState({
//       isShowCanvas: true,
//       userInfo: e.detail.userInfo
//     }, () => {
//       // 调用绘制图片方法
//       this.drawImage()
//     })
//   }

//   /**
//    * drawImage() 定义绘制图片的方法
//    */
//   async drawImage () {
//     // 创建canvas对象
//     let ctx = Taro.createCanvasContext('cardCanvas')

//     // 填充背景色
//     let grd = ctx.createLinearGradient(0, 0, 1, 500)
//     grd.addColorStop(0, '#1452d0')
//     grd.addColorStop(0.5, '#FFF')
//     ctx.setFillStyle(grd)
//     ctx.fillRect(0, 0, 400, 500)

//     // // 绘制圆形用户头像
//     let { userInfo } = this.state
//     let res = await Taro.downloadFile({
//       url: userInfo.avatarUrl
//     })
//     ctx.save()
//     ctx.beginPath()
//     // ctx.arc(160, 86, 66, 0, Math.PI * 2, false)
//     ctx.arc(160, 88, 66, 0, Math.PI * 2)
//     ctx.closePath()
//     ctx.clip()
//     ctx.stroke()
//     ctx.translate(160, 88)
//     ctx.drawImage(res.tempFilePath, -66, -66, 132, 132)
//     ctx.restore()

//     // 绘制文字
//     ctx.save()
//     ctx.setFontSize(20)
//     ctx.setFillStyle('#FFF')
//     ctx.fillText(userInfo.nickName, 70, 200)
//     ctx.setFontSize(16)
//     ctx.setFillStyle('black')
//     // ctx.fillText('~~~~~~~~', 50, 240)
//     ctx.restore()

//     // 绘制二维码
//     let qrcode = await Taro.downloadFile({
//       url: 'https://upload-images.jianshu.io/upload_images/3091895-f0b4b900390aec73.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/258/format/webp.jpg'
//     })
//     ctx.drawImage(qrcode.tempFilePath, 70, 260, 180, 180)

//     // 将以上绘画操作进行渲染
//     ctx.draw()
//   }

//   /**
//    * saveCard() 保存图片到本地
//    */
//   async saveCard () {
//     // 将Canvas图片内容导出指定大小的图片
//     let res = await Taro.canvasToTempFilePath({
//       x: 0,
//       y: 0,
//       width: 400,
//       height: 500,
//       destWidth: 360,
//       destHeight: 450,
//       canvasId: 'cardCanvas',
//       fileType: 'png'
//     })
//     let saveRes = await Taro.saveImageToPhotosAlbum({
//       filePath: res.tempFilePath
//     })
//     if (saveRes.errMsg === 'saveImageToPhotosAlbum:ok') {
//       Taro.showModal({
//         title: '图片保存成功',
//         content: '图片成功保存到相册了，快去发朋友圈吧~',
//         showCancel: false,
//         confirmText: '确认'
//       })
//     } else {
//         Taro.showModal({
//         title: '图片保存失败',
//         content: '请重新尝试!',
//         showCancel: false,
//         confirmText: '确认'
//       })
//     }
//   }

//   render () {
//     let { isShowCanvas } = this.state
//     return (
//       <View className='index'>
//         <Button onGetUserInfo={this.getUserInfo} openType="getUserInfo" type="primary" size="mini">打卡</Button>
//         {/* 使用Canvas绘制分享图片 */}
//         {
//           isShowCanvas && 
//             <View className="canvas-wrap">
//               <Canvas 
//                 id="card-canvas"
//                 className="card-canvas"
//                 style="width: 320px; height: 450px"
//                 canvasId="cardCanvas" >
//               </Canvas>
//               <Button onClick={this.saveCard} className="btn-save" type="primary" size="mini">保存到相册</Button>
//             </View> 
//         }
//       </View>
//     )
//   }
// }


export default class Index extends Component {

  config = {
    navigationBarTitleText: '分享'
  }
  componentDidMount() {

  }

  render() {
    const userInfo = {
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565865455694&di=3412f7c18825a2c6c36d76051a176c9c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201709%2F03%2F20170903220751_iCncy.thumb.700_0.jpeg',
      name: '张鑫...'
    };
    const qrCode = 'https://upapi.jinaup.com/static/image/QRCode.png';
    const toBase64 = 'https://upapi.jinaup.com/api/open/product/image/to/base64/1.0.0';
    const info = {
      result: {
        "pid": 37253,
        "basePid": 37085,
        "cid": 270,
        "cName": null,
        "bid": 15121,
        "bName": null,
        "title": "内含哈密瓜味月饼5个、凤梨味5个、蛋黄香芋味月饼3个、蛋黄红豆味月饼3个",
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
        mainImgUrl: "https://jnup.oss-cn-beijing.aliyuncs.com/product/a911cc3d771d0cef5fca95e441976a3e.jpg",
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
      },
      "message": "成功",
      "systemTime": 1562912526734,
      "res_code": 1
    };
    // 获取canvas
    var context = wx.createCanvasContext('canvas');
    // 绘制白色背景
    context.rect(0, 0, 320, 520);
    // 绘制用户名和头像
    context.drawImage(userInfo.avatar, 0, 0, 800, 800, 20, 12, 60, 60);

    context.save();
    context.setFillStyle('#5D9AFC');
    context.setFontSize(12);
    context.fillText(userInfo.name, 80, 26)
    context.setFillStyle('#000');
    context.fillText("分享给你一个商品",80+context.measureText(userInfo.name).width,26)
    context.fillText(`邀请码: zxzzzzzzzzxxxxxxxxxx`, 80, 46)
    context.restore();

    //大图
    context.drawImage(userInfo.avatar, 0, 0, 800, 800, 10, 80, 400, 400);
    context.save();

    //标题
    context.setFontSize(18);
    context.fillText(info.result.title, 14, 360)

    //价钱
    context.setFillStyle('#f00');
    context.setFontSize(20);
    context.fillText('￥360', 14, 440)

    context.setFillStyle('#000');    
    context.setFontSize(15);
    context.fillText('￥999', 180, 440)

    //分享二维码
    context.setFillStyle('#000');    
    context.setFontSize(10);
    context.fillText('长按识别二维码', 16, 470)

    //二维码
    context.drawImage(qrCode, 0, 0, 800, 800, 260, 400, 100, 100);


    // // 计算多行文本，自动换行
    // let row = 0, pos = 0;
    // for (let i = 0; i < info.result.title.length; i++) {
    //   let str = info.result.title.slice(pos, i);
    //   if (context.measureText(str).width > 266 && context.measureText(str).width < 280) {
    //     context.fillText(info.result.title.slice(pos, i), 20, 350 + 15 * row);
    //     row++;
    //     pos = i;
    //   }
    // }
    // if (pos < info.result.title.length) {
    //   context.fillText(info.result.title.slice(pos, info.result.title.length), 20, 350 + 15 * row);
    // }
    // context.restore();
    // // 拿到图片的宽高
    // wx.getImageInfo({
    //   src: info.result.mainImgUrl, //图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径,
    //   complete: res => {
    //     console.log('res...', res);
    //     let rx, ry, rw, rh;
    //     if (res.width / res.height > 220 / 260) {
    //       ry = 0;
    //       rh = res.height;
    //       rw = res.height / 260 * 220;
    //       rx = (res.width - rw) / 2;
    //     } else {
    //       rx = 0;
    //       rw = res.width;
    //       rh = res.height / 220 * 260;
    //       ry = (res.height - rh) / 2;
    //     }
    //     context.drawImage(info.result.mainImgUrl, 0, 0, res.width, res.height, 50, 80, 220, 260);
    //     context.draw(true, () => {
    //       // 生成图片
    //       wx.canvasToTempFilePath({
    //         canvasId: 'canvas',
    //         quality: 1,
    //         fileType: 'jpg',
    //         complete: res => {
    //           console.log('tmpFile...', res);
    //           // 预览一下
    //           wx.previewImage({
    //             urls: [res.tempFilePath] //需要预览的图片链接列表,
    //           });
    //           // 保存到本地
    //         }
    //       })
    //     });
    //   }
    // });
    // // 绘制二维码
    // context.save();
    // context.setFontSize(15);
    // context.fillText('长按识别二维码访问', 20, 480);
    // context.restore();
    // context.drawImage(qrCode, 0, 0, 1000, 1000, 200, 400, 90, 90);
    // // 绘制商品价格
    // context.save();
    // context.setFontSize(10);
    // context.setFillStyle('#ff0000');
    // context.fillText('￥', 20, 450);
    // context.setFontSize(18);
    // context.fillText(info.result.salesPrice, 30, 450);
    // context.setFontSize(10);
    // context.setFillStyle('#999');
    // // info.result.marketPrice = '88888.888888';
    // context.fillText(`￥${info.result.marketPrice}`, 155 - context.measureText(`￥${info.result.marketPrice}`).width, 450);
    // context.restore();
    context.draw();
    return (
      <View className='index'>
        <canvas style="width: 100%; height: 100%; background:#fff" canvas-id="canvas"></canvas>
        {/* <canvas style="width: 320px; height: 520px;" canvas-id="canvas"></canvas> */}
      </View>
    )
  }
}
