import React from 'react'
import './index.less'
import { Link } from 'react-router-dom'
import SearchInput from '../../../Components/SearchInput'
export default class HomeHeader extends React.Component{
    render(){
        return(
            <div className='home-header'>
                <div className='home-header-left'>
                    <Link to='/citychoose'>
                        <span>{this.props.currenCity}</span>
                        <i className='iconfont'>&#xe731;</i>
                    </Link>
                </div>
                <div className='home-header-center'>
                    <SearchInput history = { this.props.history } />
                    <i className='iconfont'>&#xe74f;</i>
                </div>
                <div className='home-header-right'>
                    <Link to='/comment'>
                        <i className='iconfont'>&#xe618;</i>
                    </Link>
                </div>
            </div>
        )
    }
}