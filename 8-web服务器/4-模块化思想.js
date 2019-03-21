var fs=require('fs');
var http=require('http');
var startServer=function(){
    http.createServer((req,res)=>{
        console.log(req)
        if(req.url=='/'||req.url=='/home'){
            res.writeHead(200,{'Content-Type':'text/html'});
            var myReadStream=fs.createReadStream(__dirname+'/index.html','utf-8');
            myReadStream.pipe(res);
        }else if(req.url=='/obj'){
            var myObj={
                'name':'张三',
                'age':21
            }
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify(myObj));
        }else if(req.url=='/404'){
            res.writeHead(404,{'Content-Type':'text/html'});
            var myReadStream=fs.createReadStream(__dirname+'/404.html','utf-8');
            myReadStream.pipe(res);
        }
       
    }).listen(8005);
    console.log('The server has started');
};
exports.startServer=startServer;