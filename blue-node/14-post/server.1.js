const express=require('express');
const bodyParser=require('body-parser');
const multer=require('multer');
const fs=require('fs');
const pathLib=require('path');

/* 先要传建一个multer 对象 */
var objMulter=multer({dest: './www/upload/'});

var server=express();

server.use(objMulter.any());


server.post('/',function (req,res) {
    console.log(req.files[0].path);

    // 改名,保证扩展名一样
    // 1.获取原始文件名
    var newName = req.files[0].path+pathLib.parse(req.files[0].originalname).ext;


    // 2.重命名 

    fs.rename(req.files[0].path,newName,function (err) {
        if(err)
            res.send("上传失败");
        else{
            res.send("成功");
        }
        
    })

})




server.listen(8080);

