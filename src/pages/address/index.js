import Taro, { Component } from '@tarojs/taro'
import { View , Picker , Input , Textarea} from '@tarojs/components'
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
        ind:0,
        consignee:'', //收货人
        phone:'', //手机号
        Text:'',  //详细地址
        labels:'', //标签
        num:1, //默认
        provinceId:'',//省
        cityId:'', //市
        areaId:'', //区
        provinceName:'',
        cityName:'',
        areaName:''
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
    console.log(value,'value...')
    if(value === true) {
      this.setState({ 
        num:0
      })
    } else {
      this.setState({
        num:1
      })
    }
    
  }
  //城市
  onChange(e) {
    console.log(e,'e厂....')
    this.setState({
      selectorChecked: `${e.detail.value[0]},${e.detail.value[1]},${e.detail.value[2]}`
    })
    this.props.city && this.props.city.myCity.map(item => {
      this.setState({
        provinceId :item.id
      })
      item.htLocationVoList.forEach(i=>{
        this.setState({
          cityId :i.id
        })
        i.htLocationVoList.forEach(it=>{
          this.setState({
            areaId :it.id
          })
        })
      })   
    })
  }
  //标签
  labelBtn(item,index) {
    console.log(item)
    this.setState({
      ind: index,
      labels:item
    })
  }
  //保存
  save() {
    // this.setState({
    //   provinceName:this.state.selectorChecked.split(',')[0],
    //   cityName:this.state.selectorChecked.split(',')[1],
    //   areaName:this.state.selectorChecked.split(',')[2]
    // })
    // console.log(this.state.selectorChecked.split(',')[0],'123....')
    let { consignee , phone , provinceId , cityId , areaId , Text , labels , num , provinceName , cityName ,areaName} = this.state
    this.props.city.address({
      provinceId,
      cityId,
      areaId,
      consignee,
      consigneePhone:phone,
      address:Text,
      addressTag:labels,
      state:num,
      provinceName:this.state.selectorChecked.split(',')[0],
      cityName:this.state.selectorChecked.split(',')[1],
      areaName:this.state.selectorChecked.split(',')[2]
    })
  }
  onchangeinput(e) {
    this.setState({
      consignee:e.target.value
    })
  }
  onchangeinputPhone(e) {
    this.setState({
      phone:e.target.value
    })
  }
  onchangeinputText(e) {
    this.setState({
      Text:e.target.value
    })
  }
  render () {
    this.props.city && this.props.city.myCity.map(item => {
        // console.log(item.htLocationVoList,'item....')
        this.state.selector.push(item.name)
    })
    return (
      <View className='wrap'>
        <View className='main'>
            <View className='name'>
                <Input type="text" 
                placeholder='收货人'
                value={this.state.consignee}
                onChange={(e) => this.onchangeinput(e)} 
                />
                <Image src={xiayibu} />
            </View>
            <View className='phone'>
                <Input type="text" 
                placeholder='手机号码'
                value={this.state.phone}
                onChange={(e) => this.onchangeinputPhone(e)}
                 />
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
                <Textarea 
                 placeholder="详细地址：如道路,门牌号,小区,楼栋号,单元室等"  
                 rows="3" 
                 type="text" 
                 value={this.state.Text}
                 onBlur={(e) => this.onchangeinputText(e)}
                 />
            </View>
        </View>
        <View className='conter'>
            <span>标签</span>
            <View className='conter_cont'>
                {
                  this.state.label.map((item,index) => {
                      return <View 
                      onClick={() => this.labelBtn(item,index)} 
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
            <View className='save' onClick={() => this.save()}>保存</View>
        </View>
      </View>
    )
  }
}

export default Index 
