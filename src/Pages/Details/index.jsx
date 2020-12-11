import React from 'react'
import Header from '../../Components/Header'//头部
import DetailsData from './DetailsData'//详情的数据组件
export default class Details extends React.Component{
    render(){
        return(
            <div>
                <Header title="" />
                <DetailsData shopid = { this.props.match.params.id } history = { this.props.history }/>
            </div>
        )
    }
}