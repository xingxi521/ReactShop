import React from 'react'
import './index.less'
import {Link} from 'react-router-dom'
export default class ProductShowView extends React.Component{
    render(){
        //console.log(this.props.showData);
        const showData = this.props.showData;
        return(
            <div className='productshow-main'>
                <h1>{this.props.title}</h1>
                <div className='productshow-box'>
                    <ul>
                        {
                            showData.map((element,index)=>{
                                return (
                                    <li key={element.id}>
                                        <Link to={`/search/${element.title}`}>
                                            <img src={ element.img } alt=""/>
                                            <h2>{ element.title }</h2>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}