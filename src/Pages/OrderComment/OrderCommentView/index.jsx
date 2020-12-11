import React from 'react'
import Item from './Item'
export default class OrderCommentView extends React.Component{
    render(){
        const data = this.props.data;
        return(
            <div style={{padding:'0.2rem'}}>
                {
                    data.map((element,index)=>{
                        return <Item data = { element } key={index} />
                    })
                }
            </div>
        )
    }
}