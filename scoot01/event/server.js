var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.on('conform',function (who) {
    console.log("给"+who+"揉肩");
})

life.emit('conform',"werther")

