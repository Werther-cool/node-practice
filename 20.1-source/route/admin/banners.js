const express = require('express');
const mysql = require('mysql');

var db = mysql.createPool({host:"localhost",user:'root',password:'123456',database:"learn"});

module.exports = function () {
  var router = express.Router();

  router.get('/',(req,res)=>{
    switch(req.query.act){
      case 'mod':
      db.query(`SELECT * FROM banner_table WHERE id=${req.query.id}`,(err,data)=>{
        if (err) {
          console.error(err);
          res.status(500).send('database error').end();
        }else if (data.length==0) {
          res.status(404).send('data not found').end();
        }else{
          db.query('SELECT * FROM banner_table',(err,banners)=>{
            if (err) {
              console.error(err);
              res.status(500).send('database error').end();
            }else{
              res.render('admin/banners.ejs',{banners,mod_data:data[0]});
            }
          })
        }
      });
      break;
      case 'del':
        db.query(`DELETE FROM banner_table WHERE ID=${req.query.id}`,(err,data)=>{
          if (err) {
              console.error(err);
              res.status(500).send('database error').end();
          }else{
            res.render('admin/banners.ejs',{banners});
          }
        });
      break;
    default:
        db.query('SELECT * FROM banner_table',(err,banners)=>{
          if (err) {
            console.error(err);
            res.status(500).send('database error').end();
          }else{
            res.render('admin/banners.ejs',{banners});
          }
        });
        break;
    }
  })
  
}