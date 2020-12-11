import React from 'react'
import './index.less'
export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currenIndex: 0
        }
    }
    /**
     * 设置表头选中状态的样式
     * @param {*} index 
     */
    setActiveClass(index) {
        return index === this.state.currenIndex ? 'activeLi' : ''//遍历传过来的索引跟当前索引相等时候就是高亮操作
    }
    /**
     * 设置内容显示或隐藏状态
     * @param {*} index 
     */
    setContentActiveClass(index){
        return index === this.state.currenIndex ? 'show' : 'hidden'//遍历传过来的索引跟当前索引相等时候就是高亮操作
    }
    /**
     * 切换tab方法
     */
    tabsClickHandler(index) {
        this.setState({
            currenIndex: index
        });
    }
    render() {
        return (
            <div  style={{marginBottom:"1rem"}}>
                <div className='tabs-header'>
                    <ul>
                        {
                            React.Children.map(this.props.children, (element, index) => {
                                return (
                                    <li className={this.setActiveClass(index)} onClick={this.tabsClickHandler.bind(this, index)}>{element.props.tabtitle}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='tabs-content'>
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            return (
                                <div className={this.setContentActiveClass(index)} >{ element.props.children }</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}