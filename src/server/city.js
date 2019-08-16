import fly from '../utils/request'

// 获取城市
export function getCity() {
    return fly.post('/api/open/product/ht/location/chinaRegion/1.0.0')
}
//增加收货地址
export function address(params) {
    return fly.post('/api/open/user/address/addAddress/1.0.0',params)
}