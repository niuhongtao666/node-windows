const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const app=express();
const bodyParser=require('body-parser');
const { check, validationResult } = require('express-validator/check');
let Article=require('./models/article.js');
const session=require('express-session');
const passport=require('passport'); 
const config=require('./config/database');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug'); 
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
require('./config/passport')(passport);
app.use(session({
    secret:config.secret,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.get('*',function(req,res,next){
    res.locals.user=req.user || null;
    next();
});
mongoose.connect(config.database,{useNewUrlParser:true});
let db=mongoose.connection;
db.once('open',function(){
    console.log('Connect to MongoDB');
});
db.on('error',function(err){
    if(err) throw err;
});
app.get('/',(req,res)=>{
    Article.find({},(err,articles)=>{
        if(err) throw err;
        res.render('articles/index',{articles:articles});
    })
});
let articles=require('./routes/articles');
let users=require('./routes/users');
app.use('/articles',articles);
app.use('/users',users);
app.listen(5000,()=>{
    console.log('服务启动');
});