/* eslint-disable no-useless-constructor */
import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import Pagination from './Pagination'
import './index.less'
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currenIndex:0
        }
    }
    handleChangeIndex = (index)=>{
        this.setState({
            currenIndex:index
        });
    }
    render(){
        const bannerArr = this.props.bannerData;
        return(
            <div className='swiper-main'>
                <SwipeableViews onChangeIndex={this.handleChangeIndex}>
                    {
                        bannerArr.map((element,index)=>{
                            return(
                                <div key={index}>
                                    <img src={ element } alt=""/>
                                </div>
                            )
                        })
                    }
                </SwipeableViews>
                <Pagination count={ bannerArr.length } currenIndex={ this.state.currenIndex }/>
            </div>
        )
    }
}