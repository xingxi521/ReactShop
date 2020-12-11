import React from 'react'
import './index.less'
import {Link} from 'react-router-dom' 
export default class DetailsBottomView extends React.Component{
    render(){
        return(
            <div className='details-bottom-main'>
                <div className='details-bottom-left'>
                    <ul>
                        <li>
                            <Link to='/'>
                                <i className='iconfont'>&#xe605;</i>
                                <span>首页</span>
                            </Link>
                        </li>
                        <li onClick={ this.props.collectEvent }>
                            {
                                this.props.isCollect?
                                <i className='iconfont iscollect'>&#xe63b;</i>
                                :<i className='iconfont nocollect'>&#xe63b;</i>
                            }
                            
                            <span>收藏</span>
                        </li>
                        <li>
                            <i className='iconfont'>&#xe661;</i>
                            <span>购物车</span>
                        </li>
                    </ul>
                </div>
                <div className='details-bottom-right'>
                    <button className='details-bottom-buycar'>加入购物车</button>
                    <button className='details-bottom-buy'>立即购买</button>
                </div>
            </div>
        )
    }
}