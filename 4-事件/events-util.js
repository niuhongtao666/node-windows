var events=require('events');
var util=require('util');
var person=function(name){
    this.name=name;
};
var zhangsan=new person('zhangsan');
var lisi=new person('lisi');
util.inherits(person,events.EventEmitter);
var persons=[zhangsan,lisi];
persons.forEach((everyPerson)=>{
    everyPerson.on('someEvent',(msg)=>{
        console.log(everyPerson.name+'的讯息是：'+msg);
    });
});
zhangsan.emit('someEvent','my name is zhangsan');
lisi.emit('someEvent','my name is lisi');
/*
zhangsan的讯息是：my name is zhangsan
lisi的讯息是：my name is lisi
*/