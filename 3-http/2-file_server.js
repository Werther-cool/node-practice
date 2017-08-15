'use strict'

var 
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

    // 从命令行参数获取root目录，默认是当前目录:
    var root = path.resolve(process.argv[2] || '.' );

    // console.log('path :' + path);
    // console.log("process : " + process.argv[2]);
    console.log('Static root dir : '+ root);

    // 创建服务器
    var server = http.createServer(function (request,response) {
        // 获得URL的path，类似 '/css/bootstrap.css':
        var pathname = url.parse(request.url).pathname;
        // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
        var filepath = path.join(root,pathname);
       
        // 获取文件状态
        fs.stat(filepath,function (err,stats) {
            // 没有出错并且文件存在:
            if (!err && stats.isFile()) {
                // 发送200相应
                console.log('200'+request.url);
                //将文件流向response
                fs.createReadStream(filepath).pipe(response);
            } else {
                // 出错了或者文件不存在
                console.log('404 '+ request.url);

                response.writeHead(404);

                response.end('404 not find')
            }
        })
    })
    // 让服务器监听8080端口:
    server.listen(8081);

    console.log('Server is running at http://127.0.0.1:8080/');