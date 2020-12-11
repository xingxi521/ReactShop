/**
 * 一级路由，做一些全局初始化操作
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cityActions from '../Actions/city'
class App extends React.Component{
    componentDidMount(){
        //这里可以做当前城市的初始化，可以由定位等方法获取出城市然后定位，这里测试的话就写死了
        this.props.cityActions.init_city({
            currenCity:this.props.cityData.currenCity||localStorage.getItem('currenCity')||'北京'
        });
    }
    render(){
        return(
            <div>
                { this.props.children }
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
)(App)
