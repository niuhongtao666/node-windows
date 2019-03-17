var events=require('events');
var myEmitter= new events.EventEmitter();
myEmitter.on('someEvent',(arg)=>{
    console.log(arg);
});
myEmitter.emit('someEvent','arg is here');