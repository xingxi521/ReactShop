import React from 'react'
import './index.less'
import touxiang from '../../../../../../static/images/touxiang.png'
import Star from '../../../../../../Components/Star'//评星组件
export default class Item extends React.Component{
    render(){
        const data = this.props.data;
        return(
            <div className='comment-item-main'>
                 <div className='comment-item-head'>
                     <img src={touxiang} alt=""/>
                     <div className='comment-item-userinfo'>
                        <span className='comment-item-username'>{data.username}</span>
                        <span className='comment-item-star'><Star count={data.star}/></span>
                     </div>
                 </div>
                 <div className='comment-item-content'>
                    {data.comment}
                 </div>
            </div>
        )
    }
}