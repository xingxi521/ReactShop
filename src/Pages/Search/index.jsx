import React from 'react'
import SearchHeader from './SearchHeader'//头部组件
import SearchList from './SearchList'//搜索列表组件
export default class Search extends React.Component{
    render(){
        const searchText = this.props.match.params.searchtext;
        return(
            <div>
                <SearchHeader history = { this.props.history }/>
                <SearchList context = { searchText }/>
            </div> 
        )
    }
}
