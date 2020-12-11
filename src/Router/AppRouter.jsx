import React from 'react'
import { Route,HashRouter,Switch } from 'react-router-dom'
import App from '../Pages/App'
//加载页面
import Home from '../Pages/Home'//首页
import Life from '../Pages/Life'//生活服务
import Shop from '../Pages/Shop'//商城
import Mine from '../Pages/Mine'//我的
import CityChoose from '../Pages/CityChoose'//城市选择定位
import Search from '../Pages/Search'//搜索页面
import Details from '../Pages/Details'//详情页
import Login from '../Pages/Login'//登陆页面
import Comment from '../Pages/OrderComment'//登陆页面
import NotFound from '../Pages/NotFound'//404找不到页面
export default class AppRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App path='/'>
                    <Switch>
                        <Route exact path='/' component={ Home }></Route>
                        <Route path='/shop' component={ Shop }></Route>
                        <Route path='/life' component={ Life }></Route>
                        <Route path='/Mine' component={ Mine }></Route>
                        <Route path='/citychoose' component={ CityChoose }></Route>
                        <Route path='/search/:searchtext' component={ Search }></Route>
                        <Route path='/details/:id' component={ Details }></Route>
                        <Route path='/login' component={ Login }></Route>
                        <Route path='/comment' component={ Comment }></Route>
                        <Route path='*' component={ NotFound }></Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}