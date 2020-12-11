import React from 'react'
import './index.less'
export default class Header extends React.Component{
    clickBackHanderl = ()=>{
        window.history.back(-1);
    }
    render(){
        return(
            <div className='header-main'>
                <div className='header-main-left'>
                    <i onClick={ this.clickBackHanderl } className='iconfont'>&#xe654;</i>
                </div>
                <div className='header-main-center'>
                    <h1>{this.props.title}</h1>
                </div>
                <div className='header-main-right'></div>
            </div>
        )
    }
}