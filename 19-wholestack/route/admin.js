const express = require('express');

module.exports = function () {
    var router = express.Router();
    
    router.get('/',(req,res)=>{
        res.send('我是admin').end();
    })
    
    return router;

}

