const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

http.createServer(function (req,res) {
    //GET
    var obj = urlLib.parse(req.url,true);

    var url = obj.pathname;
    const GET = obj.query;

    //POST
    var str = '';
    req.on('data',function (data) {
        str+= data;
    });
    req.on('end',function (data) {
        const POST = querystring.parse(str);
        console.log(POST);
        var file_name = './www'+url;
        fs.readFile(file_name,function (err,data) {
            if (err) {
                console.log('404');
            }else{
                res.write(data);
            }
            res.end();
        })
    })
}).listen(8081);
