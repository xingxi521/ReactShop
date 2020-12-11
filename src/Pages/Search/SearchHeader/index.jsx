import React from 'react'
import './index.less'
import SearchInput from '../../../Components/SearchInput'
export default class SearchHeader extends React.Component{
    clickBackHanderl = ()=>{
        window.history.back(-1);
    }
    render(){
        return(
            <div className='search-header-main'>
                <div className='header-main-left'>
                    <i onClick={ this.clickBackHanderl } className='iconfont'>&#xe654;</i>
                </div>
                <div className='search-header-main-center'>
                    <SearchInput history={ this.props.history }/>
                </div>
                <div className='search-header-main-right'></div>
            </div>
        )
    }
}