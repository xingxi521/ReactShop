import React from 'react'
import './index.less'
import logo from '../../../static/images/logo.png'
export default class LoginView extends React.Component{
    constructor(){
        super();
        this.state = {
            username:''
        }
    }
    clickLoginHanderl(){
        this.props.onLogin(this.state.username);
    }
    usernameHanderl(e){
        this.setState({
            username:e.target.value
        });
    }
    render(){
        return(
            <div className='login-main'>
                <div className='login-top'>
                    <img src={logo} alt=""/>
                </div>
                <div className='login-container'>
                    <input type="text" placeholder='用户名/手机号/邮箱' className='login-input' onChange={this.usernameHanderl.bind(this)}/>
                    <input type="text" placeholder='密码' className='login-input'/>
                    <button className='login-btn' onClick = {this.clickLoginHanderl.bind(this)} >登陆</button>
                </div>
            </div>
        )
    }
}