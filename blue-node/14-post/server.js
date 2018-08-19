const express=require('express');
const static=require('express-static');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
/* bodyparser 只能解析数据 不能解析post文件  application/x-www-form-urlencoded这种格式 */
const bodyParser=require('body-parser'); 
/* 处理multipart/form-data */
const multer=require('multer');
const ejs=require('ejs');
const jade=require('jade');


var server = express();

server.listen(8080);

// 解析cookie
server.use(cookieParser('sdsdfasfdfsad'));

// 使用session
var arr=[];
for(var i=0;i<10000;i++){
    arr.push('keys_'+Math.random());
}
server.use(cookieSession({name:'zns_sess_id',keys:arr,maxAge:20*3600*1000}));

// 用户请求
server.use('/',function (req,res,next) {
    console.log(req.query,req.body,req.files,req.cookies,req.session);
    
})

// static数据
server.use(static('./www'));