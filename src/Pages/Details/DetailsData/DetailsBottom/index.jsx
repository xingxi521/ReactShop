/* eslint-disable eqeqeq */
import React from 'react'
import DetailsBottomView from './DetailsBottomView'//详情页底部导航的视图层
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as collectActions from '../../../../Actions/collect'
class DetailsBottom extends React.Component{
    constructor(){
        super();
        this.state = {
            isCollect:false
        }
    }
    componentDidMount(){
        const id = this.props.id;
        if(this.isCollect(id)){
            this.setState({
                isCollect:true
            });
        }
    }
    /**
     * 收藏方法
     */
    collectHandler(){
        const nickName = localStorage.getItem('nickName');
        const id = this.props.id;
        if(nickName != null && nickName != undefined){//判断是否处于登陆状态
            if(this.isCollect(id)){
                //取消收藏
                this.props.collectActions.cancelCollect({
                    id
                });
                this.setState({
                    isCollect:false
                });
            }else{
                //收藏
                this.props.collectActions.setCollect({
                    id
                });
                this.setState({
                    isCollect:true
                });
            }
        }else{
            this.props.history.push('/login');//跳转到登陆页面
        }
    }
    /**
     * 检测是否已经收藏方法
     */
    isCollect(id){
        const collectData = this.props.collectData;
        return collectData.some((element,index)=>{
            return element.id === id
        });
    }
    render(){
        return(
            <div>
                <DetailsBottomView collectEvent = { this.collectHandler.bind(this) } isCollect = { this.state.isCollect } />
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        collectData:state.collectData
    }
}
function mapDispatchToProps(dispatch){
    return{
        collectActions:bindActionCreators(collectActions,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsBottom)