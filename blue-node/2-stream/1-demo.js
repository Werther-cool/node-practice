'use strict'

var fs = require('fs');

var rs = fs.createReadStream('sample.txt','utf-8');

rs.on('data',function (chunk) {
    console.log("data:")
    console.log(chunk); 
});

rs.on('end',function () {
    console.log("end");
});

rs.on('error',function (err) {
    console.log("error : " + err);    
});

var ws1 = fs.createWriteStream('output.txt','utf-8');
ws1.write('使用stream写入文本数据..\n');
ws1.write('end.');
ws1.end();

var ws2 = fs.createWriteStream('output2.txt','utf-8');
ws2.write(new Buffer('使用stream写入二级制数..\n','utf-8'));
ws2.write(new Buffer("end",'utf-8'));
ws2.end();

/* pipe */

var rs = fs.createReadStream('sample.txt','utf-8');
var ws = fs.createWriteStream('copy.txt','utf-8');

rs.pipe(ws);