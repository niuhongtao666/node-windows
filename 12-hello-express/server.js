var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    res.send('This is the homepage');
});
app.listen(3000);
console.log('listening to port 3000');