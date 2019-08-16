//引入mobx
import { observable , action} from 'mobx'
import { getCity , address } from '../../server/city'
import regeneratorRuntime from '../../utils/runtime'
console.log(regeneratorRuntime,'regeneratorRuntime')
export default class city {
    //@observable 修饰符
    @observable myCity = [];//城市
    //@action 修饰方法
    @action getCity = async () => {
        const data = await getCity()
        console.log(data.result.htLocationVoList)
        this.myCity = data.result.htLocationVoList
    }
    //增加收货地址
    @action address = async (params) => {
        console.log(params,'params...')
        const data = await address(params) 
        console.log(data,'addres.data............')
    }
}