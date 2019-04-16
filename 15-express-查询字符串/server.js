var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    console.dir(req.query);
    // res.send('查询到的值是'+req.query.find);
});
app.get('/name/:name',(req,res)=>{
    res.send('name参数是'+req.params.name);
});
app.listen(3001);
console.log('服务启动');