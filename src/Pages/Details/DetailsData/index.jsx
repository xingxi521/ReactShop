/**
 * 详情页数据层，只负责数据逻辑
 */
import React from 'react'
import api from '../../../api'
import DetailsDataView from './DetailsDataView'//详情数据
import Swiper from '../../../Components/Swiper'//轮播
import DetailsBottom from './DetailsBottom'//底部导航
export default class DetailsData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shopData:{},
            commentData:[],
            hasMore:false,
            page:0
        }
    }
    componentDidMount(){
        //商品详情数据
        const shopId = this.props.shopid;
        api.details.detailsData(shopId).then((data)=>{
            this.setState({
                shopData:data
            });
        });
        //评论数据
        api.comment.commentData(shopId,0).then((data)=>{
            this.setState({
                commentData:this.state.commentData.concat(data.data),
                hasMore:data.hasMore
            });
        });
    }
    loadMoreData = ()=>{
        const shopId = this.props.shopid;
        api.comment.commentData(shopId,this.state.page+1).then((data)=>{
            this.setState({
                commentData:this.state.commentData.concat(data.data),
                hasMore:data.hasMore,
                page:this.state.page+1
            });
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.shopData.imgs?
                    <Swiper bannerData={ this.state.shopData.imgs }/>
                    :<div>图片数据正在加载中.....</div>
                }
                {
                    this.state.shopData.imgs && this.state.commentData.length>0?
                    <DetailsDataView shopdata = { this.state.shopData } commentdata = { this.state.commentData } hasmore={ this.state.hasMore } loadMoreHandler={this.loadMoreData} />
                    :<div>商品数据正在加载中.....</div>
                }
                <DetailsBottom history = { this.props.history } id = {this.props.shopid} />
            </div>
        )
    }
}