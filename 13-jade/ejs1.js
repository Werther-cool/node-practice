const ejs = require('ejs');

ejs.renderFile('./views/1.ejs',{name:"zy"},function (err,data) {
    if (err) {
        console.log("便以失败");
    }
    else{
        console.log(data);
    }
    
}) 
