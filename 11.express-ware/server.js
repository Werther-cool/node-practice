const express = require('express');
const bodyPareser = require('body-parser');

var server = express();
server.listen(8081);

server.use('/',function (req,res,next) {
    console.log('a');
    next();
});

server.use('/',function (req,res,next) {
    console.log('b');
})
