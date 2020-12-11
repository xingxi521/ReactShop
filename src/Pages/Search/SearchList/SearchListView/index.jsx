import React from 'react'
import './index.less'
import Item from './Item'
export default class SearchListView extends React.Component{
    render(){
        const searchListData = this.props.searchData;
        return(
            <div className='search-view-main'>
                {
                    searchListData.map((element,index)=>{
                        return(
                            <Item itemData={element} key={index}/>
                        )
                    })
                }
            </div> 
        )
    }
}
