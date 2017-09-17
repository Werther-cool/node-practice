const ejs = require('ejs');

ejs.renderFile('./views/1.ejs',{name:"zy"},function (err,data) {
    if (err) {
        console.log("便以失败");
    }
    else{
        console.log(data);
    }
    
}) 


countdowm:function (timestamp){
    console.log(timestamp);
   var self = this;
   var timer = setInterval(function(){
   var nowTime = new Date();
   var endTime = new Date(timestamp * 1000);
   var t = endTime.getTime() - nowTime.getTime();
   if(t>0){
     var day = Math.floor(t/86400000);
     var hour=Math.floor((t/3600000)%24);
     var min=Math.floor((t/60000)%60);
     var sec=Math.floor((t/1000)%60);
     hour = hour < 10 ? "0" + hour : hour;
     min = min < 10 ? "0" + min : min;
     sec = sec < 10 ? "0" + sec : sec;
     var format = '';
     if(day > 0){
       format = `${day}天 ${hour}:${min}:${sec}`;
     }
     if( hour > 0 ){
       format = `0天 ${hour}:${min}:${sec}`;
     }
     if(hour <= 0){
       format =`0天 00:${min}:${sec}`;
     }
     self.timeLimit = format;
     console.log(1,format);
     }
    },1000);
  }