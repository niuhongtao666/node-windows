const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const app=express();
const bodyParser=require('body-parser');
let Article=require('./models/article.js')
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.use(bodyParser.urlencoded({extended:false}));
mongoose.connect('mongodb://localhost/nodejs-blog',{useNewUrlParser:true});
let db=mongoose.connection;
db.once('open',function(){
    console.log('Connect to MongoDB');
});
db.on('error',function(err){
    if(err) throw err;
});
app.get('/',(req,res)=>{
    // let articles=[
    //     {id:1,title:'title1',author:'niu1'},
    //     {id:2,title:'title2',author:'niu2'},
    //     {id:3,title:'title3',author:'niu3'},
    // ];
    Article.find({},(err,articles)=>{
        if(err) throw err;
        res.render('index',{articles:articles});
    })
});
app.get('/articles/new',(req,res)=>{
    res.render('new',{title:'Add article'});
});
app.post('/articles/create',(req,res)=>{
    let articles=new Article(req.body);
    articles.save((err,data)=>{
        if(err) throw err;
        res.redirect('/');
    })
});
app.listen(5000,()=>{
    console.log('服务启动');
});