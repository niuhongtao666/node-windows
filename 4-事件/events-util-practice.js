var events=require('events');
var util=require('util');
var Work=function(arg){
    this.work=arg;
};
var zhangsan= new Work('teacher');
var lisi= new Work('artist');
util.inherits(Work,events.EventEmitter);
var all=[zhangsan,lisi];
all.forEach((every)=>{
    every.on('someEvent',(arg)=>{
        console.log(arg+'的职业是：'+every.work);
    });
});
zhangsan.emit('someEvent','zhangsan');
lisi.emit('someEvent','lisi');
/*
zhangsan的职业是：teacher
lisi的职业是：artist
*/