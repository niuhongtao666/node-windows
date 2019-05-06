var express=require('express');
var app=express();
function log(req,res,next){
    console.log('请求的方法是'+req.method);
    next();
}
function deal(req,res){
    if(req.url=='/'){
        res.send('this is the homepage');
    }else if(req.url=='/about'){
        res.send('this is the aboutpage');
    }
}
app.use(log);
app.use(deal);
app.listen(3000);
console.log('服务启动');