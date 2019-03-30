var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    fs.createReadStream(__dirname+'/index.html').pipe(res);
}).listen(8003)