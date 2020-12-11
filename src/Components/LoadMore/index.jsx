import React from 'react'
export default class LoadMore extends React.Component{
    componentDidMount(){
        /**
         * 这里使用setTimeout是为了防抖而频繁发生请求
         */
        let timer = null;
        const _this = this;
        let container = this.props.container;
        window.onscroll = function(e){
            const clientheight = document.documentElement.clientHeight||document.body.clientHeight;//取视口高度
            const scrollheight = document.documentElement.scrollTop||document.body.scrollTop;//获取滚动条滚动的距离
            const searchDiv = document.querySelector(container);
            if(timer){//如果已经存在的，先把之前的清理了，防止堆叠
                clearTimeout(timer);
            }
            timer = setTimeout(function(){
                if(clientheight+scrollheight-60>searchDiv.offsetHeight){//视口高度+滚动条已经滚动的高度大于整个显示数据的div高度证明已经到底了，可以触发加载更多的方法了
                    _this.props.onLoadMore();
                }
            },100)
            
        }
    }
    componentWillUnmount(){
        //销毁组件时候清空一下滚动事件
        window.onscroll = null;
    }
    render(){
        return(
            <div style={{textAlign:'center',fontSize:'16px'}}>正在加载更多数据..</div>
        )
    }
}