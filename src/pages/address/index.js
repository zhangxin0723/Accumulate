import Taro, { Component } from '@tarojs/taro'
import { View , Picker } from '@tarojs/components'
import { inject , observer } from '@tarojs/mobx'
import './index.scss'
import xiayibu from '../../img/下一步.svg'
import { AtForm, AtSwitch } from 'taro-ui'

@inject('city')
@observer

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
        value: false,
        selector: [],
        selectorChecked: ['所在地区'],
        label:['家','公司','学校','其他'],
        ind:0
    }
  }
  config = {
    navigationBarTitleText: '收货地址'
  }

  componentWillMount () { }

  componentWillReact () {
    
  }

  componentDidMount () { 
     console.log(this.props.city.getCity(),'333333')
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { } 
  handleChange = value => {
    this.setState({ value })
  }
  //城市
  onChange(e) {
    this.setState({
      selectorChecked: `${e.detail.value[0]},${e.detail.value[1]},${e.detail.value[2]}`
    })
  }
  //标签
  labelBtn(index) {
    this.setState({
      ind: index
    })
  }
  render () {
    this.props.city && this.props.city.myCity.map(item => {
        this.state.selector.push(item.name)
    })
    return (
      <View className='wrap'>
        <View className='main'>
            <View className='name'>
                <input type="text" placeholder='收货人' />
                <Image src={xiayibu} />
            </View>
            <View className='phone'>
                <input type="text" placeholder='手机号码' />
                <Image src={xiayibu} />
            </View>
            <View className='region'>
                <View className='picker'>
                  <Picker mode='region' range={this.state.selector}  onChange={this.onChange}>
                    <View className='picker'>
                        {this.state.selectorChecked }
                    </View>
                  </Picker>
                </View>
                <Image src={xiayibu} />
            </View>
            <View className='detailedness'>
                <textarea placeholder="详细地址：如道路,门牌号,小区,楼栋号,单元室等"  rows="3" type="text" />
            </View>
        </View>
        <View className='conter'>
            <span>标签</span>
            <View className='conter_cont'>
                {
                  this.state.label.map((item,index) => {
                      return <View 
                      onClick={() => this.labelBtn(index)} 
                      className={this.state.ind === index ? 'cont_all active' : 'cont_all'}
                      key={item}>{item}
                      </View>
                  })
                }
            </View>
            <View className='conter_footer'>
                <View className='cont_default'>设为默认地址</View>
                <View className='indicate' >
                    <AtForm>
                        <AtSwitch checked={this.state.value} onChange={this.handleChange} />
                    </AtForm>
                </View>
            </View>
        </View>
        <View className='footer_bt'>
            <View className='delete'>删除收货信息</View>
            <View className='save'>保存</View>
        </View>
      </View>
    )
  }
}

export default Index 
