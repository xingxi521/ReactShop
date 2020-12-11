/* eslint-disable eqeqeq */
import React from 'react'
import LoginView from './LoginView'
export default class Login extends React.Component{
    loginHandler(user){
        //正常情况下，这里就发送网络请求登陆了，然后返回一数据回来，但是现在没连数据就直接模拟登陆成功把返回的token写入到本地储存
        if(user!=""){
            localStorage.setItem('nickName',user);
        }
        window.history.back(-1);
    }
    render(){
        return(
            <div>
                <LoginView onLogin={ this.loginHandler.bind(this) }/>
            </div>
        )
    }
}