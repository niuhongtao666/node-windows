const express=require('express');
const path=require('path');
const app=express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.get('/',(req,res)=>{
    let articles=[
        {id:1,title:'title1',author:'niu1'},
        {id:2,title:'title2',author:'niu2'},
        {id:3,title:'title3',author:'niu3'},
    ];
    res.render('index',{articles:articles});
});
app.get('/articles/new',(req,res)=>{
    res.render('new',{title:'Add article'});
});
app.listen(5000,()=>{
    console.log('服务启动');
});