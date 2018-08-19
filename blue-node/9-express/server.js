const express = require('express');
const exStatic = require('express-static');

var server = express();
server.listen(8081);

var users={
    'blue': '123456',
    'zhangsan': '654321',
    'lisi': '987987'
}



server.get('/login',function (req,res) {
    var user = req.query['user'];
    var pass = req.query['pass'];

    if (users[user]==null) {
        res.send({'ok':false,msg:'此用户不存在'});
    }else if(users[user]!=pass){
        res.send({'ok':false,msg:'用户名或者密码错误'});
    }else  {
        res.send({'ok':true,msg:'成功'});
    }
});
server.use(exStatic('./www'));