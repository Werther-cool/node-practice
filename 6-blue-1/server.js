const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');

http.createServer(function (req,res) {

    var obj = urlLib.parse(req.url,true);

    var url = obj.pathname;
    const GET = obj.query;

    console.log(obj,url, GET);



}).listen(8081)