var express=require('express');
var app=express();
app.use('/assets',express.static('public'));
app.use((req,res,next)=>{
    console.log('first middleware');
    next();
});
app.use('/home',(req,res,next)=>{
    console.log('home middleware');
    // next();
    res.send('home');
});
// app.get('/',(req,res,next)=>{
//     res.send('ok');
// });
app.listen(3002);
console.log('服务启动');