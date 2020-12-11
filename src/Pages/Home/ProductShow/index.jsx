/* eslint-disable no-useless-constructor */
import React from 'react'
import api from '../../../api'
import ProductShowView from './ProductShowView'//产品展示组件的view层
export default class ProductShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hotProductData:[],
            oftenProductData:[]
        }
    }
    componentDidMount(){
        const currenCity = this.props.currenCity;
        api.hotProduct.hotProductData(currenCity).then((data)=>{
            this.setState({
                hotProductData:data
            });
        });
        api.oftenProduct.oftenProductData(currenCity).then((data)=>{
            this.setState({
                oftenProductData:data
            });
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.hotProductData.length>0 ? 
                    <ProductShowView showData={ this.state.hotProductData } title={'热销产品'} />
                    :<div>数据正在加载，请稍后</div>
                }
                {
                    this.state.oftenProductData.length>0 ? 
                    <ProductShowView showData={ this.state.oftenProductData } title={'家庭常用'} />
                    :<div>数据正在加载，请稍后</div>
                }
            </div>
        )
    }
}