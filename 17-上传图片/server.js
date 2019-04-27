var express=require('express');
var app=express();
var fs=require('fs');
var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })
var bodyParser=require('body-parser');
var jsonType=bodyParser.json();
var formType=bodyParser.urlencoded({extended:false});
var createFolder = function(folder){
    try{
        fs.accessSync(folder); 
    }catch(e){
        fs.mkdirSync(folder);
    }  
};

var uploadFolder = './uploadMore';
createFolder(uploadFolder);
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadFolder)
    },
    filename: function (req, file, cb) {
        console.dir(file);
      cb(null, file.originalname);
    }
  })
var upload = multer({ storage: storage })
app.post('/json',jsonType,(req,res)=>{
    console.log('请求体的内容是');
    console.dir(req.body);
})
app.post('/form',formType,(req,res)=>{
    console.log('请求体的内容是');
    console.dir(req.body);
})
app.get('/formFile',(req,res)=>{
    console.log('成功读取表单html');
    var formfile=fs.readFileSync('./formFile.html',{encoding:'utf-8'});
    res.send(formfile);
})
app.post('/upload',upload.single('logo'),formType,(req,res)=>{
    res.send('已经上传图片到文件夹');
})
app.listen(3003);
console.log('服务启动');
