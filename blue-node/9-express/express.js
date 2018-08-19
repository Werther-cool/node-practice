const express = require('express');
const expStatic = require('express-static');

var server = express();
server.listen(8081);

server.use(expStatic('./www'));