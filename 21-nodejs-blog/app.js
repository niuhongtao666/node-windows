const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const app=express();
const bodyParser=require('body-parser');
const { check, validationResult } = require('express-validator/check');
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
    Article.find({},(err,articles)=>{
        if(err) throw err;
        res.render('articles/index',{articles:articles});
    })
});
let articles=require('./routes/articles');
app.use('/articles',articles);
app.listen(5000,()=>{
    console.log('服务启动');
});