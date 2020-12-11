/* eslint-disable eqeqeq */
import React from 'react'
import CommentHeader from '../../Components/Header'//头部
import OrderCommentView from './OrderCommentView'//视图层
import api from '../../api'
export default class Comment extends React.Component{
    constructor(){
        super();
        this.state = {
            orderComment:[]
        }
    }
    componentWillMount(){
        const nickName = localStorage.getItem('nickName');
        if(nickName != null && nickName != undefined){//判断是否处于登陆状态
            api.order.orderData(nickName).then((data)=>{
                this.setState({
                    orderComment:data
                })
            })
        }else{
            this.props.history.push('/login');
        }
    }
    render(){
        return(
            <div style={{backgroundColor:'#f1f1f1'}}>
                <CommentHeader title = '我的评价' />
                {
                    this.state.orderComment.length > 0 ?
                    <OrderCommentView data = {this.state.orderComment} />
                    :<div>订单数据正在加载中.....</div>
                }
                
            </div>
        )
    }
}