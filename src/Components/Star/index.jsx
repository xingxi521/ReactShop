import React from 'react'
import './index.less'
export default class Star extends React.Component{
    render(){
        let starCount = this.props.count;
        if(starCount > 5){
            starCount = 5;
        }else if(starCount < 0){
            starCount = 0;
        }
        return(
            <div className='star-container'>
                {
                    [1,2,3,4,5].map((element,index)=>{
                        let setClassName = starCount >= element ? 'light' :'';
                        return(
                            <i key={index} className={`iconfont ${setClassName}`}>&#xe63b;</i>
                        )
                    })
                }
            </div>
        )
    }
}