var express=require('express');
var fs=require('fs');
var bodyParser=require('body-parser');
var jsonType=bodyParser.json();
var formType=bodyParser.urlencoded({extended:false});
var app=express();
//NodeJS结合express框架使用ejs引擎模板如何修改默认模板文件夹views的路径
//https://blog.csdn.net/qq_40063745/article/details/112611841
app.set('view engine','ejs');
app.get('/form',(req,res)=>{
    // var file=fs.readFileSync(__dirname+'/form.html','utf-8');
    // res.send(file);
    var data={age:18,jobs:['teacher','actor','policeman']};
    // var person=req.query.person;
    // res.render('form',{person:person});
    res.render('form',{data:data});
});
app.get('/about',(req,res)=>{
    // var file=fs.readFileSync(__dirname+'/form.html','utf-8');
    // res.send(file);
    // var data={age:18,jobs:['teacher','actor','policeman']};
    // var person=req.query.person;
    // res.render('form',{person:person});
    res.render('about');
});
app.post('/json',jsonType,(req,res)=>{
    console.dir(req.body);
});
app.post('/formType',formType,(req,res)=>{
    console.dir(req.body);
});
app.listen(3001);
console.log('服务启动');