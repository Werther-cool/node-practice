'use strict';

// 导入http模块:
var http = require('http');

// 创建http server，并传入回调函数:
var server = http.createServer(function (request, response) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method + ': ' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>Hello world!</h1>');
});

// 让服务器监听8080端口:
server.listen(8081);
console.log('Server is running at http://127.0.0.1:8081/');


// 文件服务器
var url = require('url');

console.log(url.parse('http://user:pass@host.com:8081/path/to/file?query=string#hash'));

var path = require('path');

//解析当前目录
var workDir = path.resolve('.');

//组合当前路径
var filePath = path.join(workDir,'pub','index.html')


