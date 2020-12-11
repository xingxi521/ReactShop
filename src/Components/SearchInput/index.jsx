import React from 'react'
import './index.less'
export default class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            values:''
        }
    }
    changeHandler(e){
        this.setState({
            values:e.target.value
        });
    }
    keyUpHandler(e){
        //回车判断
        if(e.keyCode===13){
            this.props.history.push('/search/'+this.state.values);
        }
    }
    render(){
        return(
            <div>
                <input type="text" 
                    placeholder = '搜索您想住的区域或小区' 
                    onChange = { this.changeHandler.bind(this) }
                    onKeyUp = { this.keyUpHandler.bind(this) }
                    className = 'search-input'
                />
            </div>
        )
    }
}