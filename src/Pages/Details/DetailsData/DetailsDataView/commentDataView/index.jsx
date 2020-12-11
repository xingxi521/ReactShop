import React from 'react'
import Item from './Item'//列表组件
export default class CommentDataView extends React.Component{
    render(){
        const commentData = this.props.commentData;
        return(
            <div className='commentdata-view-main'>
                {
                    commentData.map((element,index)=>{
                        return <Item data = { element } key={index}/>
                    })
                }
            </div>
        )
    }
}