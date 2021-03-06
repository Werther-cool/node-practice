const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const mysql = require('mysql');
const common = require('./libs/common');

// 连接池
const db = mysql.createPool({ host: 'localhost', user: 'root', password: '123456', database:'blog'});

var server = express();
server.listen(8080);

// 1.解析cookie
server.use(cookieParser('aksdnfjkansf'));

// 2.使用session
var arr= [];
for (var i = 0; i < 100000; i++) {
    arr.push('keys_'+Math.random());
}

server.use(cookieSession({name:'zns_sess_id',keys : arr,maxAge:20*3600*1000}));

// 3.post数据
server.use(bodyParser.urlencoded({extended:false}));
server.use(multer({dest:'./www/upload'}).any());

// 4.配置模板引擎
// 输出什么东西
server.set('view engine','html');

server.set('views','./template');

server.engine('html', consolidate.ejs);

server.get('/',(req,res)=>{
    // 查询banner的东西
    db.query("SELECT * FROM banner_table",(err,data)=>{
        if (err) {
            console.log(err);
            res.status(500).send('database error').end();
        }else{
            res.banners = data;
            next();
        }
    })
});

server.get('/',(req,res,next)=>{
    db.query('SELECT ID,title,summery FROM article_table',(err,data)=>{
        if (err) {
            res.status(500).send('database error').end();
        }else{
            res.articles = data;
            next();
        }
    })
});

server.get('/',(req,res)=>{
    res.render('index.ejs',{banners:res.banners,articles:res.articles});
})

server.get('/article',(res,req)=>{
    if (req.query.id) {
        db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`,(err,data)=>{
            if (err) {
                res.statusCode(500).send('数据有问题').end();
            }else{
                var articleDate = data[0];
                articleDate.sDate = common.time2date(articleData.post_time);
                articleDate.content = articleData.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');

                res.render('conText.ejs',{
                    article_data:articleData
                })
            }
        })
    }else{
        res.statusCode(404).send('您请求的文章不存在').end();
    }
})


// static 数据
server.use(static('./www'));