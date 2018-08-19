const express = require('express');

var server = express();

// 目录一 /user
var routeUser = express.Router();

routeUser.get('/1.html',function(req,res){
    res.send('user1');
});

routeUser.get('/2.html',function(req,res){
    res.send('user2222');
})

server.use('/user',routeUser);

var articleRouter = express.Router();

server.use('/article',articleRouter);

articleRouter.get('/10001.html', function (req, res) {
    res.send('asdasd');
});

// var articleRouter = express.Router();
// server.use('/article', articleRouter);

// articleRouter.get('/10001.html', function (req, res) { //http://xxxx.com/article/10001.html
//     res.send('asdfasdfasdf');
// });



server.listen(8080);