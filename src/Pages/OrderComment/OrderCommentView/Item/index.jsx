/* eslint-disable eqeqeq */
import React from 'react'
import './index.less'
export default class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            commentState:0
        }
        this.commentText = React.createRef();
    }
    componentDidMount(){
        this.setState({
            commentState:this.props.data.commentState
        });
    }
    /**
     * 点击评价按钮
     */
    commentClickHandler(){
        this.setState({
            commentState:1
        });
    }
    /**
     * 提交评论
     */
    submitHandler(){
        const text = this.commentText.current.value;
        if(text!=''){
            this.setState({
                commentState:2
            });
        }else{
            alert('您还没输入评价内容呢！');
        }
          
    }
    /**
     * 取消提交
     */
    cancelHandler(){
        this.setState({
            commentState:0
        });  
    }
    render(){
        const itemData = this.props.data;
        return(
            <div className='order-comment-main'>
                <div className='order-comment-left'>
                    <img src={itemData.img} alt=""/>
                </div>
                <div className='order-comment-right'>
                    <p>{itemData.title}</p>
                    <p>{itemData.houseType}</p>
                    <p className='order-price'>￥{itemData.price}</p>
                    <p>购买时间:{itemData.buyTime}</p>
                    <p className='order-comment-p'>
                        {
                            this.state.commentState==0?
                            <button className='order-btn-on' onClick={ this.commentClickHandler.bind(this) }>评价</button>
                            :this.state.commentState==1?
                            <button className='order-btn-on' disabled>评价中</button>
                            :<button className='order-btn-off' disabled>已评价</button>
                        }
                    </p>
                </div>
                {
                    this.state.commentState==1?
                    <div className="comment-text-container">
                        <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref={this.commentText}></textarea>
                        <button className="comment-text-btn" onClick={ this.submitHandler.bind(this) }>提交</button>
                        &nbsp;
                        <button className="btn comment-text-btn" onClick={ this.cancelHandler.bind(this) }>取消</button>
                    </div>
                    :""
                }
            </div>
        )
    }
}