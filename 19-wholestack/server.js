const express = require('express');
const static = require('express-static');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const expressRoute = require('express-route');
 
var server = express();
server.listen(8080);

// 1 获取请求数据
// get自带
server.use(multerObj.any());


// 2. cookie,session
server.use(cookieParser());
(function () {
    var key = [];
    for(var i = 0;i<100000;i++){
        keys[i]='a_'+Math.random();
    }
    server.use(cookieSession({
        name:'sess_id',
        keys:keys,
        maxAge:20*60*1000
    }))
    
})

// 3. 模板
server.engine('html',consolidate.ejs);
server.set