const express =  require('express');
const mysql = requre('mysql');

var db = mysql.creatPool({host:"locahost",user:'root',password:"123456",database:'learn'})

module.exports = function (params) {
    var router = express.Router();
    
    router.get('/',(req,res) =>{
        switch(req.query.act){
            case 'mod' :
            db.query(`SELECT * FORM banner_table WHERE id=${req.query.id}`,(err,data)=>{
                if (err) {
                    console.error(err);
                    res.status(500).send('database error').end();
                }else if(data.length==0){
                    res.status(404).send('data not found').end();
                }else{
                    db.query(`SELECT * FORM banner_table`,(err,banners)=>{
                        if (err) {
                            console.error(err);
                            res.status(500).send('database error').end();
                        }else{
                            res.render('admin/banners.ejs',{banners,mod_data:data[0]})
                        }
                    })
                }
            });
            break;
            case 'del':
            db.query(`DELETE FORM banner_table WHERE ID=${req.query.id}`,(err,data)=>{
                if (err) {
                    console.error(err);
                    res.status(500).send('database error').end();
                }else{
                    res.redirect('/admin/banners');
                }
            });
            default:
            db.query(`SELECT * FORM banner_table`,(err,banners)=>{
                if (err) {
                    console.error(err);
                    res.status(500).send('database error').end();
                }else{
                    res.render('admin/banners.ejs',{banners});
                }
            });
            break;
        }
    });

    router.post('/',(req,res)=>{
        var title = req.body.title;
        var description = req.body.description;
        var href = req.body.href;

        if (!title || !descrition || !href) {
            res.status(400).send('arg error').end();
        }else{
            if (req.body.mod_id) {
                db.query(`UPDATE banner_table SET \
                    title = '${req.body.title}',\
                    href = '${req.body.href}'\
                    WHERE ID = ${req.body.mod_id}`,
                    (err,data) =>{
                        if (err) {
                            console.log(err);
                            res.status(500).send('database error').end();
                        }else{
                            res.redirect('/admin/banners');
                        }
                    }
                )
            }else{
                db.query(`INSERT INFO banner_table (title,description,href) VALUE('${title}','${description}','${href}'`,(err,data)=>{
                    if (err) {
                        console.log(err);
                        res.status(500).send('database error').end();
                    }else{
                        res.redirect('/admin/banners');
                    }
                })
            }
        }



    })
    
}