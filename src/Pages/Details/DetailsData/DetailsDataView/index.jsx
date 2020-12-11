/* eslint-disable react/jsx-no-undef */
import React from 'react'
import './index.less'
import Tabs from '../../../../Components/Tabs'
import CommentDataView from './commentDataView'//评论视图组件
import LoadMore from '../../../../Components/LoadMore'
export default class DetailsDataView extends React.Component{
    render(){
        const shopData = this.props.shopdata;
        const commentData = this.props.commentdata;
        return(
            <Tabs>
                <tabpane tabtitle='房间信息'>
                    <div className='details-main'>
                        <h1 className='details-title'>{shopData.title}</h1>
                        <div className='details-center'>
                            <ul>
                                <li>
                                    <span className='details-price'>{`${shopData.price}元/月`}</span>
                                    <span className='details-zhujin'>租金</span>
                                </li>
                                <li>
                                    <span className='details-price'>{shopData.info.type}</span>
                                    <span className='details-zhujin'>房型</span>
                                </li>
                                <li>
                                    <span className='details-price'>{shopData.houseType}</span>
                                    <span className='details-zhujin'>面积</span>
                                </li>
                            </ul>
                        </div>
                        <div className='details-bottom'>
                            <ul>
                                <li>楼层: {shopData.info.level}</li>
                                <li>装修: {shopData.info.style}</li>
                            </ul>
                            <ul>
                                <li>类型: {shopData.info.type}</li>
                                <li>朝向: {shopData.info.orientation}</li>
                            </ul>
                            <ul>
                                <li>年代: {shopData.info.years}</li>
                            </ul>
                        </div>
                    </div>
                </tabpane>
                <tabpane tabtitle='评论数据'>
                    <CommentDataView commentData = { commentData } />
                    {
                        this.props.hasmore ?
                        <LoadMore onLoadMore = { this.props.loadMoreHandler } container=".commentdata-view-main"/>
                        :<div>没有数据了...</div>
                    }
                </tabpane>
        </Tabs>
        )
    }
}