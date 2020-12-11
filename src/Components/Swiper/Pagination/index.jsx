import React from 'react'
import './index.less'
export default class Pagination extends React.Component{
    render(){
        const PaginationArr = new Array(this.props.count);//把需要创建的圆点数新建一个数组用于map遍历生成出对应数量的圆点
        PaginationArr.fill(1);//填充新建出来的空数组
        return(
            <div className='pagination-main'>
                <ul>
                    {
                        PaginationArr.map((element,index)=>{
                            return <li key={index} className={ this.props.currenIndex === index ? 'selected' : '' }></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}