import React from 'react'
import './index.less'
import { Link } from 'react-router-dom'
export default class Item extends React.Component{
    render(){
        const itemData = this.props.itemData;
        return(
            <div className='search-item-main'>
                <Link to={`/details/${itemData.id}`}>
                    <div className='search-item-left'>
                        <img src={itemData.img} alt=""/>
                    </div>
                    <div className='search-item-right'>
                        <p className='item-name'>{itemData.title}</p>
                        <p className='item-type'>{itemData.houseType}</p>
                        <div className='search-item-price'>
                            <span className='item-price-type'>{itemData.rentType}</span>
                            <span className='item-price-money'>{itemData.price}/月</span>
                        </div>
                    </div>
                </Link>
            </div> 
        )
    }
}
