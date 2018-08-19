'use strict'

var fs = require('fs');

fs.stat('sample.txt',function(err,stat){
    if (err) {
        console.log(err);
    } else {
        console.log('isFile : '+stat.isFile());

        console.log('isDirecory : '+stat.isDirectory());

        if (stat.isFile()) {
            console.log("size"+stat.size);
            console.log("brith time"+stat.birthtime);
            console.log('modified time'+stat.mtime);
        }
    }
})