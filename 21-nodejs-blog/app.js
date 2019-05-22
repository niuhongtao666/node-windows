const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const app=express();
const bodyParser=require('body-parser');
let Article=require('./models/article.js');
const session=require('express-session');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
mongoose.connect('mongodb://localhost/nodejs-blog',{useNewUrlParser:true});
let db=mongoose.connection;
db.once('open',function(){
    console.log('Connect to MongoDB');
});
db.on('error',function(err){
    if(err) throw err;
});
app.use(session({
    secret:'creazy cat',
    resave: false,
    saveUninitialized: true,
}));
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
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
app.get('/article1/:id',(req,res)=>{
    Article.findById(req.params.id,(err,article)=>{
        res.render('show',{article:article});
    });
});
app.get('/article/:id/edit',(req,res)=>{
    Article.findById(req.params.id,(err,article)=>{
        res.render('edit',
        {
            article:article,
            title:'Edit Article'
        });
    });
});
app.post('/articles/create',(req,res)=>{
    let articles=new Article(req.body);
    articles.save((err,data)=>{
        if(err) throw err;
        req.flash("success", "Artticle Add");
        res.redirect('/');
    })
});
app.post('/articles/update/:id',(req,res)=>{
    let query={_id:req.params.id};
    Article.update(query,req.body,(err,data)=>{
        if(err) throw err;
        req.flash("success", "Artticle Update");
        res.redirect('/');
    })
});
app.delete('/article/delete/:id',(req,res)=>{
    let query={_id:req.params.id};
    Article.deleteOne(query,(err)=>{
        if(err) throw err;
    });
    res.send('success');
});
app.listen(5000,()=>{
    console.log('服务启动');
});