/* eslint-disable no-useless-constructor */
import React from 'react'
import BottomNav from '../../Components/BottomNav'//底部导航
import HomeHeader from './HomeHeader'//头部
import Swiper from '../../Components/Swiper'//轮播图
import ProductShow from './ProductShow'
import banner1 from '../../static/images/banner1.png'
import banner2 from '../../static/images/banner2.png'
import banner3 from '../../static/images/banner3.png'
import { connect } from 'react-redux'
class Home extends React.Component{
    render(){
        const bannerArr = [banner1,banner2,banner3,banner1,banner2,banner3];
        const currenCity = this.props.cityData.currenCity;
        return(
            <div>
                {
                    currenCity?//等数据加载完出来再传给组件，防止出现undefined
                    <div>
                        <HomeHeader currenCity = { currenCity } history = { this.props.history } />
                        <Swiper bannerData={ bannerArr }/>
                        <ProductShow currenCity = { currenCity }/>
                        <BottomNav/>
                    </div>
                    :<div>数据正在加载..</div>
                }
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        cityData:state.cityData
    }
}
export default connect(
    mapStateToProps
)(Home)