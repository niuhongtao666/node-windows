var express=require('express');
var app=express();
var fs=require('fs');
var bodyParser=require('body-parser');
var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })
var createFolder = function(folder){
    try{
        fs.accessSync(folder); 
    }catch(e){
        fs.mkdirSync(folder);
    }  
};

var uploadFolder = './upload/';

createFolder(uploadFolder);
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadFolder)
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

var bodyJson=bodyParser.json();
app.post('/json',bodyJson,(req,res)=>{
    console.dir(req.body);
});
app.post('/upload', upload.single('logo'),(req,res)=>{
    console.dir(req.file);
    res.send({'ret_code':0});
});
app.get('/test',(req,res)=>{
    res.send(req.query.find);
});
app.get('/form',(req,res)=>{
  var form=fs.readFileSync('./upload.html',{encoding:'utf-8'});
  res.send(form);
});
app.listen(3002);
console.log('服务启动');