import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/globalInit.less'//全局初始化样式
import './static/font/iconfont.css'
import AppRouter from './Router/AppRouter'//加载路由
import { Provider } from 'react-redux'
import configureStore from './Store'
const store = configureStore();
ReactDOM.render(
  <Provider store = { store }>
    <AppRouter/>
  </Provider>
  ,
  document.getElementById('root')
);

