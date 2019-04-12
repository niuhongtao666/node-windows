var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    var obj={
        name:'lisi',
        age:21
    };
    var ip=req.ip;
    var method=req.method;
    res.send(method);
});
app.listen(3001);
console.log('服务启动');