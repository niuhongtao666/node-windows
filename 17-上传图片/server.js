var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var jsonType=bodyParser.json();
var formType=bodyParser.urlencoded({extended:false});
app.post('/json',jsonType,(req,res)=>{
    console.log('请求体的内容是');
    console.dir(req.body);
})
app.post('/form',formType,(req,res)=>{
    console.log('请求体的内容是');
    console.dir(req.body);
})
app.listen(3003);
console.log('服务启动');
