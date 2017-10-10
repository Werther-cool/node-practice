const mysql = require('mysql');

var db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"user_test"
})

db.query("SELECT * FROM `user_table`;",(err,data)=>{
    if (err) {
        console.log('出错了',err);
    }else{
        console.log('成功了',data);
    }
}) 

// 数据库 指令 测试
SELECT * FROM students GROUP BY CLASS