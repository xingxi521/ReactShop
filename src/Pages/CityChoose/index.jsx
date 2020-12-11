import React from 'react'
import CityHeader from '../../Components/Header'//头部组件
import CitySelect from 'react-city-select';
import cityData from './cityjson.json';
import iconSrc from '../../static/images/icon.png';
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux' 
import * as cityActions from '../../Actions/city'
class CityChoose extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // 结构化城市列表数据
            citysData: cityData.indexCitys,
            // 对某项数据定制化配置
            config: {
                pos: {
                    icon: iconSrc, // 游标图标
                    title: '定位城市',
                },
                hot: {
                    title: '热门城市',
                    key: '热门',
                    style: 'grid', // 展示形式（ line || grid）
                }
            }
        };

    }
    componentDidMount(){
        cityData.indexCitys.pos[0].name = this.props.cityData.currenCity||localStorage.getItem('currenCity')||'北京';
        this.setState({
            cityData:cityData
        });
    }
    handleSelectCity(rescityData) {
        cityData.indexCitys.pos[0].id = rescityData.id;
        cityData.indexCitys.pos[0].name = rescityData.name;
        console.log('选中数据项:', rescityData);
        this.setState({
            cityData:cityData
        });
        this.props.cityActions.update_city({
            currenCity:rescityData.name
        });
        localStorage.setItem('currenCity',rescityData.name);
        window.history.back(-1);
    }
    render(){
        return(
            <div>
                <CityHeader title="城市选择"/>
                <CitySelect
                // 传入数据
                data={this.state.citysData}
                // 传入配置
                config={this.state.config}
                // 传入回调
                onSelectItem={this.handleSelectCity.bind(this)}>
                </CitySelect>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        cityData:state.cityData
    }
}
function mapDispatchToProps(dispatch){
    return{
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityChoose)