var express=require('express');
var app=express();
var controllers=require(__dirname+'/controllers/controller');
controllers(app);
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));
app.listen(3001);
console.log('启动服务')