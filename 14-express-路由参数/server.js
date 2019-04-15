var express=require('express');
var app=express();
app.get('/profile/:id/:name',(req,res)=>{
    console.dir(req.params);
    res.send('my router params is'+req.params.id);
});
app.get('/profile?uu',(req,res)=>{
    res.send('my router url is'+req.url);//my router url is/profileuu
});
app.listen(3003);
console.log('服务启动');