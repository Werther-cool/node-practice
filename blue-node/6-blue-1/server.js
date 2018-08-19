const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');

http.createServer(function (req,res) {

 /*    var obj = urlLib.parse(req.url,true);

    var url = obj.pathname;
    const GET = obj.query;

    console.log(obj,url, GET); */
    var str = ''; 
    var i = 0;
    req.on('data',function (data) {
        console.log(`第${i++}次收到数据`);
        str+=data;
    })
    req.on('end',function () {
        var POST = querystring.parse(str);
        console.log(POST);
    })
}).listen(8081)