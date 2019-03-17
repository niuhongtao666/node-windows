var events=require('events');
var myEmitter=new events.EventEmitter();
myEmitter.on('someEvent',function(arg){
    console.log(arg);
});
myEmitter.emit('someEvent','my name is James');