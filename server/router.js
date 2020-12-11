var express = require('express');
var router = express.Router();
var config = require('./config');
var hotProductData = require('./Data/hotProduct');//热门数据
var oftenProductData = require('./Data/oftenProduct');//常用数据
var searchData = require('./Data/search');//搜索数据
var detailsData = require('./Data/details');//详情页数据
var commentData = require('./Data/comment');//评论页数据
var orderData = require('./Data/order');//订单评论数据
var url = require('url');
/**
 * 热门数据接口
 */
router.get(config.hotProduct,function(req,res){
    var cityname = url.parse(req.url,true).query.cityname;
    console.log('热门需要显示是：'+cityname+',的数据');
    res.send(hotProductData);
});
/**
 * 常用数据
 */
router.get(config.oftenProduct,function(req,res){
    var cityname = url.parse(req.url,true).query.cityname;
    console.log('常用需要显示是：'+cityname+',的数据');
    res.send(oftenProductData);
});
/**
 * 搜索接口
 */
router.get(config.search,function(req,res){
    var cityname = url.parse(req.url,true).query.cityname;
    var searchText = url.parse(req.url,true).query.searchtext;
    var page = url.parse(req.url,true).query.page;
    console.log('(搜索接口)-城市：'+cityname+',搜索内容：'+searchText+',页码：'+page);
    res.send(searchData);
});
/**
 * 详情页接口
 */
router.get(config.details,function(req,res){
    var id = url.parse(req.url,true).query.id;
    console.log("(详情页接口)-请求的商品ID："+id);
    res.send(detailsData);
});
/**
 * 评论数据接口
 */
router.get(config.comment,function(req,res){
    var id = url.parse(req.url,true).query.id;
    var page = url.parse(req.url,true).query.page;
    console.log("(评论数据接口)-请求的商品ID："+id+',页码：'+page);
    res.send(commentData);
});
/**
 * 订单评论数据接口
 */
router.get(config.order,function(req,res){
    var username = url.parse(req.url,true).query.username;
    console.log("(订单评论数据)-请求的用户名："+username);
    res.send(orderData);
})
module.exports = router;