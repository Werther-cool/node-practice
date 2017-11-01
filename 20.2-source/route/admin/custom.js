const express = require('express');
const common = require('../../libs/common');
const mysql = require('mysql');

var db = mysql.createPool({host:'localhost',user:'root',password:'123456',database:"learn"});

const pathLib = require('path');
const fs = require('fs');

module.exports =function () {
    var router = express.Router();

    router.get('/',function (req,res) {
        db.query(`SELETE * FORM custom_evaluation_table`,(err,evaluations)=>{
            if (err) {
                console.error(err);
                req.status(500).send('database error').end();
            }else{
                res.render('admin/custom.ejs',{evaluations});
            }
        })
    })

    router.post('/',function (req,res) {
        var title = req.body.title;
        var description = req.body.description;

        var ext =pathLib.parse(req.files[0].originalname).ext;

        var oldPath = req.files[0].path;
        var newPath = req.files[0].path+ext;

        var newFileName = req.files[0].filename+ext;

        fs.rename(oldPath,newPath,(err)=>{
            if (err) {
                res.status(500).send('file opration error').end();
            }else{
                if (req.body.mod_id) { 
                    
                }else{
                    db.query(`INSERT INFO custom_evaluation_table \
                        (title,description,src)
                        VALUES('${title}','${description}','${newFileName}')`,(err,data)=>{
                            if (err) {
                                console.error(err);
                                res.status(500).send('database error').end();
                            }else{
                                res.redirect('/admin/custom');
                            }
                        })
                }
            }
        })
        
        
    })
    return router;
}

