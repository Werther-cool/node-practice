'use strict'

var fs = require('fs');

var data = "hello123";
var data2 = "writeFileSync";

fs.writeFile('output.txt',data,function (err) {
    if (err) {
        console.log(err);
    }else{
        console.log('ok');

    }
})
fs.writeFileSync('output.txt', data2);

