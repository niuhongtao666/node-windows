var express=require('express');
var app=express();
var indexRouter=require('./routes/index');
var usersRouter=require('./routes/users');
var jobsRouter=require('./routes/jobs');
app.use('/assets',express.static('public'));
// app.use((req,res,next)=>{
//     console.log('first middleware');
//     next();
// });
// app.use('/home',(req,res,next)=>{
//     console.log('home middleware');
//     // next();
//     res.send('home');
// });
// app.get('/',(req,res,next)=>{
//     res.send('ok');
// });
app.use('/',indexRouter);
app.use('/users',usersRouter);
app.use('/jobs',jobsRouter);
app.listen(3002);
console.log('服务启动');