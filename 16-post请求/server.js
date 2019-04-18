var express=require('express');
var bodyParser=require('body-parser');
var app=express();
// app.get('/',(req,res)=>{
//     res.send('This is the home page');
// });
/*app.use(bodyParser.urlencoded({ extended: false }))
x-www-form-urlencoded
*/
var bodyParserUrl=bodyParser.urlencoded({extended:false});
var bodyParserJson=bodyParser.json();
app.post('/',bodyParserUrl,(req,res)=>{
    console.dir(req.body);
    res.send('ok'+req.body.name);
});
app.post('/json',bodyParserJson,(req,res)=>{
    console.dir(req.body);
    res.send('ok'+req.body.age);
});
app.listen(3001);
console.log('服务启动');