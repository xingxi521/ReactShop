import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.less'
export default class BottomNav extends React.Component{
    render(){
        return(
            <div className='bottom-nav'>
                <ul>
                    <li>
                        <NavLink exact to='/'>
                            <i className="iconfont">&#xe605;</i>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/shop'>
                            <i className="iconfont">&#xe609;</i>
                            <span>商城</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/life'>
                            <i className="iconfont">&#xe648;</i>
                            <span>生活服务</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/mine'>
                            <i className="iconfont">&#xe696;</i>
                            <span>我的</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}