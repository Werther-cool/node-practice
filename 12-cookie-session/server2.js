const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();

//cookie
server.use(cookieParser("zsadsdas"));

server.use('/',function (req,res) {
    req.secret="zsadsdas";
    res.cookie('user','blue',{signed:true});

    console.log("签名cookie:",req.signedCookies);
    console.log('无签名cookie:',req.cookies);

    res.send('ok');
})

server.listen(8081); 

