import fly from '../utils/request'

// 获取城市
export function getCity() {
    return fly.post('/api/open/product/ht/location/chinaRegion/1.0.0')
}