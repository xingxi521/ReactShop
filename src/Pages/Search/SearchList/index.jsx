/* eslint-disable eqeqeq */
import React from 'react'
import api from '../../../api'
import { connect } from 'react-redux'
import SearchListView from './SearchListView'//搜索列表视图层
import LoadMore from '../../../Components/LoadMore'//加载更多组件
class SearchList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchData:[],
            hasMore:false,
            page:0
        }
    }
    componentDidMount(){
        const cityname = this.props.cityData.currenCity||localStorage.getItem('currenCity')||'北京';
        const searchText = this.props.context;
        if(cityname){
            this.http(cityname,searchText,0);//刚进来肯定页码肯定是0的
        }
    }
    componentDidUpdate(prevProps, prevState){
        /**
         * 再次搜索
         */
        const searchText = this.props.context;
        const cityname = this.props.cityData.currenCity||localStorage.getItem('currenCity')||'北京';
        if(searchText==prevProps.context){//判断是否和上次搜索的内容一样，一样就不搜索了
            return;
        }
        this.http(cityname,searchText,0);//新的一次搜索肯定页码肯定也是0
    }
    /**
     * 封装http
     * @param {*} cityname 
     * @param {*} searchText 
     */
    http(cityname,searchText,page){
        api.search.searchData(cityname, searchText,page).then((data) => {
            this.setState({
                searchData:this.state.searchData.concat(data.data),
                hasMore:data.hasMore,
                page:page
            });
        });
    }

    loadMoreHandler = ()=>{
        const cityname = this.props.cityData.currenCity||localStorage.getItem('currenCity')||'北京';
        const searchText = this.props.context;
        if(cityname){
            this.http(cityname,searchText,this.state.page+1);
        }
    }
    componentWillUnmount(){
        this.setState = (state,callback)=>{
            return;
        }
    }
    render(){
        const data = this.state.searchData;
        return(
            <div>
                {
                    data?
                    <SearchListView searchData = { data } />
                    :<div>数据正在加载，请稍后....</div>
                }
                {/* 
                    正常情况下，滚动到底后，向后端发送请求，请求下一段数据，然后如果后端那边处理完发现没数据可查了就返回一个字段，前端
                    来判断这个字段true或者false，然后true就是没数据了，false代表还有数据，并且数据也会一同返回过来
                */}
                {
                    this.state.hasMore?
                    <LoadMore onLoadMore = { this.loadMoreHandler } container=".search-view-main"/>
                    :
                    <div>没有数据了...</div>
                }
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        cityData:state.cityData
    }
}
export default connect(
    mapStateToProps
)(SearchList)