const express=require('express');
const common = require('../libs/common');
const mysql = require('mysql');

var db = mysql.createPool({host:'localhost',user:'root',password:'123456',database:'blog'});

module.exports=function (){
  var router=express.Router();


  //检查登录状态
  router.use((req, res, next)=>{
    if(!req.session['admin_id'] && req.url!='/login'){ //没有登录
      res.redirect('/admin/login');
    }else{
      next();
    }
  });

  router.post('/login',(req,res)=>{
    var username = req.body.username;
    var password = common.md5(req.body.passwor+common.MD5_SUFFIX);

    db,query(`SELECT * FROM admin_table WHERE username='${username}'`,(err,data)=>{
      if (err) {
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        if (data.length==0) {
          res.status(400).send('no this admin').end();
        }else{
          if (data[0].password==password) {
            // 成功
            res.session['admin_id'] = data[0].ID;
            res.redirect('/admin/');
          }else{
            res.status(400).send('this.password is incorrect').end();
          }
        }
      }
    })

  })


  router.get('/login', (req, res)=>{
    res.render('admin/login.ejs', {});
  });


  return router;
};
